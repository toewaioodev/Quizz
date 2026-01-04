import { Head, Link, usePage } from '@inertiajs/react';
import axios from 'axios';
import React from 'react';
import { useTranslation } from 'react-i18next'; // Assuming I want to translate things here too eventually, but for now just Navbar.
import Navbar from '../Components/Navbar';
import { SharedData } from '../types';

// ... imports

export default function Dashboard({ categoryCounts }: { categoryCounts: Record<string, number> }) {
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

            <main className="mx-auto max-w-7xl space-y-12 px-4 py-10 sm:px-6 lg:px-8">
                {/* Hero / Stats Section */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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

                    <div className="group relative flex min-h-[300px] flex-col justify-center overflow-hidden rounded-3xl border border-slate-200/50 shadow-xl dark:border-slate-700/50">
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img
                                src="/images/rating_bg.jpg"
                                alt="Rating Background"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/80 to-slate-900/40"></div>
                        </div>

                        <div className="relative z-10 p-6">
                            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-2">
                                <h3 className="text-sm font-bold tracking-wider text-blue-200 uppercase">{t('Your Rating')}</h3>

                                <div className="flex flex-col items-center space-x-2 text-center">
                                    <img
                                        src={user.profile_photo_url}
                                        alt={user.name}
                                        className="h-10 w-10 rounded-full object-cover ring-2 ring-white/20"
                                    />
                                    <span className="mt-1 block text-sm font-medium text-white">{user.name}</span>
                                </div>
                            </div>

                            <div className="mb-4 flex items-end space-x-3">
                                <span className="bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-6xl font-black text-transparent drop-shadow-sm filter">
                                    {user.points || 0}
                                </span>
                                <span className="mb-3 flex items-center text-sm font-bold text-yellow-400">{t('PTS')}</span>
                            </div>

                            <div className="mb-2 flex items-center justify-between text-xs font-semibold text-slate-300">
                                <span>{t('Win Rate')}</span>
                                <span>{Math.round((user.wins / (user.wins + user.losses || 1)) * 100)}%</span>
                            </div>
                            <div className="mb-6 h-3 w-full overflow-hidden rounded-full bg-slate-700/50 ring-1 ring-white/10 backdrop-blur-sm">
                                <div
                                    className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                                    style={{ width: `${(user.wins / (user.wins + user.losses || 1)) * 100}%` }}
                                ></div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="rounded-xl border border-white/5 bg-white/5 p-3 text-center backdrop-blur-sm">
                                    <div className="mb-1 text-xl font-black text-green-400">{user.wins || 0}</div>
                                    <div className="text-xs tracking-wide text-slate-400 uppercase">{t('Wins')}</div>
                                </div>
                                <div className="rounded-xl border border-white/5 bg-white/5 p-3 text-center backdrop-blur-sm">
                                    <div className="mb-1 text-xl font-black text-red-400">{user.losses || 0}</div>
                                    <div className="text-xs tracking-wide text-slate-400 uppercase">{t('Losses')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Categories */}
                <div>
                    <h2 className="mb-6 flex items-center text-2xl font-bold">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{t('Explore Categories')}</span>
                    </h2>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
            </main>
        </div>
    );
}
