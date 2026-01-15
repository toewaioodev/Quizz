import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Crown, Home, Sword, Trophy, User } from "lucide-react";
import { usePage, Link, Head } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import { N as Navbar } from "./Navbar-DMrX0KVo.js";
import "@headlessui/react";
import "@heroicons/react/24/outline";
import "react";
import "@heroicons/react/20/solid";
function Podium({ players }) {
  const ordered = [players[1], players[0], players[2]];
  return /* @__PURE__ */ jsx("div", { className: "flex items-end justify-center gap-14 px-4 pt-6 pb-2 sm:gap-5 sm:px-6 sm:pt-8 sm:pb-4", children: ordered.map((player, index) => {
    const isFirst = player.rank === 1;
    const heights = ["h-20 sm:h-24", "h-28 sm:h-32", "h-16 sm:h-20"];
    const avatarSizes = ["w-11 h-11 sm:w-14 sm:h-14", "w-12 h-12 sm:w-14 sm:h-14", "w-10 h-10 sm:w-14 sm:h-14"];
    return /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { delay: 0.1 * index, type: "spring" },
        className: "flex flex-col items-center",
        children: [
          /* @__PURE__ */ jsxs("div", { className: `relative mb-1.5 sm:mb-2 ${isFirst ? "animate-float" : ""}`, children: [
            isFirst && /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { y: -10, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                transition: { delay: 0.5 },
                className: "absolute -top-5 left-1/2 -translate-x-1/2 sm:-top-6",
                children: /* @__PURE__ */ jsx(Crown, { className: "h-5 w-5 fill-yellow-400 text-yellow-400 sm:h-6 sm:w-6" })
              }
            ),
            /* @__PURE__ */ jsx("div", { className: `rounded-full p-0.5 ${isFirst ? "gradient-success glow-success" : "bg-border"}`, children: /* @__PURE__ */ jsx("div", { className: `${avatarSizes[index]} bg-card overflow-hidden rounded-full`, children: /* @__PURE__ */ jsx("img", { src: player.avatar, alt: player.name, className: "h-full w-full object-cover" }) }) })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-card-foreground mb-0.5 max-w-[60px] truncate text-xs font-semibold sm:mb-1 sm:max-w-[80px] sm:text-sm", children: player.name }),
          /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground mb-1.5 text-[10px] sm:mb-2 sm:text-xs", children: [
            player.points.toLocaleString(),
            " pts"
          ] }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `w-16 sm:w-20 ${heights[index]} flex items-start justify-center rounded-t-xl pt-2 sm:rounded-t-2xl sm:pt-3 ${isFirst ? "gradient-success glow-success" : "bg-amber-300"}`,
              children: /* @__PURE__ */ jsxs(
                "span",
                {
                  className: `font-display text-xl font-bold sm:text-2xl ${isFirst ? "text-success-foreground" : "text-card-foreground"}`,
                  children: [
                    "#",
                    player.rank
                  ]
                }
              )
            }
          )
        ]
      },
      player.rank
    );
  }) });
}
const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Sword, Label: "Fight", path: "/lobby" },
  { icon: Trophy, label: "Ranks", path: "/leaderboard" },
  { icon: User, label: "Profile", path: "/profile" }
];
function BottomNav() {
  const { url } = usePage();
  return /* @__PURE__ */ jsx(
    motion.nav,
    {
      initial: { y: 100 },
      animate: { y: 0 },
      className: "fixed bottom-0 left-0 right-0 z-50 px-4 pb-safe",
      children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-6 py-3 sm:py-4 mb-4 mx-auto max-w-sm bg-amber-500 rounded-[2rem] glow-subtle", children: navItems.map((item) => {
        const isActive = url === item.path || url.startsWith(`${item.path}/`);
        return /* @__PURE__ */ jsx(
          Link,
          {
            href: item.path,
            className: "relative no-underline",
            children: /* @__PURE__ */ jsxs(
              motion.div,
              {
                className: `flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-3 rounded-full transition-all duration-300 min-h-[48px] cursor-pointer ${isActive ? "gradient-brand text-primary-foreground" : "text-muted-foreground hover:text-card-foreground active:bg-muted/20"}`,
                whileTap: { scale: 0.95 },
                children: [
                  /* @__PURE__ */ jsx(item.icon, { className: "w-5 h-5 flex-shrink-0" }),
                  isActive && /* @__PURE__ */ jsx(
                    motion.span,
                    {
                      initial: { opacity: 0, width: 0 },
                      animate: { opacity: 1, width: "auto" },
                      className: "text-sm font-semibold whitespace-nowrap",
                      children: item.label
                    }
                  )
                ]
              }
            )
          },
          item.path
        );
      }) })
    }
  );
}
function Leaderboard({ users }) {
  const { auth } = usePage().props;
  const { t } = useTranslation();
  const podiumPlayers = users.slice(0, 3).map((user, index) => ({
    rank: index + 1,
    name: user.name,
    avatar: user.profile_photo_url || `https://ui-avatars.com/api/?name=${user.name}`,
    points: user.points
  }));
  while (podiumPlayers.length < 3) {
    podiumPlayers.push({
      rank: podiumPlayers.length + 1,
      name: "---",
      avatar: "",
      points: 0
    });
  }
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-50 font-sans text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-gray-100 pb-20", children: [
    /* @__PURE__ */ jsx(Head, { title: "Leaderboard" }),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("div", { className: "pointer-events-none fixed inset-0 overflow-hidden opacity-30 dark:opacity-40", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-[20%] -left-[10%] h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[120px]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-[20%] -right-[10%] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px]" })
    ] }),
    /* @__PURE__ */ jsxs("main", { className: "relative z-10 mx-auto max-w-lg px-4 pt-6 sm:max-w-2xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-8 text-center", children: [
        /* @__PURE__ */ jsx("h1", { className: "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-3xl font-black tracking-tight text-transparent dark:from-blue-400 dark:to-purple-400", children: t("Leaderboard") }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm font-medium text-slate-500 dark:text-slate-400", children: t("Top players competing for glory") })
      ] }),
      users.length > 0 && /* @__PURE__ */ jsx(Podium, { players: podiumPlayers }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 overflow-hidden rounded-3xl bg-white/80 shadow-xl backdrop-blur-xl ring-1 ring-slate-900/5 dark:bg-slate-900/80 dark:ring-white/10", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-12 border-b border-slate-100 bg-slate-50/50 px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-400 dark:border-white/5 dark:bg-white/5", children: [
          /* @__PURE__ */ jsx("div", { className: "col-span-2 text-center", children: "#" }),
          /* @__PURE__ */ jsx("div", { className: "col-span-6", children: t("Player") }),
          /* @__PURE__ */ jsx("div", { className: "col-span-4 text-right", children: t("Points") })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "divide-y divide-slate-100 dark:divide-white/5", children: users.map((user, index) => {
          const isMe = user.id === auth.user.id;
          const rank = index + 1;
          return /* @__PURE__ */ jsxs(
            "div",
            {
              className: `group grid grid-cols-12 items-center gap-4 px-4 py-3 transition-all ${isMe ? "bg-blue-50/80 hover:bg-blue-100 dark:bg-blue-500/10 dark:hover:bg-blue-500/20" : "hover:bg-slate-50 dark:hover:bg-white/5"}`,
              children: [
                /* @__PURE__ */ jsx("div", { className: "col-span-2 flex justify-center", children: /* @__PURE__ */ jsx("div", { className: `flex h-6 w-6 items-center justify-center rounded-full text-xs font-black ${rank === 1 ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400" : rank === 2 ? "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300" : rank === 3 ? "bg-orange-100 text-orange-800 dark:bg-orange-500/20 dark:text-orange-400" : "text-slate-500 dark:text-slate-500"}`, children: rank }) }),
                /* @__PURE__ */ jsxs("div", { className: "col-span-6 flex items-center gap-3 min-w-0", children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: user.profile_photo_url || `https://ui-avatars.com/api/?name=${user.name}`,
                      alt: user.name,
                      className: "h-9 w-9 rounded-full object-cover ring-2 ring-white dark:ring-slate-800"
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "truncate", children: [
                    /* @__PURE__ */ jsxs("div", { className: `truncate text-sm font-bold ${isMe ? "text-blue-600 dark:text-blue-400" : "text-slate-900 dark:text-gray-200"}`, children: [
                      user.name,
                      " ",
                      isMe && /* @__PURE__ */ jsxs("span", { className: "ml-1 text-xs font-normal text-slate-400", children: [
                        "(",
                        t("You"),
                        ")"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "text-xs text-slate-500 dark:text-slate-400", children: [
                      user.wins,
                      " ",
                      t("Wins")
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "col-span-4 text-right", children: [
                  /* @__PURE__ */ jsx("div", { className: "font-black text-slate-900 dark:text-white", children: user.points }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs font-medium text-slate-400", children: "PTS" })
                ] })
              ]
            },
            user.id
          );
        }) }),
        users.length === 0 && /* @__PURE__ */ jsxs("div", { className: "py-12 text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400 dark:bg-slate-800", children: /* @__PURE__ */ jsx("svg", { className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" }) }) }),
          /* @__PURE__ */ jsx("h3", { className: "mt-2 text-sm font-medium text-gray-900 dark:text-white", children: t("No players yet") }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: t("Be the first to join the leaderboard!") })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(BottomNav, {})
  ] });
}
export {
  Leaderboard as default
};
