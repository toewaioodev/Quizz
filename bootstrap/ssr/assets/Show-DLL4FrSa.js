import { jsxs, jsx } from "react/jsx-runtime";
import { usePage, useForm, Head } from "@inertiajs/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { B as BottomNav } from "./BottomNav-D-lEiZxP.js";
import { N as Navbar } from "./Navbar-B4WML4y7.js";
import "@heroicons/react/24/outline";
import "lucide-react";
import "@headlessui/react";
import "@heroicons/react/20/solid";
function Profile({ status, history, stats }) {
  const { t } = useTranslation();
  const user = usePage().props.auth.user;
  const [activeTab, setActiveTab] = useState("activity");
  const { data, setData, post, processing, recentlySuccessful, errors } = useForm({
    _method: "PATCH",
    settings: {
      difficulty: user.settings?.difficulty || "medium"
    },
    photo_url: user.profile_photo_path || "",
    username: user.username || ""
  });
  const submit = (e) => {
    e.preventDefault();
    post("/profile");
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-50 font-sans text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-gray-100 pb-20 md:pb-0", children: [
    /* @__PURE__ */ jsx(Head, { title: "Profile" }),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("div", { className: "relative pb-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden bg-white pb-10 pt-24 shadow-sm dark:bg-slate-900", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl opacity-50 dark:from-indigo-500/20 dark:via-purple-500/20 dark:to-pink-500/20" }),
        /* @__PURE__ */ jsxs("div", { className: "relative mx-auto flex max-w-lg flex-col items-center px-4 text-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative mb-4", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute -inset-1 animate-pulse rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-75 blur dark:opacity-100" }),
            /* @__PURE__ */ jsx(
              "img",
              {
                className: "relative h-24 w-24 rounded-full border-4 border-white object-cover shadow-xl dark:border-slate-800",
                src: data.photo_url || user.profile_photo_url || `https://ui-avatars.com/api/?name=${user.name}`,
                alt: user.name
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white shadow-lg ring-2 ring-white dark:ring-slate-900", children: Math.floor((user.points || 0) / 100) + 1 })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "text-2xl font-black tracking-tight text-slate-900 dark:text-white", children: user.name }),
          user.username && /* @__PURE__ */ jsxs("p", { className: "text-sm font-bold text-indigo-500", children: [
            "@",
            user.username
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-slate-500 dark:text-slate-400", children: user.email }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 flex w-full max-w-xs items-center justify-center rounded-xl bg-slate-100 p-1 dark:bg-slate-800/50", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setActiveTab("activity"),
                className: `flex-1 rounded-lg py-2 text-sm font-bold transition-all ${activeTab === "activity" ? "bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white" : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"}`,
                children: t("Activity")
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setActiveTab("settings"),
                className: `flex-1 rounded-lg py-2 text-sm font-bold transition-all ${activeTab === "settings" ? "bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white" : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"}`,
                children: t("Settings")
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("main", { className: "mx-auto max-w-lg px-4 pt-6", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: activeTab === "activity" ? /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -10 },
          transition: { duration: 0.2 },
          className: "space-y-6",
          children: [
            stats && /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "col-span-2 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 p-5 text-white shadow-lg shadow-blue-500/20", children: [
                /* @__PURE__ */ jsx("div", { className: "text-xs font-bold uppercase tracking-wider text-blue-100", children: t("Total Points") }),
                /* @__PURE__ */ jsxs("div", { className: "mt-1 flex items-baseline gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-4xl font-black", children: stats.points }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-blue-200", children: "pts" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-800", children: [
                /* @__PURE__ */ jsx("div", { className: "text-xs font-bold uppercase text-slate-400", children: t("Wins") }),
                /* @__PURE__ */ jsx("div", { className: "mt-1 text-2xl font-black text-green-500", children: stats.wins })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-800", children: [
                /* @__PURE__ */ jsx("div", { className: "text-xs font-bold uppercase text-slate-400", children: t("Losses") }),
                /* @__PURE__ */ jsx("div", { className: "mt-1 text-2xl font-black text-red-500", children: stats.losses })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "col-span-2 rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-800", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-xs font-bold uppercase text-slate-400", children: t("Win Rate") }),
                  /* @__PURE__ */ jsxs("div", { className: "text-xl font-black text-slate-800 dark:text-white", children: [
                    stats.total_games > 0 ? Math.round(stats.wins / stats.total_games * 100) : 0,
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700", children: /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "h-full bg-gradient-to-r from-blue-500 to-purple-500",
                    style: { width: `${stats.total_games > 0 ? stats.wins / stats.total_games * 100 : 0}%` }
                  }
                ) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsx("h3", { className: "px-1 text-sm font-bold uppercase tracking-wider text-slate-400", children: t("Recent Matches") }),
              history && history.length > 0 ? /* @__PURE__ */ jsx("div", { className: "space-y-3", children: history.map((match) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 rounded-2xl bg-white p-3 shadow-sm transition-transform active:scale-[0.98] dark:bg-slate-800", children: [
                /* @__PURE__ */ jsxs("div", { className: "relative shrink-0", children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      className: "h-10 w-10 rounded-full bg-slate-100 object-cover dark:bg-slate-700",
                      src: match.opponent?.avatar || `https://ui-avatars.com/api/?name=${match.opponent?.name || "?"}`,
                      alt: ""
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: `absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white dark:border-slate-800 ${match.result === "win" ? "bg-green-500" : match.result === "loss" ? "bg-red-500" : "bg-slate-400"}` })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ jsx("div", { className: "truncate font-bold text-slate-900 dark:text-white", children: match.opponent?.name || t("Unknown Opponent") }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs font-medium text-slate-500 dark:text-slate-400", children: match.date })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
                  /* @__PURE__ */ jsx("div", { className: `font-black ${match.result === "win" ? "text-green-500" : match.result === "loss" ? "text-red-500" : "text-slate-500"}`, children: match.result === "win" ? "WON" : match.result === "loss" ? "LOST" : "DRAW" }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs font-bold text-slate-400 dark:text-slate-500", children: match.score })
                ] })
              ] }, match.id)) }) : /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border-2 border-dashed border-slate-200 p-8 text-center dark:border-slate-700", children: [
                /* @__PURE__ */ jsx("div", { className: "mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-400 dark:bg-slate-800", children: /* @__PURE__ */ jsx("svg", { className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }) }) }),
                /* @__PURE__ */ jsx("p", { className: "font-medium text-slate-500 dark:text-slate-400", children: t("No matches played yet") })
              ] })
            ] })
          ]
        },
        "activity"
      ) : /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -10 },
          transition: { duration: 0.2 },
          children: /* @__PURE__ */ jsx("form", { onSubmit: submit, className: "rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx("label", { className: "mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400", children: t("Profile Photo") }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    className: "h-14 w-14 rounded-full border border-slate-200 dark:border-slate-700",
                    src: data.photo_url || user.profile_photo_url || `https://ui-avatars.com/api/?name=${user.name}`,
                    alt: user.name
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "url",
                    className: "w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium transition-colors focus:border-blue-500 focus:ring-0 dark:border-slate-700 dark:bg-slate-900/50 dark:text-white",
                    value: data.photo_url,
                    onChange: (e) => setData("photo_url", e.target.value),
                    placeholder: "https://..."
                  }
                ) })
              ] }),
              errors.photo_url && /* @__PURE__ */ jsx("div", { className: "mt-1 text-xs text-red-500", children: errors.photo_url })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400", children: t("Public Profile Link") }),
              /* @__PURE__ */ jsxs("div", { className: "relative flex items-center rounded-xl bg-indigo-50 px-4 py-3 dark:bg-indigo-900/20", children: [
                /* @__PURE__ */ jsx("div", { className: "min-w-0 flex-1 truncate text-sm font-bold text-indigo-600 dark:text-indigo-400", children: `${window.location.origin}/u/${user.username || user.id}` }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      navigator.clipboard.writeText(`${window.location.origin}/u/${user.username || user.id}`);
                      alert(t("Link copied!"));
                    },
                    className: "ml-3 rounded-lg bg-white p-1.5 text-indigo-500 shadow-sm transition-colors hover:text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300 dark:hover:text-indigo-200",
                    children: /* @__PURE__ */ jsx("svg", { className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" }) })
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs text-slate-400", children: t("Share this link to show off your stats.") })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid gap-5", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400", children: t("Display Name") }),
                /* @__PURE__ */ jsx("div", { className: "w-full rounded-xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700 dark:bg-slate-900/50 dark:text-slate-300", children: user.name })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400", children: t("Username") }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    className: "w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-900 transition-colors focus:border-blue-500 focus:ring-0 dark:border-slate-700 dark:bg-slate-900/50 dark:text-white",
                    value: data.username,
                    onChange: (e) => setData("username", e.target.value),
                    placeholder: t("Set a unique username")
                  }
                ),
                errors.username && /* @__PURE__ */ jsx("div", { className: "mt-1 text-xs text-red-500", children: errors.username })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400", children: t("Email Address") }),
                /* @__PURE__ */ jsx("div", { className: "w-full rounded-xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700 dark:bg-slate-900/50 dark:text-slate-300", children: user.email })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400", children: t("Quiz Difficulty") }),
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxs(
                    "select",
                    {
                      className: "w-full appearance-none rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-900 transition-colors focus:border-blue-500 focus:ring-0 dark:border-slate-700 dark:bg-slate-900/50 dark:text-white",
                      value: data.settings.difficulty,
                      onChange: (e) => setData("settings", { ...data.settings, difficulty: e.target.value }),
                      children: [
                        /* @__PURE__ */ jsx("option", { value: "easy", children: t("Easy") }),
                        /* @__PURE__ */ jsx("option", { value: "medium", children: t("Medium") }),
                        /* @__PURE__ */ jsx("option", { value: "hard", children: t("Hard") })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500", children: /* @__PURE__ */ jsx("svg", { className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) }) })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "mt-2 text-xs text-slate-400", children: t("Default difficulty for single player quizzes.") })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "pt-2", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "submit",
                  disabled: processing,
                  className: "flex w-full items-center justify-center rounded-xl bg-slate-900 py-3.5 text-sm font-bold text-white shadow-lg transition-transform active:scale-[0.98] disabled:opacity-50 dark:bg-white dark:text-slate-900",
                  children: processing ? /* @__PURE__ */ jsx("div", { className: "h-5 w-5 animate-spin rounded-full border-2 border-slate-400 border-t-white" }) : t("Save Changes")
                }
              ),
              /* @__PURE__ */ jsx(AnimatePresence, { children: recentlySuccessful && /* @__PURE__ */ jsx(
                motion.p,
                {
                  initial: { opacity: 0, y: 5 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0 },
                  className: "mt-3 text-center text-xs font-medium text-green-500",
                  children: t("Settings saved successfully!")
                }
              ) })
            ] })
          ] }) })
        },
        "settings"
      ) }) })
    ] }),
    /* @__PURE__ */ jsx(BottomNav, {})
  ] });
}
export {
  Profile as default
};
