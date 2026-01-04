import { jsxs, jsx } from "react/jsx-runtime";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/outline";
import { useForm, Head, Link } from "@inertiajs/react";
import { useState } from "react";
function Register() {
  const { data, setData, post, processing, errors } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    post("/register");
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen items-center justify-center bg-slate-50 p-4 font-sans text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white", children: [
    /* @__PURE__ */ jsx(Head, { title: "Register" }),
    /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-md overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-xl sm:p-10 dark:border-slate-800 dark:bg-slate-900", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 -mt-16 -mr-16 h-48 w-48 rounded-full bg-gradient-to-br from-pink-500/20 to-orange-500/20 blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 -mb-16 -ml-16 h-48 w-48 rounded-full bg-gradient-to-tr from-purple-500/20 to-pink-500/20 blur-3xl" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 mb-8 text-center", children: [
        /* @__PURE__ */ jsx(Link, { href: "/welcome", className: "mb-4 inline-block transition-transform duration-300 hover:scale-105", children: /* @__PURE__ */ jsx("div", { className: "mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-pink-600 to-orange-600 text-3xl font-bold text-white shadow-xl shadow-pink-500/30", children: "Q" }) }),
        /* @__PURE__ */ jsx("h1", { className: "mb-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white", children: "Get Started" }),
        /* @__PURE__ */ jsx("p", { className: "font-medium text-slate-500 dark:text-slate-400", children: "Create your challenger profile" })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "relative z-10 space-y-5", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "mb-2 block pl-1 text-sm font-bold text-slate-700 dark:text-slate-300", htmlFor: "name", children: "Display Name" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "name",
              type: "text",
              className: "w-full rounded-xl border-2 border-slate-200 bg-slate-50 py-3.5 pr-4 pl-4 font-medium text-slate-900 placeholder-slate-400 transition-all outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500 dark:focus:border-pink-500",
              value: data.name,
              onChange: (e) => setData("name", e.target.value),
              required: true,
              autoFocus: true,
              placeholder: "Your Username"
            }
          ),
          errors.name && /* @__PURE__ */ jsx("div", { className: "mt-1.5 animate-pulse pl-1 text-xs font-bold text-red-500", children: errors.name })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "mb-2 block pl-1 text-sm font-bold text-slate-700 dark:text-slate-300", htmlFor: "email", children: "Email Address" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "email",
              type: "email",
              className: "w-full rounded-xl border-2 border-slate-200 bg-slate-50 py-3.5 pr-4 pl-4 font-medium text-slate-900 placeholder-slate-400 transition-all outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500 dark:focus:border-pink-500",
              value: data.email,
              onChange: (e) => setData("email", e.target.value),
              required: true,
              placeholder: "name@example.com"
            }
          ),
          errors.email && /* @__PURE__ */ jsx("div", { className: "mt-1.5 animate-pulse pl-1 text-xs font-bold text-red-500", children: errors.email })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "mb-2 block pl-1 text-sm font-bold text-slate-700 dark:text-slate-300", htmlFor: "password", children: "Password" }),
          /* @__PURE__ */ jsxs("div", { className: "group relative", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "password",
                type: showPassword ? "text" : "password",
                className: "w-full rounded-xl border-2 border-slate-200 bg-slate-50 py-3.5 pr-12 pl-4 font-medium text-slate-900 placeholder-slate-400 transition-all outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500 dark:focus:border-pink-500",
                value: data.password,
                onChange: (e) => setData("password", e.target.value),
                required: true,
                placeholder: "Create a password"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => setShowPassword(!showPassword),
                className: "absolute top-1/2 right-3 -translate-y-1/2 rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-700 dark:hover:text-slate-300",
                children: showPassword ? /* @__PURE__ */ jsx(EyeSlashIcon, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(EyeIcon, { className: "h-5 w-5" })
              }
            )
          ] }),
          errors.password && /* @__PURE__ */ jsx("div", { className: "mt-1.5 animate-pulse pl-1 text-xs font-bold text-red-500", children: errors.password })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "mb-2 block pl-1 text-sm font-bold text-slate-700 dark:text-slate-300", htmlFor: "password_confirmation", children: "Confirm Password" }),
          /* @__PURE__ */ jsxs("div", { className: "group relative", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "password_confirmation",
                type: showConfirmPassword ? "text" : "password",
                className: "w-full rounded-xl border-2 border-slate-200 bg-slate-50 py-3.5 pr-12 pl-4 font-medium text-slate-900 placeholder-slate-400 transition-all outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500 dark:focus:border-pink-500",
                value: data.password_confirmation,
                onChange: (e) => setData("password_confirmation", e.target.value),
                required: true,
                placeholder: "Confirm your password"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => setShowConfirmPassword(!showConfirmPassword),
                className: "absolute top-1/2 right-3 -translate-y-1/2 rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-700 dark:hover:text-slate-300",
                children: showConfirmPassword ? /* @__PURE__ */ jsx(EyeSlashIcon, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(EyeIcon, { className: "h-5 w-5" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            disabled: processing,
            className: "mt-2 w-full transform rounded-xl bg-gradient-to-r from-pink-600 to-orange-600 px-6 py-4 text-lg font-bold text-white shadow-lg shadow-pink-500/30 transition-all hover:scale-[1.02] hover:from-pink-500 hover:to-orange-500 active:scale-[0.98] disabled:transform-none disabled:cursor-not-allowed disabled:opacity-70",
            children: processing ? /* @__PURE__ */ jsxs("span", { className: "flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsxs("svg", { className: "h-5 w-5 animate-spin text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
                /* @__PURE__ */ jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
                /* @__PURE__ */ jsx(
                  "path",
                  {
                    className: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  }
                )
              ] }),
              "Creating Account..."
            ] }) : "Sign Up"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "pt-2 text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-sm font-medium text-slate-500 dark:text-slate-400", children: [
          "Already have an account?",
          " ",
          /* @__PURE__ */ jsx(
            Link,
            {
              href: "/login",
              className: "font-bold text-pink-600 decoration-2 underline-offset-2 transition-colors hover:text-pink-700 hover:underline dark:text-pink-400 dark:hover:text-pink-300",
              children: "Log in"
            }
          )
        ] }) })
      ] })
    ] })
  ] });
}
export {
  Register as default
};
