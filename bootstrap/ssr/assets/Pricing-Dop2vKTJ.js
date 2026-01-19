import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { N as Navbar } from "./Navbar-CzkG3_zV.js";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Head } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import "@headlessui/react";
import "react";
import "@heroicons/react/20/solid";
function Pricing() {
  const { t } = useTranslation();
  const plans = ["free", "pro", "team"];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: t("pricing.title") }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-50 font-sans text-slate-900 transition-colors duration-300 dark:bg-slate-900 dark:text-white", children: [
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsxs("main", { className: "mx-auto max-w-7xl px-6 py-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-16 text-center", children: [
          /* @__PURE__ */ jsx("h1", { className: "mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl", children: t("pricing.title") }),
          /* @__PURE__ */ jsx("p", { className: "mx-auto max-w-2xl text-xl text-slate-600 dark:text-slate-400", children: t("pricing.subtitle") })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3", children: plans.map((plan) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: `relative flex flex-col rounded-3xl p-8 ${plan === "pro" ? "ring-opacity-50 scale-105 bg-slate-900 text-white shadow-2xl ring-4 ring-blue-600 dark:bg-slate-800" : "border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800/50"}`,
            children: [
              plan === "pro" && /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 -mt-1 -mr-1 h-24 w-24 overflow-hidden rounded-tr-3xl", children: /* @__PURE__ */ jsx("div", { className: "absolute top-[32px] left-[-25px] w-[170px] rotate-45 transform bg-blue-600 py-1 text-center font-semibold text-white", children: "Popular" }) }),
              /* @__PURE__ */ jsx("h3", { className: `mb-2 text-xl font-bold ${plan === "pro" ? "text-white" : "text-slate-900 dark:text-white"}`, children: t(`pricing.${plan}_name`) }),
              /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-baseline gap-1", children: [
                /* @__PURE__ */ jsx("span", { className: "text-4xl font-extrabold", children: t(`pricing.${plan}_price`) }),
                /* @__PURE__ */ jsxs("span", { className: "text-sm text-slate-500 dark:text-slate-400", children: [
                  "/",
                  t("pricing.month")
                ] })
              ] }),
              /* @__PURE__ */ jsx("ul", { className: "mb-8 flex-1 space-y-4", children: [1, 2, 3, 4].map((feature) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-sm", children: [
                /* @__PURE__ */ jsx(CheckIcon, { className: `h-5 w-5 flex-shrink-0 ${plan === "pro" ? "text-blue-400" : "text-blue-600"}` }),
                /* @__PURE__ */ jsx("span", { className: plan === "pro" ? "text-slate-300" : "text-slate-600 dark:text-slate-300", children: t(`pricing.${plan}_feature_${feature}`) })
              ] }, feature)) }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  className: `w-full rounded-xl px-6 py-3 font-bold transition-all ${plan === "pro" ? "bg-blue-600 text-white hover:bg-blue-500" : "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"}`,
                  children: t(`pricing.${plan}_cta`)
                }
              )
            ]
          },
          plan
        )) })
      ] })
    ] })
  ] });
}
export {
  Pricing as default
};
