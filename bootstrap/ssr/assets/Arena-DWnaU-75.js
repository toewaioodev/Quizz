import { jsx, jsxs } from "react/jsx-runtime";
import * as Ably from "ably";
import { AblyProvider, ChannelProvider, useChannel, useConnectionStateListener, usePresence, usePresenceListener } from "ably/react";
import { T as ThemeSwitcher } from "./ThemeSwitcher-C4YGyEOA.js";
import { usePage, Head } from "@inertiajs/react";
import axios from "axios";
import { useMemo, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
function ArenaPage({ match, ably_key }) {
  const user = usePage().props.auth.user;
  const client = useMemo(() => new Ably.Realtime({ key: ably_key, clientId: String(user.id) }), [ably_key, user.id]);
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
  useEffect(() => {
    if (opponent && gameState === "waiting") {
      setGameState("starting");
    }
  }, [opponent, gameState]);
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
  usePresence(`match:${match.channel_id}`);
  const { presenceData } = usePresenceListener(`match:${match.channel_id}`);
  const [opponentPresent, setOpponentPresent] = useState(false);
  useEffect(() => {
    const isOpponentHere = presenceData.some((p) => p.clientId === String(opponent?.id));
    setOpponentPresent(isOpponentHere);
  }, [presenceData, opponent]);
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
    else if (opponentScore > score) winnerId = opponent?.id;
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
          /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-blue-500 to-blue-700 text-lg font-bold text-white shadow-lg shadow-blue-500/30 md:h-16 md:w-16 md:text-xl dark:border-slate-800", children: user.name.charAt(0) }),
          /* @__PURE__ */ jsx("div", { className: "absolute -right-1 -bottom-1 rounded-full border border-white bg-slate-900 px-1.5 py-0.5 text-[10px] font-bold text-white md:text-xs dark:border-slate-800", children: "YOU" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx("span", { className: "max-w-[80px] truncate text-sm font-bold md:max-w-[150px] md:text-lg", children: user.name }),
          /* @__PURE__ */ jsx("span", { className: "text-xl leading-none font-black text-blue-600 md:text-3xl dark:text-blue-400", children: score })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
        gameState === "question" ? /* @__PURE__ */ jsxs(
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
        ) : /* @__PURE__ */ jsx("div", { className: "text-2xl font-black text-slate-300 italic md:text-4xl dark:text-slate-700", children: gameState === "starting" ? "VS" : gameState === "waiting" ? t("WAITING") : gameState === "result" ? t("GAME OVER") : "" }),
        /* @__PURE__ */ jsx("div", { className: "mt-1 text-[10px] font-bold tracking-widest text-slate-400 uppercase md:text-xs", children: gameState === "question" ? `${t("Round")} ${questionCount}/5` : "" })
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
                  className: `flex h-12 w-12 items-center justify-center rounded-full border-2 border-white text-lg font-bold text-white shadow-lg md:h-16 md:w-16 md:text-xl dark:border-slate-800 ${opponent ? "bg-gradient-to-br from-red-500 to-red-700 shadow-red-500/30" : "animate-pulse bg-slate-300 dark:bg-slate-800"}`,
                  children: opponent ? opponent.name ? opponent.name.charAt(0) : "?" : "?"
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
      gameState === "waiting" && /* @__PURE__ */ jsxs("div", { className: "animate-in fade-in md:p6 flex flex-1 flex-col items-center justify-center space-y-8 p-4 text-center duration-700 md:p-6", children: [
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
      gameState === "starting" && /* @__PURE__ */ jsxs("div", { className: "animate-in zoom-in flex flex-1 flex-col items-center justify-center space-y-6 p-8 text-center duration-500", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-4 text-6xl md:text-8xl", children: "⚔️" }),
        /* @__PURE__ */ jsx("h1", { className: "animate-bounce bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-black text-transparent md:text-6xl dark:from-blue-400 dark:to-purple-500", children: t("MATCH FOUND!") }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-600 dark:text-slate-300", children: t("Get Ready...") })
      ] }),
      gameState === "question" && currentQuestion && /* @__PURE__ */ jsxs("div", { className: "animate-in slide-in-from-bottom-8 flex flex-1 flex-col space-y-8 p-6 duration-500 md:p-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-center", children: [
          /* @__PURE__ */ jsx("span", { className: "inline-block rounded-full border border-blue-200 bg-blue-100 px-4 py-1.5 text-xs font-bold tracking-widest text-blue-600 uppercase dark:border-blue-500/20 dark:bg-blue-900/30 dark:text-blue-400", children: currentQuestion.category }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl leading-tight font-bold text-slate-800 md:text-4xl md:leading-tight dark:text-slate-100", children: currentQuestion.question_text })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-auto grid w-full grid-cols-1 gap-3 md:grid-cols-2 md:gap-4", children: currentQuestion.options.map((opt, idx) => {
          hasAnswered && opt === currentQuestion.correct_answer;
          hasAnswered && opt !== currentQuestion.correct_answer;
          return /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => handleAnswer(opt),
              disabled: hasAnswered,
              className: `group relative rounded-2xl border-2 p-4 text-left transition-all duration-200 md:p-6 ${hasAnswered ? opt === currentQuestion.correct_answer ? "scale-[1.02] border-green-600 bg-green-500 text-white shadow-lg shadow-green-500/20" : "border-transparent bg-slate-100 text-slate-400 opacity-50 dark:bg-slate-800/50" : "border-slate-200 bg-white text-slate-700 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 active:translate-y-0 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"} `,
              children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: `flex h-8 w-8 items-center justify-center rounded-lg border text-sm font-bold ${hasAnswered && opt === currentQuestion.correct_answer ? "border-white/40 bg-white/20 text-white" : "border-slate-200 bg-slate-100 text-slate-500 dark:border-slate-600 dark:bg-slate-700"}`,
                    children: String.fromCharCode(65 + idx)
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold", children: opt })
              ] })
            },
            idx
          );
        }) })
      ] }),
      gameState === "result" && /* @__PURE__ */ jsxs("div", { className: "animate-in zoom-in flex flex-1 flex-col items-center justify-center space-y-8 p-8 text-center duration-500", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-black tracking-tight text-slate-900 uppercase md:text-6xl dark:text-white", children: t("GAME OVER") }),
        /* @__PURE__ */ jsxs("div", { className: "flex w-full items-end justify-center gap-8 md:gap-16", children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: `flex flex-col items-center space-y-2 ${score > opponentScore ? "order-2 -mt-10 scale-110" : "order-1 opacity-80"}`,
              children: [
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  score > opponentScore && /* @__PURE__ */ jsx("div", { className: "absolute -top-10 left-1/2 -translate-x-1/2 text-4xl", children: "👑" }),
                  /* @__PURE__ */ jsx("div", { className: "flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-blue-600 text-3xl font-bold shadow-xl md:h-24 md:w-24 dark:border-slate-800", children: user.name.charAt(0) }),
                  /* @__PURE__ */ jsx("div", { className: "absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-2 py-1 text-xs font-bold text-white", children: "YOU" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "pt-2", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-3xl font-black md:text-5xl", children: score }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs font-bold text-slate-500 uppercase", children: "Points" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: `flex flex-col items-center space-y-2 ${opponentScore > score ? "order-2 -mt-10 scale-110" : "order-3 opacity-80"}`,
              children: [
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  opponentScore > score && /* @__PURE__ */ jsx("div", { className: "absolute -top-10 left-1/2 -translate-x-1/2 text-4xl", children: "👑" }),
                  /* @__PURE__ */ jsx("div", { className: "flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-red-600 text-3xl font-bold shadow-xl md:h-24 md:w-24 dark:border-slate-800", children: opponent ? opponent.name.charAt(0) : "?" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "pt-2 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-3xl font-black md:text-5xl", children: opponentScore }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs font-bold text-slate-500 uppercase", children: "Opponent" })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "pt-8", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-8 text-2xl font-bold md:text-3xl", children: score > opponentScore ? /* @__PURE__ */ jsx("span", { className: "text-green-500 drop-shadow-sm", children: t("VICTORY! +50 PTS") }) : score < opponentScore ? /* @__PURE__ */ jsx("span", { className: "text-red-500 drop-shadow-sm", children: t("DEFEAT -10 PTS") }) : /* @__PURE__ */ jsx("span", { className: "text-yellow-500 drop-shadow-sm", children: t("DRAW") }) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => window.location.href = "/dashboard",
              className: "rounded-2xl bg-slate-900 px-8 py-4 font-bold text-white shadow-xl transition-all hover:scale-105 active:scale-95 dark:bg-white dark:text-slate-900",
              children: t("Back to Dashboard")
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}
export {
  ArenaPage as default
};
