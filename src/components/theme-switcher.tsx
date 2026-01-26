"use client";

import * as React from "react";

import { cn } from "@/utils/cn";
import { THEME_NAMES, type ThemeMode, type ThemeName, useTheme } from "@/theme/theme-context";

const MODE_OPTIONS: ThemeMode[] = ["system", "light", "dark"];

export type ThemeSwitcherProps = React.HTMLAttributes<HTMLDivElement> & {
  showLabels?: boolean;
};

export function ThemeSwitcher({ className, showLabels = true, ...props }: ThemeSwitcherProps) {
  const { theme, mode, setTheme, setMode } = useTheme();

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
        className
      )}
      {...props}
    >
      <label className="flex items-center gap-2">
        {showLabels && <span className="text-white/70">Theme</span>}
        <select
          className="rounded-lg border border-white/10 bg-white/10 px-3 py-1 text-white outline-none focus:ring-2 focus:ring-[rgb(var(--nc-accent-1)/0.5)]"
          value={theme}
          onChange={(event) => setTheme(event.target.value as ThemeName)}
        >
          {THEME_NAMES.map((name) => (
            <option key={name} value={name} className="text-slate-900">
              {name}
            </option>
          ))}
        </select>
      </label>
      <label className="flex items-center gap-2">
        {showLabels && <span className="text-white/70">Mode</span>}
        <select
          className="rounded-lg border border-white/10 bg-white/10 px-3 py-1 text-white outline-none focus:ring-2 focus:ring-[rgb(var(--nc-accent-1)/0.5)]"
          value={mode}
          onChange={(event) => setMode(event.target.value as ThemeMode)}
        >
          {MODE_OPTIONS.map((value) => (
            <option key={value} value={value} className="text-slate-900">
              {value}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
