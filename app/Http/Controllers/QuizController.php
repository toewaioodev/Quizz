<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\Request;

class QuizController extends Controller
{
    public function generate(Request $request)
    {
        $request->validate([
            'topic' => 'nullable|string',
            'difficulty' => 'nullable|string',
            'language' => 'nullable|string|in:en,my',
        ]);

        $topic = $request->input('topic');
        $difficulty = $request->input('difficulty', 'medium');
        $language = $request->input('language', 'en');

        $query = Question::query();

        // Filter by language
        $query->where('language', $language);

        if ($topic) {
            // Simple mapping or direct search. For now direct search.
            // In future could map frontend topic IDs to DB categories.
            // e.g. 'math' -> 'Mathematics', 'science' -> 'Science'
            $categoryMap = [
                'math' => 'Mathematics',
                'science' => 'Science',
                'history' => 'History',
                'geo' => 'Geography',
                'tech' => 'Technology',
                'arts' => 'Arts & Lit',
            ];

            if (isset($categoryMap[strtolower($topic)])) {
                 $query->where('category', $categoryMap[strtolower($topic)]);
            } elseif ($topic !== 'General Knowledge') {
                 $query->where('category', $topic);
            }
        }

        if ($difficulty) {
            $query->where('difficulty', $difficulty);
        }

        $question = $query->inRandomOrder()->first();

        // Fallback if no question found in selected language, try fallback to English if not already English
        if (!$question && $language !== 'en') {
             $fallbackQuery = Question::query()->where('language', 'en');
             if ($topic) {
                 if (isset($categoryMap[strtolower($topic)])) {
                     $fallbackQuery->where('category', $categoryMap[strtolower($topic)]);
                 } elseif ($topic !== 'General Knowledge') {
                     $fallbackQuery->where('category', $topic);
                 }
             }
             if ($difficulty) {
                 $fallbackQuery->where('difficulty', $difficulty);
             }
             $question = $fallbackQuery->inRandomOrder()->first();
        }

        // Final fallback to any question
        if (!$question) {
            $question = Question::inRandomOrder()->first();
        }

        if (!$question) {
             return response()->json(['error' => 'No questions found in database.'], 404);
        }

        return response()->json($question);
    }

    public function answer(Request $request)
    {
        $request->validate([
            'question_id' => 'required|exists:questions,id',
            'selected_option' => 'required|string',
        ]);

        $question = \App\Models\Question::findOrFail($request->question_id);
        $isCorrect = $question->correct_answer === $request->selected_option;
        $user = $request->user();
        $pointsEarned = 0;

        if ($isCorrect) {
            $pointsEarned = 10;
            $user->increment('points', $pointsEarned);
        }

        return response()->json([
            'correct' => $isCorrect,
            'correct_answer' => $question->correct_answer,
            'points_earned' => $pointsEarned,
            'new_total_points' => $user->points
        ]);
    }
}
