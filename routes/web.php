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

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/about', function () { return Inertia::render('About'); })->name('about');
Route::get('/features', function () { return Inertia::render('Features'); })->name('features');
Route::get('/pricing', function () { return Inertia::render('Pricing'); })->name('pricing');
Route::get('/faq', function () { return Inertia::render('FAQ'); })->name('faq');
Route::get('/privacy', function () { return Inertia::render('Privacy'); })->name('privacy');
Route::get('/terms', function () { return Inertia::render('Terms'); })->name('terms');

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
    Route::post('/match/invite', [GameController::class, 'invite'])->name('match.invite');
    Route::post('/match/{id}/accept', [GameController::class, 'acceptInvite'])->name('match.accept');
    Route::post('/match/find', [GameController::class, 'findMatch'])->name('match.find');
    Route::get('/arena/{id}', [GameController::class, 'arena'])->name('arena');
    Route::post('/match/{id}/start', [GameController::class, 'startMatch'])->name('match.start');
    Route::post('/match/{id}/answer', [GameController::class, 'submitAnswer'])->name('match.answer');
    Route::get('/match/{id}/state', [GameController::class, 'getCurrentState'])->name('match.state');
    Route::post('/match/{id}/next', [GameController::class, 'nextQuestion'])->name('match.next');
    
    // Solo Quiz
    Route::post('/quiz/answer', [QuizController::class, 'answer']);
    Route::post('/quiz/generate', [QuizController::class, 'generate'])->name('quiz.generate');
    Route::get('/quiz/category/{id}', [QuizController::class, 'showCategoryQuiz'])->name('quiz.category');

    // Leaderboard
    // Leaderboard
    Route::get('/leaderboard', [LeaderboardController::class, 'index'])->name('leaderboard');

    // Profile
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
});
