import { Head, useForm, usePage } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../../components/Navbar';
import { SharedData } from '../../types';

interface MatchHistory {
    id: number;
    opponent: {
        name: string;
        avatar: string;
    } | null;
    result: string;
    date: string;
    score: string;
}

interface UserStats {
    total_games: number;
    wins: number;
    losses: number;
    points: number;
}

export default function Profile({ status, history, stats }: { status?: string, history?: MatchHistory[], stats?: UserStats }) {
    const { t } = useTranslation();
    const user = usePage<SharedData>().props.auth.user;
    const [activeTab, setActiveTab] = useState<'activity' | 'settings'>('activity');

    const { data, setData, post, processing, recentlySuccessful, errors } = useForm({
        _method: 'PATCH',
        settings: {
            difficulty: user.settings?.difficulty || 'medium',
        },
        photo_url: user.profile_photo_path || '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/profile');
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-gray-100">
            <Head title="Profile" />
            <Navbar />

            <div className="relative pb-20">
                {/* Hero / Header Section */}
                <div className="relative overflow-hidden bg-white pb-10 pt-24 shadow-sm dark:bg-slate-900">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl opacity-50 dark:from-indigo-500/20 dark:via-purple-500/20 dark:to-pink-500/20" />

                    <div className="relative mx-auto flex max-w-lg flex-col items-center px-4 text-center">
                        <div className="relative mb-4">
                            <div className="absolute -inset-1 animate-pulse rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-75 blur dark:opacity-100"></div>
                            <img
                                className="relative h-24 w-24 rounded-full border-4 border-white object-cover shadow-xl dark:border-slate-800"
                                src={data.photo_url || user.profile_photo_url || `https://ui-avatars.com/api/?name=${user.name}`}
                                alt={user.name}
                            />
                            <div className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white shadow-lg ring-2 ring-white dark:ring-slate-900">
                                {Math.floor((user.points || 0) / 100) + 1}
                            </div>
                        </div>

                        <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">{user.name}</h1>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{user.email}</p>

                        <div className="mt-6 flex w-full max-w-xs items-center justify-center rounded-xl bg-slate-100 p-1 dark:bg-slate-800/50">
                            <button
                                onClick={() => setActiveTab('activity')}
                                className={`flex-1 rounded-lg py-2 text-sm font-bold transition-all ${activeTab === 'activity'
                                        ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white'
                                        : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
                                    }`}
                            >
                                {t('Activity')}
                            </button>
                            <button
                                onClick={() => setActiveTab('settings')}
                                className={`flex-1 rounded-lg py-2 text-sm font-bold transition-all ${activeTab === 'settings'
                                        ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white'
                                        : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
                                    }`}
                            >
                                {t('Settings')}
                            </button>
                        </div>
                    </div>
                </div>

                <main className="mx-auto max-w-lg px-4 pt-6">
                    <AnimatePresence mode="wait">
                        {activeTab === 'activity' ? (
                            <motion.div
                                key="activity"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="space-y-6"
                            >
                                {/* Bento Stats */}
                                {stats && (
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="col-span-2 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 p-5 text-white shadow-lg shadow-blue-500/20">
                                            <div className="text-xs font-bold uppercase tracking-wider text-blue-100">{t('Total Points')}</div>
                                            <div className="mt-1 flex items-baseline gap-2">
                                                <span className="text-4xl font-black">{stats.points}</span>
                                                <span className="text-sm font-medium text-blue-200">pts</span>
                                            </div>
                                        </div>
                                        <div className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-800">
                                            <div className="text-xs font-bold uppercase text-slate-400">{t('Wins')}</div>
                                            <div className="mt-1 text-2xl font-black text-green-500">{stats.wins}</div>
                                        </div>
                                        <div className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-800">
                                            <div className="text-xs font-bold uppercase text-slate-400">{t('Losses')}</div>
                                            <div className="mt-1 text-2xl font-black text-red-500">{stats.losses}</div>
                                        </div>
                                        <div className="col-span-2 rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-800">
                                            <div className="flex items-center justify-between">
                                                <div className="text-xs font-bold uppercase text-slate-400">{t('Win Rate')}</div>
                                                <div className="text-xl font-black text-slate-800 dark:text-white">
                                                    {stats.total_games > 0
                                                        ? Math.round((stats.wins / stats.total_games) * 100)
                                                        : 0}%
                                                </div>
                                            </div>
                                            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
                                                <div
                                                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                                                    style={{ width: `${stats.total_games > 0 ? (stats.wins / stats.total_games) * 100 : 0}%` }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Recent History */}
                                <div className="space-y-4">
                                    <h3 className="px-1 text-sm font-bold uppercase tracking-wider text-slate-400">{t('Recent Matches')}</h3>

                                    {history && history.length > 0 ? (
                                        <div className="space-y-3">
                                            {history.map((match) => (
                                                <div key={match.id} className="flex items-center gap-4 rounded-2xl bg-white p-3 shadow-sm transition-transform active:scale-[0.98] dark:bg-slate-800">
                                                    <div className="relative shrink-0">
                                                        <img
                                                            className="h-10 w-10 rounded-full bg-slate-100 object-cover dark:bg-slate-700"
                                                            src={match.opponent?.avatar || `https://ui-avatars.com/api/?name=${match.opponent?.name || '?'}`}
                                                            alt=""
                                                        />
                                                        <div className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white dark:border-slate-800 ${match.result === 'win' ? 'bg-green-500' :
                                                                match.result === 'loss' ? 'bg-red-500' : 'bg-slate-400'
                                                            }`} />
                                                    </div>

                                                    <div className="min-w-0 flex-1">
                                                        <div className="truncate font-bold text-slate-900 dark:text-white">
                                                            {match.opponent?.name || t('Unknown Opponent')}
                                                        </div>
                                                        <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                                                            {match.date}
                                                        </div>
                                                    </div>

                                                    <div className="text-right">
                                                        <div className={`font-black ${match.result === 'win' ? 'text-green-500' :
                                                                match.result === 'loss' ? 'text-red-500' : 'text-slate-500'
                                                            }`}>
                                                            {match.result === 'win' ? 'WON' : match.result === 'loss' ? 'LOST' : 'DRAW'}
                                                        </div>
                                                        <div className="text-xs font-bold text-slate-400 dark:text-slate-500">
                                                            {match.score}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="rounded-2xl border-2 border-dashed border-slate-200 p-8 text-center dark:border-slate-700">
                                            <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-400 dark:bg-slate-800">
                                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <p className="font-medium text-slate-500 dark:text-slate-400">{t('No matches played yet')}</p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="settings"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <form onSubmit={submit} className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-800">
                                    <div className="space-y-6">
                                        <div className="relative">
                                            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">{t('Profile Photo')}</label>
                                            <div className="flex items-center gap-4">
                                                <img
                                                    className="h-14 w-14 rounded-full border border-slate-200 dark:border-slate-700"
                                                    src={data.photo_url || user.profile_photo_url || `https://ui-avatars.com/api/?name=${user.name}`}
                                                    alt={user.name}
                                                />
                                                <div className="flex-1">
                                                    <input
                                                        type="url"
                                                        className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium transition-colors focus:border-blue-500 focus:ring-0 dark:border-slate-700 dark:bg-slate-900/50 dark:text-white"
                                                        value={data.photo_url}
                                                        onChange={(e) => setData('photo_url', e.target.value)}
                                                        placeholder="https://..."
                                                    />
                                                </div>
                                            </div>
                                            {errors.photo_url && <div className="mt-1 text-xs text-red-500">{errors.photo_url}</div>}
                                        </div>

                                        <div className="grid gap-5">
                                            <div>
                                                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">{t('Display Name')}</label>
                                                <div className="w-full rounded-xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700 dark:bg-slate-900/50 dark:text-slate-300">
                                                    {user.name}
                                                </div>
                                            </div>

                                            <div>
                                                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">{t('Email Address')}</label>
                                                <div className="w-full rounded-xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700 dark:bg-slate-900/50 dark:text-slate-300">
                                                    {user.email}
                                                </div>
                                            </div>

                                            <div>
                                                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">{t('Quiz Difficulty')}</label>
                                                <div className="relative">
                                                    <select
                                                        className="w-full appearance-none rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-900 transition-colors focus:border-blue-500 focus:ring-0 dark:border-slate-700 dark:bg-slate-900/50 dark:text-white"
                                                        value={data.settings.difficulty}
                                                        onChange={(e) => setData('settings', { ...data.settings, difficulty: e.target.value })}
                                                    >
                                                        <option value="easy">{t('Easy')}</option>
                                                        <option value="medium">{t('Medium')}</option>
                                                        <option value="hard">{t('Hard')}</option>
                                                    </select>
                                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <p className="mt-2 text-xs text-slate-400">
                                                    {t('Default difficulty for single player quizzes.')}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="pt-2">
                                            <button
                                                type="submit"
                                                disabled={processing}
                                                className="flex w-full items-center justify-center rounded-xl bg-slate-900 py-3.5 text-sm font-bold text-white shadow-lg transition-transform active:scale-[0.98] disabled:opacity-50 dark:bg-white dark:text-slate-900"
                                            >
                                                {processing ? (
                                                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-400 border-t-white" />
                                                ) : (
                                                    t('Save Changes')
                                                )}
                                            </button>

                                            <AnimatePresence>
                                                {recentlySuccessful && (
                                                    <motion.p
                                                        initial={{ opacity: 0, y: 5 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0 }}
                                                        className="mt-3 text-center text-xs font-medium text-green-500"
                                                    >
                                                        {t('Settings saved successfully!')}
                                                    </motion.p>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </form>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
}
