"use client";
import { jsx } from "react/jsx-runtime";
import * as React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "../utils/cn";
const CraftIconContext = React.createContext(null);
function CraftIconProvider({ icons, children }) {
  return /* @__PURE__ */ jsx(CraftIconContext.Provider, { value: icons, children });
}
library.add(fas, far, fab);
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
    return /* @__PURE__ */ jsx(
      FontAwesomeIcon,
      {
        icon: [prefix, name],
        size: faSizeMap[size],
        className: cn(color ? `text-${color}` : "text-current", "inline-block", className),
        "aria-hidden": ariaLabel ? void 0 : true,
        "aria-label": ariaLabel,
        role: ariaLabel ? "img" : void 0
      }
    );
  }
  if (React.isValidElement(icon)) {
    return React.cloneElement(icon, {
      className: cn(icon.props.className, className),
      "aria-hidden": ariaLabel ? void 0 : true,
      "aria-label": ariaLabel
    });
  }
  return /* @__PURE__ */ jsx("span", { className, "aria-label": ariaLabel, children: icon });
}
export {
  CraftIcon,
  CraftIconProvider
};
//# sourceMappingURL=craft-icon.js.map