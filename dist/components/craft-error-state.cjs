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
var craft_error_state_exports = {};
__export(craft_error_state_exports, {
  CraftErrorState: () => CraftErrorState
});
module.exports = __toCommonJS(craft_error_state_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_cn = require("@/utils/cn");
var import_craft_button = require("@/components/craft-button");
function CraftErrorState({
  title = "Something went wrong",
  description = "Try again or check your connection.",
  actionLabel = "Retry",
  onAction,
  action,
  tone,
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      className: (0, import_cn.cn)(
        "rounded-3xl border border-[rgb(var(--nc-border)/0.35)] bg-[rgb(var(--nc-surface)/0.12)] p-6 text-[rgb(var(--nc-fg))] shadow-[0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl",
        className
      ),
      "data-nc-theme": tone,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "text-lg font-semibold", children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: description })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-4", children: action != null ? action : onAction && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_craft_button.CraftButton, { size: "sm", onClick: onAction, children: actionLabel }) })
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CraftErrorState
});
//# sourceMappingURL=craft-error-state.cjs.map