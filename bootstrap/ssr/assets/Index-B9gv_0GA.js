import { jsxs, jsx } from "react/jsx-runtime";
import { usePage, Head, Link } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import { N as Navbar } from "./Navbar-Ctort6BS.js";
import "@headlessui/react";
import "@heroicons/react/24/outline";
import "react";
import "@heroicons/react/20/solid";
import "./ThemeSwitcher-C4YGyEOA.js";
function Leaderboard({ users }) {
  const { auth } = usePage().props;
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-50 font-sans text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-gray-100", children: [
    /* @__PURE__ */ jsx(Head, { title: "Leaderboard" }),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("div", { className: "pointer-events-none absolute top-0 left-0 h-full w-full overflow-hidden opacity-50 dark:opacity-100", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-[-10%] left-[20%] h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[100px]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute right-[10%] bottom-[-10%] h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[100px]" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "z-10 mx-auto mt-10 w-full max-w-2xl space-y-8 p-6", children: [
      /* @__PURE__ */ jsxs(
        Link,
        {
          href: "/lobby",
          className: "group flex items-center gap-2 text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white",
          children: [
            /* @__PURE__ */ jsx(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-5 w-5 transition-transform group-hover:-translate-x-1",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" })
              }
            ),
            t("Back to Lobby")
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ jsx("h1", { className: "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-3xl font-bold tracking-tighter text-transparent dark:from-blue-400 dark:to-purple-400", children: t("Leaderboard") }) }),
        /* @__PURE__ */ jsx("div", { className: "w-20" }),
        " "
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "overflow-hidden rounded-2xl border border-slate-200 bg-white/50 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/50", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-12 gap-4 border-b border-slate-200 p-4 text-left text-xs font-bold tracking-wider text-slate-500 uppercase dark:border-white/5", children: [
          /* @__PURE__ */ jsx("div", { className: "col-span-1 text-center", children: "#" }),
          /* @__PURE__ */ jsx("div", { className: "col-span-5", children: t("Player") }),
          /* @__PURE__ */ jsx("div", { className: "col-span-2 text-center", children: t("Points") }),
          /* @__PURE__ */ jsx("div", { className: "col-span-2 text-center", children: t("W / L") }),
          /* @__PURE__ */ jsx("div", { className: "col-span-2 text-center", children: t("Ratio") })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "divide-y divide-slate-100 dark:divide-white/5", children: users.map((user, index) => {
          const isMe = user.id === auth.user.id;
          const winRate = user.wins + user.losses > 0 ? Math.round(user.wins / (user.wins + user.losses) * 100) : 0;
          return /* @__PURE__ */ jsxs(
            "div",
            {
              className: `grid grid-cols-12 items-center gap-4 p-4 transition-colors ${isMe ? "bg-blue-50 hover:bg-blue-100 dark:bg-blue-600/10 dark:hover:bg-blue-600/20" : "hover:bg-slate-50 dark:hover:bg-white/5"}`,
              children: [
                /* @__PURE__ */ jsx("div", { className: "col-span-1 text-center font-bold text-slate-500 dark:text-slate-400", children: index + 1 }),
                /* @__PURE__ */ jsxs("div", { className: "col-span-5 flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: `flex h-8 w-8 items-center justify-center overflow-hidden rounded-full text-xs font-bold ring-2 ${index === 0 ? "ring-yellow-400" : index === 1 ? "ring-slate-300 dark:ring-slate-400" : index === 2 ? "ring-orange-600 dark:ring-orange-700" : "ring-transparent"}`,
                      children: /* @__PURE__ */ jsx(
                        "img",
                        {
                          src: user.profile_photo_url || `https://ui-avatars.com/api/?name=${user.name}`,
                          alt: user.name,
                          className: "h-full w-full object-cover"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    "span",
                    {
                      className: `font-medium ${isMe ? "text-blue-600 dark:text-blue-400" : "text-slate-800 dark:text-slate-200"}`,
                      children: [
                        user.name,
                        " ",
                        isMe && "(You)"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx("div", { className: "col-span-2 text-center font-bold text-purple-600 dark:text-purple-400", children: user.points }),
                /* @__PURE__ */ jsxs("div", { className: "col-span-2 text-center text-sm text-slate-500 dark:text-slate-400", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-green-600 dark:text-green-400", children: user.wins }),
                  " -",
                  " ",
                  /* @__PURE__ */ jsx("span", { className: "text-red-500 dark:text-red-400", children: user.losses })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "col-span-2 text-center text-sm font-medium text-slate-500 dark:text-slate-400", children: [
                  winRate,
                  "%"
                ] })
              ]
            },
            user.id
          );
        }) }),
        users.length === 0 && /* @__PURE__ */ jsx("div", { className: "p-8 text-center text-slate-500", children: t("No active players yet.") })
      ] })
    ] })
  ] });
}
export {
  Leaderboard as default
};
