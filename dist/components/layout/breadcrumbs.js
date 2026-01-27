import { jsx, jsxs } from "react/jsx-runtime";
import { cn } from "@/utils/cn";
function Breadcrumbs({ className, items, ...props }) {
  return /* @__PURE__ */ jsx("nav", { className: cn("flex items-center text-sm text-[rgb(var(--nc-fg-muted))]", className), ...props, children: items.map((item, index) => {
    const content = item.href ? /* @__PURE__ */ jsx("a", { href: item.href, className: "transition hover:text-[rgb(var(--nc-fg))]", children: item.label }) : /* @__PURE__ */ jsx("span", { className: "text-[rgb(var(--nc-fg))]", children: item.label });
    return /* @__PURE__ */ jsxs("span", { className: "flex items-center", children: [
      content,
      index < items.length - 1 && /* @__PURE__ */ jsx("span", { className: "mx-2 text-[rgb(var(--nc-fg-soft))]", children: "/" })
    ] }, `${item.label}-${index}`);
  }) });
}
export {
  Breadcrumbs
};
//# sourceMappingURL=breadcrumbs.js.map