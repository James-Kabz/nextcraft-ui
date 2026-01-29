"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var craft_loading_state_exports = {};
__export(craft_loading_state_exports, {
  CraftLoadingState: () => CraftLoadingState
});
module.exports = __toCommonJS(craft_loading_state_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_cn = require("../utils/cn");
const sizeClasses = {
  sm: "h-4 w-4 border-2",
  md: "h-6 w-6 border-2",
  lg: "h-8 w-8 border-[3px]"
};
function CraftLoadingState({
  label = "Loading...",
  size = "md",
  tone,
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      className: (0, import_cn.cn)("flex items-center gap-3 text-[rgb(var(--nc-fg))]", className),
      "data-nc-theme": tone,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "span",
          {
            className: (0, import_cn.cn)(
              "inline-block animate-spin rounded-full border-[rgb(var(--nc-accent-1)/0.25)] border-t-[rgb(var(--nc-accent-1))]",
              sizeClasses[size]
            ),
            "aria-hidden": "true"
          }
        ),
        label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: label })
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CraftLoadingState
});
//# sourceMappingURL=craft-loading-state.cjs.map