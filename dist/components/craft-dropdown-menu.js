"use client";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../utils/cn";
import { CraftPopover } from "../components/craft-popover";
function CraftDropdownMenu({
  trigger,
  items = [],
  content,
  open,
  defaultOpen = false,
  onOpenChange,
  align = "end",
  tone,
  className,
  menuClassName
}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
  const isControlled = typeof open === "boolean";
  const isOpen = isControlled ? open : uncontrolledOpen;
  const setOpen = React.useCallback(
    (next) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange == null ? void 0 : onOpenChange(next);
    },
    [isControlled, onOpenChange]
  );
  const menuContent = content != null ? content : items.length ? /* @__PURE__ */ jsx("div", { className: cn("space-y-1", menuClassName), role: "menu", children: items.map((item, index) => {
    var _a;
    const key = (_a = item.id) != null ? _a : `${index}-${String(item.label)}`;
    const itemClasses = cn(
      "flex w-full items-start gap-3 rounded-xl px-3 py-2 text-left text-sm transition",
      item.disabled ? "cursor-not-allowed text-[rgb(var(--nc-fg-soft))] opacity-60" : "text-[rgb(var(--nc-fg))] hover:bg-[rgb(var(--nc-surface)/0.12)]"
    );
    const contentNode = /* @__PURE__ */ jsxs(Fragment, { children: [
      item.icon && /* @__PURE__ */ jsx("span", { className: "mt-0.5", children: item.icon }),
      /* @__PURE__ */ jsxs("span", { className: "flex-1", children: [
        /* @__PURE__ */ jsx("span", { className: "block font-medium", children: item.label }),
        item.description && /* @__PURE__ */ jsx("span", { className: "block text-xs text-[rgb(var(--nc-fg-muted))]", children: item.description })
      ] })
    ] });
    if (item.href) {
      return /* @__PURE__ */ jsx(
        "a",
        {
          href: item.href,
          className: itemClasses,
          role: "menuitem",
          onClick: () => {
            var _a2;
            if (item.disabled) return;
            (_a2 = item.onSelect) == null ? void 0 : _a2.call(item);
            setOpen(false);
          },
          children: contentNode
        },
        key
      );
    }
    return /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        className: itemClasses,
        role: "menuitem",
        onClick: () => {
          var _a2;
          if (item.disabled) return;
          (_a2 = item.onSelect) == null ? void 0 : _a2.call(item);
          setOpen(false);
        },
        children: contentNode
      },
      key
    );
  }) }) : null;
  return /* @__PURE__ */ jsx(
    CraftPopover,
    {
      trigger,
      content: menuContent,
      open: isOpen,
      onOpenChange: setOpen,
      align,
      tone,
      className
    }
  );
}
export {
  CraftDropdownMenu
};
//# sourceMappingURL=craft-dropdown-menu.js.map