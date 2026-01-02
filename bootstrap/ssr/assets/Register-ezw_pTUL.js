import { jsxs, jsx } from "react/jsx-runtime";
import { useForm, Head, Link } from "@inertiajs/react";
import { useState } from "react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/outline";
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
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300 font-sans p-4", children: [
    /* @__PURE__ */ jsx(Head, { title: "Register" }),
    /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 p-8 sm:p-10 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-gradient-to-br from-pink-500/20 to-orange-500/20 blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-gradient-to-tr from-purple-500/20 to-pink-500/20 blur-3xl" }),
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-8 relative z-10", children: [
        /* @__PURE__ */ jsx(Link, { href: "/", className: "inline-block mb-4 hover:scale-105 transition-transform duration-300", children: /* @__PURE__ */ jsx("div", { className: "h-16 w-16 mx-auto rounded-2xl bg-gradient-to-tr from-pink-600 to-orange-600 flex items-center justify-center text-white font-bold text-3xl shadow-xl shadow-pink-500/30", children: "Q" }) }),
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-black tracking-tight text-slate-900 dark:text-white mb-2", children: "Get Started" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500 dark:text-slate-400 font-medium", children: "Create your challenger profile" })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "space-y-5 relative z-10", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 pl-1", htmlFor: "name", children: "Display Name" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "name",
              type: "text",
              className: "w-full pl-4 pr-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 focus:border-pink-500 dark:focus:border-pink-500 focus:ring-4 focus:ring-pink-500/20 outline-none transition-all font-medium text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500",
              value: data.name,
              onChange: (e) => setData("name", e.target.value),
              required: true,
              autoFocus: true,
              placeholder: "Your Username"
            }
          ),
          errors.name && /* @__PURE__ */ jsx("div", { className: "text-red-500 text-xs mt-1.5 font-bold pl-1 animate-pulse", children: errors.name })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 pl-1", htmlFor: "email", children: "Email Address" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "email",
              type: "email",
              className: "w-full pl-4 pr-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 focus:border-pink-500 dark:focus:border-pink-500 focus:ring-4 focus:ring-pink-500/20 outline-none transition-all font-medium text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500",
              value: data.email,
              onChange: (e) => setData("email", e.target.value),
              required: true,
              placeholder: "name@example.com"
            }
          ),
          errors.email && /* @__PURE__ */ jsx("div", { className: "text-red-500 text-xs mt-1.5 font-bold pl-1 animate-pulse", children: errors.email })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 pl-1", htmlFor: "password", children: "Password" }),
          /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "password",
                type: showPassword ? "text" : "password",
                className: "w-full pl-4 pr-12 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 focus:border-pink-500 dark:focus:border-pink-500 focus:ring-4 focus:ring-pink-500/20 outline-none transition-all font-medium text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500",
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
                className: "absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700",
                children: showPassword ? /* @__PURE__ */ jsx(EyeSlashIcon, { className: "w-5 h-5" }) : /* @__PURE__ */ jsx(EyeIcon, { className: "w-5 h-5" })
              }
            )
          ] }),
          errors.password && /* @__PURE__ */ jsx("div", { className: "text-red-500 text-xs mt-1.5 font-bold pl-1 animate-pulse", children: errors.password })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 pl-1", htmlFor: "password_confirmation", children: "Confirm Password" }),
          /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "password_confirmation",
                type: showConfirmPassword ? "text" : "password",
                className: "w-full pl-4 pr-12 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 focus:border-pink-500 dark:focus:border-pink-500 focus:ring-4 focus:ring-pink-500/20 outline-none transition-all font-medium text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500",
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
                className: "absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700",
                children: showConfirmPassword ? /* @__PURE__ */ jsx(EyeSlashIcon, { className: "w-5 h-5" }) : /* @__PURE__ */ jsx(EyeIcon, { className: "w-5 h-5" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            disabled: processing,
            className: "w-full py-4 px-6 bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-500 hover:to-orange-500 text-white font-bold text-lg rounded-xl shadow-lg shadow-pink-500/30 transform transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed mt-2 disabled:transform-none",
            children: processing ? /* @__PURE__ */ jsxs("span", { className: "flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsxs("svg", { className: "animate-spin h-5 w-5 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
                /* @__PURE__ */ jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
                /* @__PURE__ */ jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
              ] }),
              "Creating Account..."
            ] }) : "Sign Up"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "text-center pt-2", children: /* @__PURE__ */ jsxs("p", { className: "text-slate-500 dark:text-slate-400 text-sm font-medium", children: [
          "Already have an account?",
          " ",
          /* @__PURE__ */ jsx(
            Link,
            {
              href: "/login",
              className: "text-pink-600 dark:text-pink-400 font-bold hover:underline decoration-2 underline-offset-2 hover:text-pink-700 dark:hover:text-pink-300 transition-colors",
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
