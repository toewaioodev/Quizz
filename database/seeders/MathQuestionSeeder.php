<?php

namespace Database\Seeders;

use App\Models\Question;
use Illuminate\Database\Seeder;

class MathQuestionSeeder extends Seeder
{
    public function run(): void
    {
        $questions = [
            // --- Easy (35 Questions) ---
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => 'What is 5 + 3?',
                'question_text_my' => '5 + 3 သည် အဘယ်နည်း။',
                'options' => ['6', '7', '8', '9'],
                'options_my' => ['၆', '၇', '၈', '၉'],
                'correct_answer' => '8',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => 'What is 10 minus 4?',
                'question_text_my' => '၁၀ ထဲမှ ၄ ကိုနုတ်လျှင်...',
                'options' => ['4', '5', '6', '7'],
                'options_my' => ['၄', '၅', '၆', '၇'],
                'correct_answer' => '6',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => 'Which number is odd?',
                'question_text_my' => 'မကိန်းသည် အဘယ်နည်း။',
                'options' => ['2', '4', '7', '10'],
                'options_my' => ['၂', '၄', '၇', '၁၀'],
                'correct_answer' => '7',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => 'What is 3 x 3?',
                'question_text_my' => '3 x 3 သည် အဘယ်နည်း။',
                'options' => ['6', '9', '12', '15'],
                'options_my' => ['၆', '၉', '၁၂', '၁၅'],
                'correct_answer' => '9',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => 'How many sides does a triangle have?',
                'question_text_my' => 'တြိဂံတွင် အနားမည်မျှရှိသနည်း။',
                'options' => ['2', '3', '4', '5'],
                'options_my' => ['၂', '၃', '၄', '၅'],
                'correct_answer' => '3',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => 'What is half of 10?',
                'question_text_my' => '၁၀ ၏ တစ်ဝက်သည်...',
                'options' => ['2', '4', '5', '6'],
                'options_my' => ['၂', '၄', '၅', '၆'],
                'correct_answer' => '5',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => 'What comes after 19?',
                'question_text_my' => '၁၉ နောက်တွင် ဘာလာမည်နည်း။',
                'options' => ['18', '20', '21', '22'],
                'options_my' => ['၁၈', '၂၀', '၂၁', '၂၂'],
                'correct_answer' => '20',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => 'What is 0 + 10?',
                'question_text_my' => '0 + 10 သည် အဘယ်နည်း။',
                'options' => ['0', '1', '10', '100'],
                'options_my' => ['၀', '၁', '၁၀', '၁၀၀'],
                'correct_answer' => '10',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => 'Which shape is round?',
                'question_text_my' => 'လုံးဝန်းသော ပုံသဏ္ဍာန်သည်...',
                'options' => ['Square', 'Triangle', 'Circle', 'Rectangle'],
                'options_my' => ['စတုရန်း', 'တြိဂံ', 'စက်ဝိုင်း', 'စတုဂံ'],
                'correct_answer' => 'Circle',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => 'What is 12 / 2?',
                'question_text_my' => '၁၂ ကို ၂ နှင့်စားလျှင်...',
                'options' => ['4', '5', '6', '8'],
                'options_my' => ['၄', '၅', '၆', '၈'],
                'correct_answer' => '6',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => 'How many fingers does a human typically have?',
                'question_text_my' => 'လူတစ်ယောက်တွင် ပုံမှန်အားဖြင့် လက်ချောင်းမည်မျှရှိသနည်း။',
                'options' => ['8', '10', '12', '20'],
                'options_my' => ['၈', '၁၀', '၁၂', '၂၀'],
                'correct_answer' => '10',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => 'What is 100 + 0?',
                'question_text_my' => '100 + 0 သည် အဘယ်နည်း။',
                'options' => ['0', '10', '100', '1000'],
                'options_my' => ['၀', '၁၀', '၁၀၀', '၁၀၀၀'],
                'correct_answer' => '100',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => 'Which number is smaller than 5?',
                'question_text_my' => '၅ ထက်ငယ်သော ကိန်းသည်...',
                'options' => ['6', '7', '4', '8'],
                'options_my' => ['၆', '၇', '၄', '၈'],
                'correct_answer' => '4',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => 'What is double of 3?',
                'question_text_my' => '၃ ၏ နှစ်ဆသည်...',
                'options' => ['3', '6', '9', '12'],
                'options_my' => ['၃', '၆', '၉', '၁၂'],
                'correct_answer' => '6',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => 'How many hours are in a day?',
                'question_text_my' => 'တစ်ရက်တွင် မည်မျှ နာရီရှိသနည်း။',
                'options' => ['12', '20', '24', '48'],
                'options_my' => ['၁၂', '၂၀', '၂၄', '၄၈'],
                'correct_answer' => '24',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => '50 cents + 50 cents = ?',
                'question_text_my' => 'ပြား ၅၀ + ပြား ၅၀ = ?',
                'options' => ['50 cents', '1 Dollar', '2 Dollars', '100 Dollars'],
                'options_my' => ['ပြား ၅၀', '၁ ဒေါ်လာ', '၂ ဒေါ်လာ', '၁၀၀ ဒေါ်လာ'],
                'correct_answer' => '1 Dollar',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => 'Which number is even?',
                'question_text_my' => 'စုံကိန်းမှာ အဘယ်နည်း။',
                'options' => ['1', '3', '5', '2'],
                'options_my' => ['၁', '၃', '၅', '၂'],
                'correct_answer' => '2',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => 'What is 9 minus 2?',
                'question_text_my' => '၉ ထဲမှ ၂ ကိုနုတ်လျှင်...',
                'options' => ['6', '7', '8', '9'],
                'options_my' => ['၆', '၇', '၈', '၉'],
                'correct_answer' => '7',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => 'Which shape has 4 equal sides?',
                'question_text_my' => 'အနား ၄ ဖက်ညီသော ပုံသဏ္ဍာန်သည်...',
                'options' => ['Rectangle', 'Triangle', 'Square', 'Circle'],
                'options_my' => ['စတုဂံ', 'တြိဂံ', 'စတုရန်း', 'စက်ဝိုင်း'],
                'correct_answer' => 'Square',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => 'What is 6 x 2?',
                'question_text_my' => '6 x 2 သည် အဘယ်နည်း။',
                'options' => ['10', '11', '12', '13'],
                'options_my' => ['၁၀', '၁၁', '၁၂', '၁၃'],
                'correct_answer' => '12',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => 'How many wheels does a tricycle have?',
                'question_text_my' => 'သုံးဘီးစက်ဘီးတွင် ဘီးမည်မျှရှိသနည်း။',
                'options' => ['2', '3', '4', '5'],
                'options_my' => ['၂', '၃', '၄', '၅'],
                'correct_answer' => '3',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => 'What is 15 + 5?',
                'question_text_my' => '15 + 5 သည် အဘယ်နည်း။',
                'options' => ['18', '19', '20', '21'],
                'options_my' => ['၁၈', '၁၉', '၂၀', '၂၁'],
                'correct_answer' => '20',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => 'What is 10 x 10?',
                'question_text_my' => '10 x 10 သည် အဘယ်နည်း။',
                'options' => ['50', '90', '100', '110'],
                'options_my' => ['၅၀', '၉၀', '၁၀၀', '၁၁၀'],
                'correct_answer' => '100',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => 'What comes before 50?',
                'question_text_my' => '၅၀ မတိုင်ခင် ဘာလာသနည်း။',
                'options' => ['48', '49', '51', '52'],
                'options_my' => ['၄၈', '၄၉', '၅၁', '၅၂'],
                'correct_answer' => '49',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => '1 + 2 + 3 = ?',
                'question_text_my' => '၁ + ၂ + ၃ = ?',
                'options' => ['5', '6', '7', '8'],
                'options_my' => ['၅', '၆', '၇', '၈'],
                'correct_answer' => '6',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => 'Which is the largest number?',
                'question_text_my' => 'အကြီးဆုံးကိန်းသည် အဘယ်နည်း။',
                'options' => ['50', '500', '5', '5000'],
                'options_my' => ['၅၀', '၅၀၀', '၅', '၅၀၀၀'],
                'correct_answer' => '5000',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => 'How many minutes in an hour?',
                'question_text_my' => 'တစ်နာရီတွင် မိနစ်မည်မျှရှိသနည်း။',
                'options' => ['30', '45', '60', '90'],
                'options_my' => ['၃၀', '၄၅', '၆၀', '၉၀'],
                'correct_answer' => '60',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => '20 divided by 4 is...',
                'question_text_my' => '၂၀ ကို ၄ နှင့်စားလျှင်...',
                'options' => ['4', '5', '6', '8'],
                'options_my' => ['၄', '၅', '၆', '၈'],
                'correct_answer' => '5',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => '100 minus 50 is...',
                'question_text_my' => '၁၀၀ ထဲမှ ၅၀ နုတ်လျှင်...',
                'options' => ['40', '50', '60', '70'],
                'options_my' => ['၄၀', '၅၀', '၆၀', '၇၀'],
                'correct_answer' => '50',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => 'What is 2 cubed?',
                'question_text_my' => '၂ ၏ သုံးထပ်ကိန်းသည်...',
                'options' => ['4', '6', '8', '10'],
                'options_my' => ['၄', '၆', '၈', '၁၀'],
                'correct_answer' => '8',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => 'How many corners does a square have?',
                'question_text_my' => 'စတုရန်းတွင် ထောင့်မည်မျှပါသနည်း။',
                'options' => ['2', '3', '4', '5'],
                'options_my' => ['၂', '၃', '၄', '၅'],
                'correct_answer' => '4',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => 'What is 11 + 11?',
                'question_text_my' => '11 + 11 သည် အဘယ်နည်း။',
                'options' => ['20', '21', '22', '23'],
                'options_my' => ['၂၀', '၂၁', '၂၂', '၂၃'],
                'correct_answer' => '22',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => 'What is 8 x 0?',
                'question_text_my' => '8 x 0 သည် အဘယ်နည်း။',
                'options' => ['0', '8', '16', '80'],
                'options_my' => ['၀', '၈', '၁၆', '၈၀'],
                'correct_answer' => '0',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => 'Which fraction is equal to 0.5?',
                'question_text_my' => '0.5 နှင့် ညီမျှသော အပိုင်းကိန်းမှာ...',
                'options' => ['1/4', '1/3', '1/2', '2/3'],
                'options_my' => ['1/4', '1/3', '1/2', '2/3'],
                'correct_answer' => '1/2',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => 'What is 40 + 60?',
                'question_text_my' => '40 + 60 သည် အဘယ်နည်း။',
                'options' => ['90', '100', '110', '120'],
                'options_my' => ['၉၀', '၁၀၀', '၁၁၀', '၁၂၀'],
                'correct_answer' => '100',
                'language' => 'en'
            ],

            // --- Medium (35 Questions) ---
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'What is 12 x 12?',
                'question_text_my' => '12 x 12 သည် အဘယ်နည်း။',
                'options' => ['124', '144', '164', '184'],
                'options_my' => ['၁၂၄', '၁၄၄', '၁၆၄', '၁၈၄'],
                'correct_answer' => '144',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'What is 25% of 200?',
                'question_text_my' => '၂၀၀ ၏ ၂၅% သည်...',
                'options' => ['25', '40', '50', '60'],
                'options_my' => ['၂၅', '၄၀', '၅၀', '၆၀'],
                'correct_answer' => '50',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'Solve for x: 3x = 15',
                'question_text_my' => 'x တန်ဖိုးရှာပါ: 3x = 15',
                'options' => ['3', '4', '5', '6'],
                'options_my' => ['၃', '၄', '၅', '၆'],
                'correct_answer' => '5',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'How many seconds in 5 minutes?',
                'question_text_my' => '၅ မိနစ်တွင် စက္ကန့်မည်မျှရှိသနည်း။',
                'options' => ['150', '200', '250', '300'],
                'options_my' => ['၁၅၀', '၂၀၀', '၂၅၀', '၃၀၀'],
                'correct_answer' => '300',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'What is the square root of 144?',
                'question_text_my' => '၁၄၄ ၏ စတုရန်းရင်းသည်...',
                'options' => ['10', '11', '12', '13'],
                'options_my' => ['၁၀', '၁၁', '၁၂', '၁၃'],
                'correct_answer' => '12',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'What is 10% of 500?',
                'question_text_my' => '၅၀၀ ၏ ၁၀% သည်...',
                'options' => ['10', '50', '100', '500'],
                'options_my' => ['၁၀', '၅၀', '၁၀၀', '၅၀၀'],
                'correct_answer' => '50',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'How many sides does a pentagon have?',
                'question_text_my' => 'ပင်တဂွန်တွင် အနားမည်မျှရှိသနည်း။',
                'options' => ['5', '6', '7', '8'],
                'options_my' => ['၅', '၆', '၇', '၈'],
                'correct_answer' => '5',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => '7 squared is...',
                'question_text_my' => '၇ ၏ နှစ်ထပ်ကိန်းသည်...',
                'options' => ['47', '49', '51', '53'],
                'options_my' => ['၄၇', '၄၉', '၅၁', '၅၃'],
                'correct_answer' => '49',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'What is the Roman Numeral for 10?',
                'question_text_my' => '၁၀ အတွက် ရိုမန်ဂဏန်းမှာ...',
                'options' => ['V', 'I', 'X', 'L'],
                'options_my' => ['V', 'I', 'X', 'L'],
                'correct_answer' => 'X',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'If a dozen is 12, what is a baker\'s dozen?',
                'question_text_my' => 'Baker\'s dozen ဆိုသည်မှာ မည်မျှနည်း။',
                'options' => ['11', '12', '13', '14'],
                'options_my' => ['၁၁', '၁၂', '၁၃', '၁၄'],
                'correct_answer' => '13',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'What is 15 x 3?',
                'question_text_my' => '15 x 3 သည် အဘယ်နည်း။',
                'options' => ['35', '40', '45', '50'],
                'options_my' => ['၃၅', '၄၀', '၄၅', '၅၀'],
                'correct_answer' => '45',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'What is the sum of angles in a rectangle?',
                'question_text_my' => 'စတုဂံတစ်ခု၏ ထောင့်များပေါင်းလဒ်သည်...',
                'options' => ['180', '270', '360', '400'],
                'options_my' => ['၁၈၀', '၂၇၀', '၃၆၀', '၄၀၀'],
                'correct_answer' => '360',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'Which is a prime number?',
                'question_text_my' => 'သုဒ္ဓကိန်းသည် အဘယ်နည်း။',
                'options' => ['4', '9', '11', '15'],
                'options_my' => ['၄', '၉', '၁၁', '၁၅'],
                'correct_answer' => '11',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'Simplify: 2(3 + 4)',
                'question_text_my' => 'ရှင်းလင်းပါ: 2(3 + 4)',
                'options' => ['10', '12', '14', '16'],
                'options_my' => ['၁၀', '၁၂', '၁၄', '၁၆'],
                'correct_answer' => '14',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'What is 0.75 as a fraction?',
                'question_text_my' => '0.75 ကို အပိုင်းကိန်းဖြင့် ပြလျှင်...',
                'options' => ['1/2', '2/3', '3/4', '4/5'],
                'options_my' => ['1/2', '2/3', '3/4', '4/5'],
                'correct_answer' => '3/4',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'What is the perimeter of a 4x4 square?',
                'question_text_my' => '4x4 စတုရန်း၏ ပတ်လည်အနားအရှည်သည်...',
                'options' => ['8', '12', '16', '20'],
                'options_my' => ['၈', '၁၂', '၁၆', '၂၀'],
                'correct_answer' => '16',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => '2 to the power of 5 is...',
                'question_text_my' => '၂ ၏ ၅ ထပ်ကိန်းသည်...',
                'options' => ['16', '25', '32', '64'],
                'options_my' => ['၁၆', '၂၅', '၃၂', '၆၄'],
                'correct_answer' => '32',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'Which angle is obtuse?',
                'question_text_my' => 'ထောင့်ကျယ်သည် မည်သည်နည်း။',
                'options' => ['45°', '90°', '120°', '180°'],
                'options_my' => ['၄၅°', '၉၀°', '၁၂၀°', '၁၈၀°'],
                'correct_answer' => '120°',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'What is the average of 2, 4, 6?',
                'question_text_my' => '၂, ၄, ၆ တို့၏ ပျမ်းမျှတန်ဖိုးသည်...',
                'options' => ['3', '4', '5', '6'],
                'options_my' => ['၃', '၄', '၅', '၆'],
                'correct_answer' => '4',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'Solve: 50 - 5 x 2',
                'question_text_my' => 'ဖြေရှင်းပါ: 50 - 5 x 2',
                'options' => ['40', '45', '80', '90'],
                'options_my' => ['၄၀', '၄၅', '၈၀', '၉၀'],
                'correct_answer' => '40',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'What is 1/3 of 90?',
                'question_text_my' => '၉၀ ၏ သုံးပုံတစ်ပုံသည်...',
                'options' => ['20', '30', '40', '45'],
                'options_my' => ['၂၀', '၃၀', '၄၀', '၄၅'],
                'correct_answer' => '30',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'How many grams in a kilogram?',
                'question_text_my' => 'တစ်ကီလိုဂရမ်တွင် ဂရမ်မည်မျှရှိသနည်း။',
                'options' => ['100', '500', '1000', '10000'],
                'options_my' => ['၁၀၀', '၅၀၀', '၁၀၀၀', '၁၀၀၀၀'],
                'correct_answer' => '1000',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'Which number is divisible by 3?',
                'question_text_my' => '၃ နှင့်စား၍ပြတ်သောကိန်းသည်...',
                'options' => ['14', '22', '27', '31'],
                'options_my' => ['၁၄', '၂၂', '၂၇', '၃၁'],
                'correct_answer' => '27',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'What is 1.5 + 2.5?',
                'question_text_my' => '1.5 + 2.5 သည် အဘယ်နည်း။',
                'options' => ['3', '3.5', '4', '4.5'],
                'options_my' => ['၃', '၃.၅', '၄', '၄.၅'],
                'correct_answer' => '4',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'Calculate area of rectangle 5x8.',
                'question_text_my' => '5x8 စတုဂံ၏ ဧရိယာကို တွက်ပါ။',
                'options' => ['13', '26', '35', '40'],
                'options_my' => ['၁၃', '၂၆', '၃၅', '၄၀'],
                'correct_answer' => '40',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'If x + 10 = 25, x = ?',
                'question_text_my' => 'x + 10 = 25 ဖြစ်လျှင် x = ?',
                'options' => ['10', '15', '20', '35'],
                'options_my' => ['၁၀', '၁၅', '၂၀', '၃၅'],
                'correct_answer' => '15',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'What is the cube root of 27?',
                'question_text_my' => '၂၇ ၏ သုံးထပ်ကိန်းရင်းသည်...',
                'options' => ['2', '3', '4', '9'],
                'options_my' => ['၂', '၃', '၄', '၉'],
                'correct_answer' => '3',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'What is the total of angles in a triangle?',
                'question_text_my' => 'တြိဂံတစ်ခု၏ ထောင့်ပေါင်းလဒ်သည်...',
                'options' => ['90', '180', '270', '360'],
                'options_my' => ['၉၀', '၁၈၀', '၂၇၀', '၃၆၀'],
                'correct_answer' => '180',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'How many millimeters in a meter?',
                'question_text_my' => 'တစ်မီတာတွင် မီလီမီတာ မည်မျှရှိသနည်း။',
                'options' => ['100', '500', '1000', '10000'],
                'options_my' => ['၁၀၀', '၅၀၀', '၁၀၀၀', '၁၀၀၀၀'],
                'correct_answer' => '1000',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'What is 10 cubed?',
                'question_text_my' => '၁၀ ၏ သုံးထပ်ကိန်းသည်...',
                'options' => ['100', '500', '1000', '10000'],
                'options_my' => ['၁၀၀', '၅၀၀', '၁၀၀၀', '၁၀၀၀၀'],
                'correct_answer' => '1000',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'Divide 100 by 4.',
                'question_text_my' => '၁၀၀ ကို ၄ နှင့်စားပါ။',
                'options' => ['20', '25', '30', '35'],
                'options_my' => ['၂၀', '၂၅', '၃၀', '၃၅'],
                'correct_answer' => '25',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'What is 20 x 20?',
                'question_text_my' => '20 x 20 သည် အဘယ်နည်း။',
                'options' => ['200', '300', '400', '500'],
                'options_my' => ['၂၀၀', '၃၀၀', '၄၀၀', '၅၀၀'],
                'correct_answer' => '400',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'How many sides in an octagon?',
                'question_text_my' => 'Octagon တွင် အနားမည်မျှရှိသနည်း။',
                'options' => ['6', '7', '8', '9'],
                'options_my' => ['၆', '၇', '၈', '၉'],
                'correct_answer' => '8',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'If 5x = 30, what is x + 2?',
                'question_text_my' => '5x = 30 ဖြစ်လျှင် x + 2 သည်...',
                'options' => ['6', '7', '8', '9'],
                'options_my' => ['၆', '၇', '၈', '၉'],
                'correct_answer' => '8',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'What is the GCD of 8 and 12?',
                'question_text_my' => '၈ နှင့် ၁၂ ၏ မဟက (GCD) သည်...',
                'options' => ['2', '4', '6', '8'],
                'options_my' => ['၂', '၄', '၆', '၈'],
                'correct_answer' => '4',
                'language' => 'en'
            ],

