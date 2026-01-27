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
var theme_switcher_exports = {};
__export(theme_switcher_exports, {
  ThemeSwitcher: () => ThemeSwitcher
});
module.exports = __toCommonJS(theme_switcher_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_cn = require("../utils/cn");
var import_theme_context = require("@/theme/theme-context");
const MODE_OPTIONS = ["system", "light", "dark"];
function ThemeSwitcher({ className, showLabels = true, ...props }) {
  const { theme, mode, setTheme, setMode } = (0, import_theme_context.useTheme)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      className: (0, import_cn.cn)(
        "flex flex-wrap items-center gap-3 rounded-2xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.08)] px-4 py-3 text-sm text-[rgb(var(--nc-fg))] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: "flex items-center gap-2", children: [
          showLabels && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-[rgb(var(--nc-fg-muted))]", children: "Theme" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "select",
            {
              className: "rounded-lg border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] px-3 py-1 text-[rgb(var(--nc-fg))] outline-none focus:ring-2 focus:ring-[rgb(var(--nc-accent-1)/0.5)]",
              value: theme,
              onChange: (event) => setTheme(event.target.value),
              children: import_theme_context.THEME_NAMES.map((name) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: name, className: "text-slate-900", children: name }, name))
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: "flex items-center gap-2", children: [
          showLabels && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-[rgb(var(--nc-fg-muted))]", children: "Mode" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "select",
            {
              className: "rounded-lg border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] px-3 py-1 text-[rgb(var(--nc-fg))] outline-none focus:ring-2 focus:ring-[rgb(var(--nc-accent-1)/0.5)]",
              value: mode,
              onChange: (event) => setMode(event.target.value),
              children: MODE_OPTIONS.map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value, className: "text-slate-900", children: value }, value))
            }
          )
        ] })
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ThemeSwitcher
});
//# sourceMappingURL=theme-switcher.cjs.map