# Quizz - Master the Arena

**Quizz** is a next-generation competitive quiz platform that blends real-time multiplayer battles with AI-generated content. Built for speed and engagement, it allows players to challenge friends or random opponents in 1v1 knowledge battles, climb global leaderboards, and track their progress with detailed statistics.

![Project Banner](public/images/banner.png)
![Project Banner](public/images/banner_2.png)

## 🚀 Key Features

### ⚔️ Real-Time 1v1 Arena

- **Instant Matchmaking**: Find opponents in seconds with our optimized WebSocket-based lobby system.
- **Live Synchronization**: Experience lag-free gameplay powered by **Ably**, where every second counts.
- **Competitive Limits**: Only proven players (10+ points) can enter the Arena to ensure quality matches.

### 🧠 AI-Powered Content

- **Infinite Questions**: Integrated with **Google Gemini AI** to generate unique, high-quality trivia questions on demand.
- **Smart Seeding**: Hybrid database system combining curated real-world questions from OpenTDB with AI-generated localization for infinite variety.
- **Multi-Language**: Fully localized content and questions in **English** and **Burmese**.

### 🏆 Progression & Social

- **Global Leaderboard**: compete for the top spot based on points, wins, and win ratios.
- **Dynamic Scoring**: Earn points for victories, lose them for defeats.
- **User Profiles**: Track your win/loss record and rank.

### 🎨 Modern Experience

- **Dual Theme**: info-rich **Light Mode** for clarity and immersive **Dark Mode** for night sessions.
- **Responsive Design**: A sleek, mobile-first interface built with Tailwind CSS 4.0.
- **Interactive UI**: Smooth animations, glassmorphism effects, and instant feedback.

## 🛠 Tech Stack

### Backend (Laravel 12)

- **Core**: Laravel 12 providing a robust, secure API and foundation.
- **Database**: SQLite (Dev) / MySQL (Prod) optimized with custom queries for speed.
- **Real-time**: Ably for sub-millisecond state synchronization.
- **AI Integration**: Google Gemini API via custom service layer.

### Frontend (React 19)

- **Framework**: React 19 for a high-performance, component-based UI.
- **Routing**: Inertia.js 2.0 for seamless server-side routing with SPA feel.
- **Styling**: Tailwind CSS 4.0 for utility-first, responsive design.
- **Build**: Vite for lightning-fast HMR and production builds.

## 🎮 Game Mechanics

- **Lobby**: The central hub. Chat (coming soon), see active players, and finding matches.
- **The Battle**:
    - **Format**: 1v1, 5 Rounds.
    - **Timer**: 15 seconds per question. Points decay over time.
    - **Scoring**: +10 per correct answer. +50 for winning. -10 for losing.
    - **Endgame**: Instant result calculation and point updates.

## ⚡ Installation & Setup

### Prerequisites

- PHP >= 8.2
- Node.js >= 20
- Composer
- Ably Account & API Key
- Google Gemini API Key

### Step-by-Step Guide

1.  **Clone the Repository**

    ```bash
    git clone https://github.com/toewaioo/Quizz.git
    cd Quizz
    ```

2.  **Install Dependencies**

    ```bash
    composer install
    npm install
    ```

3.  **Environment Configuration**

    ```bash
    cp .env.example .env
    ```

    Edit `.env` and add your keys:

    ```ini
    DB_CONNECTION=sqlite
    ABLY_KEY=your_ably_key_here
    GEMINI_API_KEY=your_gemini_key_here
    ```

4.  **Initialize Application**

    ```bash
    php artisan key:generate
    touch database/database.sqlite
    php artisan migrate
    ```

5.  **Seed Question Database**
    Fetch diverse real-world questions to jumpstart your database:

    ```bash
    php artisan seed:fetch-questions
    php artisan db:seed --class=QuestionSeeder
    ```

6.  **Run Development Server**
    ```bash
    composer run dev
    ```
    Visit `http://localhost:8000` to start playing!

## 📂 Project Architecture

- **`app/Http/Controllers/GameController.php`**: The brain of the operation. Handles matchmaking logic, point calculations, and lobby enforcement.
- **`app/Services/AblyService.php`**: Abstraction layer for real-time messaging.
- **`resources/js/pages/Arena.tsx`**: The main game component. Handles state sync, timers, and UI interactions during battle.
- **`database/data/*.json`**: Local repositories for question seeding.

## 📄 License

Open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
