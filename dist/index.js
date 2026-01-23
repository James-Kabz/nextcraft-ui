// src/utils/cn.ts
function cn(...values) {
  return values.filter(Boolean).join(" ");
}

// src/components/craft-button.tsx
import { jsx } from "react/jsx-runtime";
var sizeClasses = {
  sm: "h-9 px-3 text-xs",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-5 text-base"
};
var variantClasses = {
  solid: "bg-[radial-gradient(120%_120%_at_10%_10%,_#D4FF7B_0%,_#79F2C0_35%,_#0EA5E9_100%)] text-slate-950 shadow-[0_10px_30px_-12px_rgba(14,165,233,0.6)] hover:brightness-105",
  ghost: "bg-white/5 text-white hover:bg-white/10 border border-white/10",
  outline: "bg-transparent text-white border border-sky-300/40 hover:border-sky-200/60"
};
function CraftButton({
  className,
  variant = "solid",
  size = "md",
  glow = true,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: cn(
        "relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/80",
        sizeClasses[size],
        variantClasses[variant],
        glow && variant === "solid" ? "before:absolute before:-inset-0.5 before:rounded-full before:bg-sky-400/40 before:blur-lg before:-z-10" : "",
        className
      ),
      ...props
    }
  );
}

// src/components/glass-card.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var toneClasses = {
  aurora: "from-emerald-300/20 via-sky-300/10 to-indigo-400/20 border-emerald-200/20",
  ember: "from-amber-300/20 via-rose-300/10 to-fuchsia-400/20 border-amber-200/20",
  ocean: "from-sky-300/20 via-cyan-300/10 to-blue-400/20 border-sky-200/20"
};
function GlassCard({
  className,
  tone = "aurora",
  ...props
}) {
  return /* @__PURE__ */ jsx2(
    "div",
    {
      className: cn(
        "relative overflow-hidden rounded-2xl border bg-linear-to-br p-6 text-white shadow-[0_25px_70px_-45px_rgba(15,23,42,0.9)]",
        "backdrop-blur-xl",
        toneClasses[tone],
        className
      ),
      ...props
    }
  );
}

// src/components/craft-input.tsx
import * as React from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var toneClasses2 = {
  aurora: "border-emerald-200/30 focus:border-emerald-200/60 focus:ring-emerald-300/40",
  ember: "border-amber-200/30 focus:border-amber-200/60 focus:ring-amber-300/40",
  ocean: "border-sky-200/30 focus:border-sky-200/60 focus:ring-sky-300/40"
};
var sizeClasses2 = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-4 text-base"
};
var CraftInput = React.forwardRef(
  ({ className, tone = "aurora", inputSize = "md", glow = true, ...props }, ref) => {
    return /* @__PURE__ */ jsx3(
      "input",
      {
        ref,
        className: cn(
          "w-full rounded-full border bg-white/5 text-white placeholder:text-white/40",
          "shadow-[inset_0_0_0_1px_rgba(15,23,42,0.05)]",
          "focus:outline-none focus:ring-2",
          "transition",
          sizeClasses2[inputSize],
          toneClasses2[tone],
          glow ? "shadow-[0_20px_50px_-35px_rgba(56,189,248,0.7)]" : "",
          className
        ),
        ...props
      }
    );
  }
);
CraftInput.displayName = "CraftInput";
export {
  CraftButton,
  CraftInput,
  GlassCard
};
//# sourceMappingURL=index.js.map