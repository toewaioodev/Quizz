<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request)
    {
        $user = $request->user();
        
        $history = \App\Models\QuizMatch::where('player1_id', $user->id)
            ->orWhere('player2_id', $user->id)
            ->with(['player1', 'player2', 'winner'])
            ->orderBy('created_at', 'desc')
            ->take(10)
            ->get()
            ->map(function ($match) use ($user) {
                $isPlayer1 = $match->player1_id === $user->id;
                $opponent = $isPlayer1 ? $match->player2 : $match->player1;
                
                return [
                    'id' => $match->id,
                    'opponent' => $opponent ? [
                        'name' => $opponent->name,
                        'avatar' => $opponent->profile_photo_url,
                    ] : null,
                    'result' => $match->winner_id === $user->id ? 'win' : ($match->winner_id ? 'loss' : 'draw'), // or pending
                    'date' => $match->created_at->diffForHumans(),
                    'score' => $match->player_scores ? 
                        ($isPlayer1 
                            ? ($match->player_scores['p1'] ?? 0) . ' - ' . ($match->player_scores['p2'] ?? 0)
                            : ($match->player_scores['p2'] ?? 0) . ' - ' . ($match->player_scores['p1'] ?? 0)
                        ) : '0 - 0',
                ];
            });

        return Inertia::render('Profile/Show', [
            'status' => session('status'),
            'history' => $history,
            'stats' => [
                'total_games' => $user->wins + $user->losses, // Approximate if we don't track draws separately yet
                'wins' => $user->wins,
                'losses' => $user->losses,
                'points' => $user->points,
            ]
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(Request $request)
    {
        $request->validate([
            'settings' => 'nullable|array',
            'settings.difficulty' => 'nullable|string|in:easy,medium,hard',
            'photo_url' => 'nullable|url|max:2048',
        ]);

        $user = $request->user();
        
        if ($request->has('photo_url')) {
            $user->profile_photo_path = $request->input('photo_url');
        }

        if ($request->has('settings')) {
            $settings = $user->settings ?? [];
            $settings = array_merge($settings, $request->input('settings'));
            $user->settings = $settings;
        }

        $user->save();

        return Redirect::route('profile.edit')->with('status', 'profile-updated');
    }
}
