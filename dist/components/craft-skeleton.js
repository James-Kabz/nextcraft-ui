import { jsx } from "react/jsx-runtime";
import { cn } from "../utils/cn";
function CraftSkeleton({ className, tone, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "relative overflow-hidden rounded-2xl bg-[rgb(var(--nc-surface)/0.12)]",
        "after:absolute after:inset-0 after:-translate-x-full after:bg-linear-to-r after:from-transparent after:via-white/20 after:to-transparent",
        "after:animate-[shimmer_1.6s_infinite]",
        className
      ),
      "data-nc-theme": tone,
      ...props
    }
  );
}
export {
  CraftSkeleton
};
//# sourceMappingURL=craft-skeleton.js.map