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
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, /* @__PURE__ */ Object.assign({ "./pages/About.tsx": () => import("./assets/About-DFZMo354.js"), "./pages/Arena.tsx": () => import("./assets/Arena-CMww66Ap.js"), "./pages/Auth/Login.tsx": () => import("./assets/Login-CO0QzX8t.js"), "./pages/Auth/Register.tsx": () => import("./assets/Register-B3C7FolX.js"), "./pages/Dashboard.tsx": () => import("./assets/Dashboard-BuPvMthy.js"), "./pages/FAQ.tsx": () => import("./assets/FAQ-BuOxXBlf.js"), "./pages/Features.tsx": () => import("./assets/Features-C_E-RkQR.js"), "./pages/Leaderboard/Index.tsx": () => import("./assets/Index-C4V5FIsx.js"), "./pages/Lobby.tsx": () => import("./assets/Lobby-BnMB9lcz.js"), "./pages/Pricing.tsx": () => import("./assets/Pricing-DSzwHBam.js"), "./pages/Privacy.tsx": () => import("./assets/Privacy-m6XA2iS4.js"), "./pages/Profile/Show.tsx": () => import("./assets/Show-CZ8NJ-7v.js"), "./pages/Quiz/CategoryQuiz.tsx": () => import("./assets/CategoryQuiz-DpYV6Fjk.js"), "./pages/Terms.tsx": () => import("./assets/Terms-BL8IFr0O.js"), "./pages/welcome.tsx": () => import("./assets/welcome-DeWdv-vZ.js") })),
    setup: ({ App, props }) => /* @__PURE__ */ jsx(App, { ...props })
  })
);
