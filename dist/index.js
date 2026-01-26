// src/components/craft-button.tsx
import { jsx } from "react/jsx-runtime";
var cn = (...classes) => classes.filter(Boolean).join(" ");
var sizeClasses = {
  sm: "h-9 px-4 text-xs",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base"
};
var variantClasses = {
  solid: "bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 hover:scale-[1.02] active:scale-[0.98]",
  ghost: "bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20",
  outline: "bg-transparent text-sky-400 border-2 border-sky-400/50 hover:border-sky-400 hover:bg-sky-400/10",
  gradient: "bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 text-white shadow-lg shadow-fuchsia-500/50 hover:shadow-xl hover:shadow-fuchsia-500/60 hover:scale-[1.02] active:scale-[0.98]"
};
function CraftButton({
  className,
  variant = "solid",
  size = "md",
  glow = true,
  disabled,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: cn(
        "relative inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
        sizeClasses[size],
        variantClasses[variant],
        glow && (variant === "solid" || variant === "gradient") ? "before:absolute before:-inset-1 before:rounded-xl before:bg-linear-to-r before:from-sky-400/20 before:via-blue-500/20 before:to-indigo-600/20 before:blur-xl before:-z-10 before:opacity-0 hover:before:opacity-100 before:transition-opacity" : "",
        className
      ),
      disabled,
      ...props
    }
  );
}

// src/utils/cn.ts
function cn2(...values) {
  return values.filter(Boolean).join(" ");
}

// src/components/glass-card.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var cardToneClasses = {
  aurora: "bg-gradient-to-br from-emerald-400/15 via-teal-400/10 to-cyan-400/15 border-emerald-300/30",
  ember: "bg-gradient-to-br from-amber-400/15 via-orange-400/10 to-rose-400/15 border-amber-300/30",
  ocean: "bg-gradient-to-br from-sky-400/15 via-blue-400/10 to-indigo-400/15 border-sky-300/30",
  midnight: "bg-gradient-to-br from-violet-400/15 via-purple-400/10 to-fuchsia-400/15 border-violet-300/30",
  cosmic: "bg-gradient-to-br from-pink-400/15 via-purple-400/10 to-indigo-400/15 border-pink-300/30"
};
var intensityClasses = {
  subtle: "backdrop-blur-md bg-opacity-50",
  medium: "backdrop-blur-xl bg-opacity-70",
  strong: "backdrop-blur-2xl bg-opacity-90"
};
function GlassCard({
  className,
  tone = "ocean",
  intensity = "medium",
  bordered = true,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx2(
    "div",
    {
      className: cn2(
        "relative overflow-hidden rounded-3xl p-6 text-white",
        "shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
        "transition-all duration-300",
        "hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]",
        intensityClasses[intensity],
        cardToneClasses[tone],
        bordered ? "border-2" : "border-0",
        "before:absolute before:inset-0 before:bg-linear-to-br before:from-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx2("div", { className: "relative z-10", children })
    }
  );
}

// src/components/craft-input.tsx
import * as React from "react";
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
var cn3 = (...classes) => classes.filter(Boolean).join(" ");
var inputToneClasses = {
  aurora: "border-emerald-400/30 focus:border-emerald-400/80 focus:ring-emerald-400/30 placeholder:text-emerald-200/40",
  ember: "border-amber-400/30 focus:border-amber-400/80 focus:ring-amber-400/30 placeholder:text-amber-200/40",
  ocean: "border-sky-400/30 focus:border-sky-400/80 focus:ring-sky-400/30 placeholder:text-sky-200/40",
  midnight: "border-violet-400/30 focus:border-violet-400/80 focus:ring-violet-400/30 placeholder:text-violet-200/40"
};
var inputSizeClasses = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-base",
  lg: "h-14 px-6 text-lg"
};
var CraftInput = React.forwardRef(
  ({ className, tone = "ocean", inputSize = "md", glow = true, icon, ...props }, ref) => {
    return /* @__PURE__ */ jsxs("div", { className: "relative w-full", children: [
      icon && /* @__PURE__ */ jsx3("div", { className: "absolute left-4 top-1/2 -translate-y-1/2 text-white/50", children: icon }),
      /* @__PURE__ */ jsx3(
        "input",
        {
          ref,
          className: cn3(
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
          ),
          style: {
            "--glow-color": tone === "aurora" ? "rgba(52,211,153,0.5)" : tone === "ember" ? "rgba(251,191,36,0.5)" : tone === "midnight" ? "rgba(167,139,250,0.5)" : "rgba(56,189,248,0.5)"
          },
          ...props
        }
      )
    ] });
  }
);
CraftInput.displayName = "CraftInput";
export {
  CraftButton,
  CraftInput,
  GlassCard
};
//# sourceMappingURL=index.js.map