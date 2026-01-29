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
var craft_tabs_exports = {};
__export(craft_tabs_exports, {
  CraftTabs: () => CraftTabs
});
module.exports = __toCommonJS(craft_tabs_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"), 1);
var import_cn = require("../utils/cn");
function CraftTabs({
  value,
  defaultValue,
  onValueChange,
  tone,
  tabs,
  panels,
  className
}) {
  var _a, _b;
  const fallback = (_b = (_a = tabs[0]) == null ? void 0 : _a.value) != null ? _b : "";
  const [uncontrolledValue, setUncontrolledValue] = React.useState(
    defaultValue != null ? defaultValue : fallback
  );
  const isControlled = value !== void 0;
  const activeValue = isControlled ? value : uncontrolledValue;
  const setValue = React.useCallback(
    (next) => {
      if (!isControlled) setUncontrolledValue(next);
      onValueChange == null ? void 0 : onValueChange(next);
    },
    [isControlled, onValueChange]
  );
  const onKeyDown = (event) => {
    if (!tabs.length) return;
    const currentIndex = tabs.findIndex((tab) => tab.value === activeValue);
    if (event.key === "ArrowRight") {
      event.preventDefault();
      const next = tabs[(currentIndex + 1) % tabs.length];
      setValue(next.value);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      const next = tabs[(currentIndex - 1 + tabs.length) % tabs.length];
      setValue(next.value);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: (0, import_cn.cn)("space-y-4", className), "data-nc-theme": tone, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        className: "inline-flex flex-wrap items-center gap-2 rounded-full border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.08)] p-2",
        role: "tablist",
        onKeyDown,
        children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "button",
          {
            role: "tab",
            "aria-selected": activeValue === tab.value,
            onClick: () => setValue(tab.value),
            className: (0, import_cn.cn)(
              "rounded-full px-4 py-2 text-sm font-semibold transition-all",
              activeValue === tab.value ? "bg-[rgb(var(--nc-accent-1)/0.65)] text-white shadow-[0_7px_5px_rgb(var(--nc-accent-1)/0.35)]" : "text-[rgb(var(--nc-fg-muted))] hover:text-[rgb(var(--nc-fg))]"
            ),
            children: tab.label
          },
          tab.value
        ))
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "rounded-2xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.08)] p-4 text-[rgb(var(--nc-fg))]", children: panels[activeValue] })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CraftTabs
});
//# sourceMappingURL=craft-tabs.cjs.map