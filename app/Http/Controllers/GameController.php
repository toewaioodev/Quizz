<?php

namespace App\Http\Controllers;

use App\Models\QuizMatch;
use App\Services\AblyService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Str;
use Inertia\Inertia;

class GameController extends Controller
{
    protected $ablyService;
    protected $gameStateService;
    protected $matchmakingService;

    public function __construct(
        AblyService $ablyService, 
        \App\Services\GameStateService $gameStateService,
        \App\Services\MatchmakingService $matchmakingService
    ) {
        $this->ablyService = $ablyService;
        $this->gameStateService = $gameStateService;
        $this->matchmakingService = $matchmakingService;
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

        // Delegate to Service
        $result = $this->matchmakingService->findOrCreateMatch($user);
        
        return response()->json($result);
    }

    public function startMatch(Request $request, $id)
    {
        Log::info("startMatch called for Match ID: $id by User: " . $request->user()->id);
        $match = QuizMatch::findOrFail($id);
        
        // Security: only allow if user is part of the match
        if ($match->player1_id !== $request->user()->id && $match->player2_id !== $request->user()->id) {
            Log::warning("Unauthorized start attempt for Match $id");
            abort(403);
        }

        // Only start if not already active to avoid resets
        if ($match->status !== 'active') {
             Log::info("Starting Game via Service for Match $id");
             try {
                $this->gameStateService->startGame($match);
             } catch (\Exception $e) {
                 Log::error("Failed to start game: " . $e->getMessage());
                 return response()->json(['error' => $e->getMessage()], 500);
             }
        } else {
             Log::info("Match $id already active, skipping start.");
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
