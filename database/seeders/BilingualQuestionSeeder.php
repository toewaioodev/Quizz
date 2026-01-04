<?php

namespace Database\Seeders;

use App\Models\Question;
use Illuminate\Database\Seeder;

class BilingualQuestionSeeder extends Seeder
{
    public function run(): void
    {
        $questions = [
            // Mathematics (20 questions)
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => 'What is 5 x 5?',
                'question_text_my' => '5 x 5 ၏ ရလဒ်သည် အဘယ်နည်း။',
                'options' => ['10', '20', '25', '30'],
                'options_my' => ['၁၀', '၂၀', '၂၅', '၃၀'],
                'correct_answer' => '25',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => 'What is 100 - 35?',
                'question_text_my' => '100 - 35 ၏ ရလဒ်သည် အဘယ်နည်း။',
                'options' => ['55', '65', '75', '45'],
                'options_my' => ['၅၅', '၆၅', '၇၅', '၄၅'],
                'correct_answer' => '65',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'What is the square root of 81?',
                'question_text_my' => '81 ၏ စတုရန်းရင်းသည် အဘယ်နည်း။',
                'options' => ['7', '8', '9', '6'],
                'options_my' => ['၇', '၈', '၉', '၆'],
                'correct_answer' => '9',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'What is 15% of 200?',
                'question_text_my' => '200 ၏ 15% သည် အဘယ်နည်း။',
                'options' => ['20', '25', '30', '35'],
                'options_my' => ['၂၀', '၂၅', '၃၀', '၃၅'],
                'correct_answer' => '30',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'hard',
                'question_text' => 'What is the value of Pi (to 2 decimals)?',
                'question_text_my' => 'Pi (π) ၏ တန်ဖိုး (ဒဿမ ၂ နေရာအထိ) သည် အဘယ်နည်း။',
                'options' => ['3.12', '3.14', '3.16', '3.18'],
                'options_my' => ['၃.၁၂', '၃.၁၄', '၃.၁၆', '၃.၁၈'],
                'correct_answer' => '3.14',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => '2 + 2 x 2 = ?',
                'question_text_my' => '2 + 2 x 2 = ?',
                'options' => ['6', '8', '4', '10'],
                'options_my' => ['၆', '၈', '၄', '၁၀'],
                'correct_answer' => '6',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'How many degrees are in a right angle?',
                'question_text_my' => 'ထောင့်မှန်တစ်ခုတွင် ဒီဂရီမည်မျှရှိသနည်း။',
                'options' => ['45', '90', '180', '360'],
                'options_my' => ['၄၅', '၉၀', '၁၈၀', '၃၆၀'],
                'correct_answer' => '90',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => 'Which number is even?',
                'question_text_my' => 'စုံကိန်းမှာ အဘယ်နည်း။',
                'options' => ['3', '5', '7', '8'],
                'options_my' => ['၃', '၅', '၇', '၈'],
                'correct_answer' => '8',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'hard',
                'question_text' => 'What is 12 squared?',
                'question_text_my' => '12 ၏ နှစ်ထပ်ကိန်းသည် အဘယ်နည်း။',
                'options' => ['124', '144', '142', '122'],
                'options_my' => ['၁၂၄', '၁၄၄', '၁၄၂', '၁၂၂'],
                'correct_answer' => '144',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'If x + 5 = 12, what is x?',
                'question_text_my' => 'x + 5 = 12 ဖြစ်လျှင် x ၏တန်ဖိုးသည် အဘယ်နည်း။',
                'options' => ['5', '6', '7', '8'],
                'options_my' => ['၅', '၆', '၇', '၈'],
                'correct_answer' => '7',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'hard',
                'question_text' => 'How many sides does a hexagon have?',
                'question_text_my' => 'ဆဋ္ဌဂံတွင် အနားမည်မျှရှိသနည်း။',
                'options' => ['5', '6', '7', '8'],
                'options_my' => ['၅', '၆', '၇', '၈'],
                'correct_answer' => '6',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'What is 1/2 as a percentage?',
                'question_text_my' => '1/2 ကို ရာခိုင်နှုန်းဖြင့်ဖော်ပြလျှင်...',
                'options' => ['25%', '50%', '75%', '100%'],
                'options_my' => ['၂၅%', '၅၀%', '၇၅%', '၁၀၀%'],
                'correct_answer' => '50%',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => 'What comes next: 2, 4, 6, 8, ...?',
                'question_text_my' => '2, 4, 6, 8, ... နောက်တွင် ဘာလာမည်နည်း။',
                'options' => ['9', '10', '11', '12'],
                'options_my' => ['၉', '၁၀', '၁၁', '၁၂'],
                'correct_answer' => '10',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'hard',
                'question_text' => 'What is the sum of angles in a triangle?',
                'question_text_my' => 'တြိဂံတစ်ခု၏ အတွင်းထောင့်များပေါင်းလဒ်သည်...',
                'options' => ['90', '180', '270', '360'],
                'options_my' => ['၉၀', '၁၈၀', '၂၇၀', '၃၆၀'],
                'correct_answer' => '180',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'What is 7 x 8?',
                'question_text_my' => '7 x 8 သည် အဘယ်နည်း။',
                'options' => ['54', '56', '58', '62'],
                'options_my' => ['၅၄', '၅၆', '၅၈', '၆၂'],
                'correct_answer' => '56',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => 'How many zeros are in one thousand?',
                'question_text_my' => 'တစ်ထောင်တွင် သုည ဘယ်နှစ်လုံးပါသနည်း။',
                'options' => ['2', '3', '4', '5'],
                'options_my' => ['၂', '၃', '၄', '၅'],
                'correct_answer' => '3',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'hard',
                'question_text' => 'What is 3 cubed?',
                'question_text_my' => '3 ၏ သုံးထပ်ကိန်းသည် အဘယ်နည်း။',
                'options' => ['9', '18', '27', '81'],
                'options_my' => ['၉', '၁၈', '၂၇', '၈၁'],
                'correct_answer' => '27',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'What is the prefix for 1000?',
                'question_text_my' => '၁၀၀၀ အတွက် ရှေ့ဆက်စကားလုံးသည်...',
                'options' => ['Centi', 'Milli', 'Kilo', 'Mega'],
                'options_my' => ['စင်တီ', 'မီလီ', 'ကီလို', 'မေဂါ'],
                'correct_answer' => 'Kilo',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => 'Subtract 15 from 50.',
                'question_text_my' => '၅၀ ထဲမှ ၁၅ ကို နုတ်ပါ။',
                'options' => ['25', '30', '35', '40'],
                'options_my' => ['၂၅', '၃၀', '၃၅', '၄၀'],
                'correct_answer' => '35',
                'language' => 'en'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'hard',
                'question_text' => 'What is 50 divided by 5?',
                'question_text_my' => '၅၀ ကို ၅ နှင့် စားလျှင်...',
                'options' => ['5', '8', '10', '15'],
                'options_my' => ['၅', '၈', '၁၀', '၁၅'],
                'correct_answer' => '10',
                'language' => 'en'
            ],


            // Science (20 questions)
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'What planet is closest to the Sun?',
                'question_text_my' => 'နေနှင့် အနီးဆုံးဂြိုဟ်သည် အဘယ်နည်း။',
                'options' => ['Venus', 'Mercury', 'Mars', 'Earth'],
                'options_my' => ['သောကြာဂြိုဟ်', 'ဗုဒ္ဓဟူးဂြိုဟ်', 'အင်္ဂါဂြိုဟ်', 'ကမ္ဘာ'],
                'correct_answer' => 'Mercury',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'What is the chemical symbol for Oxygen?',
                'question_text_my' => 'အောက်ဆီဂျင်၏ ဓာတုသင်္ကေတသည် အဘယ်နည်း။',
                'options' => ['O', 'O2', 'Ox', 'Og'],
                'options_my' => ['O', 'O2', 'Ox', 'Og'],
                'correct_answer' => 'O',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'What is the hardest natural substance on Earth?',
                'question_text_my' => 'ကမ္ဘာပေါ်တွင် အမာဆုံး သဘာဝပစ္စည်းသည် အဘယ်နည်း။',
                'options' => ['Gold', 'Iron', 'Diamond', 'Platinum'],
                'options_my' => ['ရွှေ', 'သံ', 'စိန်', 'ပလက်တီနမ်'],
                'correct_answer' => 'Diamond',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'Humans breathe in Oxygen and breathe out ...',
                'question_text_my' => 'လူတို့ အောက်ဆီဂျင်ကို ရှူသွင်းပြီး ... ကို ရှူထုတ်သည်။',
                'options' => ['Nitrogen', 'Carbon Dioxide', 'Hydrogen', 'Helium'],
                'options_my' => ['နိုက်ထရိုဂျင်', 'ကာဗွန်ဒိုင်အောက်ဆိုက်', 'ဟိုက်ဒရိုဂျင်', 'ဟီလီယမ်'],
                'correct_answer' => 'Carbon Dioxide',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'What describes the path of a planet around the sun?',
                'question_text_my' => 'ဂြိုဟ်များ နေကို လှည့်ပတ်သော လမ်းကြောင်းကို ဘာခေါ်သနည်း။',
                'options' => ['Orbit', 'Axis', 'Rotation', 'Galaxy'],
                'options_my' => ['ပတ်လမ်း (Orbit)', 'ဝင်ရိုး (Axis)', 'လည်ပတ်ခြင်း (Rotation)', 'ဂလက်ဆီ (Galaxy)'],
                'correct_answer' => 'Orbit',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'hard',
                'question_text' => 'Which part of the cell contains genetic material?',
                'question_text_my' => 'ဆဲလ်တစ်ခု၏ မည်သည့်အစိတ်အပိုင်းတွင် မျိုးရိုးဗီဇပစ္စည်းများ ပါဝင်သနည်း။',
                'options' => ['Membrane', 'Cytoplasm', 'Nucleus', 'Mitochondria'],
                'options_my' => ['အမြှေးပါး', 'ဆိုက်တိုပလာဆမ်', 'နျူကလိယ', 'မိုင်တိုကွန်ဒရီးယား'],
                'correct_answer' => 'Nucleus',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'What prevents us from floating in air?',
                'question_text_my' => 'လူများကို လေထဲမလွင့်အောင် တားဆီးထားသည်မှာ...',
                'options' => ['Magnetism', 'Friction', 'Gravity', 'Density'],
                'options_my' => ['သံလိုက်', 'ပွတ်တိုက်အား', 'ဆွဲငင်အား (Gravity)', 'သိပ်သည်းဆ'],
                'correct_answer' => 'Gravity',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'Which animal lays eggs?',
                'question_text_my' => 'မည်သည့်တိရစ္ဆာန်သည် ဥဥသနည်း။',
                'options' => ['Dog', 'Cat', 'Duck', 'Sheep'],
                'options_my' => ['ခွေး', 'ကြောင်', 'ဘဲ', 'သိုး'],
                'correct_answer' => 'Duck',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'What is the largest organ in the human body?',
                'question_text_my' => 'လူ့ခန္ဓာကိုယ်တွင် အကြီးဆုံး အစိတ်အပိုင်းသည်...',
                'options' => ['Heart', 'Liver', 'Skin', 'Lungs'],
                'options_my' => ['နှလုံး', 'အသည်း', 'အရေပြား', 'အဆုတ်'],
                'correct_answer' => 'Skin',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'hard',
                'question_text' => 'What is the speed of sound generally called?',
                'question_text_my' => 'အသံ၏အလျင်ကို ယေဘုယျအားဖြင့် ဘာခေါ်သနည်း။',
                'options' => ['Mach 1', 'Warp Speed', 'Light Speed', 'Sonic Boom'],
                'options_my' => ['Mach 1', 'Warp Speed', 'Light Speed', 'Sonic Boom'],
                'correct_answer' => 'Mach 1',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'Water boils at what degrees Celsius?',
                'question_text_my' => 'ရေသည် မည်သည့် အပူချိန် (ဆဲလ်စီးယပ်စ်) တွင် ဆူပွက်သနည်း။',
                'options' => ['90', '100', '110', '120'],
                'options_my' => ['၉၀', '၁၀၀', '၁၁၀', '၁၂၀'],
                'correct_answer' => '100',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'Which gas is most abundant in Earth\'s atmosphere?',
                'question_text_my' => 'ကမ္ဘာ့လေထုထဲတွင် မည်သည့်ဓာတ်ငွေ့ အများဆုံးပါဝင်သနည်း။',
                'options' => ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Argon'],
                'options_my' => ['အောက်ဆီဂျင်', 'နိုက်ထရိုဂျင်', 'ကာဗွန်ဒိုင်အောက်ဆိုက်', 'အာဂွန်'],
                'correct_answer' => 'Nitrogen',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'hard',
                'question_text' => 'What is the powerhouse of the cell?',
                'question_text_my' => 'ဆဲလ်၏ စွမ်းအင်စက်ရုံမှာ...',
                'options' => ['Nucleus', 'Mitochondria', 'Ribosome', 'Lysosome'],
                'options_my' => ['နျူကလိယ', 'မိုင်တိုကွန်ဒရီးယား', 'ရိုင်ဘိုဆုမ်း', 'လိုက်ဆိုဆုမ်း'],
                'correct_answer' => 'Mitochondria',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'How many bones are in an adult human body?',
                'question_text_my' => 'လူကြီးတစ်ယောက်၏ ခန္ဓာကိုယ်တွင် အရိုးမည်မျှရှိသနည်း။',
                'options' => ['206', '208', '210', '212'],
                'options_my' => ['၂၀၆', '၂၀၈', '၂၁၀', '၂၁၂'],
                'correct_answer' => '206',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'What star provides light to Earth?',
                'question_text_my' => 'ကမ္ဘာမြေကို အလင်းပေးသော ကြယ်သည် အဘယ်နည်း။',
                'options' => ['Moon', 'Sun', 'Mars', 'Alpha Centauri'],
                'options_my' => ['လ', 'နေ', 'အင်္ဂါဂြိုဟ်', 'Alpha Centauri'],
                'correct_answer' => 'Sun',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'Which planet is known as the Red Planet?',
                'question_text_my' => 'ဂြိုဟ်နီဟု လူသိများသော ဂြိုဟ်သည်...',
                'options' => ['Venus', 'Jupiter', 'Mars', 'Saturn'],
                'options_my' => ['သောကြာဂြိုဟ်', 'ကြာသပတေးဂြိုဟ်', 'အင်္ဂါဂြိုဟ်', 'စနေဂြိုဟ်'],
                'correct_answer' => 'Mars',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'hard',
                'question_text' => 'What is the chemical formula for table salt?',
                'question_text_my' => 'စားပွဲတင်ဆား၏ ဓာတုဗေဒ ဖော်မြူလာသည်...',
                'options' => ['NaCl', 'KCl', 'NaOH', 'HCl'],
                'options_my' => ['NaCl', 'KCl', 'NaOH', 'HCl'],
                'correct_answer' => 'NaCl',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'What type of animal is a whale?',
                'question_text_my' => 'ဝေလငါးသည် မည်သည့် တိရစ္ဆာန်အမျိုးအစားဖြစ်သနည်း။',
                'options' => ['Fish', 'Mammal', 'Reptile', 'Amphibian'],
                'options_my' => ['ငါး', 'နို့တိုက်သတ္တဝါ', 'တွားသွားသတ္တဝါ', 'ကုန်းနေရေနေသတ္တဝါ'],
                'correct_answer' => 'Mammal',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'Which instrument measures temperature?',
                'question_text_my' => 'အပူချိန်ကို တိုင်းတာသော ကိရိယာသည်...',
                'options' => ['Barometer', 'Thermometer', 'Speedometer', 'Compass'],
                'options_my' => ['လေဖိအားတိုင်းကိရိယာ', 'သာမိုမီတာ', 'အမြန်နှုန်းတိုင်းကိရိယာ', 'သံလိုက်အိမ်မြှောင်'],
                'correct_answer' => 'Thermometer',
                'language' => 'en'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'hard',
                'question_text' => 'What is the center of an atom called?',
                'question_text_my' => 'အက်တမ်၏ ဗဟိုကို ဘာခေါ်သနည်း။',
                'options' => ['Proton', 'Electron', 'Nucleus', 'Neutron'],
                'options_my' => ['ပရိုတွန်', 'အီလက်ထရွန်', 'နျူကလိယ', 'နယူထရွန်'],
                'correct_answer' => 'Nucleus',
                'language' => 'en'
            ],


