import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';

type ThemeName = "aurora" | "ember" | "ocean" | "midnight" | "cosmic";
type ThemeMode = "light" | "dark" | "system";
type ThemeContextValue = {
    theme: ThemeName;
    mode: ThemeMode;
    setTheme: (theme: ThemeName) => void;
    setMode: (mode: ThemeMode) => void;
};
type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: ThemeName;
    defaultMode?: ThemeMode;
    storageKeyTheme?: string;
    storageKeyMode?: string;
};
declare function ThemeProvider({ children, defaultTheme, defaultMode, storageKeyTheme, storageKeyMode, }: ThemeProviderProps): react_jsx_runtime.JSX.Element;
declare function useTheme(): ThemeContextValue;

export { type ThemeMode as T, type ThemeName as a, ThemeProvider as b, useTheme as u };
