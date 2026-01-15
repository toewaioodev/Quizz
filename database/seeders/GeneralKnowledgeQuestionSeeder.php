<?php

namespace Database\Seeders;

use App\Models\Question;
use Illuminate\Database\Seeder;

class GeneralKnowledgeQuestionSeeder extends Seeder
{
    public function run(): void
    {
        $questions = [
            // --- Easy (35 Questions) ---
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'How many days are in a leap year?',
                'question_text_my' => 'ရက်ထပ်နှစ်တစ်နှစ်တွင် ရက်မည်မျှရှိသနည်း။',
                'options' => ['364', '365', '366', '367'],
                'options_my' => ['၃၆၄', '၃၆၅', '၃၆၆', '၃၆၇'],
                'correct_answer' => '366',
                'language' => 'en'
            ], //
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'What is the largest mammal in the world?',
                'question_text_my' => 'ကမ္ဘာပေါ်တွင် အကြီးဆုံး နို့တိုက်သတ္တဝါမှာ...',
                'options' => ['Elephant', 'Blue Whale', 'Giraffe', 'Shark'],
                'options_my' => ['ဆင်', 'ဝေလငါးပြာကြီး', 'သစ်ကုလားအုတ်', 'ငါးမန်း'],
                'correct_answer' => 'Blue Whale',
                'language' => 'en'
            ], //
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'What is the main ingredient in bread?',
                'question_text_my' => 'ပေါင်မုန့်တွင် အဓိကပါဝင်သော ပစ္စည်းမှာ...',
                'options' => ['Flour', 'Sugar', 'Rice', 'Potato'],
                'options_my' => ['ဂျုံ', 'သကြား', 'ဆန်', 'အာလူး'],
                'correct_answer' => 'Flour',
                'language' => 'en'
            ], //
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'What do bees make?',
                'question_text_my' => 'ပျားများက ဘာပြုလုပ်သနည်း။',
                'options' => ['Milk', 'Honey', 'Silk', 'Wool'],
                'options_my' => ['နို့', 'ပျားရည်', 'ပိုး', 'သိုးမွှေး'],
                'correct_answer' => 'Honey',
                'language' => 'en'
            ], //
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'What is the color of a banana?',
                'question_text_my' => 'ငှက်ပျောသီး၏ အရောင်မှာ...',
                'options' => ['Red', 'Green', 'Yellow', 'Blue'],
                'options_my' => ['အနီ', 'အစိမ်း', 'အဝါ', 'အပြာ'],
                'correct_answer' => 'Yellow',
                'language' => 'en'
            ], //
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'What do you use to brush your teeth?',
                'question_text_my' => 'သွားတိုက်ရန် ဘာကိုသုံးသနည်း။',
                'options' => ['Comb', 'Brush', 'Toothbrush', 'Spoon'],
                'options_my' => ['ဘီး', 'ဘရက်ရှ်', 'သွားပွတ်တံ', 'ဇွန်း'],
                'correct_answer' => 'Toothbrush',
                'language' => 'en'
            ], //
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'What is H2O?',
                'question_text_my' => 'H2O ဆိုသည်မှာ...',
                'options' => ['Salt', 'Air', 'Water', 'Fire'],
                'options_my' => ['ဆား', 'လေ', 'ရေ', 'မီး'],
                'correct_answer' => 'Water',
                'language' => 'en'
            ], //
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'Which fruit is red and has seeds on the outside?',
                'question_text_my' => 'အပြင်ဘက်တွင် အစေ့များရှိပြီး အနီရောင်ရှိသော အသီးမှာ...',
                'options' => ['Apple', 'Strawberry', 'Cherry', 'Grape'],
                'options_my' => ['ပန်းသီး', 'စတော်ဘယ်ရီ', 'ချယ်ရီ', 'စပျစ်သီး'],
                'correct_answer' => 'Strawberry',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'How many legs does a dog have?',
                'question_text_my' => 'ခွေးတစ်ကောင်တွင် ခြေထောက်မည်မျှရှိသနည်း။',
                'options' => ['2', '4', '6', '8'],
                'options_my' => ['၂', '၄', '၆', '၈'],
                'correct_answer' => '4',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'Which season is the coldest?',
                'question_text_my' => 'အအေးဆုံးရာသီမှာ...',
                'options' => ['Summer', 'Winter', 'Spring', 'Autumn'],
                'options_my' => ['နွေရာသီ', 'ဆောင်းရာသီ', 'နွေဦးရာသီ', 'ဆောင်းဦးရာသီ'],
                'correct_answer' => 'Winter',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'What do you wear on your feet?',
                'question_text_my' => 'ခြေထောက်တွင် ဘာဝတ်ဆင်သနည်း။',
                'options' => ['Gloves', 'Hat', 'Shoes', 'Scarf'],
                'options_my' => ['လက်အိတ်', 'ဦးထုပ်', 'ဖိနပ်', 'လည်စည်း'],
                'correct_answer' => 'Shoes',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'Which animal says "Meow"?',
                'question_text_my' => '"မြောင်" ဟု အော်သော တိရစ္ဆာန်မှာ...',
                'options' => ['Dog', 'Cat', 'Cow', 'Sheep'],
                'options_my' => ['ခွေး', 'ကြောင်', 'နွား', 'သိုး'],
                'correct_answer' => 'Cat',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'What is the color of the sky on a clear day?',
                'question_text_my' => 'သာယာသောနေ့တွင် ကောင်းကင်အရောင်မှာ...',
                'options' => ['Green', 'Blue', 'Red', 'Yellow'],
                'options_my' => ['အစိမ်း', 'အပြာ', 'အနီ', 'အဝါ'],
                'correct_answer' => 'Blue',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'How many fingers do you have on one hand?',
                'question_text_my' => 'လက်တစ်ဖက်တွင် လက်ချောင်းမည်မျှရှိသနည်း။',
                'options' => ['4', '5', '6', '10'],
                'options_my' => ['၄', '၅', '၆', '၁၀'],
                'correct_answer' => '5',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'Which vehicle flies in the air?',
                'question_text_my' => 'လေထဲတွင် ပျံသန်းသော ယာဉ်မှာ...',
                'options' => ['Car', 'Train', 'Airplane', 'Boat'],
                'options_my' => ['ကား', 'ရထား', 'လေယာဉ်ပျံ', 'လှေ'],
                'correct_answer' => 'Airplane',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'What do you use to cut paper?',
                'question_text_my' => 'စက္ကူညှပ်ရန် ဘာကိုသုံးသနည်း။',
                'options' => ['Knife', 'Scissors', 'Spoon', 'Fork'],
                'options_my' => ['ဓား', 'ကတ်ကြေး', 'ဇွန်း', 'ခက်ရင်း'],
                'correct_answer' => 'Scissors',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'Which animal is known as man\'s best friend?',
                'question_text_my' => 'လူသား၏ အကောင်းဆုံးသူငယ်ချင်းဟု ခေါ်သော တိရစ္ဆာန်မှာ...',
                'options' => ['Cat', 'Dog', 'Horse', 'Bird'],
                'options_my' => ['ကြောင်', 'ခွေး', 'မြင်း', 'ငှက်'],
                'correct_answer' => 'Dog',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'What comes after Monday?',
                'question_text_my' => 'တနင်္လာနေ့ပြီးနောက် ဘာနေ့လာသနည်း။',
                'options' => ['Sunday', 'Tuesday', 'Wednesday', 'Thursday'],
                'options_my' => ['တနင်္ဂနွေ', 'အင်္ဂါ', 'ဗုဒ္ဓဟူး', 'ကြာသပတေး'],
                'correct_answer' => 'Tuesday',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'How many wheels does a car usually have?',
                'question_text_my' => 'ကားတစ်စီးတွင် ပုံမှန်အားဖြင့် ဘီးမည်မျှပါသနည်း။',
                'options' => ['2', '3', '4', '6'],
                'options_my' => ['၂', '၃', '၄', '၆'],
                'correct_answer' => '4',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'Which food is Italian?',
                'question_text_my' => 'အီတလီအစားအစာမှာ...',
                'options' => ['Sushi', 'Pizza', 'Tacos', 'Burger'],
                'options_my' => ['ဆူရှီ', 'ပီဇာ', 'တာကိုး', 'ဘာဂါ'],
                'correct_answer' => 'Pizza',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'What do cows produce?',
                'question_text_my' => 'နွားများက ဘာထုတ်ပေးသနည်း။',
                'options' => ['Milk', 'Eggs', 'Wool', 'Honey'],
                'options_my' => ['နို့', 'ဥ', 'သိုးမွှေး', 'ပျားရည်'],
                'correct_answer' => 'Milk',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'What is the opposite of hot?',
                'question_text_my' => 'ပူသော ၏ ဆန့်ကျင်ဘက်မှာ...',
                'options' => ['Warm', 'Cold', 'Dry', 'Wet'],
                'options_my' => ['နွေးသော', 'အေးသော', 'ခြောက်သွေ့သော', 'စိုစွတ်သော'],
                'correct_answer' => 'Cold',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'Which month has 28 or 29 days?',
                'question_text_my' => '၂၈ သို့မဟုတ် ၂၉ ရက်သာရှိသော လမှာ...',
                'options' => ['January', 'February', 'March', 'April'],
                'options_my' => ['ဇန်နဝါရီ', 'ဖေဖော်ဝါရီ', 'မတ်', 'ဧပြီ'],
                'correct_answer' => 'February',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'What do you use to write on a blackboard?',
                'question_text_my' => 'ကျောက်သင်ပုန်းပေါ်စာရေးရန် ဘာကိုသုံးသနည်း။',
                'options' => ['Pen', 'Pencil', 'Chalk', 'Marker'],
                'options_my' => ['ဘောပင်', 'ခဲတံ', 'မြေဖြူ', 'မားကပ်'],
                'correct_answer' => 'Chalk',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'What is a baby cat called?',
                'question_text_my' => 'ကြောင်ကလေးကို ဘာခေါ်သနည်း။',
                'options' => ['Puppy', 'Kitten', 'Cub', 'Calf'],
                'options_my' => ['ခွေးကလေး', 'ကြောင်ကလေး', 'ခြင်္သေ့ကလေး', 'နွားကလေး'],
                'correct_answer' => 'Kitten',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'Which shape has 3 sides?',
                'question_text_my' => 'အနား ၃ ဖက်ပါသော ပုံသဏ္ဍာန်မှာ...',
                'options' => ['Square', 'Circle', 'Triangle', 'Rectangle'],
                'options_my' => ['စတုရန်း', 'စက်ဝိုင်း', 'တြိဂံ', 'စတုဂံ'],
                'correct_answer' => 'Triangle',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'What color is grass?',
                'question_text_my' => 'မြက်ပင်၏ အရောင်မှာ...',
                'options' => ['Blue', 'Red', 'Green', 'Purple'],
                'options_my' => ['အပြာ', 'အနီ', 'အစိမ်း', 'ခရမ်း'],
                'correct_answer' => 'Green',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'Where do fish live?',
                'question_text_my' => 'ငါးများ ဘယ်မှာနေသနည်း။',
                'options' => ['Air', 'Land', 'Water', 'Tree'],
                'options_my' => ['လေ', 'ကုန်းမြေ', 'ရေ', 'သစ်ပင်'],
                'correct_answer' => 'Water',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'What brings presents at Christmas?',
                'question_text_my' => 'ခရစ္စမတ်တွင် လက်ဆောင်များ လာပေးသူမှာ...',
                'options' => ['Easter Bunny', 'Santa Claus', 'Tooth Fairy', 'Cupid'],
                'options_my' => ['အီစတာယုန်', 'ဆန်တာကလော့စ်', 'သွားနတ်သမီး', 'ကျူးပစ်'],
                'correct_answer' => 'Santa Claus',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'Which animal has a long neck?',
                'question_text_my' => 'လည်ပင်းရှည်သော တိရစ္ဆာန်မှာ...',
                'options' => ['Elephant', 'Giraffe', 'Lion', 'Tiger'],
                'options_my' => ['ဆင်', 'သစ်ကုလားအုတ်', 'ခြင်္သေ့', 'ကျား'],
                'correct_answer' => 'Giraffe',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'What is frozen water called?',
                'question_text_my' => 'ခဲနေသောရေကို ဘာခေါ်သနည်း။',
                'options' => ['Steam', 'Ice', 'Fog', 'Rain'],
                'options_my' => ['ရေနွေးငွေ့', 'ရေခဲ', 'မြူ', 'မိုး'],
                'correct_answer' => 'Ice',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'Which bird cannot fly?',
                'question_text_my' => 'မပျံသန်းနိုင်သော ငှက်မှာ...',
                'options' => ['Eagle', 'Parrot', 'Penguin', 'Sparrow'],
                'options_my' => ['လင်းယုန်', 'ကြက်တူရွေး', 'ပင်ဂွင်း', 'စာကလေး'],
                'correct_answer' => 'Penguin',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'What do you use to call someone?',
                'question_text_my' => 'တစ်ယောက်ယောက်ကို ဖုန်းခေါ်ရန် ဘာကိုသုံးသနည်း။',
                'options' => ['Calculator', 'Phone', 'Radio', 'TV'],
                'options_my' => ['ဂဏန်းပေါင်းစက်', 'ဖုန်း', 'ရေဒီယို', 'တီဗီ'],
                'correct_answer' => 'Phone',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'What is the top color in a rainbow?',
                'question_text_my' => 'သက်တံ၏ အပေါ်ဆုံးအရောင်မှာ...',
                'options' => ['Red', 'Violet', 'Green', 'Blue'],
                'options_my' => ['အနီ', 'ခရမ်း', 'အစိမ်း', 'အပြာ'],
                'correct_answer' => 'Red',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'Which room do you cook in?',
                'question_text_my' => 'ထမင်းချက်သော အခန်းမှာ...',
                'options' => ['Bedroom', 'Bathroom', 'Kitchen', 'Living Room'],
                'options_my' => ['အိပ်ခန်း', 'ရေချိုးခန်း', 'မီးဖိုချောင်', 'ဧည့်ခန်း'],
                'correct_answer' => 'Kitchen',
                'language' => 'en'
            ],

            // --- Medium (35 Questions) ---
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'How many colors are in a rainbow?',
                'question_text_my' => 'သက်တံတစ်ခုတွင် အရောင်မည်မျှရှိသနည်း။',
                'options' => ['5', '6', '7', '8'],
                'options_my' => ['၅', '၆', '၇', '၈'],
                'correct_answer' => '7',
                'language' => 'en'
            ], //
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'Which is the tallest animal?',
                'question_text_my' => 'အရပ်အရှည်ဆုံး တိရစ္ဆာန်မှာ...',
                'options' => ['Elephant', 'Giraffe', 'Horse', 'Zebra'],
                'options_my' => ['ဆင်', 'သစ်ကုလားအုတ်', 'မြင်း', 'မြင်းကျား'],
                'correct_answer' => 'Giraffe',
                'language' => 'en'
            ], //
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'How many legs does a spider have?',
                'question_text_my' => 'ပင့်ကူတွင် ခြေထောက် မည်မျှရှိသနည်း။',
                'options' => ['6', '8', '10', '12'],
                'options_my' => ['၆', '၈', '၁၀', '၁၂'],
                'correct_answer' => '8',
                'language' => 'en'
            ], //
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'Which is the fastest land animal?',
                'question_text_my' => 'အမြန်ဆုံး ကုန်းနေသတ္တဝါမှာ...',
                'options' => ['Lion', 'Tiger', 'Cheetah', 'Leopard'],
                'options_my' => ['ခြင်္သေ့', 'ကျား', 'ချီတာ', 'ကျားသစ်'],
                'correct_answer' => 'Cheetah',
                'language' => 'en'
            ], //
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'Which country invented pizza?',
                'question_text_my' => 'ပီဇာကို တီထွင်ခဲ့သော နိုင်ငံမှာ...',
                'options' => ['USA', 'Italy', 'France', 'Spain'],
                'options_my' => ['အမေရိကန်', 'အီတလီ', 'ပြင်သစ်', 'စပိန်'],
                'correct_answer' => 'Italy',
                'language' => 'en'
            ], //
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'How many continents are there?',
                'question_text_my' => 'ကမ္ဘာပေါ်တွင် တိုက်ကြီးမည်မျှရှိသနည်း။',
                'options' => ['5', '6', '7', '8'],
                'options_my' => ['၅', '၆', '၇', '၈'],
                'correct_answer' => '7',
                'language' => 'en'
            ], //
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'What is the capital of Thailand?',
                'question_text_my' => 'ထိုင်းနိုင်ငံ၏ မြို့တော်မှာ...',
                'options' => ['Bangkok', 'Phuket', 'Chiang Mai', 'Pattaya'],
                'options_my' => ['ဘန်ကောက်', 'ဖူးခက်', 'ချင်းမိုင်', 'ပတ္တရား'],
                'correct_answer' => 'Bangkok',
                'language' => 'en'
            ], //
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'Which planet is known as the Blue Planet?',
                'question_text_my' => 'ဂြိုဟ်ပြာဟု လူသိများသော ဂြိုဟ်မှာ...',
                'options' => ['Mars', 'Earth', 'Neptune', 'Venus'],
                'options_my' => ['အင်္ဂါဂြိုဟ်', 'ကမ္ဘာ', 'နက်ပ်ကျွန်း', 'သောကြာဂြိုဟ်'],
                'correct_answer' => 'Earth',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'What is the currency of the USA?',
                'question_text_my' => 'အမေရိကန်၏ ငွေကြေးမှာ...',
                'options' => ['Euro', 'Pound', 'Dollar', 'Yen'],
                'options_my' => ['ယူရို', 'ပေါင်', 'ဒေါ်လာ', 'ယန်း'],
                'correct_answer' => 'Dollar',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'Which internal organ cleans the blood?',
                'question_text_my' => 'သွေးသန့်စင်ပေးသော ကိုယ်တွင်းအင်္ဂါမှာ...',
                'options' => ['Heart', 'Lungs', 'Kidneys', 'Stomach'],
                'options_my' => ['နှလုံး', 'အဆုတ်', 'ကျောက်ကပ်', 'အစာအိမ်'],
                'correct_answer' => 'Kidneys',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'How many seconds are in a minute?',
                'question_text_my' => 'တစ်မိနစ်တွင် စက္ကန့်မည်မျှရှိသနည်း။',
                'options' => ['30', '45', '60', '100'],
                'options_my' => ['၃၀', '၄၅', '၆၀', '၁၀၀'],
                'correct_answer' => '60',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'Which sport uses a shuttlecock?',
                'question_text_my' => 'ကြက်တောင် (shuttlecock) သုံးသော အားကစားမှာ...',
                'options' => ['Tennis', 'Badminton', 'Cricket', 'Squash'],
                'options_my' => ['တင်းနစ်', 'ကြက်တောင်', 'ခရစ်ကက်', 'စကွက်ရှ်'],
                'correct_answer' => 'Badminton',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'Who painted the Mona Lisa?',
                'question_text_my' => 'မိုနာလီဇာကို ရေးဆွဲခဲ့သူမှာ...',
                'options' => ['Van Gogh', 'Picasso', 'Da Vinci', 'Michelangelo'],
                'options_my' => ['ဗန်ဂိုး', 'ပက်ကက်ဆို', 'ဒါဗင်ချီ', 'မိုက်ကယ်အိန်ဂျလို'],
                'correct_answer' => 'Da Vinci',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'Which festival is known as the Festival of Lights?',
                'question_text_my' => 'မီးထွန်းပွဲတော်ဟု လူသိများသော ပွဲတော်မှာ...',
                'options' => ['Holi', 'Diwali', 'Eid', 'Christmas'],
                'options_my' => ['ဟိုလီ', 'ဒေဝါလီ', 'အစ်ဒ်', 'ခရစ္စမတ်'],
                'correct_answer' => 'Diwali',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'What is the largest country by area?',
                'question_text_my' => 'ဧရိယာအကျယ်ဆုံး နိုင်ငံမှာ...',
                'options' => ['China', 'USA', 'Russia', 'Canada'],
                'options_my' => ['တရုတ်', 'အမေရိကန်', 'ရုရှား', 'ကနေဒါ'],
                'correct_answer' => 'Russia',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'How many players are in a soccer team?',
                'question_text_my' => 'ဘောလုံးအသင်းတစ်သင်းတွင် ကစားသမားမည်မျှပါသနည်း။',
                'options' => ['9', '10', '11', '12'],
                'options_my' => ['၉', '၁၀', '၁၁', '၁၂'],
                'correct_answer' => '11',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'What is the capital of the UK?',
                'question_text_my' => 'UK ၏ မြို့တော်မှာ...',
                'options' => ['Paris', 'Dublin', 'London', 'Berlin'],
                'options_my' => ['ပဲရစ်', 'ဒပ်ဘလင်', 'လန်ဒန်', 'ဘာလင်'],
                'correct_answer' => 'London',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'Which planet has rings?',
                'question_text_my' => 'ကွင်းများရှိသော ဂြိုဟ်မှာ...',
                'options' => ['Mars', 'Venus', 'Saturn', 'Mercury'],
                'options_my' => ['အင်္ဂါဂြိုဟ်', 'သောကြာဂြိုဟ်', 'စနေဂြိုဟ်', 'ဗုဒ္ဓဟူးဂြိုဟ်'],
                'correct_answer' => 'Saturn',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'What is the main language of Brazil?',
                'question_text_my' => 'ဘရာဇီးနိုင်ငံ၏ အဓိကဘာသာစကားမှာ...',
                'options' => ['Spanish', 'Portuguese', 'French', 'English'],
                'options_my' => ['စပိန်', 'ပေါ်တူဂီ', 'ပြင်သစ်', 'အင်္ဂလိပ်'],
                'correct_answer' => 'Portuguese',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'Which vitamin is abundant in oranges?',
                'question_text_my' => 'လိမ္မော်သီးတွင် အများဆုံးပါဝင်သော ဗီတာမင်မှာ...',
                'options' => ['Vitamin A', 'Vitamin C', 'Vitamin D', 'Vitamin K'],
                'options_my' => ['ဗီတာမင် A', 'ဗီတာမင် C', 'ဗီတာမင် D', 'ဗီတာမင် K'],
                'correct_answer' => 'Vitamin C',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'Who wrote "Harry Potter"?',
                'question_text_my' => '"Harry Potter" ကို ရေးသားခဲ့သူမှာ...',
                'options' => ['Tolkien', 'Rowling', 'Lewis', 'Dahl'],
                'options_my' => ['တော်ကီး', 'ရိုးလင်း', 'လူးဝစ်', 'ဒေါလ်'],
                'correct_answer' => 'Rowling',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'What is the largest ocean?',
                'question_text_my' => 'အကြီးဆုံး သမုဒ္ဒရာမှာ...',
                'options' => ['Atlantic', 'Indian', 'Pacific', 'Arctic'],
                'options_my' => ['အတ္တလန္တိတ်', 'အိန္ဒိယ', 'ပစိဖိတ်', 'အာတိတ်'],
                'correct_answer' => 'Pacific',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'How many years are in a century?',
                'question_text_my' => 'ရာစုနှစ်တစ်ခုတွင် နှစ်ပေါင်းမည်မျှရှိသနည်း။',
                'options' => ['10', '50', '100', '1000'],
                'options_my' => ['၁၀', '၅၀', '၁၀၀', '၁၀၀၀'],
                'correct_answer' => '100',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'Which animal sleeps standing up?',
                'question_text_my' => 'မတ်တတ်ရပ်လျက် အိပ်သော တိရစ္ဆာန်မှာ...',
                'options' => ['Dog', 'Cat', 'Horse', 'Pig'],
                'options_my' => ['ခွေး', 'ကြောင်', 'မြင်း', 'ဝက်'],
                'correct_answer' => 'Horse',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'What is the tallest mountain in the world?',
                'question_text_my' => 'ကမ္ဘာပေါ်တွင် အမြင့်ဆုံးတောင်မှာ...',
                'options' => ['K2', 'Everest', 'Kilimanjaro', 'Fuji'],
                'options_my' => ['K2', 'အဲဗရက်', 'ကီလီမန်ဂျာရို', 'ဖူဂျီ'],
                'correct_answer' => 'Everest',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'Which country gave the Statue of Liberty to the USA?',
                'question_text_my' => 'အမေရိကန်ကို လွတ်လပ်ရေးရုပ်တု လက်ဆောင်ပေးသော နိုင်ငံမှာ...',
                'options' => ['UK', 'France', 'Germany', 'Italy'],
                'options_my' => ['ဗြိတိန်', 'ပြင်သစ်', 'ဂျာမနီ', 'အီတလီ'],
                'correct_answer' => 'France',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'How many keys are on a standard piano?',
                'question_text_my' => 'စန္ဒရားတစ်လုံးတွင် ခလုတ်မည်မျှပါသနည်း။',
                'options' => ['66', '77', '88', '99'],
                'options_my' => ['၆၆', '၇၇', '၈၈', '၉၉'],
                'correct_answer' => '88',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'What is the chemical symbol for Iron?',
                'question_text_my' => 'သံ၏ ဓာတုသင်္ကေတမှာ...',
                'options' => ['Ir', 'Fe', 'In', 'Zn'],
                'options_my' => ['Ir', 'Fe', 'In', 'Zn'],
                'correct_answer' => 'Fe',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'Which country is famous for sushi?',
                'question_text_my' => 'ဆူရှီဖြင့် ကျော်ကြားသော နိုင်ငံမှာ...',
                'options' => ['China', 'Thailand', 'Japan', 'Korea'],
                'options_my' => ['တရုတ်', 'ထိုင်း', 'ဂျပန်', 'ကိုရီးယား'],
                'correct_answer' => 'Japan',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'What is the hardest natural substance?',
                'question_text_my' => 'အမာဆုံး သဘာဝပစ္စည်းမှာ...',
                'options' => ['Gold', 'Iron', 'Diamond', 'Steel'],
                'options_my' => ['ရွှေ', 'သံ', 'စိန်', 'သံမဏိ'],
                'correct_answer' => 'Diamond',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'Which is the largest bird?',
                'question_text_my' => 'အကြီးဆုံးငှက်မှာ...',
                'options' => ['Eagle', 'Ostrich', 'Penguin', 'Albatross'],
                'options_my' => ['လင်းယုန်', 'ငှက်ကကုလားအုတ်', 'ပင်ဂွင်း', 'အယ်လ်ဘာထရော့'],
                'correct_answer' => 'Ostrich',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'What is the currency of the UK?',
                'question_text_my' => 'UK ၏ ငွေကြေးမှာ...',
                'options' => ['Dollar', 'Euro', 'Pound', 'Franc'],
                'options_my' => ['ဒေါ်လာ', 'ယူရို', 'ပေါင်', 'ဖရန့်'],
                'correct_answer' => 'Pound',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'Which language is spoken in Mexico?',
                'question_text_my' => 'မက္ကဆီကိုတွင် ပြောသော ဘာသာစကားမှာ...',
                'options' => ['English', 'Spanish', 'Portuguese', 'French'],
                'options_my' => ['အင်္ဂလိပ်', 'စပိန်', 'ပေါ်တူဂီ', 'ပြင်သစ်'],
                'correct_answer' => 'Spanish',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'What is the boiling point of water?',
                'question_text_my' => 'ရေဆူမှတ်သည်...',
                'options' => ['90°C', '100°C', '110°C', '120°C'],
                'options_my' => ['၉၀°C', '၁၀၀°C', '၁၁၀°C', '၁၂၀°C'],
                'correct_answer' => '100°C',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'Who invented the light bulb?',
                'question_text_my' => 'မီးလုံးကို တီထွင်ခဲ့သူမှာ...',
                'options' => ['Tesla', 'Bell', 'Edison', 'Newton'],
                'options_my' => ['တက်စလာ', 'ဘဲလ်', 'အက်ဒီဆင်', 'နယူတန်'],
                'correct_answer' => 'Edison',
                'language' => 'en'
            ],

            // --- Hard (30 Questions) ---
            [
                'category' => 'General Knowledge',
                'difficulty' => 'hard',
                'question_text' => 'What is the currency of Japan?',
                'question_text_my' => 'ဂျပန်နိုင်ငံ၏ ငွေကြေးမှာ...',
                'options' => ['Yuan', 'Won', 'Yen', 'Ringgit'],
                'options_my' => ['ယွမ်', 'ဝမ်', 'ယန်း', 'ရင်းဂစ်'],
                'correct_answer' => 'Yen',
                'language' => 'en'
            ], //
            [
                'category' => 'General Knowledge',
                'difficulty' => 'hard',
                'question_text' => 'Which planet has the most moons?',
                'question_text_my' => 'လံအရံဂြိုဟ် အများဆုံးရှိသော ဂြိုဟ်မှာ...',
                'options' => ['Jupiter', 'Saturn', 'Uranus', 'Mars'],
                'options_my' => ['ကြာသပတေးဂြိုဟ်', 'စနေဂြိုဟ်', 'ယူရေးနပ်စ်', 'အင်္ဂါဂြိုဟ်'],
                'correct_answer' => 'Saturn',
                'language' => 'en'
            ], //
            [
                'category' => 'General Knowledge',
                'difficulty' => 'hard',
                'question_text' => 'What is the hardest rock?',
                'question_text_my' => 'အမာဆုံး ကျောက်မှာ...',
                'options' => ['Granite', 'Diamond', 'Marble', 'Slate'],
                'options_my' => ['ဂရက်နိုက်', 'စိန်', 'စကျင်ကျောက်', 'ကျောက်သင်ပုန်းကျောက်'],
                'correct_answer' => 'Diamond',
                'language' => 'en'
            ], //
            [
                'category' => 'General Knowledge',
                'difficulty' => 'hard',
                'question_text' => 'How many hearts does an octopus have?',
                'question_text_my' => 'ရေဘဝဲတွင် နှလုံးမည်မျှရှိသနည်း။',
                'options' => ['1', '2', '3', '4'],
                'options_my' => ['၁', '၂', '၃', '၄'],
                'correct_answer' => '3',
                'language' => 'en'
            ], //
            [
                'category' => 'General Knowledge',
                'difficulty' => 'hard',
                'question_text' => 'Who is the god of thunder in Norse mythology?',
                'question_text_my' => 'Norse ဒဏ္ဍာရီလာ မိုးကြိုးနတ်ဘုရားမှာ...',
                'options' => ['Loki', 'Odin', 'Thor', 'Freya'],
                'options_my' => ['လိုကီ', 'အိုဒင်', 'ဆော်', 'ဖရီယာ'],
                'correct_answer' => 'Thor',
                'language' => 'en'
            ], //
            [
                'category' => 'General Knowledge',
                'difficulty' => 'hard',
                'question_text' => 'Which element has the symbol Au?',
                'question_text_my' => 'Au သင်္ကေတသည် မည်သည့်ဒြပ်စင်ဖြစ်သနည်း။',
                'options' => ['Silver', 'Gold', 'Copper', 'Iron'],
                'options_my' => ['ငွေ', 'ရွှေ', 'ကြေးနီ', 'သံ'],
                'correct_answer' => 'Gold',
                'language' => 'en'
            ], //
            [
                'category' => 'General Knowledge',
                'difficulty' => 'hard',
                'question_text' => 'Which chess piece can only move diagonally?',
                'question_text_my' => 'စစ်တုရင်တွင် ထောင့်ဖြတ်သာ ရွေ့နိုင်သော အရုပ်မှာ...',
                'options' => ['King', 'Rook', 'Bishop', 'Knight'],
                'options_my' => ['ဘုရင်', 'ရထား', 'ဘုန်းကြီး', 'မြင်း'],
                'correct_answer' => 'Bishop',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'hard',
                'question_text' => 'What is the smallest bone in the human body?',
                'question_text_my' => 'လူ့ခန္ဓာကိုယ်တွင် အသေးဆုံးအရိုးမှာ...',
                'options' => ['Stapes', 'Femur', 'Tibia', 'Rib'],
                'options_my' => ['Stapes (နားအတွင်းရိုး)', 'ပေါင်ရိုး', 'ခြေသလုံးရိုး', 'နံရိုး'],
                'correct_answer' => 'Stapes',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'hard',
                'question_text' => 'Which element is liquid at room temperature?',
                'question_text_my' => 'အခန်းအပူချိန်တွင် အရည်ဖြစ်သော ဒြပ်စင်မှာ...',
                'options' => ['Mercury', 'Iron', 'Gold', 'Lead'],
                'options_my' => ['ပြဒါး', 'သံ', 'ရွှေ', 'ခဲ'],
                'correct_answer' => 'Mercury',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'hard',
                'question_text' => 'Who founded Microsoft?',
                'question_text_my' => 'Microsoft ကို တည်ထောင်သူမှာ...',
                'options' => ['Steve Jobs', 'Bill Gates', 'Elon Musk', 'Jeff Bezos'],
                'options_my' => ['စတိခ်ဂျော့', 'ဘီလ်ဂိတ်', 'အီလွန်မတ်စ်', 'ဂျက်ဖ်ဘီဇော့'],
                'correct_answer' => 'Bill Gates',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'hard',
                'question_text' => 'What is the capital of Australia?',
                'question_text_my' => 'သြစတြေးလျ၏ မြို့တော်မှာ...',
                'options' => ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
                'options_my' => ['ဆစ်ဒနီ', 'မဲလ်ဘုန်း', 'ကန်ဘာရာ', 'ပါ့သ်'],
                'correct_answer' => 'Canberra',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'hard',
                'question_text' => 'How many years are in a millennium?',
                'question_text_my' => 'ထောင်စုနှစ်တစ်ခုတွင် နှစ်ပေါင်းမည်မျှရှိသနည်း။',
                'options' => ['100', '500', '1000', '10000'],
                'options_my' => ['၁၀၀', '၅၀၀', '၁၀၀၀', '၁၀၀၀၀'],
                'correct_answer' => '1000',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'hard',
                'question_text' => 'Which planet is the hottest?',
                'question_text_my' => 'အပူဆုံးဂြိုဟ်မှာ...',
                'options' => ['Mercury', 'Venus', 'Mars', 'Jupiter'],
                'options_my' => ['ဗုဒ္ဓဟူးဂြိုဟ်', 'သောကြာဂြိုဟ်', 'အင်္ဂါဂြိုဟ်', 'ကြာသပတေးဂြိုဟ်'],
                'correct_answer' => 'Venus',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'hard',
                'question_text' => 'What is the national flower of Japan?',
                'question_text_my' => 'ဂျပန်နိုင်ငံ၏ နိုင်ငံတော်ပန်းမှာ...',
                'options' => ['Rose', 'Lotus', 'Cherry Blossom', 'Lily'],
                'options_my' => ['နှင်းဆီ', 'ကြာ', 'ဆာကူရာ (Cherry Blossom)', 'လီလီ'],
                'correct_answer' => 'Cherry Blossom',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'hard',
                'question_text' => 'Which organ produces insulin?',
                'question_text_my' => 'အင်ဆူလင်ထုတ်ပေးသော အင်္ဂါမှာ...',
                'options' => ['Liver', 'Pancreas', 'Kidney', 'Heart'],
                'options_my' => ['အသည်း', 'ပန်ကရိယ', 'ကျောက်ကပ်', 'နှလုံး'],
                'correct_answer' => 'Pancreas',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'hard',
                'question_text' => 'What does DNA stand for?',
                'question_text_my' => 'DNA ၏ အရှည်ကောက်မှာ...',
                'options' => ['Deoxyribonucleic Acid', 'Deoxyribogenetic Acid', 'Data New Access', 'Dual Nature Acid'],
                'options_my' => ['Deoxyribonucleic Acid', 'Deoxyribogenetic Acid', 'Data New Access', 'Dual Nature Acid'],
                'correct_answer' => 'Deoxyribonucleic Acid',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'hard',
                'question_text' => 'Who was the first female Prime Minister of the UK?',
                'question_text_my' => 'ဗြိတိန်၏ ပထမဆုံး အမျိုးသမီးဝန်ကြီးချုပ်မှာ...',
                'options' => ['Theresa May', 'Margaret Thatcher', 'Elizabeth II', 'Indira Gandhi'],
                'options_my' => ['ထရီဇာမေ', 'မာဂရက်သက်ချာ', 'အဲလိဇဘက် ၂', 'အင်ဒီယာဂန္ဒီ'],
                'correct_answer' => 'Margaret Thatcher',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'hard',
                'question_text' => 'Which planet spins clockwise?',
                'question_text_my' => 'လက်ယာရစ် လည်ပတ်သော ဂြိုဟ်မှာ...',
                'options' => ['Earth', 'Mars', 'Venus', 'Jupiter'],
                'options_my' => ['ကမ္ဘာ', 'အင်္ဂါဂြိုဟ်', 'သောကြာဂြိုဟ်', 'ကြာသပတေးဂြိုဟ်'],
                'correct_answer' => 'Venus',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'hard',
                'question_text' => 'How many valves does the heart have?',
                'question_text_my' => 'နှလုံးတွင် အဆို့ရှင်မည်မျှရှိသနည်း။',
                'options' => ['2', '3', '4', '5'],
                'options_my' => ['၂', '၃', '၄', '၅'],
                'correct_answer' => '4',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'hard',
                'question_text' => 'What is the largest island in the world?',
                'question_text_my' => 'ကမ္ဘာပေါ်တွင် အကြီးဆုံးကျွန်းမှာ...',
                'options' => ['Australia', 'Greenland', 'Borneo', 'Madagascar'],
                'options_my' => ['သြစတြေးလျ', 'ဂရင်းလန်း', 'ဘော်နီယို', 'မဒါဂတ်စကား'],
                'correct_answer' => 'Greenland',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'hard',
                'question_text' => 'Which blood type is the universal donor?',
                'question_text_my' => 'မည်သူ့ကိုမဆို သွေးလှူနိုင်သော သွေးအမျိုးအစားမှာ...',
                'options' => ['A', 'B', 'AB', 'O-'],
                'options_my' => ['A', 'B', 'AB', 'O-'],
                'correct_answer' => 'O-',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'hard',
                'question_text' => 'What is the speed of light?',
                'question_text_my' => 'အလင်း၏အလျင်မှာ...',
                'options' => ['300,000 km/s', '150,000 km/s', '100,000 km/s', '1,000 km/s'],
                'options_my' => ['၃၀၀,၀၀၀ km/s', '၁၅၀,၀၀၀ km/s', '၁၀၀,၀၀၀ km/s', '၁,၀၀၀ km/s'],
                'correct_answer' => '300,000 km/s',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'hard',
                'question_text' => 'Who painted the Sistine Chapel ceiling?',
                'question_text_my' => 'Sistine Chapel မျက်နှာကြက်ကို ပန်းချီဆွဲသူမှာ...',
                'options' => ['Da Vinci', 'Raphael', 'Michelangelo', 'Donatello'],
                'options_my' => ['ဒါဗင်ချီ', 'ရာဖေးလ်', 'မိုက်ကယ်အိန်ဂျလို', 'ဒေါနတဲလို'],
                'correct_answer' => 'Michelangelo',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'hard',
                'question_text' => 'Which gas makes up most of the atmosphere?',
                'question_text_my' => 'လေထုထဲတွင် အများဆုံးပါဝင်သော ဓာတ်ငွေ့မှာ...',
                'options' => ['Oxygen', 'Hydrogen', 'Nitrogen', 'Carbon Dioxide'],
                'options_my' => ['အောက်ဆီဂျင်', 'ဟိုက်ဒရိုဂျင်', 'နိုက်ထရိုဂျင်', 'ကာဗွန်ဒိုင်အောက်ဆိုက်'],
                'correct_answer' => 'Nitrogen',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'hard',
                'question_text' => 'What is the main ingredient of glass?',
                'question_text_my' => 'ဖန်၏ အဓိကပါဝင်ပစ္စည်းမှာ...',
                'options' => ['Sand', 'Clay', 'Metal', 'Stone'],
                'options_my' => ['သဲ', 'ရွှံ့', 'သတ္တု', 'ကျောက်'],
                'correct_answer' => 'Sand',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'hard',
                'question_text' => 'How many stripes are on the US flag?',
                'question_text_my' => 'အမေရိကန်အလံတွင် အစင်းကြောင်းမည်မျှပါသနည်း။',
                'options' => ['10', '11', '12', '13'],
                'options_my' => ['၁၀', '၁၁', '၁၂', '၁၃'],
                'correct_answer' => '13',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'hard',
                'question_text' => 'What is the rarest blood type?',
                'question_text_my' => 'အရှားပါးဆုံး သွေးအမျိုးအစားမှာ...',
                'options' => ['O+', 'A+', 'AB-', 'B-'],
                'options_my' => ['O+', 'A+', 'AB-', 'B-'],
                'correct_answer' => 'AB-',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'hard',
                'question_text' => 'Which country has the most people?',
                'question_text_my' => 'လူဦးရေအများဆုံး နိုင်ငံမှာ...',
                'options' => ['China', 'India', 'USA', 'Indonesia'],
                'options_my' => ['တရုတ်', 'အိန္ဒိယ', 'အမေရိကန်', 'အင်ဒိုနီးရှား'],
                'correct_answer' => 'India', // Updated based on recent data
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'hard',
                'question_text' => 'What is the largest internal organ?',
                'question_text_my' => 'အကြီးဆုံး ကိုယ်တွင်းအင်္ဂါမှာ...',
                'options' => ['Heart', 'Lungs', 'Liver', 'Stomach'],
                'options_my' => ['နှလုံး', 'အဆုတ်', 'အသည်း', 'အစာအိမ်'],
                'correct_answer' => 'Liver',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'hard',
                'question_text' => 'Which year did the Titanic sink?',
                'question_text_my' => 'တိုင်တန်းနစ်သင်္ဘော နှစ်မြုပ်ခဲ့သောနှစ်မှာ...',
                'options' => ['1910', '1912', '1914', '1920'],
                'options_my' => ['၁၉၁၀', '၁၉၁၂', '၁၉၁၄', '၁၉၂၀'],
                'correct_answer' => '1912',
                'language' => 'en'
            ],
        ];

        foreach ($questions as $q) {
            Question::create($q);
        }
    }
}
