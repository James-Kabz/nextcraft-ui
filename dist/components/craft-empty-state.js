import { jsx, jsxs } from "react/jsx-runtime";
import { cn } from "../utils/cn";
function CraftEmptyState({
  className,
  tone,
  title,
  description,
  icon,
  action,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "rounded-3xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.08)] p-8 text-center text-[rgb(var(--nc-fg))] backdrop-blur-xl",
        "shadow-[0_18px_40px_rgba(0,0,0,0.25)]",
        className
      ),
      "data-nc-theme": tone,
      ...props,
      children: [
        icon && /* @__PURE__ */ jsx("div", { className: "mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgb(var(--nc-accent-1)/0.2)] text-[rgb(var(--nc-accent-1))]", children: icon }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: title }),
        description && /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-[rgb(var(--nc-fg-muted))]", children: description }),
        action && /* @__PURE__ */ jsx("div", { className: "mt-6 flex justify-center", children: action })
      ]
    }
  );
}
export {
  CraftEmptyState
};
//# sourceMappingURL=craft-empty-state.js.map