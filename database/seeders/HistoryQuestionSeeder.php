<?php

namespace Database\Seeders;

use App\Models\Question;
use Illuminate\Database\Seeder;

class HistoryQuestionSeeder extends Seeder
{
    public function run(): void
    {
        $questions = [
            // --- Easy (35 Questions) ---
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'Who was the first President of the USA?',
                'question_text_my' => 'အမေရိကန်၏ ပထမဆုံး သမ္မတမှာ...',
                'options' => ['Lincoln', 'Washington', 'Jefferson', 'Kennedy'],
                'options_my' => ['လင်ကွန်း', 'ဝါရှင်တန်', 'ဂျက်ဖာဆန်', 'ကနေဒီ'],
                'correct_answer' => 'Washington',
                'language' => 'en'
            ], // [cite: 75]
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'Which ancient civilization built the pyramids?',
                'question_text_my' => 'ပိရမစ်များကို တည်ဆောက်ခဲ့သော ရှေးဟောင်းလူမျိုးမှာ...',
                'options' => ['Romans', 'Greeks', 'Egyptians', 'Mayans'],
                'options_my' => ['ရောမ', 'ဂရိ', 'အီဂျစ်', 'မာယာ'],
                'correct_answer' => 'Egyptians',
                'language' => 'en'
            ], // [cite: 83]
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'Who discovered America?',
                'question_text_my' => 'အမေရိကတိုက်ကို ရှာဖွေတွေ့ရှိသူမှာ...',
                'options' => ['Columbus', 'Magellan', 'Cook', 'Vasco da Gama'],
                'options_my' => ['ကိုလံဘတ်စ်', 'မဂျဲလန်', 'ကွတ်', 'ဗက်စကိုဒါဂါးမား'],
                'correct_answer' => 'Columbus',
                'language' => 'en'
            ], // [cite: 90]
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'Who is known as the Father of Indian Independence?',
                'question_text_my' => 'အိန္ဒိယလွတ်လပ်ရေးဖခင်ကြီးဟု လူသိများသူမှာ...',
                'options' => ['Nehru', 'Gandhi', 'Patel', 'Modi'],
                'options_my' => ['နေရူး', 'ဂန္ဒီ', 'ပတေးလ်', 'မိုဒီ'],
                'correct_answer' => 'Gandhi',
                'language' => 'en'
            ], // [cite: 99]
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'Who wrote the Declaration of Independence?',
                'question_text_my' => 'လွတ်လပ်ရေးကြေငြာစာတမ်းကို ရေးသားခဲ့သူမှာ...',
                'options' => ['Washington', 'Jefferson', 'Adams', 'Franklin'],
                'options_my' => ['ဝါရှင်တန်', 'ဂျက်ဖာဆန်', 'အဒမ်', 'ဖရန်ကလင်'],
                'correct_answer' => 'Jefferson',
                'language' => 'en'
            ], // [cite: 104]
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'Which country gave the Statue of Liberty to the USA?',
                'question_text_my' => 'အမေရိကန်ကို လွတ်လပ်ရေးရုပ်တု လက်ဆောင်ပေးသော နိုင်ငံမှာ...',
                'options' => ['UK', 'France', 'Spain', 'Germany'],
                'options_my' => ['ဗြိတိန်', 'ပြင်သစ်', 'စပိန်', 'ဂျာမနီ'],
                'correct_answer' => 'France',
                'language' => 'en'
            ], // [cite: 110]
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'Who was the first man in space?',
                'question_text_my' => 'အာကာသသို့ ပထမဆုံးရောက်ရှိခဲ့သူမှာ...',
                'options' => ['Armstrong', 'Gagarin', 'Glenn', 'Shepard'],
                'options_my' => ['အမ်းစထရောင်း', 'ဂါဂါရင်', 'ဂလန်း', 'ရှက်ပဒ်'],
                'correct_answer' => 'Gagarin',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'Where were the first Olympic Games held?',
                'question_text_my' => 'ပထမဆုံး အိုလံပစ်ပြိုင်ပွဲ ကျင်းပခဲ့သော နိုင်ငံမှာ...',
                'options' => ['Greece', 'Italy', 'Egypt', 'China'],
                'options_my' => ['ဂရိ', 'အီတလီ', 'အီဂျစ်', 'တရုတ်'],
                'correct_answer' => 'Greece',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'Who built the Taj Mahal?',
                'question_text_my' => 'တာဂျ်မဟာကို တည်ဆောက်ခဲ့သူမှာ...',
                'options' => ['Akbar', 'Shah Jahan', 'Jahangir', 'Aurangzeb'],
                'options_my' => ['အက္ကဘာ', 'ရှာဂျာဟန်', 'ဂျဟန်းဂါး', 'အောင်ရန်ဇစ်'],
                'correct_answer' => 'Shah Jahan',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'The Great Wall is located in...',
                'question_text_my' => 'မဟာတံတိုင်းကြီး တည်ရှိသော နိုင်ငံမှာ...',
                'options' => ['Japan', 'India', 'China', 'Mongolia'],
                'options_my' => ['ဂျပန်', 'အိန္ဒိယ', 'တရုတ်', 'မွန်ဂိုလီးယား'],
                'correct_answer' => 'China',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'Who was the first female Prime Minister of the UK?',
                'question_text_my' => 'ယူကေ၏ ပထမဆုံး အမျိုးသမီး ဝန်ကြီးချုပ်မှာ...',
                'options' => ['Thatcher', 'May', 'Truss', 'Merkel'],
                'options_my' => ['သက်ချာ', 'မေ', 'ထရပ်စ်', 'မာကယ်'],
                'correct_answer' => 'Thatcher',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'Which war was fought between North and South USA?',
                'question_text_my' => 'အမေရိကန် မြောက်ပိုင်းနှင့် တောင်ပိုင်း တိုက်ခိုက်ခဲ့သော စစ်ပွဲမှာ...',
                'options' => ['World War I', 'Civil War', 'Vietnam War', 'Cold War'],
                'options_my' => ['ပထမကမ္ဘာစစ်', 'ပြည်တွင်းစစ်', 'ဗီယက်နမ်စစ်ပွဲ', 'စစ်အေးတိုက်ပွဲ'],
                'correct_answer' => 'Civil War',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'The Vikings came from...',
                'question_text_my' => 'ဗိုက်ကင်းလူမျိုးများ လာရောက်ခဲ့သော ဒေသမှာ...',
                'options' => ['Scandinavia', 'Asia', 'Africa', 'America'],
                'options_my' => ['စကင်ဒီနေးဗီးယား', 'အာရှ', 'အာဖရိက', 'အမေရိက'],
                'correct_answer' => 'Scandinavia',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'Who invented the light bulb?',
                'question_text_my' => 'မီးလုံးကို တီထွင်ခဲ့သူမှာ...',
                'options' => ['Tesla', 'Edison', 'Bell', 'Franklin'],
                'options_my' => ['တက်စလာ', 'အက်ဒီဆင်', 'ဘဲလ်', 'ဖရန်ကလင်'],
                'correct_answer' => 'Edison',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'Which country was ruled by Pharaohs?',
                'question_text_my' => 'ဖာရိုဘုရင်များ အုပ်ချုပ်ခဲ့သော နိုင်ငံမှာ...',
                'options' => ['Rome', 'Greece', 'Egypt', 'Persia'],
                'options_my' => ['ရောမ', 'ဂရိ', 'အီဂျစ်', 'ပါရှား'],
                'correct_answer' => 'Egypt',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'Which ship did the Pilgrims sail on?',
                'question_text_my' => 'Pilgrims များ စီးနင်းခဲ့သော သင်္ဘောအမည်မှာ...',
                'options' => ['Titanic', 'Mayflower', 'Santa Maria', 'Beagle'],
                'options_my' => ['တိုင်တန်းနစ်', 'မေဖလားဝါး', 'ဆန်တာမာရီယာ', 'ဘီဂဲလ်'],
                'correct_answer' => 'Mayflower',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'Who was the dictator of Germany during WWII?',
                'question_text_my' => 'ဒုတိယကမ္ဘာစစ်အတွင်း ဂျာမနီအာဏာရှင်မှာ...',
                'options' => ['Hitler', 'Mussolini', 'Stalin', 'Franco'],
                'options_my' => ['ဟစ်တလာ', 'မူဆိုလိုနီ', 'စတာလင်', 'ဖရန်ကို'],
                'correct_answer' => 'Hitler',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'Which empire built the Colosseum?',
                'question_text_my' => 'Colosseum ကို တည်ဆောက်ခဲ့သော အင်ပါယာမှာ...',
                'options' => ['Roman', 'Greek', 'Ottoman', 'British'],
                'options_my' => ['ရောမ', 'ဂရိ', 'အော်တိုမန်', 'ဗြိတိသျှ'],
                'correct_answer' => 'Roman',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'Who made the first flight?',
                'question_text_my' => 'ပထမဆုံး လေယာဉ်ပျံသန်းမှုကို ပြုလုပ်ခဲ့သူမှာ...',
                'options' => ['Wright Brothers', 'Da Vinci', 'Lindbergh', 'Earhart'],
                'options_my' => ['ရိုက်ညီနောင်', 'ဒါဗင်ချီ', 'လင်းဘာ့ဂ်', 'အဲဟတ်'],
                'correct_answer' => 'Wright Brothers',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'Which country used to be called Siam?',
                'question_text_my' => 'ယခင်က ဆိုင်ယမ် (Siam) ဟု ခေါ်သော နိုင်ငံမှာ...',
                'options' => ['Vietnam', 'Thailand', 'Laos', 'Cambodia'],
                'options_my' => ['ဗီယက်နမ်', 'ထိုင်း', 'လာအို', 'ကမ္ဘောဒီးယား'],
                'correct_answer' => 'Thailand',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'What was the name of the first atomic bomb dropped?',
                'question_text_my' => 'ပထမဆုံးကြဲချခဲ့သော အနုမြူဗုံးအမည်မှာ...',
                'options' => ['Fat Man', 'Little Boy', 'Tsar Bomba', 'Trinity'],
                'options_my' => ['Fat Man', 'Little Boy', 'Tsar Bomba', 'Trinity'],
                'correct_answer' => 'Little Boy',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'Nelson Mandela was the president of...',
                'question_text_my' => 'နယ်လ်ဆင်မန်ဒဲလားသည် ... နိုင်ငံ၏ သမ္မတဖြစ်သည်။',
                'options' => ['Nigeria', 'Kenya', 'South Africa', 'Ghana'],
                'options_my' => ['နိုင်ဂျီးရီးယား', 'ကင်ညာ', 'တောင်အာဖရိက', 'ဂါနာ'],
                'correct_answer' => 'South Africa',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'Who was the famous Queen of the UK who reigned for 70 years?',
                'question_text_my' => 'နှစ်ပေါင်း ၇၀ ကြာ နန်းစံခဲ့သော ကျော်ကြားသည့် ဗြိတိန်ဘုရင်မကြီးမှာ...',
                'options' => ['Victoria', 'Elizabeth I', 'Elizabeth II', 'Mary'],
                'options_my' => ['ဗစ်တိုးရီးယား', 'အဲလိဇဘက် ၁', 'အဲလိဇဘက် ၂', 'မေရီ'],
                'correct_answer' => 'Elizabeth II',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'The samurai were warriors from...',
                'question_text_my' => 'ဆာမူရိုင်းစစ်သည်များသည် ... နိုင်ငံမှဖြစ်သည်။',
                'options' => ['China', 'Korea', 'Japan', 'Vietnam'],
                'options_my' => ['တရုတ်', 'ကိုရီးယား', 'ဂျပန်', 'ဗီယက်နမ်'],
                'correct_answer' => 'Japan',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'Who invented the telephone?',
                'question_text_my' => 'တယ်လီဖုန်းကို တီထွင်ခဲ့သူမှာ...',
                'options' => ['Edison', 'Bell', 'Tesla', 'Marconi'],
                'options_my' => ['အက်ဒီဆင်', 'ဘဲလ်', 'တက်စလာ', 'မာကိုနီ'],
                'correct_answer' => 'Bell',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'In which country is Stonehenge located?',
                'question_text_my' => 'Stonehenge တည်ရှိသော နိုင်ငံမှာ...',
                'options' => ['Ireland', 'Scotland', 'England', 'Wales'],
                'options_my' => ['အိုင်ယာလန်', 'စကော့တလန်', 'အင်္ဂလန်', 'ဝေးလ်'],
                'correct_answer' => 'England',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'Who was the wife of King Louis XVI?',
                'question_text_my' => 'ဘုရင် လူးဝစ် ၁၆ ၏ မိဖုရားမှာ...',
                'options' => ['Marie Curie', 'Marie Antoinette', 'Joan of Arc', 'Catherine'],
                'options_my' => ['မေရီကျူရီ', 'မေရီအန်တွာနက်', 'ဂျုန်းအော့ဖ်အာ့ခ်', 'ကက်သရင်း'],
                'correct_answer' => 'Marie Antoinette',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'The Industrial Revolution began in...',
                'question_text_my' => 'စက်မှုတော်လှန်ရေး စတင်ခဲ့သော နိုင်ငံမှာ...',
                'options' => ['USA', 'Germany', 'France', 'Britain'],
                'options_my' => ['အမေရိကန်', 'ဂျာမနီ', 'ပြင်သစ်', 'ဗြိတိန်'],
                'correct_answer' => 'Britain',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'Who famously said "I have a dream"?',
                'question_text_my' => '"I have a dream" မိန့်ခွန်းပြောကြားခဲ့သူမှာ...',
                'options' => ['Malcolm X', 'MLK Jr.', 'Obama', 'Mandela'],
                'options_my' => ['Malcolm X', 'MLK Jr.', 'အိုဘားမား', 'မန်ဒဲလား'],
                'correct_answer' => 'MLK Jr.',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'Which city was destroyed by Vesuvius?',
                'question_text_my' => 'Vesuvius မီးတောင်ကြောင့် ပျက်စီးသွားသော မြို့မှာ...',
                'options' => ['Rome', 'Athens', 'Pompeii', 'Sparta'],
                'options_my' => ['ရောမ', 'အေသင်', 'ပွန်ပေ', 'စပါတာ'],
                'correct_answer' => 'Pompeii',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'The Cold War was primarily between USA and...',
                'question_text_my' => 'စစ်အေးတိုက်ပွဲသည် အမေရိကန်နှင့် ... ကြား ဖြစ်ပွားခဲ့သည်။',
                'options' => ['China', 'Germany', 'USSR', 'Japan'],
                'options_my' => ['တရုတ်', 'ဂျာမနီ', 'ဆိုဗီယက်ယူနီယံ', 'ဂျပန်'],
                'correct_answer' => 'USSR',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'Which currency was used in Italy before Euro?',
                'question_text_my' => 'ယူရိုငွေမတိုင်မီ အီတလီတွင် သုံးသော ငွေကြေးမှာ...',
                'options' => ['Franc', 'Mark', 'Lira', 'Peseta'],
                'options_my' => ['ဖရန့်', 'မတ်', 'လိုင်ရာ', 'ပီဆို'],
                'correct_answer' => 'Lira',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'Who conquered the Aztec Empire?',
                'question_text_my' => 'Aztec အင်ပါယာကို သိမ်းပိုက်ခဲ့သူမှာ...',
                'options' => ['Columbus', 'Cortez', 'Pizarro', 'Magellan'],
                'options_my' => ['ကိုလံဘတ်စ်', 'ကောတက်', 'ပီဇာရို', 'မဂျဲလန်'],
                'correct_answer' => 'Cortez',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'The first democratically elected president of Russia was...',
                'question_text_my' => 'ရုရှားနိုင်ငံ၏ ပထမဆုံး ဒီမိုကရေစီနည်းကျ သမ္မတမှာ...',
                'options' => ['Putin', 'Gorbachev', 'Yeltsin', 'Lenin'],
                'options_my' => ['ပူတင်', 'ဂေါ်ဘာချက်', 'ယဲလ်ဆင်', 'လီနင်'],
                'correct_answer' => 'Yeltsin',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'easy',
                'question_text' => 'Who was the king of Rock and Roll?',
                'question_text_my' => 'Rock and Roll ဘုရင်ဟု တင်စားခံရသူမှာ...',
                'options' => ['Elvis Presley', 'Michael Jackson', 'Prince', 'Freddie Mercury'],
                'options_my' => ['အဲလ်ဗစ်ပရက်စလေ', 'မိုက်ကယ်ဂျက်ဆင်', 'ပရင့်စ်', 'ဖရက်ဒီ'],
                'correct_answer' => 'Elvis Presley',
                'language' => 'en'
            ],

            // --- Medium (35 Questions) ---
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'In which year did World War II end?',
                'question_text_my' => 'ဒုတိယကမ္ဘာစစ် မည်သည့်နှစ်တွင် ပြီးဆုံးခဲ့သနည်း။',
                'options' => ['1944', '1945', '1946', '1947'],
                'options_my' => ['၁၉၄၄', '၁၉၄၅', '၁၉၄၆', '၁၉၄၇'],
                'correct_answer' => '1945',
                'language' => 'en'
            ], // [cite: 77]
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'Who founded the first Burmese Empire?',
                'question_text_my' => 'ပထမမြန်မာနိုင်ငံတော်ကို တည်ထောင်ခဲ့သူမင်းသည် ဦးသူနည်း။',
                'options' => ['Anawrahta', 'Bayinnaung', 'Alaungpaya', 'Kyansittha'],
                'options_my' => ['အနော်ရထာ', 'ဘုရင့်နောင်', 'အလောင်းဘုရား', 'ကျန်စစ်သား'],
                'correct_answer' => 'Anawrahta',
                'language' => 'en'
            ], // [cite: 79]
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'Who painted the Mona Lisa?',
                'question_text_my' => 'မိုနာလီဇာ ပန်းချီကားကို ရေးဆွဲခဲ့သူမှာ...',
                'options' => ['Van Gogh', 'Da Vinci', 'Picasso', 'Michelangelo'],
                'options_my' => ['ဗန်ဂိုး', 'ဒါဗင်ချီ', 'ပက်ကက်ဆို', 'မိုက်ကယ်အိန်ဂျလို'],
                'correct_answer' => 'Da Vinci',
                'language' => 'en'
            ], // [cite: 84]
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'The Titanic sank in which year?',
                'question_text_my' => 'တိုင်တန်းနစ်သင်္ဘော မည်သည့်နှစ်တွင် နှစ်မြုပ်ခဲ့သနည်း။',
                'options' => ['1910', '1912', '1914', '1916'],
                'options_my' => ['၁၉၁၀', '၁၉၁၂', '၁၉၁၄', '၁၉၁၆'],
                'correct_answer' => '1912',
                'language' => 'en'
            ], // [cite: 88]
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'Who was the first man on the moon?',
                'question_text_my' => 'လပေါ်ပထမဆုံးရောက်ရှိခဲ့သူမှာ...',
                'options' => ['Armstrong', 'Aldrin', 'Gagarin', 'Collins'],
                'options_my' => ['အမ်းစထရောင်း', 'အယ်ဒရင်', 'ဂါဂါရင်', 'ကောလင်း'],
                'correct_answer' => 'Armstrong',
                'language' => 'en'
            ], // [cite: 93]
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'The Berlin Wall fell in...',
                'question_text_my' => 'ဘာလင်တံတိုင်းကြီး ပြိုကျခဲ့သည့်နှစ်မှာ...',
                'options' => ['1987', '1989', '1991', '1993'],
                'options_my' => ['၁၉၈၇', '၁၉၈၉', '၁၉၉၁', '၁၉၉၃'],
                'correct_answer' => '1989',
                'language' => 'en'
            ], // [cite: 97]
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'The Great Fire of London happened in...',
                'question_text_my' => 'လန်ဒန်မီးလောင်ကြီး ဖြစ်ပွားခဲ့သော ခုနှစ်မှာ...',
                'options' => ['1666', '1766', '1866', '1566'],
                'options_my' => ['၁၆၆၆', '၁၇၆၆', '၁၈၆၆', '၁၅၆၆'],
                'correct_answer' => '1666',
                'language' => 'en'
            ], // [cite: 102]
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'Who was the Queen of Egypt?',
                'question_text_my' => 'အီဂျစ်ဘုရင်မကြီးမှာ...',
                'options' => ['Cleopatra', 'Nefertiti', 'Hatshepsut', 'All of them'],
                'options_my' => ['ကလီယိုပါထရာ', 'နဖာတီတီ', 'ဟက်ရှပ်ဆွတ်', 'အားလုံးမှန်'],
                'correct_answer' => 'All of them',
                'language' => 'en'
            ], // [cite: 108]
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'Which king broke away from the Catholic Church?',
                'question_text_my' => 'ကက်သလစ်အသင်းတော်မှ ခွဲထွက်ခဲ့သော အင်္ဂလိပ်ဘုရင်မှာ...',
                'options' => ['Henry VIII', 'Louis XIV', 'Charles I', 'James I'],
                'options_my' => ['ဟင်နရီ ၈', 'လူးဝစ် ၁၄', 'ချားလ် ၁', 'ဂျိမ်း ၁'],
                'correct_answer' => 'Henry VIII',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'The Magna Carta was signed in...',
                'question_text_my' => 'Magna Carta စာချုပ် လက်မှတ်ရေးထိုးခဲ့သောနှစ်မှာ...',
                'options' => ['1066', '1215', '1492', '1776'],
                'options_my' => ['၁၀၆၆', '၁၂၁၅', '၁၄၉၂', '၁၇၇၆'],
                'correct_answer' => '1215',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'Who was the Sun King?',
                'question_text_my' => 'နေမင်းဘုရင် (Sun King) ဟု လူသိများသူမှာ...',
                'options' => ['Louis XIV', 'Henry VIII', 'Philip II', 'Peter the Great'],
                'options_my' => ['လူးဝစ် ၁၄', 'ဟင်နရီ ၈', 'ဖိလစ် ၂', 'ပီတာ'],
                'correct_answer' => 'Louis XIV',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'In which year did World War I start?',
                'question_text_my' => 'ပထမကမ္ဘာစစ် စတင်ခဲ့သောနှစ်မှာ...',
                'options' => ['1912', '1914', '1916', '1918'],
                'options_my' => ['၁၉၁၂', '၁၉၁၄', '၁၉၁၆', '၁၉၁၈'],
                'correct_answer' => '1914',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'Who discovered Penicillin?',
                'question_text_my' => 'ပင်နီဆီလင်ကို တွေ့ရှိခဲ့သူမှာ...',
                'options' => ['Fleming', 'Pasteur', 'Curie', 'Salk'],
                'options_my' => ['ဖလန်းမင်း', 'ပါစတာ', 'ကျူရီ', 'ဆော့ခ်'],
                'correct_answer' => 'Fleming',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'The Joan of Arc fought for which country?',
                'question_text_my' => 'Joan of Arc သည် မည်သည့်နိုင်ငံအတွက် တိုက်ပွဲဝင်ခဲ့သနည်း။',
                'options' => ['England', 'France', 'Spain', 'Germany'],
                'options_my' => ['အင်္ဂလန်', 'ပြင်သစ်', 'စပိန်', 'ဂျာမနီ'],
                'correct_answer' => 'France',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'Which year did man land on the moon?',
                'question_text_my' => 'လပေါ်သို့ လူရောက်ရှိခဲ့သော ခုနှစ်မှာ...',
                'options' => ['1965', '1969', '1972', '1975'],
                'options_my' => ['၁၉၆၅', '၁၉၆၉', '၁၉၇၂', '၁၉၇၅'],
                'correct_answer' => '1969',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'Who was the first Emperor of Rome?',
                'question_text_my' => 'ရောမ၏ ပထမဆုံး ဧကရာဇ်မှာ...',
                'options' => ['Julius Caesar', 'Augustus', 'Nero', 'Caligula'],
                'options_my' => ['ဂျူးလီးယပ်ဆီဇာ', 'ဩဂတ်စတပ်', 'နီးရိုး', 'ကယ်လီဂူလာ'],
                'correct_answer' => 'Augustus',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'The Hundred Years War was between?',
                'question_text_my' => 'နှစ်တစ်ရာစစ်ပွဲသည် မည်သည့်နိုင်ငံများကြား ဖြစ်ပွားခဲ့သနည်း။',
                'options' => ['France & England', 'Spain & Portugal', 'Rome & Carthage', 'Germany & Poland'],
                'options_my' => ['ပြင်သစ် နှင့် အင်္ဂလန်', 'စပိန် နှင့် ပေါ်တူဂီ', 'ရောမ နှင့် ကာသေ့ခ်ျ', 'ဂျာမနီ နှင့် ပိုလန်'],
                'correct_answer' => 'France & England',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'Who wrote the Communist Manifesto?',
                'question_text_my' => 'ကွန်မြူနစ်ကြေညာစာတမ်းကို ရေးသားခဲ့သူမှာ...',
                'options' => ['Lenin', 'Stalin', 'Marx', 'Mao'],
                'options_my' => ['လီနင်', 'စတာလင်', 'မတ်စ်', 'မော်'],
                'correct_answer' => 'Marx',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'When did the Soviet Union collapse?',
                'question_text_my' => 'ဆိုဗီယက်ယူနီယံ ပြိုကွဲခဲ့သောနှစ်မှာ...',
                'options' => ['1989', '1990', '1991', '1992'],
                'options_my' => ['၁၉၈၉', '၁၉၉၀', '၁၉၉၁', '၁၉၉၂'],
                'correct_answer' => '1991',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'Who was the second president of the USA?',
                'question_text_my' => 'အမေရိကန်၏ ဒုတိယမြောက် သမ္မတမှာ...',
                'options' => ['Jefferson', 'Adams', 'Madison', 'Monroe'],
                'options_my' => ['ဂျက်ဖာဆန်', 'အဒမ်', 'မဒီဆင်', 'မွန်ရိုး'],
                'correct_answer' => 'Adams',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'Which city was the capital of the Ottoman Empire?',
                'question_text_my' => 'အော်တိုမန်အင်ပါယာ၏ မြို့တော်မှာ...',
                'options' => ['Baghdad', 'Constantinople', 'Damascus', 'Cairo'],
                'options_my' => ['ဘဂ္ဂဒက်', 'ကွန်စတန်တီနိုပယ်', 'ဒမတ်စကက်', 'ကိုင်ရို'],
                'correct_answer' => 'Constantinople',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'The attack on Pearl Harbor happened in...',
                'question_text_my' => 'ပုလဲဆိပ်ကမ်း တိုက်ခိုက်ခံရသည့်နှစ်မှာ...',
                'options' => ['1939', '1940', '1941', '1942'],
                'options_my' => ['၁၉၃၉', '၁၉၄၀', '၁၉၄၁', '၁၉၄၂'],
                'correct_answer' => '1941',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'Who founded the Mongol Empire?',
                'question_text_my' => 'မွန်ဂိုအင်ပါယာကို တည်ထောင်သူမှာ...',
                'options' => ['Kublai Khan', 'Genghis Khan', 'Attila', 'Tamerlane'],
                'options_my' => ['ကူဗလိုင်ခန်', 'ဂျင်ဂစ်ခန်', 'အတီလာ', 'တာမာလိန်း'],
                'correct_answer' => 'Genghis Khan',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'Which battle ended Napoleon\'s rule?',
                'question_text_my' => 'နပိုလီယံ၏ အုပ်ချုပ်ရေးကို အဆုံးသတ်စေခဲ့သော တိုက်ပွဲမှာ...',
                'options' => ['Austerlitz', 'Waterloo', 'Borodino', 'Trafalgar'],
                'options_my' => ['Austerlitz', 'ဝါးတားလူး', 'Borodino', 'Trafalgar'],
                'correct_answer' => 'Waterloo',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'Who was the first female pilot to fly solo across the Atlantic?',
                'question_text_my' => 'အတ္တလန္တိတ်သမုဒ္ဒရာကို တစ်ကိုယ်တော် ဖြတ်ကျော်ပျံသန်းခဲ့သော ပထမဆုံး အမျိုးသမီးမှာ...',
                'options' => ['Earhart', 'Coleman', 'Ride', 'Johnson'],
                'options_my' => ['အဲဟတ်', 'ကိုးလ်မန်း', 'ရိုက်', 'ဂျွန်ဆင်'],
                'correct_answer' => 'Earhart',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'The Chernobyl disaster happened in...',
                'question_text_my' => 'ချာနိုဘိုင်း နျူကလီးယားပေါက်ကွဲမှု ဖြစ်ပွားခဲ့သောနှစ်မှာ...',
                'options' => ['1984', '1985', '1986', '1987'],
                'options_my' => ['၁၉၈၄', '၁၉၈၅', '၁၉၈၆', '၁၉၈၇'],
                'correct_answer' => '1986',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'Who was the leader of the Soviet Union during WWII?',
                'question_text_my' => 'ဒုတိယကမ္ဘာစစ်အတွင်း ဆိုဗီယက်ခေါင်းဆောင်မှာ...',
                'options' => ['Lenin', 'Stalin', 'Trotsky', 'Khrushchev'],
                'options_my' => ['လီနင်', 'စတာလင်', 'ထရော့စကီး', 'ခရူးရှက်'],
                'correct_answer' => 'Stalin',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'Which country was not part of the Axis Powers?',
                'question_text_my' => 'ဝင်ရိုးတန်းအဖွဲ့တွင် မပါဝင်သော နိုင်ငံမှာ...',
                'options' => ['Germany', 'Italy', 'Japan', 'Soviet Union'],
                'options_my' => ['ဂျာမနီ', 'အီတလီ', 'ဂျပန်', 'ဆိုဗီယက်ယူနီယံ'],
                'correct_answer' => 'Soviet Union',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'The Renaissance started in...',
                'question_text_my' => 'Renaissance (ဉာဏ်သစ်လောင်းခေတ်) စတင်ခဲ့သော နိုင်ငံမှာ...',
                'options' => ['France', 'Italy', 'England', 'Germany'],
                'options_my' => ['ပြင်သစ်', 'အီတလီ', 'အင်္ဂလန်', 'ဂျာမနီ'],
                'correct_answer' => 'Italy',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'Which explorer reached the South Pole first?',
                'question_text_my' => 'တောင်ဝင်ရိုးစွန်းသို့ ပထမဆုံးရောက်ရှိခဲ့သူမှာ...',
                'options' => ['Scott', 'Amundsen', 'Shackleton', 'Peary'],
                'options_my' => ['စကော့', 'အမန်ဆင်', 'ရှက်ကယ်တန်', 'ပီယာရီ'],
                'correct_answer' => 'Amundsen',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'Who was the longest-serving US President?',
                'question_text_my' => 'သက်တမ်းအကြာဆုံး အမေရိကန်သမ္မတမှာ...',
                'options' => ['FDR', 'Washington', 'Lincoln', 'Clinton'],
                'options_my' => ['FDR (ဖရန်ကလင် ရုစဗဲ့)', 'ဝါရှင်တန်', 'လင်ကွန်း', 'ကလင်တန်'],
                'correct_answer' => 'FDR',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'The Black Death killed about how much of Europe?',
                'question_text_my' => 'ပလိပ်ရောဂါဆိုးကြီးသည် ဥရောပလူဦးရေ၏ မည်မျှကို သေဆုံးစေခဲ့သနည်း။',
                'options' => ['1/10', '1/4', '1/3', '1/2'],
                'options_my' => ['၁၀ ပုံ ၁ ပုံ', '၄ ပုံ ၁ ပုံ', '၃ ပုံ ၁ ပုံ', 'တစ်ဝက်'],
                'correct_answer' => '1/3',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'Who founded Buddhism?',
                'question_text_my' => 'ဗုဒ္ဓဘာသာကို တည်ထောင်သူမှာ...',
                'options' => ['Siddhartha Gautama', 'Ashoka', 'Confucius', 'Laozi'],
                'options_my' => ['သိဒ္ဓတ္ထဂေါတမ', 'အာသောက', 'ကွန်ဖြူးရှပ်', 'လာအိုဇီ'],
                'correct_answer' => 'Siddhartha Gautama',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'The Opium Wars were between China and...',
                'question_text_my' => 'ဘိန်းစစ်ပွဲများသည် တရုတ်နှင့် ... ကြားဖြစ်ပွားခဲ့သည်။',
                'options' => ['France', 'USA', 'Britain', 'Japan'],
                'options_my' => ['ပြင်သစ်', 'အမေရိကန်', 'ဗြိတိန်', 'ဂျပန်'],
                'correct_answer' => 'Britain',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'medium',
                'question_text' => 'Which empire was ruled by the Incas?',
                'question_text_my' => 'အင်ကာလူမျိုးတို့၏ အင်ပါယာမှာ...',
                'options' => ['Mexican', 'Peruvian', 'Brazilian', 'Chilean'],
                'options_my' => ['မက္ကဆီကို', 'ပီရူး', 'ဘရာဇီး', 'ချီလီ'],
                'correct_answer' => 'Peruvian',
                'language' => 'en'
            ],

            // --- Hard (30 Questions) ---
            [
                'category' => 'History',
                'difficulty' => 'hard',
                'question_text' => 'When did Myanmar gain independence?',
                'question_text_my' => 'မြန်မာနိုင်ငံ လွတ်လပ်ရေးရခဲ့သည့် ခုနှစ်သည်...',
                'options' => ['1947', '1948', '1949', '1950'],
                'options_my' => ['၁၉၄၇', '၁၉၄၈', '၁၉၄၉', '၁၉၅၀'],
                'correct_answer' => '1948',
                'language' => 'en'
            ], // [cite: 81]
            [
                'category' => 'History',
                'difficulty' => 'hard',
                'question_text' => 'Who was the last King of Myanmar?',
                'question_text_my' => 'မြန်မာနိုင်ငံ၏ နောက်ဆုံးမင်းသည်...',
                'options' => ['Mindon', 'Thibaw', 'Bodawpaya', 'Bagyidaw'],
                'options_my' => ['မင်းတုန်းမင်း', 'သီပေါမင်း', 'ဗဒုံမင်း', 'ဘကြီးတော်'],
                'correct_answer' => 'Thibaw',
                'language' => 'en'
            ], // [cite: 86]
            [
                'category' => 'History',
                'difficulty' => 'hard',
                'question_text' => 'The French Revolution started in...',
                'question_text_my' => 'ပြင်သစ်တော်လှန်ရေး စတင်ခဲ့သည့်နှစ်မှာ...',
                'options' => ['1776', '1789', '1812', '1850'],
                'options_my' => ['၁၇၇၆', '၁၇၈၉', '၁၈၁၂', '၁၈၅၀'],
                'correct_answer' => '1789',
                'language' => 'en'
            ], // [cite: 92]
            [
                'category' => 'History',
                'difficulty' => 'hard',
                'question_text' => 'In which city was the JFK assassinated?',
                'question_text_my' => 'JFK လုပ်ကြံခံရသည့် အမေရိကန်မြို့ကြီးမှာ...',
                'options' => ['New York', 'Dallas', 'Washington', 'Chicago'],
                'options_my' => ['နယူးယောက်', 'ဒါးလပ်စ်', 'ဝါရှင်တန်', 'ရှီကာဂို'],
                'correct_answer' => 'Dallas',
                'language' => 'en'
            ], // [cite: 95]
            [
                'category' => 'History',
                'difficulty' => 'hard',
                'question_text' => 'Which empire was ruled by Genghis Khan?',
                'question_text_my' => 'ဂျင်ဂစ်ခန် အုပ်ချုပ်ခဲ့သော အင်ပါယာမှာ...',
                'options' => ['Ottoman', 'Mongol', 'Roman', 'Persian'],
                'options_my' => ['အော်တိုမန်', 'မွန်ဂို', 'ရောမ', 'ပါရှန်း'],
                'correct_answer' => 'Mongol',
                'language' => 'en'
            ], // [cite: 101]
            [
                'category' => 'History',
                'difficulty' => 'hard',
                'question_text' => 'The Battle of Waterloo was fought in...',
                'question_text_my' => 'ဝါးတားလူးတိုက်ပွဲ ဖြစ်ပွားခဲ့သည့်နှစ်မှာ...',
                'options' => ['1805', '1815', '1825', '1835'],
                'options_my' => ['၁၈၀၅', '၁၈၁၅', '၁၈၂၅', '၁၈၃၅'],
                'correct_answer' => '1815',
                'language' => 'en'
            ], // [cite: 106]
            [
                'category' => 'History',
                'difficulty' => 'hard',
                'question_text' => 'Who was the first Emperor of China?',
                'question_text_my' => 'တရုတ်ပြည်၏ ပထမဆုံး ဧကရာဇ်မှာ...',
                'options' => ['Qin Shi Huang', 'Han Wudi', 'Tang Taizong', 'Kublai Khan'],
                'options_my' => ['ချင်ရှီဟွမ်', 'ဟန်ဝူဒီ', 'တန်တိုင်ဇုံ', 'ကူဗလိုင်ခန်'],
                'correct_answer' => 'Qin Shi Huang',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'hard',
                'question_text' => 'The Peloponnesian War was fought between...',
                'question_text_my' => 'Peloponnesian စစ်ပွဲသည် ... ကြား ဖြစ်ပွားခဲ့သည်။',
                'options' => ['Athens & Sparta', 'Rome & Carthage', 'Greece & Persia', 'Troy & Greece'],
                'options_my' => ['အေသင် နှင့် စပါတာ', 'ရောမ နှင့် ကာသေ့ခ်ျ', 'ဂရိ နှင့် ပါရှား', 'ထရိုဂျန် နှင့် ဂရိ'],
                'correct_answer' => 'Athens & Sparta',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'hard',
                'question_text' => 'In what year was the UN established?',
                'question_text_my' => 'ကုလသမဂ္ဂကို တည်ထောင်ခဲ့သောနှစ်မှာ...',
                'options' => ['1944', '1945', '1946', '1947'],
                'options_my' => ['၁၉၄၄', '၁၉၄၅', '၁၉၄၆', '၁၉၄၇'],
                'correct_answer' => '1945',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'hard',
                'question_text' => 'Who was the last Tsar of Russia?',
                'question_text_my' => 'ရုရှား၏ နောက်ဆုံးဇာဘုရင်မှာ...',
                'options' => ['Alexander II', 'Nicholas II', 'Peter III', 'Ivan IV'],
                'options_my' => ['အလက်ဇန္ဒား ၂', 'နီကိုလပ်စ် ၂', 'ပီတာ ၃', 'အိုင်ဗင် ၄'],
                'correct_answer' => 'Nicholas II',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'hard',
                'question_text' => 'The Battle of Hastings took place in...',
                'question_text_my' => 'ဟေးစတင်းတိုက်ပွဲ ဖြစ်ပွားခဲ့သောနှစ်မှာ...',
                'options' => ['1066', '1166', '1266', '1366'],
                'options_my' => ['၁၀၆၆', '၁၁၆၆', '၁၂၆၆', '၁၃၆၆'],
                'correct_answer' => '1066',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'hard',
                'question_text' => 'Who assassinated Julius Caesar?',
                'question_text_my' => 'ဂျူးလီးယပ်ဆီဇာကို လုပ်ကြံခဲ့သူများတွင် ပါဝင်သူမှာ...',
                'options' => ['Brutus', 'Nero', 'Augustus', 'Antony'],
                'options_my' => ['ဘရူးတပ်စ်', 'နီးရိုး', 'ဩဂတ်စတပ်', 'အန်တိုနီ'],
                'correct_answer' => 'Brutus',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'hard',
                'question_text' => 'The Spanish Civil War started in...',
                'question_text_my' => 'စပိန်ပြည်တွင်းစစ် စတင်ခဲ့သောနှစ်မှာ...',
                'options' => ['1936', '1937', '1938', '1939'],
                'options_my' => ['၁၉၃၆', '၁၉၃၇', '၁၉၃၈', '၁၉၃၉'],
                'correct_answer' => '1936',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'hard',
                'question_text' => 'Who was the Prime Minister of UK during WWII?',
                'question_text_my' => 'ဒုတိယကမ္ဘာစစ်အတွင်း ဗြိတိန်ဝန်ကြီးချုပ်မှာ...',
                'options' => ['Chamberlain', 'Churchill', 'Attlee', 'Eden'],
                'options_my' => ['ချိန်ဘာလိန်', 'ချာချီ', 'အက်တလီ', 'အီဒင်'],
                'correct_answer' => 'Churchill',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'hard',
                'question_text' => 'The Byzantine Empire capital was...',
                'question_text_my' => 'ဘိုင်ဇန်တိုင်းအင်ပါယာ၏ မြို့တော်မှာ...',
                'options' => ['Rome', 'Constantinople', 'Athens', 'Alexandria'],
                'options_my' => ['ရောမ', 'ကွန်စတန်တီနိုပယ်', 'အေသင်', 'အလက်ဇန္ဒြီးယား'],
                'correct_answer' => 'Constantinople',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'hard',
                'question_text' => 'Which treaty ended WWI?',
                'question_text_my' => 'ပထမကမ္ဘာစစ်ကို ပြီးဆုံးစေခဲ့သော စာချုပ်မှာ...',
                'options' => ['Treaty of Paris', 'Treaty of Versailles', 'Treaty of Ghent', 'Treaty of Vienna'],
                'options_my' => ['ပဲရစ်စာချုပ်', 'ဗာဆိုင်းစာချုပ်', 'ဂျင့်စာချုပ်', 'ဗီယင်နာစာချုပ်'],
                'correct_answer' => 'Treaty of Versailles',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'hard',
                'question_text' => 'Who founded the Ottoman Empire?',
                'question_text_my' => 'အော်တိုမန်အင်ပါယာကို တည်ထောင်သူမှာ...',
                'options' => ['Osman I', 'Suleiman I', 'Mehmed II', 'Selim I'],
                'options_my' => ['အော့စ်မန် ၁', 'ဆူလေမန် ၁', 'မဟမ္မဒ် ၂', 'ဆလင်း ၁'],
                'correct_answer' => 'Osman I',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'hard',
                'question_text' => 'When was the Declaration of Independence signed?',
                'question_text_my' => 'လွတ်လပ်ရေးကြေငြာစာတမ်းကို လက်မှတ်ရေးထိုးခဲ့သော ခုနှစ်မှာ...',
                'options' => ['1774', '1775', '1776', '1777'],
                'options_my' => ['၁၇၇၄', '၁၇၇၅', '၁၇၇၆', '၁၇၇၇'],
                'correct_answer' => '1776',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'hard',
                'question_text' => 'Who was the first female ruler of Russia?',
                'question_text_my' => 'ရုရှားကို အုပ်ချုပ်ခဲ့သော ပထမဆုံး အမျိုးသမီးမှာ...',
                'options' => ['Catherine I', 'Catherine II', 'Elizabeth', 'Anna'],
                'options_my' => ['ကက်သရင်း ၁', 'ကက်သရင်း ၂', 'အဲလိဇဘက်', 'အန်နာ'],
                'correct_answer' => 'Catherine I',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'hard',
                'question_text' => 'Which King of England had six wives?',
                'question_text_my' => 'မိဖုရား ၆ ယောက်ရှိခဲ့သော အင်္ဂလိပ်ဘုရင်မှာ...',
                'options' => ['Henry V', 'Henry VIII', 'Edward VI', 'Richard III'],
                'options_my' => ['ဟင်နရီ ၅', 'ဟင်နရီ ၈', 'အက်ဒွပ် ၆', 'ရစ်ချတ် ၃'],
                'correct_answer' => 'Henry VIII',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'hard',
                'question_text' => 'The Great Depression started in...',
                'question_text_my' => 'ကမ္ဘာ့စီးပွားပျက်ကပ်ကြီး စတင်ခဲ့သောနှစ်မှာ...',
                'options' => ['1929', '1930', '1931', '1932'],
                'options_my' => ['၁၉၂၉', '၁၉၃၀', '၁၉၃၁', '၁၉၃၂'],
                'correct_answer' => '1929',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'hard',
                'question_text' => 'Who discovered the sea route to India?',
                'question_text_my' => 'အိန္ဒိယသို့ ရေလမ်းခရီးကို ရှာဖွေတွေ့ရှိခဲ့သူမှာ...',
                'options' => ['Columbus', 'Vasco da Gama', 'Magellan', 'Dias'],
                'options_my' => ['ကိုလံဘတ်စ်', 'ဗက်စကိုဒါဂါးမား', 'မဂျဲလန်', 'ဒီးယပ်စ်'],
                'correct_answer' => 'Vasco da Gama',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'hard',
                'question_text' => 'When did the Rwanda Genocide happen?',
                'question_text_my' => 'ရဝမ်ဒါလူမျိုးတုံးသတ်ဖြတ်မှု ဖြစ်ပွားခဲ့သောနှစ်မှာ...',
                'options' => ['1992', '1993', '1994', '1995'],
                'options_my' => ['၁၉၉၂', '၁၉၉၃', '၁၉၉၄', '၁၉၉၅'],
                'correct_answer' => '1994',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'hard',
                'question_text' => 'The Battle of Gettysburg was in which war?',
                'question_text_my' => 'Gettysburg တိုက်ပွဲသည် မည်သည့်စစ်ပွဲတွင် ဖြစ်ပွားခဲ့သနည်း။',
                'options' => ['Revolutionary War', 'Civil War', 'WWI', '1812 War'],
                'options_my' => ['တော်လှန်ရေးစစ်ပွဲ', 'ပြည်တွင်းစစ်', 'ပထမကမ္ဘာစစ်', '၁၈၁၂ စစ်ပွဲ'],
                'correct_answer' => 'Civil War',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'hard',
                'question_text' => 'Who was the first president of the Republic of China?',
                'question_text_my' => 'တရုတ်သမ္မတနိုင်ငံ (ROC) ၏ ပထမဆုံး ယာယီသမ္မတမှာ...',
                'options' => ['Sun Yat-sen', 'Chiang Kai-shek', 'Mao Zedong', 'Yuan Shikai'],
                'options_my' => ['ဆွန်ယက်ဆင်', 'ချန်ကေရှိတ်', 'မော်စီတုန်း', 'ယွမ်ရှီကိုင်း'],
                'correct_answer' => 'Sun Yat-sen',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'hard',
                'question_text' => 'The Boer War was fought in...',
                'question_text_my' => 'Boer စစ်ပွဲ ဖြစ်ပွားခဲ့သော ဒေသမှာ...',
                'options' => ['South Africa', 'India', 'Australia', 'Canada'],
                'options_my' => ['တောင်အာဖရိက', 'အိန္ဒိယ', 'သြစတြေးလျ', 'ကနေဒါ'],
                'correct_answer' => 'South Africa',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'hard',
                'question_text' => 'Who was the ancient Greek god of war?',
                'question_text_my' => 'ရှေးဟောင်းဂရိ စစ်နတ်ဘုရားမှာ...',
                'options' => ['Zeus', 'Ares', 'Apollo', 'Hermes'],
                'options_my' => ['ဇု', 'ဧရိစ်', 'အပိုလို', 'ဟာမိစ်'],
                'correct_answer' => 'Ares',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'hard',
                'question_text' => 'The unification of Germany happened in...',
                'question_text_my' => 'ဂျာမနီနိုင်ငံ ပေါင်းစည်းခဲ့သောနှစ်မှာ...',
                'options' => ['1861', '1871', '1881', '1891'],
                'options_my' => ['၁၈၆၁', '၁၈၇၁', '၁၈၈၁', '၁၈၉၁'],
                'correct_answer' => '1871',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'hard',
                'question_text' => 'Who was the longest-reigning French monarch?',
                'question_text_my' => 'နန်းသက်အရှည်ကြာဆုံး ပြင်သစ်ဘုရင်မှာ...',
                'options' => ['Louis XIV', 'Louis XVI', 'Napoleon', 'Charlemagne'],
                'options_my' => ['လူးဝစ် ၁၄', 'လူးဝစ် ၁၆', 'နပိုလီယံ', 'ရှားလမိန်း'],
                'correct_answer' => 'Louis XIV',
                'language' => 'en'
            ],
            [
                'category' => 'History',
                'difficulty' => 'hard',
                'question_text' => 'The Khmer Rouge ruled which country?',
                'question_text_my' => 'ခမာနီများ အုပ်ချုပ်ခဲ့သော နိုင်ငံမှာ...',
                'options' => ['Vietnam', 'Laos', 'Cambodia', 'Thailand'],
                'options_my' => ['ဗီယက်နမ်', 'လာအို', 'ကမ္ဘောဒီးယား', 'ထိုင်း'],
                'correct_answer' => 'Cambodia',
                'language' => 'en'
            ],
        ];

        foreach ($questions as $q) {
            Question::create($q);
        }
    }
}
