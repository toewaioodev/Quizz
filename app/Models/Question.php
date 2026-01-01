<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    protected $fillable = [
        'category',
        'difficulty',
        'question_text',
        'options',
        'correct_answer',
        'ai_generated',
        'language',
    ];

    protected $casts = [
        'options' => 'array',
        'ai_generated' => 'boolean',
    ];
}
