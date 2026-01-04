<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class QuizController extends Controller
{
    public function generate(Request $request)
    {
        $request->validate([
            'topic' => 'nullable|string',
            'difficulty' => 'nullable|string',
            'language' => 'nullable|string',
        ]);

        $topic = $request->input('topic');
        $difficulty = $request->input('difficulty', 'medium');
        // We now filter essentially by 'en' because all bilingual rows are 'en' base.
        // But for backward compatibility if we had separate rows, we can keep it loose or just ignore 'my'.
        // Since we migrated to single row, let's just query normally. If language is 'my', we still want the row which is technically 'en'.
        // So we might remove the strict language check or default it to 'en' for the DB query.
        
        $query = Question::query();

        // Since all bilingual questions are stored with language='en' but have my_ fields,
        // we essentially always want to query for 'en' records if the requested language is 'my'.
        // Or simply remove the language constraint if we only have one dataset. 
        // Let's force 'en' query if 'my' is requested, as the row contains both.
        $query->where('language', 'en'); 

        // Exclude answered questions using subquery for performance
        $userId = $request->user()->id;
        
        $query->whereNotExists(function ($subquery) use ($userId) {
            $subquery->select(DB::raw(1))
                     ->from('user_answers')
                     ->whereColumn('user_answers.question_id', 'questions.id')
                     ->where('user_answers.user_id', $userId);
        });

        if ($topic) {
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

        if (!$question) {
            // If no question found, try removing difficulty filter
            if ($difficulty) {
                 $query->withoutGlobalScopes()->where('difficulty', '!=', $difficulty);
                 // Reset query parts if needed... actually simpler to just re-query or return 404.
                 // Let's just return 404 for now to be strict, or random.
            }
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

        // Record the answer
        \App\Models\UserAnswer::create([
            'user_id' => $user->id,
            'question_id' => $question->id,
            'is_correct' => $isCorrect,
        ]);

        return response()->json([
            'correct' => $isCorrect,
            'correct_answer' => $question->correct_answer,
            'points_earned' => $pointsEarned,
            'new_total_points' => $user->points
        ]);
    }
    public function showCategoryQuiz($categoryId)
    {
        $categoryMap = [
            'math' => 'Mathematics',
            'science' => 'Science',
            'history' => 'History',
            'geo' => 'Geography',
            'tech' => 'Technology',
            'arts' => 'Arts & Lit',
        ];

        $categoryName = $categoryMap[$categoryId] ?? ucfirst($categoryId);

        return \Inertia\Inertia::render('Quiz/CategoryQuiz', [
            'categoryId' => $categoryId,
            'categoryName' => $categoryName,
        ]);
    }
}
