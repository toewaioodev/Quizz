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
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, /* @__PURE__ */ Object.assign({ "./pages/Arena.tsx": () => import("./assets/Arena-cqxQZSC6.js"), "./pages/Auth/Login.tsx": () => import("./assets/Login-DBh-90dH.js"), "./pages/Auth/Register.tsx": () => import("./assets/Register-B5X3cbXJ.js"), "./pages/Dashboard.tsx": () => import("./assets/Dashboard-DvpbnoLZ.js"), "./pages/Leaderboard/Index.tsx": () => import("./assets/Index-BYmv0CP1.js"), "./pages/Lobby.tsx": () => import("./assets/Lobby-ZWNjRP-S.js"), "./pages/Profile/Show.tsx": () => import("./assets/Show-K5V99wC8.js"), "./pages/welcome.tsx": () => import("./assets/welcome-BR3zHh19.js") })),
    setup: ({ App, props }) => /* @__PURE__ */ jsx(App, { ...props })
  })
);
