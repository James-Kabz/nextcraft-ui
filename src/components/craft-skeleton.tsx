import * as React from "react";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";

export type CraftSkeletonProps = React.HTMLAttributes<HTMLDivElement> & {
  tone?: ThemeName;
};

export function CraftSkeleton({ className, tone, ...props }: CraftSkeletonProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-white/10",
        "after:absolute after:inset-0 after:translate-x-[-100%] after:bg-linear-to-r after:from-transparent after:via-white/20 after:to-transparent",
        "after:animate-[shimmer_1.6s_infinite]",
        className
      )}
      data-nc-theme={tone}
      {...props}
    />
  );
}
