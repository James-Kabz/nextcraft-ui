import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';

type ThemeName = "aurora" | "ember" | "ocean" | "midnight" | "cosmic";
type ThemeMode = "light" | "dark" | "system";
declare const THEME_NAMES: ThemeName[];
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

export { THEME_NAMES, type ThemeMode, type ThemeName, ThemeProvider, useTheme };
