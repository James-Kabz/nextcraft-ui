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
var craft_data_table_header_exports = {};
__export(craft_data_table_header_exports, {
  CraftDataTableHeader: () => CraftDataTableHeader
});
module.exports = __toCommonJS(craft_data_table_header_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_cn = require("../utils/cn");
const paddingClasses = {
  compact: "px-4 py-3",
  normal: "px-6 py-4",
  comfortable: "px-8 py-5"
};
const variantClasses = {
  default: "border-b border-[rgb(var(--nc-border)/0.35)] bg-[rgb(var(--nc-surface)/0.12)]",
  minimal: "border-b border-[rgb(var(--nc-border)/0.25)] bg-transparent"
};
function CraftDataTableHeader({
  title,
  description,
  actions,
  filters,
  tone,
  variant = "default",
  padding = "normal",
  className
}) {
  if (!title && !description && !actions && !filters) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      className: (0, import_cn.cn)(
        "flex flex-wrap items-start justify-between gap-4",
        paddingClasses[padding],
        variantClasses[variant],
        className
      ),
      "data-nc-theme": tone,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "space-y-1", children: [
          title ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "text-lg font-semibold", children: title }) : null,
          description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: description }) : null
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-wrap items-center gap-3", children: [
          filters,
          actions
        ] })
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CraftDataTableHeader
});
//# sourceMappingURL=craft-data-table-header.cjs.map