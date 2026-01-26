import * as React from "react";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";

export type CraftNumberInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  tone?: ThemeName;
};

export const CraftNumberInput = React.forwardRef<
  HTMLInputElement,
  CraftNumberInputProps
>(({ className, tone, ...props }, ref) => {
  return (
    <div className="relative w-full" data-nc-theme={tone}>
      <input
        ref={ref}
        type="number"
        className={cn(
          "w-full rounded-2xl border-2 bg-[rgb(var(--nc-surface)/0.08)] text-[rgb(var(--nc-fg))] backdrop-blur-xl",
          "shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)]",
          "focus:outline-none focus:ring-4",
          "transition-all duration-300",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "border-[rgb(var(--nc-border)/0.35)]",
          "focus:border-[rgb(var(--nc-accent-1)/0.8)] focus:ring-[rgb(var(--nc-accent-1)/0.3)]",
          "px-5 py-3 text-base",
          className
        )}
        {...props}
      />
    </div>
  );
});

CraftNumberInput.displayName = "CraftNumberInput";
