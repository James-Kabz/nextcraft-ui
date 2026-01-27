"use strict";
"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var craft_dropdown_menu_exports = {};
__export(craft_dropdown_menu_exports, {
  CraftDropdownMenu: () => CraftDropdownMenu
});
module.exports = __toCommonJS(craft_dropdown_menu_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"), 1);
var import_cn = require("../utils/cn");
var import_craft_popover = require("../components/craft-popover");
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
  const menuContent = content != null ? content : items.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (0, import_cn.cn)("space-y-1", menuClassName), role: "menu", children: items.map((item, index) => {
    var _a;
    const key = (_a = item.id) != null ? _a : `${index}-${String(item.label)}`;
    const itemClasses = (0, import_cn.cn)(
      "flex w-full items-start gap-3 rounded-xl px-3 py-2 text-left text-sm transition",
      item.disabled ? "cursor-not-allowed text-[rgb(var(--nc-fg-soft))] opacity-60" : "text-[rgb(var(--nc-fg))] hover:bg-[rgb(var(--nc-surface)/0.12)]"
    );
    const contentNode = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      item.icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-0.5", children: item.icon }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "flex-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block font-medium", children: item.label }),
        item.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block text-xs text-[rgb(var(--nc-fg-muted))]", children: item.description })
      ] })
    ] });
    if (item.href) {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_craft_popover.CraftPopover,
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CraftDropdownMenu
});
//# sourceMappingURL=craft-dropdown-menu.cjs.map