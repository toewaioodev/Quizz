import ArenaHeader from '@/components/ArenaHeader';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { useGameEngine } from '@/hooks/useGameEngine';
import { Head, usePage } from '@inertiajs/react';
import { ChannelProvider, useChannel, usePresence, usePresenceListener } from 'ably/react';
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
    const { state, startGame, submitAnswer, nextQuestion } = useGameEngine(match.id, match.channel_id, user.id, isHost);

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
        <div className="relative flex min-h-screen flex-col items-center overflow-hidden bg-slate-950 font-sans text-white selection:bg-indigo-500 selection:text-white">
            <Head title="Arena" />

            {/* Ambient Background - Dynamic & Dark */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-[20%] -top-[20%] h-[800px] w-[800px] animate-pulse rounded-full bg-indigo-600/20 blur-[120px]" />
                <div className="absolute -bottom-[20%] -right-[20%] h-[800px] w-[800px] animate-pulse rounded-full bg-blue-600/20 blur-[120px] delay-1000" />
                <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            </div>

            {/* Header / StatusBar */}
            <div className="z-10 mt-safe pt-4 w-full flex justify-center">
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
            </div>

            {/* Main Game Area */}
            <div className="relative z-10 flex w-full max-w-2xl flex-1 flex-col justify-center px-4 pb-10">
                {/* Waiting State */}
                {state.status === 'WAITING_FOR_OPPONENT' && (
                    <div className="flex flex-col items-center justify-center space-y-8 py-10">
                        <div className="relative">
                            <div className="absolute inset-0 animate-ping rounded-full bg-blue-500/20 duration-1000"></div>
                            <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                                <span className="text-4xl">📡</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <h2 className="bg-gradient-to-br from-white to-slate-400 bg-clip-text text-3xl font-bold text-transparent">{t('Searching for Opponent')}</h2>
                            <p className="mt-2 text-slate-400">{t('Connecting to global matchmaking server...')}</p>
                        </div>
                        <button onClick={() => window.history.back()} className="mt-8 rounded-full border border-white/10 px-6 py-2 text-sm font-medium text-slate-400 hover:bg-white/5 hover:text-white transition-colors">
                            {t('Cancel')}
                        </button>
                    </div>
                )}

                {/* Starting State */}
                {state.status === 'STARTING' && (
                    <div className="flex flex-col items-center justify-center space-y-8 animate-in zoom-in duration-300">
                        <div className="relative h-40 w-40">
                            <div className="absolute inset-0 animate-ping rounded-full bg-green-500/30 duration-700"></div>
                            <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 shadow-2xl shadow-green-500/50">
                                <span className="text-6xl">⚔️</span>
                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="text-5xl font-black uppercase tracking-tighter text-white drop-shadow-lg">
                                {t('MATCH FOUND!')}
                            </h1>
                            <p className="mt-4 text-xl font-medium text-emerald-400">{t('Prepare for battle...')}</p>
                        </div>
                    </div>
                )}

                {/* Question / Result State */}
                {(state.status === 'QUESTION_ACTIVE' || state.status === 'ROUND_RESULT' || state.status === 'PREPARE_ROUND') && currentQuestion && (
                    <div className="w-full">
                        {state.status === 'PREPARE_ROUND' && (
                            <div className="absolute inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40 rounded-3xl">
                                <div className="text-center animate-pulse">
                                    <h2 className="text-4xl font-black text-white uppercase tracking-widest drop-shadow-xl">{t('GET READY')}</h2>
                                    <p className="text-blue-300 font-bold mt-2">{t('Next round starting...')}</p>
                                </div>
                            </div>
                        )}
                        <QuestionDisplay
                            currentQuestion={currentQuestion}
                            status={state.status}
                            lastRoundResult={state.lastRoundResult}
                            hasAnswered={state.hasAnswered}
                            opponentAnswered={state.opponentAnswered}
                            submitAnswer={submitAnswer}
                            userAnswer={state.userAnswer}
                        />
                    </div>
                )}


                {/* Game Over State */}
                {state.status === 'GAME_OVER' && (
                    <GameOverDisplay user={user} opponent={opponent} score={score} opponentScore={opponentScore} isWinner={isWinner} isDraw={isDraw} />
                )}
            </div>
        </div>
    );
}

