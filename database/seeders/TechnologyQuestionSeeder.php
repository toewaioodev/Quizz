<?php

namespace Database\Seeders;

use App\Models\Question;
use Illuminate\Database\Seeder;

class TechnologyQuestionSeeder extends Seeder
{
    public function run(): void
    {
        $questions = [
            // --- Easy (35 Questions) ---
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'What does CPU stand for?',
                'question_text_my' => 'CPU ၏ အရှည်ကောက်မှာ...',
                'options' => ['Central Process Unit', 'Central Processing Unit', 'Computer Personal Unit', 'Central Processor Unit'],
                'options_my' => ['Central Process Unit', 'Central Processing Unit', 'Computer Personal Unit', 'Central Processor Unit'],
                'correct_answer' => 'Central Processing Unit',
                'language' => 'en'
            ], //
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'Which company makes the iPhone?',
                'question_text_my' => 'iPhone ကို ထုတ်လုပ်သော ကုမ္ပဏီမှာ...',
                'options' => ['Samsung', 'Apple', 'Google', 'Microsoft'],
                'options_my' => ['Samsung', 'Apple', 'Google', 'Microsoft'],
                'correct_answer' => 'Apple',
                'language' => 'en'
            ], //
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'What is the name of the robot in "Wall-E"?',
                'question_text_my' => '"Wall-E" ဇာတ်ကားထဲမှ စက်ရုပ်နာမည်မှာ...',
                'options' => ['Eve', 'Wall-E', 'Robo', 'Bot'],
                'options_my' => ['Eve', 'Wall-E', 'Robo', 'Bot'],
                'correct_answer' => 'Wall-E',
                'language' => 'en'
            ], //
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'Which device is used to type on a computer?',
                'question_text_my' => 'ကွန်ပျူတာတွင် စာရိုက်ရန်သုံးသော ကိရိယာမှာ...',
                'options' => ['Mouse', 'Monitor', 'Keyboard', 'Speaker'],
                'options_my' => ['မောက်စ်', 'မော်နီတာ', 'ကီးဘုတ်', 'စပီကာ'],
                'correct_answer' => 'Keyboard',
                'language' => 'en'
            ], //
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'What does "www" stand for?',
                'question_text_my' => '"www" ၏ အရှည်ကောက်မှာ...',
                'options' => ['World Wide Web', 'World Web Wide', 'Wide World Web', 'Web World Wide'],
                'options_my' => ['World Wide Web', 'World Web Wide', 'Wide World Web', 'Web World Wide'],
                'correct_answer' => 'World Wide Web',
                'language' => 'en'
            ], //
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'What is the most popular search engine?',
                'question_text_my' => 'လူသုံးအများဆုံး ရှာဖွေရေးအင်ဂျင်မှာ...',
                'options' => ['Bing', 'Yahoo', 'Google', 'DuckDuckGo'],
                'options_my' => ['Bing', 'Yahoo', 'Google', 'DuckDuckGo'],
                'correct_answer' => 'Google',
                'language' => 'en'
            ], //
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'Which device captures photos?',
                'question_text_my' => 'ဓာတ်ပုံရိုက်ရန် သုံးသော ကိရိယာမှာ...',
                'options' => ['Printer', 'Camera', 'Scanner', 'Speaker'],
                'options_my' => ['ပရင်တာ', 'ကင်မရာ', 'စကင်နာ', 'စပီကာ'],
                'correct_answer' => 'Camera',
                'language' => 'en'
            ], //
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'What is used to move the cursor on a computer screen?',
                'question_text_my' => 'ကွန်ပျူတာဖန်သားပြင်ပေါ်တွင် cursor ရွှေ့ရန် ဘာကိုသုံးသနည်း။',
                'options' => ['Keyboard', 'Mouse', 'Printer', 'Speaker'],
                'options_my' => ['ကီးဘုတ်', 'မောက်စ်', 'ပရင်တာ', 'စပီကာ'],
                'correct_answer' => 'Mouse',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'Which social media app is famous for short videos?',
                'question_text_my' => 'ဗီဒီယိုတိုလေးများဖြင့် ကျော်ကြားသော ဆိုရှယ်မီဒီယာမှာ...',
                'options' => ['Facebook', 'TikTok', 'Twitter', 'LinkedIn'],
                'options_my' => ['ဖေ့စ်ဘုတ်', 'တစ်တော့', 'တွစ်တာ', 'လင့်ခ်အင်'],
                'correct_answer' => 'TikTok',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'What powers a laptop when not plugged in?',
                'question_text_my' => 'လက်တော့ပ်ကို ပလပ်မထိုးထားချိန်တွင် ဘာဖြင့်အလုပ်လုပ်သနည်း။',
                'options' => ['Battery', 'Solar', 'Wind', 'Gas'],
                'options_my' => ['ဘက်ထရီ', 'ဆိုလာ', 'လေ', 'ဓာတ်ငွေ့'],
                'correct_answer' => 'Battery',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'Which key deletes characters to the left?',
                'question_text_my' => 'ဘယ်ဘက်ရှိ စာလုံးများကို ဖျက်သော ခလုတ်မှာ...',
                'options' => ['Shift', 'Enter', 'Backspace', 'Ctrl'],
                'options_my' => ['Shift', 'Enter', 'Backspace', 'Ctrl'],
                'correct_answer' => 'Backspace',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'What symbol is used for email addresses?',
                'question_text_my' => 'အီးမေးလ်လိပ်စာများတွင် သုံးသော သင်္ကေတမှာ...',
                'options' => ['#', '@', '&', '$'],
                'options_my' => ['#', '@', '&', '$'],
                'correct_answer' => '@',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'Which company owns Windows?',
                'question_text_my' => 'Windows ကို ပိုင်ဆိုင်သော ကုမ္ပဏီမှာ...',
                'options' => ['Apple', 'Microsoft', 'Google', 'IBM'],
                'options_my' => ['Apple', 'Microsoft', 'Google', 'IBM'],
                'correct_answer' => 'Microsoft',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'What do you use to listen to music privately?',
                'question_text_my' => 'သီချင်းကို တစ်ကိုယ်တည်းနားထောင်ရန် ဘာကိုသုံးသနည်း။',
                'options' => ['Speaker', 'Headphones', 'Microphone', 'Webcam'],
                'options_my' => ['စပီကာ', 'နားကြပ်', 'မိုက်ကရိုဖုန်း', 'ဝက်ဘ်ကမ်'],
                'correct_answer' => 'Headphones',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'What is the "brain" of the computer?',
                'question_text_my' => 'ကွန်ပျူတာ၏ "ဦးနှောက်" သည်...',
                'options' => ['Monitor', 'Keyboard', 'CPU', 'Mouse'],
                'options_my' => ['မော်နီတာ', 'ကီးဘုတ်', 'CPU', 'မောက်စ်'],
                'correct_answer' => 'CPU',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'Which color is the Facebook logo?',
                'question_text_my' => 'Facebook လိုဂို၏ အရောင်မှာ...',
                'options' => ['Red', 'Blue', 'Green', 'Yellow'],
                'options_my' => ['အနီ', 'အပြာ', 'အစိမ်း', 'အဝါ'],
                'correct_answer' => 'Blue',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'What is a portable computer called?',
                'question_text_my' => 'သယ်ဆောင်ရလွယ်ကူသော ကွန်ပျူတာကို ဘာခေါ်သနည်း။',
                'options' => ['Desktop', 'Server', 'Laptop', 'Mainframe'],
                'options_my' => ['Desktop', 'Server', 'Laptop', 'Mainframe'],
                'correct_answer' => 'Laptop',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'Which technology connects devices wirelessly short-range?',
                'question_text_my' => 'အကွာအဝေးတိုတွင် ကြိုးမဲ့ချိတ်ဆက်သော နည်းပညာမှာ...',
                'options' => ['WiFi', 'Bluetooth', 'NFC', 'GPS'],
                'options_my' => ['WiFi', 'Bluetooth', 'NFC', 'GPS'],
                'correct_answer' => 'Bluetooth',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'What does "PC" stand for?',
                'question_text_my' => '"PC" ၏ အရှည်ကောက်မှာ...',
                'options' => ['Personal Computer', 'Private Computer', 'Public Computer', 'Power Computer'],
                'options_my' => ['Personal Computer', 'Private Computer', 'Public Computer', 'Power Computer'],
                'correct_answer' => 'Personal Computer',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'YouTube is primarily for...',
                'question_text_my' => 'YouTube သည် အဓိကအားဖြင့် ... အတွက်ဖြစ်သည်။',
                'options' => ['Photos', 'Music', 'Videos', 'Text'],
                'options_my' => ['ဓာတ်ပုံ', 'သီချင်း', 'ဗီဒီယို', 'စာ'],
                'correct_answer' => 'Videos',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'Which key is used to confirm an action?',
                'question_text_my' => 'အတည်ပြုရန် နှိပ်ရသော ခလုတ်မှာ...',
                'options' => ['Esc', 'Shift', 'Enter', 'Tab'],
                'options_my' => ['Esc', 'Shift', 'Enter', 'Tab'],
                'correct_answer' => 'Enter',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'What shows the visual output of a computer?',
                'question_text_my' => 'ကွန်ပျူတာ၏ ပုံရိပ်ကို ပြသပေးသော ပစ္စည်းမှာ...',
                'options' => ['Mouse', 'Monitor', 'CPU', 'Keyboard'],
                'options_my' => ['မောက်စ်', 'မော်နီတာ', 'CPU', 'ကီးဘုတ်'],
                'correct_answer' => 'Monitor',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'A computer virus is a...',
                'question_text_my' => 'ကွန်ပျူတာ ဗိုင်းရပ်စ် ဆိုသည်မှာ...',
                'options' => ['Hardware', 'Program', 'Person', 'Game'],
                'options_my' => ['ဟာ့ဒ်ဝဲ', 'ပရိုဂရမ်', 'လူ', 'ဂိမ်း'],
                'correct_answer' => 'Program',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'Chrome, Firefox, and Safari are...',
                'question_text_my' => 'Chrome, Firefox နှင့် Safari တို့သည်...',
                'options' => ['Games', 'Browsers', 'Antivirus', 'Music Players'],
                'options_my' => ['ဂိမ်းများ', 'Browsers', 'Antivirus', 'Music Players'],
                'correct_answer' => 'Browsers',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'What is the save icon usually shaped like?',
                'question_text_my' => 'Save icon သည် ပုံမှန်အားဖြင့် ဘာပုံသဏ္ဍာန်ရှိသနည်း။',
                'options' => ['CD', 'Floppy Disk', 'Hard Drive', 'Folder'],
                'options_my' => ['CD', 'Floppy Disk', 'Hard Drive', 'Folder'],
                'correct_answer' => 'Floppy Disk',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'Which company created Mario?',
                'question_text_my' => 'မာရီယိုဂိမ်းကို ဖန်တီးခဲ့သော ကုမ္ပဏီမှာ...',
                'options' => ['Sony', 'Sega', 'Nintendo', 'Atari'],
                'options_my' => ['Sony', 'Sega', 'Nintendo', 'Atari'],
                'correct_answer' => 'Nintendo',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'What does "SMS" stand for?',
                'question_text_my' => '"SMS" ၏ အရှည်ကောက်မှာ...',
                'options' => ['Short Message Service', 'Simple Message System', 'Send Message Soon', 'System Message Service'],
                'options_my' => ['Short Message Service', 'Simple Message System', 'Send Message Soon', 'System Message Service'],
                'correct_answer' => 'Short Message Service',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'Apple\'s voice assistant is called...',
                'question_text_my' => 'Apple ၏ အသံဖြင့်ခိုင်းစေနိုင်သော စနစ်အမည်မှာ...',
                'options' => ['Alexa', 'Siri', 'Cortana', 'Google'],
                'options_my' => ['Alexa', 'Siri', 'Cortana', 'Google'],
                'correct_answer' => 'Siri',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'What do you use to connect to the Internet wirelessly?',
                'question_text_my' => 'အင်တာနက်ကို ကြိုးမဲ့ချိတ်ဆက်ရန် ဘာကိုသုံးသနည်း။',
                'options' => ['HDMI', 'USB', 'Wi-Fi', 'VGA'],
                'options_my' => ['HDMI', 'USB', 'Wi-Fi', 'VGA'],
                'correct_answer' => 'Wi-Fi',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'Which part of the computer stores files permanently?',
                'question_text_my' => 'ဖိုင်များကို အမြဲတမ်းသိမ်းဆည်းပေးသော ကွန်ပျူတာအစိတ်အပိုင်းမှာ...',
                'options' => ['RAM', 'Hard Drive', 'CPU', 'Fan'],
                'options_my' => ['RAM', 'Hard Drive', 'CPU', 'ပန်ကာ'],
                'correct_answer' => 'Hard Drive',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'Ctrl + C is usually used to...',
                'question_text_my' => 'Ctrl + C ကို ... ရန်အတွက် သုံးလေ့ရှိသည်။',
                'options' => ['Paste', 'Cut', 'Copy', 'Print'],
                'options_my' => ['Paste', 'Cut', 'Copy', 'Print'],
                'correct_answer' => 'Copy',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'Ctrl + V is usually used to...',
                'question_text_my' => 'Ctrl + V ကို ... ရန်အတွက် သုံးလေ့ရှိသည်။',
                'options' => ['Paste', 'Cut', 'Copy', 'Print'],
                'options_my' => ['Paste', 'Cut', 'Copy', 'Print'],
                'correct_answer' => 'Paste',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'Which cable connects a computer to a monitor or TV?',
                'question_text_my' => 'ကွန်ပျူတာနှင့် TV ကို ချိတ်ဆက်သော ကြိုးမှာ...',
                'options' => ['USB', 'HDMI', 'Ethernet', 'Power Cord'],
                'options_my' => ['USB', 'HDMI', 'Ethernet', 'Power Cord'],
                'correct_answer' => 'HDMI',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'What is the name of the bird in Twitter\'s logo?',
                'question_text_my' => 'Twitter လိုဂိုထဲက ငှက်နာမည်မှာ (အရင်က)...',
                'options' => ['Larry', 'Jerry', 'Harry', 'Barry'],
                'options_my' => ['Larry', 'Jerry', 'Harry', 'Barry'],
                'correct_answer' => 'Larry',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'easy',
                'question_text' => 'A website address starts with...',
                'question_text_my' => 'ဝက်ဘ်ဆိုက်လိပ်စာများသည် ... ဖြင့် စလေ့ရှိသည်။',
                'options' => ['html://', 'http://', 'com://', 'www://'],
                'options_my' => ['html://', 'http://', 'com://', 'www://'],
                'correct_answer' => 'http://',
                'language' => 'en'
            ],

            // --- Medium (35 Questions) ---
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'What is the main circuit board in a computer called?',
                'question_text_my' => 'ကွန်ပျူတာ၏ ပင်မဆားကစ်ဘုတ်ကို ဘာခေါ်သနည်း။',
                'options' => ['Motherboard', 'Fatherboard', 'Keyboard', 'Circuitboard'],
                'options_my' => ['Motherboard', 'Fatherboard', 'Keyboard', 'Circuitboard'],
                'correct_answer' => 'Motherboard',
                'language' => 'en'
            ], //
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'What does RAM stand for?',
                'question_text_my' => 'RAM ၏ အရှည်ကောက်မှာ...',
                'options' => ['Read Access Memory', 'Random Access Memory', 'Run Access Memory', 'Real Access Memory'],
                'options_my' => ['Read Access Memory', 'Random Access Memory', 'Run Access Memory', 'Real Access Memory'],
                'correct_answer' => 'Random Access Memory',
                'language' => 'en'
            ], //
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'What does HTTP stand for?',
                'question_text_my' => 'HTTP ၏ အရှည်ကောက်မှာ...',
                'options' => ['HyperText Transfer Protocol', 'HyperTest Transfer Protocol', 'HighText Transfer Protocol', 'HyperText Transmission Protocol'],
                'options_my' => ['HyperText Transfer Protocol', 'HyperTest Transfer Protocol', 'HighText Transfer Protocol', 'HyperText Transmission Protocol'],
                'correct_answer' => 'HyperText Transfer Protocol',
                'language' => 'en'
            ], //
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'Which company owns Android?',
                'question_text_my' => 'Android ကို ပိုင်ဆိုင်သော ကုမ္ပဏီမှာ...',
                'options' => ['Apple', 'Microsoft', 'Google', 'IBM'],
                'options_my' => ['Apple', 'Microsoft', 'Google', 'IBM'],
                'correct_answer' => 'Google',
                'language' => 'en'
            ], //
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'Which social media platform has a bird logo?',
                'question_text_my' => 'ငှက်ပုံလိုဂိုပါသော ဆိုရှယ်မီဒီယာမှာ...',
                'options' => ['Facebook', 'Instagram', 'Twitter (X)', 'Snapchat'],
                'options_my' => ['Facebook', 'Instagram', 'Twitter (X)', 'Snapchat'],
                'correct_answer' => 'Twitter (X)',
                'language' => 'en'
            ], //
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'What does "WiFi" stand for?',
                'question_text_my' => '"WiFi" ၏ အရှည်ကောက်မှာ...',
                'options' => ['Wireless Fidelity', 'Wireless Find', 'Wide Fidelity', 'Wiring Fidelity'],
                'options_my' => ['Wireless Fidelity', 'Wireless Find', 'Wide Fidelity', 'Wiring Fidelity'],
                'correct_answer' => 'Wireless Fidelity',
                'language' => 'en'
            ], //
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'Which operating system is open source?',
                'question_text_my' => 'Open source ဖြစ်သော operating system မှာ...',
                'options' => ['Windows', 'macOS', 'Linux', 'iOS'],
                'options_my' => ['Windows', 'macOS', 'Linux', 'iOS'],
                'correct_answer' => 'Linux',
                'language' => 'en'
            ], //
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'What is the extension of a Python file?',
                'question_text_my' => 'Python ဖိုင်တစ်ခု၏ extension မှာ...',
                'options' => ['.py', '.java', '.js', '.php'],
                'options_my' => ['.py', '.java', '.js', '.php'],
                'correct_answer' => '.py',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'Which is faster for data storage?',
                'question_text_my' => 'ဒေတာသိမ်းဆည်းရာတွင် ပိုမြန်ဆန်သည်မှာ...',
                'options' => ['HDD', 'SSD', 'Floppy Disk', 'CD'],
                'options_my' => ['HDD', 'SSD', 'Floppy Disk', 'CD'],
                'correct_answer' => 'SSD',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'What does URL stand for?',
                'question_text_my' => 'URL ၏ အရှည်ကောက်မှာ...',
                'options' => ['Uniform Resource Locator', 'Universal Resource Locator', 'Uniform Reference Locator', 'Universal Reference Link'],
                'options_my' => ['Uniform Resource Locator', 'Universal Resource Locator', 'Uniform Reference Locator', 'Universal Reference Link'],
                'correct_answer' => 'Uniform Resource Locator',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'Which language is used for styling web pages?',
                'question_text_my' => 'ဝက်ဘ်စာမျက်နှာများကို အလှဆင်ရန်သုံးသော ဘာသာစကားမှာ...',
                'options' => ['HTML', 'CSS', 'PHP', 'SQL'],
                'options_my' => ['HTML', 'CSS', 'PHP', 'SQL'],
                'correct_answer' => 'CSS',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => '1024 Megabytes equals...',
                'question_text_my' => '1024 Megabytes သည် ... နှင့်ညီမျှသည်။',
                'options' => ['1 Kilobyte', '1 Gigabyte', '1 Terabyte', '1 Petabyte'],
                'options_my' => ['1 Kilobyte', '1 Gigabyte', '1 Terabyte', '1 Petabyte'],
                'correct_answer' => '1 Gigabyte',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'What does "IP" in IP Address stand for?',
                'question_text_my' => 'IP Address တွင် "IP" ၏ အရှည်ကောက်မှာ...',
                'options' => ['Internet Protocol', 'Internal Protocol', 'Internet Provider', 'Internal Provider'],
                'options_my' => ['Internet Protocol', 'Internal Protocol', 'Internet Provider', 'Internal Provider'],
                'correct_answer' => 'Internet Protocol',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'Which is a cloud computing service?',
                'question_text_my' => 'Cloud computing ဝန်ဆောင်မှုတစ်ခုမှာ...',
                'options' => ['AWS', 'BIOS', 'HTML', 'USB'],
                'options_my' => ['AWS', 'BIOS', 'HTML', 'USB'],
                'correct_answer' => 'AWS',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'Which file format is used for images?',
                'question_text_my' => 'ဓာတ်ပုံများအတွက် သုံးသော ဖိုင်ဖောမတ်မှာ...',
                'options' => ['.mp3', '.txt', '.jpg', '.exe'],
                'options_my' => ['.mp3', '.txt', '.jpg', '.exe'],
                'correct_answer' => '.jpg',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'What is the full form of PDF?',
                'question_text_my' => 'PDF ၏ အရှည်ကောက်မှာ...',
                'options' => ['Portable Document Format', 'Public Document File', 'Portable Data File', 'Personal Document Format'],
                'options_my' => ['Portable Document Format', 'Public Document File', 'Portable Data File', 'Personal Document Format'],
                'correct_answer' => 'Portable Document Format',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'Who is the CEO of Tesla?',
                'question_text_my' => 'Tesla ၏ CEO မှာ...',
                'options' => ['Jeff Bezos', 'Elon Musk', 'Bill Gates', 'Tim Cook'],
                'options_my' => ['ဂျက်ဖ်ဘီဇော့', 'အီလွန်မတ်စ်', 'ဘီလ်ဂိတ်', 'တင်မ်ကွတ်'],
                'correct_answer' => 'Elon Musk',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'Which protocol is used for sending emails?',
                'question_text_my' => 'အီးမေးလ်ပို့ရန်သုံးသော ပရိုတိုကောမှာ...',
                'options' => ['HTTP', 'FTP', 'SMTP', 'SSH'],
                'options_my' => ['HTTP', 'FTP', 'SMTP', 'SSH'],
                'correct_answer' => 'SMTP',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'Java is a...',
                'question_text_my' => 'Java ဆိုသည်မှာ...',
                'options' => ['Operating System', 'Hardware', 'Programming Language', 'Database'],
                'options_my' => ['Operating System', 'Hardware', 'Programming Language', 'Database'],
                'correct_answer' => 'Programming Language',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'What is "phishing"?',
                'question_text_my' => '"Phishing" ဆိုသည်မှာ...',
                'options' => ['Catching fish', 'A cyber attack', 'Coding', 'Gaming'],
                'options_my' => ['ငါးဖမ်းခြင်း', 'ဆိုက်ဘာတိုက်ခိုက်မှု', 'ကိုဒ်ရေးခြင်း', 'ဂိမ်းဆော့ခြင်း'],
                'correct_answer' => 'A cyber attack',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'Which company created the Java language?',
                'question_text_my' => 'Java ဘာသာစကားကို ဖန်တီးခဲ့သော ကုမ္ပဏီမှာ...',
                'options' => ['Microsoft', 'Sun Microsystems', 'Apple', 'Google'],
                'options_my' => ['Microsoft', 'Sun Microsystems', 'Apple', 'Google'],
                'correct_answer' => 'Sun Microsystems',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'What does "IoT" stand for?',
                'question_text_my' => '"IoT" ၏ အရှည်ကောက်မှာ...',
                'options' => ['Internet of Things', 'Input of Technology', 'Internal of Tools', 'Internet of Tools'],
                'options_my' => ['Internet of Things', 'Input of Technology', 'Internal of Tools', 'Internet of Tools'],
                'correct_answer' => 'Internet of Things',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'Which key combination locks a Windows PC?',
                'question_text_my' => 'Windows PC ကို Lock ချရန်နှိပ်ရသော ခလုတ်တွဲမှာ...',
                'options' => ['Win + L', 'Ctrl + L', 'Alt + L', 'Shift + L'],
                'options_my' => ['Win + L', 'Ctrl + L', 'Alt + L', 'Shift + L'],
                'correct_answer' => 'Win + L',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'What type of software is Linux?',
                'question_text_my' => 'Linux သည် မည်သည့်ဆော့ဖ်ဝဲအမျိုးအစားဖြစ်သနည်း။',
                'options' => ['Malware', 'Operating System', 'Browser', 'Editor'],
                'options_my' => ['Malware', 'Operating System', 'Browser', 'Editor'],
                'correct_answer' => 'Operating System',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'Which port is commonly used for flash drives?',
                'question_text_my' => 'Flash drives များအတွက် အသုံးများသော ပေါက်မှာ...',
                'options' => ['VGA', 'HDMI', 'USB', 'Ethernet'],
                'options_my' => ['VGA', 'HDMI', 'USB', 'Ethernet'],
                'correct_answer' => 'USB',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'What does "OS" stand for?',
                'question_text_my' => '"OS" ၏ အရှည်ကောက်မှာ...',
                'options' => ['Open Source', 'Operating System', 'Optical Sensor', 'Over System'],
                'options_my' => ['Open Source', 'Operating System', 'Optical Sensor', 'Over System'],
                'correct_answer' => 'Operating System',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'Which is a database management system?',
                'question_text_my' => 'Database Management System တစ်ခုမှာ...',
                'options' => ['MySQL', 'HTML', 'CSS', 'Python'],
                'options_my' => ['MySQL', 'HTML', 'CSS', 'Python'],
                'correct_answer' => 'MySQL',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'What is the main function of a router?',
                'question_text_my' => 'Router ၏ အဓိကလုပ်ဆောင်ချက်မှာ...',
                'options' => ['Store data', 'Direct traffic', 'Print files', 'Cooling'],
                'options_my' => ['ဒေတာသိမ်းရန်', 'အင်တာနက်လမ်းကြောင်းလွှဲရန်', 'စာထုတ်ရန်', 'အအေးခံရန်'],
                'correct_answer' => 'Direct traffic',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'Which company bought Instagram?',
                'question_text_my' => 'Instagram ကို ဝယ်ယူခဲ့သော ကုမ္ပဏီမှာ...',
                'options' => ['Google', 'Facebook (Meta)', 'Apple', 'Amazon'],
                'options_my' => ['Google', 'Facebook (Meta)', 'Apple', 'Amazon'],
                'correct_answer' => 'Facebook (Meta)',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'Which tech giant is based in Redmond, Washington?',
                'question_text_my' => 'Redmond, Washington တွင်အခြေစိုက်သော နည်းပညာကုမ္ပဏီကြီးမှာ...',
                'options' => ['Apple', 'Microsoft', 'Google', 'Facebook'],
                'options_my' => ['Apple', 'Microsoft', 'Google', 'Facebook'],
                'correct_answer' => 'Microsoft',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'What does "VPN" stand for?',
                'question_text_my' => '"VPN" ၏ အရှည်ကောက်မှာ...',
                'options' => ['Virtual Private Network', 'Visual Public Network', 'Virtual Personal Network', 'Virus Protection Network'],
                'options_my' => ['Virtual Private Network', 'Visual Public Network', 'Virtual Personal Network', 'Virus Protection Network'],
                'correct_answer' => 'Virtual Private Network',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'Which programming language uses a snake logo?',
                'question_text_my' => 'မြွေပုံလိုဂိုသုံးသော ပရိုဂရမ်းမင်းဘာသာစကားမှာ...',
                'options' => ['Java', 'C++', 'Python', 'Ruby'],
                'options_my' => ['Java', 'C++', 'Python', 'Ruby'],
                'correct_answer' => 'Python',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'What is the term for "malicious software"?',
                'question_text_my' => '"Malicious software" ကို အတိုကောက်ခေါ်လျှင်...',
                'options' => ['Malware', 'Badware', 'Softbad', 'Spyware'],
                'options_my' => ['Malware', 'Badware', 'Softbad', 'Spyware'],
                'correct_answer' => 'Malware',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'Which device converts digital signals to analog?',
                'question_text_my' => 'Digital မှ Analog သို့ ပြောင်းပေးသော ကိရိယာမှာ...',
                'options' => ['Modem', 'Router', 'Switch', 'Hub'],
                'options_my' => ['Modem', 'Router', 'Switch', 'Hub'],
                'correct_answer' => 'Modem',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'medium',
                'question_text' => 'Who co-founded Apple with Steve Jobs?',
                'question_text_my' => 'စတိခ်ဂျော့နှင့်အတူ Apple ကို ပူးတွဲတည်ထောင်သူမှာ...',
                'options' => ['Bill Gates', 'Steve Wozniak', 'Paul Allen', 'Elon Musk'],
                'options_my' => ['ဘီလ်ဂိတ်', 'စတိခ်ဝေါ့ဇ်နီယက်', 'ပေါလ်အယ်လန်', 'အီလွန်မတ်စ်'],
                'correct_answer' => 'Steve Wozniak',
                'language' => 'en'
            ],

            // --- Hard (30 Questions) ---
            [
                'category' => 'Technology',
                'difficulty' => 'hard',
                'question_text' => 'Who is the founder of Microsoft?',
                'question_text_my' => 'Microsoft ကို တည်ထောင်သူမှာ...',
                'options' => ['Steve Jobs', 'Bill Gates', 'Elon Musk', 'Mark Zuckerberg'],
                'options_my' => ['စတိခ်ဂျော့', 'ဘီလ်ဂိတ်', 'အီလွန်မတ်စ်', 'မတ်ခ်ဇူကာဘတ်'],
                'correct_answer' => 'Bill Gates',
                'language' => 'en'
            ], //
            [
                'category' => 'Technology',
                'difficulty' => 'hard',
                'question_text' => 'Which programming language is known as the language of the web?',
                'question_text_my' => 'Web ၏ ဘာသာစကားဟု လူသိများသော ပရိုဂရမ်းမင်းဘာသာစကားမှာ...',
                'options' => ['Python', 'Java', 'JavaScript', 'C++'],
                'options_my' => ['Python', 'Java', 'JavaScript', 'C++'],
                'correct_answer' => 'JavaScript',
                'language' => 'en'
            ], //
            [
                'category' => 'Technology',
                'difficulty' => 'hard',
                'question_text' => 'What year was the first iPhone released?',
                'question_text_my' => 'ပထမဆုံး iPhone ထွက်ရှိခဲ့သော ခုနှစ်မှာ...',
                'options' => ['2005', '2006', '2007', '2008'],
                'options_my' => ['၂၀၀၅', '၂၀၀၆', '၂၀၀၇', '၂၀၀၈'],
                'correct_answer' => '2007',
                'language' => 'en'
            ], //
            [
                'category' => 'Technology',
                'difficulty' => 'hard',
                'question_text' => 'What is the smallest unit of data in a computer?',
                'question_text_my' => 'ကွန်ပျူတာဒေတာ၏ အသေးဆုံးယူနစ်မှာ...',
                'options' => ['Byte', 'Bit', 'Kilobyte', 'Megabyte'],
                'options_my' => ['Byte', 'Bit', 'Kilobyte', 'Megabyte'],
                'correct_answer' => 'Bit',
                'language' => 'en'
            ], //
            [
                'category' => 'Technology',
                'difficulty' => 'hard',
                'question_text' => 'Who created the C programming language?',
                'question_text_my' => 'C programming language ကို ဖန်တီးခဲ့သူမှာ...',
                'options' => ['Dennis Ritchie', 'Bjarne Stroustrup', 'James Gosling', 'Guido van Rossum'],
                'options_my' => ['Dennis Ritchie', 'Bjarne Stroustrup', 'James Gosling', 'Guido van Rossum'],
                'correct_answer' => 'Dennis Ritchie',
                'language' => 'en'
            ], //
            [
                'category' => 'Technology',
                'difficulty' => 'hard',
                'question_text' => 'What does GPU stand for?',
                'question_text_my' => 'GPU ၏ အရှည်ကောက်မှာ...',
                'options' => ['General Processing Unit', 'Graphics Processing Unit', 'Global Processing Unit', 'Graphical Process Unit'],
                'options_my' => ['General Processing Unit', 'Graphics Processing Unit', 'Global Processing Unit', 'Graphical Process Unit'],
                'correct_answer' => 'Graphics Processing Unit',
                'language' => 'en'
            ], //
            [
                'category' => 'Technology',
                'difficulty' => 'hard',
                'question_text' => 'What is the name of the first computer programmer?',
                'question_text_my' => 'ပထမဆုံး ကွန်ပျူတာပရိုဂရမ်မာ၏ အမည်မှာ...',
                'options' => ['Alan Turing', 'Ada Lovelace', 'Charles Babbage', 'Grace Hopper'],
                'options_my' => ['အလန်ကျူးရင်း', 'အေဒါလဖ်လေ့စ်', 'ချားလ်ဘတ်ဘေ့ခ်ျ', 'ဂရေ့စ်ဟော့ပါ'],
                'correct_answer' => 'Ada Lovelace',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'hard',
                'question_text' => 'Which year was the World Wide Web invented?',
                'question_text_my' => 'World Wide Web (WWW) ကို တီထွင်ခဲ့သောနှစ်မှာ...',
                'options' => ['1985', '1989', '1995', '1999'],
                'options_my' => ['၁၉၈၅', '၁၉၈၉', '၁၉၉၅', '၁၉၉၉'],
                'correct_answer' => '1989',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'hard',
                'question_text' => 'What does "HTML" stand for?',
                'question_text_my' => '"HTML" ၏ အရှည်ကောက်မှာ...',
                'options' => ['HyperText Markup Language', 'HighText Machine Language', 'HyperTool Multi Language', 'HomeText Markup Language'],
                'options_my' => ['HyperText Markup Language', 'HighText Machine Language', 'HyperTool Multi Language', 'HomeText Markup Language'],
                'correct_answer' => 'HyperText Markup Language',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'hard',
                'question_text' => 'Who created the Linux kernel?',
                'question_text_my' => 'Linux kernel ကို ဖန်တီးခဲ့သူမှာ...',
                'options' => ['Steve Jobs', 'Bill Gates', 'Linus Torvalds', 'Mark Shuttleworth'],
                'options_my' => ['စတိခ်ဂျော့', 'ဘီလ်ဂိတ်', 'လင်းနပ်စ်တော်ဗယ်လ်', 'မတ်ခ်ရှပ်တယ်ဝေါ့သ်'],
                'correct_answer' => 'Linus Torvalds',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'hard',
                'question_text' => 'What is the full form of USB?',
                'question_text_my' => 'USB ၏ အရှည်ကောက်မှာ...',
                'options' => ['Universal Serial Bus', 'United Serial Bus', 'Universal System Bus', 'Ultra Serial Bus'],
                'options_my' => ['Universal Serial Bus', 'United Serial Bus', 'Universal System Bus', 'Ultra Serial Bus'],
                'correct_answer' => 'Universal Serial Bus',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'hard',
                'question_text' => 'Which protocol secures web communication?',
                'question_text_my' => 'Web communication ကို လုံခြုံစေသော ပရိုတိုကောမှာ...',
                'options' => ['HTTP', 'HTTPS', 'FTP', 'SMTP'],
                'options_my' => ['HTTP', 'HTTPS', 'FTP', 'SMTP'],
                'correct_answer' => 'HTTPS',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'hard',
                'question_text' => 'What does "BIOS" stand for?',
                'question_text_my' => '"BIOS" ၏ အရှည်ကောက်မှာ...',
                'options' => ['Basic Input Output System', 'Binary Input Output System', 'Basic Internal Operating System', 'Better Input Output System'],
                'options_my' => ['Basic Input Output System', 'Binary Input Output System', 'Basic Internal Operating System', 'Better Input Output System'],
                'correct_answer' => 'Basic Input Output System',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'hard',
                'question_text' => 'Which company developed the Swift programming language?',
                'question_text_my' => 'Swift ပရိုဂရမ်းမင်းဘာသာစကားကို ထုတ်လုပ်သော ကုမ္ပဏီမှာ...',
                'options' => ['Google', 'Microsoft', 'Apple', 'IBM'],
                'options_my' => ['Google', 'Microsoft', 'Apple', 'IBM'],
                'correct_answer' => 'Apple',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'hard',
                'question_text' => 'What is the term for a flaw in a computer program?',
                'question_text_my' => 'ကွန်ပျူတာပရိုဂရမ်တစ်ခု၏ ချို့ယွင်းချက်ကို ဘာခေါ်သနည်း။',
                'options' => ['Virus', 'Bug', 'Worm', 'Spyware'],
                'options_my' => ['ဗိုင်းရပ်စ်', 'Bug', 'Worm', 'Spyware'],
                'correct_answer' => 'Bug',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'hard',
                'question_text' => 'Who is known as the father of Artificial Intelligence?',
                'question_text_my' => 'AI ၏ ဖခင်ကြီးဟု လူသိများသူမှာ...',
                'options' => ['Alan Turing', 'John McCarthy', 'Elon Musk', 'Marvin Minsky'],
                'options_my' => ['အလန်ကျူးရင်း', 'ဂျွန်မက္ကာသီ', 'အီလွန်မတ်စ်', 'မာဗင်မင်စကီး'],
                'correct_answer' => 'John McCarthy',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'hard',
                'question_text' => 'What does SQL stand for?',
                'question_text_my' => 'SQL ၏ အရှည်ကောက်မှာ...',
                'options' => ['Structured Query Language', 'Simple Query Language', 'Structured Question Language', 'Standard Query Language'],
                'options_my' => ['Structured Query Language', 'Simple Query Language', 'Structured Question Language', 'Standard Query Language'],
                'correct_answer' => 'Structured Query Language',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'hard',
                'question_text' => 'Which component performs mathematical calculations in CPU?',
                'question_text_my' => 'CPU အတွင်း သင်္ချာတွက်ချက်မှုများ ပြုလုပ်သော အစိတ်အပိုင်းမှာ...',
                'options' => ['ALU', 'CU', 'MU', 'Register'],
                'options_my' => ['ALU', 'CU', 'MU', 'Register'],
                'correct_answer' => 'ALU',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'hard',
                'question_text' => 'What does "macOS" stand for?',
                'question_text_my' => '"macOS" ၏ အရှည်ကောက်မှာ...',
                'options' => ['Macintosh Operating System', 'Machine Operating System', 'Main Operating System', 'Mac Operating System'],
                'options_my' => ['Macintosh Operating System', 'Machine Operating System', 'Main Operating System', 'Mac Operating System'],
                'correct_answer' => 'Macintosh Operating System',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'hard',
                'question_text' => 'Who invented the World Wide Web?',
                'question_text_my' => 'World Wide Web (WWW) ကို တီထွင်ခဲ့သူမှာ...',
                'options' => ['Bill Gates', 'Tim Berners-Lee', 'Steve Jobs', 'Vint Cerf'],
                'options_my' => ['ဘီလ်ဂိတ်', 'တင်မ်ဘာနာလီ', 'စတိခ်ဂျော့', 'ဗင့်ဆာ့ဖ်'],
                'correct_answer' => 'Tim Berners-Lee',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'hard',
                'question_text' => 'In binary, what number does "10" represent?',
                'question_text_my' => 'Binary စနစ်တွင် "10" သည် ကိန်းဂဏန်းအားဖြင့် မည်မျှနည်း။',
                'options' => ['1', '2', '5', '10'],
                'options_my' => ['၁', '၂', '၅', '၁၀'],
                'correct_answer' => '2',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'hard',
                'question_text' => 'Which company developed the TensorFlow library?',
                'question_text_my' => 'TensorFlow library ကို ထုတ်လုပ်သော ကုမ္ပဏီမှာ...',
                'options' => ['Facebook', 'Google', 'IBM', 'Microsoft'],
                'options_my' => ['Facebook', 'Google', 'IBM', 'Microsoft'],
                'correct_answer' => 'Google',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'hard',
                'question_text' => 'What is the main technology behind Bitcoin?',
                'question_text_my' => 'Bitcoin ၏ အဓိကနည်းပညာမှာ...',
                'options' => ['Cloud Computing', 'Blockchain', 'AI', 'Big Data'],
                'options_my' => ['Cloud Computing', 'Blockchain', 'AI', 'Big Data'],
                'correct_answer' => 'Blockchain',
                'language' => 'en'
            ],
            [
                'category' => 'Technology',
                'difficulty' => 'hard',
                'question_text' => 'Which port is replaced by USB-C on modern laptops?',
                'question_text_my' => 'ခေတ်ပေါ်လက်တော့ပ်များတွင် USB-C ဖြင့် အစားထိုးလိုက်သော ပေါက်မှာ...',
                'options' => ['HDMI', 'VGA', 'Ethernet', 'Thunderbolt'],
                'options_my' => ['HDMI', 'VGA', 'Ethernet', 'Thunderbolt'],
                'correct_answer' => 'Thunderbolt', // Or often Standard USB-A, but Thunderbolt is the high-speed standard often merged.
                'language' => 'en'
            ],
        ];

        foreach ($questions as $q) {
            Question::create($q);
        }
    }
}
