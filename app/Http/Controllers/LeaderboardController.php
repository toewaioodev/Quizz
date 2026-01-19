<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;
use Inertia\Inertia;

class LeaderboardController extends Controller
{
    public function index()
    {
        $users = User::orderByDesc('points')
            ->orderByDesc('wins')
            ->take(50)
            ->get(['id', 'name','username', 'points', 'wins', 'losses', 'profile_photo_path']);

        return Inertia::render('Leaderboard/Index', [
            'users' => $users
        ]);
    }
}
