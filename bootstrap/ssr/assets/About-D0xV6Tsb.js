import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { N as Navbar } from "./Navbar-Ctort6BS.js";
import { useTranslation } from "react-i18next";
import "@headlessui/react";
import "@heroicons/react/24/outline";
import "react";
import "@heroicons/react/20/solid";
import "./ThemeSwitcher-C4YGyEOA.js";
function About() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: t("about.title") }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-sans transition-colors duration-300", children: [
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsxs("main", { className: "max-w-4xl mx-auto px-6 py-12", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-8", children: t("about.title") }),
        /* @__PURE__ */ jsxs("div", { className: "prose dark:prose-invert max-w-none space-y-6", children: [
          /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-700 dark:text-slate-300", children: t("about.description") }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mt-8 mb-4", children: t("about.mission_title") }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-600 dark:text-slate-400", children: t("about.mission_desc") }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mt-8 mb-4", children: t("about.team_title") }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-600 dark:text-slate-400", children: t("about.team_desc") })
        ] })
      ] })
    ] })
  ] });
}
export {
  About as default
};
