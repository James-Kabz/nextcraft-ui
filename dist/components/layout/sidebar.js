import { jsx, jsxs } from "react/jsx-runtime";
import { CraftIcon } from "../../components/craft-icon";
import { cn } from "../../utils/cn";
function Sidebar({ className, title, items, footer, ...props }) {
  return /* @__PURE__ */ jsxs(
    "aside",
    {
      className: cn(
        "flex h-full w-full flex-col gap-6 rounded-3xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.08)] p-6 text-[rgb(var(--nc-fg))] backdrop-blur-xl",
        className
      ),
      ...props,
      children: [
        title && /* @__PURE__ */ jsx("div", { className: "text-lg font-semibold", children: title }),
        /* @__PURE__ */ jsx("nav", { className: "flex flex-col gap-2", children: items.map((item, index) => {
          var _a;
          return /* @__PURE__ */ jsxs(
            "a",
            {
              href: (_a = item.href) != null ? _a : "#",
              className: cn(
                "flex items-center gap-3 rounded-2xl px-3 py-2 text-sm transition",
                item.active ? "bg-[rgb(var(--nc-accent-1)/0.25)] text-[rgb(var(--nc-fg))]" : "text-[rgb(var(--nc-fg-muted))] hover:bg-[rgb(var(--nc-surface)/0.12)] hover:text-[rgb(var(--nc-fg))]"
              ),
              children: [
                typeof item.icon === "string" ? /* @__PURE__ */ jsx(CraftIcon, { name: item.icon, size: "lg" }) : item.icon,
                /* @__PURE__ */ jsx("span", { children: item.label })
              ]
            },
            `${item.label}-${index}`
          );
        }) }),
        footer && /* @__PURE__ */ jsx("div", { className: "mt-auto pt-4", children: footer })
      ]
    }
  );
}
export {
  Sidebar
};
//# sourceMappingURL=sidebar.js.map