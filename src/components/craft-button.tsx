import * as React from "react";

const cn = (...classes: (string | boolean | undefined)[]) => 
  classes.filter(Boolean).join(" ");

type CraftButtonVariant = "solid" | "ghost" | "outline" | "gradient";
type CraftButtonSize = "sm" | "md" | "lg";

export type CraftButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: CraftButtonVariant;
  size?: CraftButtonSize;
  glow?: boolean;
};

const sizeClasses: Record<CraftButtonSize, string> = {
  sm: "h-9 px-4 text-xs",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base",
};

const variantClasses: Record<CraftButtonVariant, string> = {
  solid:
    "bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 hover:scale-[1.02] active:scale-[0.98]",
  ghost:
    "bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20",
  outline:
    "bg-transparent text-sky-400 border-2 border-sky-400/50 hover:border-sky-400 hover:bg-sky-400/10",
  gradient:
    "bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 text-white shadow-lg shadow-fuchsia-500/50 hover:shadow-xl hover:shadow-fuchsia-500/60 hover:scale-[1.02] active:scale-[0.98]",
};

export function CraftButton({
  className,
  variant = "solid",
  size = "md",
  glow = true,
  disabled,
  ...props
}: CraftButtonProps) {
  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
        sizeClasses[size],
        variantClasses[variant],
        glow && (variant === "solid" || variant === "gradient")
          ? "before:absolute before:-inset-1 before:rounded-xl before:bg-linear-to-r before:from-sky-400/20 before:via-blue-500/20 before:to-indigo-600/20 before:blur-xl before:-z-10 before:opacity-0 hover:before:opacity-100 before:transition-opacity"
          : "",
        className
      )}
      disabled={disabled}
      {...props}
    />
  );
}