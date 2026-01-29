import { jsx, jsxs } from "react/jsx-runtime";
import { cn } from "../utils/cn";
import { CraftCard } from "../components/craft-card";
const trendClasses = {
  up: "text-emerald-300",
  down: "text-rose-300",
  neutral: "text-[rgb(var(--nc-fg-muted))]"
};
function CraftStatCard({
  label,
  value,
  delta,
  trend = "neutral",
  icon,
  footer,
  tone,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    CraftCard,
    {
      className: cn("space-y-3", className),
      tone,
      ...props,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: label }),
          icon && /* @__PURE__ */ jsx("div", { className: "text-[rgb(var(--nc-fg-soft))]", children: icon })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-3xl font-semibold", children: value }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-xs", children: [
          delta && /* @__PURE__ */ jsx("span", { className: trendClasses[trend], children: delta }),
          footer && /* @__PURE__ */ jsx("span", { className: "text-[rgb(var(--nc-fg-muted))]", children: footer })
        ] })
      ]
    }
  );
}
export {
  CraftStatCard
};
//# sourceMappingURL=craft-stat-card.js.map