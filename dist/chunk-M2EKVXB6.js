import {
  cn
} from "./chunk-VQ6T3HIX.js";

// src/theme/theme-context.tsx
import * as React from "react";
import { jsx } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx(ThemeContext.Provider, { value, children });
}
function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

// src/components/theme-switcher.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var MODE_OPTIONS = ["system", "light", "dark"];
function ThemeSwitcher({ className, showLabels = true, ...props }) {
  const { theme, mode, setTheme, setMode } = useTheme();
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "flex flex-wrap items-center gap-3 rounded-2xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.08)] px-4 py-3 text-sm text-[rgb(var(--nc-fg))] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-2", children: [
          showLabels && /* @__PURE__ */ jsx2("span", { className: "text-[rgb(var(--nc-fg-muted))]", children: "Theme" }),
          /* @__PURE__ */ jsx2(
            "select",
            {
              className: "rounded-lg border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] px-3 py-1 text-[rgb(var(--nc-fg))] outline-none focus:ring-2 focus:ring-[rgb(var(--nc-accent-1)/0.5)]",
              value: theme,
              onChange: (event) => setTheme(event.target.value),
              children: THEME_NAMES.map((name) => /* @__PURE__ */ jsx2("option", { value: name, className: "text-slate-900", children: name }, name))
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-2", children: [
          showLabels && /* @__PURE__ */ jsx2("span", { className: "text-[rgb(var(--nc-fg-muted))]", children: "Mode" }),
          /* @__PURE__ */ jsx2(
            "select",
            {
              className: "rounded-lg border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] px-3 py-1 text-[rgb(var(--nc-fg))] outline-none focus:ring-2 focus:ring-[rgb(var(--nc-accent-1)/0.5)]",
              value: mode,
              onChange: (event) => setMode(event.target.value),
              children: MODE_OPTIONS.map((value) => /* @__PURE__ */ jsx2("option", { value, className: "text-slate-900", children: value }, value))
            }
          )
        ] })
      ]
    }
  );
}

export {
  ThemeProvider,
  useTheme,
  ThemeSwitcher
};
//# sourceMappingURL=chunk-M2EKVXB6.js.map