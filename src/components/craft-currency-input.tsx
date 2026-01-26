import * as React from "react";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";

export type CraftCurrencyInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  tone?: ThemeName;
  currencySymbol?: string;
};

export const CraftCurrencyInput = React.forwardRef<
  HTMLInputElement,
  CraftCurrencyInputProps
>(({ className, tone, currencySymbol = "$", ...props }, ref) => {
  return (
    <div className="relative w-full" data-nc-theme={tone}>
      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[rgb(var(--nc-fg-soft))]">
        {currencySymbol}
      </span>
      <input
        ref={ref}
        type="text"
        inputMode="decimal"
        className={cn(
          "w-full rounded-2xl border-2 bg-[rgb(var(--nc-surface)/0.08)] text-[rgb(var(--nc-fg))] backdrop-blur-xl",
          "shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)]",
          "focus:outline-none focus:ring-4",
          "transition-all duration-300",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "border-[rgb(var(--nc-border)/0.35)]",
          "focus:border-[rgb(var(--nc-accent-1)/0.8)] focus:ring-[rgb(var(--nc-accent-1)/0.3)]",
          "placeholder:text-[rgb(var(--nc-fg-soft))]",
          "px-5 py-3 pl-9 text-base",
          className
        )}
        {...props}
      />
    </div>
  );
});

CraftCurrencyInput.displayName = "CraftCurrencyInput";
