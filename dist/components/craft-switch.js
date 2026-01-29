import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../utils/cn";
const CraftSwitch = React.forwardRef(
  ({ className, tone, label, ...props }, ref) => {
    return /* @__PURE__ */ jsxs(
      "label",
      {
        className: cn(
          "inline-flex items-center gap-3 text-sm text-[rgb(var(--nc-fg))]",
          props.disabled ? "opacity-60" : "cursor-pointer",
          className
        ),
        "data-nc-theme": tone,
        children: [
          /* @__PURE__ */ jsx("input", { ref, type: "checkbox", className: "peer sr-only", ...props }),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: cn(
                "relative h-6 w-11 rounded-full border-2 border-[rgb(var(--nc-border)/0.35)] bg-[rgb(var(--nc-surface)/0.08)]",
                "before:absolute before:left-0.5 before:top-0.5 before:h-4 before:w-4 before:rounded-full before:bg-[rgb(var(--nc-fg)/0.92)] before:shadow-[0_1px_2px_rgba(0,0,0,0.4)]",
                "before:transition-all before:duration-200 before:content-['']",
                "transition-all duration-200",
                "peer-focus-visible:ring-2 peer-focus-visible:ring-[rgb(var(--nc-accent-1)/0.5)]",
                "peer-checked:border-[rgb(var(--nc-accent-1)/0.6)] peer-checked:bg-[rgb(var(--nc-accent-1)/0.25)]",
                "peer-checked:before:translate-x-5 peer-checked:before:bg-[rgb(var(--nc-fg))]"
              )
            }
          ),
          label && /* @__PURE__ */ jsx("span", { children: label })
        ]
      }
    );
  }
);
CraftSwitch.displayName = "CraftSwitch";
export {
  CraftSwitch
};
//# sourceMappingURL=craft-switch.js.map