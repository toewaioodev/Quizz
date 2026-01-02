import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head, Link } from "@inertiajs/react";
import { N as Navbar } from "./Navbar-Cd4pwKEw.js";
import { BoltIcon, CpuChipIcon, TrophyIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import "react";
import "@headlessui/react";
import "@heroicons/react/20/solid";
import "./ThemeSwitcher-C4YGyEOA.js";
function Welcome() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: t("welcome.welcome_title") }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white font-sans transition-colors duration-300 overflow-x-hidden selection:bg-blue-500 selection:text-white", children: [
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsxs("main", { className: "relative isolate pt-14", children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10 overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-[-10%] left-[-10%] h-[500px] w-[500px] animate-pulse rounded-full bg-blue-500/20 blur-[120px]" }),
          /* @__PURE__ */ jsx("div", { className: "absolute right-[-10%] bottom-[-10%] h-[500px] w-[500px] animate-pulse rounded-full bg-purple-500/20 blur-[120px] delay-1000" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-[40%] left-[40%] h-[300px] w-[300px] animate-pulse rounded-full bg-indigo-500/10 blur-[100px] delay-500" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "py-24 sm:py-32 lg:pb-40 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
            /* @__PURE__ */ jsxs("h1", { className: "text-5xl font-black tracking-tight text-slate-900 dark:text-white sm:text-7xl drop-shadow-sm", children: [
              t("welcome.title"),
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400", children: t("welcome.title_highlight") })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-8 text-lg leading-8 text-slate-600 dark:text-slate-300 max-w-xl mx-auto", children: t("welcome.subtitle") }),
            /* @__PURE__ */ jsxs("div", { className: "mt-10 flex items-center justify-center gap-x-6", children: [
              /* @__PURE__ */ jsx(
                Link,
                {
                  href: "/login",
                  className: "rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-200",
                  children: t("welcome.cta_start")
                }
              ),
              /* @__PURE__ */ jsxs(Link, { href: "/about", className: "group text-sm font-semibold leading-6 text-slate-900 dark:text-white flex items-center gap-1", children: [
                t("welcome.cta_learn"),
                " ",
                /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "group-hover:translate-x-1 transition-transform", children: "→" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-20 flow-root sm:mt-24", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: /* @__PURE__ */ jsx("dl", { className: "grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4", children: [
            { icon: BoltIcon, title: t("welcome.feature_realtime"), desc: t("welcome.feature_realtime_desc"), color: "text-blue-500" },
            { icon: CpuChipIcon, title: t("welcome.feature_ai"), desc: t("welcome.feature_ai_desc"), color: "text-purple-500" },
            { icon: TrophyIcon, title: t("welcome.feature_competitive"), desc: t("welcome.feature_competitive_desc"), color: "text-yellow-500" },
            { icon: UserGroupIcon, title: t("welcome.feature_community"), desc: t("welcome.feature_community_desc"), color: "text-green-500" }
          ].map((feature, idx) => /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-xs flex-col gap-y-4 group", children: [
            /* @__PURE__ */ jsx("div", { className: `mx-auto h-14 w-14 rounded-2xl bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center ${feature.color} group-hover:scale-110 transition-transform duration-300`, children: /* @__PURE__ */ jsx(feature.icon, { className: "h-8 w-8" }) }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsx("dt", { className: "text-sm font-bold leading-7 text-slate-500 dark:text-slate-400 uppercase tracking-wider", children: feature.title }),
              /* @__PURE__ */ jsx("dd", { className: "text-2xl font-bold tracking-tight text-slate-900 dark:text-white", children: feature.desc })
            ] })
          ] }, idx)) }) }) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("footer", { className: "bg-white/80 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800 backdrop-blur-sm", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-12 lg:px-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg", children: "Q" }),
              /* @__PURE__ */ jsx("span", { className: "font-extrabold text-xl tracking-tight text-slate-900 dark:text-white", children: "Quizz" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500 dark:text-slate-400 max-w-xs", children: "Experience the next generation of quiz games. Powered by AI and real-time technology." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4", children: "Product" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-slate-600 dark:text-slate-400", children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/features", className: "hover:text-blue-500", children: "Features" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/pricing", className: "hover:text-blue-500", children: "Pricing" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/faq", className: "hover:text-blue-500", children: "FAQ" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/about", className: "hover:text-blue-500", children: "About" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4", children: "Legal" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-slate-600 dark:text-slate-400", children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/privacy", className: "hover:text-blue-500", children: "Privacy Policy" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href: "/terms", className: "hover:text-blue-500", children: "Terms of Service" }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-xs leading-5 text-slate-500 dark:text-slate-400", children: [
            "© ",
            (/* @__PURE__ */ new Date()).getFullYear(),
            " Quizz Inc. All rights reserved."
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex space-x-6", children: ["Twitter", "GitHub", "Discord"].map((social) => /* @__PURE__ */ jsx("a", { href: "#", className: "text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 text-xs uppercase font-bold tracking-wider", children: social }, social)) }),
          /* @__PURE__ */ jsx("span", { className: "text-slate-400 text-xs italic", children: t("welcome.footer") })
        ] })
      ] }) })
    ] })
  ] });
}
export {
  Welcome as default
};
