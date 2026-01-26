"use client";

import * as React from "react";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";

export type CraftTabsProps = {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  tone?: ThemeName;
  tabs: Array<{ value: string; label: React.ReactNode }>
  panels: Record<string, React.ReactNode>;
  className?: string;
};

export function CraftTabs({
  value,
  defaultValue,
  onValueChange,
  tone,
  tabs,
  panels,
  className,
}: CraftTabsProps) {
  const fallback = tabs[0]?.value ?? "";
  const [uncontrolledValue, setUncontrolledValue] = React.useState(
    defaultValue ?? fallback
  );
  const isControlled = value !== undefined;
  const activeValue = isControlled ? value : uncontrolledValue;

  const setValue = React.useCallback(
    (next: string) => {
      if (!isControlled) setUncontrolledValue(next);
      onValueChange?.(next);
    },
    [isControlled, onValueChange]
  );

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!tabs.length) return;
    const currentIndex = tabs.findIndex((tab) => tab.value === activeValue);
    if (event.key === "ArrowRight") {
      event.preventDefault();
      const next = tabs[(currentIndex + 1) % tabs.length];
      setValue(next.value);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      const next = tabs[(currentIndex - 1 + tabs.length) % tabs.length];
      setValue(next.value);
    }
  };

  return (
    <div className={cn("space-y-4", className)} data-nc-theme={tone}>
      <div
        className="inline-flex flex-wrap items-center gap-2 rounded-full border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.08)] p-2"
        role="tablist"
        onKeyDown={onKeyDown}
      >
        {tabs.map((tab) => (
          <button
            key={tab.value}
            role="tab"
            aria-selected={activeValue === tab.value}
            onClick={() => setValue(tab.value)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition-all",
              activeValue === tab.value
                ? "bg-[rgb(var(--nc-accent-1)/0.25)] text-white shadow-[0_10px_20px_rgb(var(--nc-accent-1)/0.35)]"
                : "text-[rgb(var(--nc-fg-muted))] hover:text-[rgb(var(--nc-fg))]"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="rounded-2xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.08)] p-4 text-[rgb(var(--nc-fg))]">
        {panels[activeValue]}
      </div>
    </div>
  );
}
