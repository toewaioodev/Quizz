import { BottomNav } from '@/components/ui/BottomNav';
import { Head, Link, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next'; // Assuming I want to translate things here too eventually, but for now just Navbar.
import Navbar from '../components/Navbar';
import { SharedData } from '../types';

// ... imports

export default function Dashboard({ categoryCounts, rank }: { categoryCounts: Record<string, number>; rank: number }) {
    const { t } = useTranslation();
    const user = usePage<SharedData>().props.auth.user;

    const categories = [
        {
            id: 'math',
            name: 'Mathematics',
            icon: '📐',
            color: 'from-blue-500 to-indigo-600',
            desc: 'Numbers, algebra, and geometry',
            image: '/images/math_bg.jpg',
        },
        {
            id: 'science',
            name: 'Science',
            icon: '🧬',
            color: 'from-green-500 to-emerald-600',
            desc: 'Physics, chemistry, and biology',
            image: '/images/science_bg.jpg',
        },
        {
            id: 'history',
            name: 'History',
            icon: '🏛️',
            color: 'from-orange-500 to-amber-600',
            desc: 'World events and civilizations',
            image: '/images/history_bg.jpg',
        },
        {
            id: 'geo',
            name: 'Geography',
            icon: '🌍',
            color: 'from-teal-500 to-cyan-600',
            desc: 'Countries, capitals, and maps',
            image: '/images/geo_bg.jpg',
        },
        {
            id: 'tech',
            name: 'Technology',
            icon: '💻',
            color: 'from-purple-500 to-violet-600',
            desc: 'Computers, coding, and innovations',
            image: '/images/tech_bg.jpg',
        },
        {
            id: 'arts',
            name: 'Arts & Lit',
            icon: '🎨',
            color: 'from-pink-500 to-rose-600',
            desc: 'Paintings, books, and culture',
            image: '/images/arts_bg.jpg',
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-gray-100">
            <Head title="Dashboard" />

            {/* Header */}
            <Navbar />

            <main className="mx-auto max-w-7xl  px-4 py-10 sm:px-6 lg:px-8">
                {/* Hero / Stats Section */}
                {/* Background decoration */}

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-3xl border border-white/10 shadow-2xl transition-all hover:scale-[1.02] hover:shadow-indigo-500/20 dark:border-white/5">
                        {/* Background & Glass Effect */}
                        <div className="absolute inset-0 bg-slate-900">
                            {/* Animated Gradients */}
                            <div className="absolute -top-[50%] -right-[50%] h-[500px] w-[500px] rounded-full bg-indigo-500/30 blur-[100px] transition-all duration-1000 group-hover:bg-indigo-500/40" />
                            <div className="absolute -bottom-[50%] -left-[50%] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[100px] transition-all duration-1000 group-hover:bg-blue-500/30" />
                        </div>

                        {/* Glass Overlay */}
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />

                        <div className="relative z-10 flex h-full flex-col p-6 sm:p-8">

                            {/* Header: User Info & Rank */}
                            <div className="flex items-start justify-between">
                                <Link href="/profile" className="flex items-center gap-4 transition-opacity hover:opacity-80">
                                    <div className="relative">
                                        <div className="h-16 w-16 overflow-hidden rounded-full ring-4 ring-white/10 sm:h-20 sm:w-20">
                                            <img
                                                src={user.profile_photo_url}
                                                alt={user.name}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-white text-lg ring-4 ring-slate-900">
                                            ✨
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">{user.name}</h3>
                                        <p className="text-sm font-medium text-indigo-300 sm:text-base">Level {Math.floor(user.points / 100) + 1} Challenger</p>
                                    </div>
                                </Link>

                                <div className="text-right">
                                    <div className="text-xs font-bold tracking-wider text-indigo-200 uppercase sm:text-sm">{t('Global Rank')}</div>
                                    <div className="text-3xl font-black text-white sm:text-5xl">#{rank}</div>
                                </div>
                            </div>

                            {/* Main Stat: Points */}
                            <div className="mt-8 mb-6">
                                <div className="flex items-baseline gap-2">
                                    <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-5xl font-black tracking-tighter text-transparent sm:text-7xl">
                                        {user.points.toLocaleString()}
                                    </span>
                                    <span className="text-lg font-bold text-indigo-300 sm:text-2xl">PTS</span>
                                </div>
                                {/* Progress Bar to next level (mock calculation) */}
                                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
                                    <div
                                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-blue-400 shadow-[0_0_15px_rgba(99,102,241,0.6)]"
                                        style={{ width: `${(user.points % 100)}%` }}
                                    />
                                </div>
                                <div className="mt-1 text-right text-xs font-medium text-slate-400">
                                    {100 - (user.points % 100)} PTS to Level {Math.floor(user.points / 100) + 2}
                                </div>
                            </div>

                            {/* Footer Stats Grid */}
                            <div className="mt-auto grid grid-cols-2 gap-4">
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-colors hover:bg-white/10">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-white">{user.wins}</div>
                                            <div className="text-xs font-bold tracking-wide text-slate-400 uppercase">{t('Victories')}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-colors hover:bg-white/10">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-white">
                                                {Math.round((user.wins / (user.wins + user.losses || 1)) * 100)}%
                                            </div>
                                            <div className="text-xs font-bold tracking-wide text-slate-400 uppercase">{t('Win Rate')}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img
                                src="/images/rating_bg.jpg"
                                alt="Battle Arena"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent"></div>
                        </div>
                    </div>
                    <div className="group relative col-span-1 flex min-h-[300px] flex-col justify-center overflow-hidden rounded-3xl shadow-2xl md:col-span-2">
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img
                                src="/images/hero_bg.jpg"
                                alt="Battle Arena"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent"></div>
                        </div>

                        <div className="relative z-10 p-8">
                            <h2 className="mb-4 text-4xl font-black tracking-tight text-white uppercase italic">{t('Ready to compete?')}</h2>
                            <p className="mb-8 max-w-lg text-lg leading-relaxed font-medium text-gray-200 drop-shadow-md">
                                {t('Challenge players worldwide in real-time 1v1 battles. Climb the leaderboard and prove your knowledge.')}
                            </p>
                            <Link
                                href="/lobby"
                                className="inline-flex transform items-center rounded-xl border border-indigo-400/20 bg-gradient-to-r from-indigo-600 to-blue-600 px-8 py-4 font-black text-white shadow-lg shadow-indigo-500/30 transition-all hover:-translate-y-1 hover:from-indigo-500 hover:to-blue-500 hover:shadow-indigo-500/50"
                            >
                                <span className="mr-3 text-xl">⚔️</span>
                                {t('Enter Battle Arena')}
                            </Link>
                        </div>
                    </div>


                </div>

                {/* Categories */}
                <div>
                    <h2 className="mb-6 mt-6 flex items-center text-2xl font-bold">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{t('Explore Categories')}</span>
                    </h2>

                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {categories.map((cat) => (
                            <Link
                                key={cat.id}
                                href={`/quiz/category/${cat.id}`}
                                className="group relative flex min-h-[220px] transform cursor-pointer flex-col justify-end overflow-hidden rounded-2xl border border-slate-200/50 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-slate-700/50"
                            >
                                {/* Card Background */}
                                <div className="absolute inset-0">
                                    <img
                                        src={cat.image}
                                        alt={cat.name}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-90 transition-opacity group-hover:opacity-80"></div>
                                </div>

                                <div className="relative z-10">
                                    <div
                                        className={`h-12 w-12 rounded-xl bg-gradient-to-br ${cat.color} mb-3 flex items-center justify-center text-2xl shadow-lg ring-2 ring-white/10`}
                                    >
                                        {cat.icon}
                                    </div>

                                    <h3 className="mb-1 text-xl font-bold text-white transition-colors group-hover:text-blue-300">{t(cat.name)}</h3>
                                    <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-slate-300">{t(cat.desc)}</p>

                                    <div className="flex items-center justify-between border-t border-white/10 pt-3 text-xs font-semibold text-slate-300">
                                        <span>
                                            {categoryCounts[cat.name] || 0} {t('Questions')}
                                        </span>
                                        <span className="flex items-center rounded-lg bg-white/10 px-2 py-1 text-white backdrop-blur-sm transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                            {t('Start Quiz')}
                                            <svg
                                                className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                {/* <BottomNav /> */}
            </main>
        </div>
    );
}
