import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { N as Navbar } from "./Navbar-DMrX0KVo.js";
import { BoltIcon, CpuChipIcon, TrophyIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { Head, Link } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import "@headlessui/react";
import "react";
import "@heroicons/react/20/solid";
function Welcome() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: t("welcome.welcome_title") }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen overflow-x-hidden bg-slate-50 font-sans text-slate-900 transition-colors duration-300 selection:bg-blue-500 selection:text-white dark:bg-slate-950 dark:text-white", children: [
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsxs("main", { className: "relative isolate pt-14", children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10 overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-[-10%] left-[-10%] h-[500px] w-[500px] animate-pulse rounded-full bg-blue-500/20 blur-[120px]" }),
          /* @__PURE__ */ jsx("div", { className: "absolute right-[-10%] bottom-[-10%] h-[500px] w-[500px] animate-pulse rounded-full bg-purple-500/20 blur-[120px] delay-1000" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-[40%] left-[40%] h-[300px] w-[300px] animate-pulse rounded-full bg-indigo-500/10 blur-[100px] delay-500" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "relative z-10 py-24 sm:py-10 lg:pb-40", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
            /* @__PURE__ */ jsxs("h1", { className: "text-5xl font-black tracking-tight text-slate-900 drop-shadow-sm sm:text-7xl dark:text-white", children: [
              t("welcome.title"),
              " ",
              /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-violet-400", children: t("welcome.title_highlight") })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300", children: t("welcome.subtitle") }),
            /* @__PURE__ */ jsxs("div", { className: "mt-10 flex items-center justify-center gap-x-6", children: [
              /* @__PURE__ */ jsx(
                Link,
                {
                  href: "/login",
                  className: "rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-blue-500/20 transition-all duration-200 hover:scale-105 hover:shadow-blue-500/40",
                  children: t("welcome.cta_start")
                }
              ),
              /* @__PURE__ */ jsxs(
                Link,
                {
                  href: "/about",
                  className: "group flex items-center gap-1 text-sm leading-6 font-semibold text-slate-900 dark:text-white",
                  children: [
                    t("welcome.cta_learn"),
                    " ",
                    /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "transition-transform group-hover:translate-x-1", children: "→" })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-20 flow-root sm:mt-24", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: /* @__PURE__ */ jsx("dl", { className: "grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4", children: [
            {
              icon: BoltIcon,
              title: t("welcome.feature_realtime"),
              desc: t("welcome.feature_realtime_desc"),
              color: "text-blue-500"
            },
            {
              icon: CpuChipIcon,
              title: t("welcome.feature_ai"),
              desc: t("welcome.feature_ai_desc"),
              color: "text-purple-500"
            },
            {
              icon: TrophyIcon,
              title: t("welcome.feature_competitive"),
              desc: t("welcome.feature_competitive_desc"),
              color: "text-yellow-500"
            },
            {
              icon: UserGroupIcon,
              title: t("welcome.feature_community"),
              desc: t("welcome.feature_community_desc"),
              color: "text-green-500"
            }
          ].map((feature, idx) => /* @__PURE__ */ jsxs("div", { className: "group mx-auto flex max-w-xs flex-col gap-y-4", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: `mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg dark:bg-slate-800 ${feature.color} transition-transform duration-300 group-hover:scale-110`,
                children: /* @__PURE__ */ jsx(feature.icon, { className: "h-8 w-8" })
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsx("dt", { className: "text-sm leading-7 font-bold tracking-wider text-slate-500 uppercase dark:text-slate-400", children: feature.title }),
              /* @__PURE__ */ jsx("dd", { className: "text-2xl font-bold tracking-tight text-slate-900 dark:text-white", children: feature.desc })
            ] })
          ] }, idx)) }) }) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("footer", { className: "border-t border-slate-200 bg-white/80 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-12 lg:px-8", children: [
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
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-slate-600 dark:text-slate-400", children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/features", className: "hover:text-blue-500", children: "Features" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/pricing", className: "hover:text-blue-500", children: "Pricing" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/faq", className: "hover:text-blue-500", children: "FAQ" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/about", className: "hover:text-blue-500", children: "About" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-4 text-sm font-bold tracking-wider text-slate-900 uppercase dark:text-white", children: "Legal" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-slate-600 dark:text-slate-400", children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/privacy", className: "hover:text-blue-500", children: "Privacy Policy" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/terms", className: "hover:text-blue-500", children: "Terms of Service" }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 md:flex-row dark:border-slate-800", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-xs leading-5 text-slate-500 dark:text-slate-400", children: [
            "© ",
            (/* @__PURE__ */ new Date()).getFullYear(),
            " Quizz Inc. All rights reserved."
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex space-x-6", children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://github.com/toewaioo/quizz",
              className: "text-xs font-bold tracking-wider text-slate-400 uppercase hover:text-slate-500 dark:hover:text-slate-300",
              children: "Github"
            },
            "Github"
          ) }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-400 italic", children: t("welcome.footer") })
        ] })
      ] }) })
    ] })
  ] });
}
export {
  Welcome as default
};