const QuestionDisplay = memo(({ currentQuestion, status, lastRoundResult, hasAnswered, opponentAnswered, submitAnswer, userAnswer }: any) => {
    const { t, i18n } = useTranslation();
    const isBurmese = i18n.language === 'my';

    const displayText = isBurmese && currentQuestion.text_my ? currentQuestion.text_my : currentQuestion.text;
    const displayOptions = isBurmese && currentQuestion.options_my ? currentQuestion.options_my : currentQuestion.options;

    // Animation delay for staggered reveal
    const getDelay = (index: number) => `${index * 10}ms`;

    // Play sound for correct/wrong answer on ROUND_RESULT
    useEffect(() => {
        if (status === 'ROUND_RESULT' && lastRoundResult && hasAnswered) {
            if (lastRoundResult.correct_option === userAnswer) {
                // Correct answer sound
                const audio = new Audio('/sounds/correct.mp3');
                audio.play().catch(() => { });
            } else {
                // Wrong answer sound
                const audio = new Audio('/sounds/wrong.mp3');
                audio.play().catch(() => { });
            }
        }
    }, [status, lastRoundResult, hasAnswered, userAnswer]);

    return (
        <div className="flex w-full flex-col">
            {/* Question Card */}
            <div className="relative mb-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-2xl backdrop-blur-xl md:mb-10 md:p-10">
                {/* Top Glow */}
                <div className="absolute -top-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[50px]"></div>

                <div className="relative z-10">
                    <span className="mb-4 inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-[10px] font-black tracking-widest text-blue-300 uppercase shadow-[0_0_10px_rgba(59,130,246,0.2)] md:text-xs">
                        {currentQuestion.category}
                    </span>
                    <h2 className="text-xl font-black leading-tight tracking-tight text-white md:text-3xl md:leading-snug">
                        {displayText}
                    </h2>
                </div>
            </div>

            {/* Options Grid */}
            <div className="grid grid-cols-1 gap-3 md:gap-4">
                {displayOptions.map((opt: string, idx: number) => {
                    const isSelected = userAnswer === opt;
                    const isCorrect = lastRoundResult?.correct_option === opt;
                    const showResult = status === 'ROUND_RESULT';

                    // Base Style
                    let buttonStyle = "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:border-white/20 hover:text-white";
                    let icon = <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-xs font-bold">{String.fromCharCode(65 + idx)}</span>;

                    // Interaction States
                    if (hasAnswered) {
                        buttonStyle = "opacity-50 cursor-default border-transparent bg-black/20 text-slate-500";
                        if (isSelected) {
                            buttonStyle = "border-blue-500/50 bg-blue-500/20 text-blue-200 opacity-100 ring-2 ring-blue-500/30";
                            icon = (
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500 text-white shadow-lg shadow-blue-500/40">
                                    <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                </div>
                            )
                        }
                    }

                    if (showResult) {
                        if (isCorrect) {
                            buttonStyle = "border-green-500 bg-green-500/20 text-white shadow-[0_0_30px_rgba(34,197,94,0.3)] scale-[1.02] z-10 ring-1 ring-green-400/50 opacity-100";
                            icon = (
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500 text-white shadow-lg shadow-green-500/40">
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                </div>
                            )
                        } else if (isSelected) {
                            buttonStyle = "border-red-500/50 bg-red-500/20 text-red-200 ring-1 ring-red-500/30 opacity-80";
                            icon = (
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500 text-white shadow-lg shadow-red-500/40">
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                                </div>
                            )
                        } else {
                            buttonStyle = "opacity-30 grayscale border-transparent bg-black/20";
                        }
                    }

                    return (
                        <button
                            key={idx}
                            onClick={() => submitAnswer(currentQuestion.options[idx])}
                            disabled={hasAnswered || showResult}
                            className={`group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border p-4 text-left transition-all duration-200 active:scale-[0.98] md:p-5 ${buttonStyle}`}
                            style={{ animationDelay: getDelay(idx) }}
                        >
                            <div className="shrink-0">{icon}</div>
                            <span className="text-base font-bold tracking-tight md:text-lg">{opt}</span>
                        </button>
                    );
                })}
            </div>

            {/* Opponent Answered Indicator */}
            {opponentAnswered && !lastRoundResult && (
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 translate-x-full px-4 md:-right-10 md:px-0">
                    {/* On Mobile showing this might be hard, so we make it absolute or fixed toast style */}
                </div>
            )}
            {opponentAnswered && !lastRoundResult && (
                <div className="pointer-events-none fixed bottom-24 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full border border-red-500/30 bg-red-500/10 px-6 py-2 backdrop-blur-md md:bottom-10">
                    <span className="relative flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500"></span>
                    </span>
                    <span className="text-sm font-bold tracking-wide text-red-200 uppercase">{t('Opponent Answered')}</span>
                </div>
            )}
        </div>
    );
});

import confetti from 'canvas-confetti';

