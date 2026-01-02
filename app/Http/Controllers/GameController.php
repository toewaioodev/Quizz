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

    public function __construct(AblyService $ablyService)
    {
        $this->ablyService = $ablyService;
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
        
        // Simple matchmaking logic: Find a pending match or create one
        // FIX: Only look for matches created/updated in the last 60 seconds to avoid 'ghost' matches
        $pendingMatch = QuizMatch::where('status', 'pending')
            ->where('player1_id', '!=', $user->id)
            ->where('updated_at', '>=', now()->subMinute())
            ->first();

        if ($pendingMatch) {
            $pendingMatch->update([
                'player2_id' => $user->id,
                'status' => 'active',
            ]);
            
            // Notify player 1 via Ably
            $this->ablyService->publish(
                "match:{$pendingMatch->channel_id}", 
                'match-found', 
                [
                    'match_id' => $pendingMatch->id,
                    'opponent' => $user // sending player 2 details to player 1
                ]
            );

            return response()->json(['match_id' => $pendingMatch->id, 'channel_id' => $pendingMatch->channel_id, 'role' => 'player2']);
        } else {
            $match = QuizMatch::create([
                'player1_id' => $user->id,
                'status' => 'pending',
                'channel_id' => Str::uuid(),
            ]);

            return response()->json(['match_id' => $match->id, 'channel_id' => $match->channel_id, 'role' => 'player1']);
        }
    }

    public function arena($id)
    {
        $match = QuizMatch::with(['player1', 'player2'])->findOrFail($id);
        
        return Inertia::render('Arena', [
            'match' => $match,
            'ably_key' => config('services.ably.key'), // Pass key explicitly or handle via token auth
        ]);
    }

    public function endMatch(Request $request)
    {
        $request->validate([
            'match_id' => 'required|exists:matches,id',
            'winner_id' => 'nullable|exists:users,id',
        ]);

        $match = QuizMatch::findOrFail($request->match_id);
        
        // Prevent double processing
        if ($match->status === 'completed') {
             return response()->json(['message' => 'Match already completed']);
        }

        $match->update([
            'status' => 'completed',
            'winner_id' => $request->winner_id,
        ]);

        // Points Logic
        // Points Logic
        if ($request->winner_id) {
            // Update Winner: efficiently update points and wins in one query without fetching the model
            \App\Models\User::where('id', $request->winner_id)->update([
                'points' => DB::raw('points + 50'),
                'wins' => DB::raw('wins + 1')
            ]);

            // Find Loser
            $loserId = ($match->player1_id == $request->winner_id) ? $match->player2_id : $match->player1_id;
            if ($loserId) {
                // Update Loser: efficiently update points and losses in one query
                \App\Models\User::where('id', $loserId)->update([
                    'points' => DB::raw('points - 10'),
                    'losses' => DB::raw('losses + 1')
                ]);
            }
        } else {
             // Draw scenario (optional: give small points to both)
        }

        return response()->json(['message' => 'Match ended successfully']);
    }
}
