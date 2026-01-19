<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\QuizMatch;
use App\Services\AblyService;
use App\Services\GameStateService;
use App\Services\MatchmakingService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class GameController extends Controller
{
    protected $ablyService;
    protected $gameStateService;
    protected $matchmakingService;

    public function __construct(
        AblyService $ablyService, 
        GameStateService $gameStateService,
        MatchmakingService $matchmakingService
    ) {
        $this->ablyService = $ablyService;
        $this->gameStateService = $gameStateService;
        $this->matchmakingService = $matchmakingService;
    }

    /**
     * @OA\Post(
     *      path="/api/match/find",
     *      operationId="findMatch",
     *      tags={"Game"},
     *      summary="Find or create a match",
     *      description="Finds an existing pending match or creates a new one",
     *      security={{"bearerAuth":{}}},
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *       ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden (Not enough points)"
     *      )
     * )
     */
    public function findMatch(Request $request)
    {
        $user = $request->user();
        
        if ($user->points < 10) {
            return response()->json(['message' => 'You need at least 10 points to battle.'], 403);
        }

        $result = $this->matchmakingService->findOrCreateMatch($user);
        
        return response()->json($result);
    }

    /**
     * @OA\Get(
     *      path="/api/users/search",
     *      operationId="searchUsers",
     *      tags={"Game"},
     *      summary="Search users",
     *      description="Search users by name or username",
     *      security={{"bearerAuth":{}}},
     *      @OA\Parameter(
     *          name="query",
     *          description="Search query string",
     *          required=true,
     *          in="query",
     *          @OA\Schema(
     *              type="string"
     *          )
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *       )
     * )
     */
    public function searchUsers(Request $request)
    {
        $query = $request->input('query');
        if (empty($query)) {
            return response()->json([]);
        }

        $users = \App\Models\User::where('name', 'like', "%{$query}%")
            ->orWhere('username', 'like', "%{$query}%")
            ->select('id', 'name', 'username', 'profile_photo_path')
            ->limit(20)
            ->get();
            
        $users->transform(function ($user) {
            return [
                'id' => $user->id,
                'name' => $user->name,
                'username' => $user->username,
                'profile_photo_url' => $user->profile_photo_url,
            ];
        });

        return response()->json($users);
    }

    /**
     * @OA\Post(
     *      path="/api/match/invite",
     *      operationId="inviteUser",
     *      tags={"Game"},
     *      summary="Invite a user to a match",
     *      description="Create a pending match and invite a user",
     *      security={{"bearerAuth":{}}},
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(
     *              required={"user_id"},
     *              @OA\Property(property="user_id", type="integer", example=1),
     *          )
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *       ),
     *      @OA\Response(
     *          response=400,
     *          description="Bad Request"
     *      )
     * )
     */
    public function invite(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
        ]);

        $inviter = $request->user();
        $inviteeId = $request->user_id;

        if ($inviter->id == $inviteeId) {
            return response()->json(['message' => 'You cannot invite yourself.'], 400);
        }

        $match = QuizMatch::create([
            'player1_id' => $inviter->id,
            'status' => 'pending', 
            'channel_id' => Str::uuid(),
        ]);
        
        $this->ablyService->publish("private-user-{$inviteeId}", 'invite', [
            'match_id' => $match->id,
            'inviter_name' => $inviter->name,
            'inviter_id' => $inviter->id,
            'inviter_avatar' => $inviter->profile_photo_url,
        ]);

        return response()->json(['match_id' => $match->id]);
    }

    /**
     * @OA\Post(
     *      path="/api/match/{id}/accept",
     *      operationId="acceptInvite",
     *      tags={"Game"},
     *      summary="Accept a match invite",
     *      description="Join a pending match",
     *      security={{"bearerAuth":{}}},
     *      @OA\Parameter(
     *          name="id",
     *          description="Match ID",
     *          required=true,
     *          in="path",
     *          @OA\Schema(
     *              type="string"
     *          )
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *       ),
     *      @OA\Response(
     *          response=400,
     *          description="Bad Request"
     *      )
     * )
     */
    public function acceptInvite(Request $request, $id)
    {
        $match = QuizMatch::findOrFail($id);
        $user = $request->user();

        if ($match->status !== 'pending') {
             return response()->json(['message' => 'Match is no longer pending.'], 400);
        }
        
        if ($match->player2_id !== null && $match->player2_id !== $user->id) {
             return response()->json(['message' => 'Match is full.'], 400);
        }

        $match->update([
            'player2_id' => $user->id,
            'status' => 'active',
        ]);

        $this->ablyService->publish("private-user-{$match->player1_id}", 'match-accepted', [
            'match_id' => $match->id,
            'opponent_name' => $user->name,
        ]);
        
        try {
            $this->gameStateService->startGame($match);
        } catch (\Exception $e) {
            Log::error("Failed to start game on accept: " . $e->getMessage());
        }

        return response()->json(['status' => 'joined', 'match_id' => $match->id]);
    }

    /**
     * @OA\Get(
     *      path="/api/arena/{id}",
     *      operationId="getArenaState",
     *      tags={"Game"},
     *      summary="Get arena state",
     *      description="Get the current state of a match",
     *      security={{"bearerAuth":{}}},
     *      @OA\Parameter(
     *          name="id",
     *          description="Match ID",
     *          required=true,
     *          in="path",
     *          @OA\Schema(
     *              type="string"
     *          )
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *       )
     * )
     */
    public function getArenaState(Request $request, $id)
    {
        // Simple authorization check
        $match = QuizMatch::where('id', $id)
            ->where(function($q) use ($request) {
                $q->where('player1_id', $request->user()->id)
                  ->orWhere('player2_id', $request->user()->id);
            })->firstOrFail();

        // Get live state from Redis via service
        $state = $this->gameStateService->getCurrentState($id);
        
        // Also provide static match details if needed, but state usually covers it.
        // Returning combined info
        return response()->json(['match' => $match, 'state' => $state]);
    }
}
