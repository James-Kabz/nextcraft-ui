import * as React from "react";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";

type CraftButtonVariant = "solid" | "ghost" | "outline" | "gradient";
type CraftButtonSize = "sm" | "md" | "lg";

export type CraftButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: CraftButtonVariant;
  size?: CraftButtonSize;
  glow?: boolean;
  tone?: ThemeName;
};

const sizeClasses: Record<CraftButtonSize, string> = {
  sm: "h-9 px-4 text-xs",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base",
};

const variantClasses: Record<CraftButtonVariant, string> = {
  solid:
    "bg-gradient-to-br from-[rgb(var(--nc-accent-1))] via-[rgb(var(--nc-accent-2))] to-[rgb(var(--nc-accent-3))] text-white shadow-[0_12px_30px_rgb(var(--nc-accent-1)/0.45)] hover:shadow-[0_16px_36px_rgb(var(--nc-accent-1)/0.6)] hover:scale-[1.02] active:scale-[0.98]",
  ghost:
    "bg-[color:rgb(var(--nc-surface)/0.12)] text-[rgb(var(--nc-fg))] hover:bg-[color:rgb(var(--nc-surface)/0.18)] backdrop-blur-sm border border-[rgb(var(--nc-border)/0.35)] hover:border-[color:rgb(var(--nc-border)/0.5)]",
  outline:
    "bg-transparent text-[color:rgb(var(--nc-accent-1))] border-2 border-[color:rgb(var(--nc-accent-1)/0.5)] hover:border-[color:rgb(var(--nc-accent-1))] hover:bg-[color:rgb(var(--nc-accent-1)/0.1)]",
  gradient:
    "bg-gradient-to-r from-[rgb(var(--nc-accent-1))] via-[rgb(var(--nc-accent-2))] to-[rgb(var(--nc-accent-3))] text-white shadow-[0_12px_30px_rgb(var(--nc-accent-2)/0.45)] hover:shadow-[0_16px_36px_rgb(var(--nc-accent-2)/0.6)] hover:scale-[1.02] active:scale-[0.98]",
};

export function CraftButton({
  className,
  variant = "solid",
  size = "md",
  glow = true,
  tone,
  disabled,
  ...props
}: CraftButtonProps) {
  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--nc-accent-1)/0.6)] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
        sizeClasses[size],
        variantClasses[variant],
        glow && (variant === "solid" || variant === "gradient")
          ? "before:absolute before:-inset-1 before:rounded-xl before:bg-linear-to-r before:from-[rgb(var(--nc-accent-1)/0.2)] before:via-[rgb(var(--nc-accent-2)/0.2)] before:to-[rgb(var(--nc-accent-3)/0.2)] before:blur-xl before:-z-10 before:opacity-0 hover:before:opacity-100 before:transition-opacity"
          : "",
        className
      )}
      data-nc-theme={tone}
      disabled={disabled}
      {...props}
    />
  );
}
