<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('questions', function (Blueprint $table) {
            $table->id();
            $table->string('category');
            $table->string('difficulty')->default('medium'); // easy, medium, hard
            $table->text('question_text');
            $table->json('options'); // Array of possible answers
            $table->string('correct_answer');
            $table->boolean('ai_generated')->default(false);
            $table->timestamps();
        });

        Schema::create('matches', function (Blueprint $table) {
            $table->id();
            $table->foreignId('player1_id')->constrained('users');
            $table->foreignId('player2_id')->nullable()->constrained('users');
            $table->foreignId('winner_id')->nullable()->constrained('users');
            $table->string('status')->default('pending'); // pending, active, completed, cancelled
            $table->string('channel_id')->unique(); // For Ably
            $table->timestamps();
        });
        
        Schema::table('users', function (Blueprint $table) {
            $table->integer('points')->default(0);
            $table->integer('wins')->default(0);
            $table->integer('losses')->default(0);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('matches');
        Schema::dropIfExists('questions');
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['points', 'wins', 'losses']);
        });
    }
};
