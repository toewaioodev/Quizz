import { jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
function ThemeSwitcher() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === "dark" ? "light" : "dark");
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: toggleTheme,
      className: "w-8 h-8 rounded-full flex items-center justify-center bg-slate-200 dark:bg-slate-800 text-slate-500 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors",
      title: theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode",
      children: theme === "dark" ? (
        // Sun Icon
        /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-yellow-500", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" }) })
      ) : (
        // Moon Icon
        /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-slate-700", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" }) })
      )
    }
  );
}
export {
  ThemeSwitcher as T
};
