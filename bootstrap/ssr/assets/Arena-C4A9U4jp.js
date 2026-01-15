import { jsxs, jsx } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
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
  return /* @__PURE__ */ jsxs("div", { className: "md:px-4 z-20 w-full max-w-5xl px-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative flex items-center justify-between overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 p-3 shadow-2xl backdrop-blur-xl transition-all md:p-4", children: [
      /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -left-10 top-0 h-24 w-24 bg-blue-500/20 blur-[50px]" }),
      /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -right-10 bottom-0 h-24 w-24 bg-purple-500/20 blur-[50px]" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-1 items-center gap-2 md:gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "h-10 w-10 overflow-hidden rounded-full ring-2 ring-blue-500/50 md:h-14 md:w-14 md:ring-4", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: user.profile_photo_url || user.avatar,
              alt: user.name,
              className: "h-full w-full object-cover"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-slate-900 text-[8px] md:h-5 md:w-5 md:text-[10px]", children: "🔵" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx("span", { className: "max-w-[70px] truncate text-xs font-bold text-white md:max-w-[120px] md:text-base", children: user.name }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center rounded-md bg-blue-500/20 px-1.5 py-0.5 text-blue-300 md:px-2 md:py-1", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-black tracking-wide md:text-xs", children: "PTS" }),
            /* @__PURE__ */ jsx("span", { className: "ml-1 text-xs font-black text-white md:ml-1.5 md:text-sm", children: score })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2", children: status === "QUESTION_ACTIVE" || status === "ROUND_RESULT" ? /* @__PURE__ */ jsxs("div", { className: "relative flex items-center justify-center", children: [
        timer <= 5 && /* @__PURE__ */ jsx("div", { className: "absolute h-full w-full animate-ping rounded-full bg-red-500/30 opacity-75" }),
        /* @__PURE__ */ jsxs("div", { className: "relative h-14 w-14 md:h-20 md:w-20", children: [
          /* @__PURE__ */ jsxs("svg", { className: "h-full w-full -rotate-90 transform", viewBox: "0 0 100 100", children: [
            /* @__PURE__ */ jsx(
              "circle",
              {
                cx: "50",
                cy: "50",
                r: "45",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "8",
                className: "text-slate-700/50"
              }
            ),
            /* @__PURE__ */ jsx(
              "circle",
              {
                cx: "50",
                cy: "50",
                r: "45",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "8",
                strokeLinecap: "round",
                strokeDasharray: "283",
                strokeDashoffset: 283 - 283 * timer / 15,
                className: `transition-all duration-1000 ease-linear ${timer <= 5 ? "text-red-500 shadow-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]" : "text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"}`
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: `text-xl font-black md:text-3xl ${timer <= 5 ? "scale-110 text-red-400" : "text-white"} transition-all`, children: timer }) })
        ] })
      ] }) : /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-white/5 font-black text-slate-500 backdrop-blur-md md:h-16 md:w-16", children: /* @__PURE__ */ jsx("span", { className: "text-sm md:text-xl", children: "VS" }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-1 items-center justify-end gap-2 md:gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-end", children: [
          /* @__PURE__ */ jsx("span", { className: "max-w-[70px] truncate text-xs font-bold text-white md:max-w-[120px] md:text-base", children: opponent ? opponent.name : t("Waiting...") }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center rounded-md bg-purple-500/20 px-1.5 py-0.5 text-purple-300 md:px-2 md:py-1", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-black tracking-wide md:text-xs", children: "PTS" }),
            /* @__PURE__ */ jsx("span", { className: "ml-1 text-xs font-black text-white md:ml-1.5 md:text-sm", children: opponentScore })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: `h-10 w-10 overflow-hidden rounded-full ring-2 transition-all md:h-14 md:w-14 md:ring-4 ${opponent ? "ring-purple-500/50" : "ring-slate-700"}`, children: opponent ? /* @__PURE__ */ jsx(
            "img",
            {
              src: opponent.profile_photo_url || opponent.avatar,
              alt: opponent.name,
              className: "h-full w-full object-cover"
            }
          ) : /* @__PURE__ */ jsx("div", { className: "flex h-full w-full animate-pulse items-center justify-center bg-slate-800 text-slate-500", children: "?" }) }),
          opponent && /* @__PURE__ */ jsx("div", { className: `absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-slate-900 md:h-5 md:w-5 ${opponentPresent ? "bg-green-500" : "bg-red-500"}` })
        ] })
      ] })
    ] }),
    currentQuestionIndex > 0 && /* @__PURE__ */ jsx("div", { className: "mt-2 flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "rounded-full bg-black/30 px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-white/50 backdrop-blur-sm uppercase", children: [
      "Round ",
      currentQuestionIndex,
      "/5"
    ] }) })
  ] });
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
  const { state, submitAnswer } = useGameEngine(match.id, match.channel_id, user.id, isHost);
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
  return /* @__PURE__ */ jsxs("div", { className: "relative flex min-h-screen flex-col items-center overflow-hidden bg-slate-950 font-sans text-white selection:bg-indigo-500 selection:text-white", children: [
    /* @__PURE__ */ jsx(Head, { title: "Arena" }),
    /* @__PURE__ */ jsxs("div", { className: "pointer-events-none absolute inset-0", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -left-[20%] -top-[20%] h-[800px] w-[800px] animate-pulse rounded-full bg-indigo-600/20 blur-[120px]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-[20%] -right-[20%] h-[800px] w-[800px] animate-pulse rounded-full bg-blue-600/20 blur-[120px] delay-1000" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "z-10 mt-safe pt-4 w-full flex justify-center", children: /* @__PURE__ */ jsx(
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
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex w-full max-w-2xl flex-1 flex-col justify-center px-4 pb-10", children: [
      state.status === "WAITING_FOR_OPPONENT" && /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center space-y-8 py-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 animate-ping rounded-full bg-blue-500/20 duration-1000" }),
          /* @__PURE__ */ jsx("div", { className: "relative flex h-32 w-32 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md", children: /* @__PURE__ */ jsx("span", { className: "text-4xl", children: "📡" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("h2", { className: "bg-gradient-to-br from-white to-slate-400 bg-clip-text text-3xl font-bold text-transparent", children: t("Searching for Opponent") }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-slate-400", children: t("Connecting to global matchmaking server...") })
        ] }),
        /* @__PURE__ */ jsx("button", { onClick: () => window.history.back(), className: "mt-8 rounded-full border border-white/10 px-6 py-2 text-sm font-medium text-slate-400 hover:bg-white/5 hover:text-white transition-colors", children: t("Cancel") })
      ] }),
      state.status === "STARTING" && /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center space-y-8 animate-in zoom-in duration-300", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative h-40 w-40", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 animate-ping rounded-full bg-green-500/30 duration-700" }),
          /* @__PURE__ */ jsx("div", { className: "flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-600 shadow-2xl shadow-green-500/50", children: /* @__PURE__ */ jsx("span", { className: "text-6xl", children: "⚔️" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-5xl font-black uppercase tracking-tighter text-white drop-shadow-lg", children: t("MATCH FOUND!") }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-xl font-medium text-emerald-400", children: t("Prepare for battle...") })
        ] })
      ] }),
      (state.status === "QUESTION_ACTIVE" || state.status === "ROUND_RESULT") && currentQuestion && /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsx(
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
      ) }),
      state.status === "GAME_OVER" && /* @__PURE__ */ jsx(GameOverDisplay, { user, opponent, score, opponentScore, isWinner, isDraw })
    ] })
  ] });
}
const QuestionDisplay = memo(({ currentQuestion, status, lastRoundResult, hasAnswered, opponentAnswered, submitAnswer, userAnswer }) => {
  const { t, i18n } = useTranslation();
  const isBurmese = i18n.language === "my";
  const displayText = isBurmese && currentQuestion.text_my ? currentQuestion.text_my : currentQuestion.text;
  const displayOptions = isBurmese && currentQuestion.options_my ? currentQuestion.options_my : currentQuestion.options;
  const getDelay = (index) => `${index * 10}ms`;
  useEffect(() => {
    if (status === "ROUND_RESULT" && lastRoundResult && hasAnswered) {
      if (lastRoundResult.correct_option === userAnswer) {
        const audio = new Audio("/sounds/correct.mp3");
        audio.play().catch(() => {
        });
      } else {
        const audio = new Audio("/sounds/wrong.mp3");
        audio.play().catch(() => {
        });
      }
    }
  }, [status, lastRoundResult, hasAnswered, userAnswer]);
  return /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative mb-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-2xl backdrop-blur-xl md:mb-10 md:p-10", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[50px]" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsx("span", { className: "mb-4 inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-[10px] font-black tracking-widest text-blue-300 uppercase shadow-[0_0_10px_rgba(59,130,246,0.2)] md:text-xs", children: currentQuestion.category }),
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-black leading-tight tracking-tight text-white md:text-3xl md:leading-snug", children: displayText })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-3 md:gap-4", children: displayOptions.map((opt, idx) => {
      const isSelected = userAnswer === opt;
      const isCorrect = lastRoundResult?.correct_option === opt;
      const showResult = status === "ROUND_RESULT";
      let buttonStyle = "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:border-white/20 hover:text-white";
      let icon = /* @__PURE__ */ jsx("span", { className: "flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-xs font-bold", children: String.fromCharCode(65 + idx) });
      if (hasAnswered) {
        buttonStyle = "opacity-50 cursor-default border-transparent bg-black/20 text-slate-500";
        if (isSelected) {
          buttonStyle = "border-blue-500/50 bg-blue-500/20 text-blue-200 opacity-100 ring-2 ring-blue-500/30";
          icon = /* @__PURE__ */ jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500 text-white shadow-lg shadow-blue-500/40", children: /* @__PURE__ */ jsxs("svg", { className: "h-4 w-4 animate-spin", fill: "none", viewBox: "0 0 24 24", children: [
            /* @__PURE__ */ jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
            /* @__PURE__ */ jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
          ] }) });
        }
      }
      if (showResult) {
        if (isCorrect) {
          buttonStyle = "border-green-500 bg-green-500/20 text-white shadow-[0_0_30px_rgba(34,197,94,0.3)] scale-[1.02] z-10 ring-1 ring-green-400/50 opacity-100";
          icon = /* @__PURE__ */ jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-lg bg-green-500 text-white shadow-lg shadow-green-500/40", children: /* @__PURE__ */ jsx("svg", { className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 3, d: "M5 13l4 4L19 7" }) }) });
        } else if (isSelected) {
          buttonStyle = "border-red-500/50 bg-red-500/20 text-red-200 ring-1 ring-red-500/30 opacity-80";
          icon = /* @__PURE__ */ jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-lg bg-red-500 text-white shadow-lg shadow-red-500/40", children: /* @__PURE__ */ jsx("svg", { className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 3, d: "M6 18L18 6M6 6l12 12" }) }) });
        } else {
          buttonStyle = "opacity-30 grayscale border-transparent bg-black/20";
        }
      }
      return /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => submitAnswer(currentQuestion.options[idx]),
          disabled: hasAnswered || showResult,
          className: `group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border p-4 text-left transition-all duration-200 active:scale-[0.98] md:p-5 ${buttonStyle}`,
          style: { animationDelay: getDelay(idx) },
          children: [
            /* @__PURE__ */ jsx("div", { className: "shrink-0", children: icon }),
            /* @__PURE__ */ jsx("span", { className: "text-base font-bold tracking-tight md:text-lg", children: opt })
          ]
        },
        idx
      );
    }) }),
    opponentAnswered && !lastRoundResult && /* @__PURE__ */ jsx("div", { className: "absolute -right-4 top-1/2 -translate-y-1/2 translate-x-full px-4 md:-right-10 md:px-0" }),
    opponentAnswered && !lastRoundResult && /* @__PURE__ */ jsxs("div", { className: "pointer-events-none fixed bottom-24 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full border border-red-500/30 bg-red-500/10 px-6 py-2 backdrop-blur-md md:bottom-10", children: [
      /* @__PURE__ */ jsxs("span", { className: "relative flex h-3 w-3", children: [
        /* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" }),
        /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-3 w-3 rounded-full bg-red-500" })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "text-sm font-bold tracking-wide text-red-200 uppercase", children: t("Opponent Answered") })
    ] })
  ] });
});
const GameOverDisplay = memo(({ user, opponent, score, opponentScore, isWinner, isDraw }) => {
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
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center p-6 text-center animate-in zoom-in duration-500", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-8", children: isWinner ? /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 animate-ping rounded-full bg-green-500/30 duration-1000" }),
      /* @__PURE__ */ jsx("h1", { className: "bg-gradient-to-br from-yellow-300 to-yellow-600 bg-clip-text text-6xl font-black tracking-tighter text-transparent drop-shadow-2xl md:text-8xl", children: "VICTORY" }),
      /* @__PURE__ */ jsx("div", { className: "mt-2 text-lg font-bold tracking-[0.5em] text-yellow-500 uppercase", children: t("Winner!") })
    ] }) : isDraw ? /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", { className: "text-6xl font-black tracking-tighter text-slate-300 md:text-8xl", children: "DRAW" }) }) : /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h1", { className: "text-6xl font-black tracking-tighter text-red-500 md:text-8xl", children: "DEFEAT" }),
      /* @__PURE__ */ jsx("div", { className: "mt-2 text-lg font-bold tracking-[0.5em] text-red-400 uppercase", children: t("Better luck next time") })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "relative mb-10 w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "relative mb-4 h-20 w-20 rounded-full border-4 border-blue-500 shadow-xl shadow-blue-500/20 md:h-24 md:w-24", children: /* @__PURE__ */ jsx("div", { className: "h-10 w-10 overflow-hidden rounded-full ring-2 ring-blue-500/50 md:h-14 md:w-14 md:ring-4", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: user.profile_photo_url || user.avatar,
            alt: user.name,
            className: "h-full w-full object-cover"
          }
        ) }) }),
        /* @__PURE__ */ jsx("span", { className: "text-5xl font-black text-white", children: score })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-2xl font-black text-slate-600 italic", children: "VS" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "relative mb-4 h-20 w-20 rounded-full border-4 border-purple-500 shadow-xl shadow-purple-500/20 md:h-24 md:w-24", children: /* @__PURE__ */ jsx("div", { className: `h-10 w-10 overflow-hidden rounded-full ring-2 transition-all md:h-14 md:w-14 md:ring-4 ${opponent ? "ring-purple-500/50" : "ring-slate-700"}`, children: /* @__PURE__ */ jsx(
          "img",
          {
            src: opponent.profile_photo_url || opponent.avatar,
            alt: opponent.name,
            className: "h-full w-full object-cover"
          }
        ) }) }),
        /* @__PURE__ */ jsx("span", { className: "text-5xl font-black text-white", children: opponentScore })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex w-full max-w-sm flex-col gap-3", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => window.location.href = "/lobby",
          className: "group relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-blue-600 px-6 py-4 font-bold text-white shadow-xl shadow-blue-600/30 transition-all hover:scale-[1.02] hover:bg-blue-500",
          children: [
            /* @__PURE__ */ jsx("span", { className: "relative z-10", children: t("Back to Lobby") }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => window.location.href = "/dashboard",
          className: "w-full rounded-xl border border-white/10 bg-white/5 px-6 py-4 font-bold text-slate-300 transition-all hover:bg-white/10 hover:text-white",
          children: t("Home")
        }
      )
    ] })
  ] });
});
export {
  ArenaPage as default
};
