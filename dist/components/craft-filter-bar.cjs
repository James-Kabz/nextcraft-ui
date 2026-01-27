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
var craft_filter_bar_exports = {};
__export(craft_filter_bar_exports, {
  CraftFilterBar: () => CraftFilterBar
});
module.exports = __toCommonJS(craft_filter_bar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_cn = require("../utils/cn");
var import_craft_input = require("../components/craft-input");
function CraftFilterBar({
  title,
  description,
  searchValue,
  onSearchChange,
  searchPlaceholder = "Search...",
  actions,
  filters,
  tone,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      className: (0, import_cn.cn)(
        "rounded-3xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] p-4 text-[rgb(var(--nc-fg))] shadow-[0_12px_36px_rgba(0,0,0,0.2)] backdrop-blur-2xl",
        className
      ),
      "data-nc-theme": tone,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-wrap items-center justify-between gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
            title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "text-lg font-semibold", children: title }),
            description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: description })
          ] }),
          actions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex items-center gap-3", children: actions })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mt-4 grid gap-4 md:grid-cols-[minmax(0,1fr)_auto]", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_craft_input.CraftInput,
            {
              type: "search",
              placeholder: searchPlaceholder,
              value: searchValue != null ? searchValue : "",
              onChange: (event) => onSearchChange == null ? void 0 : onSearchChange(event.target.value),
              tone
            }
          ),
          filters && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex flex-wrap items-center gap-3", children: filters })
        ] })
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CraftFilterBar
});
//# sourceMappingURL=craft-filter-bar.cjs.map