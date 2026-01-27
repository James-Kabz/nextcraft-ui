import * as React from "react";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";

type CraftLoadingSize = "sm" | "md" | "lg";

export type CraftLoadingStateProps = React.HTMLAttributes<HTMLDivElement> & {
  label?: React.ReactNode;
  size?: CraftLoadingSize;
  tone?: ThemeName;
};

const sizeClasses: Record<CraftLoadingSize, string> = {
  sm: "h-4 w-4 border-2",
  md: "h-6 w-6 border-2",
  lg: "h-8 w-8 border-[3px]",
};

export function CraftLoadingState({
  label = "Loading...",
  size = "md",
  tone,
  className,
  ...props
}: CraftLoadingStateProps) {
  return (
    <div
      className={cn("flex items-center gap-3 text-[rgb(var(--nc-fg))]", className)}
      data-nc-theme={tone}
      {...props}
    >
      <span
        className={cn(
          "inline-block animate-spin rounded-full border-[rgb(var(--nc-accent-1)/0.25)] border-t-[rgb(var(--nc-accent-1))]",
          sizeClasses[size]
        )}
        aria-hidden="true"
      />
      {label && <span className="text-sm text-[rgb(var(--nc-fg-muted))]">{label}</span>}
    </div>
  );
}
