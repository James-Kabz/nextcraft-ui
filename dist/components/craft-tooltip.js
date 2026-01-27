"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../utils/cn";
function CraftTooltip({ content, tone, children, side = "top" }) {
  const [open, setOpen] = React.useState(false);
  return /* @__PURE__ */ jsxs(
    "span",
    {
      className: "relative inline-flex",
      onMouseEnter: () => setOpen(true),
      onMouseLeave: () => setOpen(false),
      onFocus: () => setOpen(true),
      onBlur: () => setOpen(false),
      children: [
        children,
        /* @__PURE__ */ jsx(
          "span",
          {
            className: cn(
              "pointer-events-none absolute z-20 whitespace-nowrap rounded-lg border border-white/10 bg-black/80 px-3 py-2 text-xs text-white shadow-lg transition-all",
              "backdrop-blur-xl",
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1",
              side === "top" && "bottom-full left-1/2 -translate-x-1/2 -translate-y-2",
              side === "bottom" && "top-full left-1/2 -translate-x-1/2 translate-y-2",
              side === "left" && "right-full top-1/2 -translate-y-1/2 -translate-x-2",
              side === "right" && "left-full top-1/2 -translate-y-1/2 translate-x-2"
            ),
            "data-nc-theme": tone,
            role: "tooltip",
            children: content
          }
        )
      ]
    }
  );
}
export {
  CraftTooltip
};
//# sourceMappingURL=craft-tooltip.js.map