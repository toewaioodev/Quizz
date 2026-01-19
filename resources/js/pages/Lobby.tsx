import { Head, Link, router, usePage } from '@inertiajs/react';
import { ChannelProvider, useChannel } from 'ably/react';
import axios from 'axios';
import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDebounce } from '../hooks/useDebounce';
import BottomNav from '../components/BottomNav';
import Navbar from '../components/Navbar';
import { SharedData } from '../types';

// Wrapper to provide Ably Context
export default function Lobby() {
    return (
        <ChannelProvider channelName="global-presence">
            <LobbyContent />
        </ChannelProvider>
    );
}

function LobbyContent() {
    const { t } = useTranslation();
    const user = usePage<SharedData>().props.auth.user;
    const [searching, setSearching] = useState(false);
    const [activeUsers, setActiveUsers] = useState<any[]>([]);

    // Presence Logic
    const { channel } = useChannel('global-presence');

    useEffect(() => {
        if (!channel) return;

        const updateMembers = async () => {
            try {
                const members = await channel.presence.get();
                // Deduplicate users: Extract data immediately and filter out empty data
                const unique = Array.from(
                    new Map(
                        members
                            .filter((p: any) => p.data) // Filter out messages without data
                            .map((p: any) => [p.clientId, p.data]),
                    ).values(),
                );
                setActiveUsers(unique);
            } catch (err) {
                console.error('Error fetching presence:', err);
            }
        };

        // Subscribe to changes
        channel.presence.subscribe('enter', updateMembers);
        channel.presence.subscribe('leave', updateMembers);
        channel.presence.subscribe('update', updateMembers);

        // Initial fetch
        updateMembers();

        return () => {
            channel.presence.unsubscribe();
        };
    }, [channel]);

    const handleInvite = useCallback(
        (inviteeId: number) => {
            axios
                .post('/match/invite', { user_id: inviteeId })
                .then(() => {
                    alert(t('Invitation sent!'));
                })
                .catch((err) => {
                    console.error(err);
                    alert(t('Failed to send invitation.'));
                });
        },
        [t],
    );

    const findMatch = useCallback(() => {
        setSearching(true);
        channel.presence.update({
            name: user.name,
            id: user.id,
            profile_photo_url: user.profile_photo_url,
            username: user.username,
            status: 'searching',
        });

        axios
            .post('/match/find')
            .then((response) => {
                const { match_id } = response.data;
                router.visit(`/arena/${match_id}`);
            })
            .catch((error: any) => {
                console.error('Matchmaking failed:', error);
                if (error.response?.status === 403) {
                    alert(t(error.response.data.message));
                }
                setSearching(false);
                // Revert to online/idle
                channel.presence.update({
                    name: user.name,
                    id: user.id,
                    profile_photo_url: user.profile_photo_url,
                    username: user.username,
                    status: 'online',
                });
            });
    }, [channel, user, t]);

    return (
        <div className="relative flex min-h-screen flex-col items-center overflow-hidden font-sans text-slate-900 dark:text-white transition-colors duration-300 selection:bg-indigo-500 selection:text-white">
            <Head title="Battle Lobby" />

            {/* Background decoration */}
            {/* Background decoration */}
            <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] h-[600px] w-[600px] animate-pulse rounded-full bg-blue-200/40 dark:bg-blue-600/20 blur-[120px]" />
                <div className="absolute right-[-10%] bottom-[-10%] h-[600px] w-[600px] animate-pulse rounded-full bg-purple-200/40 dark:bg-purple-600/20 blur-[120px] delay-1000" />
                <div className="absolute top-[20%] left-[50%] h-[400px] w-[400px] -translate-x-1/2 animate-pulse rounded-full bg-indigo-200/30 dark:bg-indigo-500/10 blur-[100px] delay-500" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            </div>

            <Navbar />

            <div className="z-10 mt-8 grid w-full max-w-6xl grid-cols-1 items-start gap-8 p-4 md:grid-cols-12 md:p-8 pb-24">
                {/* Left Column: Actions (Span 7) */}
                <div className="flex flex-col gap-8 md:col-span-7">
                    <div className="space-y-2">
                        <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-5xl font-black tracking-tighter text-transparent">
                            {t('Quiz Battle')}
                        </h1>
                        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-md">{t('Compete in real-time 1v1 matches.')}</p>
                    </div>

                    <LobbyStats user={user} searching={searching} findMatch={findMatch} />
                    <LobbyActions />
                </div>

                {/* Right Column: Active Players (Span 5) */}
                <div className="h-full md:col-span-5">
                    <ActivePlayersList activeUsers={activeUsers} user={user} handleInvite={handleInvite} />
                </div>
            </div>

            <BottomNav />
        </div>
    );
}

