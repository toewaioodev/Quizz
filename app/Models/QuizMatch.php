<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuizMatch extends Model
{
    use HasFactory;

    protected $table = 'matches'; 

    protected $fillable = [
        'player1_id',
        'player2_id',
        'winner_id',
        'status',
        'channel_id',
        'current_question_index',
        'questions_sequence',
        'player_scores',
        'last_question_at',
        'round_answers',
    ];

    protected $casts = [
        'questions_sequence' => 'array',
        'player_scores' => 'array',
        'last_question_at' => 'datetime',
        'round_answers' => 'array',
    ];

    public function player1()
    {
        return $this->belongsTo(User::class, 'player1_id');
    }

    public function player2()
    {
        return $this->belongsTo(User::class, 'player2_id');
    }
    
    public function winner()
    {
        return $this->belongsTo(User::class, 'winner_id');
    }
}
