"use client";
import { jsx } from "react/jsx-runtime";
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArchive,
  faCreditCard,
  faFolder,
  faFolderOpen,
  faGauge,
  faPen,
  faSearch,
  faTrash,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
import { cn } from "../utils/cn";
const CraftIconContext = React.createContext(null);
function CraftIconProvider({ icons, children }) {
  return /* @__PURE__ */ jsx(CraftIconContext.Provider, { value: icons, children });
}
const fontAwesomeIcons = {
  "layout-dashboard": faGauge,
  dashboard: faGauge,
  folder: faFolder,
  "folder-open": faFolderOpen,
  users: faUsers,
  "credit-card": faCreditCard,
  pen: faPen,
  edit: faPen,
  trash: faTrash,
  delete: faTrash,
  archive: faArchive,
  search: faSearch
};
function CraftIcon({
  name,
  className,
  "aria-label": ariaLabel,
  icons
}) {
  const contextRegistry = React.useContext(CraftIconContext);
  const registry = icons != null ? icons : contextRegistry;
  const icon = registry == null ? void 0 : registry[name];
  if (!icon) {
    const faIcon = fontAwesomeIcons[name];
    if (!faIcon) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(`[CraftIcon] Unknown icon name: ${name}`);
      }
      return null;
    }
    return /* @__PURE__ */ jsx(
      FontAwesomeIcon,
      {
        icon: faIcon,
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