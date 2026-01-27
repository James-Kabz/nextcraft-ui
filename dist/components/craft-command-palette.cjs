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
var craft_command_palette_exports = {};
__export(craft_command_palette_exports, {
  CraftCommandPalette: () => CraftCommandPalette
});
module.exports = __toCommonJS(craft_command_palette_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"), 1);
var import_cn = require("../utils/cn");
var import_craft_input = require("../components/craft-input");
var import_craft_modal = require("../components/craft-modal");
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_craft_modal.CraftModal,
    {
      open: isOpen,
      onOpenChange: setOpen,
      trigger,
      title,
      tone,
      className: (0, import_cn.cn)("max-w-xl", className),
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_craft_input.CraftInput,
          {
            type: "search",
            placeholder,
            value: query,
            onChange: (event) => setQuery(event.target.value)
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "space-y-2", children: [
          filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rounded-2xl border border-[rgb(var(--nc-border)/0.35)] bg-[rgb(var(--nc-surface)/0.12)] p-4 text-sm text-[rgb(var(--nc-fg-muted))]", children: emptyText }),
          filtered.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
              className: (0, import_cn.cn)(
                "flex w-full items-start gap-3 rounded-2xl border border-[rgb(var(--nc-border)/0.35)] bg-[rgb(var(--nc-surface)/0.08)] px-4 py-3 text-left transition",
                item.disabled ? "cursor-not-allowed opacity-60" : "hover:bg-[rgb(var(--nc-surface)/0.16)]"
              ),
              children: [
                item.icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1", children: item.icon }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block text-sm font-semibold", children: item.label }),
                  item.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block text-xs text-[rgb(var(--nc-fg-muted))]", children: item.description })
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CraftCommandPalette
});
//# sourceMappingURL=craft-command-palette.cjs.map