import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { N as Navbar } from "./Navbar-DMrX0KVo.js";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Head } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import "react";
import "@heroicons/react/20/solid";
function FAQ() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: t("faq.title") }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-50 font-sans text-slate-900 transition-colors duration-300 dark:bg-slate-900 dark:text-white", children: [
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsxs("main", { className: "mx-auto max-w-4xl px-6 py-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-16 text-center", children: [
          /* @__PURE__ */ jsx("h1", { className: "mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl", children: t("faq.title") }),
          /* @__PURE__ */ jsx("p", { className: "mx-auto max-w-2xl text-xl text-slate-600 dark:text-slate-400", children: t("faq.subtitle") })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [1, 2, 3, 4, 5].map((item) => /* @__PURE__ */ jsxs(
          Disclosure,
          {
            as: "div",
            className: "rounded-2xl border border-slate-100 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800",
            children: [
              /* @__PURE__ */ jsxs(DisclosureButton, { className: "group flex w-full items-center justify-between text-left", children: [
                /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold text-slate-900 dark:text-white", children: t(`faq.q${item}`) }),
                /* @__PURE__ */ jsx(ChevronDownIcon, { className: "h-5 w-5 text-slate-500 transition-transform group-data-[open]:rotate-180" })
              ] }),
              /* @__PURE__ */ jsx(DisclosurePanel, { className: "mt-4 leading-relaxed text-slate-600 dark:text-slate-400", children: t(`faq.a${item}`) })
            ]
          },
          item
        )) })
      ] })
    ] })
  ] });
}
export {
  FAQ as default
};
