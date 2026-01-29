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
var app_template_exports = {};
__export(app_template_exports, {
  AppTemplate: () => AppTemplate
});
module.exports = __toCommonJS(app_template_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"), 1);
var import_app_shell = require("./app-shell");
var import_craft_icon = require("../../components/craft-icon");
var import_breadcrumbs = require("./breadcrumbs");
var import_sidebar = require("./sidebar");
var import_top_nav = require("./top-nav");
function AppTemplate({
  config,
  headerActions,
  headerBreadcrumb,
  sidebarFooter,
  resolveIcon,
  icons,
  activePath,
  getActivePath,
  children
}) {
  const sidebarConfig = config.sidebar;
  const headerConfig = config.header;
  const resolvedActivePath = activePath != null ? activePath : getActivePath == null ? void 0 : getActivePath();
  const buildIcon = React.useCallback(
    (name) => {
      if (!name) return void 0;
      if (resolveIcon) return resolveIcon(name);
      if (icons == null ? void 0 : icons[name]) return icons[name];
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_craft_icon.CraftIcon, { name, size: "lg" });
    },
    [icons, resolveIcon]
  );
  const sidebarItems = sidebarConfig ? sidebarConfig.items.map((item) => {
    var _a;
    return {
      label: item.label,
      href: item.href,
      active: (_a = item.active) != null ? _a : resolvedActivePath && item.href ? item.href === resolvedActivePath : false,
      icon: buildIcon(item.icon)
    };
  }) : null;
  const breadcrumbNode = headerBreadcrumb != null ? headerBreadcrumb : (headerConfig == null ? void 0 : headerConfig.breadcrumb) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_breadcrumbs.Breadcrumbs, { items: headerConfig.breadcrumb }) : null;
  const sidebarFooterNode = sidebarFooter != null ? sidebarFooter : (sidebarConfig == null ? void 0 : sidebarConfig.footerText) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-xs text-[rgb(var(--nc-fg-muted))]", children: sidebarConfig.footerText }) : null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_app_shell.AppShell,
    {
      sidebar: sidebarConfig && sidebarItems ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_sidebar.Sidebar,
        {
          title: sidebarConfig.title,
          items: sidebarItems,
          footer: sidebarFooterNode
        }
      ) : void 0,
      topNav: headerConfig ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_top_nav.TopNav,
        {
          title: headerConfig.title,
          breadcrumb: breadcrumbNode,
          actions: headerActions
        }
      ) : void 0,
      children
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppTemplate
});
//# sourceMappingURL=app-template.cjs.map