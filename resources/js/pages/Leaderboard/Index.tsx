import { Podium } from '@/components/leaderboard/Podium';
import BottomNav from '@/components/BottomNav';
import { Head, usePage, Link } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import Navbar from '../../components/Navbar';
import { SharedData, User } from '../../types';

export default function Leaderboard({ users }: { users: User[] }) {
    const { auth } = usePage<SharedData>().props;
    const { t } = useTranslation();

    // Prepare data for Podium (Top 3)
    const podiumPlayers = users.slice(0, 3).map((user, index) => ({
        rank: index + 1,
        name: user.name,
        avatar: user.profile_photo_url || `https://ui-avatars.com/api/?name=${user.name}`,
        points: user.points,
        id: user.id,
        username: user.username,
    }));

    // Pad with placeholders if fewer than 3 players
    while (podiumPlayers.length < 3) {
        podiumPlayers.push({
            rank: podiumPlayers.length + 1,
            name: '---',
            avatar: '',
            points: 0
        });
    }

    return (
        <div className="min-h-screen font-sans text-slate-900 transition-colors duration-300 dark:text-gray-100 pb-24 md:pb-0 relative isolate">
            <Head title="Leaderboard" />
            <Navbar />

            {/* Background decoration */}
            <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] animate-pulse rounded-full bg-blue-200/40 dark:bg-blue-600/20 blur-[120px]" />
                <div className="absolute right-[-10%] bottom-[-10%] h-[600px] w-[600px] animate-pulse rounded-full bg-purple-200/40 dark:bg-purple-600/20 blur-[120px] delay-1000" />
                <div className="absolute top-[20%] left-[50%] h-[400px] w-[400px] -translate-x-1/2 animate-pulse rounded-full bg-indigo-200/30 dark:bg-indigo-500/10 blur-[100px] delay-500" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            </div>

            <main className="relative z-10 mx-auto max-w-lg px-4 pt-6 sm:max-w-2xl">
                <div className="mb-8 text-center">
                    <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-3xl font-black tracking-tight text-transparent dark:from-blue-400 dark:to-purple-400">
                        {t('Leaderboard')}
                    </h1>
                    <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                        {t('Top players competing for glory')}
                    </p>
                </div>

                {users.length > 0 && <Podium players={podiumPlayers} />}

                <div className="mt-8 overflow-hidden rounded-3xl bg-white/80 shadow-xl backdrop-blur-xl ring-1 ring-slate-900/5 dark:bg-slate-900/80 dark:ring-white/10">
                    <div className="grid grid-cols-12 border-b border-slate-100 bg-slate-50/50 px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-400 dark:border-white/5 dark:bg-white/5">
                        <div className="col-span-2 text-center">#</div>
                        <div className="col-span-6">{t('Player')}</div>
                        <div className="col-span-4 text-right">{t('Points')}</div>
                    </div>

                    <div className="divide-y divide-slate-100 dark:divide-white/5">
                        {users.map((user, index) => {
                            const isMe = user.id === auth.user.id;
                            const rank = index + 1;

                            // Skip top 3 in list if you want, OR keep them. 
                            // Usually showing everyone in the list is fine, or maybe start list from 4th place.
                            // Let's keep everyone for clarity, but maybe highlight top 3 differently?
                            // Actually, standard pattern often duplicates or starts list after podium.
                            // Let's show all for now, as users might barely be in top 3 and want to see themselves in list context.

                            return (
                                <div
                                    key={user.id}
                                    className={`group grid grid-cols-12 items-center gap-4 px-4 py-3 transition-all ${isMe
                                        ? 'bg-blue-50/80 hover:bg-blue-100 dark:bg-blue-500/10 dark:hover:bg-blue-500/20'
                                        : 'hover:bg-slate-50 dark:hover:bg-white/5'
                                        }`}
                                >
                                    <div className="col-span-2 flex justify-center">
                                        <div className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-black ${rank === 1 ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400' :
                                            rank === 2 ? 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300' :
                                                rank === 3 ? 'bg-orange-100 text-orange-800 dark:bg-orange-500/20 dark:text-orange-400' :
                                                    'text-slate-500 dark:text-slate-500'
                                            }`}>
                                            {rank}
                                        </div>
                                    </div>

                                    <Link href={`/u/${user.username || user.id}`} className="col-span-6 flex items-center gap-3 min-w-0 group-hover:opacity-80 transition-opacity">
                                        <img
                                            src={user.profile_photo_url || `https://ui-avatars.com/api/?name=${user.name}`}
                                            alt={user.name}
                                            className="h-9 w-9 rounded-full object-cover ring-2 ring-white dark:ring-slate-800"
                                        />
                                        <div className="truncate">
                                            <div className={`truncate text-sm font-bold ${isMe ? 'text-blue-600 dark:text-blue-400' : 'text-slate-900 dark:text-gray-200'}`}>
                                                {user.name} {isMe && <span className="ml-1 text-xs font-normal text-slate-400">({t('You')})</span>}
                                            </div>
                                            <div className="text-xs text-slate-500 dark:text-slate-400">
                                                {user.wins} {t('Wins')}
                                            </div>
                                        </div>
                                    </Link>

                                    <div className="col-span-4 text-right">
                                        <div className="font-black text-slate-900 dark:text-white">{user.points}</div>
                                        <div className="text-xs font-medium text-slate-400">PTS</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {users.length === 0 && (
                        <div className="py-12 text-center">
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400 dark:bg-slate-800">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">{t('No players yet')}</h3>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{t('Be the first to join the leaderboard!')}</p>
                        </div>
                    )}
                </div>
            </main>
            <BottomNav />
        </div>
    );
}
