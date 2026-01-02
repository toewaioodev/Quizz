import { jsxs, jsx } from "react/jsx-runtime";
import { usePage, useForm, Head } from "@inertiajs/react";
import { N as Navbar } from "./Navbar-Ctort6BS.js";
import { useTranslation } from "react-i18next";
import "@headlessui/react";
import "@heroicons/react/24/outline";
import "react";
import "@heroicons/react/20/solid";
import "./ThemeSwitcher-C4YGyEOA.js";
function Profile({ status }) {
  const { t } = useTranslation();
  const user = usePage().props.auth.user;
  const { data, setData, post, processing, recentlySuccessful, errors } = useForm({
    _method: "PATCH",
    settings: {
      difficulty: user.settings?.difficulty || "medium"
    },
    photo_url: user.profile_photo_path || ""
  });
  const submit = (e) => {
    e.preventDefault();
    post("/profile");
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-gray-100 transition-colors duration-300", children: [
    /* @__PURE__ */ jsx(Head, { title: "Profile" }),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6", children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-slate-900 shadow sm:rounded-lg p-6 space-y-6", children: [
        /* @__PURE__ */ jsxs("header", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: t("Profile Information") }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600 dark:text-gray-400", children: t("Update your account's profile information and settings.") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-6", children: [
            /* @__PURE__ */ jsx("div", { className: "shrink-0", children: /* @__PURE__ */ jsx(
              "img",
              {
                className: "h-16 w-16 object-cover rounded-full border-2 border-slate-200 dark:border-slate-700",
                src: data.photo_url || user.profile_photo_url || `https://ui-avatars.com/api/?name=${user.name}`,
                alt: user.name,
                onError: (e) => {
                  e.target.src = `https://ui-avatars.com/api/?name=${user.name}`;
                }
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "grow", children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "photo_url", className: "block font-medium text-sm text-gray-700 dark:text-gray-300", children: t("Profile Photo URL") }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  id: "photo_url",
                  type: "url",
                  className: "mt-1 block w-full border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm sm:text-sm",
                  value: data.photo_url,
                  onChange: (e) => setData("photo_url", e.target.value),
                  placeholder: "https://example.com/photo.jpg"
                }
              ),
              errors.photo_url && /* @__PURE__ */ jsx("div", { className: "text-red-500 text-sm mt-1", children: errors.photo_url })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block font-medium text-sm text-gray-700 dark:text-gray-300", children: t("Name") }),
            /* @__PURE__ */ jsx("div", { className: "mt-1 p-2 bg-gray-100 dark:bg-slate-800 rounded-md", children: user.name })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block font-medium text-sm text-gray-700 dark:text-gray-300", children: t("Email") }),
            /* @__PURE__ */ jsx("div", { className: "mt-1 p-2 bg-gray-100 dark:bg-slate-800 rounded-md", children: user.email })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-slate-900 shadow sm:rounded-lg p-6 space-y-6", children: [
        /* @__PURE__ */ jsxs("header", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: t("App Settings") }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-600 dark:text-gray-400", children: t("Customize your experience within the application.") })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "difficulty", className: "block font-medium text-sm text-gray-700 dark:text-gray-300", children: t("Default Difficulty") }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                id: "difficulty",
                className: "mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-slate-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-white dark:bg-slate-800 text-gray-900 dark:text-white",
                value: data.settings.difficulty,
                onChange: (e) => setData("settings", { ...data.settings, difficulty: e.target.value }),
                children: [
                  /* @__PURE__ */ jsx("option", { value: "easy", children: t("Easy") }),
                  /* @__PURE__ */ jsx("option", { value: "medium", children: t("Medium") }),
                  /* @__PURE__ */ jsx("option", { value: "hard", children: t("Hard") })
                ]
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-gray-500 dark:text-gray-400", children: t("This difficulty will be selected by default when you start a quiz.") })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                disabled: processing,
                className: "inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 uppercase tracking-widest hover:bg-gray-700 dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150",
                children: t("Save")
              }
            ),
            recentlySuccessful && /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: t("Saved.") })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  Profile as default
};
