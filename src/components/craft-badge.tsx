import * as React from "react";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";

export type CraftBadgeVariant = "solid" | "soft" | "outline";

export type CraftBadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: CraftBadgeVariant;
  tone?: ThemeName;
};

const variantClasses: Record<CraftBadgeVariant, string> = {
  solid:
    "bg-[color:rgb(var(--nc-accent-1))] text-white shadow-[0_10px_20px_rgb(var(--nc-accent-1)/0.35)]",
  soft:
    "bg-[color:rgb(var(--nc-accent-1)/0.2)] text-[rgb(var(--nc-fg))]",
  outline:
    "border border-[color:rgb(var(--nc-accent-1)/0.6)] text-[rgb(var(--nc-fg))]",
};

export function CraftBadge({
  className,
  variant = "soft",
  tone,
  ...props
}: CraftBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        variantClasses[variant],
        className
      )}
      data-nc-theme={tone}
      {...props}
    />
  );
}
