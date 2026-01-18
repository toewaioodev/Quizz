import { jsxs, jsx } from "react/jsx-runtime";
import { usePage, Head, Link } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
function Public({ profile, history }) {
  const { t } = useTranslation();
  const { auth } = usePage().props;
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert(t("Link copied to clipboard!"));
  };
  const getRankColor = (rank) => {
    switch (rank) {
      case "Grandmaster":
        return "from-red-500 via-orange-500 to-yellow-500";
      case "Master":
        return "from-purple-500 to-pink-500";
      case "Diamond":
        return "from-cyan-400 to-blue-600";
      case "Gold":
        return "from-yellow-300 to-yellow-600";
      case "Silver":
        return "from-slate-300 to-slate-500";
      default:
        return "from-amber-700 to-amber-900";
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative flex min-h-screen flex-col items-center overflow-x-hidden bg-slate-950 font-sans text-white selection:bg-indigo-500 selection:text-white", children: [
    /* @__PURE__ */ jsx(Head, { title: `${profile.name} - ${t("Profile")}` }),
    /* @__PURE__ */ jsxs("div", { className: "pointer-events-none fixed inset-0 z-0", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -left-[10%] -top-[10%] h-[600px] w-[600px] animate-pulse rounded-full bg-indigo-600/20 blur-[100px]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-[10%] -right-[10%] h-[600px] w-[600px] animate-pulse rounded-full bg-blue-600/20 blur-[100px] delay-1000" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "z-10 flex w-full max-w-4xl flex-col items-center p-6 md:p-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-12 flex w-full items-center justify-between", children: [
        /* @__PURE__ */ jsx(Link, { href: "/", className: "text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 hover:opacity-80 transition-opacity", children: "TOEWAIOO" }),
        auth.user ? /* @__PURE__ */ jsx(Link, { href: "/", className: "rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm font-bold backdrop-blur-md transition-all hover:bg-white/10 hover:scale-105", children: t("Dashboard") }) : /* @__PURE__ */ jsx(Link, { href: "/login", className: "rounded-full bg-blue-600 px-8 py-2.5 text-sm font-bold shadow-lg shadow-blue-600/30 transition-all hover:scale-105 hover:bg-blue-500 hover:shadow-blue-500/40", children: t("Login to Battle") })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900/60 p-8 shadow-2xl backdrop-blur-xl md:p-12", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-8 right-8 flex flex-col items-center gap-2", children: /* @__PURE__ */ jsxs("div", { className: "relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-inner border border-white/5", children: [
          /* @__PURE__ */ jsx("span", { className: "text-2xl font-black text-white", children: profile.level }),
          /* @__PURE__ */ jsx("span", { className: "absolute -bottom-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-950 px-2 py-0.5 rounded-full border border-white/10", children: "Level" })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative mb-6 group", children: [
            /* @__PURE__ */ jsx("div", { className: `absolute -inset-1 rounded-full bg-gradient-to-r ${getRankColor(profile.rank_title)} opacity-75 blur transition duration-500 group-hover:opacity-100` }),
            /* @__PURE__ */ jsx(
              "img",
              {
                src: profile.profile_photo_url || `https://ui-avatars.com/api/?name=${profile.name}`,
                alt: profile.name,
                className: "relative h-32 w-32 rounded-full border-4 border-slate-900 object-cover shadow-2xl"
              }
            )
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "mb-1 text-4xl font-black tracking-tight text-white md:text-5xl", children: profile.name }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
            profile.username && /* @__PURE__ */ jsxs("span", { className: "text-lg font-medium text-slate-400", children: [
              "@",
              profile.username
            ] }),
            /* @__PURE__ */ jsx("span", { className: "h-1 w-1 rounded-full bg-slate-600" }),
            /* @__PURE__ */ jsx("span", { className: "flex items-center gap-1 rounded-full bg-yellow-500/10 px-3 py-1 border border-yellow-500/20", children: /* @__PURE__ */ jsxs("span", { className: "text-yellow-500 text-sm font-bold", children: [
              "#",
              profile.rank
            ] }) }),
            /* @__PURE__ */ jsx("span", { className: `text-lg font-bold bg-gradient-to-r ${getRankColor(profile.rank_title)} bg-clip-text text-transparent`, children: profile.rank_title })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid w-full grid-cols-3 gap-4 md:gap-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "group rounded-3xl bg-white/5 p-6 transition-colors hover:bg-white/10", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-widest text-slate-500 mb-2", children: t("Points") }),
              /* @__PURE__ */ jsx("p", { className: "text-3xl font-black text-white group-hover:scale-110 transition-transform", children: profile.points })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "group rounded-3xl bg-green-500/5 p-6 transition-colors hover:bg-green-500/10", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-widest text-green-500/60 mb-2", children: t("Wins") }),
              /* @__PURE__ */ jsx("p", { className: "text-3xl font-black text-green-400 group-hover:scale-110 transition-transform", children: profile.wins })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "group rounded-3xl bg-red-500/5 p-6 transition-colors hover:bg-red-500/10", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs font-bold uppercase tracking-widest text-red-500/60 mb-2", children: t("Losses") }),
              /* @__PURE__ */ jsx("p", { className: "text-3xl font-black text-red-400 group-hover:scale-110 transition-transform", children: profile.losses })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-12 w-full", children: [
            /* @__PURE__ */ jsxs("h3", { className: "mb-6 text-left text-xl font-bold text-white flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("svg", { className: "h-5 w-5 text-indigo-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
              t("Recent Matches")
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-3", children: history.length > 0 ? history.map((match) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 p-4 transition-all hover:bg-white/10 hover:border-white/10", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: `flex h-10 w-10 items-center justify-center rounded-xl font-black text-sm uppercase ${match.result === "win" ? "bg-green-500/20 text-green-400" : match.result === "loss" ? "bg-red-500/20 text-red-400" : "bg-slate-500/20 text-slate-400"}`, children: match.result === "win" ? "W" : match.result === "loss" ? "L" : "D" }),
                /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
                  /* @__PURE__ */ jsxs("p", { className: "font-bold text-white text-sm", children: [
                    "vs ",
                    match.opponent?.name || t("Unknown")
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-500", children: match.date })
                ] })
              ] }),
              match.opponent && /* @__PURE__ */ jsx("img", { src: match.opponent.avatar || `https://ui-avatars.com/api/?name=${match.opponent.name}`, className: "h-8 w-8 rounded-full opacity-50" })
            ] }, match.id)) : /* @__PURE__ */ jsx("div", { className: "text-center py-8 text-slate-500 bg-white/5 rounded-2xl border border-dashed border-white/10", children: t("No recent matches played") }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-10 flex w-full gap-4", children: /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: copyLink,
              className: "group flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 py-4 font-bold transition-all hover:bg-white/10 hover:border-white/20 active:scale-95",
              children: [
                /* @__PURE__ */ jsx("svg", { className: "h-5 w-5 text-slate-400 group-hover:text-white transition-colors", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" }) }),
                t("Share Profile")
              ]
            }
          ) })
        ] })
      ] }),
      !auth.user && /* @__PURE__ */ jsxs("div", { className: "mt-16 text-center animate-fade-in-up", children: [
        /* @__PURE__ */ jsx("p", { className: "mb-6 text-slate-400 font-medium", children: t("Think you can beat them?") }),
        /* @__PURE__ */ jsxs(
          Link,
          {
            href: "/register",
            className: "inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-10 py-4 text-lg font-bold text-white shadow-xl shadow-blue-600/30 transition-transform hover:scale-105 hover:shadow-blue-600/40",
            children: [
              t("Create Account"),
              /* @__PURE__ */ jsx("svg", { className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 7l5 5m0 0l-5 5m5-5H6" }) })
            ]
          }
        )
      ] })
    ] })
  ] });
}
export {
  Public as default
};
