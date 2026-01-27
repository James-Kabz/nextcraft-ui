"use client";
import { jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../utils/cn";
const CraftIconContext = React.createContext(null);
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
  const contextRegistry = React.useContext(CraftIconContext);
  const registry = icons != null ? icons : contextRegistry;
  const icon = registry == null ? void 0 : registry[name];
  const [LucideIcon, setLucideIcon] = React.useState(
    null
  );
  React.useEffect(() => {
    if (!useLucide || icon || LucideIcon) return;
    let mounted = true;
    (async () => {
      try {
        const mod = await Function(
          "return import('lucide-react/dynamic')"
        )();
        if (mounted) {
          setLucideIcon(() => mod.DynamicIcon);
        }
      } catch {
        if (mounted) setLucideIcon(null);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [LucideIcon, icon, useLucide]);
  if (!icon) {
    if (!useLucide) return null;
    if (!LucideIcon) return null;
    return /* @__PURE__ */ jsx(
      LucideIcon,
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