"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../utils/cn";
import { CraftInput } from "../components/craft-input";
import { CraftModal } from "../components/craft-modal";
function CraftCommandPalette({
  items,
  open,
  defaultOpen = false,
  onOpenChange,
  trigger,
  title = "Command Palette",
  placeholder = "Search commands...",
  emptyText = "No results found.",
  tone,
  className
}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
  const isControlled = typeof open === "boolean";
  const isOpen = isControlled ? open : uncontrolledOpen;
  const [query, setQuery] = React.useState("");
  const setOpen = React.useCallback(
    (next) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange == null ? void 0 : onOpenChange(next);
    },
    [isControlled, onOpenChange]
  );
  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((item) => {
      var _a, _b;
      const haystack = [
        item.label,
        (_a = item.description) != null ? _a : "",
        ...(_b = item.keywords) != null ? _b : []
      ].join(" ").toLowerCase();
      return haystack.includes(q);
    });
  }, [items, query]);
  React.useEffect(() => {
    if (!isOpen) setQuery("");
  }, [isOpen]);
  return /* @__PURE__ */ jsx(
    CraftModal,
    {
      open: isOpen,
      onOpenChange: setOpen,
      trigger,
      title,
      tone,
      className: cn("max-w-xl", className),
      children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx(
          CraftInput,
          {
            type: "search",
            placeholder,
            value: query,
            onChange: (event) => setQuery(event.target.value)
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          filtered.length === 0 && /* @__PURE__ */ jsx("div", { className: "rounded-2xl border border-[rgb(var(--nc-border)/0.35)] bg-[rgb(var(--nc-surface)/0.12)] p-4 text-sm text-[rgb(var(--nc-fg-muted))]", children: emptyText }),
          filtered.map((item) => /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              disabled: item.disabled,
              onClick: () => {
                var _a;
                if (item.disabled) return;
                (_a = item.onSelect) == null ? void 0 : _a.call(item);
                setOpen(false);
              },
              className: cn(
                "flex w-full items-start gap-3 rounded-2xl border border-[rgb(var(--nc-border)/0.35)] bg-[rgb(var(--nc-surface)/0.08)] px-4 py-3 text-left transition",
                item.disabled ? "cursor-not-allowed opacity-60" : "hover:bg-[rgb(var(--nc-surface)/0.16)]"
              ),
              children: [
                item.icon && /* @__PURE__ */ jsx("span", { className: "mt-1", children: item.icon }),
                /* @__PURE__ */ jsxs("span", { children: [
                  /* @__PURE__ */ jsx("span", { className: "block text-sm font-semibold", children: item.label }),
                  item.description && /* @__PURE__ */ jsx("span", { className: "block text-xs text-[rgb(var(--nc-fg-muted))]", children: item.description })
                ] })
              ]
            },
            item.id
          ))
        ] })
      ] })
    }
  );
}
export {
  CraftCommandPalette
};
//# sourceMappingURL=craft-command-palette.js.map