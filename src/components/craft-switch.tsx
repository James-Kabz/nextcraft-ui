import * as React from "react";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";

export type CraftSwitchProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  tone?: ThemeName;
  label?: React.ReactNode;
};

export const CraftSwitch = React.forwardRef<HTMLInputElement, CraftSwitchProps>(
  ({ className, tone, label, ...props }, ref) => {
    return (
      <label
        className={cn(
          "inline-flex items-center gap-3 text-sm text-[rgb(var(--nc-fg))]",
          props.disabled ? "opacity-60" : "cursor-pointer",
          className
        )}
        data-nc-theme={tone}
      >
        <input ref={ref} type="checkbox" className="peer sr-only" {...props} />
        <span
          className={cn(
            "relative h-6 w-11 rounded-full border-2 border-[rgb(var(--nc-border)/0.35)] bg-[rgb(var(--nc-surface)/0.08)]",
            "transition-all duration-200",
            "peer-focus-visible:ring-2 peer-focus-visible:ring-[rgb(var(--nc-accent-1)/0.5)]",
            "peer-checked:border-[rgb(var(--nc-accent-1)/0.6)] peer-checked:bg-[rgb(var(--nc-accent-1)/0.25)]"
          )}
        >
          <span
            className={cn(
              "absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-[rgb(var(--nc-surface-muted)/0.9)]",
              "transition-all duration-200",
              "peer-checked:translate-x-5 peer-checked:bg-[rgb(var(--nc-surface-muted))]"
            )}
          />
        </span>
        {label && <span>{label}</span>}
      </label>
    );
  }
);

CraftSwitch.displayName = "CraftSwitch";
