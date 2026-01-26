import * as React from "react";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";

export type CraftCardProps = React.HTMLAttributes<HTMLDivElement> & {
  tone?: ThemeName;
  elevated?: boolean;
};

export function CraftCard({ className, tone, elevated = true, ...props }: CraftCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur-xl",
        elevated && "shadow-[0_18px_40px_rgba(0,0,0,0.35)]",
        "transition-all duration-300",
        className
      )}
      data-nc-theme={tone}
      {...props}
    />
  );
}
