<?php

namespace App\Services;

use App\Models\QuizMatch;
use App\Models\User;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class MatchmakingService
{
    protected $ablyService;
    protected $gameStateService;

    public function __construct(AblyService $ablyService, GameStateService $gameStateService)
    {
        $this->ablyService = $ablyService;
        $this->gameStateService = $gameStateService;
    }

    /**
     * Find an available match from the Redis queue or create a new one.
     * 
     * @param User $user
     * @return array
     */
    public function findOrCreateMatch(User $user): array
    {
        Log::info("MatchmakingService: User {$user->id} searching for match.");
        $attempts = 0;
        $maxAttempts = 5;
        
        while ($attempts < $maxAttempts) {
            $attempts++;
            
            // Atomic Pop from Redis Queue
            $pendingMatchId = Redis::lpop('pending_matches');
            Log::info("MatchmakingService: Popped Match ID: " . ($pendingMatchId ?? 'NULL'));
            
            if ($pendingMatchId) {
                // Check if match exists and is valid
                $pendingMatch = QuizMatch::find($pendingMatchId);
                
                // Conditions: Exists, Pending, Not Me, Not Stale (< 60s)
                if ($pendingMatch && 
                    $pendingMatch->status === 'pending' && 
                    $pendingMatch->player1_id !== $user->id &&
                    $pendingMatch->created_at->diffInSeconds(now()) < 60
                ) {
                    Log::info("MatchmakingService: Found valid match {$pendingMatch->id}. Joining.");
                    // JOIN IT
                    $pendingMatch->update([
                        'player2_id' => $user->id,
                        'status' => 'active', // Set to active immediately as we are starting
                    ]);
                    
                    // Notify clients match is found (visual)
                    $this->ablyService->publish(
                        "match:{$pendingMatch->channel_id}", 
                        'match-found', 
                        [
                            'match_id' => $pendingMatch->id,
                            'opponent' => $user 
                        ]
                    );

                    // Server-Authoritative Start
                    // We call startGame immediately. 
                    // Note: This might block the response slightly but ensures reliability.
                    Log::info("MatchmakingService: Auto-starting Match {$pendingMatch->id}");
                    $this->gameStateService->startGame($pendingMatch);
                    
                    return [
                        'match_id' => $pendingMatch->id, 
                        'channel_id' => $pendingMatch->channel_id, 
                        'role' => 'player2'
                    ];
                }
                
                // If invalid (stale, self, taken), loop again.
                // Note: If it was 'self', we just popped our own stale match, which is fine to discard.
            } else {
                Log::info("MatchmakingService: Queue empty. Creating new match.");
                // Queue is empty, Create New Match
                return $this->createMatch($user);
            }
        }
        
        Log::warning("MatchmakingService: Max attempts reached.");
        // Fallback if max attempts reached
        return $this->createMatch($user);
    }

    protected function createMatch(User $user): array
    {
        Log::info("MatchmakingService: Creating new match for User {$user->id}");
        $match = QuizMatch::create([
            'player1_id' => $user->id,
            'status' => 'pending',
            'channel_id' => Str::uuid(),
        ]);
        
        // Push to Redis Queue
        Redis::rpush('pending_matches', $match->id);
        Log::info("MatchmakingService: Pushed Match {$match->id} to Redis queue.");

        return [
            'match_id' => $match->id, 
            'channel_id' => $match->channel_id, 
            'role' => 'player1'
        ];
    }
}
