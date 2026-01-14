import { Head, Link, router, usePage } from '@inertiajs/react';
import { ChannelProvider, useChannel } from 'ably/react';
import axios from 'axios';
import { memo, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
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
                    status: 'online',
                });
            });
    }, [channel, user, t]);

    return (
        <div className="relative flex min-h-screen flex-col items-center overflow-hidden bg-slate-950 font-sans text-white selection:bg-indigo-500 selection:text-white">
            <Head title="Battle Lobby" />
            <Navbar />

            {/* Ambient Background - Dynamic & Dark */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-[20%] -top-[20%] h-[800px] w-[800px] animate-pulse rounded-full bg-indigo-600/20 blur-[120px]" />
                <div className="absolute -bottom-[20%] -right-[20%] h-[800px] w-[800px] animate-pulse rounded-full bg-blue-600/20 blur-[120px] delay-1000" />
                <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            </div>

            <div className="z-10 mt-8 grid w-full max-w-6xl grid-cols-1 items-start gap-8 p-4 md:grid-cols-12 md:p-8">
                {/* Left Column: Actions (Span 7) */}
                <div className="flex flex-col gap-8 md:col-span-7">
                    <div className="space-y-2">
                        <h1 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-5xl font-black tracking-tighter text-transparent">
                            {t('Quiz Battle')}
                        </h1>
                        <p className="text-lg text-slate-400 max-w-md">{t('Compete in real-time 1v1 matches.')}</p>
                    </div>

                    <LobbyStats user={user} searching={searching} findMatch={findMatch} />
                    <LobbyActions />
                </div>

                {/* Right Column: Active Players (Span 5) */}
                <div className="h-full md:col-span-5">
                    <ActivePlayersList activeUsers={activeUsers} user={user} handleInvite={handleInvite} />
                </div>
            </div>
        </div>
    );
}

const LobbyStats = memo(({ user, searching, findMatch }: { user: any; searching: boolean; findMatch: () => void }) => {
    const { t } = useTranslation();
    const canPlay = (user.points || 0) >= 10;

    return (
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
            {/* Decorative Elements */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl"></div>

            <div className="relative z-10 mb-8 flex items-center justify-between">
                <div>
                    <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">{t('My Rank')}</p>
                    <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-black text-white">{user.points || 0}</span>
                        <span className="text-sm font-bold text-blue-400">PTS</span>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">{t('Record')}</p>
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
                <div className="relative flex h-16 w-full items-center justify-center gap-3 rounded-2xl bg-slate-900/90 backdrop-blur-sm transition-colors group-hover:bg-transparent">
                    {searching ? (
                        <>
                            <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                            <span className="font-bold tracking-wide text-white">{t('Finding Match...')}</span>
                        </>
                    ) : !canPlay ? (
                        <>
                            <svg className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            <span className="font-bold text-slate-400">{t('Need 10 Points')}</span>
                        </>
                    ) : (
                        <>
                            <span className="text-xl font-black tracking-wide text-white group-hover:text-white uppercase italic">{t('Find Match')}</span>
                            <svg className="h-6 w-6 text-indigo-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </>
                    )}
                </div>
            </button>
            <div className="mt-3 text-center">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/5 bg-white/5 px-3 py-1 text-[10px] font-medium text-slate-400">
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
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10"
            >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/20 text-purple-400 transition-colors group-hover:bg-purple-500 group-hover:text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <h3 className="font-bold text-white group-hover:text-purple-300 transition-colors">{t('Practice Mode')}</h3>
                <p className="mt-1 text-xs text-slate-400">{t('Hone your skills solo')}</p>
            </Link>

            <Link
                href="/leaderboard"
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10"
            >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-400 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <h3 className="font-bold text-white group-hover:text-blue-300 transition-colors">{t('Leaderboard')}</h3>
                <p className="mt-1 text-xs text-slate-400">{t('See top players')}</p>
            </Link>
        </div>
    );
});

const ActivePlayersList = memo(({ activeUsers, user, handleInvite }: { activeUsers: any[]; user: any; handleInvite: (id: number) => void }) => {
    const { t } = useTranslation();
    return (
        <div className="flex h-full min-h-[500px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-md">
            <div className="border-b border-white/5 p-6">
                <h2 className="flex items-center gap-3 text-lg font-bold text-white">
                    <span className="relative flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                    </span>
                    {t('Active Players')}
                    <span className="ml-auto rounded-full bg-white/10 px-2 py-0.5 text-xs text-slate-300">{activeUsers.length}</span>
                </h2>
            </div>

            <div className="custom-scrollbar flex-1 overflow-y-auto p-4 space-y-2">
                {activeUsers.length === 0 ? (
                    <div className="flex h-full flex-col items-center justify-center text-slate-500">
                        <div className="mb-4 rounded-full bg-white/5 p-4">
                            <svg className="h-8 w-8 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        </div>
                        <p>{t('No active players yet.')}</p>
                    </div>
                ) : (
                    activeUsers.map((p: any) => (
                        <div
                            key={p.id}
                            className={`group flex items-center gap-4 rounded-2xl border border-transparent p-3 transition-all hover:bg-white/5 ${p.id === user.id ? 'bg-white/5 border-white/5' : ''}`}
                        >
                            <div className="relative">
                                <img
                                    src={p.profile_photo_url || `https://ui-avatars.com/api/?name=${p.name}`}
                                    alt={p.name}
                                    className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10 transition-all group-hover:ring-white/30"
                                />
                                <div className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-slate-900 ${p.status === 'playing' ? 'bg-orange-500' :
                                        p.status === 'searching' ? 'bg-blue-500' :
                                            'bg-green-500'
                                    }`}></div>
                            </div>

                            <div className="flex-1 overflow-hidden">
                                <p className="truncate text-sm font-bold text-slate-200">
                                    {p.name}
                                    {p.id == user.id && <span className="ml-2 text-xs font-normal text-slate-500">({t('You')})</span>}
                                </p>
                                <p className="text-xs text-slate-500">
                                    {p.status === 'playing' ? t('In Match') : p.status === 'searching' ? t('Searching...') : t('Online')}
                                </p>
                            </div>

                            {p.id != user.id && p.status !== 'playing' && (
                                <button
                                    onClick={() => handleInvite(p.id)}
                                    className="rounded-xl bg-white/5 px-3 py-1.5 text-xs font-bold text-white transition-colors hover:bg-blue-600"
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
