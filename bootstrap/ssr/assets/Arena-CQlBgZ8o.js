import { jsx, jsxs } from "react/jsx-runtime";
import * as Ably from "ably";
import { useChannel, AblyProvider, ChannelProvider, usePresence, usePresenceListener } from "ably/react";
import { T as ThemeSwitcher } from "./ThemeSwitcher-C4YGyEOA.js";
import { usePage, Head } from "@inertiajs/react";
import { useReducer, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
const initialState = {
  status: "WAITING_FOR_OPPONENT",
  currentQuestion: null,
  timer: 0,
  playerScores: { p1: 0, p2: 0 },
  lastRoundResult: null,
  winnerId: null,
  opponentAnswered: false,
  hasAnswered: false,
  opponent: null
};
function reducer(state, action) {
  switch (action.type) {
    case "MATCH_FOUND":
      return {
        ...state,
        status: "STARTING",
        opponent: action.payload.opponent
        // From match-found event
      };
    case "GAME_START":
      return { ...state, status: "STARTING" };
    case "NEW_QUESTION":
      return {
        ...state,
        status: "QUESTION_ACTIVE",
        currentQuestion: action.payload,
        timer: action.payload.time_limit,
        hasAnswered: false,
        opponentAnswered: false,
        lastRoundResult: null
        // Clear previous
      };
    case "TICK_TIMER":
      return { ...state, timer: Math.max(state.timer - 1, 0) };
    case "OPPONENT_ANSWERED":
      return { ...state, opponentAnswered: true };
    case "PLAYER_ANSWERED":
      return { ...state, hasAnswered: true };
    case "ROUND_RESULT":
      return {
        ...state,
        status: "ROUND_RESULT",
        lastRoundResult: action.payload,
        playerScores: action.payload.player_scores
      };
    case "GAME_OVER":
      return {
        ...state,
        status: "GAME_OVER",
        winnerId: action.payload.winner_id,
        playerScores: action.payload.final_scores
      };
    default:
      return state;
  }
}
function useGameEngine(matchId, channelId, userId, isHost) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { channel } = useChannel(`match:${channelId}`, (message) => {
    console.log("Event:", message.name, message.data);
    switch (message.name) {
      case "match-found":
        dispatch({ type: "MATCH_FOUND", payload: message.data });
        if (isHost) {
          setTimeout(() => startGame(), 2e3);
        }
        break;
      case "match:start":
        dispatch({ type: "GAME_START", payload: message.data });
        break;
      case "game:question":
        dispatch({ type: "NEW_QUESTION", payload: message.data });
        break;
      case "game:answered":
        if (message.data.clientId !== String(userId)) {
          dispatch({ type: "OPPONENT_ANSWERED" });
        }
        break;
      case "game:round_result":
        dispatch({ type: "ROUND_RESULT", payload: message.data });
        if (isHost) {
          setTimeout(() => nextQuestion(), 3e3);
        }
        break;
      case "game:over":
        dispatch({ type: "GAME_OVER", payload: message.data });
        break;
    }
  });
  useEffect(() => {
    let interval;
    if (state.status === "QUESTION_ACTIVE" && state.timer > 0) {
      interval = setInterval(() => {
        dispatch({ type: "TICK_TIMER" });
      }, 1e3);
    }
    return () => clearInterval(interval);
  }, [state.status, state.timer]);
  useEffect(() => {
    const fetchState = async () => {
      try {
        const res = await axios.get(`/match/${matchId}/state`);
        const s = res.data;
        if (s.status === "active" && s.currentQuestion) {
          const now = Math.floor(Date.now() / 1e3);
          const sentAt = s.currentQuestion.sent_at;
          const elapsed = now - sentAt;
          const remaining = Math.max(s.currentQuestion.time_limit - elapsed, 0);
          dispatch({ type: "NEW_QUESTION", payload: { ...s.currentQuestion, time_limit: remaining } });
          if (s.playerScores) {
          }
        }
      } catch (e) {
        console.error("Failed to sync state", e);
      }
    };
    fetchState();
  }, [matchId]);
  const startGame = async () => {
    try {
      await axios.post(`/match/${matchId}/start`);
    } catch (e) {
      console.error(e);
    }
  };
  const submitAnswer = async (option) => {
    if (state.hasAnswered) return;
    dispatch({ type: "PLAYER_ANSWERED" });
    try {
      await axios.post(`/match/${matchId}/answer`, {
        question_id: state.currentQuestion?.question_id,
        answer_option: option
      });
    } catch (e) {
      console.error(e);
    }
  };
  const nextQuestion = async () => {
    try {
      await axios.post(`/match/${matchId}/next`);
    } catch (e) {
      console.error(e);
    }
  };
  return {
    state,
    startGame,
    submitAnswer,
    nextQuestion
  };
}
function ArenaPage({ match, ably_key }) {
  const user = usePage().props.auth.user;
  const client = useMemo(() => new Ably.Realtime({ key: ably_key, clientId: String(user.id) }), [ably_key, user.id]);
  return /* @__PURE__ */ jsx(AblyProvider, { client, children: /* @__PURE__ */ jsx(ChannelProvider, { channelName: `match:${match.channel_id}`, children: /* @__PURE__ */ jsx(Arena, { match }) }) });
}
function Arena({ match }) {
  const user = usePage().props.auth.user;
  const { t } = useTranslation();
  const initialOpponent = match.player1_id === user.id ? match.player2 : match.player1;
  const isHost = match.player1_id === user.id;
  const { state, submitAnswer } = useGameEngine(
    match.id,
    match.channel_id,
    user.id,
    isHost
  );
  const opponent = state.opponent || initialOpponent;
  usePresence(`match:${match.channel_id}`);
  const { presenceData } = usePresenceListener(`match:${match.channel_id}`);
  const [opponentPresent, setOpponentPresent] = useState(false);
  useEffect(() => {
    const isOpponentHere = presenceData.some((p) => p.clientId === String(opponent?.id));
    setOpponentPresent(isOpponentHere);
  }, [presenceData, opponent]);
  const timer = state.timer;
  const currentQuestion = state.currentQuestion;
  const score = state.playerScores[match.player1_id === user.id ? "p1" : "p2"];
  const opponentScore = state.playerScores[match.player1_id === user.id ? "p2" : "p1"];
  const isWinner = state.winnerId === user.id;
  const isDraw = state.status === "GAME_OVER" && !state.winnerId;
  return /* @__PURE__ */ jsxs("div", { className: "relative flex min-h-screen flex-col items-center overflow-hidden bg-slate-50 font-sans text-slate-900 transition-colors duration-300 selection:bg-blue-500 selection:text-white dark:bg-slate-950 dark:text-white", children: [
    /* @__PURE__ */ jsx(Head, { title: "Arena" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4 z-50 hidden md:block", children: /* @__PURE__ */ jsx(ThemeSwitcher, {}) }),
    /* @__PURE__ */ jsxs("div", { className: "pointer-events-none absolute inset-0 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-[-10%] left-[-10%] h-[500px] w-[500px] animate-pulse rounded-full bg-blue-500/20 blur-[100px]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute right-[-10%] bottom-[-10%] h-[500px] w-[500px] animate-pulse rounded-full bg-purple-500/20 blur-[100px] delay-700" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "sticky top-0 z-10 mx-auto flex w-full max-w-6xl flex-row items-center justify-between border-b border-slate-200 bg-white/50 p-4 backdrop-blur-sm md:static md:border-none md:bg-transparent dark:border-white/5 dark:bg-black/20", children: [
      /* @__PURE__ */ jsxs("div", { className: `flex items-center gap-3 transition-all duration-300 ${score > opponentScore ? "scale-105" : "scale-100"}`, children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-blue-500 to-blue-700 text-lg font-bold text-white shadow-lg shadow-blue-500/30 md:h-16 md:w-16 md:text-xl dark:border-slate-800 overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: user.profile_photo_url, alt: user.name, className: "w-full h-full object-cover" }) }),
          /* @__PURE__ */ jsx("div", { className: "absolute -right-1 -bottom-1 rounded-full border border-white bg-slate-900 px-1.5 py-0.5 text-[10px] font-bold text-white md:text-xs dark:border-slate-800", children: "YOU" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx("span", { className: "max-w-[80px] truncate text-sm font-bold md:max-w-[150px] md:text-lg", children: user.name }),
          /* @__PURE__ */ jsx("span", { className: "text-xl leading-none font-black text-blue-600 md:text-3xl dark:text-blue-400", children: score })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
        state.status === "QUESTION_ACTIVE" || state.status === "ROUND_RESULT" ? /* @__PURE__ */ jsxs(
          "div",
          {
            className: `relative flex h-16 w-16 items-center justify-center rounded-full border-4 shadow-xl transition-all duration-300 md:h-20 md:w-20 ${timer <= 5 ? "scale-110 border-red-500 bg-red-500/10" : "border-white bg-white dark:border-slate-700 dark:bg-slate-800"}`,
            children: [
              /* @__PURE__ */ jsx("span", { className: `text-2xl font-black md:text-4xl ${timer <= 5 ? "text-red-500" : "text-slate-800 dark:text-white"}`, children: timer }),
              /* @__PURE__ */ jsxs("svg", { className: "pointer-events-none absolute inset-0 h-full w-full -rotate-90", viewBox: "0 0 100 100", children: [
                /* @__PURE__ */ jsx(
                  "circle",
                  {
                    className: "stroke-current text-slate-200 opacity-20 dark:text-slate-700",
                    strokeWidth: "8",
                    cx: "50",
                    cy: "50",
                    r: "40",
                    fill: "transparent"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "circle",
                  {
                    className: `stroke-current transition-all duration-1000 ease-linear ${timer <= 5 ? "text-red-500" : "text-blue-500"}`,
                    strokeWidth: "8",
                    strokeLinecap: "round",
                    cx: "50",
                    cy: "50",
                    r: "40",
                    fill: "transparent",
                    strokeDasharray: "251.2",
                    strokeDashoffset: 251.2 - 251.2 * timer / 15
                  }
                )
              ] })
            ]
          }
        ) : /* @__PURE__ */ jsx("div", { className: "text-2xl font-black text-slate-300 italic md:text-4xl dark:text-slate-700", children: state.status === "STARTING" ? "VS" : state.status === "WAITING_FOR_OPPONENT" ? t("WAITING") : "" }),
        /* @__PURE__ */ jsx("div", { className: "mt-1 text-[10px] font-bold tracking-widest text-slate-400 uppercase md:text-xs", children: currentQuestion ? `${t("Round")} ${currentQuestion.round_index}/5` : "" })
      ] }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: `flex flex-row-reverse items-center gap-3 text-right transition-all duration-300 ${opponentScore > score ? "scale-105" : "scale-100"}`,
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `flex h-12 w-12 items-center justify-center rounded-full border-2 border-white text-lg font-bold text-white shadow-lg md:h-16 md:w-16 md:text-xl dark:border-slate-800 overflow-hidden ${opponent ? "bg-gradient-to-br from-red-500 to-red-700 shadow-red-500/30" : "animate-pulse bg-slate-300 dark:bg-slate-800"}`,
                  children: opponent ? /* @__PURE__ */ jsx("img", { src: opponent.profile_photo_url || `https://ui-avatars.com/api/?name=${opponent.name}&color=7F9CF5&background=EBF4FF`, alt: opponent.name, className: "w-full h-full object-cover" }) : "?"
                }
              ),
              opponent && /* @__PURE__ */ jsx(
                "div",
                {
                  className: `absolute -bottom-0 -left-0 h-4 w-4 rounded-full border-2 border-white dark:border-slate-800 ${opponentPresent ? "bg-green-500" : "bg-gray-400"}`
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-end", children: [
              /* @__PURE__ */ jsx("span", { className: "max-w-[80px] truncate text-sm font-bold md:max-w-[150px] md:text-lg", children: opponent ? opponent.name : t("...") }),
              /* @__PURE__ */ jsx("span", { className: "text-xl leading-none font-black text-red-500 md:text-3xl dark:text-red-400", children: opponentScore })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "z-10 flex w-full max-w-4xl flex-1 flex-col justify-center p-2 md:p-4", children: /* @__PURE__ */ jsxs("div", { className: "relative flex min-h-[400px] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white/80 shadow-2xl backdrop-blur-xl transition-all duration-500 md:min-h-[500px] dark:border-white/10 dark:bg-slate-900/60", children: [
      state.status === "WAITING_FOR_OPPONENT" && /* @__PURE__ */ jsxs("div", { className: "animate-in fade-in md:p6 flex flex-1 flex-col items-center justify-center space-y-8 p-4 text-center duration-700 md:p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "h-24 w-24 rounded-full border-4 border-slate-200 dark:border-slate-800" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 h-24 w-24 animate-spin rounded-full border-t-4 border-blue-500" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx("svg", { className: "h-8 w-8 text-blue-500", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            }
          ) }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold md:text-3xl", children: t("Searching for Opponent") }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-slate-500 dark:text-slate-400", children: t("Connecting to global matchmaking server...") })
        ] })
      ] }),
      state.status === "STARTING" && /* @__PURE__ */ jsxs("div", { className: "animate-in zoom-in flex flex-1 flex-col items-center justify-center space-y-6 p-8 text-center duration-500", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-4 text-6xl md:text-8xl", children: "⚔️" }),
        /* @__PURE__ */ jsx("h1", { className: "animate-bounce bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-black text-transparent md:text-6xl dark:from-blue-400 dark:to-purple-500", children: t("MATCH FOUND!") }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-600 dark:text-slate-300", children: t("Get Ready...") })
      ] }),
      (state.status === "QUESTION_ACTIVE" || state.status === "ROUND_RESULT") && currentQuestion && /* @__PURE__ */ jsxs("div", { className: "animate-in slide-in-from-bottom-8 flex flex-1 flex-col space-y-8 p-6 duration-500 md:p-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-center", children: [
          /* @__PURE__ */ jsx("span", { className: "inline-block rounded-full border border-blue-200 bg-blue-100 px-4 py-1.5 text-xs font-bold tracking-widest text-blue-600 uppercase dark:border-blue-500/20 dark:bg-blue-900/30 dark:text-blue-400", children: currentQuestion.category }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl leading-tight font-bold text-slate-800 md:text-4xl md:leading-tight dark:text-slate-100", children: currentQuestion.text })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-auto grid w-full grid-cols-1 gap-3 md:grid-cols-2 md:gap-4", children: currentQuestion.options.map((opt, idx) => {
          const isCorrect = state.lastRoundResult?.correct_option === opt;
          const showResult = state.status === "ROUND_RESULT";
          let btnClass = "border-slate-200 bg-white text-slate-700 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200";
          if (state.hasAnswered) {
            btnClass = "border-transparent bg-slate-100 text-slate-400 opacity-50 dark:bg-slate-800/50";
          }
          if (showResult) {
            if (isCorrect) {
              btnClass = "scale-[1.02] border-green-600 bg-green-500 text-white shadow-lg shadow-green-500/20 opacity-100";
            }
          }
          return /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => submitAnswer(opt),
              disabled: state.hasAnswered || showResult,
              className: `group relative rounded-2xl border-2 p-4 text-left transition-all duration-200 md:p-6 ${btnClass}`,
              children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: `flex h-8 w-8 items-center justify-center rounded-lg border text-sm font-bold ${showResult && isCorrect ? "border-white/40 bg-white/20 text-white" : "border-slate-200 bg-slate-100 text-slate-500 dark:border-slate-600 dark:bg-slate-700"}`,
                    children: String.fromCharCode(65 + idx)
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold", children: opt })
              ] })
            },
            idx
          );
        }) }),
        state.opponentAnswered && !state.lastRoundResult && /* @__PURE__ */ jsx("div", { className: "text-center text-sm font-bold text-red-500 animate-pulse", children: t("Opponent has answered!") })
      ] }),
      state.status === "GAME_OVER" && /* @__PURE__ */ jsxs("div", { className: "animate-in zoom-in flex flex-1 flex-col items-center justify-center space-y-8 p-8 text-center duration-500", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-black tracking-tight text-slate-900 uppercase md:text-6xl dark:text-white", children: t("GAME OVER") }),
        /* @__PURE__ */ jsxs("div", { className: "flex w-full items-end justify-center gap-8 md:gap-16", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "text-5xl font-black", children: score }),
            /* @__PURE__ */ jsx("div", { className: "text-sm", children: "YOU" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "text-5xl font-black", children: opponentScore }),
            /* @__PURE__ */ jsx("div", { className: "text-sm", children: "OPPONENT" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pt-8 text-3xl font-bold", children: isWinner ? /* @__PURE__ */ jsx("span", { className: "text-green-500", children: "VICTORY!" }) : isDraw ? /* @__PURE__ */ jsx("span", { className: "text-yellow-500", children: "DRAW" }) : /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "DEFEAT" }) }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => window.location.href = "/dashboard",
            className: "rounded-2xl bg-slate-900 px-8 py-4 font-bold text-white shadow-xl hover:scale-105 dark:bg-white dark:text-slate-900",
            children: t("Back to Dashboard")
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  ArenaPage as default
};
