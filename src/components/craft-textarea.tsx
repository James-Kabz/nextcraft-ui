import * as React from "react";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";

export type CraftTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  tone?: ThemeName;
};

export const CraftTextarea = React.forwardRef<HTMLTextAreaElement, CraftTextareaProps>(
  ({ className, tone, rows = 4, ...props }, ref) => {
    return (
      <div className="relative w-full" data-nc-theme={tone}>
        <textarea
          ref={ref}
          rows={rows}
          className={cn(
            "w-full rounded-2xl border-2 bg-[rgb(var(--nc-surface)/0.08)] text-[rgb(var(--nc-fg))] backdrop-blur-xl",
            "shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)]",
            "focus:outline-none focus:ring-4",
            "transition-all duration-300",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "border-[rgb(var(--nc-border)/0.35)]",
            "focus:border-[rgb(var(--nc-accent-1)/0.8)] focus:ring-[rgb(var(--nc-accent-1)/0.3)]",
            "placeholder:text-[rgb(var(--nc-fg-soft))]",
            "px-5 py-3 text-base",
            className
          )}
          style={{
            "--glow-color": "rgb(var(--nc-accent-1) / 0.5)",
          } as React.CSSProperties}
          {...props}
        />
      </div>
    );
  }
);

CraftTextarea.displayName = "CraftTextarea";
