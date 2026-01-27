import { jsx } from "react/jsx-runtime";
import { cn } from "../utils/cn";
const variantClasses = {
  solid: "bg-[color:rgb(var(--nc-accent-1))] text-white shadow-[0_10px_20px_rgb(var(--nc-accent-1)/0.35)]",
  soft: "bg-[color:rgb(var(--nc-accent-1)/0.2)] text-[rgb(var(--nc-fg))]",
  outline: "border border-[color:rgb(var(--nc-accent-1)/0.6)] text-[rgb(var(--nc-fg))]"
};
function CraftBadge({
  className,
  variant = "soft",
  tone,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        variantClasses[variant],
        className
      ),
      "data-nc-theme": tone,
      ...props
    }
  );
}
export {
  CraftBadge
};
//# sourceMappingURL=craft-badge.js.map