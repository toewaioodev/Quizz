import * as Ably from 'ably';
import { AblyProvider, ChannelProvider, useChannel, useConnectionStateListener } from 'ably/react';

import { useEffect, useState } from 'react';
import { Head, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { SharedData } from '../types';

// Game Interfaces
interface Option {
    text: string;
}

interface Question {
    category: string;
    question_text: string;
    options: string[];
    correct_answer: string;
}

interface Message {
    name?: string;
    data?: any;
    clientId?: string;
    timestamp?: number;
}

// Wrapper to provide Ably Context
export default function ArenaPage({ match, ably_key }: { match: any, ably_key: string }) {
    const user = usePage<SharedData>().props.auth.user;
    const client = new Ably.Realtime({ key: ably_key, clientId: String(user.id) });

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
    const [gameState, setGameState] = useState<'waiting' | 'starting' | 'question' | 'result'>('waiting');
    const [messages, setMessages] = useState<Message[]>([]);
    const [opponent, setOpponent] = useState(match.player1_id === user.id ? match.player2 : match.player1);

    // Game Logic State
    const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
    const [timer, setTimer] = useState(5);
    const [score, setScore] = useState(0);
    const [opponentScore, setOpponentScore] = useState(0);
    const [hasAnswered, setHasAnswered] = useState(false);
    const [opponentAnswered, setOpponentAnswered] = useState(false);

    const [questionCount, setQuestionCount] = useState(0);

    // Ably Channel Logic
    const { t, i18n } = useTranslation();
    const { channel } = useChannel(`match:${match.channel_id}`, (message) => {
        if (message.name === 'match-found') {
            setGameState('starting');
            if (message.data.opponent) {
                setOpponent(message.data.opponent);
            }
            setTimeout(() => startGame(), 3000);
        } else if (message.name === 'new-question') {
            setCurrentQuestion(message.data);
            setTimer(15);
            setHasAnswered(false);
            setOpponentAnswered(false);
            setGameState('question');
            setQuestionCount(prev => prev + 1);
        } else if (message.name === 'score-update') {
            if (message.clientId !== String(user.id)) {
                setOpponentScore(prev => prev + message.data.points);
            }
        } else if (message.name === 'player-answered') {
            if (message.clientId !== String(user.id)) {
                setOpponentAnswered(true);
            }
        } else if (message.name === 'game-over') {
            setGameState('result');
        }
        setMessages(prev => [...prev, message]);
    });

    useConnectionStateListener((stateChange) => {
        console.log('Ably connection state:', stateChange.current);
    });

    // Start Game - Only Player 1 needs to trigger this usually, or Server side.
    const isPlayer1 = match.player1_id === user.id;

    const startGame = async () => {
        if (isPlayer1) {
            await fetchNextQuestion();
        }
    };

    const fetchNextQuestion = async () => {
        if (questionCount >= 5) {
            endGame();
            return;
        }

        try {
            const res = await axios.post('/quiz/generate', {
                topic: 'Science',
                difficulty: 'medium',
                language: i18n.language
            });
            channel.publish('new-question', res.data);
        } catch (e) {
            console.error("Quiz Error", e);
        }
    };

    const endGame = async () => {
        channel.publish('game-over', {});

        // Calculate winner
        // Note: Using current state might be slightly desynced if opponent update is pending,
        // but broadly accurate for MVP. Ideally server decides based on match state.
        let winnerId = null;
        if (score > opponentScore) winnerId = user.id;
        else if (opponentScore > score) winnerId = opponent.id;

        // Only Player 1 calls the endpoint to avoid double submission
        if (isPlayer1) {
            try {
                await axios.post('/match/end', {
                    match_id: match.id,
                    winner_id: winnerId
                });
            } catch (e) {
                console.error("End Match Error", e);
            }
        }
    };

    // Timer Effect
    useEffect(() => {
        let interval: any;
        if (gameState === 'question' && timer > 0) {
            interval = setInterval(() => setTimer(t => t - 1), 1000);
        } else if (gameState === 'question' && timer === 0) {
            // Time up! Move to next question or end.
            if (isPlayer1) fetchNextQuestion();
        }
        return () => clearInterval(interval);
    }, [gameState, timer, isPlayer1]);

    // Fast Forward Effect
    useEffect(() => {
        if (gameState === 'question' && hasAnswered && opponentAnswered && isPlayer1) {
            // Small delay to let users see their selection feedback
            const timeout = setTimeout(() => {
                fetchNextQuestion();
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [gameState, hasAnswered, opponentAnswered, isPlayer1]);

    const handleAnswer = (option: any) => {
        if (hasAnswered) return;
        setHasAnswered(true);
        channel.publish('player-answered', {});

        if (option === currentQuestion?.correct_answer) {
            const points = timer * 10;
            setScore(s => s + points);
            channel.publish('score-update', { points });
        }
    };

    return (
        <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center font-sans selection:bg-blue-500 selection:text-white">
            <Head title="Arena" />

            <div className="max-w-4xl w-full flex justify-between items-center mb-12">
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold mb-2 shadow-[0_0_30px_rgba(37,99,235,0.6)] border-2 border-blue-400">
                        {user.name.charAt(0)}
                    </div>
                    <span className="font-bold text-lg">{user.name}</span>
                    <span className="text-4xl font-black text-blue-400 mt-2">{score}</span>
                </div>

                <div className="flex flex-col items-center">
                    <div className="text-6xl font-black italic tracking-tighter text-slate-800 drop-shadow-sm">VS</div>
                    {gameState === 'question' && (
                        <div className="mt-4 text-2xl font-mono font-bold text-yellow-400 animate-pulse">
                            00:{timer < 10 ? `0${timer}` : timer}
                        </div>
                    )}
                    {gameState === 'question' && (
                        <div className="text-sm text-slate-500 mt-2">{t('Round')} {questionCount}/5</div>
                    )}
                </div>

                <div className="flex flex-col items-center">
                    {opponent ? (
                        <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-xl font-bold mb-2 shadow-[0_0_30px_rgba(220,38,38,0.6)] border-2 border-red-400">
                            {opponent.name ? opponent.name.charAt(0) : '?'}
                        </div>
                    ) : (
                        <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center text-xl font-bold mb-2 animate-pulse border border-slate-700">
                            ?
                        </div>
                    )}
                    <span className="font-bold text-lg">{opponent ? opponent.name : t('Searching...')}</span>
                    <span className="text-4xl font-black text-red-400 mt-2">{opponentScore}</span>
                </div>
            </div>

            <div className="w-full max-w-3xl bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-3xl p-8 min-h-[400px] flex flex-col items-center justify-center relative shadow-2xl">
                {gameState === 'waiting' && !opponent && (
                    <div className="text-center space-y-6">
                        <div className="relative">
                            <div className="w-20 h-20 border-t-4 border-l-4 border-blue-500 rounded-full animate-spin mx-auto" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-full blur-xl" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight">{t('Searching for Opponent')}</h2>
                            <p className="text-slate-400 mt-2">{t('Connecting to global matchmaking server...')}</p>
                        </div>
                    </div>
                )}

                {gameState === 'starting' && (
                    <div className="text-center space-y-4">
                        <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-bounce">{t('MATCH FOUND!')}</h1>
                        <p className="text-xl text-slate-300">{t('Preparing battle...')}</p>
                    </div>
                )}

                {gameState === 'question' && currentQuestion && (
                    <div className="w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="text-center space-y-4">
                            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest rounded-full border border-blue-500/20">
                                {currentQuestion.category || t('General Knowledge')}
                            </span>
                            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                                {currentQuestion.question_text}
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                            {currentQuestion.options.map((opt, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleAnswer(opt)}
                                    disabled={hasAnswered}
                                    className={`
                                        p-6 rounded-xl border-2 text-lg font-semibold transition-all duration-200
                                        ${hasAnswered
                                            ? opt === currentQuestion.correct_answer
                                                ? 'bg-green-500/20 border-green-500 text-green-400'
                                                : 'bg-slate-800/50 border-slate-700 text-slate-500 opacity-50'
                                            : 'bg-slate-800/50 border-slate-700 hover:border-blue-500 hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98]'
                                        }
                                    `}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {gameState === 'result' && (
                    <div className="text-center space-y-8 animate-in zoom-in duration-300">
                        <h1 className="text-5xl font-black text-white">{t('GAME OVER')}</h1>

                        <div className="flex justify-center gap-12">
                            <div className="text-center">
                                <p className="text-slate-400 text-sm uppercase font-bold">{t('You')}</p>
                                <p className={`text-6xl font-black ${score > opponentScore ? 'text-green-400' : 'text-slate-200'}`}>{score}</p>
                            </div>
                            <div className="text-center">
                                <p className="text-slate-400 text-sm uppercase font-bold">{t('Opponent')}</p>
                                <p className={`text-6xl font-black ${opponentScore > score ? 'text-green-400' : 'text-slate-200'}`}>{opponentScore}</p>
                            </div>
                        </div>

                        <div className="text-2xl font-bold">
                            {score > opponentScore ? (
                                <span className="text-green-400">{t('VICTORY! +50 PTS')}</span>
                            ) : score < opponentScore ? (
                                <span className="text-red-400">{t('DEFEAT -10 PTS')}</span>
                            ) : (
                                <span className="text-yellow-400">{t('DRAW')}</span>
                            )}
                        </div>

                        <button
                            onClick={() => window.location.href = '/dashboard'}
                            className="px-8 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition-colors"
                        >
                            {t('Back to Dashboard')}
                        </button>
                    </div>
                )}
            </div>

            {/* Debug Console */}
            {/* <div className="mt-8 w-full max-w-2xl p-4 bg-slate-950 rounded border border-slate-900 font-mono text-xs text-green-500 h-32 overflow-y-auto">
                {messages.map((msg, i) => (
                    <div key={i}>[{new Date(msg.timestamp ?? Date.now()).toLocaleTimeString()}] {msg.name}: {JSON.stringify(msg.data)}</div>
                ))}
            </div> */}
        </div>
    );
}
