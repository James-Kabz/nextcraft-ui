
import * as React from "react";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";

// ============================================================================
// CRAFT INPUT
// ============================================================================

type CraftInputSize = "sm" | "md" | "lg";

export type CraftInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
> & {
  tone?: ThemeName;
  inputSize?: CraftInputSize;
  glow?: boolean;
  icon?: React.ReactNode;
};

const inputSizeClasses: Record<CraftInputSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-base",
  lg: "h-14 px-6 text-lg",
};

export const CraftInput = React.forwardRef<HTMLInputElement, CraftInputProps>(
  (
    { className, tone, inputSize = "md", glow = true, icon, ...props },
    ref
  ) => {
    return (
      <div className="relative w-full" data-nc-theme={tone}>
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[rgb(var(--nc-fg-soft))]">
            {icon}
          </div>
        )}
        <input
          ref={ref}
          className={cn(
            "w-full rounded-2xl border-2 bg-[rgb(var(--nc-surface)/0.08)] text-[rgb(var(--nc-fg))] backdrop-blur-xl",
            "shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)]",
            "focus:outline-none focus:ring-4",
            "transition-all duration-300",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            inputSizeClasses[inputSize],
            "border-[rgb(var(--nc-border)/0.35)]",
            "focus:border-[rgb(var(--nc-accent-1)/0.8)] focus:ring-[rgb(var(--nc-accent-1)/0.3)]",
            "placeholder:text-[rgb(var(--nc-fg-soft))]",
            glow ? "focus:shadow-[0_0_30px_-5px_var(--glow-color)]" : "",
            icon ? "pl-12" : "",
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

CraftInput.displayName = "CraftInput";
