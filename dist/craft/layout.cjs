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
var layout_exports = {};
__export(layout_exports, {
  AppShell: () => import_app_shell.AppShell,
  AppTemplate: () => import_app_template.AppTemplate,
  AuthLayout: () => import_auth_layout.AuthLayout,
  Breadcrumbs: () => import_breadcrumbs.Breadcrumbs,
  Container: () => import_container.Container,
  Grid: () => import_grid.Grid,
  PageHeader: () => import_page_header.PageHeader,
  Sidebar: () => import_sidebar.Sidebar,
  TopNav: () => import_top_nav.TopNav,
  layoutConfigSchema: () => import_layout_config.layoutConfigSchema
});
module.exports = __toCommonJS(layout_exports);
var import_app_shell = require("@/components/layout/app-shell");
var import_app_template = require("@/components/layout/app-template");
var import_sidebar = require("@/components/layout/sidebar");
var import_top_nav = require("@/components/layout/top-nav");
var import_page_header = require("@/components/layout/page-header");
var import_breadcrumbs = require("@/components/layout/breadcrumbs");
var import_auth_layout = require("@/components/layout/auth-layout");
var import_container = require("@/components/layout/container");
var import_grid = require("@/components/layout/grid");
var import_layout_config = require("@/components/layout/layout-config");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppShell,
  AppTemplate,
  AuthLayout,
  Breadcrumbs,
  Container,
  Grid,
  PageHeader,
  Sidebar,
  TopNav,
  layoutConfigSchema
});
//# sourceMappingURL=layout.cjs.map