import { jsx, jsxs } from "react/jsx-runtime";
import { cn } from "@/utils/cn";
const sizeClasses = {
  sm: "h-4 w-4 border-2",
  md: "h-6 w-6 border-2",
  lg: "h-8 w-8 border-[3px]"
};
function CraftLoadingState({
  label = "Loading...",
  size = "md",
  tone,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn("flex items-center gap-3 text-[rgb(var(--nc-fg))]", className),
      "data-nc-theme": tone,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            className: cn(
              "inline-block animate-spin rounded-full border-[rgb(var(--nc-accent-1)/0.25)] border-t-[rgb(var(--nc-accent-1))]",
              sizeClasses[size]
            ),
            "aria-hidden": "true"
          }
        ),
        label && /* @__PURE__ */ jsx("span", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: label })
      ]
    }
  );
}
export {
  CraftLoadingState
};
//# sourceMappingURL=craft-loading-state.js.map