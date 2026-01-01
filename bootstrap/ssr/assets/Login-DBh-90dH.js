import { jsxs, jsx } from "react/jsx-runtime";
import { useForm, Head, Link } from "@inertiajs/react";
function Login() {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false
  });
  const submit = (e) => {
    e.preventDefault();
    post("/login");
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex items-center justify-center bg-gray-100 dark:bg-slate-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans", children: [
    /* @__PURE__ */ jsx(Head, { title: "Log in" }),
    /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-700", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-2", children: "Toewaioo" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500 dark:text-slate-400 font-medium", children: "Welcome back, challenger!" })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2", htmlFor: "email", children: "Email Address" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "email",
              type: "email",
              className: "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all font-medium",
              value: data.email,
              onChange: (e) => setData("email", e.target.value),
              placeholder: "name@example.com",
              required: true
            }
          ),
          errors.email && /* @__PURE__ */ jsx("div", { className: "text-red-500 text-sm mt-1 font-semibold", children: errors.email })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2", htmlFor: "password", children: "Password" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "password",
              type: "password",
              className: "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all font-medium",
              value: data.password,
              onChange: (e) => setData("password", e.target.value),
              required: true
            }
          ),
          errors.password && /* @__PURE__ */ jsx("div", { className: "text-red-500 text-sm mt-1 font-semibold", children: errors.password })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxs("label", { className: "flex items-center cursor-pointer group", children: [
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
            /* @__PURE__ */ jsx("div", { className: "w-5 h-5 border-2 border-slate-300 dark:border-slate-600 rounded peer-checked:bg-blue-500 peer-checked:border-blue-500 transition-all" }),
            /* @__PURE__ */ jsx("svg", { className: "absolute w-3 h-3 text-white hidden peer-checked:block left-1", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("polyline", { points: "20 6 9 17 4 12" }) })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "ml-2 text-sm text-slate-600 dark:text-slate-400 group-hover:text-blue-500 transition-colors", children: "Remember me" })
        ] }) }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            disabled: processing,
            className: "w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-lg rounded-xl shadow-lg shadow-blue-500/30 transform transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed",
            children: processing ? "Signing In..." : "Sign In"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "text-center pt-4", children: /* @__PURE__ */ jsxs("p", { className: "text-slate-500 dark:text-slate-400 text-sm", children: [
          "Don't have an account?",
          " ",
          /* @__PURE__ */ jsx(
            Link,
            {
              href: "/register",
              className: "text-blue-600 dark:text-blue-400 font-bold hover:underline decoration-2 underline-offset-2",
              children: "Sigup now"
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
