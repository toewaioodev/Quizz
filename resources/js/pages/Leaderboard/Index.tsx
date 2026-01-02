import { Head, Link, usePage } from '@inertiajs/react';
import { SharedData } from '../../types';
import { useTranslation } from 'react-i18next';
import Navbar from '../../Components/Navbar';

interface User {
    id: number;
    name: string;
    points: number;
    wins: number;
    losses: number;
}

export default function Leaderboard({ users }: { users: User[] }) {
    const { auth } = usePage<SharedData>().props;
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-gray-100 transition-colors duration-300">
            <Head title="Leaderboard" />
            <Navbar />

            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-50 dark:opacity-100">
                <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]" />
            </div>

            <div className="z-10 w-full max-w-2xl mx-auto p-6 space-y-8 mt-10">
                <div className="flex items-center justify-between">
                    <Link href="/lobby" className="flex items-center text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors gap-2 group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        {t('Back to Lobby')}
                    </Link>
                    <div className="flex items-center gap-4">
                        <h1 className="text-3xl font-bold tracking-tighter bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                            {t('Leaderboard')}
                        </h1>
                    </div>
                    <div className="w-20" /> {/* Spacer for centering */}
                </div>

                <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl shadow-xl overflow-hidden">
                    <div className="text-left text-xs font-bold text-slate-500 uppercase tracking-wider p-4 border-b border-slate-200 dark:border-white/5 grid grid-cols-12 gap-4">
                        <div className="col-span-1 text-center">#</div>
                        <div className="col-span-5">{t('Player')}</div>
                        <div className="col-span-2 text-center">{t('Points')}</div>
                        <div className="col-span-2 text-center">{t('W / L')}</div>
                        <div className="col-span-2 text-center">{t('Ratio')}</div>
                    </div>

                    <div className="divide-y divide-slate-100 dark:divide-white/5">
                        {users.map((user, index) => {
                            const isMe = user.id === auth.user.id;
                            const winRate = user.wins + user.losses > 0
                                ? Math.round((user.wins / (user.wins + user.losses)) * 100)
                                : 0;

                            return (
                                <div key={user.id} className={`grid grid-cols-12 gap-4 p-4 items-center transition-colors ${isMe ? 'bg-blue-50 dark:bg-blue-600/10 hover:bg-blue-100 dark:hover:bg-blue-600/20' : 'hover:bg-slate-50 dark:hover:bg-white/5'}`}>
                                    <div className="col-span-1 text-center font-bold text-slate-500 dark:text-slate-400">
                                        {index + 1}
                                    </div>
                                    <div className="col-span-5 flex items-center gap-3">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${index === 0 ? 'bg-yellow-400 text-black' :
                                            index === 1 ? 'bg-slate-300 dark:bg-slate-400 text-black' :
                                                index === 2 ? 'bg-orange-600 dark:bg-orange-700 text-white' :
                                                    'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                                            }`}>
                                            {user.name.charAt(0).toUpperCase()}
                                        </div>
                                        <span className={`font-medium ${isMe ? 'text-blue-600 dark:text-blue-400' : 'text-slate-800 dark:text-slate-200'}`}>
                                            {user.name} {isMe && '(You)'}
                                        </span>
                                    </div>
                                    <div className="col-span-2 text-center font-bold text-purple-600 dark:text-purple-400">
                                        {user.points}
                                    </div>
                                    <div className="col-span-2 text-center text-sm text-slate-500 dark:text-slate-400">
                                        <span className="text-green-600 dark:text-green-400">{user.wins}</span> - <span className="text-red-500 dark:text-red-400">{user.losses}</span>
                                    </div>
                                    <div className="col-span-2 text-center text-sm font-medium text-slate-500 dark:text-slate-400">
                                        {winRate}%
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {users.length === 0 && (
                        <div className="p-8 text-center text-slate-500">
                            {t('No active players yet.')}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
