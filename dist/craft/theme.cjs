"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/craft/theme.ts
var theme_exports = {};
__export(theme_exports, {
  ThemeProvider: () => ThemeProvider,
  ThemeSwitcher: () => ThemeSwitcher,
  useTheme: () => useTheme
});
module.exports = __toCommonJS(theme_exports);

// src/utils/cn.ts
function cn(...values) {
  return values.filter(Boolean).join(" ");
}

// src/theme/theme-context.tsx
var React = __toESM(require("react"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var THEME_NAMES = [
  "aurora",
  "ember",
  "ocean",
  "midnight",
  "cosmic"
];
var ThemeContext = React.createContext(null);
var DEFAULT_THEME_KEY = "nextcraft-theme";
var DEFAULT_MODE_KEY = "nextcraft-mode";
function ThemeProvider({
  children,
  defaultTheme = "ocean",
  defaultMode = "system",
  storageKeyTheme = DEFAULT_THEME_KEY,
  storageKeyMode = DEFAULT_MODE_KEY
}) {
  const [theme, setTheme] = React.useState(defaultTheme);
  const [mode, setMode] = React.useState(defaultMode);
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const storedTheme = window.localStorage.getItem(storageKeyTheme);
      const storedMode = window.localStorage.getItem(storageKeyMode);
      if (storedTheme) setTheme(storedTheme);
      if (storedMode) setMode(storedMode);
    } catch {
    }
  }, [storageKeyTheme, storageKeyMode]);
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(storageKeyTheme, theme);
      window.localStorage.setItem(storageKeyMode, mode);
    } catch {
    }
  }, [theme, mode, storageKeyTheme, storageKeyMode]);
  React.useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.dataset.ncTheme = theme;
    if (mode !== "system") {
      root.dataset.ncMode = mode;
      return;
    }
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const applySystem = () => {
      root.dataset.ncMode = mediaQuery.matches ? "dark" : "light";
    };
    applySystem();
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", applySystem);
      return () => mediaQuery.removeEventListener("change", applySystem);
    }
    mediaQuery.addListener(applySystem);
    return () => mediaQuery.removeListener(applySystem);
  }, [theme, mode]);
  const value = React.useMemo(
    () => ({ theme, mode, setTheme, setMode }),
    [theme, mode]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext.Provider, { value, children });
}
function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

// src/components/theme-switcher.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var MODE_OPTIONS = ["system", "light", "dark"];
function ThemeSwitcher({ className, showLabels = true, ...props }) {
  const { theme, mode, setTheme, setMode } = useTheme();
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "div",
    {
      className: cn(
        "flex flex-wrap items-center gap-3 rounded-2xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.08)] px-4 py-3 text-sm text-[rgb(var(--nc-fg))] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { className: "flex items-center gap-2", children: [
          showLabels && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "text-[rgb(var(--nc-fg-muted))]", children: "Theme" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "select",
            {
              className: "rounded-lg border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] px-3 py-1 text-[rgb(var(--nc-fg))] outline-none focus:ring-2 focus:ring-[rgb(var(--nc-accent-1)/0.5)]",
              value: theme,
              onChange: (event) => setTheme(event.target.value),
              children: THEME_NAMES.map((name) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: name, className: "text-slate-900", children: name }, name))
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { className: "flex items-center gap-2", children: [
          showLabels && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "text-[rgb(var(--nc-fg-muted))]", children: "Mode" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "select",
            {
              className: "rounded-lg border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] px-3 py-1 text-[rgb(var(--nc-fg))] outline-none focus:ring-2 focus:ring-[rgb(var(--nc-accent-1)/0.5)]",
              value: mode,
              onChange: (event) => setMode(event.target.value),
              children: MODE_OPTIONS.map((value) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value, className: "text-slate-900", children: value }, value))
            }
          )
        ] })
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ThemeProvider,
  ThemeSwitcher,
  useTheme
});
//# sourceMappingURL=theme.cjs.map