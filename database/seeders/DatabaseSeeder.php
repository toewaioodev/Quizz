<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        $this->call(GeneralKnowledgeQuestionSeeder::class);
        $this->call(ArtsLitQuestionSeeder::class);
        $this->call(ScienceQuestionSeeder::class);
        $this->call(GeographyQuestionSeeder::class);
        $this->call(HistoryQuestionSeeder::class);
        $this->call(MathQuestionSeeder::class);
        $this->call(TechnologyQuestionSeeder::class);
    }
}
