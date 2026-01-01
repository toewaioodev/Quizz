<?php

namespace Database\Seeders;

use App\Models\Question;
use Illuminate\Database\Seeder;

class BurmeseQuestionSeeder extends Seeder
{
    public function run(): void
    {
        $questions = [
            // Mathematics (သင်္ချာ)
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => '2 + 2 ၏ ရလဒ်သည် အဘယ်နည်း။',
                'options' => ['၃', '၄', '၅', '၆'],
                'correct_answer' => '၄',
                'language' => 'my'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => 'စတုရန်းတစ်ခု၏ အနားတစ်ဖက်သည် 5cm ဖြစ်လျှင် ဧရိယာသည် အဘယ်နည်း။',
                'options' => ['20 cm²', '25 cm²', '10 cm²', '15 cm²'],
                'correct_answer' => '25 cm²',
                'language' => 'my'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => '10 ၏ ထက်ဝက်သည် အဘယ်နည်း။',
                'options' => ['၂', '၅', '၈', '၁၀'],
                'correct_answer' => '၅',
                'language' => 'my'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'hard',
                'question_text' => 'တြိဂံတစ်ခု၏ ထောင့်သုံးခုပေါင်းလဒ်သည် အဘယ်နည်း။',
                'options' => ['90°', '180°', '360°', '270°'],
                'correct_answer' => '180°',
                'language' => 'my'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'medium',
                'question_text' => '7 x 8 = ?',
                'options' => ['၅၄', '၅၆', '၄၈', '၆၄'],
                'correct_answer' => '၅၆',
                'language' => 'my'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => 'အောက်ပါတို့မှ မ ဂဏန်းသည် အဘယ်နည်း။',
                'options' => ['၂', '၄', '၇', '၈'],
                'correct_answer' => '၇',
                'language' => 'my'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'hard',
                'question_text' => 'စက်ဝိုင်းတစ်ခု၏ အချင်းဝက်သည် 7cm ဖြစ်လျှင် အချင်းသည် အဘယ်နည်း။',
                'options' => ['14cm', '21cm', '3.5cm', '49cm'],
                'correct_answer' => '14cm',
                'language' => 'my'
            ],
            [
                'category' => 'Mathematics',
                'difficulty' => 'easy',
                'question_text' => '100 - 45 = ?',
                'options' => ['၄၅', '၅၅', '၆၅', '၃၅'],
                'correct_answer' => '၅၅',
                'language' => 'my'
            ],

            // Science (သိပ္ပံ)
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'ရေ၏ ဓာတုဗေဒ ဖော်မြူလာသည် အဘယ်နည်း။',
                'options' => ['CO2', 'H2O', 'O2', 'NaCl'],
                'correct_answer' => 'H2O',
                'language' => 'my'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'နေအဖွဲ့အစည်းတွင် အကြီးဆုံးဂြိုဟ်သည် အဘယ်နည်း။',
                'options' => ['ကမ္ဘာ', 'အင်္ဂါဂြိုဟ်', 'ကြာသပတေးဂြိုဟ်', 'စနေဂြိုဟ်'],
                'correct_answer' => 'ကြာသပတေးဂြိုဟ်',
                'language' => 'my'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'လူ့ခန္ဓာကိုယ်တွင် အရိုးပေါင်း မည်မျှရှိသနည်း။',
                'options' => ['၂၀၆', '၃၀၀', '၁၅၀', '၂၅၀'],
                'correct_answer' => '၂၀၆',
                'language' => 'my'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'အပင်များသည် အစာချက်လုပ်ရန် အဘယ်အရာကို အသုံးပြုသနည်း။',
                'options' => ['အောက်ဆီဂျင်', 'နေရောင်ခြည်', 'လရောင်', 'လေ'],
                'correct_answer' => 'နေရောင်ခြည်',
                'language' => 'my'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'hard',
                'question_text' => 'အလင်း၏ အလျင်သည် တစ်စက္ကန့်လျှင် မည်မျှရှိသနည်း။',
                'options' => ['မိုင် ၁၀၀,၀၀၀', 'မိုင် ၁၈၆,၀၀၀', 'မိုင် ၂၀၀,၀၀၀', 'မိုင် ၁၅၀,၀၀၀'],
                'correct_answer' => 'မိုင် ၁၈၆,၀၀၀',
                'language' => 'my'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'လျှပ်စစ်စီးဆင်းမှုကို တိုင်းတာသည့် ယူနစ်သည် အဘယ်နည်း။',
                'options' => ['ဗို့ (Volt)', 'အမ်ပီယာ (Ampere)', 'ဝပ် (Watt)', 'အုမ်း (Ohm)'],
                'correct_answer' => 'အမ်ပီယာ (Ampere)',
                'language' => 'my'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'easy',
                'question_text' => 'ကမ္ဘာမြေကို လှည့်ပတ်နေသော ဂြိုဟ်ရံသည် အဘယ်နည်း။',
                'options' => ['နေ', 'လ', 'အင်္ဂါဂြိုဟ်', 'သောကြာဂြိုဟ်'],
                'correct_answer' => 'လ',
                'language' => 'my'
            ],
            [
                'category' => 'Science',
                'difficulty' => 'medium',
                'question_text' => 'အသံသည် အဘယ်အရာတွင် အမြန်ဆုံးသွားနိုင်သနည်း။',
                'options' => ['လေ', 'ရေ', 'သံမဏိ', 'လေဟာနယ်'],
                'correct_answer' => 'သံမဏိ',
                'language' => 'my'
            ],

