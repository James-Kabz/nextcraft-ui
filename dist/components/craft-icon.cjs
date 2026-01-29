"use strict";
"use client";
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
var craft_icon_exports = {};
__export(craft_icon_exports, {
  CraftIcon: () => CraftIcon,
  CraftIconProvider: () => CraftIconProvider
});
module.exports = __toCommonJS(craft_icon_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"), 1);
var import_fontawesome_svg_core = require("@fortawesome/fontawesome-svg-core");
var import_free_solid_svg_icons = require("@fortawesome/free-solid-svg-icons");
var import_free_regular_svg_icons = require("@fortawesome/free-regular-svg-icons");
var import_free_brands_svg_icons = require("@fortawesome/free-brands-svg-icons");
var import_react_fontawesome = require("@fortawesome/react-fontawesome");
var import_cn = require("../utils/cn");
const CraftIconContext = React.createContext(null);
function CraftIconProvider({ icons, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CraftIconContext.Provider, { value: icons, children });
}
import_fontawesome_svg_core.library.add(import_free_solid_svg_icons.fas, import_free_regular_svg_icons.far, import_free_brands_svg_icons.fab);
function CraftIcon({
  name,
  prefix = "fas",
  size = "md",
  color,
  className,
  "aria-label": ariaLabel,
  icons
}) {
  const contextRegistry = React.useContext(CraftIconContext);
  const registry = icons != null ? icons : contextRegistry;
  const icon = registry == null ? void 0 : registry[name];
  if (!icon) {
    const faSizeMap = {
      xs: "xs",
      sm: "sm",
      md: "lg",
      lg: "xl",
      xl: "2x",
      xxl: "3x"
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_react_fontawesome.FontAwesomeIcon,
      {
        icon: [prefix, name],
        size: faSizeMap[size],
        className: (0, import_cn.cn)(color ? `text-${color}` : "text-current", "inline-block", className),
        "aria-hidden": ariaLabel ? void 0 : true,
        "aria-label": ariaLabel,
        role: ariaLabel ? "img" : void 0
      }
    );
  }
  if (React.isValidElement(icon)) {
    return React.cloneElement(icon, {
      className: (0, import_cn.cn)(icon.props.className, className),
      "aria-hidden": ariaLabel ? void 0 : true,
      "aria-label": ariaLabel
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className, "aria-label": ariaLabel, children: icon });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CraftIcon,
  CraftIconProvider
});
//# sourceMappingURL=craft-icon.cjs.map