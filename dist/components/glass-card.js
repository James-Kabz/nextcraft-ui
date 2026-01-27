import { jsx } from "react/jsx-runtime";
import { cn } from "../utils/cn";
const intensityClasses = {
  subtle: "backdrop-blur-md bg-opacity-50",
  medium: "backdrop-blur-xl bg-opacity-70",
  strong: "backdrop-blur-2xl bg-opacity-90"
};
function GlassCard({
  className,
  tone,
  intensity = "medium",
  bordered = true,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "relative overflow-hidden rounded-3xl p-6 text-[rgb(var(--nc-fg))]",
        "shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
        "transition-all duration-300",
        "hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]",
        intensityClasses[intensity],
        "bg-linear-to-br from-[rgb(var(--nc-accent-1)/0.15)] via-[rgb(var(--nc-accent-2)/0.10)] to-[rgb(var(--nc-accent-3)/0.15)]",
        "border-[rgb(var(--nc-accent-1)/0.3)]",
        bordered ? "border-2" : "border-0",
        "before:absolute before:inset-0 before:bg-linear-to-br before:from-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        className
      ),
      "data-nc-theme": tone,
      ...props,
      children: /* @__PURE__ */ jsx("div", { className: "relative z-10", children })
    }
  );
}
export {
  GlassCard
};
//# sourceMappingURL=glass-card.js.map