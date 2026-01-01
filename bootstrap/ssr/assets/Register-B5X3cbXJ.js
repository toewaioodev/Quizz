import { jsxs, jsx } from "react/jsx-runtime";
import { useForm, Head, Link } from "@inertiajs/react";
function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  });
  const submit = (e) => {
    e.preventDefault();
    post("/register");
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex items-center justify-center bg-gray-100 dark:bg-slate-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans", children: [
    /* @__PURE__ */ jsx(Head, { title: "Register" }),
    /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-700", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-500 mb-2", children: "Get Started" }),
        /* @__PURE__ */ jsx("p", { className: "text-slate-500 dark:text-slate-400 font-medium", children: "Create your challenger profile" })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "space-y-5", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2", htmlFor: "name", children: "Display Name" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "name",
              type: "text",
              className: "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 focus:border-pink-500 focus:ring-4 focus:ring-pink-500/20 outline-none transition-all font-medium",
              value: data.name,
              onChange: (e) => setData("name", e.target.value),
              required: true,
              autoFocus: true
            }
          ),
          errors.name && /* @__PURE__ */ jsx("div", { className: "text-red-500 text-sm mt-1 font-semibold", children: errors.name })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2", htmlFor: "email", children: "Email Address" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "email",
              type: "email",
              className: "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 focus:border-pink-500 focus:ring-4 focus:ring-pink-500/20 outline-none transition-all font-medium",
              value: data.email,
              onChange: (e) => setData("email", e.target.value),
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
              className: "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 focus:border-pink-500 focus:ring-4 focus:ring-pink-500/20 outline-none transition-all font-medium",
              value: data.password,
              onChange: (e) => setData("password", e.target.value),
              required: true
            }
          ),
          errors.password && /* @__PURE__ */ jsx("div", { className: "text-red-500 text-sm mt-1 font-semibold", children: errors.password })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2", htmlFor: "password_confirmation", children: "Confirm Password" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "password_confirmation",
              type: "password",
              className: "w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 focus:border-pink-500 focus:ring-4 focus:ring-pink-500/20 outline-none transition-all font-medium",
              value: data.password_confirmation,
              onChange: (e) => setData("password_confirmation", e.target.value),
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            disabled: processing,
            className: "w-full py-4 px-6 bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-500 hover:to-orange-500 text-white font-bold text-lg rounded-xl shadow-lg shadow-pink-500/30 transform transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed mt-2",
            children: processing ? "Creating Account..." : "Sign Up"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "text-center pt-4", children: /* @__PURE__ */ jsxs("p", { className: "text-slate-500 dark:text-slate-400 text-sm", children: [
          "Already have an account?",
          " ",
          /* @__PURE__ */ jsx(
            Link,
            {
              href: "/login",
              className: "text-pink-600 dark:text-pink-400 font-bold hover:underline decoration-2 underline-offset-2",
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
