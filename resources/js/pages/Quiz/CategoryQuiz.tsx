import { SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Question {
    id: number;
    question_text: string;
    question_text_my?: string;
    options: string[];
    options_my?: string[];
    category: string;
    difficulty: string;
}

interface QuizResult {
    correct: boolean;
    correct_answer: string;
    selected_option: string;
    points_earned: number;
    new_total_points: number;
}

export default function CategoryQuiz({ categoryId, categoryName }: { categoryId: string; categoryName: string }) {
    const { t, i18n } = useTranslation();
    const { auth } = usePage<SharedData>().props;
    const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({ correct: 0, total: 0, streak: 0 });
    const [result, setResult] = useState<QuizResult | null>(null);
    const [points, setPoints] = useState(auth.user.points);

    // Fetch initial question
    useEffect(() => {
        fetchQuestion();
    }, [categoryId]);

    const fetchQuestion = async () => {
        setLoading(true);
        setResult(null);
        try {
            const res = await axios.post('/quiz/generate', {
                topic: categoryId,
                difficulty: auth.user.settings?.difficulty || 'medium',
                language: i18n.language === 'en-US' ? 'en' : i18n.language || 'en',
            });
            setCurrentQuestion(res.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const submitAnswer = async (option: string) => {
        if (result || !currentQuestion) return;

        try {
            const res = await axios.post('/quiz/answer', {
                question_id: currentQuestion.id,
                selected_option: option,
            });
            const data = res.data;
            setResult(data);
            setPoints(data.new_total_points);

            if (data.correct) {
                new Audio('/sounds/correct.mp3').play().catch(() => {});
                setStats((s) => ({
                    correct: s.correct + 1,
                    total: s.total + 1,
                    streak: s.streak + 1,
                }));
            } else {
                new Audio('/sounds/wrong.mp3').play().catch(() => {});
                setStats((s) => ({
                    ...s,
                    total: s.total + 1,
                    streak: 0,
                }));
            }
        } catch (e) {
            console.error(e);
        }
    };

    // Determine display text and options based on language
    const displayQuestionText =
        i18n.language === 'my' && currentQuestion?.question_text_my ? currentQuestion.question_text_my : currentQuestion?.question_text;

    const displayOptions = i18n.language === 'my' && currentQuestion?.options_my ? currentQuestion.options_my : currentQuestion?.options;

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-gray-100">
            <Head title={`${categoryName} Quiz`} />

            {/* Header */}
            <header className="fixed top-0 right-0 left-0 z-50 border-b border-slate-200 bg-white/80 px-4 py-3 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80">
                <div className="mx-auto flex max-w-4xl items-center justify-between">
                    <Link
                        href="/"
                        className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-bold text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                    >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        {t('Exit')}
                    </Link>

                    <div className="flex items-center gap-4">
                        <div className="hidden sm:block">
                            <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">{t('Category')}</span>
                            <div className="font-bold">{t(categoryName)}</div>
                        </div>
                        <div className="hidden h-8 w-px bg-slate-200 sm:block dark:bg-slate-700"></div>
                        <div className="text-right">
                            <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">{t('SCORE')}</span>
                            <div className="text-xl font-black text-blue-600 dark:text-blue-400">{points}</div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Progress Bar */}
            <div className="fixed top-[61px] right-0 left-0 z-40 h-1 bg-slate-200 dark:bg-slate-800">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min((stats.correct / (stats.total || 1)) * 100, 100)}%` }}
                    className="h-full bg-green-500"
                />
            </div>

            <main className="flex min-h-screen flex-col items-center justify-center p-4 pt-24 pb-12">
                <div className="w-full max-w-2xl">
                    <AnimatePresence mode="wait">
                        {loading ? (
                            <motion.div
                                key="loader"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center justify-center py-20"
                            >
                                <div className="h-16 w-16 animate-spin rounded-full border-4 border-slate-200 border-t-blue-500"></div>
                                <p className="mt-4 font-medium text-slate-500">{t('Loading questions...')}</p>
                            </motion.div>
                        ) : currentQuestion ? (
                            <motion.div
                                key={currentQuestion.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-8"
                            >
                                {/* Streak Badge */}
                                {stats.streak > 1 && (
                                    <div className="flex justify-center">
                                        <div className="flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1 text-sm font-bold text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
                                            <span>🔥</span>
                                            <span>
                                                {stats.streak} {t('Streak!')}
                                            </span>
                                        </div>
                                    </div>
                                )}

                                {/* Question Card */}
                                <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-2xl dark:bg-slate-800/50 dark:ring-1 dark:ring-white/10">
                                    <h2 className="text-center text-2xl leading-tight font-black text-slate-800 md:text-3xl dark:text-white">
                                        {displayQuestionText}
                                    </h2>
                                </div>

                                {/* Options */}
                                <div className="grid gap-4 sm:grid-cols-2">
                                    {displayOptions?.map((opt, idx) => {
                                        // Use original English option for comparison logic
                                        const originalOption = currentQuestion.options[idx];

                                        let btnClass =
                                            'group relative overflow-hidden rounded-2xl border-2 p-5 text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500/50 ';

                                        if (result) {
                                            if (originalOption === result.correct_answer) {
                                                btnClass +=
                                                    'border-green-500 bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300 z-10 scale-[1.02] shadow-green-500/20';
                                            } else if (originalOption === result.selected_option && !result.correct) {
                                                btnClass += 'border-red-500 bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300 opacity-80';
                                            } else {
                                                btnClass += 'border-slate-200 bg-slate-50 opacity-40 dark:border-slate-700 dark:bg-slate-800/50';
                                            }
                                        } else {
                                            btnClass +=
                                                'border-slate-200 bg-white hover:border-blue-500 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:bg-blue-900/20';
                                        }

                                        return (
                                            <button
                                                key={idx}
                                                // Submit the original English option text regardless of what is displayed
                                                onClick={() => !result && submitAnswer(originalOption)}
                                                disabled={!!result}
                                                className={btnClass}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div
                                                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border text-sm font-bold transition-colors ${
                                                            result &&
                                                            (originalOption === result.correct_answer ||
                                                                (originalOption === result.selected_option && !result.correct))
                                                                ? 'border-transparent bg-white/20'
                                                                : 'border-slate-200 bg-slate-100 text-slate-500 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-400'
                                                        }`}
                                                    >
                                                        {String.fromCharCode(65 + idx)}
                                                    </div>
                                                    <span className="font-bold">{opt}</span>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Result Feedback & Next Button */}
                                <AnimatePresence>
                                    {result && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="fixed right-0 bottom-0 left-0 z-50 border-t border-slate-200 bg-white p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] dark:border-slate-800 dark:bg-slate-900"
                                        >
                                            <div className="mx-auto flex max-w-4xl items-center justify-between">
                                                <div className="flex items-center gap-4">
                                                    <div
                                                        className={`flex h-12 w-12 items-center justify-center rounded-full text-2xl ${result.correct ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}
                                                    >
                                                        {result.correct ? '✓' : '✗'}
                                                    </div>
                                                    <div>
                                                        <div className={`font-black uppercase ${result.correct ? 'text-green-600' : 'text-red-500'}`}>
                                                            {result.correct ? t('Correct!') : t('Wrong Answer')}
                                                        </div>
                                                        <div className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                                            {result.correct ? `+${result.points_earned} PTS` : t("Don't give up!")}
                                                        </div>
                                                    </div>
                                                </div>

                                                <button
                                                    onClick={() => fetchQuestion()}
                                                    className="flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95 dark:bg-white dark:text-slate-900"
                                                >
                                                    {t('Next Question')}
                                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ) : (
                            <div className="text-center text-red-500">
                                <p>{t('Failed to load question.')}</p>
                                <button onClick={() => fetchQuestion()} className="mt-4 underline">
                                    {t('Try Again')}
                                </button>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
}
