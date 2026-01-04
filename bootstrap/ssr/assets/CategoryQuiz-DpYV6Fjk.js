import { jsxs, jsx } from "react/jsx-runtime";
import { usePage, Head, Link } from "@inertiajs/react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
function CategoryQuiz({ categoryId, categoryName }) {
  const { t, i18n } = useTranslation();
  const { auth } = usePage().props;
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ correct: 0, total: 0, streak: 0 });
  const [result, setResult] = useState(null);
  const [points, setPoints] = useState(auth.user.points);
  useEffect(() => {
    fetchQuestion();
  }, [categoryId]);
  const fetchQuestion = async () => {
    setLoading(true);
    setResult(null);
    try {
      const res = await axios.post("/quiz/generate", {
        topic: categoryId,
        difficulty: auth.user.settings?.difficulty || "medium",
        language: i18n.language === "en-US" ? "en" : i18n.language || "en"
      });
      setCurrentQuestion(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const submitAnswer = async (option) => {
    if (result || !currentQuestion) return;
    try {
      const res = await axios.post("/quiz/answer", {
        question_id: currentQuestion.id,
        selected_option: option
      });
      const data = res.data;
      setResult(data);
      setPoints(data.new_total_points);
      if (data.correct) {
        new Audio("/sounds/correct.mp3").play().catch(() => {
        });
        setStats((s) => ({
          correct: s.correct + 1,
          total: s.total + 1,
          streak: s.streak + 1
        }));
      } else {
        new Audio("/sounds/wrong.mp3").play().catch(() => {
        });
        setStats((s) => ({
          ...s,
          total: s.total + 1,
          streak: 0
        }));
      }
    } catch (e) {
      console.error(e);
    }
  };
  const displayQuestionText = i18n.language === "my" && currentQuestion?.question_text_my ? currentQuestion.question_text_my : currentQuestion?.question_text;
  const displayOptions = i18n.language === "my" && currentQuestion?.options_my ? currentQuestion.options_my : currentQuestion?.options;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-50 font-sans text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-gray-100", children: [
    /* @__PURE__ */ jsx(Head, { title: `${categoryName} Quiz` }),
    /* @__PURE__ */ jsx("header", { className: "fixed top-0 right-0 left-0 z-50 border-b border-slate-200 bg-white/80 px-4 py-3 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-4xl items-center justify-between", children: [
      /* @__PURE__ */ jsxs(
        Link,
        {
          href: "/",
          className: "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-bold text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200",
          children: [
            /* @__PURE__ */ jsx("svg", { className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10 19l-7-7m0 0l7-7m-7 7h18" }) }),
            t("Exit")
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "hidden sm:block", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold tracking-wider text-slate-400 uppercase", children: t("Category") }),
          /* @__PURE__ */ jsx("div", { className: "font-bold", children: t(categoryName) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hidden h-8 w-px bg-slate-200 sm:block dark:bg-slate-700" }),
        /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold tracking-wider text-slate-400 uppercase", children: t("SCORE") }),
          /* @__PURE__ */ jsx("div", { className: "text-xl font-black text-blue-600 dark:text-blue-400", children: points })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "fixed top-[61px] right-0 left-0 z-40 h-1 bg-slate-200 dark:bg-slate-800", children: /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { width: 0 },
        animate: { width: `${Math.min(stats.correct / (stats.total || 1) * 100, 100)}%` },
        className: "h-full bg-green-500"
      }
    ) }),
    /* @__PURE__ */ jsx("main", { className: "flex min-h-screen flex-col items-center justify-center p-4 pt-24 pb-12", children: /* @__PURE__ */ jsx("div", { className: "w-full max-w-2xl", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: loading ? /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "flex flex-col items-center justify-center py-20",
        children: [
          /* @__PURE__ */ jsx("div", { className: "h-16 w-16 animate-spin rounded-full border-4 border-slate-200 border-t-blue-500" }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 font-medium text-slate-500", children: t("Loading questions...") })
        ]
      },
      "loader"
    ) : currentQuestion ? /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.3 },
        className: "space-y-8",
        children: [
          stats.streak > 1 && /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1 text-sm font-bold text-orange-600 dark:bg-orange-900/30 dark:text-orange-400", children: [
            /* @__PURE__ */ jsx("span", { children: "🔥" }),
            /* @__PURE__ */ jsxs("span", { children: [
              stats.streak,
              " ",
              t("Streak!")
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden rounded-3xl bg-white p-8 shadow-2xl dark:bg-slate-800/50 dark:ring-1 dark:ring-white/10", children: /* @__PURE__ */ jsx("h2", { className: "text-center text-2xl leading-tight font-black text-slate-800 md:text-3xl dark:text-white", children: displayQuestionText }) }),
          /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: displayOptions?.map((opt, idx) => {
            const originalOption = currentQuestion.options[idx];
            let btnClass = "group relative overflow-hidden rounded-2xl border-2 p-5 text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500/50 ";
            if (result) {
              if (originalOption === result.correct_answer) {
                btnClass += "border-green-500 bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300 z-10 scale-[1.02] shadow-green-500/20";
              } else if (originalOption === result.selected_option && !result.correct) {
                btnClass += "border-red-500 bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300 opacity-80";
              } else {
                btnClass += "border-slate-200 bg-slate-50 opacity-40 dark:border-slate-700 dark:bg-slate-800/50";
              }
            } else {
              btnClass += "border-slate-200 bg-white hover:border-blue-500 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:bg-blue-900/20";
            }
            return /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => !result && submitAnswer(originalOption),
                disabled: !!result,
                className: btnClass,
                children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border text-sm font-bold transition-colors ${result && (originalOption === result.correct_answer || originalOption === result.selected_option && !result.correct) ? "border-transparent bg-white/20" : "border-slate-200 bg-slate-100 text-slate-500 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-400"}`,
                      children: String.fromCharCode(65 + idx)
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "font-bold", children: opt })
                ] })
              },
              idx
            );
          }) }),
          /* @__PURE__ */ jsx(AnimatePresence, { children: result && /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              className: "fixed right-0 bottom-0 left-0 z-50 border-t border-slate-200 bg-white p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] dark:border-slate-800 dark:bg-slate-900",
              children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-4xl items-center justify-between", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: `flex h-12 w-12 items-center justify-center rounded-full text-2xl ${result.correct ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`,
                      children: result.correct ? "✓" : "✗"
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: `font-black uppercase ${result.correct ? "text-green-600" : "text-red-500"}`, children: result.correct ? t("Correct!") : t("Wrong Answer") }),
                    /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-slate-500 dark:text-slate-400", children: result.correct ? `+${result.points_earned} PTS` : t("Don't give up!") })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onClick: () => fetchQuestion(),
                    className: "flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95 dark:bg-white dark:text-slate-900",
                    children: [
                      t("Next Question"),
                      /* @__PURE__ */ jsx("svg", { className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M14 5l7 7m0 0l-7 7m7-7H3"
                        }
                      ) })
                    ]
                  }
                )
              ] })
            }
          ) })
        ]
      },
      currentQuestion.id
    ) : /* @__PURE__ */ jsxs("div", { className: "text-center text-red-500", children: [
      /* @__PURE__ */ jsx("p", { children: t("Failed to load question.") }),
      /* @__PURE__ */ jsx("button", { onClick: () => fetchQuestion(), className: "mt-4 underline", children: t("Try Again") })
    ] }) }) }) })
  ] });
}
export {
  CategoryQuiz as default
};
