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
      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/60">
        {currencySymbol}
      </span>
      <input
        ref={ref}
        type="text"
        inputMode="decimal"
        className={cn(
          "w-full rounded-2xl border-2 bg-white/5 text-white backdrop-blur-xl",
          "shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)]",
          "focus:outline-none focus:ring-4",
          "transition-all duration-300",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "border-[color:rgb(var(--nc-accent-1)/0.3)]",
          "focus:border-[color:rgb(var(--nc-accent-1)/0.8)] focus:ring-[color:rgb(var(--nc-accent-1)/0.3)]",
          "placeholder:text-[color:rgb(var(--nc-accent-soft)/0.4)]",
          "px-5 py-3 pl-9 text-base",
          className
        )}
        {...props}
      />
    </div>
  );
});

CraftCurrencyInput.displayName = "CraftCurrencyInput";
