<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProfileController extends Controller
{
    /**
     * Get profile data (public or own)
     */
    /**
     * @OA\Get(
     *      path="/api/profile/{username}",
     *      operationId="getProfile",
     *      tags={"Profile"},
     *      summary="Get user profile",
     *      description="Returns user profile data and match history",
     *      security={{"bearerAuth":{}}},
     *      @OA\Parameter(
     *          name="username",
     *          description="User's username (optional, defaults to current user)",
     *          required=false,
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
     *          response=404,
     *          description="User not found"
     *      )
     * )
     */
    public function show(Request $request, $username = null)
    {
        if ($username) {
            $user = User::where('username', $username)->first();
            if (!$user && is_numeric($username)) {
                $user = User::find($username); // Fallback to ID
            }
            if (!$user) {
                return response()->json(['message' => 'User not found'], 404);
            }
        } else {
            $user = $request->user();
        }

        // Logic reused from Web ProfileController
        $history = \App\Models\QuizMatch::where('player1_id', $user->id)
            ->orWhere('player2_id', $user->id)
            ->with(['player1', 'player2', 'winner'])
            ->where('status', 'completed')
            ->orderBy('created_at', 'desc')
            ->take(5)
            ->get()
            ->map(function ($match) use ($user) {
                $isPlayer1 = $match->player1_id === $user->id;
                $opponent = $isPlayer1 ? $match->player2 : $match->player1;
                
                return [
                    'id' => $match->id,
                    'opponent' => $opponent ? [
                        'name' => $opponent->name,
                        'avatar' => $opponent->profile_photo_url,
                        'username' => $opponent->username,
                    ] : null,
                    'result' => $match->winner_id === $user->id ? 'win' : ($match->winner_id ? 'loss' : 'draw'),
                    'date' => $match->created_at->toIso8601String(), // ISO format for API
                    'score' => $match->player_scores,
                ];
            });

        $level = floor($user->points / 100) + 1;
        $rank = User::where('points', '>', $user->points)->count() + 1;

        return response()->json([
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'username' => $user->username,
                'profile_photo_url' => $user->profile_photo_url,
                'points' => $user->points,
                'wins' => $user->wins,
                'losses' => $user->losses,
                'level' => $level,
                'rank' => $rank,
                'settings' => $user->settings,
            ],
            'history' => $history,
        ]);
    }

    /**
     * Update profile
     */
    /**
     * @OA\Post(
     *      path="/api/profile",
     *      operationId="updateProfile",
     *      tags={"Profile"},
     *      summary="Update profile",
     *      description="Update user profile data and avatar",
     *      security={{"bearerAuth":{}}},
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\MediaType(
     *              mediaType="multipart/form-data",
     *              @OA\Schema(
     *                  @OA\Property(property="username", type="string", example="newusername"),
     *                  @OA\Property(property="photo", type="string", format="binary"), 
     *                  @OA\Property(property="settings[difficulty]", type="string", enum={"easy", "medium", "hard"}),
     *              )
     *          )
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *       ),
     *      @OA\Response(
     *          response=422,
     *          description="Validation Error"
     *      )
     * )
     */
    public function update(Request $request)
    {
        $request->validate([
            'settings' => 'nullable|array',
            'settings.difficulty' => 'nullable|string|in:easy,medium,hard',
            'photo' => 'nullable|image|max:2048',
            'username' => 'nullable|string|max:255|unique:users,username,' . $request->user()->id,
        ]);

        $user = $request->user();

        if ($request->has('username')) {
            $user->username = $request->input('username');
        }

        if ($request->hasFile('photo')) {
            $file = $request->file('photo');
            $filename = 'avatars/' . $file->hashName();
            $result = app(\App\Services\SupabaseStorage::class)->uploadFile($filename, file_get_contents($file->getPathname()), $file->getMimeType());

            if ($result['success']) {
                $user->profile_photo_path = $result['url'];
            } else {
                 return response()->json(['message' => 'Failed to upload photo: ' . ($result['message'] ?? 'Unknown error')], 500);
            }
        }

        if ($request->has('settings')) {
            $settings = $user->settings ?? [];
            $settings = array_merge($settings, $request->input('settings'));
            $user->settings = $settings;
        }

        $user->save();

        return response()->json([
            'message' => 'Profile updated successfully',
            'user' => $user,
        ]);
    }
}
