<?php

namespace Database\Seeders;

use App\Models\Question;
use Illuminate\Database\Seeder;

class ScienceQuestionSeeder extends Seeder
{
    public function run(): void
    {
        $questions = [
            // --- Easy (35 Questions) ---
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'What planet is closest to the Sun?',
                'question_text_my' => 'နေနှင့် အနီးဆုံးဂြိုဟ်သည် အဘယ်နည်း။',
                'options' => ['Venus', 'Mercury', 'Mars', 'Earth'],
                'options_my' => ['သောကြာဂြိုဟ်', 'ဗုဒ္ဓဟူးဂြိုဟ်', 'အင်္ဂါဂြိုဟ်', 'ကမ္ဘာ'],
                'correct_answer' => 'Mercury',
                'language' => 'en'
            ], // [cite: 39, 40]
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'What is the chemical symbol for Oxygen?',
                'question_text_my' => 'အောက်ဆီဂျင်၏ ဓာတုသင်္ကေတသည် အဘယ်နည်း။',
                'options' => ['O', 'O2', 'Ox', 'Og'],
                'options_my' => ['O', 'O2', 'Ox', 'Og'],
                'correct_answer' => 'O',
                'language' => 'en'
            ], // [cite: 41]
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'Humans breathe in Oxygen and breathe out ...',
                'question_text_my' => 'လူတို့ အောက်ဆီဂျင်ကို ရှူသွင်းပြီး ... ကို ရှူထုတ်သည်။',
                'options' => ['Nitrogen', 'Carbon Dioxide', 'Hydrogen', 'Helium'],
                'options_my' => ['နိုက်ထရိုဂျင်', 'ကာဗွန်ဒိုင်အောက်ဆိုက်', 'ဟိုက်ဒရိုဂျင်', 'ဟီလီယမ်'],
                'correct_answer' => 'Carbon Dioxide',
                'language' => 'en'
            ], // [cite: 44, 45]
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'Which animal lays eggs?',
                'question_text_my' => 'မည်သည့်တိရစ္ဆာန်သည် ဥဥသနည်း။',
                'options' => ['Dog', 'Cat', 'Duck', 'Sheep'],
                'options_my' => ['ခွေး', 'ကြောင်', 'ဘဲ', 'သိုး'],
                'correct_answer' => 'Duck',
                'language' => 'en'
            ], // [cite: 51, 52]
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'Water boils at what degrees Celsius?',
                'question_text_my' => 'ရေသည် မည်သည့် အပူချိန် (ဆဲလ်စီးယပ်စ်) တွင် ဆူပွက်သနည်း။',
                'options' => ['90', '100', '110', '120'],
                'options_my' => ['၉၀', '၁၀၀', '၁၁၀', '၁၂၀'],
                'correct_answer' => '100',
                'language' => 'en'
            ], // [cite: 57, 58]
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'What star provides light to Earth?',
                'question_text_my' => 'ကမ္ဘာမြေကို အလင်းပေးသော ကြယ်သည် အဘယ်နည်း။',
                'options' => ['Moon', 'Sun', 'Mars', 'Alpha Centauri'],
                'options_my' => ['လ', 'နေ', 'အင်္ဂါဂြိုဟ်', 'Alpha Centauri'],
                'correct_answer' => 'Sun',
                'language' => 'en'
            ], // [cite: 64, 65]
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'Which instrument measures temperature?',
                'question_text_my' => 'အပူချိန်ကို တိုင်းတာသော ကိရိယာသည်...',
                'options' => ['Barometer', 'Thermometer', 'Speedometer', 'Compass'],
                'options_my' => ['လေဖိအားတိုင်းကိရိယာ', 'သာမိုမီတာ', 'အမြန်နှုန်းတိုင်းကိရိယာ', 'သံလိုက်အိမ်မြှောင်'],
                'correct_answer' => 'Thermometer',
                'language' => 'en'
            ], // [cite: 71, 72]
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'How many legs does a spider have?',
                'question_text_my' => 'ပင့်ကူတွင် ခြေထောက်မည်မျှရှိသနည်း။',
                'options' => ['6', '8', '10', '12'],
                'options_my' => ['၆', '၈', '၁၀', '၁၂'],
                'correct_answer' => '8',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'Which organ pumps blood?',
                'question_text_my' => 'သွေးကို ညှစ်ထုတ်ပေးသော အင်္ဂါအစိတ်အပိုင်းသည်...',
                'options' => ['Brain', 'Heart', 'Lungs', 'Stomach'],
                'options_my' => ['ဦးနှောက်', 'နှလုံး', 'အဆုတ်', 'အစာအိမ်'],
                'correct_answer' => 'Heart',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'H2O is the chemical formula for...',
                'question_text_my' => 'H2O သည် ... ၏ ဓာတုဖော်မြူလာဖြစ်သည်။',
                'options' => ['Salt', 'Water', 'Air', 'Fire'],
                'options_my' => ['ဆား', 'ရေ', 'လေ', 'မီး'],
                'correct_answer' => 'Water',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'Which planet is known as the Blue Planet?',
                'question_text_my' => 'ဂြိုဟ်ပြာဟု လူသိများသော ဂြိုဟ်သည်...',
                'options' => ['Mars', 'Earth', 'Venus', 'Neptune'],
                'options_my' => ['အင်္ဂါဂြိုဟ်', 'ကမ္ဘာ', 'သောကြာဂြိုဟ်', 'နက်ပ်ကျွန်း'],
                'correct_answer' => 'Earth',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'What do bees produce?',
                'question_text_my' => 'ပျားများက ဘာထုတ်လုပ်သနည်း။',
                'options' => ['Milk', 'Honey', 'Silk', 'Cotton'],
                'options_my' => ['နို့', 'ပျားရည်', 'ပိုး', 'ဝါဂွမ်း'],
                'correct_answer' => 'Honey',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'Which animal is the fastest on land?',
                'question_text_my' => 'ကုန်းပေါ်တွင် အမြန်ဆုံး သတ္တဝါသည်...',
                'options' => ['Lion', 'Horse', 'Cheetah', 'Rabbit'],
                'options_my' => ['ခြင်္သေ့', 'မြင်း', 'ချီတာ', 'ယုန်'],
                'correct_answer' => 'Cheetah',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'What is the color of chlorophyll?',
                'question_text_my' => 'ကလိုရိုဖီးလ် (အစိမ်းရောင်ခြယ်ပစ္စည်း) ၏ အရောင်သည်...',
                'options' => ['Red', 'Blue', 'Green', 'Yellow'],
                'options_my' => ['အနီ', 'အပြာ', 'အစိမ်း', 'အဝါ'],
                'correct_answer' => 'Green',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'At what temperature does water freeze (Celsius)?',
                'question_text_my' => 'ရေသည် မည်သည့်အပူချိန် (C) တွင် ခဲသနည်း။',
                'options' => ['0', '10', '32', '100'],
                'options_my' => ['၀', '၁၀', '၃၂', '၁၀၀'],
                'correct_answer' => '0',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'Which gas do plants absorb?',
                'question_text_my' => 'အပင်များ စုပ်ယူသော ဓာတ်ငွေ့သည်...',
                'options' => ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Helium'],
                'options_my' => ['အောက်ဆီဂျင်', 'ကာဗွန်ဒိုင်အောက်ဆိုက်', 'နိုက်ထရိုဂျင်', 'ဟီလီယမ်'],
                'correct_answer' => 'Carbon Dioxide',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'What is the main source of energy for Earth?',
                'question_text_my' => 'ကမ္ဘာမြေအတွက် အဓိက စွမ်းအင်အရင်းအမြစ်သည်...',
                'options' => ['Moon', 'Sun', 'Fire', 'Wind'],
                'options_my' => ['လ', 'နေ', 'မီး', 'လေ'],
                'correct_answer' => 'Sun',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'How many teeth does an adult human typically have?',
                'question_text_my' => 'လူကြီးတစ်ယောက်တွင် ပုံမှန်အားဖြင့် သွားမည်မျှရှိသနည်း။',
                'options' => ['28', '30', '32', '34'],
                'options_my' => ['၂၈', '၃၀', '၃၂', '၃၄'],
                'correct_answer' => '32',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'Which planet has rings?',
                'question_text_my' => 'ကွင်းများရှိသော ဂြိုဟ်သည်...',
                'options' => ['Mars', 'Venus', 'Saturn', 'Mercury'],
                'options_my' => ['အင်္ဂါဂြိုဟ်', 'သောကြာဂြိုဟ်', 'စနေဂြိုဟ်', 'ဗုဒ္ဓဟူးဂြိုဟ်'],
                'correct_answer' => 'Saturn',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'What is the process of a caterpillar turning into a butterfly?',
                'question_text_my' => 'ခူကောင်မှ လိပ်ပြာဖြစ်လာသော ဖြစ်စဉ်ကို ဘာခေါ်သနည်း။',
                'options' => ['Evolution', 'Metamorphosis', 'Photosynthesis', 'Hibernation'],
                'options_my' => ['ဆင့်ကဲဖြစ်စဉ်', 'Metamorphosis', 'အစာချက်လုပ်ခြင်း', 'ဆောင်းခိုခြင်း'],
                'correct_answer' => 'Metamorphosis',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'Which part of the plant grows underground?',
                'question_text_my' => 'အပင်၏ မြေအောက်တွင် ကြီးထွားသော အစိတ်အပိုင်းသည်...',
                'options' => ['Stem', 'Leaf', 'Root', 'Flower'],
                'options_my' => ['ပင်စည်', 'အရွက်', 'အမြစ်', 'ပန်းပွင့်'],
                'correct_answer' => 'Root',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'What connects muscles to bones?',
                'question_text_my' => 'ကြွက်သားနှင့် အရိုးကို ဆက်ပေးထားသည်မှာ...',
                'options' => ['Skin', 'Tendons', 'Nerves', 'Veins'],
                'options_my' => ['အရေပြား', 'အရွတ် (Tendons)', 'အာရုံကြော', 'သွေးပြန်ကြော'],
                'correct_answer' => 'Tendons',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'Which animal is the largest mammal?',
                'question_text_my' => 'အကြီးဆုံး နို့တိုက်သတ္တဝါသည်...',
                'options' => ['Elephant', 'Blue Whale', 'Giraffe', 'Rhino'],
                'options_my' => ['ဆင်', 'ဝေလငါးပြာကြီး', 'သစ်ကုလားအုတ်', 'ကြံ့'],
                'correct_answer' => 'Blue Whale',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'What falls from clouds?',
                'question_text_my' => 'တိမ်များထဲမှ ဘာကျသနည်း။',
                'options' => ['Sand', 'Rain', 'Smoke', 'Rocks'],
                'options_my' => ['သဲ', 'မိုးရေ', 'မီးခိုး', 'ကျောက်ခဲ'],
                'correct_answer' => 'Rain',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'Which sense do you use to hear?',
                'question_text_my' => 'အသံကြားရရန် မည်သည့်အာရုံကို သုံးသနည်း။',
                'options' => ['Sight', 'Taste', 'Hearing', 'Touch'],
                'options_my' => ['အမြင်', 'အရသာ', 'အကြား', 'အထိအတွေ့'],
                'correct_answer' => 'Hearing',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'Solids, Liquids, and ...?',
                'question_text_my' => 'အခဲ၊ အရည် နှင့် ...?',
                'options' => ['Plasmas', 'Gases', 'Ice', 'Water'],
                'options_my' => ['ပလာစမာ', 'အငွေ့', 'ရေခဲ', 'ရေ'],
                'correct_answer' => 'Gases',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'A person who studies stars is an...',
                'question_text_my' => 'ကြယ်များကို လေ့လာသူသည်...',
                'options' => ['Astronomer', 'Biologist', 'Chemist', 'Doctor'],
                'options_my' => ['နက္ခတ်ပညာရှင်', 'ဇီဝဗေဒပညာရှင်', 'ဓာတုဗေဒပညာရှင်', 'ဆရာဝန်'],
                'correct_answer' => 'Astronomer',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'What color is our blood?',
                'question_text_my' => 'လူ့သွေး၏ အရောင်သည်...',
                'options' => ['Blue', 'Red', 'Green', 'Yellow'],
                'options_my' => ['အပြာ', 'အနီ', 'အစိမ်း', 'အဝါ'],
                'correct_answer' => 'Red',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'Which animal can fly?',
                'question_text_my' => 'မည်သည့်တိရစ္ဆာန် ပျံနိုင်သနည်း။',
                'options' => ['Cat', 'Dog', 'Bat', 'Cow'],
                'options_my' => ['ကြောင်', 'ခွေး', 'လင်းနို့', 'နွား'],
                'correct_answer' => 'Bat',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'Magnet attracts...',
                'question_text_my' => 'သံလိုက်သည် ... ကို ဆွဲယူသည်။',
                'options' => ['Plastic', 'Wood', 'Iron', 'Glass'],
                'options_my' => ['ပလတ်စတစ်', 'သစ်သား', 'သံ', 'ဖန်'],
                'correct_answer' => 'Iron',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'Rainbows appear after...',
                'question_text_my' => 'သက်တံသည် ... ပြီးနောက် ပေါ်လာလေ့ရှိသည်။',
                'options' => ['Snow', 'Rain', 'Wind', 'Heat'],
                'options_my' => ['နှင်းကျ', 'မိုးရွာ', 'လေတိုက်', 'ပူပြင်း'],
                'correct_answer' => 'Rain',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'Which is a citrus fruit?',
                'question_text_my' => 'Citrus (အချဉ်ဓာတ်ပါသော) အသီးသည်...',
                'options' => ['Banana', 'Apple', 'Lemon', 'Grape'],
                'options_my' => ['ငှက်ပျောသီး', 'ပန်းသီး', 'သံပုရာသီး', 'စပျစ်သီး'],
                'correct_answer' => 'Lemon',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'What is the center of the Solar System?',
                'question_text_my' => 'နေအဖွဲ့အစည်း၏ ဗဟိုသည်...',
                'options' => ['Earth', 'Mars', 'Sun', 'Moon'],
                'options_my' => ['ကမ္ဘာ', 'အင်္ဂါဂြိုဟ်', 'နေ', 'လ'],
                'correct_answer' => 'Sun',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'Baby frogs are called...',
                'question_text_my' => 'ဖားလောင်းများကို ... ဟုခေါ်သည်။',
                'options' => ['Cubs', 'Puppies', 'Tadpoles', 'Kittens'],
                'options_my' => ['Cubs', 'Puppies', 'Tadpoles', 'Kittens'],
                'correct_answer' => 'Tadpoles',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'Volcanoes erupt...',
                'question_text_my' => 'မီးတောင်များမှ ... ပေါက်ကွဲထွက်လာသည်။',
                'options' => ['Water', 'Lava', 'Ice', 'Sand'],
                'options_my' => ['ရေ', 'Lava (ချော်ရည်)', 'ရေခဲ', 'သဲ'],
                'correct_answer' => 'Lava',
                'language' => 'en'
            ],

            // --- Medium (35 Questions) ---
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'What is the hardest natural substance on Earth?',
                'question_text_my' => 'ကမ္ဘာပေါ်တွင် အမာဆုံး သဘာဝပစ္စည်းသည် အဘယ်နည်း။',
                'options' => ['Gold', 'Iron', 'Diamond', 'Platinum'],
                'options_my' => ['ရွှေ', 'သံ', 'စိန်', 'ပလက်တီနမ်'],
                'correct_answer' => 'Diamond',
                'language' => 'en'
            ], // [cite: 42, 43]
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'What describes the path of a planet around the sun?',
                'question_text_my' => 'ဂြိုဟ်များ နေကို လှည့်ပတ်သော လမ်းကြောင်းကို ဘာခေါ်သနည်း။',
                'options' => ['Orbit', 'Axis', 'Rotation', 'Galaxy'],
                'options_my' => ['ပတ်လမ်း (Orbit)', 'ဝင်ရိုး (Axis)', 'လည်ပတ်ခြင်း (Rotation)', 'ဂလက်ဆီ (Galaxy)'],
                'correct_answer' => 'Orbit',
                'language' => 'en'
            ], // [cite: 46, 47]
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'What prevents us from floating in air?',
                'question_text_my' => 'လူများကို လေထဲမလွင့်အောင် တားဆီးထားသည်မှာ...',
                'options' => ['Magnetism', 'Friction', 'Gravity', 'Density'],
                'options_my' => ['သံလိုက်', 'ပွတ်တိုက်အား', 'ဆွဲငင်အား (Gravity)', 'သိပ်သည်းဆ'],
                'correct_answer' => 'Gravity',
                'language' => 'en'
            ], // [cite: 49, 50]
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'What is the largest organ in the human body?',
                'question_text_my' => 'လူ့ခန္ဓာကိုယ်တွင် အကြီးဆုံး အစိတ်အပိုင်းသည်...',
                'options' => ['Heart', 'Liver', 'Skin', 'Lungs'],
                'options_my' => ['နှလုံး', 'အသည်း', 'အရေပြား', 'အဆုတ်'],
                'correct_answer' => 'Skin',
                'language' => 'en'
            ], // [cite: 53, 54]
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'Which gas is most abundant in Earth\'s atmosphere?',
                'question_text_my' => 'ကမ္ဘာ့လေထုထဲတွင် မည်သည့်ဓာတ်ငွေ့ အများဆုံးပါဝင်သနည်း။',
                'options' => ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Argon'],
                'options_my' => ['အောက်ဆီဂျင်', 'နိုက်ထရိုဂျင်', 'ကာဗွန်ဒိုင်အောက်ဆိုက်', 'အာဂွန်'],
                'correct_answer' => 'Nitrogen',
                'language' => 'en'
            ], // [cite: 59, 60]
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'How many bones are in an adult human body?',
                'question_text_my' => 'လူကြီးတစ်ယောက်၏ ခန္ဓာကိုယ်တွင် အရိုးမည်မျှရှိသနည်း။',
                'options' => ['206', '208', '210', '212'],
                'options_my' => ['၂၀၆', '၂၀၈', '၂၁၀', '၂၁၂'],
                'correct_answer' => '206',
                'language' => 'en'
            ], // [cite: 62, 63]
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'Which planet is known as the Red Planet?',
                'question_text_my' => 'ဂြိုဟ်နီဟု လူသိများသော ဂြိုဟ်သည်...',
                'options' => ['Venus', 'Jupiter', 'Mars', 'Saturn'],
                'options_my' => ['သောကြာဂြိုဟ်', 'ကြာသပတေးဂြိုဟ်', 'အင်္ဂါဂြိုဟ်', 'စနေဂြိုဟ်'],
                'correct_answer' => 'Mars',
                'language' => 'en'
            ], // [cite: 66, 67]
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'What type of animal is a whale?',
                'question_text_my' => 'ဝေလငါးသည် မည်သည့် တိရစ္ဆာန်အမျိုးအစားဖြစ်သနည်း။',
                'options' => ['Fish', 'Mammal', 'Reptile', 'Amphibian'],
                'options_my' => ['ငါး', 'နို့တိုက်သတ္တဝါ', 'တွားသွားသတ္တဝါ', 'ကုန်းနေရေနေသတ္တဝါ'],
                'correct_answer' => 'Mammal',
                'language' => 'en'
            ], // [cite: 70, 71]
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'What does DNA stand for?',
                'question_text_my' => 'DNA ၏ အရှည်ကောက်သည်...',
                'options' => ['Deoxyribonucleic Acid', 'Deoxyribogenetic Acid', 'Deoxyribonuclear Acid', 'Dyno Nucleic Acid'],
                'options_my' => ['Deoxyribonucleic Acid', 'Deoxyribogenetic Acid', 'Deoxyribonuclear Acid', 'Dyno Nucleic Acid'],
                'correct_answer' => 'Deoxyribonucleic Acid',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'What part of the plant conducts photosynthesis?',
                'question_text_my' => 'အပင်၏ မည်သည့်အစိတ်အပိုင်းတွင် အစာချက်လုပ်ခြင်း ဖြစ်ပေါ်သနည်း။',
                'options' => ['Root', 'Stem', 'Leaf', 'Flower'],
                'options_my' => ['အမြစ်', 'ပင်စည်', 'အရွက်', 'ပန်းပွင့်'],
                'correct_answer' => 'Leaf',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'Which planet is the largest in the solar system?',
                'question_text_my' => 'နေအဖွဲ့အစည်းတွင် အကြီးဆုံးဂြိုဟ်သည်...',
                'options' => ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
                'options_my' => ['ကြာသပတေးဂြိုဟ်', 'စနေဂြိုဟ်', 'ယူရေးနပ်စ်', 'နက်ပ်ကျွန်း'],
                'correct_answer' => 'Jupiter',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'What is the symbol for Gold?',
                'question_text_my' => 'ရွှေ၏ ဓာတုသင်္ကေတသည်...',
                'options' => ['Au', 'Ag', 'Fe', 'Cu'],
                'options_my' => ['Au', 'Ag', 'Fe', 'Cu'],
                'correct_answer' => 'Au',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'Which blood type is the universal donor?',
                'question_text_my' => 'မည်သူ့ကိုမဆို သွေးလှူနိုင်သော သွေးအမျိုးအစားမှာ...',
                'options' => ['A', 'B', 'AB', 'O'],
                'options_my' => ['A', 'B', 'AB', 'O'],
                'correct_answer' => 'O',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'Sound travels fastest through...',
                'question_text_my' => 'အသံသည် ... ဖြတ်သန်းသွားသောအခါ အမြန်ဆုံးဖြစ်သည်။',
                'options' => ['Vacuum', 'Air', 'Water', 'Steel'],
                'options_my' => ['လေဟာနယ်', 'လေ', 'ရေ', 'သံမဏိ'],
                'correct_answer' => 'Steel',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'Who developed the theory of relativity?',
                'question_text_my' => 'Relativity သီအိုရီကို ဖော်ထုတ်ခဲ့သူမှာ...',
                'options' => ['Newton', 'Einstein', 'Galileo', 'Darwin'],
                'options_my' => ['နယူတန်', 'အိုင်းစတိုင်း', 'ဂယ်လီလီယို', 'ဒါဝင်'],
                'correct_answer' => 'Einstein',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'What is the PH level of pure water?',
                'question_text_my' => 'သန့်စင်သော ရေ၏ PH ပမာဏသည်...',
                'options' => ['5', '6', '7', '8'],
                'options_my' => ['၅', '၆', '၇', '၈'],
                'correct_answer' => '7',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'Which vitamin do we get from the sun?',
                'question_text_my' => 'နေရောင်မှ ရရှိနိုင်သော ဗီတာမင်သည်...',
                'options' => ['Vitamin A', 'Vitamin C', 'Vitamin D', 'Vitamin K'],
                'options_my' => ['ဗီတာမင် A', 'ဗီတာမင် C', 'ဗီတာမင် D', 'ဗီတာမင် K'],
                'correct_answer' => 'Vitamin D',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'What is the atomic number of Carbon?',
                'question_text_my' => 'ကာဗွန်၏ အနုမြူနံပါတ် (Atomic Number) သည်...',
                'options' => ['4', '6', '8', '12'],
                'options_my' => ['၄', '၆', '၈', '၁၂'],
                'correct_answer' => '6',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'Fungi include mushrooms and...',
                'question_text_my' => 'Fungi (မှိုမျိုးစိတ်) တွင် မှိုနှင့် ... တို့ ပါဝင်သည်။',
                'options' => ['Moss', 'Yeast', 'Bacteria', 'Algae'],
                'options_my' => ['ရေညှိ', 'Yeast (တဆေး)', 'ဘက်တီးရီးယား', 'ရေညှိပင်'],
                'correct_answer' => 'Yeast',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'Which metal is liquid at room temperature?',
                'question_text_my' => 'အခန်းအပူချိန်တွင် အရည်ဖြစ်နေသော သတ္တုသည်...',
                'options' => ['Gold', 'Silver', 'Mercury', 'Lead'],
                'options_my' => ['ရွှေ', 'ငွေ', 'ပြဒါး (Mercury)', 'ခဲ'],
                'correct_answer' => 'Mercury',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'The ozone layer protects us from...',
                'question_text_my' => 'အိုဇုန်းလွှာသည် ... မှ ကာကွယ်ပေးသည်။',
                'options' => ['Infrared', 'UV Rays', 'Microwaves', 'Radio Waves'],
                'options_my' => ['အနီအောက်ရောင်ခြည်', 'ခရမ်းလွန်ရောင်ခြည် (UV)', 'မိုက်ခရိုဝေ့ဖ်', 'ရေဒီယိုလှိုင်း'],
                'correct_answer' => 'UV Rays',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'How many chambers does the human heart have?',
                'question_text_my' => 'လူ့နှလုံးတွင် အခန်းမည်မျှ ပါရှိသနည်း။',
                'options' => ['2', '3', '4', '5'],
                'options_my' => ['၂', '၃', '၄', '၅'],
                'correct_answer' => '4',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'Which planet rotates on its side?',
                'question_text_my' => 'ဘေးတိုက်လည်ပတ်နေသော ဂြိုဟ်သည်...',
                'options' => ['Mars', 'Uranus', 'Jupiter', 'Neptune'],
                'options_my' => ['အင်္ဂါဂြိုဟ်', 'ယူရေးနပ်စ်', 'ကြာသပတေးဂြိုဟ်', 'နက်ပ်ကျွန်း'],
                'correct_answer' => 'Uranus',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'What is the main gas found in the air we breathe?',
                'question_text_my' => 'ကျွန်ုပ်တို့ရှူသော လေထဲတွင် အများဆုံးပါဝင်သည့် ဓာတ်ငွေ့သည်...',
                'options' => ['Oxygen', 'Nitrogen', 'Carbon', 'Hydrogen'],
                'options_my' => ['အောက်ဆီဂျင်', 'နိုက်ထရိုဂျင်', 'ကာဗွန်', 'ဟိုက်ဒရိုဂျင်'],
                'correct_answer' => 'Nitrogen',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'Antibiotics are used to fight...',
                'question_text_my' => 'ပဋိဇီဝဆေး (Antibiotics) ကို ... တိုက်ဖျက်ရာတွင် သုံးသည်။',
                'options' => ['Viruses', 'Bacteria', 'Allergies', 'Cancer'],
                'options_my' => ['ဗိုင်းရပ်စ်', 'ဘက်တီးရီးယား', 'ဓာတ်မတည့်ခြင်း', 'ကင်ဆာ'],
                'correct_answer' => 'Bacteria',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'Which device converts sunlight into electricity?',
                'question_text_my' => 'နေရောင်ကို လျှပ်စစ်စွမ်းအင်ပြောင်းပေးသော ကိရိယာသည်...',
                'options' => ['Windmill', 'Solar Panel', 'Dam', 'Battery'],
                'options_my' => ['လေရဟတ်', 'ဆိုလာပြား', 'ဆည်', 'ဘက်ထရီ'],
                'correct_answer' => 'Solar Panel',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'What is the closest star to Earth (besides the Sun)?',
                'question_text_my' => 'ကမ္ဘာနှင့် (နေမှလွဲ၍) အနီးဆုံးကြယ်သည်...',
                'options' => ['Sirius', 'Alpha Centauri', 'Betelgeuse', 'Polaris'],
                'options_my' => ['Sirius', 'Alpha Centauri', 'Betelgeuse', 'Polaris'],
                'correct_answer' => 'Alpha Centauri',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'Penicillin was discovered by...',
                'question_text_my' => 'ပင်နီဆီလင်ကို တွေ့ရှိခဲ့သူမှာ...',
                'options' => ['Marie Curie', 'Alexander Fleming', 'Louis Pasteur', 'Newton'],
                'options_my' => ['မေရီကျူရီ', 'အလက်ဇန္ဒားဖလန်းမင်း', 'လူးဝစ်ပါစတာ', 'နယူတန်'],
                'correct_answer' => 'Alexander Fleming',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'What is the study of fossils called?',
                'question_text_my' => 'ကျောက်ဖြစ်ရုပ်ကြွင်းများကို လေ့လာသော ပညာရပ်သည်...',
                'options' => ['Biology', 'Geology', 'Paleontology', 'Archaeology'],
                'options_my' => ['ဇီဝဗေဒ', 'ဘူမိဗေဒ', 'Paleontology', 'ရှေးဟောင်းသုတေသန'],
                'correct_answer' => 'Paleontology',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'Light travels in...',
                'question_text_my' => 'အလင်းသည် ... ဖြင့် သွားသည်။',
                'options' => ['Curved lines', 'Straight lines', 'Zigzag', 'Circles'],
                'options_my' => ['မျဉ်းကွေး', 'မျဉ်းဖြောင့်', 'Zigzag', 'စက်ဝိုင်း'],
                'correct_answer' => 'Straight lines',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'Which gas causes global warming?',
                'question_text_my' => 'ကမ္ဘာကြီးပူနွေးလာမှုကို ဖြစ်စေသော ဓာတ်ငွေ့သည်...',
                'options' => ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Helium'],
                'options_my' => ['အောက်ဆီဂျင်', 'ကာဗွန်ဒိုင်အောက်ဆိုက်', 'နိုက်ထရိုဂျင်', 'ဟီလီယမ်'],
                'correct_answer' => 'Carbon Dioxide',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'What is the largest bone in the human body?',
                'question_text_my' => 'လူ့ခန္ဓာကိုယ်တွင် အကြီးဆုံးအရိုးသည်...',
                'options' => ['Skull', 'Femur', 'Rib', 'Spine'],
                'options_my' => ['ဦးခေါင်းခွံ', 'ပေါင်ရိုး (Femur)', 'နံရိုး', 'ကျောရိုး'],
                'correct_answer' => 'Femur',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'Which planet is known as the Morning Star?',
                'question_text_my' => 'နံနက်ခင်းကြယ်ဟု လူသိများသော ဂြိုဟ်သည်...',
                'options' => ['Mars', 'Venus', 'Jupiter', 'Saturn'],
                'options_my' => ['အင်္ဂါဂြိုဟ်', 'သောကြာဂြိုဟ်', 'ကြာသပတေးဂြိုဟ်', 'စနေဂြိုဟ်'],
                'correct_answer' => 'Venus',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'Electric current is measured in...',
                'question_text_my' => 'လျှပ်စစ်စီးဆင်းမှုကို ... ဖြင့် တိုင်းတာသည်။',
                'options' => ['Volts', 'Amperes', 'Ohms', 'Watts'],
                'options_my' => ['ဗို့', 'အမ်ပီယာ', 'အုမ်း', 'ဝပ်'],
                'correct_answer' => 'Amperes',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'What protects the brain?',
                'question_text_my' => 'ဦးနှောက်ကို ကာကွယ်ပေးထားသည်မှာ...',
                'options' => ['Skull', 'Spine', 'Ribs', 'Skin'],
                'options_my' => ['ဦးခေါင်းခွံ', 'ကျောရိုး', 'နံရိုး', 'အရေပြား'],
                'correct_answer' => 'Skull',
                'language' => 'en'
            ],

            // --- Hard (30 Questions) ---
            [
                'category' => 'Science',
                'difficulty' => 'hard',
                'question_text' => 'Which part of the cell contains genetic material?',
                'question_text_my' => 'ဆဲလ်တစ်ခု၏ မည်သည့်အစိတ်အပိုင်းတွင် မျိုးရိုးဗီဇပစ္စည်းများ ပါဝင်သနည်း။',
                'options' => ['Membrane', 'Cytoplasm', 'Nucleus', 'Mitochondria'],
                'options_my' => ['အမြှေးပါး', 'ဆိုက်တိုပလာဆမ်', 'နျူကလိယ', 'မိုင်တိုကွန်ဒရီးယား'],
                'correct_answer' => 'Nucleus',
                'language' => 'en'
            ], // [cite: 48, 49]
            [
                'category' => 'Science',
                'difficulty' => 'hard',
                'question_text' => 'What is the speed of sound generally called?',
                'question_text_my' => 'အသံ၏အလျင်ကို ယေဘုယျအားဖြင့် ဘာခေါ်သနည်း။',
                'options' => ['Mach 1', 'Warp Speed', 'Light Speed', 'Sonic Boom'],
                'options_my' => ['Mach 1', 'Warp Speed', 'Light Speed', 'Sonic Boom'],
                'correct_answer' => 'Mach 1',
                'language' => 'en'
            ], // [cite: 55, 56]
            [
                'category' => 'Science',
                'difficulty' => 'hard',
                'question_text' => 'What is the powerhouse of the cell?',
                'question_text_my' => 'ဆဲလ်၏ စွမ်းအင်စက်ရုံမှာ...',
                'options' => ['Nucleus', 'Mitochondria', 'Ribosome', 'Lysosome'],
                'options_my' => ['နျူကလိယ', 'မိုင်တိုကွန်ဒရီးယား', 'ရိုင်ဘိုဆုမ်း', 'လိုက်ဆိုဆုမ်း'],
                'correct_answer' => 'Mitochondria',
                'language' => 'en'
            ], // [cite: 61, 62]
            [
                'category' => 'Science',
                'difficulty' => 'hard',
                'question_text' => 'What is the chemical formula for table salt?',
                'question_text_my' => 'စားပွဲတင်ဆား၏ ဓာတုဗေဒ ဖော်မြူလာသည်...',
                'options' => ['NaCl', 'KCl', 'NaOH', 'HCl'],
                'options_my' => ['NaCl', 'KCl', 'NaOH', 'HCl'],
                'correct_answer' => 'NaCl',
                'language' => 'en'
            ], // [cite: 68, 69]
            [
                'category' => 'Science',
                'difficulty' => 'hard',
                'question_text' => 'What is the center of an atom called?',
                'question_text_my' => 'အက်တမ်၏ ဗဟိုကို ဘာခေါ်သနည်း။',
                'options' => ['Proton', 'Electron', 'Nucleus', 'Neutron'],
                'options_my' => ['ပရိုတွန်', 'အီလက်ထရွန်', 'နျူကလိယ', 'နယူထရွန်'],
                'correct_answer' => 'Nucleus',
                'language' => 'en'
            ], // [cite: 73, 74]
            [
                'category' => 'Science',
                'difficulty' => 'hard',
                'question_text' => 'What is the speed of light approx in km/s?',
                'question_text_my' => 'အလင်း၏အလျင်သည် (km/s) ခန့်မှန်းခြေအားဖြင့်...',
                'options' => ['300,000', '150,000', '1,000,000', '3,000'],
                'options_my' => ['၃၀၀,၀၀၀', '၁၅၀,၀၀၀', '၁,၀၀၀,၀၀၀', '၃,၀၀၀'],
                'correct_answer' => '300,000',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'hard',
                'question_text' => 'Which particle has a negative charge?',
                'question_text_my' => 'အနှုတ်ဓာတ်ဆောင်သော အမှုန်သည်...',
                'options' => ['Proton', 'Neutron', 'Electron', 'Photon'],
                'options_my' => ['ပရိုတွန်', 'နယူထရွန်', 'အီလက်ထရွန်', 'ဖိုတွန်'],
                'correct_answer' => 'Electron',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'hard',
                'question_text' => 'The absolute zero temperature is...',
                'question_text_my' => 'အနိမ့်ဆုံးအပူချိန် (Absolute Zero) သည်...',
                'options' => ['0 C', '-273.15 C', '-100 C', '-500 C'],
                'options_my' => ['၀ C', '-၂၇၃.၁၅ C', '-၁၀၀ C', '-၅၀၀ C'],
                'correct_answer' => '-273.15 C',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'hard',
                'question_text' => 'What is the most abundant protein in the human body?',
                'question_text_my' => 'လူ့ခန္ဓာကိုယ်တွင် အများဆုံးသော ပရိုတင်းသည်...',
                'options' => ['Keratin', 'Collagen', 'Insulin', 'Hemoglobin'],
                'options_my' => ['Keratin', 'ကော်လဂျင်', 'အင်ဆူလင်', 'ဟေမိုဂလိုဘင်'],
                'correct_answer' => 'Collagen',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'hard',
                'question_text' => 'Which law states "For every action, there is an equal and opposite reaction"?',
                'question_text_my' => '"သက်ရောက်မှုတိုင်း၌ တန်ပြန်သက်ရောက်မှုရှိသည်" ဆိုသော နိယာမသည်...',
                'options' => ['Newton\'s 1st Law', 'Newton\'s 2nd Law', 'Newton\'s 3rd Law', 'Ohm\'s Law'],
                'options_my' => ['နယူတန် ပထမနိယာမ', 'နယူတန် ဒုတိယနိယာမ', 'နယူတန် တတိယနိယာမ', 'အုမ်းနိယာမ'],
                'correct_answer' => 'Newton\'s 3rd Law',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'hard',
                'question_text' => 'What is the chemical symbol for Tungsten?',
                'question_text_my' => 'Tungsten ၏ ဓာတုသင်္ကေတသည်...',
                'options' => ['T', 'Tu', 'W', 'Tn'],
                'options_my' => ['T', 'Tu', 'W', 'Tn'],
                'correct_answer' => 'W',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'hard',
                'question_text' => 'Which part of the brain controls balance?',
                'question_text_my' => 'ခန္ဓာကိုယ်ဟန်ချက်ညီမှုကို ထိန်းချုပ်သော ဦးနှောက်အပိုင်းသည်...',
                'options' => ['Cerebrum', 'Cerebellum', 'Brain Stem', 'Thalamus'],
                'options_my' => ['Cerebrum', 'Cerebellum', 'Brain Stem', 'Thalamus'],
                'correct_answer' => 'Cerebellum',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'hard',
                'question_text' => 'What is the standard unit of force?',
                'question_text_my' => 'အား (Force) ၏ ယူနစ်သည်...',
                'options' => ['Joule', 'Newton', 'Watt', 'Pascal'],
                'options_my' => ['Joule', 'Newton', 'Watt', 'Pascal'],
                'correct_answer' => 'Newton',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'hard',
                'question_text' => 'Mitosis is a process of...',
                'question_text_my' => 'Mitosis သည် ... ဖြစ်စဉ်ဖြစ်သည်။',
                'options' => ['Cell division', 'Digestion', 'Respiration', 'Reproduction'],
                'options_my' => ['ဆဲလ်ကွဲပွားခြင်း', 'အစာချေခြင်း', 'အသက်ရှူခြင်း', 'မျိုးပွားခြင်း'],
                'correct_answer' => 'Cell division',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'hard',
                'question_text' => 'Which element is liquid at room temperature (besides Mercury)?',
                'question_text_my' => 'အခန်းအပူချိန်တွင် အရည်ဖြစ်သော ဒြပ်စင် (Mercury မှလွဲ၍) သည်...',
                'options' => ['Bromine', 'Gallium', 'Iodine', 'Cesium'],
                'options_my' => ['Bromine', 'Gallium', 'Iodine', 'Cesium'],
                'correct_answer' => 'Bromine',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'hard',
                'question_text' => 'What is the heaviest naturally occurring element?',
                'question_text_my' => 'သဘာဝအလျောက်တွေ့ရသော အလေးဆုံးဒြပ်စင်သည်...',
                'options' => ['Uranium', 'Plutonium', 'Lead', 'Gold'],
                'options_my' => ['ယူရေနီယမ်', 'ပလူတိုနီယမ်', 'ခဲ', 'ရွှေ'],
                'correct_answer' => 'Uranium',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'hard',
                'question_text' => 'Who discovered the X-ray?',
                'question_text_my' => 'X-ray ကို တွေ့ရှိခဲ့သူမှာ...',
                'options' => ['Roentgen', 'Curie', 'Edison', 'Tesla'],
                'options_my' => ['Roentgen', 'Curie', 'Edison', 'Tesla'],
                'correct_answer' => 'Roentgen',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'hard',
                'question_text' => 'What is the closest galaxy to the Milky Way?',
                'question_text_my' => 'Milky Way နှင့် အနီးဆုံး ဂလက်ဆီသည်...',
                'options' => ['Andromeda', 'Triangulum', 'Whirlpool', 'Sombrero'],
                'options_my' => ['Andromeda', 'Triangulum', 'Whirlpool', 'Sombrero'],
                'correct_answer' => 'Andromeda',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'hard',
                'question_text' => 'What type of bond involves sharing electrons?',
                'question_text_my' => 'အီလက်ထရွန်များ မျှဝေခြင်းပါဝင်သော ဓာတ်စည်းသည်...',
                'options' => ['Ionic', 'Covalent', 'Hydrogen', 'Metallic'],
                'options_my' => ['Ionic', 'Covalent', 'Hydrogen', 'Metallic'],
                'correct_answer' => 'Covalent',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'hard',
                'question_text' => 'Which organ filters blood in the body?',
                'question_text_my' => 'ခန္ဓာကိုယ်တွင် သွေးသန့်စင်ပေးသော အင်္ဂါသည်...',
                'options' => ['Heart', 'Kidney', 'Liver', 'Pancreas'],
                'options_my' => ['နှလုံး', 'ကျောက်ကပ်', 'အသည်း', 'ပန်ကရိယ'],
                'correct_answer' => 'Kidney',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'hard',
                'question_text' => 'What is the most common isotope of Hydrogen?',
                'question_text_my' => 'ဟိုက်ဒရိုဂျင်၏ အတွေ့ရအများဆုံး Isotope သည်...',
                'options' => ['Protium', 'Deuterium', 'Tritium', 'Helium'],
                'options_my' => ['Protium', 'Deuterium', 'Tritium', 'Helium'],
                'correct_answer' => 'Protium',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'hard',
                'question_text' => 'Which planet has the strongest magnetic field?',
                'question_text_my' => 'သံလိုက်စက်ကွင်း အားအကောင်းဆုံးဂြိုဟ်သည်...',
                'options' => ['Earth', 'Mars', 'Jupiter', 'Saturn'],
                'options_my' => ['ကမ္ဘာ', 'အင်္ဂါဂြိုဟ်', 'ကြာသပတေးဂြိုဟ်', 'စနေဂြိုဟ်'],
                'correct_answer' => 'Jupiter',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'hard',
                'question_text' => 'What is the main component of natural gas?',
                'question_text_my' => 'သဘာဝဓာတ်ငွေ့၏ အဓိကပါဝင်ပစ္စည်းသည်...',
                'options' => ['Methane', 'Ethane', 'Propane', 'Butane'],
                'options_my' => ['မီသိန်း', 'အီသိန်း', 'ပရိုပိန်း', 'ဗျူတိန်း'],
                'correct_answer' => 'Methane',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'hard',
                'question_text' => 'Who proposed the heliocentric model?',
                'question_text_my' => 'နေဗဟိုပြုစနစ်ကို အဆိုပြုခဲ့သူမှာ...',
                'options' => ['Ptolemy', 'Copernicus', 'Kepler', 'Newton'],
                'options_my' => ['Ptolemy', 'Copernicus', 'Kepler', 'Newton'],
                'correct_answer' => 'Copernicus',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'hard',
                'question_text' => 'What is the study of insects called?',
                'question_text_my' => 'အင်းဆက်များကို လေ့လာသောပညာသည်...',
                'options' => ['Entomology', 'Etymology', 'Zoology', 'Botany'],
                'options_my' => ['Entomology', 'Etymology', 'Zoology', 'Botany'],
                'correct_answer' => 'Entomology',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'hard',
                'question_text' => 'Which layer of the atmosphere contains the ozone layer?',
                'question_text_my' => 'အိုဇုန်းလွှာသည် မည်သည့်လေထုအလွှာတွင် ရှိသနည်း။',
                'options' => ['Troposphere', 'Stratosphere', 'Mesosphere', 'Thermosphere'],
                'options_my' => ['Troposphere', 'Stratosphere', 'Mesosphere', 'Thermosphere'],
                'correct_answer' => 'Stratosphere',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'hard',
                'question_text' => 'What causes tides on Earth?',
                'question_text_my' => 'ကမ္ဘာပေါ်တွင် ဒီရေအတက်အကျကို ဖြစ်စေသည်မှာ...',
                'options' => ['Wind', 'Moon\'s Gravity', 'Sun\'s Heat', 'Earth\'s Rotation'],
                'options_my' => ['လေ', 'လ၏ဆွဲငင်အား', 'နေ၏အပူရှိန်', 'ကမ္ဘာလည်ခြင်း'],
                'correct_answer' => 'Moon\'s Gravity',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'hard',
                'question_text' => 'The first element on the periodic table is...',
                'question_text_my' => 'Periodic Table ၏ ပထမဆုံးဒြပ်စင်သည်...',
                'options' => ['Helium', 'Oxygen', 'Hydrogen', 'Lithium'],
                'options_my' => ['ဟီလီယမ်', 'အောက်ဆီဂျင်', 'ဟိုက်ဒရိုဂျင်', 'လီသီယမ်'],
                'correct_answer' => 'Hydrogen',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'hard',
                'question_text' => 'What is the hardest tissue in the human body?',
                'question_text_my' => 'လူ့ခန္ဓာကိုယ်တွင် အမာဆုံးတစ်ရှူးသည်...',
                'options' => ['Bone', 'Enamel', 'Cartilage', 'Muscle'],
                'options_my' => ['အရိုး', 'သွားကြွေလွှာ (Enamel)', 'အရိုးနု', 'ကြွက်သား'],
                'correct_answer' => 'Enamel',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'hard',
                'question_text' => 'Which quark flavor does not exist?',
                'question_text_my' => 'မရှိသော Quark အမျိုးအစားသည်...',
                'options' => ['Up', 'Down', 'Strange', 'Spicy'],
                'options_my' => ['Up', 'Down', 'Strange', 'Spicy'],
                'correct_answer' => 'Spicy',
                'language' => 'en'
            ],
        ];

        foreach ($questions as $q) {
            Question::create($q);
        }
    }
}
