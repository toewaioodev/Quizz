<?php

namespace Database\Seeders;

use App\Models\Question;
use Illuminate\Database\Seeder;

class GeographyQuestionSeeder extends Seeder
{
    public function run(): void
    {
        $questions = [
            // --- Easy (35 Questions) ---
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'What is the capital of France?',
                'question_text_my' => 'ပြင်သစ်နိုင်ငံ၏ မြို့တော်သည်...',
                'options' => ['London', 'Berlin', 'Paris', 'Madrid'],
                'options_my' => ['လန်ဒန်', 'ဘာလင်', 'ပဲရစ်', 'မက်ဒရစ်'],
                'correct_answer' => 'Paris',
                'language' => 'en'
            ], // [cite: 112]
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'Which is the largest continent?',
                'question_text_my' => 'အကြီးဆုံးတိုက်ကြီးမှာ...',
                'options' => ['Africa', 'Asia', 'Europe', 'North America'],
                'options_my' => ['အာဖရိက', 'အာရှ', 'ဥရောပ', 'မြောက်အမေရိက'],
                'correct_answer' => 'Asia',
                'language' => 'en'
            ], // [cite: 114]
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'Which country has the largest population?',
                'question_text_my' => 'လူဦးရေအများဆုံးနိုင်ငံမှာ...',
                'options' => ['India', 'China', 'USA', 'Indonesia'],
                'options_my' => ['အိန္ဒိယ', 'တရုတ်', 'အမေရိကန်', 'အင်ဒိုနီးရှား'],
                'correct_answer' => 'India',
                'language' => 'en'
            ], // [cite: 119]
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'What is the capital of Japan?',
                'question_text_my' => 'ဂျပန်နိုင်ငံ၏ မြို့တော်မှာ...',
                'options' => ['Kyoto', 'Osaka', 'Tokyo', 'Seoul'],
                'options_my' => ['ကျိုတို', 'အိုဆာကာ', 'တိုကျို', 'ဆိုးလ်'],
                'correct_answer' => 'Tokyo',
                'language' => 'en'
            ], // [cite: 128]
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'Which country is famous for kangaroos?',
                'question_text_my' => 'ကော်ငရူးများဖြင့် ကျော်ကြားသော နိုင်ငံမှာ...',
                'options' => ['Austria', 'Australia', 'New Zealand', 'South Africa'],
                'options_my' => ['သြစတြီးယား', 'သြစတြေးလျ', 'နယူးဇီလန်', 'တောင်အာဖရိက'],
                'correct_answer' => 'Australia',
                'language' => 'en'
            ], // [cite: 134]
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'Africa is a...',
                'question_text_my' => 'အာဖရိကသည်...',
                'options' => ['Country', 'Continent', 'City', 'Island'],
                'options_my' => ['နိုင်ငံ', 'တိုက်', 'မြို့', 'ကျွန်း'],
                'correct_answer' => 'Continent',
                'language' => 'en'
            ], // [cite: 141]
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'What is the capital of the United Kingdom?',
                'question_text_my' => 'ယူနိုက်တက်ကင်းဒမ်း (UK) ၏ မြို့တော်မှာ...',
                'options' => ['Paris', 'Dublin', 'London', 'Edinburgh'],
                'options_my' => ['ပဲရစ်', 'ဒပ်ဘလင်', 'လန်ဒန်', 'အီဒင်ဘာရာ'],
                'correct_answer' => 'London',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'In which country are the Pyramids of Giza?',
                'question_text_my' => 'ဂီဇာပိရမစ်ကြီးများ ရှိသောနိုင်ငံမှာ...',
                'options' => ['Iran', 'Egypt', 'Mexico', 'Sudan'],
                'options_my' => ['အီရန်', 'အီဂျစ်', 'မက္ကဆီကို', 'ဆူဒန်'],
                'correct_answer' => 'Egypt',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'Which ocean lies between America and Europe?',
                'question_text_my' => 'အမေရိကနှင့် ဥရောပကြားရှိ သမုဒ္ဒရာမှာ...',
                'options' => ['Pacific', 'Atlantic', 'Indian', 'Arctic'],
                'options_my' => ['ပစိဖိတ်', 'အတ္တလန္တိတ်', 'အိန္ဒိယ', 'အာတိတ်'],
                'correct_answer' => 'Atlantic',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'What is the capital of Italy?',
                'question_text_my' => 'အီတလီနိုင်ငံ၏ မြို့တော်မှာ...',
                'options' => ['Venice', 'Milan', 'Rome', 'Naples'],
                'options_my' => ['ဗင်းနစ်', 'မီလန်', 'ရောမ', 'နေပယ်လ်'],
                'correct_answer' => 'Rome',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'Which country is north of the USA?',
                'question_text_my' => 'အမေရိကန်ပြည်ထောင်စု၏ မြောက်ဘက်ရှိ နိုင်ငံမှာ...',
                'options' => ['Mexico', 'Canada', 'Cuba', 'Brazil'],
                'options_my' => ['မက္ကဆီကို', 'ကနေဒါ', 'ကျူးဘား', 'ဘရာဇီး'],
                'correct_answer' => 'Canada',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'What is the largest ocean?',
                'question_text_my' => 'အကြီးဆုံး သမုဒ္ဒရာမှာ...',
                'options' => ['Atlantic', 'Indian', 'Arctic', 'Pacific'],
                'options_my' => ['အတ္တလန္တိတ်', 'အိန္ဒိယ', 'အာတိတ်', 'ပစိဖိတ်'],
                'correct_answer' => 'Pacific',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'What is the capital of China?',
                'question_text_my' => 'တရုတ်နိုင်ငံ၏ မြို့တော်မှာ...',
                'options' => ['Shanghai', 'Beijing', 'Hong Kong', 'Shenzhen'],
                'options_my' => ['ရှန်ဟိုင်း', 'ပေကျင်း', 'ဟောင်ကောင်', 'ရှန်ကျန်း'],
                'correct_answer' => 'Beijing',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'Where is the Eiffel Tower located?',
                'question_text_my' => 'အီဖယ်မျှော်စင် ရှိရာမြို့မှာ...',
                'options' => ['London', 'Berlin', 'Rome', 'Paris'],
                'options_my' => ['လန်ဒန်', 'ဘာလင်', 'ရောမ', 'ပဲရစ်'],
                'correct_answer' => 'Paris',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'Which continent is also a country?',
                'question_text_my' => 'တိုက်လည်းဖြစ်၊ နိုင်ငံလည်းဖြစ်သော ဒေသမှာ...',
                'options' => ['Europe', 'Australia', 'Antarctica', 'South America'],
                'options_my' => ['ဥရောပ', 'သြစတြေးလျ', 'အန္တာတိက', 'တောင်အမေရိက'],
                'correct_answer' => 'Australia',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'What is the capital of Spain?',
                'question_text_my' => 'စပိန်နိုင်ငံ၏ မြို့တော်မှာ...',
                'options' => ['Barcelona', 'Madrid', 'Seville', 'Valencia'],
                'options_my' => ['ဘာစီလိုနာ', 'မက်ဒရစ်', 'ဆီဗီးလ်', 'ဗလင်စီယာ'],
                'correct_answer' => 'Madrid',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'The Statue of Liberty is in which city?',
                'question_text_my' => 'လွတ်လပ်ရေးရုပ်တုကြီး ရှိသောမြို့မှာ...',
                'options' => ['Washington D.C.', 'Los Angeles', 'New York', 'Boston'],
                'options_my' => ['ဝါရှင်တန် ဒီစီ', 'လော့စ်အိန်ဂျလိစ်', 'နယူးယောက်', 'ဘော့စတွန်'],
                'correct_answer' => 'New York',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'What is the coldest continent?',
                'question_text_my' => 'အအေးဆုံးတိုက်ကြီးမှာ...',
                'options' => ['Europe', 'Asia', 'North America', 'Antarctica'],
                'options_my' => ['ဥရောပ', 'အာရှ', 'မြောက်အမေရိက', 'အန္တာတိက'],
                'correct_answer' => 'Antarctica',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'Which country is shaped like a boot?',
                'question_text_my' => 'ဖိနပ်ပုံသဏ္ဍာန်ရှိသော နိုင်ငံမှာ...',
                'options' => ['Spain', 'Italy', 'Greece', 'France'],
                'options_my' => ['စပိန်', 'အီတလီ', 'ဂရိ', 'ပြင်သစ်'],
                'correct_answer' => 'Italy',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'What is the capital of Germany?',
                'question_text_my' => 'ဂျာမနီနိုင်ငံ၏ မြို့တော်မှာ...',
                'options' => ['Munich', 'Hamburg', 'Berlin', 'Frankfurt'],
                'options_my' => ['မြူးနစ်', 'ဟမ်းဘတ်', 'ဘာလင်', 'ဖရန့်ဖတ်'],
                'correct_answer' => 'Berlin',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'Which river runs through Egypt?',
                'question_text_my' => 'အီဂျစ်နိုင်ငံကို ဖြတ်သန်းစီးဆင်းသော မြစ်မှာ...',
                'options' => ['Amazon', 'Nile', 'Yangtze', 'Thames'],
                'options_my' => ['အမေဇုန်', 'နိုင်း', 'ယန်စီ', 'သိမ်း'],
                'correct_answer' => 'Nile',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'The Taj Mahal is in which country?',
                'question_text_my' => 'တာဂျ်မဟာ ရှိသောနိုင်ငံမှာ...',
                'options' => ['India', 'Pakistan', 'Bangladesh', 'Nepal'],
                'options_my' => ['အိန္ဒိယ', 'ပါကစ္စတန်', 'ဘင်္ဂလားဒေ့ရှ်', 'နီပေါ'],
                'correct_answer' => 'India',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'What is the capital of Russia?',
                'question_text_my' => 'ရုရှားနိုင်ငံ၏ မြို့တော်မှာ...',
                'options' => ['Saint Petersburg', 'Moscow', 'Kiev', 'Minsk'],
                'options_my' => ['စိန့်ပီတာစဘတ်', 'မော်စကို', 'ကီးယက်', 'မင့်စ်'],
                'correct_answer' => 'Moscow',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'Mount Fuji is in which country?',
                'question_text_my' => 'ဖူဂျီတောင် ရှိသောနိုင်ငံမှာ...',
                'options' => ['China', 'Korea', 'Japan', 'Vietnam'],
                'options_my' => ['တရုတ်', 'ကိုရီးယား', 'ဂျပန်', 'ဗီယက်နမ်'],
                'correct_answer' => 'Japan',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'Which city is famous for canals?',
                'question_text_my' => 'ရေမြောင်းများဖြင့် ကျော်ကြားသော မြို့မှာ...',
                'options' => ['Paris', 'Venice', 'London', 'Berlin'],
                'options_my' => ['ပဲရစ်', 'ဗင်းနစ်', 'လန်ဒန်', 'ဘာလင်'],
                'correct_answer' => 'Venice',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'How many continents are there?',
                'question_text_my' => 'ကမ္ဘာပေါ်တွင် တိုက်ကြီးမည်မျှရှိသနည်း။',
                'options' => ['5', '6', '7', '8'],
                'options_my' => ['၅', '၆', '၇', '၈'],
                'correct_answer' => '7',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'What is the capital of Thailand?',
                'question_text_my' => 'ထိုင်းနိုင်ငံ၏ မြို့တော်မှာ...',
                'options' => ['Phuket', 'Pattaya', 'Bangkok', 'Chiang Mai'],
                'options_my' => ['ဖူးခက်', 'ပတ္တရား', 'ဘန်ကောက်', 'ချင်းမိုင်'],
                'correct_answer' => 'Bangkok',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'Which country is south of the USA?',
                'question_text_my' => 'အမေရိကန်ပြည်ထောင်စု၏ တောင်ဘက်ရှိ နိုင်ငံမှာ...',
                'options' => ['Canada', 'Mexico', 'Cuba', 'Brazil'],
                'options_my' => ['ကနေဒါ', 'မက္ကဆီကို', 'ကျူးဘား', 'ဘရာဇီး'],
                'correct_answer' => 'Mexico',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'What is the capital of South Korea?',
                'question_text_my' => 'တောင်ကိုရီးယားနိုင်ငံ၏ မြို့တော်မှာ...',
                'options' => ['Busan', 'Incheon', 'Seoul', 'Daegu'],
                'options_my' => ['ဘူဆန်', 'အင်ချွန်း', 'ဆိုးလ်', 'ဒယ်ဂူး'],
                'correct_answer' => 'Seoul',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'The Great Wall is located in...',
                'question_text_my' => 'မဟာတံတိုင်းကြီး တည်ရှိသော နိုင်ငံမှာ...',
                'options' => ['India', 'Mongolia', 'China', 'Japan'],
                'options_my' => ['အိန္ဒိယ', 'မွန်ဂိုလီးယား', 'တရုတ်', 'ဂျပန်'],
                'correct_answer' => 'China',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'What is the capital of Egypt?',
                'question_text_my' => 'အီဂျစ်နိုင်ငံ၏ မြို့တော်မှာ...',
                'options' => ['Alexandria', 'Luxor', 'Cairo', 'Giza'],
                'options_my' => ['အလက်ဇန္ဒြီးယား', 'လူဇော', 'ကိုင်ရို', 'ဂီဇာ'],
                'correct_answer' => 'Cairo',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'Which country has a maple leaf on its flag?',
                'question_text_my' => 'အလံတွင် မေပယ်ရွက်ပါသော နိုင်ငံမှာ...',
                'options' => ['USA', 'UK', 'Canada', 'Australia'],
                'options_my' => ['အမေရိကန်', 'ဗြိတိန်', 'ကနေဒါ', 'သြစတြေးလျ'],
                'correct_answer' => 'Canada',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'Where is Hollywood located?',
                'question_text_my' => 'ဟောလိဝုဒ် ရှိရာမြို့မှာ...',
                'options' => ['New York', 'Los Angeles', 'Chicago', 'Miami'],
                'options_my' => ['နယူးယောက်', 'လော့စ်အိန်ဂျလိစ်', 'ရှီကာဂို', 'မိုင်ယာမီ'],
                'correct_answer' => 'Los Angeles',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'Which is the smallest continent?',
                'question_text_my' => 'အသေးဆုံးတိုက်ကြီးမှာ...',
                'options' => ['Europe', 'Antarctica', 'Australia', 'South America'],
                'options_my' => ['ဥရောပ', 'အန္တာတိက', 'သြစတြေးလျ', 'တောင်အမေရိက'],
                'correct_answer' => 'Australia',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'What is the capital of India?',
                'question_text_my' => 'အိန္ဒိယနိုင်ငံ၏ မြို့တော်မှာ...',
                'options' => ['Mumbai', 'Kolkata', 'New Delhi', 'Bangalore'],
                'options_my' => ['မွမ်ဘိုင်း', 'ကာလကတ္တား', 'နယူးဒေလီ', 'ဘန်ဂလို'],
                'correct_answer' => 'New Delhi',
                'language' => 'en'
            ],

            // --- Medium (35 Questions) ---
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'What is the longest river in the world?',
                'question_text_my' => 'ကမ္ဘာပေါ်တွင် အရှည်ဆုံးမြစ်မှာ...',
                'options' => ['Amazon', 'Nile', 'Yangtze', 'Mississippi'],
                'options_my' => ['အမေဇုန်', 'နိုင်း', 'ယန်စီ', 'မစ္စစ္စပီ'],
                'correct_answer' => 'Nile',
                'language' => 'en'
            ], // [cite: 116]
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'Mount Everest is located in which mountain range?',
                'question_text_my' => 'အဲဗရက်တောင်သည် မည်သည့်တောင်တန်းတွင် ရှိသနည်း။',
                'options' => ['Andes', 'Rockies', 'Himalayas', 'Alps'],
                'options_my' => ['အင်ဒီးစ်', 'ရော့ကီး', 'ဟိမဝန္တာ', 'အဲလ်ပ်'],
                'correct_answer' => 'Himalayas',
                'language' => 'en'
            ], // [cite: 117]
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'Which ocean is off the California coast?',
                'question_text_my' => 'ကယ်လီဖိုးနီးယား ကမ်းလွန်ရှိ သမုဒ္ဒရာမှာ...',
                'options' => ['Atlantic', 'Pacific', 'Indian', 'Arctic'],
                'options_my' => ['အတ္တလန္တိတ်', 'ပစိဖိတ်', 'အိန္ဒိယ', 'အာတိတ်'],
                'correct_answer' => 'Pacific',
                'language' => 'en'
            ], // [cite: 123]
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'The Sahara Desert is located in...',
                'question_text_my' => 'ဆာဟာရ သဲကန္တာရ တည်ရှိရာနေရာသည်...',
                'options' => ['Asia', 'South America', 'Africa', 'Australia'],
                'options_my' => ['အာရှ', 'တောင်အမေရိက', 'အာဖရိက', 'သြစတြေးလျ'],
                'correct_answer' => 'Africa',
                'language' => 'en'
            ], // [cite: 126]
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'How many states are in the USA?',
                'question_text_my' => 'အမေရိကန်ပြည်ထောင်စုတွင် ပြည်နယ်ပေါင်း မည်မျှရှိသနည်း။',
                'options' => ['48', '49', '50', '51'],
                'options_my' => ['၄၈', '၄၉', '၅၀', '၅၁'],
                'correct_answer' => '50',
                'language' => 'en'
            ], // [cite: 130]
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'The Great Barrier Reef is in...',
                'question_text_my' => 'Great Barrier Reef တည်ရှိရာမှာ...',
                'options' => ['Australia', 'Belize', 'Indonesia', 'Philippines'],
                'options_my' => ['သြစတြေးလျ', 'ဘေлиз', 'အင်ဒိုနီးရှား', 'ဖိလစ်ပိုင်'],
                'correct_answer' => 'Australia',
                'language' => 'en'
            ], // [cite: 135]
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'Which country shares the longest border with the USA?',
                'question_text_my' => 'အမေရိကန်နှင့် အရှည်ဆုံးနယ်နိမိတ် ထိစပ်နေသော နိုင်ငံမှာ...',
                'options' => ['Mexico', 'Canada', 'Russia', 'Cuba'],
                'options_my' => ['မက္ကဆီကို', 'ကနေဒါ', 'ရုရှား', 'ကျူးဘား'],
                'correct_answer' => 'Canada',
                'language' => 'en'
            ], // [cite: 139]
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'Which desert is the largest in the world (including polar)?',
                'question_text_my' => 'လောကတွင် အကြီးဆုံး သဲကန္တာရမှာ (ဝင်ရိုးစွန်းအပါအဝင်)...',
                'options' => ['Sahara', 'Arabian', 'Gobi', 'Antarctic'],
                'options_my' => ['ဆာဟာရ', 'အာရေဘီယန်', 'ဂိုဘီ', 'အန္တာတိက'],
                'correct_answer' => 'Antarctic',
                'language' => 'en'
            ], // [cite: 145]
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'Machu Picchu is in which country?',
                'question_text_my' => 'Machu Picchu သည် မည်သည့်နိုင်ငံတွင် ရှိသနည်း။',
                'options' => ['Peru', 'Brazil', 'Mexico', 'Chile'],
                'options_my' => ['ပီရူး', 'ဘရာဇီး', 'မက္ကဆီကို', 'ချီလီ'],
                'correct_answer' => 'Peru',
                'language' => 'en'
            ], // [cite: 147]
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'What is the capital of Brazil?',
                'question_text_my' => 'ဘရာဇီးနိုင်ငံ၏ မြို့တော်မှာ...',
                'options' => ['Rio de Janeiro', 'Sao Paulo', 'Brasilia', 'Salvador'],
                'options_my' => ['ရီယိုဒီဂျနေးရိုး', 'ဆော်ပေါလို', 'ဘရာစီးလီးယား', 'ဆာဗေးဒေါ'],
                'correct_answer' => 'Brasilia',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'What is the capital of Turkey?',
                'question_text_my' => 'တူရကီနိုင်ငံ၏ မြို့တော်မှာ...',
                'options' => ['Istanbul', 'Ankara', 'Izmir', 'Antalya'],
                'options_my' => ['အစ္စတန်ဘူလ်', 'အန်ကာရာ', 'အစ်ဇ်မီး', 'အန်တယ်လ်ယာ'],
                'correct_answer' => 'Ankara',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'Which country has the most islands?',
                'question_text_my' => 'ကျွန်းအများဆုံးရှိသော နိုင်ငံမှာ...',
                'options' => ['Indonesia', 'Philippines', 'Sweden', 'Japan'],
                'options_my' => ['အင်ဒိုနီးရှား', 'ဖိလစ်ပိုင်', 'ဆွီဒင်', 'ဂျပန်'],
                'correct_answer' => 'Sweden', // Note: Geographically Sweden has the most recorded islands.
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'What is the capital of Vietnam?',
                'question_text_my' => 'ဗီယက်နမ်နိုင်ငံ၏ မြို့တော်မှာ...',
                'options' => ['Ho Chi Minh City', 'Hanoi', 'Da Nang', 'Hue'],
                'options_my' => ['ဟိုချီမင်းစီးတီး', 'ဟနွိုင်း', 'ဒါနန်း', 'ဟွေ'],
                'correct_answer' => 'Hanoi',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'The Panama Canal connects which two oceans?',
                'question_text_my' => 'ပနားမားတူးမြောင်းသည် မည်သည့်သမုဒ္ဒရာနှစ်ခုကို ဆက်သွယ်ထားသနည်း။',
                'options' => ['Atlantic & Indian', 'Atlantic & Pacific', 'Pacific & Indian', 'Arctic & Atlantic'],
                'options_my' => ['အတ္တလန္တိတ် နှင့် အိန္ဒိယ', 'အတ္တလန္တိတ် နှင့် ပစိဖိတ်', 'ပစိဖိတ် နှင့် အိန္ဒိယ', 'အာတိတ် နှင့် အတ္တလန္တိတ်'],
                'correct_answer' => 'Atlantic & Pacific',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'What is the highest waterfall in the world?',
                'question_text_my' => 'ကမ္ဘာပေါ်တွင် အမြင့်ဆုံးရေတံခွန်မှာ...',
                'options' => ['Niagara Falls', 'Victoria Falls', 'Angel Falls', 'Iguazu Falls'],
                'options_my' => ['နိုင်ရာဂရာ', 'ဗစ်တိုးရီးယား', 'အိန်ဂျယ်', 'အီဂွားဇူး'],
                'correct_answer' => 'Angel Falls',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'What is the largest lake in the world by area?',
                'question_text_my' => 'ဧရိယာအလိုက် ကမ္ဘာပေါ်တွင် အကြီးဆုံးရေကန်မှာ...',
                'options' => ['Lake Superior', 'Caspian Sea', 'Lake Victoria', 'Lake Huron'],
                'options_my' => ['ရေကန်ကြီး Superior', 'ကက်စပီယန်ပင်လယ်', 'ဗစ်တိုးရီးယားရေကန်', 'ရေကန်ကြီး Huron'],
                'correct_answer' => 'Caspian Sea',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'What is the capital of Argentina?',
                'question_text_my' => 'အာဂျင်တီးနားနိုင်ငံ၏ မြို့တော်မှာ...',
                'options' => ['Santiago', 'Lima', 'Buenos Aires', 'Bogota'],
                'options_my' => ['ဆန်တီယာဂို', 'လီမာ', 'ဗျူနိုအေးရိစ်', 'ဘိုဂိုတာ'],
                'correct_answer' => 'Buenos Aires',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'Which country is known as the Land of the Rising Sun?',
                'question_text_my' => 'နေထွက်ရာ အရပ်ဟု တင်စားခေါ်ဝေါ်သော နိုင်ငံမှာ...',
                'options' => ['China', 'Japan', 'Thailand', 'New Zealand'],
                'options_my' => ['တရုတ်', 'ဂျပန်', 'ထိုင်း', 'နယူးဇီလန်'],
                'correct_answer' => 'Japan',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'What is the capital of Myanmar?',
                'question_text_my' => 'မြန်မာနိုင်ငံ၏ မြို့တော်မှာ...',
                'options' => ['Yangon', 'Mandalay', 'Naypyidaw', 'Bagan'],
                'options_my' => ['ရန်ကုန်', 'မန္တလေး', 'နေပြည်တော်', 'ပုဂံ'],
                'correct_answer' => 'Naypyidaw',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'The Andes Mountains are located in...',
                'question_text_my' => 'အင်ဒီးစ် တောင်တန်းကြီး တည်ရှိသော တိုက်မှာ...',
                'options' => ['North America', 'South America', 'Europe', 'Asia'],
                'options_my' => ['မြောက်အမေရိက', 'တောင်အမေရိက', 'ဥရောပ', 'အာရှ'],
                'correct_answer' => 'South America',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'Which river flows through Paris?',
                'question_text_my' => 'ပဲရစ်မြို့ကို ဖြတ်သန်းစီးဆင်းသော မြစ်မှာ...',
                'options' => ['Thames', 'Seine', 'Rhine', 'Danube'],
                'options_my' => ['သိမ်း', 'စိန်း', 'ရိုင်း', 'ဒန်ညူ'],
                'correct_answer' => 'Seine',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'What is the deepest lake in the world?',
                'question_text_my' => 'ကမ္ဘာပေါ်တွင် အနက်ဆုံး ရေကန်မှာ...',
                'options' => ['Lake Superior', 'Lake Baikal', 'Lake Tanganyika', 'Lake Malawi'],
                'options_my' => ['ရေကန်ကြီး Superior', 'ရေကန်ကြီး Baikal', 'Tanganyika', 'Malawi'],
                'correct_answer' => 'Lake Baikal',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'Where is the Vatican City located?',
                'question_text_my' => 'ဗာတီကန်စီးတီး တည်ရှိရာ နေရာသည်...',
                'options' => ['France', 'Spain', 'Rome (Italy)', 'Greece'],
                'options_my' => ['ပြင်သစ်', 'စပိန်', 'ရောမ (အီတလီ)', 'ဂရိ'],
                'correct_answer' => 'Rome (Italy)',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'The Rockies are a mountain range in...',
                'question_text_my' => 'Rockies တောင်တန်းကြီး တည်ရှိရာမှာ...',
                'options' => ['South America', 'Europe', 'North America', 'Australia'],
                'options_my' => ['တောင်အမေရိက', 'ဥရောပ', 'မြောက်အမေရိက', 'သြစတြေးလျ'],
                'correct_answer' => 'North America',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'What is the capital of Portugal?',
                'question_text_my' => 'ပေါ်တူဂီနိုင်ငံ၏ မြို့တော်မှာ...',
                'options' => ['Lisbon', 'Madrid', 'Porto', 'Barcelona'],
                'options_my' => ['လစ္စဘွန်း', 'မက်ဒရစ်', 'ပေါ်တို', 'ဘာစီလိုနာ'],
                'correct_answer' => 'Lisbon',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'Which country is known as the Land of Smiles?',
                'question_text_my' => 'အပြုံးပိုင်ရှင်များ၏ မြေဟု တင်စားသော နိုင်ငံမှာ...',
                'options' => ['Vietnam', 'Cambodia', 'Thailand', 'Laos'],
                'options_my' => ['ဗီယက်နမ်', 'ကမ္ဘောဒီးယား', 'ထိုင်း', 'လာအို'],
                'correct_answer' => 'Thailand',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'What is the capital of Malaysia?',
                'question_text_my' => 'မလေးရှားနိုင်ငံ၏ မြို့တော်မှာ...',
                'options' => ['Jakarta', 'Bangkok', 'Kuala Lumpur', 'Singapore'],
                'options_my' => ['ဂျကာတာ', 'ဘန်ကောက်', 'ကွာလာလမ်ပူ', 'စင်ကာပူ'],
                'correct_answer' => 'Kuala Lumpur',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'Which US state is an island?',
                'question_text_my' => 'ကျွန်းဖြစ်သော အမေရိကန်ပြည်နယ်မှာ...',
                'options' => ['Alaska', 'Florida', 'Hawaii', 'California'],
                'options_my' => ['အလက်စကာ', 'ဖလော်ရီဒါ', 'ဟာဝိုင်အီ', 'ကယ်လီဖိုးနီးယား'],
                'correct_answer' => 'Hawaii',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'What is the capital of Philippines?',
                'question_text_my' => 'ဖိလစ်ပိုင်နိုင်ငံ၏ မြို့တော်မှာ...',
                'options' => ['Manila', 'Cebu', 'Davao', 'Quezon City'],
                'options_my' => ['မနီလာ', 'စီဘူး', 'ဒါဗာအို', 'ကွီဇုန်စီးတီး'],
                'correct_answer' => 'Manila',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'The Grand Canyon is located in which country?',
                'question_text_my' => 'Grand Canyon တည်ရှိသော နိုင်ငံမှာ...',
                'options' => ['Canada', 'USA', 'Mexico', 'Australia'],
                'options_my' => ['ကနေဒါ', 'အမေရိကန်', 'မက္ကဆီကို', 'သြစတြေးလျ'],
                'correct_answer' => 'USA',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'What is the capital of Saudi Arabia?',
                'question_text_my' => 'ဆော်ဒီအာရေဗျနိုင်ငံ၏ မြို့တော်မှာ...',
                'options' => ['Dubai', 'Mecca', 'Riyadh', 'Jeddah'],
                'options_my' => ['ဒူဘိုင်း', 'မက္ကာ', 'ရီယာ့ဒ်', 'ဂျစ်ဒါ'],
                'correct_answer' => 'Riyadh',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'Which continent contains the South Pole?',
                'question_text_my' => 'တောင်ဝင်ရိုးစွန်း တည်ရှိသော တိုက်မှာ...',
                'options' => ['Australia', 'South America', 'Antarctica', 'Africa'],
                'options_my' => ['သြစတြေးလျ', 'တောင်အမေရိက', 'အန္တာတိက', 'အာဖရိက'],
                'correct_answer' => 'Antarctica',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'What is the capital of Indonesia?',
                'question_text_my' => 'အင်ဒိုနီးရှားနိုင်ငံ၏ မြို့တော်မှာ...',
                'options' => ['Bali', 'Jakarta', 'Surabaya', 'Bandung'],
                'options_my' => ['ဘာလီ', 'ဂျကာတာ', 'ဆူရာဘာယာ', 'ဘန်ဒေါင်း'],
                'correct_answer' => 'Jakarta',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'Mount Kilimanjaro is in which continent?',
                'question_text_my' => 'ကီလီမန်ဂျာရိုတောင် တည်ရှိသော တိုက်မှာ...',
                'options' => ['Asia', 'South America', 'Africa', 'Europe'],
                'options_my' => ['အာရှ', 'တောင်အမေရိက', 'အာဖရိက', 'ဥရောပ'],
                'correct_answer' => 'Africa',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'What is the capital of Pakistan?',
                'question_text_my' => 'ပါကစ္စတန်နိုင်ငံ၏ မြို့တော်မှာ...',
                'options' => ['Karachi', 'Lahore', 'Islamabad', 'Peshawar'],
                'options_my' => ['ကရာချိ', 'လာဟိုး', 'အစ္စလာမာဘတ်', 'ပက်ရှဝါ'],
                'correct_answer' => 'Islamabad',
                'language' => 'en'
            ],

            // --- Hard (30 Questions) ---
            [
                'category' => 'Geography',
                'difficulty' => 'hard',
                'question_text' => 'What is the capital of Australia?',
                'question_text_my' => 'သြစတြေးလျ၏ မြို့တော်မှာ...',
                'options' => ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
                'options_my' => ['ဆစ်ဒနီ', 'မဲလ်ဘုန်း', 'ကန်ဘာရာ', 'ပါ့သ်'],
                'correct_answer' => 'Canberra',
                'language' => 'en'
            ], // [cite: 121]
            [
                'category' => 'Geography',
                'difficulty' => 'hard',
                'question_text' => 'Which country looks like a boot?',
                'question_text_my' => 'ဖိနပ်ပုံသဏ္ဍာန်ရှိသော နိုင်ငံမှာ...',
                'options' => ['Italy', 'Spain', 'Greece', 'Portugal'],
                'options_my' => ['အီတလီ', 'စပိန်', 'ဂရိ', 'ပေါ်တူဂီ'],
                'correct_answer' => 'Italy',
                'language' => 'en'
            ], // [cite: 125]
            [
                'category' => 'Geography',
                'difficulty' => 'hard',
                'question_text' => 'Which river flows through London?',
                'question_text_my' => 'လန်ဒန်မြို့ကို ဖြတ်သန်းစီးဆင်းသော မြစ်မှာ...',
                'options' => ['Seine', 'Thames', 'Danube', 'Rhine'],
                'options_my' => ['စိန်း', 'သိမ်း', 'ဒန်ညူ', 'ရိုင်း'],
                'correct_answer' => 'Thames',
                'language' => 'en'
            ], // [cite: 132]
            [
                'category' => 'Geography',
                'difficulty' => 'hard',
                'question_text' => 'What is the smallest country in the world?',
                'question_text_my' => 'ကမ္ဘာပေါ်တွင် အသေးဆုံးနိုင်ငံမှာ...',
                'options' => ['Monaco', 'Vatican City', 'Malta', 'San Marino'],
                'options_my' => ['မိုနာကို', 'ဗာတီကန်စီးတီး', 'မော်လ်တာ', 'ဆန်မာရီနို'],
                'correct_answer' => 'Vatican City',
                'language' => 'en'
            ], // [cite: 137]
            [
                'category' => 'Geography',
                'difficulty' => 'hard',
                'question_text' => 'What is the capital of Canada?',
                'question_text_my' => 'ကနေဒါနိုင်ငံ၏ မြို့တော်မှာ...',
                'options' => ['Toronto', 'Vancouver', 'Montreal', 'Ottawa'],
                'options_my' => ['တိုရွန်တို', 'ဗန်ကူးဗား', 'မွန်ထရီရယ်', 'အော့တဝါ'],
                'correct_answer' => 'Ottawa',
                'language' => 'en'
            ], // [cite: 143]
            [
                'category' => 'Geography',
                'difficulty' => 'hard',
                'question_text' => 'What is the capital of Switzerland?',
                'question_text_my' => 'ဆွစ်ဇာလန်နိုင်ငံ၏ မြို့တော်မှာ...',
                'options' => ['Zurich', 'Geneva', 'Bern', 'Basel'],
                'options_my' => ['ဇူးရစ်', 'ဂျနီဗာ', 'ဘန်း', 'ဘေဆယ်'],
                'correct_answer' => 'Bern',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'hard',
                'question_text' => 'Which strait separates Europe and Africa?',
                'question_text_my' => 'ဥရောပနှင့် အာဖရိကကို ပိုင်းခြားထားသော ရေလက်ကြားမှာ...',
                'options' => ['Bering Strait', 'Strait of Gibraltar', 'Strait of Hormuz', 'Malacca Strait'],
                'options_my' => ['ဘบริန်း ရေလက်ကြား', 'ဂျီဘရော်လ်တာ ရေလက်ကြား', 'ဟော်မုဇ် ရေလက်ကြား', 'မလက္ကာ ရေလက်ကြား'],
                'correct_answer' => 'Strait of Gibraltar',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'hard',
                'question_text' => 'What is the capital of New Zealand?',
                'question_text_my' => 'နယူးဇီလန်နိုင်ငံ၏ မြို့တော်မှာ...',
                'options' => ['Auckland', 'Wellington', 'Christchurch', 'Hamilton'],
                'options_my' => ['အော့ကလန်', 'ဝယ်လင်တန်', 'ခရိုက်ချတ်', 'ဟမ်မီလ်တန်'],
                'correct_answer' => 'Wellington',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'hard',
                'question_text' => 'Where is the Atacama Desert located?',
                'question_text_my' => 'အတားကီးမား သဲကန္တာရ တည်ရှိသော နိုင်ငံမှာ...',
                'options' => ['Chile', 'Mexico', 'Australia', 'Egypt'],
                'options_my' => ['ချီလီ', 'မက္ကဆီကို', 'သြစတြေးလျ', 'အီဂျစ်'],
                'correct_answer' => 'Chile',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'hard',
                'question_text' => 'What is the lowest point on Earth\'s surface?',
                'question_text_my' => 'ကမ္ဘာ့မြေမျက်နှာပြင်၏ အနိမ့်ဆုံးနေရာမှာ...',
                'options' => ['Death Valley', 'Dead Sea', 'Caspian Sea', 'Lake Assal'],
                'options_my' => ['Death Valley', 'ပင်လယ်သေ', 'ကက်စပီယန်ပင်လယ်', 'Lake Assal'],
                'correct_answer' => 'Dead Sea',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'hard',
                'question_text' => 'What is the capital of Poland?',
                'question_text_my' => 'ပိုလန်နိုင်ငံ၏ မြို့တော်မှာ...',
                'options' => ['Krakow', 'Warsaw', 'Gdansk', 'Poznan'],
                'options_my' => ['ကရာကို', 'ဝါဆော', 'ဂဒန့်', 'ပိုဇနန်'],
                'correct_answer' => 'Warsaw',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'hard',
                'question_text' => 'Which river flows into the Black Sea?',
                'question_text_my' => 'ပင်လယ်နက်ထဲသို့ စီးဝင်သော မြစ်မှာ...',
                'options' => ['Rhine', 'Seine', 'Danube', 'Volga'],
                'options_my' => ['ရိုင်း', 'စိန်း', 'ဒန်ညူ', 'ဗော်ဂါ'],
                'correct_answer' => 'Danube',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'hard',
                'question_text' => 'What is the capital of Iraq?',
                'question_text_my' => 'အီရတ်နိုင်ငံ၏ မြို့တော်မှာ...',
                'options' => ['Tehran', 'Baghdad', 'Riyadh', 'Kuwait City'],
                'options_my' => ['တီဟီရန်', 'ဘဂ္ဂဒက်', 'ရီယာ့ဒ်', 'ကူဝိတ်စီးတီး'],
                'correct_answer' => 'Baghdad',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'hard',
                'question_text' => 'The Bering Strait separates Asia from...',
                'question_text_my' => 'ဘบริန်းရေလက်ကြားသည် အာရှနှင့် ... ကို ပိုင်းခြားထားသည်။',
                'options' => ['Europe', 'Africa', 'North America', 'Australia'],
                'options_my' => ['ဥရောပ', 'အာဖရိက', 'မြောက်အမေရိက', 'သြစတြေးလျ'],
                'correct_answer' => 'North America',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'hard',
                'question_text' => 'What is the capital of Morocco?',
                'question_text_my' => 'မော်ရိုကိုနိုင်ငံ၏ မြို့တော်မှာ...',
                'options' => ['Casablanca', 'Marrakesh', 'Rabat', 'Fes'],
                'options_my' => ['ကာဆာဘလန်ကာ', 'မာရကေ့', 'ရာဘတ်', 'ဖက်စ်'],
                'correct_answer' => 'Rabat',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'hard',
                'question_text' => 'Lake Victoria is located in which continent?',
                'question_text_my' => 'ဗစ်တိုးရီးယားရေကန် တည်ရှိသော တိုက်မှာ...',
                'options' => ['South America', 'Africa', 'Asia', 'Europe'],
                'options_my' => ['တောင်အမေရိက', 'အာဖရိက', 'အာရှ', 'ဥရောပ'],
                'correct_answer' => 'Africa',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'hard',
                'question_text' => 'What is the capital of Finland?',
                'question_text_my' => 'ဖင်လန်နိုင်ငံ၏ မြို့တော်မှာ...',
                'options' => ['Oslo', 'Stockholm', 'Helsinki', 'Copenhagen'],
                'options_my' => ['အော်စလို', 'စတော့ဟုမ်း', 'ဟယ်လ်စင်ကီ', 'ကိုပင်ဟေဂင်'],
                'correct_answer' => 'Helsinki',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'hard',
                'question_text' => 'Which is the longest river in Europe?',
                'question_text_my' => 'ဥရောပတွင် အရှည်ဆုံးမြစ်မှာ...',
                'options' => ['Danube', 'Rhine', 'Volga', 'Seine'],
                'options_my' => ['ဒန်ညူ', 'ရိုင်း', 'ဗော်ဂါ', 'စိန်း'],
                'correct_answer' => 'Volga',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'hard',
                'question_text' => 'What is the capital of Kenya?',
                'question_text_my' => 'ကင်ညာနိုင်ငံ၏ မြို့တော်မှာ...',
                'options' => ['Mombasa', 'Nairobi', 'Kisumu', 'Nakuru'],
                'options_my' => ['မွမ်ဘာဆာ', 'နိုင်ရိုဘီ', 'ကီဆူမူ', 'နာကူရူ'],
                'correct_answer' => 'Nairobi',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'hard',
                'question_text' => 'Mount K2 is located on the border of China and...',
                'question_text_my' => 'K2 တောင်သည် တရုတ်နှင့် ... နယ်စပ်တွင်ရှိသည်။',
                'options' => ['India', 'Nepal', 'Pakistan', 'Bhutan'],
                'options_my' => ['အိန္ဒိယ', 'နီပေါ', 'ပါကစ္စတန်', 'ဘူတန်'],
                'correct_answer' => 'Pakistan',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'hard',
                'question_text' => 'What is the capital of Bangladesh?',
                'question_text_my' => 'ဘင်္ဂလားဒေ့ရှ်နိုင်ငံ၏ မြို့တော်မှာ...',
                'options' => ['Dhaka', 'Chittagong', 'Khulna', 'Sylhet'],
                'options_my' => ['ဒါကာ', 'จิตတကောင်း', 'ခူလ်နာ', 'ဆေးလ်ဟက်'],
                'correct_answer' => 'Dhaka',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'hard',
                'question_text' => 'Which country is also known as Holland?',
                'question_text_my' => 'ဟော်လန်ဟု လူသိများသော နိုင်ငံမှာ...',
                'options' => ['Belgium', 'Germany', 'Netherlands', 'Denmark'],
                'options_my' => ['ဘယ်လ်ဂျီယမ်', 'ဂျာမနီ', 'နယ်သာလန်', 'ဒိန်းမတ်'],
                'correct_answer' => 'Netherlands',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'hard',
                'question_text' => 'What is the capital of Nepal?',
                'question_text_my' => 'နီပေါနိုင်ငံ၏ မြို့တော်မှာ...',
                'options' => ['Kathmandu', 'Pokhara', 'Lalitpur', 'Biratnagar'],
                'options_my' => ['ခတ္တမန္ဒူ', 'ပိုခါရာ', 'လာလစ်ပူ', 'ဘီရတ်နဂါး'],
                'correct_answer' => 'Kathmandu',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'hard',
                'question_text' => 'The Gobi Desert is primarily in China and...',
                'question_text_my' => 'ဂိုဘီသဲကန္တာရသည် တရုတ်နှင့် ... တွင် တည်ရှိသည်။',
                'options' => ['Russia', 'India', 'Mongolia', 'Kazakhstan'],
                'options_my' => ['ရုရှား', 'အိန္ဒိယ', 'မွန်ဂိုလီးယား', 'ကာဇက်စတန်'],
                'correct_answer' => 'Mongolia',
                'language' => 'en'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'hard',
                'question_text' => 'What is the capital of Iran?',
                'question_text_my' => 'အီရန်နိုင်ငံ၏ မြို့တော်မှာ...',
                'options' => ['Baghdad', 'Tehran', 'Kabul', 'Damascus'],
                'options_my' => ['ဘဂ္ဂဒက်', 'တီဟီရန်', 'ကာဘူးလ်', 'ဒမတ်စကက်'],
                'correct_answer' => 'Tehran',
                'language' => 'en'
            ],
        ];

        foreach ($questions as $q) {
            Question::create($q);
        }
    }
}
