import { jsx } from "react/jsx-runtime";
import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
async function resolvePageComponent(path, pages) {
  for (const p of Array.isArray(path) ? path : [path]) {
    const page = pages[p];
    if (typeof page === "undefined") {
      continue;
    }
    return typeof page === "function" ? page() : page;
  }
  throw new Error(`Page not found: ${path}`);
}
const appName = "Laravel";
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    title: (title) => title ? `${title} - ${appName}` : appName,
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, /* @__PURE__ */ Object.assign({ "./pages/About.tsx": () => import("./assets/About-D0xV6Tsb.js"), "./pages/Arena.tsx": () => import("./assets/Arena-CNHjfqNE.js"), "./pages/Auth/Login.tsx": () => import("./assets/Login-BFGxO-yH.js"), "./pages/Auth/Register.tsx": () => import("./assets/Register-ezw_pTUL.js"), "./pages/Dashboard.tsx": () => import("./assets/Dashboard-S5aIEa9P.js"), "./pages/FAQ.tsx": () => import("./assets/FAQ-EwjEe52q.js"), "./pages/Features.tsx": () => import("./assets/Features--wOZ1wOY.js"), "./pages/Leaderboard/Index.tsx": () => import("./assets/Index-B9gv_0GA.js"), "./pages/Lobby.tsx": () => import("./assets/Lobby-6E0hS97V.js"), "./pages/Pricing.tsx": () => import("./assets/Pricing-CgbJKH_H.js"), "./pages/Privacy.tsx": () => import("./assets/Privacy-DeqGocFR.js"), "./pages/Profile/Show.tsx": () => import("./assets/Show-Bio6hAAc.js"), "./pages/Quiz/CategoryQuiz.tsx": () => import("./assets/CategoryQuiz-BB3ZQLtK.js"), "./pages/Terms.tsx": () => import("./assets/Terms-C9fik27f.js"), "./pages/welcome.tsx": () => import("./assets/welcome-BGjH-ak5.js") })),
    setup: ({ App, props }) => /* @__PURE__ */ jsx(App, { ...props })
  })
);