            // --- Hard (30 Questions) ---
            [
                'category' => 'Mathematics',
                'difficulty' => 'hard',
                'question_text' => 'What is the square root of 256?',
                'question_text_my' => '၂၅၆ ၏ စတုရန်းရင်းသည်...',
                'options' => ['14', '15', '16', '18'],
                'options_my' => ['၁၄', '၁၅', '၁၆', '၁၈'],
                'correct_answer' => '16',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'hard',
                'question_text' => 'What is the value of Pi (to 3 decimals)?',
                'question_text_my' => 'Pi (π) တန်ဖိုး (ဒဿမ ၃ နေရာထိ) သည်...',
                'options' => ['3.141', '3.142', '3.145', '3.149'],
                'options_my' => ['၃.၁၄၁', '၃.၁၄၂', '၃.၁၄၅', '၃.၁၄၉'],
                'correct_answer' => '3.142',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'hard',
                'question_text' => 'Solve: 2x + 5 = 3x - 2',
                'question_text_my' => 'ဖြေရှင်းပါ: 2x + 5 = 3x - 2',
                'options' => ['5', '6', '7', '8'],
                'options_my' => ['၅', '၆', '၇', '၈'],
                'correct_answer' => '7',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'hard',
                'question_text' => 'What is 15 squared?',
                'question_text_my' => '၁၅ ၏ နှစ်ထပ်ကိန်းသည်...',
                'options' => ['200', '225', '250', '275'],
                'options_my' => ['၂၀၀', '၂၂၅', '၂၅၀', '၂၇၅'],
                'correct_answer' => '225',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'hard',
                'question_text' => 'What is 20% of 150?',
                'question_text_my' => '၁၅၀ ၏ ၂၀% သည်...',
                'options' => ['20', '25', '30', '35'],
                'options_my' => ['၂၀', '၂၅', '၃၀', '၃၅'],
                'correct_answer' => '30',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'hard',
                'question_text' => 'How many degrees in a circle?',
                'question_text_my' => 'စက်ဝိုင်းတစ်ခုတွင် ဒီဂရီမည်မျှရှိသနည်း။',
                'options' => ['180', '270', '360', '400'],
                'options_my' => ['၁၈၀', '၂၇၀', '၃၆၀', '၄၀၀'],
                'correct_answer' => '360',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'hard',
                'question_text' => 'What is the factorial of 5 (5!)?',
                'question_text_my' => '5! (Factorial) ၏ တန်ဖိုးသည်...',
                'options' => ['60', '100', '120', '150'],
                'options_my' => ['၆၀', '၁၀၀', '၁၂၀', '၁၅၀'],
                'correct_answer' => '120',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'hard',
                'question_text' => 'What is log10(100)?',
                'question_text_my' => 'log10(100) ၏ တန်ဖိုးသည်...',
                'options' => ['1', '2', '10', '100'],
                'options_my' => ['၁', '၂', '၁၀', '၁၀၀'],
                'correct_answer' => '2',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'hard',
                'question_text' => 'Binary 1011 equals decimal...',
                'question_text_my' => 'Binary 1011 သည် ဒသမကိန်း မည်မျှနှင့် ညီသနည်း။',
                'options' => ['9', '10', '11', '13'],
                'options_my' => ['၉', '၁၀', '၁၁', '၁၃'],
                'correct_answer' => '11',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'hard',
                'question_text' => 'What is the area of a circle with radius 3 (Pi=3.14)?',
                'question_text_my' => 'အချင်းဝက် ၃ ရှိသော စက်ဝိုင်းဧရိယာသည် (Pi=3.14)...',
                'options' => ['9.42', '18.84', '28.26', '31.40'],
                'options_my' => ['၉.၄၂', '၁၈.၈၄', '၂၈.၂၆', '၃၁.၄၀'],
                'correct_answer' => '28.26',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'hard',
                'question_text' => 'Solve for x: x/4 + 2 = 5',
                'question_text_my' => 'ဖြေရှင်းပါ: x/4 + 2 = 5',
                'options' => ['8', '10', '12', '16'],
                'options_my' => ['၈', '၁၀', '၁၂', '၁၆'],
                'correct_answer' => '12',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'hard',
                'question_text' => 'What is 5 to the power of 3?',
                'question_text_my' => '၅ ၏ ၃ ထပ်ကိန်းသည်...',
                'options' => ['75', '100', '125', '150'],
                'options_my' => ['၇၅', '၁၀၀', '၁၂၅', '၁၅၀'],
                'correct_answer' => '125',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'hard',
                'question_text' => 'Sum of angles in a hexagon?',
                'question_text_my' => 'ဆဋ္ဌဂံတစ်ခု၏ ထောင့်ပေါင်းလဒ်သည်...',
                'options' => ['540', '720', '900', '1080'],
                'options_my' => ['၅၄၀', '၇၂၀', '၉၀၀', '၁၀၈၀'],
                'correct_answer' => '720',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'hard',
                'question_text' => 'What is the sine of 30 degrees?',
                'question_text_my' => 'sin(30°) ၏ တန်ဖိုးသည်...',
                'options' => ['0.5', '0.707', '0.866', '1.0'],
                'options_my' => ['၀.၅', '၀.၇၀၇', '၀.၈၆၆', '၁.၀'],
                'correct_answer' => '0.5',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'hard',
                'question_text' => 'If 2y = 10, what is 3y + 2?',
                'question_text_my' => '2y = 10 ဖြစ်လျှင် 3y + 2 သည်...',
                'options' => ['15', '17', '19', '21'],
                'options_my' => ['၁၅', '၁၇', '၁၉', '၂၁'],
                'correct_answer' => '17',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'hard',
                'question_text' => 'How many prime numbers between 1 and 20?',
                'question_text_my' => '၁ မှ ၂၀ ကြားတွင် သုဒ္ဓကိန်းမည်မျှရှိသနည်း။',
                'options' => ['7', '8', '9', '10'],
                'options_my' => ['၇', '၈', '၉', '၁၀'],
                'correct_answer' => '8',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'hard',
                'question_text' => 'What is 111 x 11?',
                'question_text_my' => '111 x 11 သည် အဘယ်နည်း။',
                'options' => ['1111', '1221', '1331', '1441'],
                'options_my' => ['၁၁၁၁', '၁၂၂၁', '၁၃၃၁', '၁၄၄၁'],
                'correct_answer' => '1221',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'hard',
                'question_text' => 'Solve: (5+5) x (10-2)',
                'question_text_my' => 'ဖြေရှင်းပါ: (5+5) x (10-2)',
                'options' => ['60', '70', '80', '90'],
                'options_my' => ['၆၀', '၇၀', '၈၀', '၉၀'],
                'correct_answer' => '80',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'hard',
                'question_text' => 'What is the LCM of 4 and 6?',
                'question_text_my' => '၄ နှင့် ၆ ၏ ครန (LCM) သည်...',
                'options' => ['8', '12', '16', '24'],
                'options_my' => ['၈', '၁၂', '၁၆', '၂၄'],
                'correct_answer' => '12',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'hard',
                'question_text' => 'What is 200 divided by 0.5?',
                'question_text_my' => '၂၀၀ ကို 0.5 နှင့်စားလျှင်...',
                'options' => ['100', '200', '400', '800'],
                'options_my' => ['၁၀၀', '၂၀၀', '၄၀၀', '၈၀၀'],
                'correct_answer' => '400',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'hard',
                'question_text' => 'What is 0.01 x 100?',
                'question_text_my' => '0.01 x 100 သည် အဘယ်နည်း။',
                'options' => ['0.1', '1', '10', '100'],
                'options_my' => ['၀.၁', '၁', '၁၀', '၁၀၀'],
                'correct_answer' => '1',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'hard',
                'question_text' => 'Triangle sides 3, 4, 5. Is it a right triangle?',
                'question_text_my' => 'အနား ၃၊ ၄၊ ၅ ရှိ တြိဂံသည် ထောင့်မှန်တြိဂံဖြစ်သလား။',
                'options' => ['Yes', 'No', 'Impossible', 'Only sometimes'],
                'options_my' => ['ဟုတ်', 'မဟုတ်', 'မဖြစ်နိုင်', 'တစ်ခါတစ်ရံသာ'],
                'correct_answer' => 'Yes',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'hard',
                'question_text' => 'What is the cube of 4?',
                'question_text_my' => '၄ ၏ သုံးထပ်ကိန်းသည်...',
                'options' => ['16', '32', '64', '128'],
                'options_my' => ['၁၆', '၃၂', '၆၄', '၁၂၈'],
                'correct_answer' => '64',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'hard',
                'question_text' => 'Which is bigger: 1/2 or 3/5?',
                'question_text_my' => '1/2 နှင့် 3/5 မည်သည်က ပိုကြီးသနည်း။',
                'options' => ['1/2', '3/5', 'Equal', 'Unknown'],
                'options_my' => ['1/2', '3/5', 'တူညီ', 'မသိ'],
                'correct_answer' => '3/5',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'hard',
                'question_text' => 'Solve: 3 squared + 4 squared = x squared',
                'question_text_my' => '3² + 4² = x² ဖြစ်လျှင် x = ?',
                'options' => ['5', '6', '7', '8'],
                'options_my' => ['၅', '၆', '၇', '၈'],
                'correct_answer' => '5',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'hard',
                'question_text' => 'What is 1/8 as a decimal?',
                'question_text_my' => '1/8 ကို ဒသမကိန်းပြောင်းလျှင်...',
                'options' => ['0.125', '0.25', '0.5', '0.8'],
                'options_my' => ['၀.၁၂၅', '၀.၂၅', '၀.၅', '၀.၈'],
                'correct_answer' => '0.125',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'hard',
                'question_text' => 'Sum of numbers from 1 to 10?',
                'question_text_my' => '၁ မှ ၁၀ အထိ ကိန်းများပေါင်းလဒ်သည်...',
                'options' => ['45', '50', '55', '60'],
                'options_my' => ['၄၅', '၅၀', '၅၅', '၆၀'],
                'correct_answer' => '55',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'hard',
                'question_text' => 'What comes next: 1, 1, 2, 3, 5, ...',
                'question_text_my' => '1, 1, 2, 3, 5, ... နောက်တွင် ဘာလာမည်နည်း။',
                'options' => ['7', '8', '9', '11'],
                'options_my' => ['၇', '၈', '၉', '၁၁'],
                'correct_answer' => '8',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'hard',
                'question_text' => 'Degrees in a right angle triangle?',
                'question_text_my' => 'ထောင့်မှန်တြိဂံတစ်ခု၏ ဒီဂရီစုစုပေါင်းသည်...',
                'options' => ['90', '180', '270', '360'],
                'options_my' => ['၉၀', '၁၈၀', '၂၇၀', '၃၆၀'],
                'correct_answer' => '180',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'hard',
                'question_text' => '15 x 15 = ?',
                'question_text_my' => '15 x 15 = ?',
                'options' => ['205', '215', '225', '235'],
                'options_my' => ['၂၀၅', '၂၁၅', '၂၂၅', '၂၃၅'],
                'correct_answer' => '225',
                'language' => 'en'
            ],
        ];

        foreach ($questions as $q) {
            Question::create($q);
        }
    }
}