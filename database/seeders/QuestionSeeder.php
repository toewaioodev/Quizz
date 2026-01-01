<?php

namespace Database\Seeders;

use App\Models\Question;
use Illuminate\Database\Seeder;

class QuestionSeeder extends Seeder
{
    public function run(): void
    {
        $questions = [
            // Science
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'What is the chemical symbol for Gold?',
                'options' => ['Au', 'Ag', 'Fe', 'Cu'],
                'correct_answer' => 'Au',
            ],
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'Which planet is known as the Red Planet?',
                'options' => ['Mars', 'Venus', 'Jupiter', 'Saturn'],
                'correct_answer' => 'Mars',
            ],
             [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'What is the powerhouse of the cell?',
                'options' => ['Mitochondria', 'Nucleus', 'Ribosome', 'Endoplasmic Reticulum'],
                'correct_answer' => 'Mitochondria',
            ],

            // History
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'Who was the first President of the United States?',
                'options' => ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln', 'John Adams'],
                'correct_answer' => 'George Washington',
            ],
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'In which year did World War II end?',
                'options' => ['1945', '1939', '1944', '1950'],
                'correct_answer' => '1945',
            ],
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'Who painted the Mona Lisa?',
                'options' => ['Leonardo da Vinci', 'Michelangelo', 'Raphael', 'Donatello'],
                'correct_answer' => 'Leonardo da Vinci',
            ],

            // Math
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'What is the value of Pi (approx)?',
                'options' => ['3.14', '3.15', '3.16', '3.13'],
                'correct_answer' => '3.14',
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'What is 15 * 15?',
                'options' => ['225', '200', '250', '215'],
                'correct_answer' => '225',
            ],
             [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'What is the square root of 64?',
                'options' => ['8', '6', '7', '9'],
                'correct_answer' => '8',
            ],
            
            // Geography
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'What is the capital of France?',
                'options' => ['Paris', 'London', 'Berlin', 'Madrid'],
                'correct_answer' => 'Paris',
            ],
             [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'Which is the largest ocean on Earth?',
                'options' => ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
                'correct_answer' => 'Pacific Ocean',
            ],
        ];

        foreach ($questions as $q) {
            Question::create($q);
        }
    }
}
