import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { N as Navbar } from "./Navbar-Cd4pwKEw.js";
import { useTranslation } from "react-i18next";
import { CheckIcon } from "@heroicons/react/24/outline";
import "react";
import "@headlessui/react";
import "@heroicons/react/20/solid";
import "./ThemeSwitcher-C4YGyEOA.js";
function Pricing() {
  const { t } = useTranslation();
  const plans = ["free", "pro", "team"];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: t("pricing.title") }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-sans transition-colors duration-300", children: [
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsxs("main", { className: "max-w-7xl mx-auto px-6 py-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6", children: t("pricing.title") }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto", children: t("pricing.subtitle") })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto", children: plans.map((plan) => /* @__PURE__ */ jsxs("div", { className: `relative flex flex-col p-8 rounded-3xl ${plan === "pro" ? "bg-slate-900 dark:bg-slate-800 text-white ring-4 ring-blue-600 ring-opacity-50 scale-105 shadow-2xl" : "bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"}`, children: [
          plan === "pro" && /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 -mr-1 -mt-1 w-24 h-24 overflow-hidden rounded-tr-3xl", children: /* @__PURE__ */ jsx("div", { className: "absolute transform rotate-45 bg-blue-600 text-center text-white font-semibold py-1 left-[-25px] top-[32px] w-[170px]", children: "Popular" }) }),
          /* @__PURE__ */ jsx("h3", { className: `text-xl font-bold mb-2 ${plan === "pro" ? "text-white" : "text-slate-900 dark:text-white"}`, children: t(`pricing.${plan}_name`) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-1 mb-6", children: [
            /* @__PURE__ */ jsx("span", { className: "text-4xl font-extrabold", children: t(`pricing.${plan}_price`) }),
            /* @__PURE__ */ jsxs("span", { className: "text-sm text-slate-500 dark:text-slate-400", children: [
              "/",
              t("pricing.month")
            ] })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "mb-8 space-y-4 flex-1", children: [1, 2, 3, 4].map((feature) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-sm", children: [
            /* @__PURE__ */ jsx(CheckIcon, { className: `w-5 h-5 flex-shrink-0 ${plan === "pro" ? "text-blue-400" : "text-blue-600"}` }),
            /* @__PURE__ */ jsx("span", { className: plan === "pro" ? "text-slate-300" : "text-slate-600 dark:text-slate-300", children: t(`pricing.${plan}_feature_${feature}`) })
          ] }, feature)) }),
          /* @__PURE__ */ jsx("button", { className: `w-full py-3 px-6 rounded-xl font-bold transition-all ${plan === "pro" ? "bg-blue-600 hover:bg-blue-500 text-white" : "bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-white"}`, children: t(`pricing.${plan}_cta`) })
        ] }, plan)) })
      ] })
    ] })
  ] });
}
export {
  Pricing as default
};
