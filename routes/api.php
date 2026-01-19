<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ProfileController;
use App\Http\Controllers\Api\GameController;
use App\Http\Controllers\Api\LeaderboardController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Public Routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Profile (Public Read)
Route::get('/profile/{username?}', [ProfileController::class, 'show']);

// Leaderboard (Public Read)
Route::get('/leaderboard', [LeaderboardController::class, 'index']);

// Protected Routes
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);
    
    // Profile (Update)
    Route::post('/profile', [ProfileController::class, 'update']); // Using POST for file upload support

    // Game / Lobby
    Route::get('/users/search', [GameController::class, 'searchUsers']);
    Route::post('/match/find', [GameController::class, 'findMatch']);
    Route::post('/match/invite', [GameController::class, 'invite']);
    Route::post('/match/{id}/accept', [GameController::class, 'acceptInvite']);
    Route::get('/arena/{id}', [GameController::class, 'getArenaState']);

    // Default user route
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});

