<?php

namespace App\Services;


use Illuminate\Support\Facades\Log;

class AiService
{
    protected $client;

    public function __construct()
    {
        $apiKey = config('services.gemini.api_key');
        
        if (!$apiKey) {
            throw new \Exception('Gemini API Key is missing. Please set GEMINI_API_KEY in your .env file.');
        }

        $this->client = \Gemini::client($apiKey);
    }

    public function generateQuestion($topic = 'General Knowledge', $difficulty = 'medium')
    {
        $prompt = "Generate a single multiple-choice quiz question about '{$topic}' with difficulty '{$difficulty}'. 
        Return ONLY valid JSON in this exact format, no markdown formatting:
        {
            \"question_text\": \"The question?\",
            \"options\": [\"Option A\", \"Option B\", \"Option C\", \"Option D\"],
            \"correct_answer\": \"Option A\"
        }";

        try {
           $result = $this->client->generativeModel(model: 'gemini-2.0-flash')->generateContent($prompt);
            $text = $result->text();
            // Clean up markdown code blocks if present
            $text = str_replace('```json', '', $text);
            $text = str_replace('```', '', $text);
            
            return json_decode(trim($text), true);

        } catch (\Exception $e) {
            Log::error('AI Service Error: ' . $e->getMessage());
            return null;
        }
    }
}