const LobbyStats = memo(({ user, searching, findMatch }: { user: any; searching: boolean; findMatch: () => void }) => {
    const { t } = useTranslation();
    const canPlay = (user.points || 0) >= 10;

    return (
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 dark:border-white/10 dark:bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
            {/* Decorative Elements */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl"></div>

            <div className="relative z-10 mb-8 flex items-center justify-between">
                <div>
                    <p className="text-xs font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase">{t('My Rank')}</p>
                    <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-black text-slate-900 dark:text-white">{user.points || 0}</span>
                        <span className="text-sm font-bold text-blue-500 dark:text-blue-400">PTS</span>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-xs font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase">{t('Record')}</p>
                    <div className="flex items-center gap-2">
                        <span className="rounded bg-green-500/20 px-2 py-0.5 text-sm font-bold text-green-400">{user.wins || 0}W</span>
                        <span className="text-slate-600">/</span>
                        <span className="rounded bg-red-500/20 px-2 py-0.5 text-sm font-bold text-red-400">{user.losses || 0}L</span>
                    </div>
                </div>
            </div>

            <button
                onClick={findMatch}
                disabled={searching || !canPlay}
                className={`group relative w-full overflow-hidden rounded-2xl p-[1px] transition-all hover:scale-[1.01] active:scale-[0.99] ${!canPlay
                    ? 'cursor-not-allowed opacity-50 grayscale'
                    : 'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/20'
                    }`}
            >
                <div className="relative flex h-16 w-full items-center justify-center gap-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm transition-colors group-hover:bg-transparent">
                    {searching ? (
                        <>
                            <div className="h-5 w-5 animate-spin rounded-full border-2 border-slate-400 dark:border-white/30 border-t-blue-500 dark:border-t-white" />
                            <span className="font-bold tracking-wide text-slate-900 dark:text-white">{t('Finding Match...')}</span>
                        </>
                    ) : !canPlay ? (
                        <>
                            <svg className="h-5 w-5 text-red-500 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            <span className="font-bold text-slate-500 dark:text-slate-400">{t('Need 10 Points')}</span>
                        </>
                    ) : (
                        <>
                            <span className="text-xl font-black tracking-wide text-slate-900 dark:text-white group-hover:text-white uppercase italic">{t('Find Match')}</span>
                            <svg className="h-6 w-6 text-indigo-500 dark:text-indigo-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </>
                    )}
                </div>
            </button>
            <div className="mt-3 text-center">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/50 dark:border-white/5 dark:bg-white/5 px-3 py-1 text-[10px] font-medium text-slate-500 dark:text-slate-400">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                    </span>
                    {t('Average wait time')}: &lt; 10s
                </span>
            </div>
        </div>
    );
});

const LobbyActions = memo(() => {
    const { t } = useTranslation();
    return (
        <div className="grid grid-cols-2 gap-4 md:gap-6">
            <Link
                href="/"
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 dark:border-white/10 dark:bg-white/5 p-6 transition-all hover:bg-white dark:hover:bg-white/10"
            >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400 transition-colors group-hover:bg-purple-500 group-hover:text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-purple-500 dark:group-hover:text-purple-300 transition-colors">{t('Practice Mode')}</h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{t('Hone your skills solo')}</p>
            </Link>

            <Link
                href="/leaderboard"
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 dark:border-white/10 dark:bg-white/5 p-6 transition-all hover:bg-white dark:hover:bg-white/10"
            >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors">{t('Leaderboard')}</h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{t('See top players')}</p>
            </Link>
        </div>
    );
});

const ActivePlayersList = memo(({ activeUsers, user, handleInvite }: { activeUsers: any[]; user: any; handleInvite: (id: number) => void }) => {
    const { t } = useTranslation();
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 1000);
    const [searchResults, setSearchResults] = useState<any[] | null>(null);
    const [isSearchingAPI, setIsSearchingAPI] = useState(false);

    useEffect(() => {
        if (!debouncedSearchTerm) {
            setSearchResults(null);
            return;
        }

        setIsSearchingAPI(true);
        axios.get('/users/search', { params: { query: debouncedSearchTerm } })
            .then((res) => {
                setSearchResults(res.data);
            })
            .catch((err) => {
                console.error("Search failed", err);
                setSearchResults([]);
            })
            .finally(() => setIsSearchingAPI(false));
    }, [debouncedSearchTerm]);

    const displayUsers = useDebounce(useMemo(() => {
        if (!debouncedSearchTerm) {
            return activeUsers;
        }

        if (!searchResults) return [];

        return searchResults.map((user) => {
            // Check if this user is currently active (in Ably presence)
            const activeUser = activeUsers.find((u) => u.id === user.id);
            if (activeUser) {
                return { ...user, ...activeUser }; // Use active data (status, etc.)
            }
            return { ...user, status: 'offline' };
        });
    }, [debouncedSearchTerm, activeUsers, searchResults]), 50);

    return (
        <div className="flex h-full min-h-[500px] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white/60 dark:border-white/10 dark:bg-slate-900/50 backdrop-blur-md">
            <div className="border-b border-slate-200 dark:border-white/5 p-6">
                <h2 className="flex items-center gap-3 text-lg font-bold text-slate-900 dark:text-white">
                    <span className="relative flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                    </span>
                    {t('Active Players')}
                    <span className="ml-auto rounded-full bg-slate-100 dark:bg-white/10 px-2 py-0.5 text-xs text-slate-500 dark:text-slate-300">{activeUsers.length}</span>
                </h2>

                {/* Search Input */}
                <div className="mt-4 relative">
                    <input
                        type="text"
                        placeholder={t('Search players...')}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/5 px-4 py-2 pl-10 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-blue-500 focus:ring-0"
                    />
                    <svg className="absolute left-3 top-2.5 h-4 w-4 text-slate-400 dark:text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>

            <div className="custom-scrollbar flex-1 overflow-y-auto p-4 space-y-2">
                {isSearchingAPI ? (
                    <div className="flex justify-center p-4">
                        <div className="h-6 w-6 animate-spin rounded-full border-2 border-slate-200 dark:border-white/30 border-t-blue-500"></div>
                    </div>
                ) : displayUsers.length === 0 ? (
                    <div className="flex h-full flex-col items-center justify-center text-slate-500">
                        {searchTerm ? (
                            <p>{t('No players found.')}</p>
                        ) : (
                            <>
                                <div className="mb-4 rounded-full bg-white/5 p-4">
                                    <svg className="h-8 w-8 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                </div>
                                <p>{t('No active players yet.')}</p>
                            </>
                        )}
                    </div>
                ) : (
                    displayUsers.map((p: any) => (
                        <div
                            key={p.id}
                            className={`group flex items-center gap-4 rounded-2xl border border-transparent p-3 transition-all hover:bg-slate-100 dark:hover:bg-white/5 ${p.id === user.id ? 'bg-slate-100 border-slate-200 dark:bg-white/5 dark:border-white/5' : ''}`}
                        >
                            <Link href={`/u/${p.username || p.id}`} className="flex flex-1 items-center gap-4 min-w-0">
                                <div className="relative">
                                    <img
                                        src={p.profile_photo_url || `https://ui-avatars.com/api/?name=${p.name}`}
                                        alt={p.name}
                                        className="h-10 w-10 rounded-full object-cover ring-2 ring-slate-200 dark:ring-white/10 transition-all group-hover:ring-slate-300 dark:group-hover:ring-white/30"
                                    />
                                    <div className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white dark:border-slate-900 ${p.status === 'playing' ? 'bg-orange-500' :
                                        p.status === 'searching' ? 'bg-blue-500' :
                                            p.status === 'online' ? 'bg-green-500' : 'bg-slate-500'
                                        }`}></div>
                                </div>

                                <div className="flex-1 overflow-hidden">
                                    <p className="truncate text-sm font-bold text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                                        {p.name}
                                        {p.username && <span className="ml-1 text-xs font-normal text-slate-400">@{p.username}</span>}
                                        {p.id == user.id && <span className="ml-2 text-xs font-normal text-slate-500">({t('You')})</span>}
                                    </p>
                                    <p className="text-xs text-slate-500">
                                        {p.status === 'playing' ? t('In Match') : p.status === 'searching' ? t('Searching...') : p.status === 'online' ? t('Online') : t('Offline')}
                                    </p>
                                </div>
                            </Link>

                            {p.id != user.id && p.status !== 'playing' && (
                                <button
                                    onClick={() => handleInvite(p.id)}
                                    className="rounded-xl bg-slate-100 dark:bg-white/5 px-3 py-1.5 text-xs font-bold text-slate-700 dark:text-white transition-colors hover:bg-blue-600 hover:text-white"
                                >
                                    {t('Invite')}
                                </button>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
});
