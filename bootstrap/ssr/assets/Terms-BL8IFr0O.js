import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { N as Navbar } from "./Navbar-DMrX0KVo.js";
import { Head } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import "@headlessui/react";
import "@heroicons/react/24/outline";
import "react";
import "@heroicons/react/20/solid";
function Terms() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: t("terms.title") }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-50 font-sans text-slate-900 transition-colors duration-300 dark:bg-slate-900 dark:text-white", children: [
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsxs("main", { className: "mx-auto max-w-4xl px-6 py-16", children: [
        /* @__PURE__ */ jsx("h1", { className: "mb-8 text-4xl font-bold", children: t("terms.title") }),
        /* @__PURE__ */ jsxs("div", { className: "prose dark:prose-invert max-w-none space-y-6", children: [
          /* @__PURE__ */ jsxs("section", { children: [
            /* @__PURE__ */ jsx("h2", { className: "mb-4 text-2xl font-bold", children: t("terms.section1_title") }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-600 dark:text-slate-400", children: t("terms.section1_content") })
          ] }),
          /* @__PURE__ */ jsxs("section", { children: [
            /* @__PURE__ */ jsx("h2", { className: "mb-4 text-2xl font-bold", children: t("terms.section2_title") }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-600 dark:text-slate-400", children: t("terms.section2_content") })
          ] }),
          /* @__PURE__ */ jsxs("section", { children: [
            /* @__PURE__ */ jsx("h2", { className: "mb-4 text-2xl font-bold", children: t("terms.section3_title") }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-600 dark:text-slate-400", children: t("terms.section3_content") })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "mt-12 text-sm text-slate-500", children: [
            t("terms.last_updated"),
            ": ",
            (/* @__PURE__ */ new Date()).toLocaleDateString()
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  Terms as default
};
