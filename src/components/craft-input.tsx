
import * as React from "react";

const cn = (...classes: (string | boolean | undefined)[]) => 
  classes.filter(Boolean).join(" ");

// ============================================================================
// CRAFT INPUT
// ============================================================================

type CraftInputTone = "aurora" | "ember" | "ocean" | "midnight";
type CraftInputSize = "sm" | "md" | "lg";

export type CraftInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
> & {
  tone?: CraftInputTone;
  inputSize?: CraftInputSize;
  glow?: boolean;
  icon?: React.ReactNode;
};

const inputToneClasses: Record<CraftInputTone, string> = {
  aurora:
    "border-emerald-400/30 focus:border-emerald-400/80 focus:ring-emerald-400/30 placeholder:text-emerald-200/40",
  ember:
    "border-amber-400/30 focus:border-amber-400/80 focus:ring-amber-400/30 placeholder:text-amber-200/40",
  ocean: 
    "border-sky-400/30 focus:border-sky-400/80 focus:ring-sky-400/30 placeholder:text-sky-200/40",
  midnight:
    "border-violet-400/30 focus:border-violet-400/80 focus:ring-violet-400/30 placeholder:text-violet-200/40",
};

const inputSizeClasses: Record<CraftInputSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-base",
  lg: "h-14 px-6 text-lg",
};

export const CraftInput = React.forwardRef<HTMLInputElement, CraftInputProps>(
  (
    { className, tone = "ocean", inputSize = "md", glow = true, icon, ...props },
    ref
  ) => {
    return (
      <div className="relative w-full">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50">
            {icon}
          </div>
        )}
        <input
          ref={ref}
          className={cn(
            "w-full rounded-2xl border-2 bg-white/5 text-white backdrop-blur-xl",
            "shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)]",
            "focus:outline-none focus:ring-4",
            "transition-all duration-300",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            inputSizeClasses[inputSize],
            inputToneClasses[tone],
            glow ? "focus:shadow-[0_0_30px_-5px_var(--glow-color)]" : "",
            icon ? "pl-12" : "",
            className
          )}
          style={{
            "--glow-color": tone === "aurora" ? "rgba(52,211,153,0.5)" : 
                            tone === "ember" ? "rgba(251,191,36,0.5)" : 
                            tone === "midnight" ? "rgba(167,139,250,0.5)" :
                            "rgba(56,189,248,0.5)"
          } as React.CSSProperties}
          {...props}
        />
      </div>
    );
  }
);

CraftInput.displayName = "CraftInput";