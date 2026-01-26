"use client";

import * as React from "react";

export type ThemeName = "aurora" | "ember" | "ocean" | "midnight" | "cosmic";
export type ThemeMode = "light" | "dark" | "system";

export const THEME_NAMES: ThemeName[] = [
  "aurora",
  "ember",
  "ocean",
  "midnight",
  "cosmic",
];

type ThemeContextValue = {
  theme: ThemeName;
  mode: ThemeMode;
  setTheme: (theme: ThemeName) => void;
  setMode: (mode: ThemeMode) => void;
};

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: ThemeName;
  defaultMode?: ThemeMode;
  storageKeyTheme?: string;
  storageKeyMode?: string;
};

const DEFAULT_THEME_KEY = "nextcraft-theme";
const DEFAULT_MODE_KEY = "nextcraft-mode";

export function ThemeProvider({
  children,
  defaultTheme = "ocean",
  defaultMode = "system",
  storageKeyTheme = DEFAULT_THEME_KEY,
  storageKeyMode = DEFAULT_MODE_KEY,
}: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<ThemeName>(defaultTheme);
  const [mode, setMode] = React.useState<ThemeMode>(defaultMode);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const storedTheme = window.localStorage.getItem(storageKeyTheme) as ThemeName | null;
      const storedMode = window.localStorage.getItem(storageKeyMode) as ThemeMode | null;
      if (storedTheme) setTheme(storedTheme);
      if (storedMode) setMode(storedMode);
    } catch {
      // Ignore storage errors.
    }
  }, [storageKeyTheme, storageKeyMode]);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(storageKeyTheme, theme);
      window.localStorage.setItem(storageKeyMode, mode);
    } catch {
      // Ignore storage errors.
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

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
