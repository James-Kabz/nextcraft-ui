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
var craft_switch_exports = {};
__export(craft_switch_exports, {
  CraftSwitch: () => CraftSwitch
});
module.exports = __toCommonJS(craft_switch_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"), 1);
var import_cn = require("../utils/cn");
const CraftSwitch = React.forwardRef(
  ({ className, tone, label, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "label",
      {
        className: (0, import_cn.cn)(
          "inline-flex items-center gap-3 text-sm text-[rgb(var(--nc-fg))]",
          props.disabled ? "opacity-60" : "cursor-pointer",
          className
        ),
        "data-nc-theme": tone,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { ref, type: "checkbox", className: "peer sr-only", ...props }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "span",
            {
              className: (0, import_cn.cn)(
                "relative h-6 w-11 rounded-full border-2 border-[rgb(var(--nc-border)/0.35)] bg-[rgb(var(--nc-surface)/0.08)]",
                "transition-all duration-200",
                "peer-focus-visible:ring-2 peer-focus-visible:ring-[rgb(var(--nc-accent-1)/0.5)]",
                "peer-checked:border-[rgb(var(--nc-accent-1)/0.6)] peer-checked:bg-[rgb(var(--nc-accent-1)/0.25)]"
              ),
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "span",
                {
                  className: (0, import_cn.cn)(
                    "absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-[rgb(var(--nc-surface-muted)/0.9)]",
                    "transition-all duration-200",
                    "peer-checked:translate-x-5 peer-checked:bg-[rgb(var(--nc-surface-muted))]"
                  )
                }
              )
            }
          ),
          label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })
        ]
      }
    );
  }
);
CraftSwitch.displayName = "CraftSwitch";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CraftSwitch
});
//# sourceMappingURL=craft-switch.cjs.map