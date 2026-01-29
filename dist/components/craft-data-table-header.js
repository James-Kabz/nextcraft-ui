"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { cn } from "../utils/cn";
const paddingClasses = {
  compact: "px-4 py-3",
  normal: "px-6 py-4",
  comfortable: "px-8 py-5"
};
const variantClasses = {
  default: "border-b border-[rgb(var(--nc-border)/0.35)] bg-[rgb(var(--nc-surface)/0.12)]",
  minimal: "border-b border-[rgb(var(--nc-border)/0.25)] bg-transparent"
};
function CraftDataTableHeader({
  title,
  description,
  actions,
  filters,
  tone,
  variant = "default",
  padding = "normal",
  className
}) {
  if (!title && !description && !actions && !filters) return null;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "flex flex-wrap items-start justify-between gap-4",
        paddingClasses[padding],
        variantClasses[variant],
        className
      ),
      "data-nc-theme": tone,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          title ? /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold", children: title }) : null,
          description ? /* @__PURE__ */ jsx("p", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: description }) : null
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
          filters,
          actions
        ] })
      ]
    }
  );
}
export {
  CraftDataTableHeader
};
//# sourceMappingURL=craft-data-table-header.js.map