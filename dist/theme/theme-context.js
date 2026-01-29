"use client";
import { jsx } from "react/jsx-runtime";
import * as React from "react";
const THEME_NAMES = [
  "aurora",
  "ember",
  "ocean",
  "midnight",
  "cosmic"
];
const ThemeContext = React.createContext(null);
const DEFAULT_THEME_KEY = "nextcraft-theme";
const DEFAULT_MODE_KEY = "nextcraft-mode";
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
export {
  THEME_NAMES,
  ThemeProvider,
  useTheme
};
//# sourceMappingURL=theme-context.js.map