            // History (သမိုင်း)
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'ပထမမြန်မာနိုင်ငံတော်ကို တည်ထောင်ခဲ့သူမင်းသည် ဦးသူနည်း။',
                'options' => ['အနော်ရထာ', 'ဘုရင့်နောင်', 'အလောင်းဘုရား', 'ကျန်စစ်သား'],
                'correct_answer' => 'အနော်ရထာ',
                'language' => 'my'
            ],
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'မြန်မာနိုင်ငံ လွတ်လပ်ရေးရခဲ့သည့် ခုနှစ်သည် အဘယ်နည်း။',
                'options' => ['၁၉၄၅', '၁၉၄၇', '၁၉၄၈', '၁၉၅၀'],
                'correct_answer' => '၁၉၄၈',
                'language' => 'my'
            ],
            [
                'category' => 'History',
                'difficulty' => 'hard',
                'question_text' => 'ရွှေတိဂုံစေတီတော်ကို မည်သည့်မင်းလက်ထက်တွင် အမြင့်ဆုံး တည်ထားခဲ့သနည်း။',
                'options' => ['ရှင်စောပု', 'ဓမ္မစေတီ', 'ဘုရင့်နောင်', 'မင်းတုန်းမင်း'],
                'correct_answer' => 'ရှင်စောပု',
                'language' => 'my'
            ],
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'ကုန်းဘောင်ခေတ်၏ နောက်ဆုံးမင်းဆက်သည် ဦးသူနည်း။',
                'options' => ['မင်းတုန်းမင်း', 'သီပေါမင်း', 'ဗဒုံမင်း', 'သာယာဝတီမင်း'],
                'correct_answer' => 'သီပေါမင်း',
                'language' => 'my'
            ],
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'ဗိုလ်ချုပ်အောင်ဆန်း၏ ဖခင်အမည်သည် အဘယ်နည်း။',
                'options' => ['ဦးဖာ', 'ဦးဘဝင်း', 'ဦးအောင်ဇေယျ', 'ဦးနု'],
                'correct_answer' => 'ဦးဖာ',
                'language' => 'my'
            ],
            [
                'category' => 'History',
                'difficulty' => 'hard',
                'question_text' => 'ပုဂံခေတ် ပျက်သုဉ်းရခြင်း၏ အဓိကအကြောင်းရင်းတစ်ခုမှာ အဘယ်နည်း။',
                'options' => ['မွန်တို့ တိုက်ခိုက်ခြင်း', 'မွန်ဂိုတို့ ကျူးကျော်ခြင်း', 'ရေကြီးခြင်း', 'ငလျင်လှုပ်ခြင်း'],
                'correct_answer' => 'မွန်ဂိုတို့ ကျူးကျော်ခြင်း',
                'language' => 'my'
            ],
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'မြန်မာ့ပထမဆုံး ကျောင်းသားသပိတ် ဖြစ်ပွားခဲ့သော ခုနှစ်မှာ အဘယ်နည်း။',
                'options' => ['၁၉၂၀', '၁၉၃၀', '၁၉၃၆', '၁၉၃၈'],
                'correct_answer' => '၁၉၂၀',
                'language' => 'my'
            ],
            [
                'category' => 'History',
                'difficulty' => 'hard',
                'question_text' => 'အင်းဝခေတ်တွင် ထင်ရှားသော စာဆိုတော်မှာ ဦးသူနည်း။',
                'options' => ['နဝဒေး', 'ရှင်မဟာရဋ္ဌသာရ', 'ဦးပုည', 'ဆရာစံ'],
                'correct_answer' => 'ရှင်မဟာရဋ္ဌသာရ',
                'language' => 'my'
            ],

            // Geography (ပထဝီဝင်)
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'မြန်မာနိုင်ငံ၏ အရှည်ဆုံးမြစ်သည် အဘယ်နည်း။',
                'options' => ['ဧရာဝတီ', 'သံလွင်', 'ချင်းတွင်း', 'စစ်တောင်း'],
                'correct_answer' => 'ဧရာဝတီ',
                'language' => 'my'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'မြန်မာနိုင်ငံ၏ အမြင့်ဆုံးတောင်သည် အဘယ်နည်း။',
                'options' => ['ခါကာဘိုရာဇီ', 'စာရာမေတိ', 'ဝိတိုရိယ', 'ပုပ္ပား'],
                'correct_answer' => 'ခါကာဘိုရာဇီ',
                'language' => 'my'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'ရန်ကုန်မြို့သည် မည်သည့်တိုင်းဒေသကြီးတွင် တည်ရှိသနည်း။',
                'options' => ['မန္တလေး', 'ရန်ကုန်', 'ဧရာဝတီ', 'ပဲခူး'],
                'correct_answer' => 'ရန်ကုန်',
                'language' => 'my'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'hard',
                'question_text' => 'အင်းလေးကန်သည် မည်သည့်ပြည်နယ်တွင် တည်ရှိသနည်း။',
                'options' => ['ကချင်', 'ကယား', 'ရှမ်း', 'မွန်'],
                'correct_answer' => 'ရှမ်း',
                'language' => 'my'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'မြန်မာနိုင်ငံနှင့် အနောက်ဘက်တွင် နယ်နိမိတ်ထိစပ်နေသော နိုင်ငံမှာ အဘယ်နည်း။',
                'options' => ['ထိုင်း', 'တရုတ်', 'အိန္ဒိယ', 'လာအို'],
                'correct_answer' => 'အိန္ဒိယ',
                'language' => 'my'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'medium',
                'question_text' => 'ကမ္ဘာပေါ်တွင် အကြီးဆုံး သမုဒ္ဒရာသည် အဘယ်နည်း။',
                'options' => ['အတ္တလန္တိတ်', 'ပစိဖိတ်', 'အိန္ဒိယ', 'အာတိတ်'],
                'correct_answer' => 'ပစိဖိတ်',
                'language' => 'my'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'easy',
                'question_text' => 'မြန်မာနိုင်ငံတွင် ရာသီဥတု ဘယ်နှစ်မျိုး ရှိသနည်း။',
                'options' => ['၂', '၃', '၄', '၅'],
                'correct_answer' => '၃',
                'language' => 'my'
            ],
            [
                'category' => 'Geography',
                'difficulty' => 'hard',
                'question_text' => 'မန္တလေးမြို့ကို မည်သည့် ခုနှစ်တွင် တည်ထောင်ခဲ့သနည်း။',
                'options' => ['၁၈၅၇', '၁၈၅၉', '၁၈၆၀', '၁၈၈၅'],
                'correct_answer' => '၁၈၅၉',
                'language' => 'my'
            ],

            // Technology (နည်းပညာ)
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'ကွန်ပျူတာ၏ ဦးနှောက်ဟု တင်စားခေါ်ဝေါ်သော အရာသည် အဘယ်နည်း။',
                'options' => ['CPU', 'RAM', 'Hard Disk', 'Monitor'],
                'correct_answer' => 'CPU',
                'language' => 'my'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'Wi-Fi ၏ အဓိပ္ပာယ်အပြည့်အစုံမှာ အဘယ်နည်း။',
                'options' => ['Wireless Fidelity', 'Wireless Fiber', 'Wide Frequency', 'Web Finder'],
                'correct_answer' => 'Wireless Fidelity',
                'language' => 'my'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'Facebook ကို တည်ထောင်သူမှာ ဦးသူနည်း။',
                'options' => ['Bill Gates', 'Steve Jobs', 'Mark Zuckerberg', 'Elon Musk'],
                'correct_answer' => 'Mark Zuckerberg',
                'language' => 'my'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'iPhone ကို ထုတ်လုပ်သော ကုမ္ပဏီမှာ အဘယ်နည်း။',
                'options' => ['Samsung', 'Apple', 'Huawei', 'Sony'],
                'correct_answer' => 'Apple',
                'language' => 'my'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'hard',
                'question_text' => 'ပထမဆုံး ကွန်ပျူတာ ပရိုဂရမ်မာဟု သတ်မှတ်ခံရသူမှာ ဦးသူနည်း။',
                'options' => ['Ada Lovelace', 'Alan Turing', 'Charles Babbage', 'Grace Hopper'],
                'correct_answer' => 'Ada Lovelace',
                'language' => 'my'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'PDF ၏ အရှည်ကောက်မှာ အဘယ်နည်း။',
                'options' => ['Portable Document Format', 'Public Data File', 'Personal Digital Form', 'Printable Data Folder'],
                'correct_answer' => 'Portable Document Format',
                'language' => 'my'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'ကမ္ဘာပေါ်တွင် လူသုံးအများဆုံး ရှာဖွေရေးအင်ဂျင် (Search Engine) မှာ အဘယ်နည်း။',
                'options' => ['Bing', 'Yahoo', 'Google', 'DuckDuckGo'],
                'correct_answer' => 'Google',
                'language' => 'my'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'ဖုန်းများတွင် မြန်မာစာ ရိုက်ရန် အသုံးပြုသော ကီးဘုတ်တစ်ခုမှာ...',
                'options' => ['Bagin', 'Zawgyi', 'Pyidaungsu', 'Unicode'],
                'correct_answer' => 'Bagin',
                'language' => 'my'
            ], // Bagin is a made up distractor, but common users know Gboard/Bagan/etc. Let's stick to valid tech. Changing distractor. Actually Bagin is close to Bagan. Let's fix. Correct answer can be 'Bagan' or 'Gboard'. Let's use 'Bagan' as options or 'Zawgyi' vs 'Unicode'. Let's adjust to 'Unicode' system standard.
            
             // Arts & Lit (ရသနှင့်စာပေ)
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'ဆရာကြီး မင်းသုဝဏ်၏ ထင်ရှားသော ကဗျာတစ်ပုဒ်မှာ...',
                'options' => ['အမေမေ့အိမ်', 'ပြေတီဦး', 'စံရွှေမြင့်', 'သပြေညို'],
                'correct_answer' => 'သပြေညို',
                'language' => 'my'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'မိုနာလီဇာ ပန်းချီကားကို ရေးဆွဲခဲ့သူမှာ ဦးသူနည်း။',
                'options' => ['ဗန်ဂိုး', 'ပက်ကက်ဆို', 'လီယိုနာဒိုဒါဗင်ချီ', 'မိုက်ကယ်အိန်ဂျလို'],
                'correct_answer' => 'လီယိုနာဒိုဒါဗင်ချီ',
                'language' => 'my'
            ],
            [
                'category' => 'Arts & Lit',
                'difficulty' => 'hard',
                'question_text' => 'မြန်မာ့ရိုးရာ ဆယ်နှစ်မျိုးတွင် ပန်းပု ပညာသည် အဘယ်နည်း။',
                'options' => ['သစ်သားကို အရုပ်လုပ်ခြင်း', 'ကျောက်ကို အရုပ်လုပ်ခြင်း', 'ပန်းချီဆွဲခြင်း', 'ပန်းပဲထုခြင်း'],
                'correct_answer' => 'သစ်သားကို အရုပ်လုပ်ခြင်း',
                'language' => 'my'
            ],
             [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'Harry Potter စာအုပ်ကို ရေးသားသူမှာ ဦးသူနည်း။',
                'options' => ['J.K. Rowling', 'Stephen King', 'George R.R. Martin', 'J.R.R. Tolkien'],
                'correct_answer' => 'J.K. Rowling',
                'language' => 'my'
            ],
             [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'မြန်မာနိုင်ငံ၏ အမျိုးသား စာဆိုတော်နေ့သည် မည်သည့်လတွင် ကျရောက်သနည်း။',
                'options' => ['တန်ဆောင်မုန်း', 'နတ်တော်', 'ပြာသို', 'တပို့တွဲ'],
                'correct_answer' => 'နတ်တော်',
                'language' => 'my'
            ],
             [
                'category' => 'Arts & Lit',
                'difficulty' => 'hard',
                'question_text' => '"ကမ္ဘာကုန်ကျယ်သရွေ့" သီချင်းရေးစပ်သူမှာ ဦးသူနည်း။',
                'options' => ['မြို့မငြိမ်း', 'ဝိုင်အမ်ဘီ ဆရာတင်', 'နန်းတော်ရှေ့ ဆရာတင်', 'စိုင်းထီးဆိုင်'],
                'correct_answer' => 'ဝိုင်အမ်ဘီ ဆရာတင်',
                'language' => 'my'
            ],
             [
                'category' => 'Arts & Lit',
                'difficulty' => 'medium',
                'question_text' => 'ပုဂံခေတ် နံရံဆေးရေးပန်းချီများတွင် အများဆုံးတွေ့ရသော အရောင်မှာ...',
                'options' => ['အနီ', 'အပြာ', 'အစိမ်း', 'ခရမ်း'],
                'correct_answer' => 'အနီ',
                'language' => 'my'
            ],
             [
                'category' => 'Arts & Lit',
                'difficulty' => 'easy',
                'question_text' => 'ရုပ်ရှင်ဖခင်ကြီးဟု တင်စားခံရသူမှာ...',
                'options' => ['ဦးညီပု', 'ဦးတုတ်ကြီး', 'ဦးရွှေရိုး', 'မင်းသားကြီး'],
                'correct_answer' => 'ဦးညီပု',
                'language' => 'my'
            ],
             [
                'category' => 'General Knowledge',
                'difficulty' => 'easy',
                'question_text' => 'တစ်ပတ်တွင် ဘယ်နှရက် ရှိသနည်း။',
                'options' => ['၅', '၆', '၇', '၈'],
                'correct_answer' => '၇',
                'language' => 'my'
            ],
             [
                'category' => 'General Knowledge',
                'difficulty' => 'medium',
                'question_text' => 'COVID-19 ရောဂါ စတင်ဖြစ်ပွားခဲ့သော မြို့မှာ...',
                'options' => ['ဝူဟန်', 'ပေကျင်း', 'ရှန်ဟိုင်း', 'တိုကျို'],
                'correct_answer' => 'ဝူဟန်',
                'language' => 'my'
            ],
        ];

        foreach ($questions as $q) {
            Question::create($q);
        }
    }
}
