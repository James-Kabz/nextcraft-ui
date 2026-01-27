import {
  cn
} from "./chunk-VQ6T3HIX.js";

// src/components/craft-icon.tsx
import * as React from "react";
import { DynamicIcon } from "lucide-react/dynamic";
import { jsx } from "react/jsx-runtime";
var CraftIconContext = React.createContext(null);
function CraftIconProvider({ icons, children }) {
  return /* @__PURE__ */ jsx(CraftIconContext.Provider, { value: icons, children });
}
function CraftIcon({
  name,
  className,
  "aria-label": ariaLabel,
  icons,
  useLucide = true
}) {
  var _a;
  const registry = icons != null ? icons : React.useContext(CraftIconContext);
  const icon = registry == null ? void 0 : registry[name];
  if (!icon) {
    if (!useLucide) return null;
    return /* @__PURE__ */ jsx(
      DynamicIcon,
      {
        name,
        className,
        "aria-hidden": ariaLabel ? void 0 : true,
        "aria-label": ariaLabel
      }
    );
  }
  if (React.isValidElement(icon)) {
    return React.cloneElement(icon, {
      className: cn((_a = icon.props) == null ? void 0 : _a.className, className),
      "aria-hidden": ariaLabel ? void 0 : true,
      "aria-label": ariaLabel
    });
  }
  return /* @__PURE__ */ jsx("span", { className, "aria-label": ariaLabel, children: icon });
}

export {
  CraftIconProvider,
  CraftIcon
};
//# sourceMappingURL=chunk-UCYYHYKL.js.map