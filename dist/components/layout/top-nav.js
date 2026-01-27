import { jsx, jsxs } from "react/jsx-runtime";
import { cn } from "../../utils/cn";
function TopNav({ className, title, actions, breadcrumb, ...props }) {
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: cn(
        "flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.08)] px-6 py-4 text-[rgb(var(--nc-fg))] backdrop-blur-xl",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          breadcrumb,
          title && /* @__PURE__ */ jsx("div", { className: "text-xl font-semibold", children: title })
        ] }),
        actions && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: actions })
      ]
    }
  );
}
export {
  TopNav
};
//# sourceMappingURL=top-nav.js.map