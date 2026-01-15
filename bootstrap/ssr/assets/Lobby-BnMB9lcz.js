import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { usePage, router, Head, Link } from "@inertiajs/react";
import { ChannelProvider, useChannel } from "ably/react";
import axios from "axios";
import { useState, useEffect, useCallback, memo } from "react";
import { useTranslation } from "react-i18next";
import { N as Navbar } from "./Navbar-DMrX0KVo.js";
import "@headlessui/react";
import "@heroicons/react/24/outline";
import "@heroicons/react/20/solid";
function Lobby() {
  return /* @__PURE__ */ jsx(ChannelProvider, { channelName: "global-presence", children: /* @__PURE__ */ jsx(LobbyContent, {}) });
}
function LobbyContent() {
  const { t } = useTranslation();
  const user = usePage().props.auth.user;
  const [searching, setSearching] = useState(false);
  const [activeUsers, setActiveUsers] = useState([]);
  const { channel } = useChannel("global-presence");
  useEffect(() => {
    if (!channel) return;
    const updateMembers = async () => {
      try {
        const members = await channel.presence.get();
        const unique = Array.from(
          new Map(
            members.filter((p) => p.data).map((p) => [p.clientId, p.data])
          ).values()
        );
        setActiveUsers(unique);
      } catch (err) {
        console.error("Error fetching presence:", err);
      }
    };
    channel.presence.subscribe("enter", updateMembers);
    channel.presence.subscribe("leave", updateMembers);
    channel.presence.subscribe("update", updateMembers);
    updateMembers();
    return () => {
      channel.presence.unsubscribe();
    };
  }, [channel]);
  const handleInvite = useCallback(
    (inviteeId) => {
      axios.post("/match/invite", { user_id: inviteeId }).then(() => {
        alert(t("Invitation sent!"));
      }).catch((err) => {
        console.error(err);
        alert(t("Failed to send invitation."));
      });
    },
    [t]
  );
  const findMatch = useCallback(() => {
    setSearching(true);
    channel.presence.update({
      name: user.name,
      id: user.id,
      profile_photo_url: user.profile_photo_url,
      status: "searching"
    });
    axios.post("/match/find").then((response) => {
      const { match_id } = response.data;
      router.visit(`/arena/${match_id}`);
    }).catch((error) => {
      console.error("Matchmaking failed:", error);
      if (error.response?.status === 403) {
        alert(t(error.response.data.message));
      }
      setSearching(false);
      channel.presence.update({
        name: user.name,
        id: user.id,
        profile_photo_url: user.profile_photo_url,
        status: "online"
      });
    });
  }, [channel, user, t]);
  return /* @__PURE__ */ jsxs("div", { className: "relative flex min-h-screen flex-col items-center overflow-hidden bg-slate-950 font-sans text-white selection:bg-indigo-500 selection:text-white", children: [
    /* @__PURE__ */ jsx(Head, { title: "Battle Lobby" }),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("div", { className: "pointer-events-none absolute inset-0", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -left-[20%] -top-[20%] h-[800px] w-[800px] animate-pulse rounded-full bg-indigo-600/20 blur-[120px]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-[20%] -right-[20%] h-[800px] w-[800px] animate-pulse rounded-full bg-blue-600/20 blur-[120px] delay-1000" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "z-10 mt-8 grid w-full max-w-6xl grid-cols-1 items-start gap-8 p-4 md:grid-cols-12 md:p-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8 md:col-span-7", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("h1", { className: "bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-5xl font-black tracking-tighter text-transparent", children: t("Quiz Battle") }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-400 max-w-md", children: t("Compete in real-time 1v1 matches.") })
        ] }),
        /* @__PURE__ */ jsx(LobbyStats, { user, searching, findMatch }),
        /* @__PURE__ */ jsx(LobbyActions, {})
      ] }),
      /* @__PURE__ */ jsx("div", { className: "h-full md:col-span-5", children: /* @__PURE__ */ jsx(ActivePlayersList, { activeUsers, user, handleInvite }) })
    ] })
  ] });
}
const LobbyStats = memo(({ user, searching, findMatch }) => {
  const { t } = useTranslation();
  const canPlay = (user.points || 0) >= 10;
  return /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 mb-8 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-bold tracking-widest text-slate-400 uppercase", children: t("My Rank") }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-1", children: [
          /* @__PURE__ */ jsx("span", { className: "text-4xl font-black text-white", children: user.points || 0 }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-bold text-blue-400", children: "PTS" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-bold tracking-widest text-slate-400 uppercase", children: t("Record") }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxs("span", { className: "rounded bg-green-500/20 px-2 py-0.5 text-sm font-bold text-green-400", children: [
            user.wins || 0,
            "W"
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-slate-600", children: "/" }),
          /* @__PURE__ */ jsxs("span", { className: "rounded bg-red-500/20 px-2 py-0.5 text-sm font-bold text-red-400", children: [
            user.losses || 0,
            "L"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: findMatch,
        disabled: searching || !canPlay,
        className: `group relative w-full overflow-hidden rounded-2xl p-[1px] transition-all hover:scale-[1.01] active:scale-[0.99] ${!canPlay ? "cursor-not-allowed opacity-50 grayscale" : "bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/20"}`,
        children: /* @__PURE__ */ jsx("div", { className: "relative flex h-16 w-full items-center justify-center gap-3 rounded-2xl bg-slate-900/90 backdrop-blur-sm transition-colors group-hover:bg-transparent", children: searching ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("div", { className: "h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" }),
          /* @__PURE__ */ jsx("span", { className: "font-bold tracking-wide text-white", children: t("Finding Match...") })
        ] }) : !canPlay ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("svg", { className: "h-5 w-5 text-red-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-bold text-slate-400", children: t("Need 10 Points") })
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("span", { className: "text-xl font-black tracking-wide text-white group-hover:text-white uppercase italic", children: t("Find Match") }),
          /* @__PURE__ */ jsx("svg", { className: "h-6 w-6 text-indigo-400 group-hover:text-white transition-colors", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 10V3L4 14h7v7l9-11h-7z" }) })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "mt-3 text-center", children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full border border-white/5 bg-white/5 px-3 py-1 text-[10px] font-medium text-slate-400", children: [
      /* @__PURE__ */ jsxs("span", { className: "relative flex h-2 w-2", children: [
        /* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" }),
        /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-green-500" })
      ] }),
      t("Average wait time"),
      ": < 10s"
    ] }) })
  ] });
});
const LobbyActions = memo(() => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 md:gap-6", children: [
    /* @__PURE__ */ jsxs(
      Link,
      {
        href: "/",
        className: "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10",
        children: [
          /* @__PURE__ */ jsx("div", { className: "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/20 text-purple-400 transition-colors group-hover:bg-purple-500 group-hover:text-white", children: /* @__PURE__ */ jsx("svg", { className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" }) }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-white group-hover:text-purple-300 transition-colors", children: t("Practice Mode") }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-slate-400", children: t("Hone your skills solo") })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      Link,
      {
        href: "/leaderboard",
        className: "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10",
        children: [
          /* @__PURE__ */ jsx("div", { className: "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-400 transition-colors group-hover:bg-blue-500 group-hover:text-white", children: /* @__PURE__ */ jsx("svg", { className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }) }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-white group-hover:text-blue-300 transition-colors", children: t("Leaderboard") }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-slate-400", children: t("See top players") })
        ]
      }
    )
  ] });
});
const ActivePlayersList = memo(({ activeUsers, user, handleInvite }) => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs("div", { className: "flex h-full min-h-[500px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-md", children: [
    /* @__PURE__ */ jsx("div", { className: "border-b border-white/5 p-6", children: /* @__PURE__ */ jsxs("h2", { className: "flex items-center gap-3 text-lg font-bold text-white", children: [
      /* @__PURE__ */ jsxs("span", { className: "relative flex h-3 w-3", children: [
        /* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" }),
        /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-3 w-3 rounded-full bg-green-500" })
      ] }),
      t("Active Players"),
      /* @__PURE__ */ jsx("span", { className: "ml-auto rounded-full bg-white/10 px-2 py-0.5 text-xs text-slate-300", children: activeUsers.length })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "custom-scrollbar flex-1 overflow-y-auto p-4 space-y-2", children: activeUsers.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-col items-center justify-center text-slate-500", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-4 rounded-full bg-white/5 p-4", children: /* @__PURE__ */ jsx("svg", { className: "h-8 w-8 opacity-50", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" }) }) }),
      /* @__PURE__ */ jsx("p", { children: t("No active players yet.") })
    ] }) : activeUsers.map((p) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: `group flex items-center gap-4 rounded-2xl border border-transparent p-3 transition-all hover:bg-white/5 ${p.id === user.id ? "bg-white/5 border-white/5" : ""}`,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: p.profile_photo_url || `https://ui-avatars.com/api/?name=${p.name}`,
                alt: p.name,
                className: "h-10 w-10 rounded-full object-cover ring-2 ring-white/10 transition-all group-hover:ring-white/30"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: `absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-slate-900 ${p.status === "playing" ? "bg-orange-500" : p.status === "searching" ? "bg-blue-500" : "bg-green-500"}` })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1 overflow-hidden", children: [
            /* @__PURE__ */ jsxs("p", { className: "truncate text-sm font-bold text-slate-200", children: [
              p.name,
              p.id == user.id && /* @__PURE__ */ jsxs("span", { className: "ml-2 text-xs font-normal text-slate-500", children: [
                "(",
                t("You"),
                ")"
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: p.status === "playing" ? t("In Match") : p.status === "searching" ? t("Searching...") : t("Online") })
          ] }),
          p.id != user.id && p.status !== "playing" && /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => handleInvite(p.id),
              className: "rounded-xl bg-white/5 px-3 py-1.5 text-xs font-bold text-white transition-colors hover:bg-blue-600",
              children: t("Invite")
            }
          )
        ]
      },
      p.id
    )) })
  ] });
});
export {
  Lobby as default
};
