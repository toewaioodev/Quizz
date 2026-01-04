import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { N as Navbar } from "./Navbar-ClTv28i5.js";
import { useTranslation } from "react-i18next";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import "react";
import "@heroicons/react/20/solid";
import "./ThemeSwitcher-C4YGyEOA.js";
function FAQ() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: t("faq.title") }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-sans transition-colors duration-300", children: [
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsxs("main", { className: "max-w-4xl mx-auto px-6 py-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6", children: t("faq.title") }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto", children: t("faq.subtitle") })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [1, 2, 3, 4, 5].map((item) => /* @__PURE__ */ jsxs(Disclosure, { as: "div", className: "p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700", children: [
          /* @__PURE__ */ jsxs(DisclosureButton, { className: "group flex w-full items-center justify-between text-left", children: [
            /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold text-slate-900 dark:text-white", children: t(`faq.q${item}`) }),
            /* @__PURE__ */ jsx(ChevronDownIcon, { className: "w-5 h-5 text-slate-500 group-data-[open]:rotate-180 transition-transform" })
          ] }),
          /* @__PURE__ */ jsx(DisclosurePanel, { className: "mt-4 text-slate-600 dark:text-slate-400 leading-relaxed", children: t(`faq.a${item}`) })
        ] }, item)) })
      ] })
    ] })
  ] });
}
export {
  FAQ as default
};
