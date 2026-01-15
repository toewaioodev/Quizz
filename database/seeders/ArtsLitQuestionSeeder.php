<?php

namespace Database\Seeders;

use App\Models\Question;
use Illuminate\Database\Seeder;

class ArtsLitQuestionSeeder extends Seeder
{
    public function run(): void
    {
        $questions = [
            // --- Easy (35 Questions) ---
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'Who wrote "Romeo and Juliet"?',
                'question_text_my' => '"ရိုမီယိုနှင့် ဂျူးလိယက်" ကို ရေးသားခဲ့သူမှာ...',
                'options' => ['Dickens', 'Shakespeare', 'Hemingway', 'Austen'],
                'options_my' => ['ဒစ်ကင်း', 'ရှိတ်စပီးယား', 'ဟဲမင်းဝေး', 'အော်စတင်'],
                'correct_answer' => 'Shakespeare',
                'language' => 'en'
            ], //
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'Who painted "The Starry Night"?',
                'question_text_my' => '"The Starry Night" ပန်းချီကားကို ရေးဆွဲခဲ့သူမှာ...',
                'options' => ['Picasso', 'Van Gogh', 'Da Vinci', 'Monet'],
                'options_my' => ['ပက်ကက်ဆို', 'ဗန်ဂိုး', 'ဒါဗင်ချီ', 'မိုနက်'],
                'correct_answer' => 'Van Gogh',
                'language' => 'en'
            ], //
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'What color do you get by mixing red and white?',
                'question_text_my' => 'အနီနှင့် အဖြူ ရောလိုက်လျှင် ဘာအရောင်ရသနည်း။',
                'options' => ['Pink', 'Purple', 'Orange', 'Brown'],
                'options_my' => ['ပန်းရောင်', 'ခရမ်းရောင်', 'လိမ္မော်ရောင်', 'အညိုရောင်'],
                'correct_answer' => 'Pink',
                'language' => 'en'
            ], //
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'Who is the King of Pop?',
                'question_text_my' => 'King of Pop ဟု လူသိများသူမှာ...',
                'options' => ['Elvis', 'Michael Jackson', 'Prince', 'Madonna'],
                'options_my' => ['အဲလ်ဗစ်', 'မိုက်ကယ်ဂျက်ဆင်', 'ပရင့်စ်', 'မက်ဒေါနား'],
                'correct_answer' => 'Michael Jackson',
                'language' => 'en'
            ], //
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'A Haiku typically has how many syllables?',
                'question_text_my' => 'ဟိုင်ကူကဗျာတွင် ပုံမှန်အားဖြင့် အသံထွက် (syllables) မည်မျှပါသနည်း။',
                'options' => ['15', '17', '19', '21'],
                'options_my' => ['၁၅', '၁၇', '၁၉', '၂၁'],
                'correct_answer' => '17',
                'language' => 'en'
            ], //
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'What is the color of an emerald?',
                'question_text_my' => 'မြ ၏ အရောင်မှာ...',
                'options' => ['Red', 'Blue', 'Green', 'Yellow'],
                'options_my' => ['အနီ', 'အပြာ', 'အစိမ်း', 'အဝါ'],
                'correct_answer' => 'Green',
                'language' => 'en'
            ], //
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'Which instrument is blown into?',
                'question_text_my' => 'မှုတ်ရသော တူရိယာမှာ...',
                'options' => ['Trumpet', 'Drum', 'Violin', 'Piano'],
                'options_my' => ['ထရမ်ပက်', 'ဒရမ်', 'တယော', 'စန္ဒရား'],
                'correct_answer' => 'Trumpet',
                'language' => 'en'
            ], //
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'Who wrote "Hamlet"?',
                'question_text_my' => '"Hamlet" ပြဇာတ်ကို ရေးသားခဲ့သူမှာ...',
                'options' => ['Shakespeare', 'Marlowe', 'Jonson', 'Bacon'],
                'options_my' => ['ရှိတ်စပီးယား', 'မာလို', 'ဂျွန်ဆင်', 'ဘေကွန်'],
                'correct_answer' => 'Shakespeare',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'What does a painter use to hold paints?',
                'question_text_my' => 'ပန်းချီဆရာ ဆေးရောင်ထည့်သော အရာကို ဘာခေါ်သနည်း။',
                'options' => ['Easel', 'Palette', 'Canvas', 'Brush'],
                'options_my' => ['အီးဇယ်', 'Palette (ဆေးစပ်ပြား)', 'ပတ္တူ', 'စုတ်တံ'],
                'correct_answer' => 'Palette',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'Who painted the Mona Lisa?',
                'question_text_my' => 'မိုနာလီဇာကို ရေးဆွဲခဲ့သူမှာ...',
                'options' => ['Picasso', 'Da Vinci', 'Van Gogh', 'Rembrandt'],
                'options_my' => ['ပက်ကက်ဆို', 'ဒါဗင်ချီ', 'ဗန်ဂိုး', 'ရမ်ဘရန့်'],
                'correct_answer' => 'Da Vinci',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'Which fairy tale character lost a glass slipper?',
                'question_text_my' => 'ဖန်ဖိနပ်လေး ကျွတ်ကျန်ရစ်ခဲ့သော ပုံပြင်ဇာတ်ကောင်မှာ...',
                'options' => ['Snow White', 'Cinderella', 'Aurora', 'Belle'],
                'options_my' => ['စနိုးဝိုက်', 'စင်ဒရဲလား', 'အော်ရိုရာ', 'ဘဲလ်'],
                'correct_answer' => 'Cinderella',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'What color is mixed with yellow to make green?',
                'question_text_my' => 'အစိမ်းရောင်ရရန် အဝါရောင်နှင့် ဘာရောရသနည်း။',
                'options' => ['Red', 'Blue', 'White', 'Black'],
                'options_my' => ['အနီ', 'အပြာ', 'အဖြူ', 'အနက်'],
                'correct_answer' => 'Blue',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'Which instrument has strings?',
                'question_text_my' => 'ကြိုးတပ်တူရိယာမှာ...',
                'options' => ['Drum', 'Flute', 'Guitar', 'Trumpet'],
                'options_my' => ['ဒရမ်', 'ပလွေ', 'ဂစ်တာ', 'ထရမ်ပက်'],
                'correct_answer' => 'Guitar',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'Who is the author of "Harry Potter"?',
                'question_text_my' => '"Harry Potter" စာရေးဆရာမှာ...',
                'options' => ['Tolkien', 'Rowling', 'Lewis', 'Dahl'],
                'options_my' => ['တော်ကီး', 'ရိုးလင်း', 'လူးဝစ်', 'ဒေါလ်'],
                'correct_answer' => 'Rowling',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'Ballet is a type of...',
                'question_text_my' => 'ဘဲလေး (Ballet) သည် ... အမျိုးအစားဖြစ်သည်။',
                'options' => ['Music', 'Dance', 'Painting', 'Poetry'],
                'options_my' => ['ဂီတ', 'အက', 'ပန်းချီ', 'ကဗျာ'],
                'correct_answer' => 'Dance',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'What is a poem with 14 lines called?',
                'question_text_my' => 'စာကြောင်း ၁၄ ကြောင်းပါသော ကဗျာကို ဘာခေါ်သနည်း။',
                'options' => ['Haiku', 'Sonnet', 'Limerick', 'Epic'],
                'options_my' => ['ဟိုင်ကူ', 'Sonnet', 'Limerick', 'Epic'],
                'correct_answer' => 'Sonnet',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'Who sings "Hello"?',
                'question_text_my' => '"Hello" သီချင်းကို သီဆိုသူမှာ...',
                'options' => ['Adele', 'Beyonce', 'Rihanna', 'Taylor Swift'],
                'options_my' => ['အဒဲလ်', 'ဘီယွန်းဆေး', 'ရီဟားနား', 'တေလာဆွစ်'],
                'correct_answer' => 'Adele',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'Primary colors are Red, Blue and...',
                'question_text_my' => 'အဓိကအရောင် (Primary colors) များမှာ အနီ၊ အပြာ နှင့်...',
                'options' => ['Green', 'Yellow', 'Purple', 'Orange'],
                'options_my' => ['အစိမ်း', 'အဝါ', 'ခရမ်း', 'လိမ္မော်'],
                'correct_answer' => 'Yellow',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'The Oscar awards are for...',
                'question_text_my' => 'အော်စကာဆုသည် ... အတွက်ဖြစ်သည်။',
                'options' => ['Music', 'Movies', 'Books', 'Sports'],
                'options_my' => ['ဂီတ', 'ရုပ်ရှင်', 'စာအုပ်', 'အားကစား'],
                'correct_answer' => 'Movies',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'Who wrote "Green Eggs and Ham"?',
                'question_text_my' => '"Green Eggs and Ham" ကို ရေးသားသူမှာ...',
                'options' => ['Dr. Seuss', 'Roald Dahl', 'Disney', 'Grimm'],
                'options_my' => ['Dr. Seuss', 'ရိုးဒေါလ်', 'ဒစ္စနေး', 'ဂရင်မ်'],
                'correct_answer' => 'Dr. Seuss',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'Which material do sculptors use?',
                'question_text_my' => 'ပန်းပုဆရာများ သုံးသော ပစ္စည်းမှာ...',
                'options' => ['Canvas', 'Clay', 'Watercolor', 'Ink'],
                'options_my' => ['ပတ္တူ', 'ရွှံ့စေး', 'ရေဆေး', 'မင်'],
                'correct_answer' => 'Clay',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'Bollywood is based in which country?',
                'question_text_my' => 'ဘောလိဝုဒ်သည် မည်သည့်နိုင်ငံတွင် ရှိသနည်း။',
                'options' => ['USA', 'India', 'China', 'UK'],
                'options_my' => ['အမေရိကန်', 'အိန္ဒိယ', 'တရုတ်', 'ဗြိတိန်'],
                'correct_answer' => 'India',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'A group of musicians playing together is an...',
                'question_text_my' => 'ဂီတသမားများ စုပေါင်းတီးခတ်ခြင်းကို ... ဟုခေါ်သည်။',
                'options' => ['Audience', 'Orchestra', 'Choir', 'Solo'],
                'options_my' => ['ပရိသတ်', 'သံစုံတီးဝိုင်း', 'သံပြိုင်အဖွဲ့', 'တစ်ကိုယ်တော်'],
                'correct_answer' => 'Orchestra',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'Who painted the ceiling of the Sistine Chapel?',
                'question_text_my' => 'Sistine Chapel ၏ မျက်နှာကြက်ကို ပန်းချီဆွဲခဲ့သူမှာ...',
                'options' => ['Raphael', 'Michelangelo', 'Donatello', 'Leonardo'],
                'options_my' => ['ရာဖေးလ်', 'မိုက်ကယ်အိန်ဂျလို', 'ဒေါနတဲလို', 'လီယိုနာဒို'],
                'correct_answer' => 'Michelangelo',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'What is the highest voice type for females?',
                'question_text_my' => 'အမျိုးသမီးများအတွက် အမြင့်ဆုံး အသံအမျိုးအစားမှာ...',
                'options' => ['Alto', 'Soprano', 'Tenor', 'Bass'],
                'options_my' => ['အော်တို', 'ဆိုပရာနို', 'တယော', 'ဘေ့စ်'],
                'correct_answer' => 'Soprano',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'Jazz music originated in...',
                'question_text_my' => 'Jazz ဂီတ စတင်ခဲ့သော နေရာမှာ...',
                'options' => ['London', 'New Orleans', 'Paris', 'Berlin'],
                'options_my' => ['လန်ဒန်', 'နယူးအော်လင်း', 'ပဲရစ်', 'ဘာလင်'],
                'correct_answer' => 'New Orleans',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'Which animal is Bambi?',
                'question_text_my' => 'Bambi သည် မည်သည့်တိရစ္ဆာန်ဖြစ်သနည်း။',
                'options' => ['Rabbit', 'Deer', 'Bear', 'Fox'],
                'options_my' => ['ယုန်', 'သမင်', 'ဝက်ဝံ', 'မြေခွေး'],
                'correct_answer' => 'Deer',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'Who wrote "Oliver Twist"?',
                'question_text_my' => '"Oliver Twist" ကို ရေးသားခဲ့သူမှာ...',
                'options' => ['Twain', 'Dickens', 'Poe', 'Verne'],
                'options_my' => ['တွိန်း', 'ဒစ်ကင်း', 'ပို', 'ဗန်း'],
                'correct_answer' => 'Dickens',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'Which instrument has black and white keys?',
                'question_text_my' => 'အဖြူနှင့် အမည်း ခလုတ်များပါသော တူရိယာမှာ...',
                'options' => ['Guitar', 'Piano', 'Violin', 'Drum'],
                'options_my' => ['ဂစ်တာ', 'စန္ဒရား', 'တယော', 'ဒရမ်'],
                'correct_answer' => 'Piano',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'What is the main language of Bollywood movies?',
                'question_text_my' => 'ဘောလိဝုဒ် ရုပ်ရှင်များ၏ အဓိကဘာသာစကားမှာ...',
                'options' => ['English', 'Hindi', 'Tamil', 'French'],
                'options_my' => ['အင်္ဂလိပ်', 'ဟိန္ဒီ', 'တမီလ်', 'ပြင်သစ်'],
                'correct_answer' => 'Hindi',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'Who lives in a pineapple under the sea?',
                'question_text_my' => 'ပင်လယ်အောက် နာနတ်သီးအိမ်ထဲ နေသူမှာ...',
                'options' => ['Patrick', 'SpongeBob', 'Squidward', 'Sandy'],
                'options_my' => ['ပက်ထရစ်', 'SpongeBob', 'Squidward', 'ဆန္ဒီ'],
                'correct_answer' => 'SpongeBob',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'Which superhero is Peter Parker?',
                'question_text_my' => 'Peter Parker သည် မည်သည့် စူပါဟီးရိုးဖြစ်သနည်း။',
                'options' => ['Batman', 'Superman', 'Spider-Man', 'Iron Man'],
                'options_my' => ['ဘတ်မန်း', 'စူပါမန်း', 'စင့်ပိုက်ဒါမန်း', 'အိုင်းယွန်းမန်း'],
                'correct_answer' => 'Spider-Man',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'A tripod is used for...',
                'question_text_my' => 'Tripod ကို ... အတွက် သုံးသည်။',
                'options' => ['Painting', 'Photography', 'Sculpting', 'Dancing'],
                'options_my' => ['ပန်းချီ', 'ဓာတ်ပုံ', 'ပန်းပု', 'အက'],
                'correct_answer' => 'Photography',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'Who painted Campbell\'s Soup Cans?',
                'question_text_my' => 'Campbell\'s Soup Cans ပန်းချီကို ဆွဲခဲ့သူမှာ...',
                'options' => ['Warhol', 'Pollock', 'Dali', 'Picasso'],
                'options_my' => ['ဝါဟော', 'ပိုလော့ခ်', 'ဒါလီ', 'ပက်ကက်ဆို'],
                'correct_answer' => 'Warhol',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'Reggae music comes from...',
                'question_text_my' => 'ရက်ဂေးဂီတ လာရာအရပ်မှာ...',
                'options' => ['USA', 'Jamaica', 'UK', 'Brazil'],
                'options_my' => ['အမေရိကန်', 'ဂျမေကာ', 'ဗြိတိန်', 'ဘရာဇီး'],
                'correct_answer' => 'Jamaica',
                'language' => 'en'
            ],

            // --- Medium (35 Questions) ---
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'Which musical instrument has 88 keys?',
                'question_text_my' => 'ခလုတ် ၈၈ ခုပါသော ဂီတတူရိယာမှာ...',
                'options' => ['Guitar', 'Violin', 'Piano', 'Flute'],
                'options_my' => ['ဂစ်တာ', 'တယော', 'စန္ဒရား', 'ပလွေ'],
                'correct_answer' => 'Piano',
                'language' => 'en'
            ], //
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'Who wrote the "Harry Potter" series?',
                'question_text_my' => '"Harry Potter" စီးရီးကို ရေးသားခဲ့သူမှာ...',
                'options' => ['J.K. Rowling', 'J.R.R. Tolkien', 'C.S. Lewis', 'Roald Dahl'],
                'options_my' => ['J.K. Rowling', 'J.R.R. Tolkien', 'C.S. Lewis', 'Roald Dahl'],
                'correct_answer' => 'J.K. Rowling',
                'language' => 'en'
            ], //
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'Which is a Japanese style of comics?',
                'question_text_my' => 'ဂျပန်ကာတွန်း စတိုင်ကို ဘာခေါ်သနည်း။',
                'options' => ['Manga', 'Manhwa', 'Comic', 'Graphic Novel'],
                'options_my' => ['မန်ဂါ', 'မန်ဟွာ', 'ကောမစ်', 'ဂရပ်ဖစ်နိုဗယ်'],
                'correct_answer' => 'Manga',
                'language' => 'en'
            ], //
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'The Mona Lisa has no...',
                'question_text_my' => 'မိုနာလီဇာတွင် မပါရှိသော အရာမှာ...',
                'options' => ['Eyebrows', 'Smile', 'Hair', 'Hands'],
                'options_my' => ['မျက်ခုံးမွှေး', 'အပြုံး', 'ဆံပင်', 'လက်'],
                'correct_answer' => 'Eyebrows',
                'language' => 'en'
            ], //
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'Which novel features a white whale?',
                'question_text_my' => 'ဝေလငါးဖြူကြီး ပါဝင်သော ဝတ္ထုမှာ...',
                'options' => ['Moby Dick', 'Jaws', 'Free Willy', 'The Old Man and the Sea'],
                'options_my' => ['Moby Dick', 'Jaws', 'Free Willy', 'The Old Man and the Sea'],
                'correct_answer' => 'Moby Dick',
                'language' => 'en'
            ], //
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'What does "Renaissance" mean?',
                'question_text_my' => '"Renaissance" ၏ အဓိပ္ပါယ်မှာ...',
                'options' => ['Rebirth', 'Revolution', 'Reform', 'Return'],
                'options_my' => ['ပြန်လည်မွေးဖွားခြင်း', 'တော်လှန်ရေး', 'ပြုပြင်ပြောင်းလဲရေး', 'ပြန်လာခြင်း'],
                'correct_answer' => 'Rebirth',
                'language' => 'en'
            ], //
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'Origami is the art of...',
                'question_text_my' => 'အိုရိဂါမိ သည် ... အနုပညာဖြစ်သည်။',
                'options' => ['Paper folding', 'Flower arranging', 'Painting', 'Calligraphy'],
                'options_my' => ['စက္ကူခေါက်ခြင်း', 'ပန်းအလှဆင်ခြင်း', 'ပန်းချီ', 'လက်ရေးလှ'],
                'correct_answer' => 'Paper folding',
                'language' => 'en'
            ], //
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'Who wrote "Pride and Prejudice"?',
                'question_text_my' => '"Pride and Prejudice" ကို ရေးသားခဲ့သူမှာ...',
                'options' => ['Jane Austen', 'Charlotte Bronte', 'Emily Dickinson', 'Virginia Woolf'],
                'options_my' => ['ဂျိန်းအော်စတင်', 'ရှားလော့ဘရွန်တီ', 'အမ်မလီဒစ်ကင်ဆန်', 'ဗာဂျီးနီးယားဝုဖ်'],
                'correct_answer' => 'Jane Austen',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'Which artist cut off his own ear?',
                'question_text_my' => 'မိမိနားကို ဖြတ်ခဲ့သော ပန်းချီဆရာမှာ...',
                'options' => ['Picasso', 'Van Gogh', 'Monet', 'Dali'],
                'options_my' => ['ပက်ကက်ဆို', 'ဗန်ဂိုး', 'မိုနက်', 'ဒါလီ'],
                'correct_answer' => 'Van Gogh',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'What is the highest-grossing film of all time (as of 2023)?',
                'question_text_my' => 'ဝင်ငွေအများဆုံးရုပ်ရှင် (၂၀၂၃ အထိ) မှာ...',
                'options' => ['Titanic', 'Avatar', 'Avengers', 'Star Wars'],
                'options_my' => ['တိုင်တန်းနစ်', 'အဗာတာ', 'အဗင်ဂျာ', 'စတားဝါး'],
                'correct_answer' => 'Avatar',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'Who wrote "The Lord of the Rings"?',
                'question_text_my' => '"The Lord of the Rings" ကို ရေးသားခဲ့သူမှာ...',
                'options' => ['C.S. Lewis', 'Tolkien', 'Martin', 'Rowling'],
                'options_my' => ['လူးဝစ်', 'တော်ကီး', 'မာတင်', 'ရိုးလင်း'],
                'correct_answer' => 'Tolkien',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'Which city is famous for its film festival "Cannes"?',
                'question_text_my' => '"Cannes" ရုပ်ရှင်ပွဲတော် ကျင်းပသော မြို့သည် မည်သည့်နိုင်ငံတွင်ရှိသနည်း။',
                'options' => ['Italy', 'France', 'USA', 'Germany'],
                'options_my' => ['အီတလီ', 'ပြင်သစ်', 'အမေရိကန်', 'ဂျာမနီ'],
                'correct_answer' => 'France',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'Who is the Greek God of Music?',
                'question_text_my' => 'ဂရိ ဂီတနတ်ဘုရားမှာ...',
                'options' => ['Zeus', 'Apollo', 'Hermes', 'Dionysus'],
                'options_my' => ['ဇု', 'အပိုလို', 'ဟာမိစ်', 'ဒိုင်ယိုနီးဆပ်'],
                'correct_answer' => 'Apollo',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'Which painter is famous for melting clocks?',
                'question_text_my' => 'နာရီများအရည်ပျော်ကျနေပုံ ပန်းချီဖြင့် ကျော်ကြားသူမှာ...',
                'options' => ['Dali', 'Picasso', 'Warhol', 'Magritte'],
                'options_my' => ['ဒါလီ', 'ပက်ကက်ဆို', 'ဝါဟော', 'မက်ဂရစ်'],
                'correct_answer' => 'Dali',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'In which city is the Louvre Museum?',
                'question_text_my' => 'Louvre ပြတိုက်ကြီး ရှိသောမြို့မှာ...',
                'options' => ['London', 'Rome', 'Paris', 'New York'],
                'options_my' => ['လန်ဒန်', 'ရောမ', 'ပဲရစ်', 'နယူးယောက်'],
                'correct_answer' => 'Paris',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'Who wrote "The Hobbit"?',
                'question_text_my' => '"The Hobbit" ကို ရေးသားခဲ့သူမှာ...',
                'options' => ['Rowling', 'Tolkien', 'Lewis', 'Pullman'],
                'options_my' => ['ရိုးလင်း', 'တော်ကီး', 'လူးဝစ်', 'ပူးလ်မန်း'],
                'correct_answer' => 'Tolkien',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'Which band sang "Yesterday"?',
                'question_text_my' => '"Yesterday" သီချင်းကို သီဆိုခဲ့သော အဖွဲ့မှာ...',
                'options' => ['Queen', 'The Beatles', 'Rolling Stones', 'ABBA'],
                'options_my' => ['ကွင်း', 'ဘီတဲလ်', 'Rolling Stones', 'ABBA'],
                'correct_answer' => 'The Beatles',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'Frankenstein was written by...',
                'question_text_my' => 'Frankenstein ကို ရေးသားခဲ့သူမှာ...',
                'options' => ['Mary Shelley', 'Bram Stoker', 'H.G. Wells', 'Poe'],
                'options_my' => ['မေရီရှယ်လီ', 'ဘရမ်စတိုကာ', 'ဝဲလ်', 'ပို'],
                'correct_answer' => 'Mary Shelley',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'Which dance originated in Argentina?',
                'question_text_my' => 'အာဂျင်တီးနားမှ စတင်ခဲ့သော အကမှာ...',
                'options' => ['Salsa', 'Tango', 'Flamenco', 'Waltz'],
                'options_my' => ['ဆာဆာ', 'တန်ဂို', 'ဖလာမင်ဂို', 'ဝေါ့'],
                'correct_answer' => 'Tango',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'The character "Sherlock Holmes" plays which instrument?',
                'question_text_my' => 'ရှားလော့ဟုမ်း တီးခတ်သော တူရိယာမှာ...',
                'options' => ['Piano', 'Violin', 'Flute', 'Guitar'],
                'options_my' => ['စန္ဒရား', 'တယော', 'ပလွေ', 'ဂစ်တာ'],
                'correct_answer' => 'Violin',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'Who wrote "To Kill a Mockingbird"?',
                'question_text_my' => '"To Kill a Mockingbird" ကို ရေးသားခဲ့သူမှာ...',
                'options' => ['Harper Lee', 'Mark Twain', 'Steinbeck', 'Fitzgerald'],
                'options_my' => ['ဟာပါလီ', 'မတ်တွိန်း', 'စတိန်းဘက်', 'ဖစ်ဂျရယ်'],
                'correct_answer' => 'Harper Lee',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'Which period came before the Renaissance?',
                'question_text_my' => 'Renaissance ခေတ်မတိုင်မီ ခေတ်မှာ...',
                'options' => ['Modern', 'Middle Ages', 'Baroque', 'Romantic'],
                'options_my' => ['ခေတ်သစ်', 'အလယ်ခေတ်', 'ဘာရော့', 'ရိုမန်းတစ်'],
                'correct_answer' => 'Middle Ages',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'Who painted "The Last Supper"?',
                'question_text_my' => '"The Last Supper" ပန်းချီကားကို ရေးဆွဲခဲ့သူမှာ...',
                'options' => ['Da Vinci', 'Michelangelo', 'Raphael', 'Donatello'],
                'options_my' => ['ဒါဗင်ချီ', 'မိုက်ကယ်အိန်ဂျလို', 'ရာဖေးလ်', 'ဒေါနတဲလို'],
                'correct_answer' => 'Da Vinci',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'Which poet wrote "The Raven"?',
                'question_text_my' => '"The Raven" ကဗျာကို ရေးသားခဲ့သူမှာ...',
                'options' => ['Poe', 'Frost', 'Whitman', 'Dickinson'],
                'options_my' => ['ပို', 'ဖရော့စ်', 'ဝစ်မန်း', 'ဒစ်ကင်ဆန်'],
                'correct_answer' => 'Poe',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'What is the Japanese art of flower arrangement?',
                'question_text_my' => 'ဂျပန် ပန်းအလှဆင်နည်းပညာကို ဘာခေါ်သနည်း။',
                'options' => ['Ikebana', 'Origami', 'Sushi', 'Haiku'],
                'options_my' => ['Ikebana', 'အိုရိဂါမိ', 'ဆူရှီ', 'ဟိုင်ကူ'],
                'correct_answer' => 'Ikebana',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'Who is the famous street artist known only by a pseudonym?',
                'question_text_my' => 'အမည်ဝှက်ဖြင့်သာ လူသိများသော ကျော်ကြားသည့် လမ်းဘေးပန်းချီဆရာမှာ...',
                'options' => ['Banksy', 'Haring', 'Basquiat', 'Warhol'],
                'options_my' => ['ဘန်ကစီ', 'ဟဲရင်း', 'ဘတ်စ်ကီယတ်', 'ဝါဟော'],
                'correct_answer' => 'Banksy',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'Which key signature has no sharps or flats?',
                'question_text_my' => 'Sharp သို့မဟုတ် Flat မပါသော Key signature မှာ...',
                'options' => ['C Major', 'G Major', 'F Major', 'D Major'],
                'options_my' => ['C Major', 'G Major', 'F Major', 'D Major'],
                'correct_answer' => 'C Major',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'Who wrote "Les Miserables"?',
                'question_text_my' => '"Les Miserables" ကို ရေးသားခဲ့သူမှာ...',
                'options' => ['Victor Hugo', 'Balzac', 'Dumas', 'Flaubert'],
                'options_my' => ['ဗစ်တာဟူးဂိုး', 'ဘော်ဇက်', 'ဒူးမား', 'ဖလောဘတ်'],
                'correct_answer' => 'Victor Hugo',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'What style of painting used small dots?',
                'question_text_my' => 'အစက်ကလေးများသုံးပြီး ရေးဆွဲသော ပန်းချီစတိုင်မှာ...',
                'options' => ['Cubism', 'Pointillism', 'Realism', 'Surrealism'],
                'options_my' => ['Cubism', 'Pointillism', 'Realism', 'Surrealism'],
                'correct_answer' => 'Pointillism',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'Which character is a wooden puppet?',
                'question_text_my' => 'သစ်သားရုပ်သေးရုပ်ဖြစ်သော ဇာတ်ကောင်မှာ...',
                'options' => ['Pinocchio', 'Peter Pan', 'Aladdin', 'Tarzan'],
                'options_my' => ['ပီနိုခီယို', 'ပီတာပန်', 'အာလာဒင်', 'တာဇံ'],
                'correct_answer' => 'Pinocchio',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'The "Thinker" statue was made by...',
                'question_text_my' => '"Thinker" ရုပ်တုကို ပြုလုပ်ခဲ့သူမှာ...',
                'options' => ['Rodin', 'Michelangelo', 'Donatello', 'Bernini'],
                'options_my' => ['ရိုဒင်', 'မိုက်ကယ်အိန်ဂျလို', 'ဒေါနတဲလို', 'ဘာနီနီ'],
                'correct_answer' => 'Rodin',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'Who wrote "Dracula"?',
                'question_text_my' => '"Dracula" ကို ရေးသားခဲ့သူမှာ...',
                'options' => ['Bram Stoker', 'Shelley', 'Poe', 'Lovecraft'],
                'options_my' => ['ဘရမ်စတိုကာ', 'ရှယ်လီ', 'ပို', 'Lovecraft'],
                'correct_answer' => 'Bram Stoker',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'K-Pop comes from which country?',
                'question_text_my' => 'K-Pop သည် မည်သည့်နိုင်ငံမှ လာသနည်း။',
                'options' => ['Japan', 'China', 'South Korea', 'Thailand'],
                'options_my' => ['ဂျပန်', 'တရုတ်', 'တောင်ကိုရီးယား', 'ထိုင်း'],
                'correct_answer' => 'South Korea',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'Who painted "Girl with a Pearl Earring"?',
                'question_text_my' => '"Girl with a Pearl Earring" ကို ရေးဆွဲခဲ့သူမှာ...',
                'options' => ['Vermeer', 'Rembrandt', 'Van Gogh', 'Monet'],
                'options_my' => ['ဗာမီးယား', 'ရမ်ဘရန့်', 'ဗန်ဂိုး', 'မိုနက်'],
                'correct_answer' => 'Vermeer',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'Which instrument is part of the percussion family?',
                'question_text_my' => 'Percussion (တီးခတ်ရသော) တူရိယာအမျိုးအစားမှာ...',
                'options' => ['Flute', 'Violin', 'Drum', 'Trumpet'],
                'options_my' => ['ပလွေ', 'တယော', 'ဒရမ်', 'ထရမ်ပက်'],
                'correct_answer' => 'Drum',
                'language' => 'en'
            ],

            // --- Hard (30 Questions) ---
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'hard',
                'question_text' => 'Who wrote "1984"?',
                'question_text_my' => '"1984" ဝတ္ထုကို ရေးသားခဲ့သူမှာ...',
                'options' => ['Orwell', 'Huxley', 'Bradbury', 'Tolkien'],
                'options_my' => ['အော်ဝဲလ်', 'ဟက်စလေ', 'ဘရက်ဘူရီ', 'တော်ကီး'],
                'correct_answer' => 'Orwell',
                'language' => 'en'
            ], //
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'hard',
                'question_text' => 'Who sculpted David?',
                'question_text_my' => 'David ရုပ်တုကို ထုလုပ်ခဲ့သူမှာ...',
                'options' => ['Donatello', 'Michelangelo', 'Raphael', 'Leonardo'],
                'options_my' => ['ဒေါနတဲလို', 'မိုက်ကယ်အိန်ဂျလို', 'ရာဖေးလ်', 'လီယိုနာဒို'],
                'correct_answer' => 'Michelangelo',
                'language' => 'en'
            ], //
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'hard',
                'question_text' => 'Who wrote "The Great Gatsby"?',
                'question_text_my' => '"The Great Gatsby" ကို ရေးသားခဲ့သူမှာ...',
                'options' => ['Fitzgerald', 'Hemingway', 'Steinbeck', 'Faulkner'],
                'options_my' => ['ဖစ်ဂျရယ်', 'ဟဲမင်းဝေး', 'စတိန်းဘက်', 'ဖော်ခနား'],
                'correct_answer' => 'Fitzgerald',
                'language' => 'en'
            ], //
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'hard',
                'question_text' => 'Who painted "The Scream"?',
                'question_text_my' => '"The Scream" ပန်းချီကားကို ရေးဆွဲခဲ့သူမှာ...',
                'options' => ['Munch', 'Dali', 'Monet', 'Warhol'],
                'options_my' => ['မန့်ချ်', 'ဒါလီ', 'မိုနက်', 'ဝါဟော'],
                'correct_answer' => 'Munch',
                'language' => 'en'
            ], //
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'hard',
                'question_text' => 'Who wrote "War and Peace"?',
                'question_text_my' => '"စစ်နှင့် ငြိမ်းချမ်းရေး" ကို ရေးသားခဲ့သူမှာ...',
                'options' => ['Tolstoy', 'Dostoevsky', 'Chekhov', 'Gogol'],
                'options_my' => ['တော်စတွိုင်း', 'ဒေါစတိုယက်စကီး', 'ချက်ကော့', 'ဂိုဂေါ'],
                'correct_answer' => 'Tolstoy',
                'language' => 'en'
            ], //
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'hard',
                'question_text' => 'Who is the author of "Sherlock Holmes"?',
                'question_text_my' => 'ရှားလော့ဟုမ်း ကို ရေးသားခဲ့သူမှာ...',
                'options' => ['Conan Doyle', 'Agatha Christie', 'Poe', 'King'],
                'options_my' => ['ကိုနန် ဒွိုင်း', 'အဂါသာ ခရစ္စတီ', 'ပို', 'ကင်း'],
                'correct_answer' => 'Conan Doyle',
                'language' => 'en'
            ], //
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'hard',
                'question_text' => 'Who painted "Guernica"?',
                'question_text_my' => '"Guernica" ပန်းချီကို ဆွဲခဲ့သူမှာ...',
                'options' => ['Picasso', 'Dali', 'Goya', 'Miro'],
                'options_my' => ['ပက်ကက်ဆို', 'ဒါလီ', 'ဂွိုင်းယား', 'မီရို'],
                'correct_answer' => 'Picasso',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'hard',
                'question_text' => 'What is the oldest surviving musical instrument?',
                'question_text_my' => 'ရှေးအကျဆုံး တူရိယာမှာ...',
                'options' => ['Drum', 'Flute', 'Lyre', 'Harp'],
                'options_my' => ['ဒရမ်', 'ပလွေ', 'လိုက်ယာ', 'စောင်း'],
                'correct_answer' => 'Flute',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'hard',
                'question_text' => 'Which author wrote "The Catcher in the Rye"?',
                'question_text_my' => '"The Catcher in the Rye" ကို ရေးသားခဲ့သူမှာ...',
                'options' => ['Salinger', 'Kerouac', 'Capote', 'Updike'],
                'options_my' => ['ဆလင်ဂျာ', 'ကီရူအက်', 'ကပိုတီ', 'အပ်ဒိုက်'],
                'correct_answer' => 'Salinger',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'hard',
                'question_text' => 'Who composed the "Moonlight Sonata"?',
                'question_text_my' => '"Moonlight Sonata" ကို ရေးစပ်ခဲ့သူမှာ...',
                'options' => ['Beethoven', 'Mozart', 'Bach', 'Chopin'],
                'options_my' => ['ဘီသိုဗင်', 'မိုဇတ်', 'ဘခ်', 'ချိုပန်'],
                'correct_answer' => 'Beethoven',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'hard',
                'question_text' => 'What art movement did Salvador Dali belong to?',
                'question_text_my' => 'Salvador Dali သည် မည်သည့်အနုပညာလှုပ်ရှားမှုတွင် ပါဝင်သနည်း။',
                'options' => ['Cubism', 'Surrealism', 'Impressionism', 'Dada'],
                'options_my' => ['Cubism', 'Surrealism', 'Impressionism', 'Dada'],
                'correct_answer' => 'Surrealism',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'hard',
                'question_text' => 'Who wrote "Ulysses"?',
                'question_text_my' => '"Ulysses" ကို ရေးသားခဲ့သူမှာ...',
                'options' => ['Joyce', 'Yeats', 'Beckett', 'Wilde'],
                'options_my' => ['ဂျွိုက်စ်', 'ယိတ်စ်', 'ဘက်ကက်', 'ဝိုင်းလ်'],
                'correct_answer' => 'Joyce',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'hard',
                'question_text' => 'Who composed "The Four Seasons"?',
                'question_text_my' => '"The Four Seasons" ကို ရေးစပ်ခဲ့သူမှာ...',
                'options' => ['Vivaldi', 'Verdi', 'Puccini', 'Rossini'],
                'options_my' => ['ဗီဗာဒီ', 'ဗာဒီ', 'ပူချီနီ', 'ရိုစီနီ'],
                'correct_answer' => 'Vivaldi',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'hard',
                'question_text' => 'Who wrote the play "Waiting for Godot"?',
                'question_text_my' => '"Waiting for Godot" ပြဇာတ်ကို ရေးသားခဲ့သူမှာ...',
                'options' => ['Beckett', 'Sartre', 'Camus', 'Pinter'],
                'options_my' => ['ဘက်ကက်', 'ဆာ့ထရ်', 'ကမူး', 'ပင်တာ'],
                'correct_answer' => 'Beckett',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'hard',
                'question_text' => 'The Birth of Venus was painted by...',
                'question_text_my' => '"The Birth of Venus" ကို ရေးဆွဲခဲ့သူမှာ...',
                'options' => ['Botticelli', 'Titian', 'Caravaggio', 'Giotto'],
                'options_my' => ['ဘော့တီချဲလီ', 'တီးရှန်', 'ကာရာဗာဂျီယို', 'ဂျော်တို'],
                'correct_answer' => 'Botticelli',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'hard',
                'question_text' => 'Who wrote "Don Quixote"?',
                'question_text_my' => '"Don Quixote" ကို ရေးသားခဲ့သူမှာ...',
                'options' => ['Cervantes', 'Marquez', 'Borges', 'Neruda'],
                'options_my' => ['ဆာဗန်တေး', 'မာကွက်ဇ်', 'ဘော်ဟေးစ်', 'နီရူဒါ'],
                'correct_answer' => 'Cervantes',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'hard',
                'question_text' => 'Who wrote "Divine Comedy"?',
                'question_text_my' => '"Divine Comedy" ကို ရေးသားခဲ့သူမှာ...',
                'options' => ['Dante', 'Petrarch', 'Boccaccio', 'Machiavelli'],
                'options_my' => ['ဒန်တေး', 'ပက်ထရာ', 'ဘိုကာချီယို', 'မာခီယာဗယ်လီ'],
                'correct_answer' => 'Dante',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'hard',
                'question_text' => 'Who is the author of "Jane Eyre"?',
                'question_text_my' => '"Jane Eyre" ကို ရေးသားခဲ့သူမှာ...',
                'options' => ['Charlotte Bronte', 'Emily Bronte', 'Anne Bronte', 'Austen'],
                'options_my' => ['ရှားလော့ဘရွန်တီ', 'အမ်မလီဘရွန်တီ', 'အန်းဘရွန်တီ', 'အော်စတင်'],
                'correct_answer' => 'Charlotte Bronte',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'hard',
                'question_text' => 'Which composer became deaf?',
                'question_text_my' => 'နားလေးသွားခဲ့သော ဂီတစာဆိုကြီးမှာ...',
                'options' => ['Mozart', 'Beethoven', 'Bach', 'Haydn'],
                'options_my' => ['မိုဇတ်', 'ဘီသိုဗင်', 'ဘခ်', 'ဟေဒင်'],
                'correct_answer' => 'Beethoven',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'hard',
                'question_text' => 'Who wrote "The Odyssey"?',
                'question_text_my' => '"The Odyssey" ကို ရေးသားခဲ့သူမှာ...',
                'options' => ['Homer', 'Virgil', 'Sophocles', 'Ovid'],
                'options_my' => ['ဟိုမာ', 'ဗာဂျီလ်', 'ဆိုဖိုကလီး', 'အိုဗစ်'],
                'correct_answer' => 'Homer',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'hard',
                'question_text' => 'Which poet wrote "Leaves of Grass"?',
                'question_text_my' => '"Leaves of Grass" ကို ရေးသားခဲ့သူမှာ...',
                'options' => ['Whitman', 'Emerson', 'Thoreau', 'Longfellow'],
                'options_my' => ['ဝစ်မန်း', 'အီမာဆင်', 'သော်ရိုး', 'လောင်းဖဲလိုး'],
                'correct_answer' => 'Whitman',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'hard',
                'question_text' => 'Who painted "American Gothic"?',
                'question_text_my' => '"American Gothic" ကို ရေးဆွဲခဲ့သူမှာ...',
                'options' => ['Wood', 'Hopper', 'Wyeth', 'Pollock'],
                'options_my' => ['ဝုဒ်', 'ဟော့ပါ', 'ဝိုင်းယက်', 'ပိုလော့ခ်'],
                'correct_answer' => 'Wood',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'hard',
                'question_text' => 'Who wrote "Crime and Punishment"?',
                'question_text_my' => '"Crime and Punishment" ကို ရေးသားခဲ့သူမှာ...',
                'options' => ['Dostoevsky', 'Tolstoy', 'Pushkin', 'Turgenev'],
                'options_my' => ['ဒေါစတိုယက်စကီး', 'တော်စတွိုင်း', 'ပွတ်ရှ်ကင်', 'တာဂျီနက်ဖ်'],
                'correct_answer' => 'Dostoevsky',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'hard',
                'question_text' => 'Who wrote "Medea"?',
                'question_text_my' => '"Medea" ပြဇာတ်ကို ရေးသားခဲ့သူမှာ...',
                'options' => ['Euripides', 'Aeschylus', 'Sophocles', 'Aristophanes'],
                'options_my' => ['ယူရစ်ပီးဒီးစ်', 'အက်စကိုင်းလပ်', 'ဆိုဖိုကလီး', 'အရစ်စတိုဖိန်း'],
                'correct_answer' => 'Euripides',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'hard',
                'question_text' => 'Which musical term means "fast"?',
                'question_text_my' => 'ဂီတတွင် "မြန်မြန်" ဟု အဓိပ္ပါယ်ရသော စကားလုံးမှာ...',
                'options' => ['Adagio', 'Allegro', 'Largo', 'Andante'],
                'options_my' => ['Adagio', 'Allegro', 'Largo', 'Andante'],
                'correct_answer' => 'Allegro',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'hard',
                'question_text' => 'Who wrote "Wuthering Heights"?',
                'question_text_my' => '"Wuthering Heights" ကို ရေးသားခဲ့သူမှာ...',
                'options' => ['Emily Bronte', 'Charlotte Bronte', 'Austen', 'Eliot'],
                'options_my' => ['အမ်မလီဘရွန်တီ', 'ရှားလော့ဘရွန်တီ', 'အော်စတင်', 'အဲလိယော့'],
                'correct_answer' => 'Emily Bronte',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'hard',
                'question_text' => 'Who painted "The Night Watch"?',
                'question_text_my' => '"The Night Watch" ကို ရေးဆွဲခဲ့သူမှာ...',
                'options' => ['Rembrandt', 'Vermeer', 'Hals', 'Rubens'],
                'options_my' => ['ရမ်ဘရန့်', 'ဗာမီးယား', 'ဟောလ်စ်', 'ရူဘင်'],
                'correct_answer' => 'Rembrandt',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'hard',
                'question_text' => 'Who wrote "The Stranger"?',
                'question_text_my' => '"The Stranger" ကို ရေးသားခဲ့သူမှာ...',
                'options' => ['Camus', 'Sartre', 'Kafka', 'Proust'],
                'options_my' => ['ကမူး', 'ဆာ့ထရ်', 'ကဖ်ကာ', 'ပရုစ်'],
                'correct_answer' => 'Camus',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'hard',
                'question_text' => 'Who wrote "Les Fleurs du mal"?',
                'question_text_my' => '"Les Fleurs du mal" ကဗျာကို ရေးသားခဲ့သူမှာ...',
                'options' => ['Baudelaire', 'Rimbaud', 'Verlaine', 'Mallarme'],
                'options_my' => ['ဘော်ဒလဲ', 'ရမ်ဘို', 'ဗာလိန်း', 'မာလာမေ'],
                'correct_answer' => 'Baudelaire',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'hard',
                'question_text' => 'Who is the author of "Brave New World"?',
                'question_text_my' => '"Brave New World" ကို ရေးသားခဲ့သူမှာ...',
                'options' => ['Huxley', 'Orwell', 'Bradbury', 'Wells'],
                'options_my' => ['ဟက်စလေ', 'အော်ဝဲလ်', 'ဘရက်ဘူရီ', 'ဝဲလ်'],
                'correct_answer' => 'Huxley',
                'language' => 'en'
            ],
        ];

        foreach ($questions as $q) {
            Question::create($q);
        }
    }
}
