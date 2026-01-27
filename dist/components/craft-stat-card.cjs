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
var craft_stat_card_exports = {};
__export(craft_stat_card_exports, {
  CraftStatCard: () => CraftStatCard
});
module.exports = __toCommonJS(craft_stat_card_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_cn = require("@/utils/cn");
var import_craft_card = require("@/components/craft-card");
const trendClasses = {
  up: "text-emerald-300",
  down: "text-rose-300",
  neutral: "text-[rgb(var(--nc-fg-muted))]"
};
function CraftStatCard({
  label,
  value,
  delta,
  trend = "neutral",
  icon,
  footer,
  tone,
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_craft_card.CraftCard,
    {
      className: (0, import_cn.cn)("space-y-3", className),
      tone,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: label }),
          icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-[rgb(var(--nc-fg-soft))]", children: icon })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-3xl font-semibold", children: value }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between text-xs", children: [
          delta && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: trendClasses[trend], children: delta }),
          footer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-[rgb(var(--nc-fg-muted))]", children: footer })
        ] })
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CraftStatCard
});
//# sourceMappingURL=craft-stat-card.cjs.map