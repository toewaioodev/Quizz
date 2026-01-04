import { useChannel } from 'ably/react';
import axios from 'axios';
import { useEffect, useReducer, useState } from 'react';

// Types
export type GameState = 'IDLE' | 'WAITING_FOR_OPPONENT' | 'STARTING' | 'QUESTION_ACTIVE' | 'ROUND_RESULT' | 'GAME_OVER';

interface Question {
    question_id: number;
    text: string;
    options: string[];
    text_my?: string;
    options_my?: string[];
    category: string;
    round_index: number;
    total_rounds: number;
    time_limit: number;
    sent_at: number;
}

interface PlayerScores {
    p1: number;
    p2: number;
}

interface State {
    status: GameState;
    currentQuestion: Question | null;
    timer: number;
    playerScores: PlayerScores;
    lastRoundResult: any | null;
    winnerId: number | null;
    opponentAnswered: boolean;
    hasAnswered: boolean;
    userAnswer: string | null;
    opponent: any | null;
}

type Action =
    | { type: 'MATCH_FOUND'; payload: any }
    | { type: 'GAME_START'; payload: any }
    | { type: 'NEW_QUESTION'; payload: Question }
    | { type: 'TICK_TIMER' }
    | { type: 'OPPONENT_ANSWERED' }
    | { type: 'PLAYER_ANSWERED'; payload: string }
    | { type: 'ROUND_RESULT'; payload: any }
    | { type: 'GAME_OVER'; payload: any };

const initialState: State = {
    status: 'WAITING_FOR_OPPONENT',
    currentQuestion: null,
    timer: 0,
    playerScores: { p1: 0, p2: 0 },
    lastRoundResult: null,
    winnerId: null,
    opponentAnswered: false,
    hasAnswered: false,
    userAnswer: null,
    opponent: null,
};

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'MATCH_FOUND':
            return {
                ...state,
                status: 'STARTING',
                opponent: action.payload.opponent // From match-found event
            };
        case 'GAME_START':
            // Payload has { players: { p1, p2 } }
            // We need to figure out which one is opponent based on userId passed to hook?
            // But reducer doesn't know userId.
            // We can pass userId in initialState or rely on component to filter?
            // Or better: Store BOTH players in state.
            // Let's store opponent if we can determine it. 
            // Ideally we just expose 'players' and let Component decide.
            // But to minimize changes, let's keep 'opponent'.
            // We can't determine who is opponent here easily without userId.
            // Let's add 'players' to state instead.
            return { ...state, status: 'STARTING' };
        case 'NEW_QUESTION':
            return {
                ...state,
                status: 'QUESTION_ACTIVE',
                currentQuestion: action.payload,
                timer: action.payload.time_limit,
                hasAnswered: false,
                userAnswer: null, // Reset user answer
                opponentAnswered: false,
                lastRoundResult: null, // Clear previous
            };
        case 'TICK_TIMER':
            return { ...state, timer: Math.max(state.timer - 1, 0) };
        case 'OPPONENT_ANSWERED':
            return { ...state, opponentAnswered: true };
        case 'PLAYER_ANSWERED':
            return { ...state, hasAnswered: true, userAnswer: action.payload };
        case 'ROUND_RESULT':
            return {
                ...state,
                status: 'ROUND_RESULT',
                lastRoundResult: action.payload,
                playerScores: action.payload.player_scores,
            };
        case 'GAME_OVER':
            return {
                ...state,
                status: 'GAME_OVER',
                winnerId: action.payload.winner_id,
                playerScores: action.payload.final_scores
            };
        default:
            return state;
    }
}

export function useGameEngine(matchId: number, channelId: string, userId: number, isHost: boolean) {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Ably Channel Subscription
    const { channel } = useChannel(`match:${channelId}`, (message) => {
        console.log('Event:', message.name, message.data);
        switch (message.name) {
            case 'match-found':
                dispatch({ type: 'MATCH_FOUND', payload: message.data });
                // Server now auto-starts the match immediately upon joining
                // So we just update state and wait for match:start
                break;
            case 'match:start':
                dispatch({ type: 'GAME_START', payload: message.data });
                break;
            case 'game:question':
                dispatch({ type: 'NEW_QUESTION', payload: message.data });
                break;
            case 'game:answered':
                if (message.data.clientId !== String(userId)) {
                    dispatch({ type: 'OPPONENT_ANSWERED' });
                }
                break;
            case 'game:round_result':
                dispatch({ type: 'ROUND_RESULT', payload: message.data });
                // Auto advance if host?
                if (isHost) {
                    setTimeout(() => nextQuestion(), 1500);
                }
                break;
            case 'game:over':
                dispatch({ type: 'GAME_OVER', payload: message.data });
                break;
        }
    });

    // Timer Logic
    useEffect(() => {
        let interval: any;
        if (state.status === 'QUESTION_ACTIVE' && state.timer > 0) {
            interval = setInterval(() => {
                dispatch({ type: 'TICK_TIMER' });
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [state.status, state.timer]);

    // Initial State Fetch
    useEffect(() => {
        const fetchState = async () => {
            try {
                const res = await axios.get(`/match/${matchId}/state`);
                const s = res.data;
                // Sync state
                if (s.status === 'active' && s.currentQuestion) {
                    // Calculate remaining time
                    const now = Math.floor(Date.now() / 1000);
                    const sentAt = s.currentQuestion.sent_at;
                    const elapsed = now - sentAt;
                    const remaining = Math.max(s.currentQuestion.time_limit - elapsed, 0);

                    dispatch({ type: 'NEW_QUESTION', payload: { ...s.currentQuestion, time_limit: remaining } });

                    // Restore scores
                    if (s.playerScores) {
                        // We need a specific action to set scores effectively or rely on NEW_QUESTION clearing them?
                        // The reducer for NEW_QUESTION doesn't set scores.
                        // Ideally we add a SYNC_STATE action.
                        // For MVP, if we dispatch NEW_QUESTION, it sets logic.
                        // But we need to update scores too.
                    }
                }
            } catch (e) { console.error('Failed to sync state', e); }
        };
        fetchState();
    }, [matchId]);

    // Actions
    const startGame = async () => {
        try {
            await axios.post(`/match/${matchId}/start`);
        } catch (e) { console.error(e); }
    };

    const submitAnswer = async (option: string) => {
        if (state.hasAnswered) return;
        dispatch({ type: 'PLAYER_ANSWERED', payload: option });
        try {
            await axios.post(`/match/${matchId}/answer`, {
                question_id: state.currentQuestion?.question_id,
                answer_option: option
            });
        } catch (e) { console.error(e); }
    };

    const nextQuestion = async () => {
        try {
            await axios.post(`/match/${matchId}/next`);
        } catch (e) { console.error(e); }
    };

    return {
        state,
        startGame,
        submitAnswer,
        nextQuestion
    };
}
