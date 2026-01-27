import { jsx, jsxs } from "react/jsx-runtime";
import { cn } from "@/utils/cn";
import { CraftButton } from "@/components/craft-button";
function CraftErrorState({
  title = "Something went wrong",
  description = "Try again or check your connection.",
  actionLabel = "Retry",
  onAction,
  action,
  tone,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "rounded-3xl border border-[rgb(var(--nc-border)/0.35)] bg-[rgb(var(--nc-surface)/0.12)] p-6 text-[rgb(var(--nc-fg))] shadow-[0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl",
        className
      ),
      "data-nc-theme": tone,
      ...props,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold", children: title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: description })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-4", children: action != null ? action : onAction && /* @__PURE__ */ jsx(CraftButton, { size: "sm", onClick: onAction, children: actionLabel }) })
      ]
    }
  );
}
export {
  CraftErrorState
};
//# sourceMappingURL=craft-error-state.js.map