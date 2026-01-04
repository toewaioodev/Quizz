import { jsx, jsxs } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
import { T as ThemeSwitcher } from "./ThemeSwitcher-C4YGyEOA.js";
import { useChannel, ChannelProvider, usePresence, usePresenceListener } from "ably/react";
import axios from "axios";
import { useReducer, useEffect, useState, memo } from "react";
import { usePage, Head } from "@inertiajs/react";
import confetti from "canvas-confetti";
function ArenaHeader({
  user,
  opponent,
  score,
  opponentScore,
  timer,
  currentQuestionIndex = 0,
  status,
  opponentPresent
}) {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsx("div", { className: "w-full max-w-4xl z-20 mb-6 px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between rounded-2xl border border-slate-200 bg-white/50 p-4 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-slate-900/50", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: user.profile_photo_url || user.avatar,
            alt: user.name,
            className: "h-12 w-12 rounded-full border-2 border-blue-500 object-cover shadow-md"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute -right-1 -bottom-1 h-4 w-4 rounded-full border-2 border-white bg-green-500 dark:border-slate-900" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hidden flex-col md:flex", children: [
        /* @__PURE__ */ jsx("span", { className: "font-bold text-slate-900 dark:text-white max-w-[100px] truncate", children: user.name }),
        /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-blue-600 dark:text-blue-400", children: t("YOU") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "ml-2 flex flex-col items-center rounded-lg bg-blue-100 px-3 py-1 dark:bg-blue-900/30", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase text-blue-600 dark:text-blue-400", children: t("Score") }),
        /* @__PURE__ */ jsx("span", { className: "text-xl font-black text-blue-700 dark:text-blue-300", children: score })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
      status === "QUESTION_ACTIVE" || status === "ROUND_RESULT" ? /* @__PURE__ */ jsxs(
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
      ) : /* @__PURE__ */ jsx("div", { className: "text-2xl font-black text-slate-300 italic md:text-4xl dark:text-slate-700", children: status === "STARTING" ? "VS" : status === "WAITING_FOR_OPPONENT" ? t("WAITING") : "" }),
      /* @__PURE__ */ jsx("div", { className: "mt-1 text-[10px] font-bold tracking-widest text-slate-400 uppercase md:text-xs", children: currentQuestionIndex ? `${t("Round")} ${currentQuestionIndex}/5` : "" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 justify-end", children: [
      /* @__PURE__ */ jsxs("div", { className: "mr-2 flex flex-col items-center rounded-lg bg-purple-100 px-3 py-1 dark:bg-purple-900/30", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase text-purple-600 dark:text-purple-400", children: t("Score") }),
        /* @__PURE__ */ jsx("span", { className: "text-xl font-black text-purple-700 dark:text-purple-300", children: opponentScore })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hidden flex-col items-end md:flex", children: [
        /* @__PURE__ */ jsx("span", { className: "font-bold text-slate-900 dark:text-white max-w-[100px] truncate text-right", children: opponent ? opponent.name : t("Searching...") }),
        /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-purple-600 dark:text-purple-400", children: t("OPPONENT") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        opponent ? /* @__PURE__ */ jsx(
          "img",
          {
            src: opponent.profile_photo_url || opponent.avatar,
            alt: opponent.name,
            className: "h-12 w-12 rounded-full border-2 border-purple-500 object-cover shadow-md"
          }
        ) : /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full border-2 border-slate-300 bg-slate-200 dark:border-slate-700 dark:bg-slate-800", children: /* @__PURE__ */ jsx("span", { className: "text-xl", children: "?" }) }),
        opponent && /* @__PURE__ */ jsx("div", { className: `absolute -right-1 -bottom-1 h-4 w-4 rounded-full border-2 border-white dark:border-slate-900 ${opponentPresent ? "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]" : "bg-red-500"}` })
      ] })
    ] })
  ] }) });
}
const initialState = {
  status: "WAITING_FOR_OPPONENT",
  currentQuestion: null,
  timer: 0,
  playerScores: { p1: 0, p2: 0 },
  lastRoundResult: null,
  winnerId: null,
  opponentAnswered: false,
  hasAnswered: false,
  userAnswer: null,
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
        userAnswer: null,
        // Reset user answer
        opponentAnswered: false,
        lastRoundResult: null
        // Clear previous
      };
    case "TICK_TIMER":
      return { ...state, timer: Math.max(state.timer - 1, 0) };
    case "OPPONENT_ANSWERED":
      return { ...state, opponentAnswered: true };
    case "PLAYER_ANSWERED":
      return { ...state, hasAnswered: true, userAnswer: action.payload };
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
          setTimeout(() => nextQuestion(), 1500);
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
    dispatch({ type: "PLAYER_ANSWERED", payload: option });
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
  return /* @__PURE__ */ jsx(ChannelProvider, { channelName: `match:${match.channel_id}`, children: /* @__PURE__ */ jsx(ChannelProvider, { channelName: "global-presence", children: /* @__PURE__ */ jsx(Arena, { match }) }) });
}
function Arena({ match }) {
  const user = usePage().props.auth.user;
  const { t } = useTranslation();
  const initialOpponent = match.player1_id === user.id ? match.player2 : match.player1;
  const isHost = Number(match.player1_id) === Number(user.id);
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
  const { channel: globalChannel } = useChannel("global-presence");
  useEffect(() => {
    if (globalChannel) {
      globalChannel.presence.update({
        name: user.name,
        id: user.id,
        profile_photo_url: user.profile_photo_url,
        status: "playing"
      });
      return () => {
        globalChannel.presence.update({
          name: user.name,
          id: user.id,
          profile_photo_url: user.profile_photo_url,
          status: "online"
        });
      };
    }
  }, [globalChannel, user]);
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
    /* @__PURE__ */ jsx(
      ArenaHeader,
      {
        user,
        opponent,
        score,
        opponentScore,
        timer,
        currentQuestionIndex: currentQuestion?.round_index,
        status: state.status,
        opponentPresent
      }
    ),
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
      (state.status === "QUESTION_ACTIVE" || state.status === "ROUND_RESULT") && currentQuestion && /* @__PURE__ */ jsx(
        QuestionDisplay,
        {
          currentQuestion,
          status: state.status,
          lastRoundResult: state.lastRoundResult,
          hasAnswered: state.hasAnswered,
          opponentAnswered: state.opponentAnswered,
          submitAnswer,
          userAnswer: state.userAnswer
        }
      ),
      state.status === "GAME_OVER" && /* @__PURE__ */ jsx(
        GameOverDisplay,
        {
          score,
          opponentScore,
          isWinner,
          isDraw
        }
      )
    ] }) })
  ] });
}
const QuestionDisplay = memo(({ currentQuestion, status, lastRoundResult, hasAnswered, opponentAnswered, submitAnswer, userAnswer }) => {
  const { t } = useTranslation();
  const getDelay = (index) => `${index * 100}ms`;
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col p-4 md:p-8 w-full max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative mb-8 overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 p-1 shadow-lg backdrop-blur-md dark:from-indigo-500/5 dark:to-purple-500/5", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x" }),
      /* @__PURE__ */ jsxs("div", { className: "relative rounded-xl bg-white/50 p-6 text-center dark:bg-slate-900/50 md:p-10", children: [
        /* @__PURE__ */ jsx("span", { className: "mb-4 inline-block rounded-full bg-blue-100 px-4 py-1 text-xs font-bold tracking-widest text-blue-700 uppercase dark:bg-blue-900/30 dark:text-blue-300", children: currentQuestion.category }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-black tracking-tight text-slate-800 md:text-4xl md:leading-snug dark:text-slate-100", children: currentQuestion.text })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6", children: currentQuestion.options.map((opt, idx) => {
      const isSelected = userAnswer === opt;
      const isCorrect = lastRoundResult?.correct_option === opt;
      const showResult = status === "ROUND_RESULT";
      let buttonStyle = "border-slate-200 bg-white/80 text-slate-700 hover:border-blue-400 hover:bg-blue-50/50 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:bg-blue-900/20";
      let icon = /* @__PURE__ */ jsx("span", { className: "flex h-8 w-8 items-center justify-center rounded-lg border border-current opacity-70 text-sm font-bold transition-all group-hover:bg-current group-hover:text-white group-hover:border-transparent", children: String.fromCharCode(65 + idx) });
      if (hasAnswered) {
        buttonStyle = "border-slate-200 bg-slate-50 text-slate-400 cursor-default dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-600";
        if (isSelected) {
          buttonStyle = "border-blue-500 bg-blue-100/50 text-blue-700 dark:border-blue-500 dark:bg-blue-900/30 dark:text-blue-300";
          icon = /* @__PURE__ */ jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500 text-white", children: /* @__PURE__ */ jsxs("svg", { className: "h-5 w-5 animate-spin", fill: "none", viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
            /* @__PURE__ */ jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
          ] }) });
        }
      }
      if (showResult) {
        if (isCorrect) {
          buttonStyle = "border-green-500 bg-green-100 text-green-800 shadow-[0_0_20px_rgba(34,197,94,0.3)] scale-[1.02] z-10 dark:border-green-500 dark:bg-green-900/30 dark:text-green-300";
          icon = /* @__PURE__ */ jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-lg bg-green-500 text-white", children: /* @__PURE__ */ jsx("svg", { className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 3, d: "M5 13l4 4L19 7" }) }) });
        } else if (isSelected) {
          buttonStyle = "border-red-500 bg-red-100 text-red-800 opacity-80 dark:border-red-500 dark:bg-red-900/30 dark:text-red-300";
          icon = /* @__PURE__ */ jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-lg bg-red-500 text-white", children: /* @__PURE__ */ jsx("svg", { className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 3, d: "M6 18L18 6M6 6l12 12" }) }) });
        } else {
          buttonStyle = "grayscale opacity-50 border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50";
        }
      }
      return /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => submitAnswer(opt),
          disabled: hasAnswered || showResult,
          className: `group relative flex items-center gap-4 overflow-hidden rounded-2xl border-2 p-5 text-left transition-all duration-300 shadow-sm ${buttonStyle}`,
          style: { animationDelay: getDelay(idx) },
          children: [
            /* @__PURE__ */ jsx("div", { className: "shrink-0", children: icon }),
            /* @__PURE__ */ jsx("span", { className: "text-lg font-bold tracking-tight md:text-xl", children: opt }),
            !hasAnswered && !showResult && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]" })
          ]
        },
        idx
      );
    }) }),
    opponentAnswered && !lastRoundResult && /* @__PURE__ */ jsx("div", { className: "mt-8 flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-bold text-red-600 animate-pulse dark:bg-red-900/30 dark:text-red-400", children: [
      /* @__PURE__ */ jsxs("span", { className: "relative flex h-3 w-3", children: [
        /* @__PURE__ */ jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" }),
        /* @__PURE__ */ jsx("span", { className: "relative inline-flex rounded-full h-3 w-3 bg-red-500" })
      ] }),
      t("Opponent has answered!")
    ] }) })
  ] });
});
const GameOverDisplay = memo(({ score, opponentScore, isWinner, isDraw }) => {
  const { t } = useTranslation();
  useEffect(() => {
    if (isWinner) {
      const audio = new Audio("/sounds/victory.mp3");
      audio.play().catch((e) => console.log("Audio play failed", e));
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b"]
      });
    } else if (!isDraw) {
      const audio = new Audio("/sounds/defeat.mp3");
      audio.play().catch((e) => console.log("Audio play failed", e));
    }
  }, [isWinner, isDraw]);
  return /* @__PURE__ */ jsxs("div", { className: "animate-in zoom-in flex flex-1 flex-col items-center justify-center space-y-8 p-8 text-center duration-500", children: [
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
        onClick: () => window.location.href = "/lobby",
        className: "rounded-2xl bg-slate-900 px-8 py-4 font-bold text-white shadow-xl hover:scale-105 dark:bg-white dark:text-slate-900",
        children: t("Back to Lobby")
      }
    )
  ] });
});
export {
  ArenaPage as default
};
