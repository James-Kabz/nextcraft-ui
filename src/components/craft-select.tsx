import * as React from "react";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";

export type CraftSelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  tone?: ThemeName;
};

export const CraftSelect = React.forwardRef<HTMLSelectElement, CraftSelectProps>(
  ({ className, tone, children, ...props }, ref) => {
    return (
      <div className="relative w-full" data-nc-theme={tone}>
        <select
          ref={ref}
          className={cn(
            "w-full appearance-none rounded-2xl border-2 bg-white/5 text-white backdrop-blur-xl",
            "shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)]",
            "focus:outline-none focus:ring-4",
            "transition-all duration-300",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "border-[color:rgb(var(--nc-accent-1)/0.3)]",
            "focus:border-[color:rgb(var(--nc-accent-1)/0.8)] focus:ring-[color:rgb(var(--nc-accent-1)/0.3)]",
            "px-5 py-3 pr-10 text-base",
            className
          )}
          {...props}
        >
          {children}
        </select>
        <svg
          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.7a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    );
  }
);

CraftSelect.displayName = "CraftSelect";
