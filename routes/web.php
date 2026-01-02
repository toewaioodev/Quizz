<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

use App\Http\Controllers\AuthController;
use App\Http\Controllers\GameController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\LeaderboardController;
use App\Http\Controllers\ProfileController;

// Route::get('/', function () {
//     return Inertia::render('welcome');
// })->name('home');

// Guest Routes

Route::middleware('guest')->group(function () {
    Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
    Route::post('/login', [AuthController::class, 'login']);
    Route::get('/register', [AuthController::class, 'showRegister'])->name('register');
    Route::post('/register', [AuthController::class, 'register']);
});


// Authenticated Routes
Route::middleware(['auth'])->group(function () {
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
    Route::get('/dashboard', [AuthController::class, 'dashboard'])->name('dashboard');

    Route::get('/lobby', [GameController::class, 'lobby'])->name('lobby');
    Route::post('/match/find', [GameController::class, 'findMatch'])->name('match.find');
    Route::get('/arena/{id}', [GameController::class, 'arena'])->name('arena');
    Route::post('/match/end', [GameController::class, 'endMatch'])->name('match.end');
    
    // Solo Quiz
    Route::post('/quiz/answer', [QuizController::class, 'answer']);
    Route::post('/quiz/generate', [QuizController::class, 'generate'])->name('quiz.generate');

    // Leaderboard
    // Leaderboard
    Route::get('/leaderboard', [LeaderboardController::class, 'index'])->name('leaderboard');

    // Profile
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
});
