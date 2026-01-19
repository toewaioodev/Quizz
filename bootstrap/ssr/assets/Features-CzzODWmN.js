import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { N as Navbar } from "./Navbar-CzkG3_zV.js";
import { ChartBarIcon, GlobeAltIcon, UserGroupIcon, TrophyIcon, CpuChipIcon, BoltIcon } from "@heroicons/react/24/outline";
import { Head } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import "@headlessui/react";
import "react";
import "@heroicons/react/20/solid";
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
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-50 font-sans text-slate-900 transition-colors duration-300 dark:bg-slate-900 dark:text-white", children: [
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsxs("main", { className: "mx-auto max-w-7xl px-6 py-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-16 text-center", children: [
          /* @__PURE__ */ jsx("h1", { className: "mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl", children: t("features.title") }),
          /* @__PURE__ */ jsx("p", { className: "mx-auto max-w-2xl text-xl text-slate-600 dark:text-slate-400", children: t("features.subtitle") })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3", children: featureKeys.map((key) => {
          const Icon = icons[key] || BoltIcon;
          return /* @__PURE__ */ jsxs(
            "div",
            {
              className: "rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-xl dark:border-slate-700 dark:bg-slate-800",
              children: [
                /* @__PURE__ */ jsx("div", { className: "mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400", children: /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6" }) }),
                /* @__PURE__ */ jsx("h3", { className: "mb-3 text-xl font-bold", children: t(`features.${key}_title`) }),
                /* @__PURE__ */ jsx("p", { className: "leading-relaxed text-slate-600 dark:text-slate-400", children: t(`features.${key}_desc`) })
              ]
            },
            key
          );
        }) })
      ] })
    ] })
  ] });
}
export {
  Features as default
};
