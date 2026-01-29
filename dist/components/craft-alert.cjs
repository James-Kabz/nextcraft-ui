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
var craft_alert_exports = {};
__export(craft_alert_exports, {
  CraftAlert: () => CraftAlert
});
module.exports = __toCommonJS(craft_alert_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_cn = require("../utils/cn");
const variantClasses = {
  info: "border-[rgb(var(--nc-accent-1)/0.45)] bg-[rgb(var(--nc-accent-1)/0.12)]",
  success: "border-[rgb(var(--nc-accent-2)/0.45)] bg-[rgb(var(--nc-accent-2)/0.12)]",
  warning: "border-[rgb(var(--nc-accent-3)/0.45)] bg-[rgb(var(--nc-accent-3)/0.12)]",
  error: "border-[rgb(var(--nc-accent-3)/0.65)] bg-[rgb(var(--nc-accent-3)/0.18)]"
};
function CraftAlert({
  title,
  description,
  variant = "info",
  icon,
  actions,
  tone,
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      className: (0, import_cn.cn)(
        "rounded-2xl border p-4 text-[rgb(var(--nc-fg))] backdrop-blur-xl",
        variantClasses[variant],
        className
      ),
      "data-nc-theme": tone,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-start gap-3", children: [
          icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-1 text-[rgb(var(--nc-fg))]", children: icon }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "space-y-1", children: [
            title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-sm font-semibold", children: title }),
            description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: description })
          ] })
        ] }),
        actions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-3 flex flex-wrap gap-2", children: actions })
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CraftAlert
});
//# sourceMappingURL=craft-alert.cjs.map