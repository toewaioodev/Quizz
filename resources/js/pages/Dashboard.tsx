import { Head, Link, usePage } from '@inertiajs/react';
import React from 'react';
import axios from 'axios';
import { SharedData } from '../types';
import Navbar from '../Components/Navbar';
import { useTranslation } from 'react-i18next'; // Assuming I want to translate things here too eventually, but for now just Navbar.

export default function Dashboard({ categoryCounts }: { categoryCounts: Record<string, number> }) {
    const { t, i18n } = useTranslation();
    const user = usePage<SharedData>().props.auth.user;
    const [showQuizModal, setShowQuizModal] = React.useState(false);
    const [currentCategory, setCurrentCategory] = React.useState<any>(null);
    const [currentQuestion, setCurrentQuestion] = React.useState<any>(null);
    const [quizResult, setQuizResult] = React.useState<any>(null);
    const [loadingQuestion, setLoadingQuestion] = React.useState(false);

    const startQuiz = (category: any) => {
        setCurrentCategory(category);
        setShowQuizModal(true);
        setQuizResult(null);
        fetchQuestion(category.id);
    };

    const fetchQuestion = async (catId: string) => {
        setLoadingQuestion(true);
        setQuizResult(null);
        try {
            const res = await axios.post('/quiz/generate', {
                topic: catId,
                difficulty: user.settings?.difficulty || 'medium', // Use user preference or default
                language: i18n.language // Pass current language
            });
            setCurrentQuestion(res.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoadingQuestion(false);
        }
    };

    const submitAnswer = async (option: string) => {
        if (quizResult || !currentQuestion) return;

        try {
            const res = await axios.post('/quiz/answer', {
                question_id: currentQuestion.id, // Assuming response includes ID, otherwise need to adjust Controller
                selected_option: option
            });
            setQuizResult(res.data);
            if (res.data.correct) {
                // Optimistic update or use returned points
                // For a real app, you might want to re-fetch user data or use a global state
            }
        } catch (e) {
            console.error(e);
        }
    };

    const categories = [
        { id: 'math', name: 'Mathematics', icon: '📐', color: 'from-blue-500 to-indigo-600', desc: 'Numbers, algebra, and geometry', image: '/images/math_bg.jpg' },
        { id: 'science', name: 'Science', icon: '🧬', color: 'from-green-500 to-emerald-600', desc: 'Physics, chemistry, and biology', image: '/images/science_bg.jpg' },
        { id: 'history', name: 'History', icon: '🏛️', color: 'from-orange-500 to-amber-600', desc: 'World events and civilizations', image: '/images/history_bg.jpg' },
        { id: 'geo', name: 'Geography', icon: '🌍', color: 'from-teal-500 to-cyan-600', desc: 'Countries, capitals, and maps', image: '/images/geo_bg.jpg' },
        { id: 'tech', name: 'Technology', icon: '💻', color: 'from-purple-500 to-violet-600', desc: 'Computers, coding, and innovations', image: '/images/tech_bg.jpg' },
        { id: 'arts', name: 'Arts & Lit', icon: '🎨', color: 'from-pink-500 to-rose-600', desc: 'Paintings, books, and culture', image: '/images/arts_bg.jpg' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-gray-100 transition-colors duration-300">
            <Head title="Dashboard" />

            {/* Header */}
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

                {/* Hero / Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="col-span-1 md:col-span-2 relative rounded-3xl overflow-hidden shadow-2xl min-h-[300px] flex flex-col justify-center group">
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img
                                src="/images/hero_bg.jpg"
                                alt="Battle Arena"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent"></div>
                        </div>

                        <div className="relative z-10 p-8">
                            <h2 className="text-4xl font-black mb-4 text-white uppercase tracking-tight italic">
                                {t('Ready to compete?')}
                            </h2>
                            <p className="text-gray-200 mb-8 max-w-lg text-lg font-medium leading-relaxed drop-shadow-md">
                                {t('Challenge players worldwide in real-time 1v1 battles. Climb the leaderboard and prove your knowledge.')}
                            </p>
                            <Link
                                href='/lobby'
                                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-black rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:from-indigo-500 hover:to-blue-500 transition-all transform hover:-translate-y-1 border border-indigo-400/20"
                            >
                                <span className="mr-3 text-xl">⚔️</span>
                                {t('Enter Battle Arena')}
                            </Link>
                        </div>
                    </div>

                    <div className="relative rounded-3xl shadow-xl flex flex-col justify-center overflow-hidden group border border-slate-200/50 dark:border-slate-700/50 min-h-[300px]">
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img
                                src="/images/rating_bg.jpg"
                                alt="Rating Background"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/80 to-slate-900/40"></div>
                        </div>

                        <div className="relative z-10 p-6">
                            <h3 className="text-blue-200 font-bold text-sm uppercase tracking-wider mb-4 border-b border-white/10 pb-2">{t('Your Rating')}</h3>
                            <div className="flex items-end space-x-3 mb-4">
                                <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500 filter drop-shadow-sm">{user.points || 0}</span>
                                <span className="text-yellow-400 font-bold mb-3 flex items-center text-sm">
                                    {t('PTS')}
                                </span>
                            </div>

                            <div className="flex items-center justify-between text-xs font-semibold mb-2 text-slate-300">
                                <span>{t('Win Rate')}</span>
                                <span>{Math.round((user.wins / (user.wins + user.losses || 1)) * 100)}%</span>
                            </div>
                            <div className="w-full bg-slate-700/50 rounded-full h-3 mb-6 overflow-hidden backdrop-blur-sm ring-1 ring-white/10">
                                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" style={{ width: `${(user.wins / (user.wins + user.losses || 1)) * 100}%` }}></div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/5 rounded-xl p-3 backdrop-blur-sm border border-white/5 text-center">
                                    <div className="text-green-400 font-black text-xl mb-1">{user.wins || 0}</div>
                                    <div className="text-xs text-slate-400 uppercase tracking-wide">{t('Wins')}</div>
                                </div>
                                <div className="bg-white/5 rounded-xl p-3 backdrop-blur-sm border border-white/5 text-center">
                                    <div className="text-red-400 font-black text-xl mb-1">{user.losses || 0}</div>
                                    <div className="text-xs text-slate-400 uppercase tracking-wide">{t('Losses')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Categories */}
                <div>
                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">{t('Explore Categories')}</span>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((cat) => (
                            <div key={cat.id} onClick={() => startQuiz(cat)} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer min-h-[220px] flex flex-col justify-end p-6 border border-slate-200/50 dark:border-slate-700/50">

                                {/* Card Background */}
                                <div className="absolute inset-0">
                                    <img
                                        src={cat.image}
                                        alt={cat.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
                                </div>

                                <div className="relative z-10">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-2xl mb-3 shadow-lg ring-2 ring-white/10`}>
                                        {cat.icon}
                                    </div>

                                    <h3 className="text-xl font-bold mb-1 text-white group-hover:text-blue-300 transition-colors">{t(cat.name)}</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-2">
                                        {t(cat.desc)}
                                    </p>

                                    <div className="flex justify-between items-center text-xs font-semibold text-slate-300 border-t border-white/10 pt-3">
                                        <span>{categoryCounts[cat.name] || 0} {t('Questions')}</span>
                                        <span className="flex items-center text-white bg-white/10 px-2 py-1 rounded-lg backdrop-blur-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                            {t('Start Quiz')}
                                            <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </main>

            {/* Quiz Modal */}
            {showQuizModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
                    <div className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden relative">
                        {/* Close Button */}
                        <button
                            onClick={() => setShowQuizModal(false)}
                            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>

                        <div className="p-8">
                            <div className="flex items-center space-x-3 mb-6">
                                <span className="text-3xl">{currentCategory?.icon}</span>
                                <h3 className="text-2xl font-bold">{currentCategory?.name} Quiz</h3>
                            </div>

                            {loadingQuestion ? (
                                <div className="py-12 flex justify-center">
                                    <div className="w-10 h-10 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
                                </div>
                            ) : currentQuestion ? (
                                <div className="space-y-6">
                                    <h4 className="text-xl font-semibold leading-relaxed">{currentQuestion.question_text}</h4>

                                    <div className="space-y-3">
                                        {currentQuestion.options.map((opt: string, idx: number) => {
                                            let btnClass = "w-full p-4 text-left rounded-xl border-2 transition-all font-medium ";
                                            if (quizResult) {
                                                if (opt === quizResult.correct_answer) btnClass += "bg-green-100 border-green-500 text-green-700 dark:bg-green-900/30 dark:text-green-400 ";
                                                else if (opt === quizResult.selected_option && !quizResult.correct) btnClass += "bg-red-100 border-red-500 text-red-700 dark:bg-red-900/30 dark:text-red-400 ";
                                                else btnClass += "border-slate-200 dark:border-slate-800 opacity-50 ";
                                            } else {
                                                btnClass += "border-slate-200 dark:border-slate-800 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 ";
                                            }

                                            return (
                                                <button
                                                    key={idx}
                                                    onClick={() => !quizResult && submitAnswer(opt)}
                                                    disabled={!!quizResult}
                                                    className={btnClass}
                                                >
                                                    {opt}
                                                </button>
                                            )
                                        })}
                                    </div>

                                    {quizResult && (
                                        <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between animate-in slide-in-from-bottom-2">
                                            <div className={`text-lg font-bold ${quizResult.correct ? 'text-green-500' : 'text-red-500'}`}>
                                                {quizResult.correct ? `${t('Correct!')} +${quizResult.points_earned} ${t('PTS')}` : t('Wrong Answer!')}
                                            </div>
                                            <button
                                                onClick={() => fetchQuestion(currentCategory.id)}
                                                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
                                            >
                                                {t('Next Question')}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="text-center text-red-400">{t('Failed to load question.')}</div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
