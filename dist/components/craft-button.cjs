"use strict";
"use client";
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
var craft_button_exports = {};
__export(craft_button_exports, {
  CraftButton: () => CraftButton
});
module.exports = __toCommonJS(craft_button_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_cn = require("../utils/cn");
var import_craft_icon = require("../components/craft-icon");
const sizeClasses = {
  sm: "h-9 px-4 text-xs",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base"
};
const variantClasses = {
  solid: "bg-gradient-to-br from-[rgb(var(--nc-accent-1))] via-[rgb(var(--nc-accent-2))] to-[rgb(var(--nc-accent-3))] text-white shadow-[0_12px_30px_rgb(var(--nc-accent-1)/0.45)] hover:shadow-[0_16px_36px_rgb(var(--nc-accent-1)/0.6)] hover:scale-[1.02] active:scale-[0.98]",
  ghost: "bg-[color:rgb(var(--nc-surface)/0.12)] text-[rgb(var(--nc-fg))] hover:bg-[color:rgb(var(--nc-surface)/0.18)] backdrop-blur-sm border border-[rgb(var(--nc-border)/0.35)] hover:border-[color:rgb(var(--nc-border)/0.5)]",
  outline: "bg-transparent text-[color:rgb(var(--nc-accent-1))] border-2 border-[color:rgb(var(--nc-accent-1)/0.5)] hover:border-[color:rgb(var(--nc-accent-1))] hover:bg-[color:rgb(var(--nc-accent-1)/0.1)]",
  gradient: "bg-gradient-to-r from-[rgb(var(--nc-accent-1))] via-[rgb(var(--nc-accent-2))] to-[rgb(var(--nc-accent-3))] text-white shadow-[0_12px_30px_rgb(var(--nc-accent-2)/0.45)] hover:shadow-[0_16px_36px_rgb(var(--nc-accent-2)/0.6)] hover:scale-[1.02] active:scale-[0.98]"
};
const iconSizeClasses = {
  sm: "h-4 w-4",
  md: "h-4 w-4",
  lg: "h-5 w-5"
};
const spinnerSizeClasses = {
  sm: "h-4 w-4",
  md: "h-4 w-4",
  lg: "h-5 w-5"
};
function CraftButton({
  className,
  variant = "solid",
  size = "md",
  tone,
  disabled,
  glow = true,
  loading = false,
  loadingText,
  icon,
  children,
  ...props
}) {
  const isDisabled = disabled || loading;
  const iconClassName = iconSizeClasses[size];
  const spinnerClassName = spinnerSizeClasses[size];
  const iconNode = typeof icon === "string" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_craft_icon.CraftIcon, { name: icon, className: iconClassName }) : icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: (0, import_cn.cn)("inline-flex", iconClassName), children: icon }) : null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "button",
    {
      className: (0, import_cn.cn)(
        "relative inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--nc-accent-1)/0.6)] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
        sizeClasses[size],
        variantClasses[variant],
        glow && (variant === "solid" || variant === "gradient") ? "before:absolute before:-inset-1 before:rounded-xl before:bg-linear-to-r before:from-[rgb(var(--nc-accent-1)/0.2)] before:via-[rgb(var(--nc-accent-2)/0.2)] before:to-[rgb(var(--nc-accent-3)/0.2)] before:blur-xl before:-z-10 before:opacity-0 hover:before:opacity-100 before:transition-opacity" : "",
        className
      ),
      "data-nc-theme": tone,
      disabled: isDisabled,
      "aria-disabled": isDisabled,
      "aria-busy": loading,
      ...props,
      children: [
        loading && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "svg",
          {
            className: (0, import_cn.cn)("mr-2 animate-spin text-current", spinnerClassName),
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "circle",
                {
                  className: "opacity-25",
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: "currentColor",
                  strokeWidth: "4"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "path",
                {
                  className: "opacity-75",
                  fill: "none",
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeWidth: "4",
                  d: "M4 12a8 8 0 018-8"
                }
              )
            ]
          }
        ),
        !loading && iconNode,
        loading && loadingText ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: loadingText }) : children
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CraftButton
});
//# sourceMappingURL=craft-button.cjs.map