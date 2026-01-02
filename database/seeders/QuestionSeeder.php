<?php

namespace Database\Seeders;

use App\Models\Question;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Artisan;

class QuestionSeeder extends Seeder
{
    public function run(): void
    {
        $this->seedFromJSON('en');
        $this->seedFromJSON('my');
    }

    private function seedFromJSON(string $language): void
    {
        $path = database_path("data/{$language}.json");

        if (!File::exists($path)) {
            // If English is missing, try to fetch it
            if ($language === 'en') {
                $this->command->info("Fetching English questions...");
                \Illuminate\Support\Facades\Artisan::call('seed:fetch-questions');
            } else {
                $this->command->warn("Data file for {$language} not found at $path");
                return;
            }
        }

        if (File::exists($path)) {
            $questions = json_decode(File::get($path), true);
            
            if (!$questions) {
                 $this->command->warn("Failed to decode JSON for {$language}");
                 return;
            }

            $count = 0;
            foreach ($questions as $q) {
                // Ensure required fields
                if (!isset($q['category'], $q['difficulty'], $q['question_text'], $q['correct_answer'], $q['options'])) {
                    continue;
                }

                Question::create([
                    'category' => $q['category'],
                    'difficulty' => $q['difficulty'],
                    'question_text' => $q['question_text'],
                    'options' => $q['options'],
                    'correct_answer' => $q['correct_answer'],
                    'language' => $language,
                    'ai_generated' => $q['ai_generated'] ?? false,
                ]);
                $count++;
            }
            $this->command->info("Seeded $count questions for language: $language");
        }
    }
}
