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
var craft_badge_exports = {};
__export(craft_badge_exports, {
  CraftBadge: () => CraftBadge
});
module.exports = __toCommonJS(craft_badge_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_cn = require("../utils/cn");
const variantClasses = {
  solid: "bg-[color:rgb(var(--nc-accent-1))] text-white shadow-[0_10px_20px_rgb(var(--nc-accent-1)/0.35)]",
  soft: "bg-[color:rgb(var(--nc-accent-1)/0.2)] text-[rgb(var(--nc-fg))]",
  outline: "border border-[color:rgb(var(--nc-accent-1)/0.6)] text-[rgb(var(--nc-fg))]"
};
function CraftBadge({
  className,
  variant = "soft",
  tone,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "span",
    {
      className: (0, import_cn.cn)(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        variantClasses[variant],
        className
      ),
      "data-nc-theme": tone,
      ...props
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CraftBadge
});
//# sourceMappingURL=craft-badge.cjs.map