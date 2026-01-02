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
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, /* @__PURE__ */ Object.assign({ "./pages/About.tsx": () => import("./assets/About-C9MUe3IB.js"), "./pages/Arena.tsx": () => import("./assets/Arena-DWnaU-75.js"), "./pages/Auth/Login.tsx": () => import("./assets/Login-DBh-90dH.js"), "./pages/Auth/Register.tsx": () => import("./assets/Register-B5X3cbXJ.js"), "./pages/Dashboard.tsx": () => import("./assets/Dashboard-Dq-tvo9w.js"), "./pages/FAQ.tsx": () => import("./assets/FAQ-DNt6aFLB.js"), "./pages/Features.tsx": () => import("./assets/Features-B-fsZqVs.js"), "./pages/Leaderboard/Index.tsx": () => import("./assets/Index-B_MjSwmR.js"), "./pages/Lobby.tsx": () => import("./assets/Lobby-FpH6mItL.js"), "./pages/Pricing.tsx": () => import("./assets/Pricing-CPmr54Wp.js"), "./pages/Privacy.tsx": () => import("./assets/Privacy-1KyOdZkB.js"), "./pages/Profile/Show.tsx": () => import("./assets/Show-4njea0HC.js"), "./pages/Terms.tsx": () => import("./assets/Terms-BqUsvAFS.js"), "./pages/welcome.tsx": () => import("./assets/welcome-D6vhKWSw.js") })),
    setup: ({ App, props }) => /* @__PURE__ */ jsx(App, { ...props })
  })
);
