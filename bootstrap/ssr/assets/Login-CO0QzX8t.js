import { jsxs, jsx } from "react/jsx-runtime";
import { useForm, Head, Link } from "@inertiajs/react";
import { useState } from "react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/outline";
function Login() {
  const { data, setData, post, processing, errors } = useForm({
    email: "",
    password: "",
    remember: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    post("/login");
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen items-center justify-center bg-slate-50 p-4 font-sans text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white", children: [
    /* @__PURE__ */ jsx(Head, { title: "Log in" }),
    /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-md overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl sm:p-10 dark:border-slate-800 dark:bg-slate-900", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 blur-3xl" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 mb-8 text-center", children: [
        /* @__PURE__ */ jsx(Link, { href: "/welcome", className: "mb-4 inline-block transition-transform duration-300 hover:scale-105", children: /* @__PURE__ */ jsx("div", { className: "mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 text-3xl font-bold text-white shadow-xl shadow-blue-500/30", children: "Q" }) }),
        /* @__PURE__ */ jsx("h1", { className: "mb-2 text-4xl font-black tracking-tight text-slate-900 dark:text-white", children: "Welcome Back" }),
        /* @__PURE__ */ jsx("p", { className: "font-medium text-slate-500 dark:text-slate-400", children: "Log in to continue your challenge." })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "relative z-10 space-y-6", children: [
        errors.email && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-900/10 dark:text-red-400", children: [
          /* @__PURE__ */ jsx("svg", { className: "h-5 w-5 shrink-0 text-red-500", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }) }),
          /* @__PURE__ */ jsx("span", { className: "font-semibold", children: errors.email })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "mb-2 block pl-1 text-sm font-bold text-slate-700 dark:text-slate-300", htmlFor: "email", children: "Email Address" }),
          /* @__PURE__ */ jsxs("div", { className: "group relative", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "email",
                type: "email",
                className: `w-full rounded-xl border-2 py-3.5 pl-4 pr-4 font-medium text-slate-900 placeholder-slate-400 transition-all outline-none focus:ring-4 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500 ${errors.email ? "border-red-300 focus:border-red-500 focus:ring-red-500/20 dark:border-red-800" : "border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 dark:border-slate-700 dark:focus:border-blue-500"}`,
                value: data.email,
                onChange: (e) => setData("email", e.target.value),
                placeholder: "name@example.com",
                required: true
              }
            ),
            errors.email && /* @__PURE__ */ jsx("div", { className: "mt-1.5 pl-1 text-xs font-bold text-red-500", children: errors.email })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-2 flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("label", { className: "block pl-1 text-sm font-bold text-slate-700 dark:text-slate-300", htmlFor: "password", children: "Password" }),
            /* @__PURE__ */ jsx(
              Link,
              {
                href: "/forgot-password",
                className: "text-xs font-bold text-blue-600 transition-colors hover:text-blue-500 dark:text-blue-400",
                children: "Forgot Password?"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "group relative", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "password",
                type: showPassword ? "text" : "password",
                className: `w-full rounded-xl border-2 py-3.5 pl-4 pr-12 font-medium text-slate-900 placeholder-slate-400 transition-all outline-none focus:ring-4 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500 ${errors.password ? "border-red-300 focus:border-red-500 focus:ring-red-500/20 dark:border-red-800" : "border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 dark:border-slate-700 dark:focus:border-blue-500"}`,
                value: data.password,
                onChange: (e) => setData("password", e.target.value),
                placeholder: "Enter your password",
                required: true
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => setShowPassword(!showPassword),
                className: "absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-700 dark:hover:text-slate-300",
                children: showPassword ? /* @__PURE__ */ jsx(EyeSlashIcon, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(EyeIcon, { className: "h-5 w-5" })
              }
            )
          ] }),
          errors.password && /* @__PURE__ */ jsx("div", { className: "mt-1.5 pl-1 text-xs font-bold text-red-500", children: errors.password })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsxs("label", { className: "group flex cursor-pointer select-none items-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative flex items-center", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "checkbox",
                className: "peer sr-only",
                checked: data.remember,
                onChange: (e) => setData("remember", e.target.checked)
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "h-5 w-5 rounded-md border-2 border-slate-300 bg-white transition-all peer-checked:border-blue-600 peer-checked:bg-blue-600 dark:border-slate-600 dark:bg-slate-800" }),
            /* @__PURE__ */ jsx(
              "svg",
              {
                className: "absolute left-1 top-1 hidden h-3 w-3 transform text-white transition-transform duration-200 peer-checked:block peer-checked:scale-100",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "4",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: /* @__PURE__ */ jsx("polyline", { points: "20 6 9 17 4 12" })
              }
            )
          ] }),
          /* @__PURE__ */ jsx("span", { className: "ml-2.5 text-sm font-medium text-slate-600 transition-colors group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-white", children: "Remember me" })
        ] }) }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            disabled: processing,
            className: "w-full transform rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 text-lg font-bold text-white shadow-lg shadow-blue-500/30 transition-all hover:scale-[1.02] hover:from-blue-500 hover:to-purple-500 active:scale-[0.98] disabled:transform-none disabled:cursor-not-allowed disabled:opacity-70",
            children: processing ? /* @__PURE__ */ jsxs("span", { className: "flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsxs("svg", { className: "h-5 w-5 animate-spin text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
                /* @__PURE__ */ jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
                /* @__PURE__ */ jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
              ] }),
              "Signing In..."
            ] }) : "Sign In"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "pt-2 text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-sm font-medium text-slate-500 dark:text-slate-400", children: [
          "Don't have an account?",
          " ",
          /* @__PURE__ */ jsx(
            Link,
            {
              href: "/register",
              className: "font-bold text-blue-600 decoration-2 underline-offset-2 transition-colors hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300",
              children: "Sign up now"
            }
          )
        ] }) })
      ] })
    ] })
  ] });
}
export {
  Login as default
};
