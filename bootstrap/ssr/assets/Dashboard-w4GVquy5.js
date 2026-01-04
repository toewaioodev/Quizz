import { jsxs, jsx } from "react/jsx-runtime";
import { usePage, Head, Link } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import { N as Navbar } from "./Navbar-ClTv28i5.js";
import "@headlessui/react";
import "@heroicons/react/24/outline";
import "react";
import "@heroicons/react/20/solid";
import "./ThemeSwitcher-C4YGyEOA.js";
function Dashboard({ categoryCounts }) {
  const { t } = useTranslation();
  const user = usePage().props.auth.user;
  const categories = [
    {
      id: "math",
      name: "Mathematics",
      icon: "📐",
      color: "from-blue-500 to-indigo-600",
      desc: "Numbers, algebra, and geometry",
      image: "/images/math_bg.jpg"
    },
    {
      id: "science",
      name: "Science",
      icon: "🧬",
      color: "from-green-500 to-emerald-600",
      desc: "Physics, chemistry, and biology",
      image: "/images/science_bg.jpg"
    },
    {
      id: "history",
      name: "History",
      icon: "🏛️",
      color: "from-orange-500 to-amber-600",
      desc: "World events and civilizations",
      image: "/images/history_bg.jpg"
    },
    {
      id: "geo",
      name: "Geography",
      icon: "🌍",
      color: "from-teal-500 to-cyan-600",
      desc: "Countries, capitals, and maps",
      image: "/images/geo_bg.jpg"
    },
    {
      id: "tech",
      name: "Technology",
      icon: "💻",
      color: "from-purple-500 to-violet-600",
      desc: "Computers, coding, and innovations",
      image: "/images/tech_bg.jpg"
    },
    {
      id: "arts",
      name: "Arts & Lit",
      icon: "🎨",
      color: "from-pink-500 to-rose-600",
      desc: "Paintings, books, and culture",
      image: "/images/arts_bg.jpg"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-50 font-sans text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-gray-100", children: [
    /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { className: "mx-auto max-w-7xl space-y-12 px-4 py-10 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "group relative col-span-1 flex min-h-[300px] flex-col justify-center overflow-hidden rounded-3xl shadow-2xl md:col-span-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/images/hero_bg.jpg",
                alt: "Battle Arena",
                className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 p-8", children: [
            /* @__PURE__ */ jsx("h2", { className: "mb-4 text-4xl font-black tracking-tight text-white uppercase italic", children: t("Ready to compete?") }),
            /* @__PURE__ */ jsx("p", { className: "mb-8 max-w-lg text-lg leading-relaxed font-medium text-gray-200 drop-shadow-md", children: t("Challenge players worldwide in real-time 1v1 battles. Climb the leaderboard and prove your knowledge.") }),
            /* @__PURE__ */ jsxs(
              Link,
              {
                href: "/lobby",
                className: "inline-flex transform items-center rounded-xl border border-indigo-400/20 bg-gradient-to-r from-indigo-600 to-blue-600 px-8 py-4 font-black text-white shadow-lg shadow-indigo-500/30 transition-all hover:-translate-y-1 hover:from-indigo-500 hover:to-blue-500 hover:shadow-indigo-500/50",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "mr-3 text-xl", children: "⚔️" }),
                  t("Enter Battle Arena")
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "group relative flex min-h-[300px] flex-col justify-center overflow-hidden rounded-3xl border border-slate-200/50 shadow-xl dark:border-slate-700/50", children: [
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/images/rating_bg.jpg",
                alt: "Rating Background",
                className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/80 to-slate-900/40" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 p-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center justify-between border-b border-white/10 pb-2", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold tracking-wider text-blue-200 uppercase", children: t("Your Rating") }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center space-x-2 text-center", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: user.profile_photo_url,
                    alt: user.name,
                    className: "h-10 w-10 rounded-full object-cover ring-2 ring-white/20"
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "mt-1 block text-sm font-medium text-white", children: user.name })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-end space-x-3", children: [
              /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-6xl font-black text-transparent drop-shadow-sm filter", children: user.points || 0 }),
              /* @__PURE__ */ jsx("span", { className: "mb-3 flex items-center text-sm font-bold text-yellow-400", children: t("PTS") })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-2 flex items-center justify-between text-xs font-semibold text-slate-300", children: [
              /* @__PURE__ */ jsx("span", { children: t("Win Rate") }),
              /* @__PURE__ */ jsxs("span", { children: [
                Math.round(user.wins / (user.wins + user.losses || 1) * 100),
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mb-6 h-3 w-full overflow-hidden rounded-full bg-slate-700/50 ring-1 ring-white/10 backdrop-blur-sm", children: /* @__PURE__ */ jsx(
              "div",
              {
                className: "h-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]",
                style: { width: `${user.wins / (user.wins + user.losses || 1) * 100}%` }
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-white/5 bg-white/5 p-3 text-center backdrop-blur-sm", children: [
                /* @__PURE__ */ jsx("div", { className: "mb-1 text-xl font-black text-green-400", children: user.wins || 0 }),
                /* @__PURE__ */ jsx("div", { className: "text-xs tracking-wide text-slate-400 uppercase", children: t("Wins") })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-white/5 bg-white/5 p-3 text-center backdrop-blur-sm", children: [
                /* @__PURE__ */ jsx("div", { className: "mb-1 text-xl font-black text-red-400", children: user.losses || 0 }),
                /* @__PURE__ */ jsx("div", { className: "text-xs tracking-wide text-slate-400 uppercase", children: t("Losses") })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-6 flex items-center text-2xl font-bold", children: /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent", children: t("Explore Categories") }) }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3", children: categories.map((cat) => /* @__PURE__ */ jsxs(
          Link,
          {
            href: `/quiz/category/${cat.id}`,
            className: "group relative flex min-h-[220px] transform cursor-pointer flex-col justify-end overflow-hidden rounded-2xl border border-slate-200/50 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-slate-700/50",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: cat.image,
                    alt: cat.name,
                    className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-90 transition-opacity group-hover:opacity-80" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: `h-12 w-12 rounded-xl bg-gradient-to-br ${cat.color} mb-3 flex items-center justify-center text-2xl shadow-lg ring-2 ring-white/10`,
                    children: cat.icon
                  }
                ),
                /* @__PURE__ */ jsx("h3", { className: "mb-1 text-xl font-bold text-white transition-colors group-hover:text-blue-300", children: t(cat.name) }),
                /* @__PURE__ */ jsx("p", { className: "mb-4 line-clamp-2 text-sm leading-relaxed text-slate-300", children: t(cat.desc) }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-t border-white/10 pt-3 text-xs font-semibold text-slate-300", children: [
                  /* @__PURE__ */ jsxs("span", { children: [
                    categoryCounts[cat.name] || 0,
                    " ",
                    t("Questions")
                  ] }),
                  /* @__PURE__ */ jsxs("span", { className: "flex items-center rounded-lg bg-white/10 px-2 py-1 text-white backdrop-blur-sm transition-colors group-hover:bg-blue-600 group-hover:text-white", children: [
                    t("Start Quiz"),
                    /* @__PURE__ */ jsx(
                      "svg",
                      {
                        className: "ml-1 h-3 w-3 transition-transform group-hover:translate-x-1",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" })
                      }
                    )
                  ] })
                ] })
              ] })
            ]
          },
          cat.id
        )) })
      ] })
    ] })
  ] });
}
export {
  Dashboard as default
};
