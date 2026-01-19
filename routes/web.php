<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\GameController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\LeaderboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AblyController;

 Route::get('/welcome', function () {
        return Inertia::render('welcome');
    })->name('welcome');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');
Route::get('/features', function () {
    return Inertia::render('Features');
})->name('features');
Route::get('/pricing', function () {
    return Inertia::render('Pricing');
})->name('pricing');
Route::get('/faq', function () {
    return Inertia::render('FAQ');
})->name('faq');
Route::get('/privacy', function () {
    return Inertia::render('Privacy');
})->name('privacy');
Route::get('/terms', function () {
    return Inertia::render('Terms');
})->name('terms');

// Guest Routes

Route::get('/u/{identifier}', [ProfileController::class, 'show'])->name('profile.public');

Route::middleware('guest')->group(function () {
    Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
    Route::post('/login', [AuthController::class, 'login']);
    Route::get('/register', [AuthController::class, 'showRegister'])->name('register');
    Route::post('/register', [AuthController::class, 'register']);
   
});


// Authenticated Routes
Route::middleware(['auth'])->group(function () {

    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
    Route::get('/', [AuthController::class, 'dashboard'])->name('home');
    Route::get('/lobby', [GameController::class, 'lobby'])->name('lobby');
    Route::post('/match/invite', [GameController::class, 'invite'])->name('match.invite');
    Route::post('/match/{id}/accept', [GameController::class, 'acceptInvite'])->name('match.accept');
    Route::post('/match/find', [GameController::class, 'findMatch'])->name('match.find');
    Route::get('/arena/{id}', [GameController::class, 'arena'])->name('arena');
    Route::post('/match/{id}/start', [GameController::class, 'startMatch'])->name('match.start');
    Route::post('/match/{id}/answer', [GameController::class, 'submitAnswer'])->name('match.answer');
    Route::get('/match/{id}/state', [GameController::class, 'getCurrentState'])->name('match.state');
    Route::post('/match/{id}/next', [GameController::class, 'nextQuestion'])->name('match.next');
    Route::post('/match/{id}/rematch', [GameController::class, 'rematch'])->name('match.rematch');
    Route::get('/users/search', [GameController::class, 'searchUsers'])->name('users.search');

    // Solo Quiz
    Route::post('/quiz/answer', [QuizController::class, 'answer']);
    Route::post('/quiz/generate', [QuizController::class, 'generate'])->name('quiz.generate');
    Route::get('/quiz/category/{id}', [QuizController::class, 'showCategoryQuiz'])->name('quiz.category');

    // Leaderboard
    // Leaderboard
    Route::get('/leaderboard', [LeaderboardController::class, 'index'])->name('leaderboard');

    // Ably Auth
    Route::get('/ably/auth', [AblyController::class, 'auth'])->name('ably.auth');

    // Profile
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
});

Route::get('/debug-s3', function () {
    try {
        $disk = \Illuminate\Support\Facades\Storage::disk('supabase');
        // Try listing files to check connectivity/path
        $files = $disk->files(''); 
        
        $disk->put('debug.txt', 'Test content ' . now());
        $url = $disk->url('debug.txt');
        
        $configBucket = config('filesystems.disks.supabase.bucket');
        $warning = null;
        if (str_contains($configBucket, '/')) {
            $warning = "⚠️ POTENTIAL ERROR: Your bucket name '$configBucket' contains slashes. It should NOT be a path. It should be just the name (e.g., 'avatars').";
        }

        return [
            'message' => 'Upload attempted',
            'warning' => $warning,
            'url' => $url,
            'files_in_bucket_root' => $files,
            'config_bucket' => $configBucket,
            'config_endpoint' => config('filesystems.disks.supabase.endpoint'),
            'config_region' => config('filesystems.disks.supabase.region'),
        ];
    } catch (\Exception $e) {
        return "Error: " . $e->getMessage() . "<br>Trace: " . $e->getTraceAsString();
    }
});
