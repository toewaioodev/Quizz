<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class LeaderboardController extends Controller
{
    /**
     * @OA\Get(
     *      path="/api/leaderboard",
     *      operationId="getLeaderboard",
     *      tags={"Leaderboard"},
     *      summary="Get leaderboard",
     *      description="Returns top players",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *       )
     * )
     */
    public function index()
    {
        $users = User::orderByDesc('points')
            ->orderByDesc('wins')
            ->take(50)
            ->get(['id', 'name', 'points', 'wins', 'losses', 'profile_photo_path']);

        // Transform if necessary to ensure clean JSON, especially for photo URLs
        $users->transform(function ($user) {
            return [
                'id' => $user->id,
                'name' => $user->name,
                'points' => $user->points,
                'wins' => $user->wins,
                'losses' => $user->losses,
                // Ensure absolute URL if needed, although accessors usually handle it
                'profile_photo_url' => $user->profile_photo_url, 
            ];
        });

        return response()->json($users);
    }
}
