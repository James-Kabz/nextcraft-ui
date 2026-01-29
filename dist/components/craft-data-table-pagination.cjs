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
var craft_data_table_pagination_exports = {};
__export(craft_data_table_pagination_exports, {
  CraftDataTablePagination: () => CraftDataTablePagination
});
module.exports = __toCommonJS(craft_data_table_pagination_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_cn = require("../utils/cn");
var import_craft_pagination = require("../components/craft-pagination");
const paddingClasses = {
  compact: "px-4 py-3",
  normal: "px-6 py-4",
  comfortable: "px-8 py-5"
};
const variantClasses = {
  default: "border-t border-[rgb(var(--nc-border)/0.35)] bg-[rgb(var(--nc-surface)/0.08)]",
  minimal: "border-t border-[rgb(var(--nc-border)/0.2)] bg-transparent"
};
function CraftDataTablePagination({
  currentPage,
  totalPages,
  total,
  pageSize,
  selectable,
  selectedCount = 0,
  showPagination = true,
  loading = false,
  disabled = false,
  onPageChange,
  onPageSizeChange,
  variant = "default",
  padding = "normal",
  tone,
  className,
  footer
}) {
  if (!showPagination && !footer) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      className: (0, import_cn.cn)(
        "flex flex-wrap items-center justify-between gap-4",
        paddingClasses[padding],
        variantClasses[variant],
        className
      ),
      "data-nc-theme": tone,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-wrap items-center gap-3 text-xs text-[rgb(var(--nc-fg-muted))]", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
            "Page ",
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-[rgb(var(--nc-fg))]", children: currentPage + 1 }),
            " of ",
            totalPages
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
            total,
            " rows"
          ] }),
          selectable ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
            selectedCount,
            " selected"
          ] }) : null,
          loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-[rgb(var(--nc-fg))]", children: "Loading..." }) : null
        ] }),
        footer,
        showPagination && onPageChange ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_craft_pagination.CraftPagination,
          {
            pageIndex: currentPage,
            pageCount: totalPages,
            onPageChange,
            pageSize,
            onPageSizeChange,
            canPrevious: currentPage > 0 && !disabled,
            canNext: currentPage < totalPages - 1 && !disabled,
            tone,
            className: disabled ? "opacity-60" : void 0
          }
        ) : null
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CraftDataTablePagination
});
//# sourceMappingURL=craft-data-table-pagination.cjs.map