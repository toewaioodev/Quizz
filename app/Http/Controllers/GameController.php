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
        
        return DB::transaction(function () use ($user) {
            // Lock the table or specific rows to prevent race conditions
            // We search for a pending match with lock
            $pendingMatch = QuizMatch::lockForUpdate()
                ->where('status', 'pending')
                ->where('player1_id', '!=', $user->id)
                ->where('updated_at', '>=', now()->subMinute())
                ->first();

            if ($pendingMatch) {
                // Double check status just in case (though lock handles it)
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

                return response()->json(['match_id' => $pendingMatch->id, 'channel_id' => $pendingMatch->channel_id, 'role' => 'player2']);
            } else {
                // No pending match found, create one
                // We don't need to lock for creation, but since we're in a transaction 
                // and we didn't find one, we are safe to create.
                $match = QuizMatch::create([
                    'player1_id' => $user->id,
                    'status' => 'pending',
                    'channel_id' => Str::uuid(),
                ]);

                return response()->json(['match_id' => $match->id, 'channel_id' => $match->channel_id, 'role' => 'player1']);
            }
        });
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
