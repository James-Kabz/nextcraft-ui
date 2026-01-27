import { jsx, jsxs } from "react/jsx-runtime";
import { cn } from "@/utils/cn";
const variantClasses = {
  info: "border-[rgb(var(--nc-accent-1)/0.45)] bg-[rgb(var(--nc-accent-1)/0.12)]",
  success: "border-[rgb(var(--nc-accent-2)/0.45)] bg-[rgb(var(--nc-accent-2)/0.12)]",
  warning: "border-[rgb(var(--nc-accent-3)/0.45)] bg-[rgb(var(--nc-accent-3)/0.12)]",
  error: "border-[rgb(var(--nc-accent-3)/0.65)] bg-[rgb(var(--nc-accent-3)/0.18)]"
};
function CraftAlert({
  title,
  description,
  variant = "info",
  icon,
  actions,
  tone,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "rounded-2xl border p-4 text-[rgb(var(--nc-fg))] backdrop-blur-xl",
        variantClasses[variant],
        className
      ),
      "data-nc-theme": tone,
      ...props,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
          icon && /* @__PURE__ */ jsx("div", { className: "mt-1 text-[rgb(var(--nc-fg))]", children: icon }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            title && /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold", children: title }),
            description && /* @__PURE__ */ jsx("p", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: description })
          ] })
        ] }),
        actions && /* @__PURE__ */ jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: actions })
      ]
    }
  );
}
export {
  CraftAlert
};
//# sourceMappingURL=craft-alert.js.map