            // History (20 questions)
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'Who was the first President of the USA?',
                'question_text_my' => 'အမေရိကန်၏ ပထမဆုံး သမ္မတမှာ...',
                'options' => ['Lincoln', 'Washington', 'Jefferson', 'Kennedy'],
                'options_my' => ['လင်ကွန်း', 'ဝါရှင်တန်', 'ဂျက်ဖာဆန်', 'ကနေဒီ'],
                'correct_answer' => 'Washington',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'In which year did World War II end?',
                'question_text_my' => 'ဒုတိယကမ္ဘာစစ် မည်သည့်နှစ်တွင် ပြီးဆုံးခဲ့သနည်း။',
                'options' => ['1944', '1945', '1946', '1947'],
                'options_my' => ['၁၉၄၄', '၁၉၄၅', '၁၉၄၆', '၁၉၄၇'],
                'correct_answer' => '1945',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'Who founded the first Burmese Empire?',
                'question_text_my' => 'ပထမမြန်မာနိုင်ငံတော်ကို တည်ထောင်ခဲ့သူမင်းသည် ဦးသူနည်း။',
                'options' => ['Anawrahta', 'Bayinnaung', 'Alaungpaya', 'Kyansittha'],
                'options_my' => ['အနော်ရထာ', 'ဘုရင့်နောင်', 'အလောင်းဘုရား', 'ကျန်စစ်သား'],
                'correct_answer' => 'Anawrahta',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'hard',
                'question_text' => 'When did Myanmar gain independence?',
                'question_text_my' => 'မြန်မာနိုင်ငံ လွတ်လပ်ရေးရခဲ့သည့် ခုနှစ်သည်...',
                'options' => ['1947', '1948', '1949', '1950'],
                'options_my' => ['၁၉၄၇', '၁၉၄၈', '၁၉၄၉', '၁၉၅၀'],
                'correct_answer' => '1948',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'Which ancient civilization built the pyramids?',
                'question_text_my' => 'ပိရမစ်များကို တည်ဆောက်ခဲ့သော ရှေးဟောင်းလူမျိုးမှာ...',
                'options' => ['Romans', 'Greeks', 'Egyptians', 'Mayans'],
                'options_my' => ['ရောမ', 'ဂရိ', 'အီဂျစ်', 'မာယာ'],
                'correct_answer' => 'Egyptians',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'Who painted the Mona Lisa?',
                'question_text_my' => 'မိုနာလီဇာ ပန်းချီကားကို ရေးဆွဲခဲ့သူမှာ...',
                'options' => ['Van Gogh', 'Da Vinci', 'Picasso', 'Michelangelo'],
                'options_my' => ['ဗန်ဂိုး', 'ဒါဗင်ချီ', 'ပက်ကက်ဆို', 'မိုက်ကယ်အိန်ဂျလို'],
                'correct_answer' => 'Da Vinci',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'hard',
                'question_text' => 'Who was the last King of Myanmar?',
                'question_text_my' => 'မြန်မာနိုင်ငံ၏ နောက်ဆုံးမင်းသည်...',
                'options' => ['Mindon', 'Thibaw', 'Bodawpaya', 'Bagyidaw'],
                'options_my' => ['မင်းတုန်းမင်း', 'သီပေါမင်း', 'ဗဒုံမင်း', 'ဘကြီးတော်'],
                'correct_answer' => 'Thibaw',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'The Titanic sank in which year?',
                'question_text_my' => 'တိုင်တန်းနစ်သင်္ဘော မည်သည့်နှစ်တွင် နှစ်မြုပ်ခဲ့သနည်း။',
                'options' => ['1910', '1912', '1914', '1916'],
                'options_my' => ['၁၉၁၀', '၁၉၁၂', '၁၉၁၄', '၁၉၁၆'],
                'correct_answer' => '1912',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'Who discovered America?',
                'question_text_my' => 'အမေရိကတိုက်ကို ရှာဖွေတွေ့ရှိသူမှာ...',
                'options' => ['Columbus', 'Magellan', 'Cook', 'Vasco da Gama'],
                'options_my' => ['ကိုလံဘတ်စ်', 'မဂျဲလန်', 'ကွတ်', 'ဗက်စကိုဒါဂါးမား'],
                'correct_answer' => 'Columbus',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'hard',
                'question_text' => 'The French Revolution started in...',
                'question_text_my' => 'ပြင်သစ်တော်လှန်ရေး စတင်ခဲ့သည့်နှစ်မှာ...',
                'options' => ['1776', '1789', '1812', '1850'],
                'options_my' => ['၁၇၇၆', '၁၇၈၉', '၁၈၁၂', '၁၈၅၀'],
                'correct_answer' => '1789',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'Who was the first man on the moon?',
                'question_text_my' => 'လပေါ်ပထမဆုံးရောက်ရှိခဲ့သူမှာ...',
                'options' => ['Armstrong', 'Aldrin', 'Gagarin', 'Collins'],
                'options_my' => ['အမ်းစထရောင်း', 'အယ်ဒရင်', 'ဂါဂါရင်', 'ကောလင်း'],
                'correct_answer' => 'Armstrong',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'hard',
                'question_text' => 'In which city was the JFK assassinated?',
                'question_text_my' => 'JFK လုပ်ကြံခံရသည့် အမေရိကန်မြို့ကြီးမှာ...',
                'options' => ['New York', 'Dallas', 'Washington', 'Chicago'],
                'options_my' => ['နယူးယောက်', 'ဒါးလပ်စ်', 'ဝါရှင်တန်', 'ရှီကာဂို'],
                'correct_answer' => 'Dallas',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'The Berlin Wall fell in...',
                'question_text_my' => 'ဘာလင်တံတိုင်းကြီး ပြိုကျခဲ့သည့်နှစ်မှာ...',
                'options' => ['1987', '1989', '1991', '1993'],
                'options_my' => ['၁၉၈၇', '၁၉၈၉', '၁၉၉၁', '၁၉၉၃'],
                'correct_answer' => '1989',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'Who is known as the Father of Indian Independence?',
                'question_text_my' => 'အိန္ဒိယလွတ်လပ်ရေးဖခင်ကြီးဟု လူသိများသူမှာ...',
                'options' => ['Nehru', 'Gandhi', 'Patel', 'Modi'],
                'options_my' => ['နေရူး', 'ဂန္ဒီ', 'ပတေးလ်', 'မိုဒီ'],
                'correct_answer' => 'Gandhi',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'hard',
                'question_text' => 'Which empire was ruled by Genghis Khan?',
                'question_text_my' => 'ဂျင်ဂစ်ခန် အုပ်ချုပ်ခဲ့သော အင်ပါယာမှာ...',
                'options' => ['Ottoman', 'Mongol', 'Roman', 'Persian'],
                'options_my' => ['အော်တိုမန်', 'မွန်ဂို', 'ရောမ', 'ပါရှန်း'],
                'correct_answer' => 'Mongol',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'The Great Fire of London happened in...',
                'question_text_my' => 'လန်ဒန်မီးလောင်ကြီး ဖြစ်ပွားခဲ့သော ခုနှစ်မှာ...',
                'options' => ['1666', '1766', '1866', '1566'],
                'options_my' => ['၁၆၆၆', '၁၇၆၆', '၁၈၆၆', '၁၅၆၆'],
                'correct_answer' => '1666',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'Who wrote the Declaration of Independence?',
                'question_text_my' => 'လွတ်လပ်ရေးကြေငြာစာတမ်းကို ရေးသားခဲ့သူမှာ...',
                'options' => ['Washington', 'Jefferson', 'Adams', 'Franklin'],
                'options_my' => ['ဝါရှင်တန်', 'ဂျက်ဖာဆန်', 'အဒမ်', 'ဖရန်ကလင်'],
                'correct_answer' => 'Jefferson',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'hard',
                'question_text' => 'The Battle of Waterloo was fought in...',
                'question_text_my' => 'ဝါးတားလူးတိုက်ပွဲ ဖြစ်ပွားခဲ့သည့်နှစ်မှာ...',
                'options' => ['1805', '1815', '1825', '1835'],
                'options_my' => ['၁၈၀၅', '၁၈၁၅', '၁၈၂၅', '၁၈၃၅'],
                'correct_answer' => '1815',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'Who was the Queen of Egypt?',
                'question_text_my' => 'အီဂျစ်ဘုရင်မကြီးမှာ...',
                'options' => ['Cleopatra', 'Nefertiti', 'Hatshepsut', 'All of them'],
                'options_my' => ['ကလီယိုပါထရာ', 'နဖာတီတီ', 'ဟက်ရှပ်ဆွတ်', 'အားလုံးမှန်'],
                'correct_answer' => 'All of them',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'Which country gave the Statue of Liberty to the USA?',
                'question_text_my' => 'အမေရိကန်ကို လွတ်လပ်ရေးရုပ်တု လက်ဆောင်ပေးသော နိုင်ငံမှာ...',
                'options' => ['UK', 'France', 'Spain', 'Germany'],
                'options_my' => ['ဗြိတိန်', 'ပြင်သစ်', 'စပိန်', 'ဂျာမနီ'],
                'correct_answer' => 'France',
                'language' => 'en'
            ],


            // Geography (20 questions)
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'What is the capital of France?',
                'question_text_my' => 'ပြင်သစ်နိုင်ငံ၏ မြို့တော်သည်...',
                'options' => ['London', 'Berlin', 'Paris', 'Madrid'],
                'options_my' => ['လန်ဒန်', 'ဘာလင်', 'ပဲရစ်', 'မက်ဒရစ်'],
                'correct_answer' => 'Paris',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'Which is the largest continent?',
                'question_text_my' => 'အကြီးဆုံးတိုက်ကြီးမှာ...',
                'options' => ['Africa', 'Asia', 'Europe', 'North America'],
                'options_my' => ['အာဖရိက', 'အာရှ', 'ဥရောပ', 'မြောက်အမေရိက'],
                'correct_answer' => 'Asia',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'What is the longest river in the world?',
                'question_text_my' => 'ကမ္ဘာပေါ်တွင် အရှည်ဆုံးမြစ်မှာ...',
                'options' => ['Amazon', 'Nile', 'Yangtze', 'Mississippi'],
                'options_my' => ['အမေဇုန်', 'နိုင်း', 'ယန်စီ', 'မစ္စစ္စပီ'],
                'correct_answer' => 'Nile',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'Mount Everest is located in which mountain range?',
                'question_text_my' => 'အဲဗရက်တောင်သည် မည်သည့်တောင်တန်းတွင် ရှိသနည်း။',
                'options' => ['Andes', 'Rockies', 'Himalayas', 'Alps'],
                'options_my' => ['အင်ဒီးစ်', 'ရော့ကီး', 'ဟိမဝန္တာ', 'အဲလ်ပ်'],
                'correct_answer' => 'Himalayas',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'Which country has the largest population?',
                'question_text_my' => 'လူဦးရေအများဆုံးနိုင်ငံမှာ...',
                'options' => ['India', 'China', 'USA', 'Indonesia'],
                'options_my' => ['အိန္ဒိယ', 'တရုတ်', 'အမေရိကန်', 'အင်ဒိုနီးရှား'],
                'correct_answer' => 'India', // Updated recent data
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'hard',
                'question_text' => 'What is the capital of Australia?',
                'question_text_my' => 'သြစတြေးလျ၏ မြို့တော်မှာ...',
                'options' => ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
                'options_my' => ['ဆစ်ဒနီ', 'မဲလ်ဘုန်း', 'ကန်ဘာရာ', 'ပါ့သ်'],
                'correct_answer' => 'Canberra',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'Which ocean is off the California coast?',
                'question_text_my' => 'ကယ်လီဖိုးနီးယား ကမ်းလွန်ရှိ သမုဒ္ဒရာမှာ...',
                'options' => ['Atlantic', 'Pacific', 'Indian', 'Arctic'],
                'options_my' => ['အတ္တလန္တိတ်', 'ပစိဖိတ်', 'အိန္ဒိယ', 'အာတိတ်'],
                'correct_answer' => 'Pacific',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'hard',
                'question_text' => 'Which country looks like a boot?',
                'question_text_my' => 'ဖိနပ်ပုံသဏ္ဍာန်ရှိသော နိုင်ငံမှာ...',
                'options' => ['Italy', 'Spain', 'Greece', 'Portugal'],
                'options_my' => ['အီတလီ', 'စပိန်', 'ဂရိ', 'ပေါ်တူဂီ'],
                'correct_answer' => 'Italy',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'The Sahara Desert is located in...',
                'question_text_my' => 'ဆာဟာရ သဲကန္တာရ တည်ရှိရာနေရာသည်...',
                'options' => ['Asia', 'South America', 'Africa', 'Australia'],
                'options_my' => ['အာရှ', 'တောင်အမေရိက', 'အာဖရိက', 'သြစတြေးလျ'],
                'correct_answer' => 'Africa',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'What is the capital of Japan?',
                'question_text_my' => 'ဂျပန်နိုင်ငံ၏ မြို့တော်မှာ...',
                'options' => ['Kyoto', 'Osaka', 'Tokyo', 'Seoul'],
                'options_my' => ['ကျိုတို', 'အိုဆာကာ', 'တိုကျို', 'ဆိုးလ်'],
                'correct_answer' => 'Tokyo',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'How many states are in the USA?',
                'question_text_my' => 'အမေရိကန်ပြည်ထောင်စုတွင် ပြည်နယ်ပေါင်း မည်မျှရှိသနည်း။',
                'options' => ['48', '49', '50', '51'],
                'options_my' => ['၄၈', '၄၉', '၅၀', '၅၁'],
                'correct_answer' => '50',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'hard',
                'question_text' => 'Which river flows through London?',
                'question_text_my' => 'လန်ဒန်မြို့ကို ဖြတ်သန်းစီးဆင်းသော မြစ်မှာ...',
                'options' => ['Seine', 'Thames', 'Danube', 'Rhine'],
                'options_my' => ['စိန်း', 'သိမ်း', 'ဒန်ညူ', 'ရိုင်း'],
                'correct_answer' => 'Thames',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'Which country is famous for kangaroos?',
                'question_text_my' => 'ကော်ငရူးများဖြင့် ကျော်ကြားသော နိုင်ငံမှာ...',
                'options' => ['Austria', 'Australia', 'New Zealand', 'South Africa'],
                'options_my' => ['သြစတြီးယား', 'သြစတြေးလျ', 'နယူးဇီလန်', 'တောင်အာဖရိက'],
                'correct_answer' => 'Australia',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'The Great Barrier Reef is in...',
                'question_text_my' => 'Great Barrier Reef တည်ရှိရာမှာ...',
                'options' => ['Australia', 'Belize', 'Indonesia', 'Philippines'],
                'options_my' => ['သြစတြေးလျ', 'ဘေлиз', 'အင်ဒိုနီးရှား', 'ဖိလစ်ပိုင်'],
                'correct_answer' => 'Australia',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'hard',
                'question_text' => 'What is the smallest country in the world?',
                'question_text_my' => 'ကမ္ဘာပေါ်တွင် အသေးဆုံးနိုင်ငံမှာ...',
                'options' => ['Monaco', 'Vatican City', 'Malta', 'San Marino'],
                'options_my' => ['မိုနာကို', 'ဗာတီကန်စီးတီး', 'မော်လ်တာ', 'ဆန်မာရီနို'],
                'correct_answer' => 'Vatican City',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'Which country shares the longest border with the USA?',
                'question_text_my' => 'အမေရိကန်နှင့် အရှည်ဆုံးနယ်နိမိတ် ထိစပ်နေသော နိုင်ငံမှာ...',
                'options' => ['Mexico', 'Canada', 'Russia', 'Cuba'],
                'options_my' => ['မက္ကဆီကို', 'ကနေဒါ', 'ရုရှား', 'ကျူးဘား'],
                'correct_answer' => 'Canada',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'Africa is a...',
                'question_text_my' => 'အာဖရိကသည်...',
                'options' => ['Country', 'Continent', 'City', 'Island'],
                'options_my' => ['နိုင်ငံ', 'တိုက်', 'မြို့', 'ကျွန်း'],
                'correct_answer' => 'Continent',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'hard',
                'question_text' => 'What is the capital of Canada?',
                'question_text_my' => 'ကနေဒါနိုင်ငံ၏ မြို့တော်မှာ...',
                'options' => ['Toronto', 'Vancouver', 'Montreal', 'Ottawa'],
                'options_my' => ['တိုရွန်တို', 'ဗန်ကူးဗား', 'မွန်ထရီရယ်', 'အော့တဝါ'],
                'correct_answer' => 'Ottawa',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'Which desert is the largest in the world (including polar)?',
                'question_text_my' => 'လောကတွင် အကြီးဆုံး သဲကန္တာရမှာ (ဝင်ရိုးစွန်းအပါအဝင်)...',
                'options' => ['Sahara', 'Arabian', 'Gobi', 'Antarctic'],
                'options_my' => ['ဆာဟာရ', 'အာရေဘီယန်', 'ဂိုဘီ', 'အန္တာတိက'],
                'correct_answer' => 'Antarctic',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'Machu Picchu is in which country?',
                'question_text_my' => 'Machu Picchu သည် မည်သည့်နိုင်ငံတွင် ရှိသနည်း။',
                'options' => ['Peru', 'Brazil', 'Mexico', 'Chile'],
                'options_my' => ['ပီရူး', 'ဘရာဇီး', 'မက္ကဆီကို', 'ချီလီ'],
                'correct_answer' => 'Peru',
                'language' => 'en'
            ],


            // Technology (20 questions)
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'What does CPU stand for?',
                'question_text_my' => 'CPU ၏ အရှည်ကောက်မှာ...',
                'options' => ['Central Process Unit', 'Central Processing Unit', 'Computer Personal Unit', 'Central Processor Unit'],
                'options_my' => ['Central Process Unit', 'Central Processing Unit', 'Computer Personal Unit', 'Central Processor Unit'],
                'correct_answer' => 'Central Processing Unit',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'Which company makes the iPhone?',
                'question_text_my' => 'iPhone ကို ထုတ်လုပ်သော ကုမ္ပဏီမှာ...',
                'options' => ['Samsung', 'Apple', 'Google', 'Microsoft'],
                'options_my' => ['Samsung', 'Apple', 'Google', 'Microsoft'],
                'correct_answer' => 'Apple',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'What is the main circuit board in a computer called?',
                'question_text_my' => 'ကွန်ပျူတာ၏ ပင်မဆားကစ်ဘုတ်ကို ဘာခေါ်သနည်း။',
                'options' => ['Motherboard', 'Fatherboard', 'Keyboard', 'Circuitboard'],
                'options_my' => ['Motherboard', 'Fatherboard', 'Keyboard', 'Circuitboard'],
                'correct_answer' => 'Motherboard',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'hard',
                'question_text' => 'Who is the founder of Microsoft?',
                'question_text_my' => 'Microsoft ကို တည်ထောင်သူမှာ...',
                'options' => ['Steve Jobs', 'Bill Gates', 'Elon Musk', 'Mark Zuckerberg'],
                'options_my' => ['စတိခ်ဂျော့', 'ဘီလ်ဂိတ်', 'အီလွန်မတ်စ်', 'မတ်ခ်ဇူကာဘတ်'],
                'correct_answer' => 'Bill Gates',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'What does RAM stand for?',
                'question_text_my' => 'RAM ၏ အရှည်ကောက်မှာ...',
                'options' => ['Read Access Memory', 'Random Access Memory', 'Run Access Memory', 'Real Access Memory'],
                'options_my' => ['Read Access Memory', 'Random Access Memory', 'Run Access Memory', 'Real Access Memory'],
                'correct_answer' => 'Random Access Memory',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'What is the name of the robot in "Wall-E"?',
                'question_text_my' => '"Wall-E" ဇာတ်ကားထဲမှ စက်ရုပ်နာမည်မှာ...',
                'options' => ['Eve', 'Wall-E', 'Robo', 'Bot'],
                'options_my' => ['Eve', 'Wall-E', 'Robo', 'Bot'],
                'correct_answer' => 'Wall-E',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'hard',
                'question_text' => 'Which programming language is known as the language of the web?',
                'question_text_my' => 'Web ၏ ဘာသာစကားဟု လူသိများသော ပရိုဂရမ်းမင်းဘာသာစကားမှာ...',
                'options' => ['Python', 'Java', 'JavaScript', 'C++'],
                'options_my' => ['Python', 'Java', 'JavaScript', 'C++'],
                'correct_answer' => 'JavaScript',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'What does HTTP stand for?',
                'question_text_my' => 'HTTP ၏ အရှည်ကောက်မှာ...',
                'options' => ['HyperText Transfer Protocol', 'HyperTest Transfer Protocol', 'HighText Transfer Protocol', 'HyperText Transmission Protocol'],
                'options_my' => ['HyperText Transfer Protocol', 'HyperTest Transfer Protocol', 'HighText Transfer Protocol', 'HyperText Transmission Protocol'],
                'correct_answer' => 'HyperText Transfer Protocol',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'Which device is used to type on a computer?',
                'question_text_my' => 'ကွန်ပျူတာတွင် စာရိုက်ရန်သုံးသော ကိရိယာမှာ...',
                'options' => ['Mouse', 'Monitor', 'Keyboard', 'Speaker'],
                'options_my' => ['မောက်စ်', 'မော်နီတာ', 'ကီးဘုတ်', 'စပီကာ'],
                'correct_answer' => 'Keyboard',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'hard',
                'question_text' => 'What year was the first iPhone released?',
                'question_text_my' => 'ပထမဆုံး iPhone ထွက်ရှိခဲ့သော ခုနှစ်မှာ...',
                'options' => ['2005', '2006', '2007', '2008'],
                'options_my' => ['၂၀၀၅', '၂၀၀၆', '၂၀၀၇', '၂၀၀၈'],
                'correct_answer' => '2007',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'Which company owns Android?',
                'question_text_my' => 'Android ကို ပိုင်ဆိုင်သော ကုမ္ပဏီမှာ...',
                'options' => ['Apple', 'Microsoft', 'Google', 'IBM'],
                'options_my' => ['Apple', 'Microsoft', 'Google', 'IBM'],
                'correct_answer' => 'Google',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'What does "www" stand for?',
                'question_text_my' => '"www" ၏ အရှည်ကောက်မှာ...',
                'options' => ['World Wide Web', 'World Web Wide', 'Wide World Web', 'Web World Wide'],
                'options_my' => ['World Wide Web', 'World Web Wide', 'Wide World Web', 'Web World Wide'],
                'correct_answer' => 'World Wide Web',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'hard',
                'question_text' => 'What is the smallest unit of data in a computer?',
                'question_text_my' => 'ကွန်ပျူတာဒေတာ၏ အသေးဆုံးယူနစ်မှာ...',
                'options' => ['Byte', 'Bit', 'Kilobyte', 'Megabyte'],
                'options_my' => ['Byte', 'Bit', 'Kilobyte', 'Megabyte'],
                'correct_answer' => 'Bit',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'Which social media platform has a bird logo?',
                'question_text_my' => 'ငှက်ပုံလိုဂိုပါသော ဆိုရှယ်မီဒီယာမှာ...',
                'options' => ['Facebook', 'Instagram', 'Twitter (X)', 'Snapchat'],
                'options_my' => ['Facebook', 'Instagram', 'Twitter (X)', 'Snapchat'],
                'correct_answer' => 'Twitter (X)',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'What is the most popular search engine?',
                'question_text_my' => 'လူသုံးအများဆုံး ရှာဖွေရေးအင်ဂျင်မှာ...',
                'options' => ['Bing', 'Yahoo', 'Google', 'DuckDuckGo'],
                'options_my' => ['Bing', 'Yahoo', 'Google', 'DuckDuckGo'],
                'correct_answer' => 'Google',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'hard',
                'question_text' => 'Who created the C programming language?',
                'question_text_my' => 'C programming language ကို ဖန်တီးခဲ့သူမှာ...',
                'options' => ['Dennis Ritchie', 'Bjarne Stroustrup', 'James Gosling', 'Guido van Rossum'],
                'options_my' => ['Dennis Ritchie', 'Bjarne Stroustrup', 'James Gosling', 'Guido van Rossum'],
                'correct_answer' => 'Dennis Ritchie',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'What does "WiFi" stand for?',
                'question_text_my' => '"WiFi" ၏ အရှည်ကောက်မှာ...',
                'options' => ['Wireless Fidelity', 'Wireless Find', 'Wide Fidelity', 'Wiring Fidelity'],
                'options_my' => ['Wireless Fidelity', 'Wireless Find', 'Wide Fidelity', 'Wiring Fidelity'],
                'correct_answer' => 'Wireless Fidelity',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'Which device captures photos?',
                'question_text_my' => 'ဓာတ်ပုံရိုက်ရန် သုံးသော ကိရိယာမှာ...',
                'options' => ['Printer', 'Camera', 'Scanner', 'Speaker'],
                'options_my' => ['ပရင်တာ', 'ကင်မရာ', 'စကင်နာ', 'စပီကာ'],
                'correct_answer' => 'Camera',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'hard',
                'question_text' => 'What does GPU stand for?',
                'question_text_my' => 'GPU ၏ အရှည်ကောက်မှာ...',
                'options' => ['General Processing Unit', 'Graphics Processing Unit', 'Global Processing Unit', 'Graphical Process Unit'],
                'options_my' => ['General Processing Unit', 'Graphics Processing Unit', 'Global Processing Unit', 'Graphical Process Unit'],
                'correct_answer' => 'Graphics Processing Unit',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'Which operating system is open source?',
                'question_text_my' => 'Open source ဖြစ်သော operating system မှာ...',
                'options' => ['Windows', 'macOS', 'Linux', 'iOS'],
                'options_my' => ['Windows', 'macOS', 'Linux', 'iOS'],
                'correct_answer' => 'Linux',
                'language' => 'en'
            ],


            // Arts & Lit (20 questions)
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'Who wrote "Romeo and Juliet"?',
                'question_text_my' => '"ရိုမီယိုနှင့် ဂျူးလိယက်" ကို ရေးသားခဲ့သူမှာ...',
                'options' => ['Dickens', 'Shakespeare', 'Hemingway', 'Austen'],
                'options_my' => ['ဒစ်ကင်း', 'ရှိတ်စပီးယား', 'ဟဲမင်းဝေး', 'အော်စတင်'],
                'correct_answer' => 'Shakespeare',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'Who painted "The Starry Night"?',
                'question_text_my' => '"The Starry Night" ပန်းချီကားကို ရေးဆွဲခဲ့သူမှာ...',
                'options' => ['Picasso', 'Van Gogh', 'Da Vinci', 'Monet'],
                'options_my' => ['ပက်ကက်ဆို', 'ဗန်ဂိုး', 'ဒါဗင်ချီ', 'မိုနက်'],
                'correct_answer' => 'Van Gogh',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'Which musical instrument has 88 keys?',
                'question_text_my' => 'ခလုတ် ၈၈ ခုပါသော ဂီတတူရိယာမှာ...',
                'options' => ['Guitar', 'Violin', 'Piano', 'Flute'],
                'options_my' => ['ဂစ်တာ', 'တယော', 'စန္ဒရား', 'ပလွေ'],
                'correct_answer' => 'Piano',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'hard',
                'question_text' => 'Who wrote "1984"?',
                'question_text_my' => '"1984" ဝတ္ထုကို ရေးသားခဲ့သူမှာ...',
                'options' => ['Orwell', 'Huxley', 'Bradbury', 'Tolkien'],
                'options_my' => ['အော်ဝဲလ်', 'ဟက်စလေ', 'ဘရက်ဘူရီ', 'တော်ကီး'],
                'correct_answer' => 'Orwell',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'Who wrote the "Harry Potter" series?',
                'question_text_my' => '"Harry Potter" စီးရီးကို ရေးသားခဲ့သူမှာ...',
                'options' => ['J.K. Rowling', 'J.R.R. Tolkien', 'C.S. Lewis', 'Roald Dahl'],
                'options_my' => ['J.K. Rowling', 'J.R.R. Tolkien', 'C.S. Lewis', 'Roald Dahl'],
                'correct_answer' => 'J.K. Rowling',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'What color do you get by mixing red and white?',
                'question_text_my' => 'အနီနှင့် အဖြူ ရောလိုက်လျှင် ဘာအရောင်ရသနည်း။',
                'options' => ['Pink', 'Purple', 'Orange', 'Brown'],
                'options_my' => ['ပန်းရောင်', 'ခရမ်းရောင်', 'လိမ္မော်ရောင်', 'အညိုရောင်'],
                'correct_answer' => 'Pink',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'hard',
                'question_text' => 'Who sculpted David?',
                'question_text_my' => 'David ရုပ်တုကို ထုလုပ်ခဲ့သူမှာ...',
                'options' => ['Donatello', 'Michelangelo', 'Raphael', 'Leonardo'],
                'options_my' => ['ဒေါနတဲလို', 'မိုက်ကယ်အိန်ဂျလို', 'ရာဖေးလ်', 'လီယိုနာဒို'],
                'correct_answer' => 'Michelangelo',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'Which is a Japanese style of comics?',
                'question_text_my' => 'ဂျပန်ကာတွန်း စတိုင်ကို ဘာခေါ်သနည်း။',
                'options' => ['Manga', 'Manhwa', 'Comic', 'Graphic Novel'],
                'options_my' => ['မန်ဂါ', 'မန်ဟွာ', 'ကောမစ်', 'ဂရပ်ဖစ်နိုဗယ်'],
                'correct_answer' => 'Manga',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'Who is the King of Pop?',
                'question_text_my' => 'King of Pop ဟု လူသိများသူမှာ...',
                'options' => ['Elvis', 'Michael Jackson', 'Prince', 'Madonna'],
                'options_my' => ['အဲလ်ဗစ်', 'မိုက်ကယ်ဂျက်ဆင်', 'ပရင့်စ်', 'မက်ဒေါနား'],
                'correct_answer' => 'Michael Jackson',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'hard',
                'question_text' => 'Who wrote "The Great Gatsby"?',
                'question_text_my' => '"The Great Gatsby" ကို ရေးသားခဲ့သူမှာ...',
                'options' => ['Fitzgerald', 'Hemingway', 'Steinbeck', 'Faulkner'],
                'options_my' => ['ဖစ်ဂျရယ်', 'ဟဲမင်းဝေး', 'စတိန်းဘက်', 'ဖော်ခနား'],
                'correct_answer' => 'Fitzgerald',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'The Mona Lisa has no...',
                'question_text_my' => 'မိုနာလီဇာတွင် မပါရှိသော အရာမှာ...',
                'options' => ['Eyebrows', 'Smile', 'Hair', 'Hands'],
                'options_my' => ['မျက်ခုံးမွှေး', 'အပြုံး', 'ဆံပင်', 'လက်'],
                'correct_answer' => 'Eyebrows',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'A Haiku typically has how many syllables?',
                'question_text_my' => 'ဟိုင်ကူကဗျာတွင် ပုံမှန်အားဖြင့် အသံထွက် (syllables) မည်မျှပါသနည်း။',
                'options' => ['15', '17', '19', '21'],
                'options_my' => ['၁၅', '၁၇', '၁၉', '၂၁'],
                'correct_answer' => '17',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'hard',
                'question_text' => 'Who painted "The Scream"?',
                'question_text_my' => '"The Scream" ပန်းချီကားကို ရေးဆွဲခဲ့သူမှာ...',
                'options' => ['Munch', 'Dali', 'Monet', 'Warhol'],
                'options_my' => ['မန့်ချ်', 'ဒါလီ', 'မိုနက်', 'ဝါဟော'],
                'correct_answer' => 'Munch',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'Which novel features a white whale?',
                'question_text_my' => 'ဝေလငါးဖြူကြီး ပါဝင်သော ဝတ္ထုမှာ...',
                'options' => ['Moby Dick', 'Jaws', 'Free Willy', 'The Old Man and the Sea'],
                'options_my' => ['Moby Dick', 'Jaws', 'Free Willy', 'The Old Man and the Sea'],
                'correct_answer' => 'Moby Dick',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'What is the color of an emerald?',
                'question_text_my' => 'မြ ၏ အရောင်မှာ...',
                'options' => ['Red', 'Blue', 'Green', 'Yellow'],
                'options_my' => ['အနီ', 'အပြာ', 'အစိမ်း', 'အဝါ'],
                'correct_answer' => 'Green',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'hard',
                'question_text' => 'Who wrote "War and Peace"?',
                'question_text_my' => '"စစ်နှင့် ငြိမ်းချမ်းရေး" ကို ရေးသားခဲ့သူမှာ...',
                'options' => ['Tolstoy', 'Dostoevsky', 'Chekhov', 'Gogol'],
                'options_my' => ['တော်စတွိုင်း', 'ဒေါစတိုယက်စကီး', 'ချက်ကော့', 'ဂိုဂေါ'],
                'correct_answer' => 'Tolstoy',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'What does "Renaissance" mean?',
                'question_text_my' => '"Renaissance" ၏ အဓိပ္ပါယ်မှာ...',
                'options' => ['Rebirth', 'Revolution', 'Reform', 'Return'],
                'options_my' => ['ပြန်လည်မွေးဖွားခြင်း', 'တော်လှန်ရေး', 'ပြုပြင်ပြောင်းလဲရေး', 'ပြန်လာခြင်း'],
                'correct_answer' => 'Rebirth',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'Which instrument is blown into?',
                'question_text_my' => 'မှုတ်ရသော တူရိယာမှာ...',
                'options' => ['Trumpet', 'Drum', 'Violin', 'Piano'],
                'options_my' => ['ထရမ်ပက်', 'ဒရမ်', 'တယော', 'စန္ဒရား'],
                'correct_answer' => 'Trumpet',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'hard',
                'question_text' => 'Who is the author of "Sherlock Holmes"?',
                'question_text_my' => 'ရှားလော့ဟုမ်း ကို ရေးသားခဲ့သူမှာ...',
                'options' => ['Conan Doyle', 'Agatha Christie', 'Poe', 'King'],
                'options_my' => ['ကိုနန် ဒွိုင်း', 'အဂါသာ ခရစ္စတီ', 'ပို', 'ကင်း'],
                'correct_answer' => 'Conan Doyle',
                'language' => 'en'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'Origami is the art of...',
                'question_text_my' => 'အိုရိဂါမိ သည် ... အနုပညာဖြစ်သည်။',
                'options' => ['Paper folding', 'Flower arranging', 'Painting', 'Calligraphy'],
                'options_my' => ['စက္ကူခေါက်ခြင်း', 'ပန်းအလှဆင်ခြင်း', 'ပန်းချီ', 'လက်ရေးလှ'],
                'correct_answer' => 'Paper folding',
                'language' => 'en'
            ],


            // General Knowledge (20 questions)
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'How many days are in a leap year?',
                'question_text_my' => 'ရက်ထပ်နှစ်တစ်နှစ်တွင် ရက်မည်မျှရှိသနည်း။',
                'options' => ['364', '365', '366', '367'],
                'options_my' => ['၃၆၄', '၃၆၅', '၃၆၆', '၃၆၇'],
                'correct_answer' => '366',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'What is the largest mammal in the world?',
                'question_text_my' => 'ကမ္ဘာပေါ်တွင် အကြီးဆုံး နို့တိုက်သတ္တဝါမှာ...',
                'options' => ['Elephant', 'Blue Whale', 'Giraffe', 'Shark'],
                'options_my' => ['ဆင်', 'ဝေလငါးပြာကြီး', 'သစ်ကုလားအုတ်', 'ငါးမန်း'],
                'correct_answer' => 'Blue Whale',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'How many colors are in a rainbow?',
                'question_text_my' => 'သက်တံတစ်ခုတွင် အရောင်မည်မျှရှိသနည်း။',
                'options' => ['5', '6', '7', '8'],
                'options_my' => ['၅', '၆', '၇', '၈'],
                'correct_answer' => '7',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'hard',
                'question_text' => 'What is the currency of Japan?',
                'question_text_my' => 'ဂျပန်နိုင်ငံ၏ ငွေကြေးမှာ...',
                'options' => ['Yuan', 'Won', 'Yen', 'Ringgit'],
                'options_my' => ['ယွမ်', 'ဝမ်', 'ယန်း', 'ရင်းဂစ်'],
                'correct_answer' => 'Yen',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'Which is the tallest animal?',
                'question_text_my' => 'အရပ်အရှည်ဆုံး တိရစ္ဆာန်မှာ...',
                'options' => ['Elephant', 'Giraffe', 'Horse', 'Zebra'],
                'options_my' => ['ဆင်', 'သစ်ကုလားအုတ်', 'မြင်း', 'မြင်းကျား'],
                'correct_answer' => 'Giraffe',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'What is the main ingredient in bread?',
                'question_text_my' => 'ပေါင်မုန့်တွင် အဓိကပါဝင်သော ပစ္စည်းမှာ...',
                'options' => ['Flour', 'Sugar', 'Rice', 'Potato'],
                'options_my' => ['ဂျုံ', 'သကြား', 'ဆန်', 'အာလူး'],
                'correct_answer' => 'Flour',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'hard',
                'question_text' => 'Which planet has the most moons?',
                'question_text_my' => 'လံအရံဂြိုဟ် အများဆုံးရှိသော ဂြိုဟ်မှာ...',
                'options' => ['Jupiter', 'Saturn', 'Uranus', 'Mars'],
                'options_my' => ['ကြာသပတေးဂြိုဟ်', 'စနေဂြိုဟ်', 'ယူရေးနပ်စ်', 'အင်္ဂါဂြိုဟ်'],
                'correct_answer' => 'Saturn',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'How many legs does a spider have?',
                'question_text_my' => 'ပင့်ကူတွင် ခြေထောက် မည်မျှရှိသနည်း။',
                'options' => ['6', '8', '10', '12'],
                'options_my' => ['၆', '၈', '၁၀', '၁၂'],
                'correct_answer' => '8',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'What do bees make?',
                'question_text_my' => 'ပျားများက ဘာပြုလုပ်သနည်း။',
                'options' => ['Milk', 'Honey', 'Silk', 'Wool'],
                'options_my' => ['နို့', 'ပျားရည်', 'ပိုး', 'သိုးမွှေး'],
                'correct_answer' => 'Honey',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'hard',
                'question_text' => 'What is the hardest rock?',
                'question_text_my' => 'အမာဆုံး ကျောက်မှာ...',
                'options' => ['Granite', 'Diamond', 'Marble', 'Slate'],
                'options_my' => ['ဂရက်နိုက်', 'စိန်', 'စကျင်ကျောက်', 'ကျောက်သင်ပုန်းကျောက်'],
                'correct_answer' => 'Diamond',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'Which is the fastest land animal?',
                'question_text_my' => 'အမြန်ဆုံး ကုန်းနေသတ္တဝါမှာ...',
                'options' => ['Lion', 'Tiger', 'Cheetah', 'Leopard'],
                'options_my' => ['ခြင်္သေ့', 'ကျား', 'ချီတာ', 'ကျားသစ်'],
                'correct_answer' => 'Cheetah',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'What is the color of a banana?',
                'question_text_my' => 'ငှက်ပျောသီး၏ အရောင်မှာ...',
                'options' => ['Red', 'Green', 'Yellow', 'Blue'],
                'options_my' => ['အနီ', 'အစိမ်း', 'အဝါ', 'အပြာ'],
                'correct_answer' => 'Yellow',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'hard',
                'question_text' => 'How many hearts does an octopus have?',
                'question_text_my' => 'ရေဘဝဲတွင် နှလုံးမည်မျှရှိသနည်း။',
                'options' => ['1', '2', '3', '4'],
                'options_my' => ['၁', '၂', '၃', '၄'],
                'correct_answer' => '3',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'Which country invented pizza?',
                'question_text_my' => 'ပီဇာကို တီထွင်ခဲ့သော နိုင်ငံမှာ...',
                'options' => ['USA', 'Italy', 'France', 'Spain'],
                'options_my' => ['အမေရိကန်', 'အီတလီ', 'ပြင်သစ်', 'စပိန်'],
                'correct_answer' => 'Italy',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'What do you use to brush your teeth?',
                'question_text_my' => 'သွားတိုက်ရန် ဘာကိုသုံးသနည်း။',
                'options' => ['Comb', 'Brush', 'Toothbrush', 'Spoon'],
                'options_my' => ['ဘီး', 'ဘရက်ရှ်', 'သွားပွတ်တံ', 'ဇွန်း'],
                'correct_answer' => 'Toothbrush',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'hard',
                'question_text' => 'Who is the god of thunder in Norse mythology?',
                'question_text_my' => 'Norse ဒဏ္ဍာရီလာ မိုးကြိုးနတ်ဘုရားမှာ...',
                'options' => ['Loki', 'Odin', 'Thor', 'Freya'],
                'options_my' => ['လိုကီ', 'အိုဒင်', 'ဆော်', 'ဖရီယာ'],
                'correct_answer' => 'Thor',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'How many continents are there?',
                'question_text_my' => 'ကမ္ဘာပေါ်တွင် တိုက်ကြီးမည်မျှရှိသနည်း။',
                'options' => ['5', '6', '7', '8'],
                'options_my' => ['၅', '၆', '၇', '၈'],
                'correct_answer' => '7',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'What is H2O?',
                'question_text_my' => 'H2O ဆိုသည်မှာ...',
                'options' => ['Salt', 'Air', 'Water', 'Fire'],
                'options_my' => ['ဆား', 'လေ', 'ရေ', 'မီး'],
                'correct_answer' => 'Water',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'hard',
                'question_text' => 'Which element has the symbol Au?',
                'question_text_my' => 'Au သင်္ကေတသည် မည်သည့်ဒြပ်စင်ဖြစ်သနည်း။',
                'options' => ['Silver', 'Gold', 'Copper', 'Iron'],
                'options_my' => ['ငွေ', 'ရွှေ', 'ကြေးနီ', 'သံ'],
                'correct_answer' => 'Gold',
                'language' => 'en'
            ],
            [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'What is the capital of Thailand?',
                'question_text_my' => 'ထိုင်းနိုင်ငံ၏ မြို့တော်မှာ...',
                'options' => ['Bangkok', 'Phuket', 'Chiang Mai', 'Pattaya'],
                'options_my' => ['ဘန်ကောက်', 'ဖူးခက်', 'ချင်းမိုင်', 'ပတ္တရား'],
                'correct_answer' => 'Bangkok',
                'language' => 'en'
            ],
        ];

        foreach ($questions as $q) {
            Question::create($q);
        }
    }
}