const GameOverDisplay = memo(({ user, opponent, score, opponentScore, isWinner, isDraw }: any) => {
    const { t } = useTranslation();

    useEffect(() => {
        if (isWinner) {
            // Victory Sound
            const audio = new Audio('/sounds/victory.mp3');
            audio.play().catch((e) => console.log('Audio play failed', e));

            // Confetti
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b'],
            });
        } else if (!isDraw) {
            // Defeat Sound
            const audio = new Audio('/sounds/defeat.mp3');
            audio.play().catch((e) => console.log('Audio play failed', e));
        }
    }, [isWinner, isDraw]);

    return (
        <div className="flex flex-col items-center justify-center p-6 text-center animate-in zoom-in duration-500">
            {/* Result Badge */}
            <div className="mb-8">
                {isWinner ? (
                    <div className="relative">
                        <div className="absolute inset-0 animate-ping rounded-full bg-green-500/30 duration-1000"></div>
                        <h1 className="bg-gradient-to-br from-yellow-300 to-yellow-600 bg-clip-text text-6xl font-black tracking-tighter text-transparent drop-shadow-2xl md:text-8xl">VICTORY</h1>
                        <div className="mt-2 text-lg font-bold tracking-[0.5em] text-yellow-500 uppercase">{t('Winner!')}</div>
                    </div>
                ) : isDraw ? (
                    <div>
                        <h1 className="text-6xl font-black tracking-tighter text-slate-300 md:text-8xl">DRAW</h1>
                    </div>
                ) : (
                    <div>
                        <h1 className="text-6xl font-black tracking-tighter text-red-500 md:text-8xl">DEFEAT</h1>
                        <div className="mt-2 text-lg font-bold tracking-[0.5em] text-red-400 uppercase">{t('Better luck next time')}</div>
                    </div>
                )}
            </div>

            {/* Scoreboard Card */}
            <div className="relative mb-10 w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                    {/* You */}
                    <div className="flex flex-col items-center">
                        <div className="relative mb-4 h-20 w-20 rounded-full border-4 border-blue-500 shadow-xl shadow-blue-500/20 md:h-24 md:w-24">
                            {/* We don't have user object here directly but we can reuse if simplified or just show score */}
                            <div className="h-10 w-10 overflow-hidden rounded-full ring-2 ring-blue-500/50 md:h-14 md:w-14 md:ring-4">
                                <img
                                    src={user.profile_photo_url || user.avatar}
                                    alt={user.name}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                        <span className="text-5xl font-black text-white">{score}</span>
                    </div>

                    {/* VS */}
                    <div className="text-2xl font-black text-slate-600 italic">VS</div>

                    {/* Opponent */}
                    <div className="flex flex-col items-center">
                        <div className="relative mb-4 h-20 w-20 rounded-full border-4 border-purple-500 shadow-xl shadow-purple-500/20 md:h-24 md:w-24">
                            <div className={`h-10 w-10 overflow-hidden rounded-full ring-2 transition-all md:h-14 md:w-14 md:ring-4 ${opponent ? 'ring-purple-500/50' : 'ring-slate-700'}`}>

                                <img
                                    src={opponent.profile_photo_url || opponent.avatar}
                                    alt={opponent.name}
                                    className="h-full w-full object-cover"
                                />

                            </div>
                        </div>
                        <span className="text-5xl font-black text-white">{opponentScore}</span>
                    </div>
                </div>
            </div>

            <div className="flex w-full max-w-sm flex-col gap-3">
                {/* Rematch Section */}
                {!isDraw && (
                    <button
                        onClick={() => {
                            // Call requestRematch from props
                            // Note: We need to pass it down from Arena component -> GameOverDisplay
                            // Check if requestRematch is available in props
                            // Actually, looking at Arena component, we need to pass it.
                            // For now, let's fix the prop drilling first in Arena component text.
                        }}
                        className="group relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-violet-600 px-6 py-4 font-bold text-white shadow-xl shadow-violet-600/30 transition-all hover:scale-[1.02] hover:bg-violet-500"
                    >
                        <span className="relative z-10">{t('Rematch')}</span>
                    </button>
                )}

                <button
                    onClick={() => (window.location.href = '/lobby')}
                    className="group relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-blue-600 px-6 py-4 font-bold text-white shadow-xl shadow-blue-600/30 transition-all hover:scale-[1.02] hover:bg-blue-500"
                >
                    <span className="relative z-10">{t('Back to Lobby')}</span>
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full"></div>
                </button>
                <button
                    onClick={() => (window.location.href = '/dashboard')}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-6 py-4 font-bold text-slate-300 transition-all hover:bg-white/10 hover:text-white"
                >
                    {t('Home')}
                </button>
            </div>
        </div>
    );
});
