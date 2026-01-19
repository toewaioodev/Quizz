import { jsxs, jsx } from "react/jsx-runtime";
import { Link, usePage, Head } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import { B as BottomNav } from "./BottomNav-D-lEiZxP.js";
import { N as Navbar } from "./Navbar-CzkG3_zV.js";
import "@heroicons/react/24/outline";
import "lucide-react";
import "react";
import "@headlessui/react";
import "@heroicons/react/20/solid";
function CategoryGrid({ categories, categoryCounts }) {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { className: "mb-6 mt-6 flex items-center text-2xl font-bold", children: /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent", children: t("Explore Categories") }) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-3", children: categories.map((cat) => /* @__PURE__ */ jsxs(
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
  ] });
}
function DashboardHero({ user, rank }) {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-3", children: [
    /* @__PURE__ */ jsxs("div", { className: "group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-3xl border border-white/10 shadow-2xl transition-all hover:scale-[1.02] hover:shadow-indigo-500/20 dark:border-white/5", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-slate-900", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -top-[50%] -right-[50%] h-[500px] w-[500px] rounded-full bg-indigo-500/30 blur-[100px] transition-all duration-1000 group-hover:bg-indigo-500/40" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -bottom-[50%] -left-[50%] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[100px] transition-all duration-1000 group-hover:bg-blue-500/30" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-white/5 backdrop-blur-sm" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex h-full flex-col p-6 sm:p-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxs(Link, { href: "/profile", className: "flex items-center gap-4 transition-opacity hover:opacity-80", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx("div", { className: "h-16 w-16 overflow-hidden rounded-full ring-4 ring-white/10 sm:h-20 sm:w-20", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: user.profile_photo_url,
                  alt: user.name,
                  className: "h-full w-full object-cover"
                }
              ) }),
              /* @__PURE__ */ jsx("div", { className: "absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-white text-lg ring-4 ring-slate-900", children: "✨" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-black tracking-tight text-white sm:text-3xl", children: user.name }),
              /* @__PURE__ */ jsxs("p", { className: "text-sm font-medium text-indigo-300 sm:text-base", children: [
                "Level ",
                Math.floor(user.points / 100) + 1,
                " Challenger"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs font-bold tracking-wider text-indigo-200 uppercase sm:text-sm", children: t("Global Rank") }),
            /* @__PURE__ */ jsxs("div", { className: "text-3xl font-black text-white sm:text-5xl", children: [
              "#",
              rank
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 mb-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-white to-slate-400 bg-clip-text text-5xl font-black tracking-tighter text-transparent sm:text-7xl", children: user.points.toLocaleString() }),
            /* @__PURE__ */ jsx("span", { className: "text-lg font-bold text-indigo-300 sm:text-2xl", children: "PTS" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "h-full rounded-full bg-gradient-to-r from-indigo-500 to-blue-400 shadow-[0_0_15px_rgba(99,102,241,0.6)]",
              style: { width: `${user.points % 100}%` }
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-1 text-right text-xs font-medium text-slate-400", children: [
            100 - user.points % 100,
            " PTS to Level ",
            Math.floor(user.points / 100) + 2
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-auto grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-colors hover:bg-white/10", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20 text-green-400", children: /* @__PURE__ */ jsx("svg", { className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 3, d: "M5 13l4 4L19 7" }) }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-white", children: user.wins }),
              /* @__PURE__ */ jsx("div", { className: "text-xs font-bold tracking-wide text-slate-400 uppercase", children: t("Victories") })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-colors hover:bg-white/10", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-blue-400", children: /* @__PURE__ */ jsx("svg", { className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 3, d: "M13 10V3L4 14h7v7l9-11h-7z" }) }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "text-2xl font-bold text-white", children: [
                Math.round(user.wins / (user.wins + user.losses || 1) * 100),
                "%"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "text-xs font-bold tracking-wide text-slate-400 uppercase", children: t("Win Rate") })
            ] })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/rating_bg.jpg",
            alt: "Battle Arena",
            className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent" })
      ] })
    ] }),
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
    ] })
  ] });
}
function Dashboard({ categoryCounts, rank }) {
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
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen font-sans text-slate-900 transition-colors duration-300 dark:text-gray-100 pb-20 md:pb-0 relative isolate", children: [
    /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
    /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 -z-10 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300 pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-[-10%] left-[-10%] h-[600px] w-[600px] animate-pulse rounded-full bg-blue-200/40 dark:bg-blue-600/20 blur-[120px]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute right-[-10%] bottom-[-10%] h-[600px] w-[600px] animate-pulse rounded-full bg-purple-200/40 dark:bg-purple-600/20 blur-[120px] delay-1000" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-[20%] left-[50%] h-[400px] w-[400px] -translate-x-1/2 animate-pulse rounded-full bg-indigo-200/30 dark:bg-indigo-500/10 blur-[100px] delay-500" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" })
    ] }),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { className: "relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(DashboardHero, { user, rank }),
      /* @__PURE__ */ jsx(CategoryGrid, { categories, categoryCounts }),
      /* @__PURE__ */ jsx(BottomNav, {})
    ] })
  ] });
}
export {
  Dashboard as default
};
