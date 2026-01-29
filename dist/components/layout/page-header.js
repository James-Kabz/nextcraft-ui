import { jsx, jsxs } from "react/jsx-runtime";
import { cn } from "../../utils/cn";
function PageHeader({
  className,
  title,
  description,
  actions,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn("flex flex-wrap items-start justify-between gap-6", className),
      ...props,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-[rgb(var(--nc-fg))]", children: title }),
          description && /* @__PURE__ */ jsx("p", { className: "text-[rgb(var(--nc-fg-muted))]", children: description })
        ] }),
        actions && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: actions })
      ]
    }
  );
}
export {
  PageHeader
};
//# sourceMappingURL=page-header.js.map