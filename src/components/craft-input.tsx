import * as React from "react";

import { cn } from "../utils/cn";

type CraftInputTone = "aurora" | "ember" | "ocean";
type CraftInputSize = "sm" | "md" | "lg";

export type CraftInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  tone?: CraftInputTone;
  size?: CraftInputSize;
  glow?: boolean;
};

const toneClasses: Record<CraftInputTone, string> = {
  aurora:
    "border-emerald-200/30 focus:border-emerald-200/60 focus:ring-emerald-300/40",
  ember:
    "border-amber-200/30 focus:border-amber-200/60 focus:ring-amber-300/40",
  ocean: "border-sky-200/30 focus:border-sky-200/60 focus:ring-sky-300/40",
};

const sizeClasses: Record<CraftInputSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-4 text-base",
};

export const CraftInput = React.forwardRef<HTMLInputElement, CraftInputProps>(
  (
    { className, tone = "aurora", size = "md", glow = true, ...props },
    ref
  ) => {
    return (
      <input
        ref={ref}
        className={cn(
          "w-full rounded-full border bg-white/5 text-white placeholder:text-white/40",
          "shadow-[inset_0_0_0_1px_rgba(15,23,42,0.05)]",
          "focus:outline-none focus:ring-2",
          "transition",
          sizeClasses[size],
          toneClasses[tone],
          glow ? "shadow-[0_20px_50px_-35px_rgba(56,189,248,0.7)]" : "",
          className
        )}
        {...props}
      />
    );
  }
);

CraftInput.displayName = "CraftInput";
