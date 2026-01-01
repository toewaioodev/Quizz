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
            ->take(10)
            ->get(['id', 'name', 'points', 'wins', 'losses']);

        return Inertia::render('Leaderboard/Index', [
            'users' => $users
        ]);
    }
}
