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
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, /* @__PURE__ */ Object.assign({ "./pages/About.tsx": () => import("./assets/About-BEZ_4-PK.js"), "./pages/Arena.tsx": () => import("./assets/Arena-BUK_jAjt.js"), "./pages/Auth/Login.tsx": () => import("./assets/Login-CNZe5lmm.js"), "./pages/Auth/Register.tsx": () => import("./assets/Register-BqjDum0s.js"), "./pages/Dashboard.tsx": () => import("./assets/Dashboard-w4GVquy5.js"), "./pages/FAQ.tsx": () => import("./assets/FAQ-dv5cSGrR.js"), "./pages/Features.tsx": () => import("./assets/Features-CkdwZx9M.js"), "./pages/Leaderboard/Index.tsx": () => import("./assets/Index-COwV2IV7.js"), "./pages/Lobby.tsx": () => import("./assets/Lobby-D6BysWn0.js"), "./pages/Pricing.tsx": () => import("./assets/Pricing-DaI5GaOB.js"), "./pages/Privacy.tsx": () => import("./assets/Privacy-DwdNZYC-.js"), "./pages/Profile/Show.tsx": () => import("./assets/Show-2EsYkeZ4.js"), "./pages/Quiz/CategoryQuiz.tsx": () => import("./assets/CategoryQuiz-DpYV6Fjk.js"), "./pages/Terms.tsx": () => import("./assets/Terms-D6l0sVa4.js"), "./pages/welcome.tsx": () => import("./assets/welcome-Ch9l5sc1.js") })),
    setup: ({ App, props }) => /* @__PURE__ */ jsx(App, { ...props })
  })
);
