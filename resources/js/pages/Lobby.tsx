import { Head, router, usePage, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { SharedData } from '../types';
import * as Ably from 'ably';
import { AblyProvider, ChannelProvider, useChannel } from 'ably/react';
import { useTranslation } from 'react-i18next';
import Navbar from '../Components/Navbar';

// Wrapper to provide Ably Context
export default function LobbyPage({ ably_key }: { ably_key: string }) {
    const user = usePage<SharedData>().props.auth.user;
    const client = new Ably.Realtime({ key: ably_key, clientId: String(user.id) });

    return (
        <AblyProvider client={client}>
            <ChannelProvider channelName="lobby">
                <Lobby />
            </ChannelProvider>
        </AblyProvider>
    );
}

function Lobby() {
    const { t } = useTranslation();
    const user = usePage<SharedData>().props.auth.user;
    const [searching, setSearching] = useState(false);

    const [activeUsers, setActiveUsers] = useState<any[]>([]);

    // Presence Logic
    const { channel } = useChannel('lobby');

    useEffect(() => {
        if (!channel) return;

        const updateMembers = async () => {
            try {
                const members = await channel.presence.get();
                // Deduplicate users
                const unique = Array.from(new Map(members.map((p: any) => [p.clientId, p])).values());
                setActiveUsers(unique);
            } catch (err) {
                console.error("Error fetching presence:", err);
            }
        };

        // Enter presence
        channel.presence.enter({ name: user.name, id: user.id });

        // Subscribe to changes
        channel.presence.subscribe('enter', updateMembers);
        channel.presence.subscribe('leave', updateMembers);
        channel.presence.subscribe('update', updateMembers);

        // Initial fetch
        updateMembers();

        return () => {
            channel.presence.leave();
            channel.presence.unsubscribe();
        };
    }, [channel, user.name, user.id]);

    const findMatch = () => {
        setSearching(true);
        axios.post('/match/find')
            .then(response => {
                const { match_id } = response.data;
                router.visit(`/arena/${match_id}`);
            })
            .catch(error => {
                console.error("Matchmaking failed:", error);
                setSearching(false);
            });
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center p-0 relative overflow-hidden transition-colors duration-300">
            <Head title="Battle Lobby" />
            <Navbar />

            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]" />
            </div>

            <div className="z-10 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-8 p-6">

                {/* Left Column: Actions */}
                <div className="space-y-8 text-center md:text-left">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold tracking-tighter bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            {t('Quiz Battle')}
                        </h1>
                        <p className="text-slate-400">{t('Compete in real-time 1v1 matches.')}</p>
                    </div>

                    <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl">
                        <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/5">
                            <div className="text-left">
                                <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">{t('My Rank')}</p>
                                <p className="text-2xl font-bold">{user.points || 0} {t('PTS')}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">{t('Record')}</p>
                                <p className="text-lg font-medium text-green-400">{user.wins || 0}W - {user.losses || 0}L</p>
                            </div>
                        </div>

                        <button
                            onClick={findMatch}
                            disabled={searching}
                            className="w-full relative group overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 p-[1px] transition-all hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <div className="relative flex items-center justify-center gap-3 bg-slate-950/50 group-hover:bg-transparent h-14 rounded-[11px] transition-colors">
                                {searching ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        <span className="font-semibold tracking-wide">{t('Finding Match...')}</span>
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                        <span className="font-semibold tracking-wide text-lg">{t('Find Match')}</span>
                                    </>
                                )}
                            </div>
                        </button>

                        <div className="mt-4 text-xs text-slate-500 text-center">
                            {t('Average wait time')}: &lt; 10s
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button className="p-4 rounded-xl bg-slate-900/50 border border-white/5 hover:border-white/20 transition-colors text-left group">
                            <div className="text-purple-400 mb-2 group-hover:scale-110 transition-transform origin-left">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                            </div>
                            <div className="font-semibold text-sm">{t('Practice Mode')}</div>
                        </button>
                        <Link href="/leaderboard" className="p-4 rounded-xl bg-slate-900/50 border border-white/5 hover:border-white/20 transition-colors text-left group">
                            <div className="text-blue-400 mb-2 group-hover:scale-110 transition-transform origin-left">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                            </div>
                            <div className="font-semibold text-sm">{t('Leaderboard')}</div>
                        </Link>
                    </div>
                </div>

                {/* Right Column: Active Players */}
                <div className="bg-slate-900/30 backdrop-blur-md border border-white/5 rounded-2xl p-6 h-full min-h-[400px]">
                    <h2 className="text-xl font-bold mb-4 flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                        {t('Active Players')} ({activeUsers.length})
                    </h2>

                    <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                        {activeUsers.map((p: any) => (
                            <div key={p.clientId} className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-teal-500 flex items-center justify-center font-bold text-sm shadow-sm">
                                    {p.data.name.charAt(0)}
                                </div>
                                <div className="flex-1">
                                    <p className="font-medium text-sm text-slate-200">{p.data.name}</p>
                                    <p className="text-xs text-slate-500">{t('Online')}</p>
                                </div>
                            </div>
                        ))}
                        {activeUsers.length === 0 && (
                            <div className="text-center text-slate-500 py-10">
                                {t('Connecting...')}
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
}
