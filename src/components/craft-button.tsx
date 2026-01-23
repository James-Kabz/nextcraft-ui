import * as React from "react";

import { cn } from "../utils/cn";

type CraftButtonVariant = "solid" | "ghost" | "outline";
type CraftButtonSize = "sm" | "md" | "lg";

export type CraftButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: CraftButtonVariant;
  size?: CraftButtonSize;
  glow?: boolean;
};

const sizeClasses: Record<CraftButtonSize, string> = {
  sm: "h-9 px-3 text-xs",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-5 text-base",
};

const variantClasses: Record<CraftButtonVariant, string> = {
  solid:
    "bg-[radial-gradient(120%_120%_at_10%_10%,_#D4FF7B_0%,_#79F2C0_35%,_#0EA5E9_100%)] text-slate-950 shadow-[0_10px_30px_-12px_rgba(14,165,233,0.6)] hover:brightness-105",
  ghost:
    "bg-white/5 text-white hover:bg-white/10 border border-white/10",
  outline:
    "bg-transparent text-white border border-sky-300/40 hover:border-sky-200/60",
};

export function CraftButton({
  className,
  variant = "solid",
  size = "md",
  glow = true,
  ...props
}: CraftButtonProps) {
  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/80",
        sizeClasses[size],
        variantClasses[variant],
        glow && variant === "solid"
          ? "before:absolute before:-inset-0.5 before:rounded-full before:bg-sky-400/40 before:blur-lg before:-z-10"
          : "",
        className
      )}
      {...props}
    />
  );
}
