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
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, /* @__PURE__ */ Object.assign({ "./pages/About.tsx": () => import("./assets/About-uaHZcNjM.js"), "./pages/Arena.tsx": () => import("./assets/Arena-CTNqA_5J.js"), "./pages/Auth/Login.tsx": () => import("./assets/Login-CO0QzX8t.js"), "./pages/Auth/Register.tsx": () => import("./assets/Register-B3C7FolX.js"), "./pages/Dashboard.tsx": () => import("./assets/Dashboard-wIfKL0RW.js"), "./pages/FAQ.tsx": () => import("./assets/FAQ-D6BvTlTT.js"), "./pages/Features.tsx": () => import("./assets/Features-xKTjOhr9.js"), "./pages/Leaderboard/Index.tsx": () => import("./assets/Index-DZ17ScMT.js"), "./pages/Lobby.tsx": () => import("./assets/Lobby-DKwlQoWD.js"), "./pages/Pricing.tsx": () => import("./assets/Pricing-CWoACeQ_.js"), "./pages/Privacy.tsx": () => import("./assets/Privacy-Cev5ZF2f.js"), "./pages/Profile/Public.tsx": () => import("./assets/Public-DGd9AjQq.js"), "./pages/Profile/Show.tsx": () => import("./assets/Show-DLL4FrSa.js"), "./pages/Quiz/CategoryQuiz.tsx": () => import("./assets/CategoryQuiz-DpYV6Fjk.js"), "./pages/Terms.tsx": () => import("./assets/Terms-DVktaNkY.js"), "./pages/welcome.tsx": () => import("./assets/welcome-CHmrMf57.js") })),
    setup: ({ App, props }) => /* @__PURE__ */ jsx(App, { ...props })
  })
);
