import { jsxs, jsx, Fragment as Fragment$1 } from "react/jsx-runtime";
import { Link, usePage } from "@inertiajs/react";
import { Fragment, useState, createContext, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Menu, MenuButton, Transition, MenuItems, MenuItem, Dialog, DialogPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { GlobeAltIcon, ChevronDownIcon as ChevronDownIcon$1, UserIcon, ArrowRightOnRectangleIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { T as ThemeSwitcher } from "./ThemeSwitcher-C4YGyEOA.js";
function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "my", name: "Myanmar", flag: "🇲🇲" }
  ];
  const currentLanguage = languages.find((lang) => i18n.language.startsWith(lang.code)) || languages[0];
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return /* @__PURE__ */ jsxs(Menu, { as: "div", className: "relative inline-block text-left", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(MenuButton, { className: "inline-flex w-full items-center justify-center gap-x-1.5 rounded-full bg-white/80 dark:bg-slate-800/80 px-3 py-2.5 text-sm font-semibold text-gray-900 dark:text-white shadow-lg shadow-gray-200/50 dark:shadow-black/20 ring-1 ring-inset ring-gray-300 dark:ring-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-200", children: [
      /* @__PURE__ */ jsx(
        GlobeAltIcon,
        {
          className: "h-5 w-5 text-gray-500 dark:text-gray-400",
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "uppercase", children: currentLanguage.code }),
      /* @__PURE__ */ jsx(
        ChevronDownIcon,
        {
          className: "-mr-1 h-5 w-5 text-gray-400",
          "aria-hidden": "true"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(
      Transition,
      {
        as: Fragment,
        enter: "transition ease-out duration-100",
        enterFrom: "transform opacity-0 scale-95",
        enterTo: "transform opacity-100 scale-100",
        leave: "transition ease-in duration-75",
        leaveFrom: "transform opacity-100 scale-100",
        leaveTo: "transform opacity-0 scale-95",
        children: /* @__PURE__ */ jsx(MenuItems, { className: "absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-xl bg-white dark:bg-slate-800 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-100 dark:divide-slate-700", children: /* @__PURE__ */ jsx("div", { className: "py-1", children: languages.map((language) => /* @__PURE__ */ jsx(MenuItem, { children: ({ active }) => /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => changeLanguage(language.code),
            className: `
                                            ${active ? "bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white" : "text-gray-700 dark:text-gray-300"}
                                            group flex w-full items-center px-4 py-2 text-sm transition-colors duration-150
                                        `,
            children: [
              /* @__PURE__ */ jsx("span", { className: "mr-3 text-lg", children: language.flag }),
              language.name,
              currentLanguage.code === language.code && /* @__PURE__ */ jsx("span", { className: "ml-auto text-indigo-600 dark:text-indigo-400", children: /* @__PURE__ */ jsx(
                "svg",
                {
                  className: "h-4 w-4",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  strokeWidth: "3",
                  stroke: "currentColor",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "M4.5 12.75l6 6 9-13.5"
                    }
                  )
                }
              ) })
            ]
          }
        ) }, language.code)) }) })
      }
    )
  ] });
}
const DropDownContext = createContext({
  open: false,
  setOpen: () => {
  },
  toggleOpen: () => {
  }
});
const Dropdown = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((previousState) => !previousState);
  };
  return /* @__PURE__ */ jsx(DropDownContext.Provider, { value: { open, setOpen, toggleOpen }, children: /* @__PURE__ */ jsx("div", { className: "relative", children }) });
};
const Trigger = ({ children }) => {
  const { open, setOpen, toggleOpen } = useContext(DropDownContext);
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx("div", { onClick: toggleOpen, children }),
    open && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-40", onClick: () => setOpen(false) })
  ] });
};
const Content = ({
  align = "right",
  width = "48",
  contentClasses = "py-1 bg-white",
  children
}) => {
  const { open, setOpen } = useContext(DropDownContext);
  let alignmentClasses = "origin-top";
  if (align === "left") {
    alignmentClasses = "ltr:origin-top-left rtl:origin-top-right start-0";
  } else if (align === "right") {
    alignmentClasses = "ltr:origin-top-right rtl:origin-top-left end-0";
  }
  let widthClasses = "";
  if (width === "48") {
    widthClasses = "w-48";
  }
  return /* @__PURE__ */ jsx(
    Transition,
    {
      as: Fragment,
      show: open,
      enter: "transition ease-out duration-200",
      enterFrom: "opacity-0 scale-95",
      enterTo: "opacity-100 scale-100",
      leave: "transition ease-in duration-75",
      leaveFrom: "opacity-100 scale-100",
      leaveTo: "opacity-0 scale-95",
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: `absolute z-50 mt-2 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`,
          onClick: () => setOpen(false),
          children: /* @__PURE__ */ jsx("div", { className: `rounded-md ring-1 ring-black ring-opacity-5 ` + contentClasses, children })
        }
      )
    }
  );
};
const DropdownLink = ({ className = "", children, ...props }) => {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: "block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100 " + className,
      children
    }
  );
};
Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;
function Navbar() {
  const { auth } = usePage().props;
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return /* @__PURE__ */ jsxs("header", { className: "bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 w-full backdrop-blur-md transition-colors duration-300", children: [
    /* @__PURE__ */ jsxs("nav", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center", children: [
      /* @__PURE__ */ jsxs(Link, { href: "/lobby", className: "flex items-center space-x-3 group", children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform", children: "Q" }),
        /* @__PURE__ */ jsx("span", { className: "font-extrabold text-xl tracking-tight text-slate-800 dark:text-white", children: "Quizz" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center space-x-4", children: [
        /* @__PURE__ */ jsx(ThemeSwitcher, {}),
        /* @__PURE__ */ jsx(LanguageSwitcher, {}),
        /* @__PURE__ */ jsx("div", { className: "h-6 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block" }),
        auth.user ? /* @__PURE__ */ jsxs(Dropdown, { children: [
          /* @__PURE__ */ jsx(Dropdown.Trigger, { children: /* @__PURE__ */ jsxs("button", { className: "flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors focus:outline-none", children: [
            /* @__PURE__ */ jsx("div", { className: "cursor-pointer w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 flex items-center justify-center text-xs font-bold text-white shadow-md ring-2 ring-white/20", children: auth.user.name.charAt(0) }),
            /* @__PURE__ */ jsx(ChevronDownIcon$1, { className: "hidden sm:block w-4 h-4" })
          ] }) }),
          /* @__PURE__ */ jsxs(Dropdown.Content, { width: "48", contentClasses: "py-1 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-xl rounded-xl", children: [
            /* @__PURE__ */ jsxs("div", { className: "px-4 py-3 border-b border-gray-100 dark:border-gray-700", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "Signed in as" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-900 dark:text-white truncate", children: auth.user.email })
            ] }),
            /* @__PURE__ */ jsxs(Dropdown.Link, { href: "/profile", className: "flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50", children: [
              /* @__PURE__ */ jsx(UserIcon, { className: "w-4 h-4 mr-2" }),
              "Profile"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "border-t border-gray-100 dark:border-gray-700 my-1" }),
            /* @__PURE__ */ jsxs(
              Dropdown.Link,
              {
                href: "/logout",
                method: "post",
                as: "button",
                className: "flex items-center px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 w-full text-left",
                children: [
                  /* @__PURE__ */ jsx(ArrowRightOnRectangleIcon, { className: "w-4 h-4 mr-2" }),
                  "Log Out"
                ]
              }
            )
          ] })
        ] }) : /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(
            Link,
            {
              href: "/login",
              className: "px-5 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors",
              children: "Log in"
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              href: "/register",
              className: "px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-200",
              children: "Register"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex md:hidden", children: /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          className: "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200",
          onClick: () => setMobileMenuOpen(true),
          children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open main menu" }),
            /* @__PURE__ */ jsx(Bars3Icon, { className: "h-7 w-7", "aria-hidden": "true" })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs(Dialog, { as: "div", className: "md:hidden", open: mobileMenuOpen, onClose: setMobileMenuOpen, children: [
      /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-50 bg-black/20 backdrop-blur-sm dark:bg-black/50" }),
      /* @__PURE__ */ jsxs(DialogPanel, { className: "fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-slate-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-transform duration-300 ease-in-out", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs(Link, { href: "/lobby", className: "flex items-center space-x-3 -m-1.5 p-1.5", children: [
            /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg", children: "Q" }),
            /* @__PURE__ */ jsx("span", { className: "font-bold text-lg text-slate-800 dark:text-white", children: "Quizz" })
          ] }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              className: "-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200",
              onClick: () => setMobileMenuOpen(false),
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close menu" }),
                /* @__PURE__ */ jsx(XMarkIcon, { className: "h-6 w-6", "aria-hidden": "true" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flow-root", children: /* @__PURE__ */ jsxs("div", { className: "-my-6 divide-y divide-gray-500/10 dark:divide-gray-500/20", children: [
          /* @__PURE__ */ jsx("div", { className: "space-y-2 py-6" }),
          /* @__PURE__ */ jsxs("div", { className: "py-6 space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("span", { className: "text-base font-semibold leading-7 text-gray-900 dark:text-white", children: "Appearance" }),
              /* @__PURE__ */ jsx(ThemeSwitcher, {})
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("span", { className: "text-base font-semibold leading-7 text-gray-900 dark:text-white", children: "Language" }),
              /* @__PURE__ */ jsx(LanguageSwitcher, {})
            ] }),
            /* @__PURE__ */ jsx("div", { className: "border-t border-gray-200 dark:border-gray-700 my-4" }),
            auth.user ? /* @__PURE__ */ jsxs(Fragment$1, { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 px-3 py-2", children: [
                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 flex items-center justify-center text-sm font-bold text-white shadow-md ring-2 ring-white/20", children: auth.user.name.charAt(0) }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-gray-900 dark:text-white", children: auth.user.name }),
                  /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-500 dark:text-gray-400", children: auth.user.email })
                ] })
              ] }),
              /* @__PURE__ */ jsx(
                Link,
                {
                  href: "/profile",
                  className: "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800",
                  children: "Profile"
                }
              ),
              /* @__PURE__ */ jsx(
                Link,
                {
                  href: "/logout",
                  method: "post",
                  as: "button",
                  className: "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10 w-full text-left",
                  children: "Log out"
                }
              )
            ] }) : /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
              /* @__PURE__ */ jsx(
                Link,
                {
                  href: "/login",
                  className: "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800",
                  children: "Log in"
                }
              ),
              /* @__PURE__ */ jsx(
                Link,
                {
                  href: "/register",
                  className: "block w-full text-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-2.5 text-base font-semibold leading-7 text-white shadow-lg hover:shadow-xl transition-all",
                  children: "Register"
                }
              )
            ] })
          ] })
        ] }) })
      ] })
    ] })
  ] });
}
export {
  Navbar as N
};
