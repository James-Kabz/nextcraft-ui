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
var craft_textarea_exports = {};
__export(craft_textarea_exports, {
  CraftTextarea: () => CraftTextarea
});
module.exports = __toCommonJS(craft_textarea_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"), 1);
var import_cn = require("../utils/cn");
const CraftTextarea = React.forwardRef(
  ({ className, tone, rows = 4, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "relative w-full", "data-nc-theme": tone, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "textarea",
      {
        ref,
        rows,
        className: (0, import_cn.cn)(
          "w-full rounded-2xl border-2 bg-[rgb(var(--nc-surface)/0.08)] text-[rgb(var(--nc-fg))] backdrop-blur-xl",
          "shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)]",
          "focus:outline-none focus:ring-4",
          "transition-all duration-300",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "border-[rgb(var(--nc-border)/0.35)]",
          "focus:border-[rgb(var(--nc-accent-1)/0.8)] focus:ring-[rgb(var(--nc-accent-1)/0.3)]",
          "placeholder:text-[rgb(var(--nc-fg-soft))]",
          "px-5 py-3 text-base",
          className
        ),
        style: {
          "--glow-color": "rgb(var(--nc-accent-1) / 0.5)"
        },
        ...props
      }
    ) });
  }
);
CraftTextarea.displayName = "CraftTextarea";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CraftTextarea
});
//# sourceMappingURL=craft-textarea.cjs.map