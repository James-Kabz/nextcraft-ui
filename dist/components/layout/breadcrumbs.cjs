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
var breadcrumbs_exports = {};
__export(breadcrumbs_exports, {
  Breadcrumbs: () => Breadcrumbs
});
module.exports = __toCommonJS(breadcrumbs_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_cn = require("@/utils/cn");
function Breadcrumbs({ className, items, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", { className: (0, import_cn.cn)("flex items-center text-sm text-[rgb(var(--nc-fg-muted))]", className), ...props, children: items.map((item, index) => {
    const content = item.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: item.href, className: "transition hover:text-[rgb(var(--nc-fg))]", children: item.label }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-[rgb(var(--nc-fg))]", children: item.label });
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "flex items-center", children: [
      content,
      index < items.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mx-2 text-[rgb(var(--nc-fg-soft))]", children: "/" })
    ] }, `${item.label}-${index}`);
  }) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Breadcrumbs
});
//# sourceMappingURL=breadcrumbs.cjs.map