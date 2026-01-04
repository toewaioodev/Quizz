import ArenaHeader from '@/Components/ArenaHeader';
import ThemeSwitcher from '@/Components/ThemeSwitcher';
import { useGameEngine } from '@/hooks/useGameEngine';
import { Head, usePage } from '@inertiajs/react';
import { AblyProvider, ChannelProvider, useChannel, usePresence, usePresenceListener } from 'ably/react';
import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SharedData } from '../types';

// Wrapper to provide Ably Context
export default function ArenaPage({ match, ably_key }: { match: any; ably_key: string }) {
    // We use the global Ably client provided by GlobalAblyProvider
    return (
        <ChannelProvider channelName={`match:${match.channel_id}`}>
            <ChannelProvider channelName="global-presence">
                <Arena match={match} />
            </ChannelProvider>
        </ChannelProvider>
    );
}

function Arena({ match }: { match: any }) {
    const user = usePage<SharedData>().props.auth.user;
    const { t } = useTranslation();

    // Determine initial opponent (if P2 joins, P1 is opponent)
    // We prefer the state.opponent (from realtime events) if available, 
    // otherwise fallback to prop (initial load for P2) or null (initial load for P1)
    const initialOpponent = match.player1_id === user.id ? match.player2 : match.player1;

    const isHost = Number(match.player1_id) === Number(user.id);

    // Use Game Engine Hook
    const { state, startGame, submitAnswer, nextQuestion } = useGameEngine(
        match.id,
        match.channel_id,
        user.id,
        isHost
    );

    // Effective Opponent
    const opponent = state.opponent || initialOpponent;

    // Presence Logic for "Opponent Online" status in the match channel
    usePresence(`match:${match.channel_id}`);
    const { presenceData } = usePresenceListener(`match:${match.channel_id}`);
    const [opponentPresent, setOpponentPresent] = useState(false);

    useEffect(() => {
        const isOpponentHere = presenceData.some((p: any) => p.clientId === String(opponent?.id));
        setOpponentPresent(isOpponentHere);
    }, [presenceData, opponent]);

    // Handle Global Presence Status (Playing)
    const { channel: globalChannel } = useChannel('global-presence');

    useEffect(() => {
        if (globalChannel) {
            // Update status to playing
            globalChannel.presence.update({
                name: user.name,
                id: user.id,
                profile_photo_url: user.profile_photo_url,
                status: 'playing',
            });

            return () => {
                // Revert to online when leaving arena
                globalChannel.presence.update({
                    name: user.name,
                    id: user.id,
                    profile_photo_url: user.profile_photo_url,
                    status: 'online',
                });
            };
        }
    }, [globalChannel, user]);


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
            <ArenaHeader
                user={user}
                opponent={opponent}
                score={score}
                opponentScore={opponentScore}
                timer={timer}
                currentQuestionIndex={currentQuestion?.round_index}
                status={state.status}
                opponentPresent={opponentPresent}
            />

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
                        <QuestionDisplay
                            currentQuestion={currentQuestion}
                            status={state.status}
                            lastRoundResult={state.lastRoundResult}
                            hasAnswered={state.hasAnswered}
                            opponentAnswered={state.opponentAnswered}
                            submitAnswer={submitAnswer}
                            userAnswer={state.userAnswer}
                        />
                    )}

                    {/* Game Over State */}
                    {state.status === 'GAME_OVER' && (
                        <GameOverDisplay
                            score={score}
                            opponentScore={opponentScore}
                            isWinner={isWinner}
                            isDraw={isDraw}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

const QuestionDisplay = memo(({ currentQuestion, status, lastRoundResult, hasAnswered, opponentAnswered, submitAnswer, userAnswer }: any) => {
    const { t } = useTranslation();

    // Animation delay for staggered reveal
    const getDelay = (index: number) => `${index * 100}ms`;

    return (
        <div className="flex flex-1 flex-col p-4 md:p-8 w-full max-w-4xl mx-auto">
            {/* Question Card */}
            <div className="relative mb-8 overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-1 shadow-lg backdrop-blur-md dark:from-indigo-500/5 dark:to-purple-500/5">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x"></div>
                <div className="relative rounded-xl bg-white/50 p-6 text-center dark:bg-slate-900/50 md:p-10">
                    <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1 text-xs font-bold tracking-widest text-blue-700 uppercase dark:bg-blue-900/30 dark:text-blue-300">
                        {currentQuestion.category}
                    </span>
                    <h2 className="text-2xl font-black tracking-tight text-slate-800 md:text-4xl md:leading-snug dark:text-slate-100">
                        {currentQuestion.text}
                    </h2>
                </div>
            </div>

            {/* Options Grid */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                {currentQuestion.options.map((opt: string, idx: number) => {
                    const isSelected = userAnswer === opt;
                    const isCorrect = lastRoundResult?.correct_option === opt;
                    const showResult = status === 'ROUND_RESULT';

                    let buttonStyle = "border-slate-200 bg-white/80 text-slate-700 hover:border-blue-400 hover:bg-blue-50/50 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:bg-blue-900/20";
                    let icon = <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-current opacity-70 text-sm font-bold transition-all group-hover:bg-current group-hover:text-white group-hover:border-transparent">{String.fromCharCode(65 + idx)}</span>;

                    if (hasAnswered) {
                        buttonStyle = "border-slate-200 bg-slate-50 text-slate-400 cursor-default dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-600";
                        if (isSelected) {
                            buttonStyle = "border-blue-500 bg-blue-100/50 text-blue-700 dark:border-blue-500 dark:bg-blue-900/30 dark:text-blue-300";
                            icon = <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500 text-white"><svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div>;
                        }
                    }

                    if (showResult) {
                        if (isCorrect) {
                            buttonStyle = "border-green-500 bg-green-100 text-green-800 shadow-[0_0_20px_rgba(34,197,94,0.3)] scale-[1.02] z-10 dark:border-green-500 dark:bg-green-900/30 dark:text-green-300";
                            icon = <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500 text-white"><svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg></div>;
                        } else if (isSelected) {
                            buttonStyle = "border-red-500 bg-red-100 text-red-800 opacity-80 dark:border-red-500 dark:bg-red-900/30 dark:text-red-300";
                            icon = <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500 text-white"><svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg></div>;
                        } else {
                            buttonStyle = "grayscale opacity-50 border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50";
                        }
                    }

                    return (
                        <button
                            key={idx}
                            onClick={() => submitAnswer(opt)}
                            disabled={hasAnswered || showResult}
                            className={`group relative flex items-center gap-4 overflow-hidden rounded-2xl border-2 p-5 text-left transition-all duration-300 shadow-sm ${buttonStyle}`}
                            style={{ animationDelay: getDelay(idx) }}
                        >
                            <div className="shrink-0">{icon}</div>
                            <span className="text-lg font-bold tracking-tight md:text-xl">{opt}</span>

                            {/* Hover Gradient Effect */}
                            {!hasAnswered && !showResult && (
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]"></div>
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Opponent Answered Indicator */}
            {opponentAnswered && !lastRoundResult && (
                <div className="mt-8 flex justify-center">
                    <div className="flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-bold text-red-600 animate-pulse dark:bg-red-900/30 dark:text-red-400">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                        </span>
                        {t('Opponent has answered!')}
                    </div>
                </div>
            )}
        </div>
    );
});

import confetti from 'canvas-confetti';

const GameOverDisplay = memo(({ score, opponentScore, isWinner, isDraw }: any) => {
    const { t } = useTranslation();

    useEffect(() => {
        if (isWinner) {
            // Victory Sound
            const audio = new Audio('/sounds/victory.mp3');
            audio.play().catch(e => console.log("Audio play failed", e));

            // Confetti
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b']
            });
        } else if (!isDraw) {
            // Defeat Sound
            const audio = new Audio('/sounds/defeat.mp3');
            audio.play().catch(e => console.log("Audio play failed", e));
        }
    }, [isWinner, isDraw]);

    return (
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
    );
});
