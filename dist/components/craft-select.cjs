"use strict";
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
var craft_select_exports = {};
__export(craft_select_exports, {
  CraftSelect: () => CraftSelect
});
module.exports = __toCommonJS(craft_select_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"), 1);
var import_cn = require("../utils/cn");
const CraftSelect = React.forwardRef(
  ({ className, tone, children, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "relative w-full", "data-nc-theme": tone, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "select",
        {
          ref,
          className: (0, import_cn.cn)(
            "w-full appearance-none rounded-2xl border-2 bg-[rgb(var(--nc-surface)/0.08)] text-[rgb(var(--nc-fg))] backdrop-blur-xl",
            "shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)]",
            "focus:outline-none focus:ring-4",
            "transition-all duration-300",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "border-[rgb(var(--nc-border)/0.35)]",
            "focus:border-[rgb(var(--nc-accent-1)/0.8)] focus:ring-[rgb(var(--nc-accent-1)/0.3)]",
            "px-5 py-3 pr-10 text-base",
            className
          ),
          ...props,
          children
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "svg",
        {
          className: "pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[rgb(var(--nc-fg-soft))]",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          "aria-hidden": "true",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "path",
            {
              fillRule: "evenodd",
              d: "M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.7a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z",
              clipRule: "evenodd"
            }
          )
        }
      )
    ] });
  }
);
CraftSelect.displayName = "CraftSelect";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CraftSelect
});
//# sourceMappingURL=craft-select.cjs.map