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
var sidebar_exports = {};
__export(sidebar_exports, {
  Sidebar: () => Sidebar
});
module.exports = __toCommonJS(sidebar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_cn = require("@/utils/cn");
function Sidebar({ className, title, items, footer, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "aside",
    {
      className: (0, import_cn.cn)(
        "flex h-full w-full flex-col gap-6 rounded-3xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.08)] p-6 text-[rgb(var(--nc-fg))] backdrop-blur-xl",
        className
      ),
      ...props,
      children: [
        title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-lg font-semibold", children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", { className: "flex flex-col gap-2", children: items.map((item, index) => {
          var _a;
          return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "a",
            {
              href: (_a = item.href) != null ? _a : "#",
              className: (0, import_cn.cn)(
                "flex items-center gap-3 rounded-2xl px-3 py-2 text-sm transition",
                item.active ? "bg-[rgb(var(--nc-accent-1)/0.25)] text-[rgb(var(--nc-fg))]" : "text-[rgb(var(--nc-fg-muted))] hover:bg-[rgb(var(--nc-surface)/0.12)] hover:text-[rgb(var(--nc-fg))]"
              ),
              children: [
                item.icon,
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label })
              ]
            },
            `${item.label}-${index}`
          );
        }) }),
        footer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-auto pt-4", children: footer })
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Sidebar
});
//# sourceMappingURL=sidebar.cjs.map