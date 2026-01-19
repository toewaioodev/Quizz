import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { N as Navbar } from "./Navbar-CzkG3_zV.js";
import { TrophyIcon, BoltIcon, UserGroupIcon, CpuChipIcon } from "@heroicons/react/24/outline";
import { Head, Link } from "@inertiajs/react";
import { useMotionValue, useSpring, useTransform, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "@headlessui/react";
import "react";
import "@heroicons/react/20/solid";
function Hero3D() {
  const { t } = useTranslation();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 50 });
  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set((clientX - left) / width - 0.5);
    y.set((clientY - top) / height - 0.5);
  }
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);
  return /* @__PURE__ */ jsx("main", { className: "relative isolate pt-14", onMouseMove, children: /* @__PURE__ */ jsx("div", { className: "relative z-10 py-1 lg:pb-40", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:grid lg:grid-cols-12 lg:gap-x-16 lg:items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "max-w-2xl text-center lg:col-span-6 lg:text-left z-20 relative", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 mb-6 backdrop-blur-md dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-400", children: [
              /* @__PURE__ */ jsxs("span", { className: "relative flex h-2 w-2", children: [
                /* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" }),
                /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-blue-500" })
              ] }),
              "Next Gen Quiz Platform"
            ] }),
            /* @__PURE__ */ jsxs("h1", { className: "text-5xl font-black tracking-tight text-slate-900 drop-shadow-sm sm:text-7xl dark:text-white", children: [
              t("welcome.title"),
              " ",
              /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent", children: t("welcome.title_highlight") })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-8 text-lg leading-8 text-slate-600 dark:text-slate-300", children: t("welcome.subtitle") }),
            /* @__PURE__ */ jsxs("div", { className: "mt-10 flex items-center justify-center gap-x-6 lg:justify-start", children: [
              /* @__PURE__ */ jsxs(
                Link,
                {
                  href: "/login",
                  className: "relative overflow-hidden rounded-2xl bg-slate-900 dark:bg-white px-8 py-4 text-base font-bold text-white dark:text-slate-900 shadow-xl shadow-blue-500/20 transition-transform hover:scale-105 active:scale-95",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "relative z-10", children: t("welcome.cta_start") }),
                    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-0 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-100 dark:to-indigo-100 opacity-0 transition-opacity hover:opacity-10 dark:hover:opacity-100" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                Link,
                {
                  href: "/about",
                  className: "group flex items-center gap-1 text-sm leading-6 font-semibold text-slate-900 dark:text-white transition-colors hover:text-blue-600 dark:hover:text-blue-300",
                  children: [
                    t("welcome.cta_learn"),
                    " ",
                    /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "transition-transform group-hover:translate-x-1", children: "→" })
                  ]
                }
              )
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 lg:mt-0 lg:col-span-6 perspective-1000", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          style: { rotateX, rotateY, transformStyle: "preserve-3d" },
          className: "relative aspect-square max-w-lg mx-auto lg:mr-0",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", style: { transform: "translateZ(50px)" }, children: /* @__PURE__ */ jsxs("div", { className: "w-64 h-80 rounded-3xl border border-slate-200 bg-white/80 dark:border-white/10 dark:bg-slate-900/60 backdrop-blur-xl shadow-2xl p-6 flex flex-col items-center gap-4 transition-colors", children: [
              /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-0.5", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full rounded-full bg-white dark:bg-slate-950 flex items-center justify-center", children: /* @__PURE__ */ jsx(TrophyIcon, { className: "w-8 h-8 text-yellow-500 dark:text-yellow-400" }) }) }),
              /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsx("div", { className: "text-2xl font-black text-slate-900 dark:text-white", children: "Victory!" }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-500 dark:text-slate-400 font-mono mt-1", children: "+250 PTS" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "w-full bg-slate-100 dark:bg-slate-800/50 rounded-xl p-3 mt-auto", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-1", children: [
                  /* @__PURE__ */ jsx("span", { children: "Accuracy" }),
                  /* @__PURE__ */ jsx("span", { className: "text-green-500 dark:text-green-400", children: "92%" })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "h-full w-[92%] bg-green-500 rounded-full" }) })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "absolute top-10 left-0 w-40 p-4 rounded-2xl border border-slate-200 bg-white/80 dark:border-white/10 dark:bg-slate-800/60 backdrop-blur-md shadow-xl transition-colors",
                style: { transform: "translateZ(80px) translate(-20%, -20%)" },
                animate: { y: [0, -10, 0] },
                transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center", children: /* @__PURE__ */ jsx(BoltIcon, { className: "w-4 h-4 text-blue-600 dark:text-blue-400" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-500 dark:text-slate-400", children: "Speed" }),
                    /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-slate-900 dark:text-white", children: "1.2s" })
                  ] })
                ] })
              }
            ),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "absolute bottom-20 right-0 w-48 p-4 rounded-2xl border border-slate-200 bg-white/80 dark:border-white/10 dark:bg-slate-800/60 backdrop-blur-md shadow-xl transition-colors",
                style: { transform: "translateZ(100px) translate(20%, 20%)" },
                animate: { y: [0, 10, 0] },
                transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
                children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center", children: /* @__PURE__ */ jsx(UserGroupIcon, { className: "w-4 h-4 text-purple-600 dark:text-purple-400" }) }),
                    /* @__PURE__ */ jsx("div", { className: "absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-slate-800" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-500 dark:text-slate-400", children: "Live Match" }),
                    /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-slate-900 dark:text-white", children: "Searching..." })
                  ] })
                ] })
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "absolute inset-0 rounded-full border border-blue-500/10 dark:border-blue-500/20 border-dashed animate-[spin_10s_linear_infinite]",
                style: { transform: "translateZ(-50px) scale(1.2)" }
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "absolute inset-0 rounded-full border border-purple-500/5 dark:border-purple-500/10 border-dashed animate-[spin_15s_linear_infinite_reverse]",
                style: { transform: "translateZ(-80px) scale(1.5)" }
              }
            )
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-32 sm:mt-40", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl text-center mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white", children: "Everything you need to compete" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-slate-600 dark:text-slate-400", children: "Advanced features powered by modern web technology." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-2 relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 group", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[80px] group-hover:bg-blue-500/20 dark:group-hover:bg-blue-500/30 transition-colors" }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 h-full flex flex-col justify-between", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-2xl bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4", children: /* @__PURE__ */ jsx(BoltIcon, { className: "w-6 h-6" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-slate-900 dark:text-white mb-2", children: t("welcome.feature_realtime") }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-600 dark:text-slate-400", children: t("welcome.feature_realtime_desc") })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 group", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-[80px] group-hover:bg-purple-500/20 dark:group-hover:bg-purple-500/30 transition-colors" }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 h-full flex flex-col justify-between", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-2xl bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4", children: /* @__PURE__ */ jsx(CpuChipIcon, { className: "w-6 h-6" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-slate-900 dark:text-white mb-2", children: t("welcome.feature_ai") }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-600 dark:text-slate-400", children: t("welcome.feature_ai_desc") })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 group", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-yellow-500/10 dark:bg-yellow-500/20 rounded-full blur-[80px] group-hover:bg-yellow-500/20 dark:group-hover:bg-yellow-500/30 transition-colors" }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 h-full flex flex-col justify-between", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-2xl bg-yellow-500/10 dark:bg-yellow-500/20 flex items-center justify-center text-yellow-600 dark:text-yellow-400 mb-4", children: /* @__PURE__ */ jsx(TrophyIcon, { className: "w-6 h-6" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-slate-900 dark:text-white mb-2", children: t("welcome.feature_competitive") }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-600 dark:text-slate-400", children: t("welcome.feature_competitive_desc") })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-2 relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:shadow-xl dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 group", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 -mr-16 -mb-16 w-64 h-64 bg-green-500/10 dark:bg-green-500/20 rounded-full blur-[80px] group-hover:bg-green-500/20 dark:group-hover:bg-green-500/30 transition-colors" }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 h-full flex flex-col justify-between", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-2xl bg-green-500/10 dark:bg-green-500/20 flex items-center justify-center text-green-600 dark:text-green-400 mb-4", children: /* @__PURE__ */ jsx(UserGroupIcon, { className: "w-6 h-6" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-slate-900 dark:text-white mb-2", children: t("welcome.feature_community") }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-600 dark:text-slate-400", children: t("welcome.feature_community_desc") })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] }) }) });
}
function Welcome() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: t("welcome.welcome_title") }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen overflow-x-hidden bg-slate-50 font-sans text-slate-900 transition-colors duration-300 selection:bg-blue-500 selection:text-white dark:bg-slate-950 dark:text-white", children: [
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsx(Hero3D, {}),
      /* @__PURE__ */ jsx("footer", { className: "border-t border-slate-200 bg-white/80 backdrop-blur-sm dark:border-white/10 dark:bg-slate-900/50", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-12 lg:px-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-8 grid grid-cols-1 gap-8 md:grid-cols-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 text-lg font-bold text-white", children: "Q" }),
              /* @__PURE__ */ jsx("span", { className: "text-xl font-extrabold tracking-tight text-slate-900 dark:text-white", children: "Quizz" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "max-w-xs text-sm text-slate-500 dark:text-slate-400", children: "Experience the next generation of quiz games. Powered by AI and real-time technology." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-4 text-sm font-bold tracking-wider text-slate-900 uppercase dark:text-white", children: "Product" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-slate-500 dark:text-slate-400", children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/features", className: "hover:text-blue-500 dark:hover:text-blue-400 transition-colors", children: "Features" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/pricing", className: "hover:text-blue-500 dark:hover:text-blue-400 transition-colors", children: "Pricing" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/faq", className: "hover:text-blue-500 dark:hover:text-blue-400 transition-colors", children: "FAQ" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/about", className: "hover:text-blue-500 dark:hover:text-blue-400 transition-colors", children: "About" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-4 text-sm font-bold tracking-wider text-slate-900 uppercase dark:text-white", children: "Legal" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-slate-500 dark:text-slate-400", children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/privacy", className: "hover:text-blue-500 dark:hover:text-blue-400 transition-colors", children: "Privacy Policy" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/terms", className: "hover:text-blue-500 dark:hover:text-blue-400 transition-colors", children: "Terms of Service" }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 md:flex-row dark:border-white/10", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-xs leading-5 text-slate-500 dark:text-slate-500", children: [
            "© ",
            (/* @__PURE__ */ new Date()).getFullYear(),
            " Quizz Inc. All rights reserved."
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex space-x-6", children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://github.com/toewaioo/quizz",
              className: "text-xs font-bold tracking-wider text-slate-400 uppercase hover:text-slate-500 dark:hover:text-slate-300 dark:text-slate-400",
              children: "Github"
            },
            "Github"
          ) }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-500 italic", children: t("welcome.footer") })
        ] })
      ] }) })
    ] })
  ] });
}
export {
  Welcome as default
};
