<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\File;

class FetchTriviaQuestions extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'seed:fetch-questions';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Fetch trivia questions from Open Trivia DB API and save to JSON';

    /**
     * Category mapping from OpenTDB ID to our Category Name
     */
    protected $categories = [
        19 => 'Mathematics',
        17 => 'Science', // Science & Nature
        23 => 'History',
        22 => 'Geography',
        18 => 'Technology', // Computers
        25 => 'Arts & Lit', // Art
        9  => 'General Knowledge',
    ];

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $allQuestions = [];
        $client = Http::baseUrl('https://opentdb.com/api.php');

        $this->info('Starting to fetch questions from OpenTDB...');

        foreach ($this->categories as $id => $name) {
            $this->info("Fetching questions for category: $name (ID: $id)");
            
            // We want ~100 questions. API limit is 50 per call.
            // We'll fetch 40 Easy, 30 Medium, 30 Hard to be safe and balanced.
            
            $batchEasy = $this->fetchBatch($client, $id, 40, 'easy', $name);
            $batchMedium = $this->fetchBatch($client, $id, 30, 'medium', $name);
            $batchHard = $this->fetchBatch($client, $id, 30, 'hard', $name);

            $categoryQuestions = array_merge($batchEasy, $batchMedium, $batchHard);
            
            // Limit to exactly 100 if we got more
            $categoryQuestions = array_slice($categoryQuestions, 0, 100);

            $this->info("Fetched " . count($categoryQuestions) . " questions for $name.");
            
            $allQuestions = array_merge($allQuestions, $categoryQuestions);
            
            // Be nice to the API
            sleep(2);
        }

        // Save to file
        $path = database_path('data/en.json');
        File::put($path, json_encode($allQuestions, JSON_PRETTY_PRINT));

        $this->info("Successfully saved " . count($allQuestions) . " questions to $path");
    }

    private function fetchBatch($client, $categoryId, $amount, $difficulty, $categoryName)
    {
        $attempts = 0;
        $maxAttempts = 3;

        while ($attempts < $maxAttempts) {
            try {
                $response = $client->get('', [
                    'amount' => $amount,
                    'category' => $categoryId,
                    'difficulty' => $difficulty,
                    'type' => 'multiple',
                ]);

                if ($response->successful()) {
                    $data = $response->json();
                    
                    if ($data['response_code'] === 0) {
                         return array_map(function ($item) use ($categoryName, $difficulty) {
                            $text = html_entity_decode($item['question'], ENT_QUOTES | ENT_HTML5);
                            $correct = html_entity_decode($item['correct_answer'], ENT_QUOTES | ENT_HTML5);
                            $incorrect = array_map(function($opt) {
                                return html_entity_decode($opt, ENT_QUOTES | ENT_HTML5);
                            }, $item['incorrect_answers']);

                            $options = array_merge([$correct], $incorrect);
                            shuffle($options);

                            return [
                                'category' => $categoryName,
                                'difficulty' => $difficulty,
                                'question_text' => $text,
                                'options' => $options,
                                'correct_answer' => $correct,
                                'language' => 'en',
                                'ai_generated' => false,
                            ];
                        }, $data['results']);
                    } elseif ($data['response_code'] === 1) {
                         // No results. Try asking for fewer questions if amount > 10
                         if ($amount > 10) {
                             $amount = floor($amount / 2);
                             $this->warn("Reducing amount to $amount for $categoryName ($difficulty) and retrying...");
                             continue;
                         }
                         $this->warn("No questions found for $categoryName ($difficulty).");
                         return [];
                    } elseif ($data['response_code'] === 5) {
                        // Rate limit
                         $this->warn("Rate limited. Waiting 5 seconds...");
                         sleep(5);
                         continue;
                    }
                }
            } catch (\Exception $e) {
                $this->error("Exception: " . $e->getMessage());
            }

            $attempts++;
            sleep(2);
        }

        return [];
    }
}
