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
var app_shell_exports = {};
__export(app_shell_exports, {
  AppShell: () => AppShell
});
module.exports = __toCommonJS(app_shell_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_cn = require("../../utils/cn");
function AppShell({ className, sidebar, topNav, children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      className: (0, import_cn.cn)(
        "grid min-h-screen grid-cols-1 gap-6 bg-background p-6 lg:grid-cols-[260px_1fr]",
        className
      ),
      ...props,
      children: [
        sidebar && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full lg:sticky lg:top-6 lg:self-start lg:max-h-[calc(100vh-3rem)] lg:overflow-y-auto", children: sidebar }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-col gap-6", children: [
          topNav && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "lg:sticky lg:top-6 lg:z-20", children: topNav }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { className: "flex-1", children })
        ] })
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppShell
});
//# sourceMappingURL=app-shell.cjs.map