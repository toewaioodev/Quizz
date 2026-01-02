<?php

namespace App\Http\Controllers;

use App\Models\QuizMatch;
use App\Services\AblyService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Inertia\Inertia;

class GameController extends Controller
{
    protected $ablyService;
    protected $gameStateService;

    public function __construct(AblyService $ablyService, \App\Services\GameStateService $gameStateService)
    {
        $this->ablyService = $ablyService;
        $this->gameStateService = $gameStateService;
    }

    public function lobby()
    {
        return Inertia::render('Lobby', [
            'ably_key' => config('services.ably.key'),
        ]);
    }


    public function findMatch(Request $request)
    {
        $user = $request->user();
        
        if ($user->points < 10) {
            return response()->json(['message' => 'You need at least 10 points to battle.'], 403);
        }
        
        // Use an atomic lock to ensure only one person is "Matchmaking" at a time
        // This prevents the race condition where 2 people check "pending" -> find nothing -> both create
        $lock = \Illuminate\Support\Facades\Cache::lock('matchmaking_lock', 10);

        try {
            // Block until lock is acquired (wait up to 5s)
            $lock->block(5);

            // 1. Search for an available match
            $pendingMatch = QuizMatch::where('status', 'pending')
                ->where('player1_id', '!=', $user->id)
                ->where('updated_at', '>=', now()->subMinute())
                ->lockForUpdate() // Still good to lock the row if found
                ->first();

            if ($pendingMatch) {
                $pendingMatch->update([
                    'player2_id' => $user->id,
                    'status' => 'pending_start', 
                ]);
                
                $this->ablyService->publish(
                    "match:{$pendingMatch->channel_id}", 
                    'match-found', 
                    [
                        'match_id' => $pendingMatch->id,
                        'opponent' => $user 
                    ]
                );
                
                // Release lock immediately so others can proceed (e.g. creating their own matches if full)
                $lock->release();

                return response()->json(['match_id' => $pendingMatch->id, 'channel_id' => $pendingMatch->channel_id, 'role' => 'player2']);
            } else {
                // 2. No match found, create one
                // Check if I already have a pending match to avoid spam?
                // Optional optimization: remove my old pending matches
                QuizMatch::where('player1_id', $user->id)
                    ->where('status', 'pending')
                    ->update(['status' => 'cancelled']);

                $match = QuizMatch::create([
                    'player1_id' => $user->id,
                    'status' => 'pending',
                    'channel_id' => Str::uuid(),
                ]);
                
                $lock->release();

                return response()->json(['match_id' => $match->id, 'channel_id' => $match->channel_id, 'role' => 'player1']);
            }

        } catch (\Illuminate\Contracts\Cache\LockTimeoutException $e) {
            return response()->json(['message' => 'Matchmaking is busy, please try again.'], 429);
        } catch (\Exception $e) {
             optional($lock)->release();
             throw $e;
        }
    }

    public function startMatch(Request $request, $id)
    {
        $match = QuizMatch::findOrFail($id);
        
        // Security: only allow if user is part of the match
        if ($match->player1_id !== $request->user()->id && $match->player2_id !== $request->user()->id) {
            abort(403);
        }

        // Only start if not already active to avoid resets
        if ($match->status !== 'active') {
             $this->gameStateService->startGame($match);
        }

        return response()->json(['status' => 'started']);
    }

    /**
     * Submit an answer to the server
     */
    public function submitAnswer(Request $request, $id)
    {
        $request->validate([
            'question_id' => 'required',
            'answer_option' => 'required'
        ]);

        $result = $this->gameStateService->submitAnswer(
            $id,
            $request->user()->id,
            $request->question_id,
            $request->answer_option
        );

        if (isset($result['error'])) {
            return response()->json($result, 400);
        }

        // Check if we should resolve round (if both answered)
        // Simplification: We check DB or memory. 
        // Ideally GameStateService handles this check internally.
        // For this iteration, let's assume we rely on GameStateService->resolveRound 
        // being called if 2 answers are present. 
        // We can check here:
        $match = QuizMatch::find($id);
        // ... Logic to check if 2 people answered this question loop ...
        // Implementing "Wait for both" is complex without a robust state store.
        // OPTION: We just return result. The CLIENTS wait.
        // Once both clients have "Answered", one of them (or both) can request "Resolve"
        // OR simpler: we check here.
        
        return response()->json($result);
    }
    
    public function getCurrentState(Request $request, $id)
    {
        return response()->json($this->gameStateService->getCurrentState($id));
    }

    /**
     * Trigger next question (called by host or both after delay)
     */
    public function nextQuestion(Request $request, $id)
    {
        $match = QuizMatch::findOrFail($id);
        if ($match->player1_id !== $request->user()->id) abort(403); // Only P1 drives for now
        
        $this->gameStateService->triggerNextQuestion($match);
        
        return response()->json(['status' => 'ok']);
    }

    public function arena($id)
    {
        $match = QuizMatch::with(['player1', 'player2'])->findOrFail($id);
        
        return Inertia::render('Arena', [
            'match' => $match,
            'ably_key' => config('services.ably.key'), 
        ]);
    }

}
