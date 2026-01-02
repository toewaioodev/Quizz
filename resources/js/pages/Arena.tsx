import * as Ably from 'ably';
import { AblyProvider, ChannelProvider, usePresence, usePresenceListener } from 'ably/react';

import ThemeSwitcher from '@/Components/ThemeSwitcher';
import { Head, usePage } from '@inertiajs/react';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SharedData } from '../types';
import { useGameEngine } from '@/hooks/useGameEngine';

// Wrapper to provide Ably Context
export default function ArenaPage({ match, ably_key }: { match: any; ably_key: string }) {
    const user = usePage<SharedData>().props.auth.user;
    const client = useMemo(() => new Ably.Realtime({ key: ably_key, clientId: String(user.id) }), [ably_key, user.id]);

    return (
        <AblyProvider client={client}>
            <ChannelProvider channelName={`match:${match.channel_id}`}>
                <Arena match={match} />
            </ChannelProvider>
        </AblyProvider>
    );
}

function Arena({ match }: { match: any }) {
    const user = usePage<SharedData>().props.auth.user;
    const { t } = useTranslation();

    // Determine initial opponent (if P2 joins, P1 is opponent)
    // We prefer the state.opponent (from realtime events) if available, 
    // otherwise fallback to prop (initial load for P2) or null (initial load for P1)
    const initialOpponent = match.player1_id === user.id ? match.player2 : match.player1;

    // We don't need local state for opponent if we derive it from props + hook state
    // But to keep it simple, let's derive it.

    const isHost = match.player1_id === user.id;

    // Use Game Engine Hook
    const { state, startGame, submitAnswer, nextQuestion } = useGameEngine(
        match.id,
        match.channel_id,
        user.id,
        isHost
    );

    // Effective Opponent
    const opponent = state.opponent || initialOpponent;

    // Presence Logic for "Opponent Online" status
    usePresence(`match:${match.channel_id}`);
    const { presenceData } = usePresenceListener(`match:${match.channel_id}`);
    const [opponentPresent, setOpponentPresent] = useState(false);

    useEffect(() => {
        const isOpponentHere = presenceData.some((p: any) => p.clientId === String(opponent?.id));
        setOpponentPresent(isOpponentHere);
    }, [presenceData, opponent]);


    // Derived UI State
    const timer = state.timer;
    const currentQuestion = state.currentQuestion;
    const score = state.playerScores[match.player1_id === user.id ? 'p1' : 'p2'];
    const opponentScore = state.playerScores[match.player1_id === user.id ? 'p2' : 'p1'];

    const isWinner = state.winnerId === user.id;
    const isDraw = state.status === 'GAME_OVER' && !state.winnerId;

    return (
        <div className="relative flex min-h-screen flex-col items-center overflow-hidden bg-slate-50 font-sans text-slate-900 transition-colors duration-300 selection:bg-blue-500 selection:text-white dark:bg-slate-950 dark:text-white">
            <Head title="Arena" />

            <div className="absolute top-4 right-4 z-50 hidden md:block">
                <ThemeSwitcher />
            </div>

            {/* Ambient Background */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] animate-pulse rounded-full bg-blue-500/20 blur-[100px]" />
                <div className="absolute right-[-10%] bottom-[-10%] h-[500px] w-[500px] animate-pulse rounded-full bg-purple-500/20 blur-[100px] delay-700" />
            </div>

            {/* Header / StatusBar */}
            <div className="sticky top-0 z-10 mx-auto flex w-full max-w-6xl flex-row items-center justify-between border-b border-slate-200 bg-white/50 p-4 backdrop-blur-sm md:static md:border-none md:bg-transparent dark:border-white/5 dark:bg-black/20">
                {/* Player 1 (You) */}
                <div className={`flex items-center gap-3 transition-all duration-300 ${score > opponentScore ? 'scale-105' : 'scale-100'}`}>
                    <div className="relative">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-blue-500 to-blue-700 text-lg font-bold text-white shadow-lg shadow-blue-500/30 md:h-16 md:w-16 md:text-xl dark:border-slate-800 overflow-hidden">
                            <img src={user.profile_photo_url} alt={user.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -right-1 -bottom-1 rounded-full border border-white bg-slate-900 px-1.5 py-0.5 text-[10px] font-bold text-white md:text-xs dark:border-slate-800">
                            YOU
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="max-w-[80px] truncate text-sm font-bold md:max-w-[150px] md:text-lg">{user.name}</span>
                        <span className="text-xl leading-none font-black text-blue-600 md:text-3xl dark:text-blue-400">{score}</span>
                    </div>
                </div>

                {/* VS / Timer Centerpiece */}
                <div className="flex flex-col items-center">
                    {state.status === 'QUESTION_ACTIVE' || state.status === 'ROUND_RESULT' ? (
                        <div
                            className={`relative flex h-16 w-16 items-center justify-center rounded-full border-4 shadow-xl transition-all duration-300 md:h-20 md:w-20 ${timer <= 5 ? 'scale-110 border-red-500 bg-red-500/10' : 'border-white bg-white dark:border-slate-700 dark:bg-slate-800'}`}
                        >
                            <span className={`text-2xl font-black md:text-4xl ${timer <= 5 ? 'text-red-500' : 'text-slate-800 dark:text-white'}`}>
                                {timer}
                            </span>
                            <svg className="pointer-events-none absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100">
                                <circle
                                    className="stroke-current text-slate-200 opacity-20 dark:text-slate-700"
                                    strokeWidth="8"
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="transparent"
                                />
                                <circle
                                    className={`stroke-current transition-all duration-1000 ease-linear ${timer <= 5 ? 'text-red-500' : 'text-blue-500'}`}
                                    strokeWidth="8"
                                    strokeLinecap="round"
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="transparent"
                                    strokeDasharray="251.2"
                                    strokeDashoffset={251.2 - (251.2 * timer) / 15}
                                />
                            </svg>
                        </div>
                    ) : (
                        <div className="text-2xl font-black text-slate-300 italic md:text-4xl dark:text-slate-700">
                            {state.status === 'STARTING' ? 'VS' : state.status === 'WAITING_FOR_OPPONENT' ? t('WAITING') : ''}
                        </div>
                    )}
                    <div className="mt-1 text-[10px] font-bold tracking-widest text-slate-400 uppercase md:text-xs">
                        {currentQuestion ? `${t('Round')} ${currentQuestion.round_index}/5` : ''}
                    </div>
                </div>

                {/* Player 2 (Opponent) */}
                <div
                    className={`flex flex-row-reverse items-center gap-3 text-right transition-all duration-300 ${opponentScore > score ? 'scale-105' : 'scale-100'}`}
                >
                    <div className="relative">
                        <div
                            className={`flex h-12 w-12 items-center justify-center rounded-full border-2 border-white text-lg font-bold text-white shadow-lg md:h-16 md:w-16 md:text-xl dark:border-slate-800 overflow-hidden ${opponent ? 'bg-gradient-to-br from-red-500 to-red-700 shadow-red-500/30' : 'animate-pulse bg-slate-300 dark:bg-slate-800'}`}
                        >
                            {opponent ? (
                                <img src={opponent.profile_photo_url || `https://ui-avatars.com/api/?name=${opponent.name}&color=7F9CF5&background=EBF4FF`} alt={opponent.name} className="w-full h-full object-cover" />
                            ) : '?'}
                        </div>
                        {/* Presence Dot */}
                        {opponent && (
                            <div
                                className={`absolute -bottom-0 -left-0 h-4 w-4 rounded-full border-2 border-white dark:border-slate-800 ${opponentPresent ? 'bg-green-500' : 'bg-gray-400'}`}
                            />
                        )}
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="max-w-[80px] truncate text-sm font-bold md:max-w-[150px] md:text-lg">
                            {opponent ? opponent.name : t('...')}
                        </span>
                        <span className="text-xl leading-none font-black text-red-500 md:text-3xl dark:text-red-400">{opponentScore}</span>
                    </div>
                </div>
            </div>

            {/* Main Game Area */}
            <div className="z-10 flex w-full max-w-4xl flex-1 flex-col justify-center p-2 md:p-4">
                <div className="relative flex min-h-[400px] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white/80 shadow-2xl backdrop-blur-xl transition-all duration-500 md:min-h-[500px] dark:border-white/10 dark:bg-slate-900/60">

                    {/* Waiting State */}
                    {state.status === 'WAITING_FOR_OPPONENT' && (
                        <div className="animate-in fade-in md:p6 flex flex-1 flex-col items-center justify-center space-y-8 p-4 text-center duration-700 md:p-6">
                            <div className="relative">
                                <div className="h-24 w-24 rounded-full border-4 border-slate-200 dark:border-slate-800" />
                                <div className="absolute inset-0 h-24 w-24 animate-spin rounded-full border-t-4 border-blue-500" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold md:text-3xl">{t('Searching for Opponent')}</h2>
                                <p className="mt-2 text-slate-500 dark:text-slate-400">{t('Connecting to global matchmaking server...')}</p>
                            </div>
                        </div>
                    )}

                    {/* Starting State */}
                    {state.status === 'STARTING' && (
                        <div className="animate-in zoom-in flex flex-1 flex-col items-center justify-center space-y-6 p-8 text-center duration-500">
                            <div className="mb-4 text-6xl md:text-8xl">⚔️</div>
                            <h1 className="animate-bounce bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-black text-transparent md:text-6xl dark:from-blue-400 dark:to-purple-500">
                                {t('MATCH FOUND!')}
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-slate-300">{t('Get Ready...')}</p>
                        </div>
                    )}

                    {/* Question / Result State */}
                    {(state.status === 'QUESTION_ACTIVE' || state.status === 'ROUND_RESULT') && currentQuestion && (
                        <div className="animate-in slide-in-from-bottom-8 flex flex-1 flex-col space-y-8 p-6 duration-500 md:p-10">
                            <div className="space-y-4 text-center">
                                <span className="inline-block rounded-full border border-blue-200 bg-blue-100 px-4 py-1.5 text-xs font-bold tracking-widest text-blue-600 uppercase dark:border-blue-500/20 dark:bg-blue-900/30 dark:text-blue-400">
                                    {currentQuestion.category}
                                </span>
                                <h2 className="text-2xl leading-tight font-bold text-slate-800 md:text-4xl md:leading-tight dark:text-slate-100">
                                    {currentQuestion.text}
                                </h2>
                            </div>

                            <div className="mt-auto grid w-full grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
                                {currentQuestion.options.map((opt, idx) => {
                                    // Visual Logic
                                    const isSelected = false; // We don't verify selection visually here anymore unless we track it locally
                                    const isCorrect = state.lastRoundResult?.correct_option === opt;
                                    const showResult = state.status === 'ROUND_RESULT';

                                    let btnClass = 'border-slate-200 bg-white text-slate-700 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200';

                                    if (state.hasAnswered) {
                                        // Optimistic selection state could be added here
                                        // For now, if answered, we just disable and show neutral
                                        btnClass = 'border-transparent bg-slate-100 text-slate-400 opacity-50 dark:bg-slate-800/50';
                                    }

                                    if (showResult) {
                                        if (isCorrect) {
                                            btnClass = 'scale-[1.02] border-green-600 bg-green-500 text-white shadow-lg shadow-green-500/20 opacity-100';
                                        }
                                    }

                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => submitAnswer(opt)}
                                            disabled={state.hasAnswered || showResult}
                                            className={`group relative rounded-2xl border-2 p-4 text-left transition-all duration-200 md:p-6 ${btnClass}`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <span
                                                    className={`flex h-8 w-8 items-center justify-center rounded-lg border text-sm font-bold ${showResult && isCorrect ? 'border-white/40 bg-white/20 text-white' : 'border-slate-200 bg-slate-100 text-slate-500 dark:border-slate-600 dark:bg-slate-700'}`}
                                                >
                                                    {String.fromCharCode(65 + idx)}
                                                </span>
                                                <span className="text-lg font-semibold">{opt}</span>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Opponent Answered Indicator */}
                            {state.opponentAnswered && !state.lastRoundResult && (
                                <div className="text-center text-sm font-bold text-red-500 animate-pulse">
                                    {t('Opponent has answered!')}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Game Over State */}
                    {state.status === 'GAME_OVER' && (
                        <div className="animate-in zoom-in flex flex-1 flex-col items-center justify-center space-y-8 p-8 text-center duration-500">
                            <h1 className="text-4xl font-black tracking-tight text-slate-900 uppercase md:text-6xl dark:text-white">
                                {t('GAME OVER')}
                            </h1>

                            <div className="flex w-full items-end justify-center gap-8 md:gap-16">
                                {/* Result Avatars similar to before */}
                                <div className="flex flex-col items-center">
                                    <div className="text-5xl font-black">{score}</div>
                                    <div className="text-sm">YOU</div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="text-5xl font-black">{opponentScore}</div>
                                    <div className="text-sm">OPPONENT</div>
                                </div>
                            </div>

                            <div className="pt-8 text-3xl font-bold">
                                {isWinner ? <span className="text-green-500">VICTORY!</span> : isDraw ? <span className="text-yellow-500">DRAW</span> : <span className="text-red-500">DEFEAT</span>}
                            </div>

                            <button
                                onClick={() => (window.location.href = '/dashboard')}
                                className="rounded-2xl bg-slate-900 px-8 py-4 font-bold text-white shadow-xl hover:scale-105 dark:bg-white dark:text-slate-900"
                            >
                                {t('Back to Dashboard')}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
