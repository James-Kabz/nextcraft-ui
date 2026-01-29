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
var craft_submit_button_exports = {};
__export(craft_submit_button_exports, {
  CraftSubmitButton: () => CraftSubmitButton
});
module.exports = __toCommonJS(craft_submit_button_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react_hook_form = require("react-hook-form");
var import_cn = require("../utils/cn");
function CraftSubmitButton({
  className,
  tone,
  loading,
  loadingLabel = "Submitting...",
  disableWhenInvalid = true,
  disabled,
  children,
  ...props
}) {
  var _a, _b, _c, _d;
  const form = (0, import_react_hook_form.useFormContext)();
  const isSubmitting = (_b = loading != null ? loading : (_a = form == null ? void 0 : form.formState) == null ? void 0 : _a.isSubmitting) != null ? _b : false;
  const isValid = (_d = (_c = form == null ? void 0 : form.formState) == null ? void 0 : _c.isValid) != null ? _d : true;
  const isDisabled = disabled || isSubmitting || disableWhenInvalid && !isValid;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "button",
    {
      type: "submit",
      className: (0, import_cn.cn)(
        "relative inline-flex items-center justify-center gap-2 rounded-xl px-6 py-2 text-sm font-semibold",
        "bg-linear-to-br from-[rgb(var(--nc-accent-1))] via-[rgb(var(--nc-accent-2))] to-[rgb(var(--nc-accent-3))]",
        "text-white shadow-[0_12px_30px_rgb(var(--nc-accent-1)/0.35)]",
        "transition-all duration-200",
        "hover:shadow-[0_16px_36px_rgb(var(--nc-accent-1)/0.5)] hover:scale-[1.02] active:scale-[0.98]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--nc-accent-1)/0.6)]",
        "disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100",
        className
      ),
      "data-nc-theme": tone,
      disabled: isDisabled,
      ...props,
      children: [
        isSubmitting && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-flex h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isSubmitting ? loadingLabel : children })
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CraftSubmitButton
});
//# sourceMappingURL=craft-submit-button.cjs.map