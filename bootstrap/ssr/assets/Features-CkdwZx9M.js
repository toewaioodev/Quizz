import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { N as Navbar } from "./Navbar-ClTv28i5.js";
import { useTranslation } from "react-i18next";
import { ChartBarIcon, GlobeAltIcon, UserGroupIcon, TrophyIcon, CpuChipIcon, BoltIcon } from "@heroicons/react/24/outline";
import "@headlessui/react";
import "react";
import "@heroicons/react/20/solid";
import "./ThemeSwitcher-C4YGyEOA.js";
const icons = {
  realtime: BoltIcon,
  ai: CpuChipIcon,
  competitive: TrophyIcon,
  community: UserGroupIcon,
  global: GlobeAltIcon,
  stats: ChartBarIcon
};
function Features() {
  const { t } = useTranslation();
  const featureKeys = ["realtime", "ai", "competitive", "community", "global", "stats"];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: t("features.title") }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white font-sans transition-colors duration-300", children: [
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsxs("main", { className: "max-w-7xl mx-auto px-6 py-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6", children: t("features.title") }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto", children: t("features.subtitle") })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: featureKeys.map((key) => {
          const Icon = icons[key] || BoltIcon;
          return /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100 dark:border-slate-700", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6", children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-3", children: t(`features.${key}_title`) }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-600 dark:text-slate-400 leading-relaxed", children: t(`features.${key}_desc`) })
          ] }, key);
        }) })
      ] })
    ] })
  ] });
}
export {
  Features as default
};
