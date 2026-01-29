"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var craft_checkbox_exports = {};
__export(craft_checkbox_exports, {
  CraftCheckbox: () => CraftCheckbox
});
module.exports = __toCommonJS(craft_checkbox_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"), 1);
var import_cn = require("../utils/cn");
const CraftCheckbox = React.forwardRef(
  ({ className, tone, label, description, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "label",
      {
        className: (0, import_cn.cn)(
          "flex items-start gap-3 text-sm text-[rgb(var(--nc-fg))]",
          props.disabled ? "opacity-60" : "cursor-pointer",
          className
        ),
        "data-nc-theme": tone,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "relative mt-0.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "input",
              {
                ref,
                type: "checkbox",
                className: "peer sr-only",
                ...props
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "span",
              {
                className: (0, import_cn.cn)(
                  "flex h-5 w-5 items-center justify-center rounded-md border-2",
                  "border-[rgb(var(--nc-border)/0.45)] bg-[rgb(var(--nc-surface)/0.08)]",
                  "transition-all duration-200",
                  "peer-checked:border-[rgb(var(--nc-accent-1))]",
                  "peer-focus-visible:ring-2 peer-focus-visible:ring-[rgb(var(--nc-accent-1)/0.5)]"
                ),
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "svg",
                  {
                    className: "h-3 w-3 text-[rgb(var(--nc-accent-1))] opacity-0 transition-opacity peer-checked:opacity-100",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "path",
                      {
                        fillRule: "evenodd",
                        d: "M16.704 5.29a1 1 0 010 1.415l-7.2 7.2a1 1 0 01-1.415 0l-3.2-3.2a1 1 0 111.415-1.415l2.492 2.493 6.493-6.493a1 1 0 011.415 0z",
                        clipRule: "evenodd"
                      }
                    )
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "space-y-1", children: [
            label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block font-medium text-[rgb(var(--nc-fg))]", children: label }),
            description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block text-xs text-[rgb(var(--nc-fg-muted))]", children: description })
          ] })
        ]
      }
    );
  }
);
CraftCheckbox.displayName = "CraftCheckbox";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CraftCheckbox
});
//# sourceMappingURL=craft-checkbox.cjs.map