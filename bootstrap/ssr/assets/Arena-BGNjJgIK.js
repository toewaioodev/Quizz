import { jsx, jsxs } from "react/jsx-runtime";
import * as Ably from "ably";
import { AblyProvider, ChannelProvider, useChannel, useConnectionStateListener } from "ably/react";
import { useState, useEffect } from "react";
import { usePage, Head } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import axios from "axios";
function ArenaPage({ match, ably_key }) {
  const user = usePage().props.auth.user;
  const client = new Ably.Realtime({ key: ably_key, clientId: String(user.id) });
  return /* @__PURE__ */ jsx(AblyProvider, { client, children: /* @__PURE__ */ jsx(ChannelProvider, { channelName: `match:${match.channel_id}`, children: /* @__PURE__ */ jsx(Arena, { match }) }) });
}
function Arena({ match }) {
  const user = usePage().props.auth.user;
  const [gameState, setGameState] = useState("waiting");
  const [messages, setMessages] = useState([]);
  const [opponent, setOpponent] = useState(match.player1_id === user.id ? match.player2 : match.player1);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [timer, setTimer] = useState(5);
  const [score, setScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [opponentAnswered, setOpponentAnswered] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);
  const { t, i18n } = useTranslation();
  const { channel } = useChannel(`match:${match.channel_id}`, (message) => {
    if (message.name === "match-found") {
      setGameState("starting");
      if (message.data.opponent) {
        setOpponent(message.data.opponent);
      }
      setTimeout(() => startGame(), 3e3);
    } else if (message.name === "new-question") {
      setCurrentQuestion(message.data);
      setTimer(15);
      setHasAnswered(false);
      setOpponentAnswered(false);
      setGameState("question");
      setQuestionCount((prev) => prev + 1);
    } else if (message.name === "score-update") {
      if (message.clientId !== String(user.id)) {
        setOpponentScore((prev) => prev + message.data.points);
      }
    } else if (message.name === "player-answered") {
      if (message.clientId !== String(user.id)) {
        setOpponentAnswered(true);
      }
    } else if (message.name === "game-over") {
      setGameState("result");
    }
    setMessages((prev) => [...prev, message]);
  });
  useConnectionStateListener((stateChange) => {
    console.log("Ably connection state:", stateChange.current);
  });
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
      const res = await axios.post("/quiz/generate", {
        topic: "Science",
        difficulty: "medium",
        language: i18n.language
      });
      channel.publish("new-question", res.data);
    } catch (e) {
      console.error("Quiz Error", e);
    }
  };
  const endGame = async () => {
    channel.publish("game-over", {});
    let winnerId = null;
    if (score > opponentScore) winnerId = user.id;
    else if (opponentScore > score) winnerId = opponent.id;
    if (isPlayer1) {
      try {
        await axios.post("/match/end", {
          match_id: match.id,
          winner_id: winnerId
        });
      } catch (e) {
        console.error("End Match Error", e);
      }
    }
  };
  useEffect(() => {
    let interval;
    if (gameState === "question" && timer > 0) {
      interval = setInterval(() => setTimer((t2) => t2 - 1), 1e3);
    } else if (gameState === "question" && timer === 0) {
      if (isPlayer1) fetchNextQuestion();
    }
    return () => clearInterval(interval);
  }, [gameState, timer, isPlayer1]);
  useEffect(() => {
    if (gameState === "question" && hasAnswered && opponentAnswered && isPlayer1) {
      const timeout = setTimeout(() => {
        fetchNextQuestion();
      }, 1e3);
      return () => clearTimeout(timeout);
    }
  }, [gameState, hasAnswered, opponentAnswered, isPlayer1]);
  const handleAnswer = (option) => {
    if (hasAnswered) return;
    setHasAnswered(true);
    channel.publish("player-answered", {});
    if (option === currentQuestion?.correct_answer) {
      const points = timer * 10;
      setScore((s) => s + points);
      channel.publish("score-update", { points });
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-black text-white p-6 flex flex-col items-center font-sans selection:bg-blue-500 selection:text-white", children: [
    /* @__PURE__ */ jsx(Head, { title: "Arena" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-4xl w-full flex justify-between items-center mb-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold mb-2 shadow-[0_0_30px_rgba(37,99,235,0.6)] border-2 border-blue-400", children: user.name.charAt(0) }),
        /* @__PURE__ */ jsx("span", { className: "font-bold text-lg", children: user.name }),
        /* @__PURE__ */ jsx("span", { className: "text-4xl font-black text-blue-400 mt-2", children: score })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "text-6xl font-black italic tracking-tighter text-slate-800 drop-shadow-sm", children: "VS" }),
        gameState === "question" && /* @__PURE__ */ jsxs("div", { className: "mt-4 text-2xl font-mono font-bold text-yellow-400 animate-pulse", children: [
          "00:",
          timer < 10 ? `0${timer}` : timer
        ] }),
        gameState === "question" && /* @__PURE__ */ jsxs("div", { className: "text-sm text-slate-500 mt-2", children: [
          t("Round"),
          " ",
          questionCount,
          "/5"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
        opponent ? /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-xl font-bold mb-2 shadow-[0_0_30px_rgba(220,38,38,0.6)] border-2 border-red-400", children: opponent.name ? opponent.name.charAt(0) : "?" }) : /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center text-xl font-bold mb-2 animate-pulse border border-slate-700", children: "?" }),
        /* @__PURE__ */ jsx("span", { className: "font-bold text-lg", children: opponent ? opponent.name : t("Searching...") }),
        /* @__PURE__ */ jsx("span", { className: "text-4xl font-black text-red-400 mt-2", children: opponentScore })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full max-w-3xl bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-3xl p-8 min-h-[400px] flex flex-col items-center justify-center relative shadow-2xl", children: [
      gameState === "waiting" && !opponent && /* @__PURE__ */ jsxs("div", { className: "text-center space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "w-20 h-20 border-t-4 border-l-4 border-blue-500 rounded-full animate-spin mx-auto" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-blue-500/20 rounded-full blur-xl" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold tracking-tight", children: t("Searching for Opponent") }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-400 mt-2", children: t("Connecting to global matchmaking server...") })
        ] })
      ] }),
      gameState === "starting" && /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-bounce", children: t("MATCH FOUND!") }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-300", children: t("Preparing battle...") })
      ] }),
      gameState === "question" && currentQuestion && /* @__PURE__ */ jsxs("div", { className: "w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4", children: [
          /* @__PURE__ */ jsx("span", { className: "px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest rounded-full border border-blue-500/20", children: currentQuestion.category || t("General Knowledge") }),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold leading-tight md:text-4xl", children: currentQuestion.question_text })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 w-full", children: currentQuestion.options.map((opt, idx) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => handleAnswer(opt),
            disabled: hasAnswered,
            className: `
                                        p-6 rounded-xl border-2 text-lg font-semibold transition-all duration-200
                                        ${hasAnswered ? opt === currentQuestion.correct_answer ? "bg-green-500/20 border-green-500 text-green-400" : "bg-slate-800/50 border-slate-700 text-slate-500 opacity-50" : "bg-slate-800/50 border-slate-700 hover:border-blue-500 hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98]"}
                                    `,
            children: opt
          },
          idx
        )) })
      ] }),
      gameState === "result" && /* @__PURE__ */ jsxs("div", { className: "text-center space-y-8 animate-in zoom-in duration-300", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-5xl font-black text-white", children: t("GAME OVER") }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm uppercase font-bold", children: t("You") }),
            /* @__PURE__ */ jsx("p", { className: `text-6xl font-black ${score > opponentScore ? "text-green-400" : "text-slate-200"}`, children: score })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm uppercase font-bold", children: t("Opponent") }),
            /* @__PURE__ */ jsx("p", { className: `text-6xl font-black ${opponentScore > score ? "text-green-400" : "text-slate-200"}`, children: opponentScore })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: score > opponentScore ? /* @__PURE__ */ jsx("span", { className: "text-green-400", children: t("VICTORY! +50 PTS") }) : score < opponentScore ? /* @__PURE__ */ jsx("span", { className: "text-red-400", children: t("DEFEAT -10 PTS") }) : /* @__PURE__ */ jsx("span", { className: "text-yellow-400", children: t("DRAW") }) }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => window.location.href = "/dashboard",
            className: "px-8 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition-colors",
            children: t("Back to Dashboard")
          }
        )
      ] })
    ] })
  ] });
}
export {
  ArenaPage as default
};
