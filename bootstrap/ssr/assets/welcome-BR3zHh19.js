import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head, Link } from "@inertiajs/react";
import { N as Navbar } from "./Navbar-Dm214FRo.js";
import { BoltIcon, CpuChipIcon, TrophyIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import "react";
import "@headlessui/react";
import "@heroicons/react/20/solid";
function Welcome() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: t("welcome.welcome_title") }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-sans transition-colors duration-300", children: [
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsxs("main", { className: "relative isolate pt-14 dark:bg-slate-900", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80",
            "aria-hidden": "true",
            children: /* @__PURE__ */ jsx(
              "div",
              {
                className: "relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]",
                style: {
                  clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                }
              }
            )
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "py-24 sm:py-32 lg:pb-40", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
            /* @__PURE__ */ jsxs("h1", { className: "text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl", children: [
              t("welcome.title"),
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600", children: t("welcome.title_highlight") })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300", children: t("welcome.subtitle") }),
            /* @__PURE__ */ jsxs("div", { className: "mt-10 flex items-center justify-center gap-x-6", children: [
              /* @__PURE__ */ jsx(
                Link,
                {
                  href: "/login",
                  className: "rounded-xl bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all hover:scale-105",
                  children: t("welcome.cta_start")
                }
              ),
              /* @__PURE__ */ jsxs(Link, { href: "/about", className: "text-sm font-semibold leading-6 text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400", children: [
                t("welcome.cta_learn"),
                " ",
                /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "→" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-16 flow-root sm:mt-24", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: /* @__PURE__ */ jsxs("dl", { className: "grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-xs flex-col gap-y-4", children: [
              /* @__PURE__ */ jsx("div", { className: "mx-auto h-12 w-12 text-blue-600 dark:text-blue-400", children: /* @__PURE__ */ jsx(BoltIcon, { className: "h-full w-full" }) }),
              /* @__PURE__ */ jsx("dt", { className: "text-base leading-7 text-slate-600 dark:text-slate-400", children: t("welcome.feature_realtime") }),
              /* @__PURE__ */ jsx("dd", { className: "order-first text-3xl font-semibold tracking-tight text-slate-900 dark:text-white", children: t("welcome.feature_realtime_desc") })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-xs flex-col gap-y-4", children: [
              /* @__PURE__ */ jsx("div", { className: "mx-auto h-12 w-12 text-purple-600 dark:text-purple-400", children: /* @__PURE__ */ jsx(CpuChipIcon, { className: "h-full w-full" }) }),
              /* @__PURE__ */ jsx("dt", { className: "text-base leading-7 text-slate-600 dark:text-slate-400", children: t("welcome.feature_ai") }),
              /* @__PURE__ */ jsx("dd", { className: "order-first text-3xl font-semibold tracking-tight text-slate-900 dark:text-white", children: t("welcome.feature_ai_desc") })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-xs flex-col gap-y-4", children: [
              /* @__PURE__ */ jsx("div", { className: "mx-auto h-12 w-12 text-yellow-500 dark:text-yellow-400", children: /* @__PURE__ */ jsx(TrophyIcon, { className: "h-full w-full" }) }),
              /* @__PURE__ */ jsx("dt", { className: "text-base leading-7 text-slate-600 dark:text-slate-400", children: t("welcome.feature_competitive") }),
              /* @__PURE__ */ jsx("dd", { className: "order-first text-3xl font-semibold tracking-tight text-slate-900 dark:text-white", children: t("welcome.feature_competitive_desc") })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-xs flex-col gap-y-4", children: [
              /* @__PURE__ */ jsx("div", { className: "mx-auto h-12 w-12 text-green-500 dark:text-green-400", children: /* @__PURE__ */ jsx(UserGroupIcon, { className: "h-full w-full" }) }),
              /* @__PURE__ */ jsx("dt", { className: "text-base leading-7 text-slate-600 dark:text-slate-400", children: t("welcome.feature_community") }),
              /* @__PURE__ */ jsx("dd", { className: "order-first text-3xl font-semibold tracking-tight text-slate-900 dark:text-white", children: t("welcome.feature_community_desc") })
            ] })
          ] }) }) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("footer", { className: "bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8", children: [
        /* @__PURE__ */ jsx("div", { className: "mt-8 md:order-1 md:mt-0", children: /* @__PURE__ */ jsxs("p", { className: "text-center text-xs leading-5 text-slate-500 dark:text-slate-400", children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Quizz Inc. All rights reserved."
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center space-x-6 md:order-2", children: /* @__PURE__ */ jsx("span", { className: "text-slate-400 text-sm", children: t("welcome.footer") }) })
      ] }) })
    ] })
  ] });
}
export {
  Welcome as default
};
