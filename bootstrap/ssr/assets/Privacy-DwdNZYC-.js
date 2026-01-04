import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { N as Navbar } from "./Navbar-ClTv28i5.js";
import { useTranslation } from "react-i18next";
import "@headlessui/react";
import "@heroicons/react/24/outline";
import "react";
import "@heroicons/react/20/solid";
import "./ThemeSwitcher-C4YGyEOA.js";
function Privacy() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: t("privacy.title") }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-sans transition-colors duration-300", children: [
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsxs("main", { className: "max-w-4xl mx-auto px-6 py-16", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold mb-8", children: t("privacy.title") }),
        /* @__PURE__ */ jsxs("div", { className: "prose dark:prose-invert max-w-none space-y-6", children: [
          /* @__PURE__ */ jsxs("section", { children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", children: t("privacy.section1_title") }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-600 dark:text-slate-400", children: t("privacy.section1_content") })
          ] }),
          /* @__PURE__ */ jsxs("section", { children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", children: t("privacy.section2_title") }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-600 dark:text-slate-400", children: t("privacy.section2_content") })
          ] }),
          /* @__PURE__ */ jsxs("section", { children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", children: t("privacy.section3_title") }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-600 dark:text-slate-400", children: t("privacy.section3_content") })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-500 mt-12", children: [
            t("privacy.last_updated"),
            ": ",
            (/* @__PURE__ */ new Date()).toLocaleDateString()
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  Privacy as default
};
