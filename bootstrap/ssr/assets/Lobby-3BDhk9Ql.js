import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { usePage, Head, Link, router } from "@inertiajs/react";
import * as Ably from "ably";
import { AblyProvider, ChannelProvider, useChannel } from "ably/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { N as Navbar } from "./Navbar-Ctort6BS.js";
import "@headlessui/react";
import "@heroicons/react/24/outline";
import "@heroicons/react/20/solid";
import "./ThemeSwitcher-C4YGyEOA.js";
function LobbyPage({ ably_key }) {
  const user = usePage().props.auth.user;
  const client = new Ably.Realtime({ key: ably_key, clientId: String(user.id) });
  return /* @__PURE__ */ jsx(AblyProvider, { client, children: /* @__PURE__ */ jsx(ChannelProvider, { channelName: "lobby", children: /* @__PURE__ */ jsx(Lobby, {}) }) });
}
function Lobby() {
  const { t } = useTranslation();
  const user = usePage().props.auth.user;
  const [searching, setSearching] = useState(false);
  const [activeUsers, setActiveUsers] = useState([]);
  const { channel } = useChannel("lobby");
  useEffect(() => {
    if (!channel) return;
    const updateMembers = async () => {
      try {
        const members = await channel.presence.get();
        const unique = Array.from(new Map(members.map((p) => [p.clientId, p])).values());
        setActiveUsers(unique);
      } catch (err) {
        console.error("Error fetching presence:", err);
      }
    };
    channel.presence.enter({ name: user.name, id: user.id });
    channel.presence.subscribe("enter", updateMembers);
    channel.presence.subscribe("leave", updateMembers);
    channel.presence.subscribe("update", updateMembers);
    updateMembers();
    return () => {
      channel.presence.leave();
      channel.presence.unsubscribe();
    };
  }, [channel, user.name, user.id]);
  const findMatch = () => {
    setSearching(true);
    axios.post("/match/find").then((response) => {
      const { match_id } = response.data;
      router.visit(`/arena/${match_id}`);
    }).catch((error) => {
      console.error("Matchmaking failed:", error);
      if (error.response?.status === 403) {
        alert(t(error.response.data.message));
      }
      setSearching(false);
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative flex min-h-screen flex-col items-center overflow-hidden bg-slate-50 p-0 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white", children: [
    /* @__PURE__ */ jsx(Head, { title: "Battle Lobby" }),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("div", { className: "pointer-events-none absolute top-0 left-0 h-full w-full overflow-hidden opacity-50 dark:opacity-100", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[100px]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[100px]" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "z-10 mt-8 grid w-full max-w-4xl grid-cols-1 items-start gap-8 p-6 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-8 text-center md:text-left", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("h1", { className: "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold tracking-tighter text-transparent dark:from-blue-400 dark:to-purple-400", children: t("Quiz Battle") }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-600 dark:text-slate-400", children: t("Compete in real-time 1v1 matches.") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-slate-200 bg-white/50 p-6 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/50", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-center justify-between border-b border-slate-200 pb-6 dark:border-white/5", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold tracking-wider text-slate-500 uppercase", children: t("My Rank") }),
              /* @__PURE__ */ jsxs("p", { className: "text-2xl font-bold", children: [
                user.points || 0,
                " ",
                t("PTS")
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold tracking-wider text-slate-500 uppercase", children: t("Record") }),
              /* @__PURE__ */ jsxs("p", { className: "text-lg font-medium text-green-600 dark:text-green-400", children: [
                user.wins || 0,
                "W - ",
                user.losses || 0,
                "L"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: findMatch,
              disabled: searching || (user.points || 0) < 10,
              className: `group relative w-full overflow-hidden rounded-xl p-[1px] transition-all ${(user.points || 0) < 10 ? "cursor-not-allowed bg-slate-300 opacity-50 dark:bg-slate-700" : "bg-gradient-to-r from-blue-600 to-violet-600 hover:scale-[1.02] active:scale-[0.98]"}`,
              children: /* @__PURE__ */ jsx(
                "div",
                {
                  className: `relative flex h-14 items-center justify-center gap-3 rounded-[11px] transition-colors ${(user.points || 0) < 10 ? "bg-slate-100 dark:bg-slate-900" : "bg-slate-50 group-hover:bg-transparent dark:bg-slate-950/50"}`,
                  children: searching ? /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx("div", { className: "h-5 w-5 animate-spin rounded-full border-2 border-slate-400 border-t-slate-800 dark:border-white/30 dark:border-t-white" }),
                    /* @__PURE__ */ jsx("span", { className: "font-semibold tracking-wide text-slate-800 dark:text-white", children: t("Finding Match...") })
                  ] }) : (user.points || 0) < 10 ? /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx("svg", { className: "h-6 w-6 text-red-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      }
                    ) }),
                    /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold tracking-wide text-slate-500 dark:text-slate-400", children: t("Need 10 Points") })
                  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx("svg", { className: "h-6 w-6 text-slate-800 dark:text-white", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 10V3L4 14h7v7l9-11h-7z" }) }),
                    /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold tracking-wide text-slate-800 dark:text-white", children: t("Find Match") })
                  ] })
                }
              )
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 text-center text-xs text-slate-500", children: [
            t("Average wait time"),
            ": < 10s"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("button", { className: "group rounded-xl border border-slate-200 bg-white/50 p-4 text-left transition-colors hover:border-purple-400/50 dark:border-white/5 dark:bg-slate-900/50 dark:hover:border-white/20", children: [
            /* @__PURE__ */ jsx("div", { className: "mb-2 origin-left text-purple-600 transition-transform group-hover:scale-110 dark:text-purple-400", children: /* @__PURE__ */ jsx("svg", { className: "h-6 w-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              }
            ) }) }),
            /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-slate-700 dark:text-white", children: t("Practice Mode") })
          ] }),
          /* @__PURE__ */ jsxs(
            Link,
            {
              href: "/leaderboard",
              className: "group rounded-xl border border-slate-200 bg-white/50 p-4 text-left transition-colors hover:border-blue-400/50 dark:border-white/5 dark:bg-slate-900/50 dark:hover:border-white/20",
              children: [
                /* @__PURE__ */ jsx("div", { className: "mb-2 origin-left text-blue-600 transition-transform group-hover:scale-110 dark:text-blue-400", children: /* @__PURE__ */ jsx("svg", { className: "h-6 w-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  }
                ) }) }),
                /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-slate-700 dark:text-white", children: t("Leaderboard") })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "h-full min-h-[400px] rounded-2xl border border-slate-200 bg-white/30 p-6 backdrop-blur-md dark:border-white/5 dark:bg-slate-900/30", children: [
        /* @__PURE__ */ jsxs("h2", { className: "mb-4 flex items-center text-xl font-bold text-slate-800 dark:text-white", children: [
          /* @__PURE__ */ jsx("span", { className: "mr-2 h-2 w-2 animate-pulse rounded-full bg-green-500" }),
          t("Active Players"),
          " (",
          activeUsers.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "custom-scrollbar max-h-[500px] space-y-2 overflow-y-auto pr-2", children: [
          activeUsers.map((p) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "flex items-center space-x-3 rounded-lg border border-slate-200 bg-white/40 p-3 transition-colors hover:bg-white/60 dark:border-white/5 dark:bg-white/5 dark:hover:bg-white/10",
              children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: user.profile_photo_url,
                    alt: user.name,
                    className: "h-10 w-10 rounded-full object-cover ring-2 ring-white/20"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxs("p", { className: "text-sm font-medium text-slate-800 dark:text-slate-200", children: [
                    p.data.name,
                    " ",
                    p.data.id == user.id && /* @__PURE__ */ jsxs("span", { className: "text-green-600 dark:text-green-400", children: [
                      "(",
                      t("You"),
                      ")"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: t("Online") })
                ] })
              ]
            },
            p.clientId
          )),
          activeUsers.length === 0 && /* @__PURE__ */ jsx("div", { className: "py-10 text-center text-slate-500", children: t("Connecting...") })
        ] })
      ] })
    ] })
  ] });
}
export {
  LobbyPage as default
};
