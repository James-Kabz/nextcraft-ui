"use client";
import { jsx } from "react/jsx-runtime";
import * as React from "react";
import { AppShell } from "./app-shell";
import { CraftIcon } from "@/components/craft-icon";
import { Breadcrumbs } from "./breadcrumbs";
import { Sidebar } from "./sidebar";
import { TopNav } from "./top-nav";
function AppTemplate({
  config,
  headerActions,
  headerBreadcrumb,
  sidebarFooter,
  resolveIcon,
  icons,
  activePath,
  getActivePath,
  lucideFallback = true,
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
      return /* @__PURE__ */ jsx(CraftIcon, { name, useLucide: lucideFallback });
    },
    [icons, lucideFallback, resolveIcon]
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
  const breadcrumbNode = headerBreadcrumb != null ? headerBreadcrumb : (headerConfig == null ? void 0 : headerConfig.breadcrumb) ? /* @__PURE__ */ jsx(Breadcrumbs, { items: headerConfig.breadcrumb }) : null;
  const sidebarFooterNode = sidebarFooter != null ? sidebarFooter : (sidebarConfig == null ? void 0 : sidebarConfig.footerText) ? /* @__PURE__ */ jsx("div", { className: "text-xs text-[rgb(var(--nc-fg-muted))]", children: sidebarConfig.footerText }) : null;
  return /* @__PURE__ */ jsx(
    AppShell,
    {
      sidebar: sidebarConfig && sidebarItems ? /* @__PURE__ */ jsx(
        Sidebar,
        {
          title: sidebarConfig.title,
          items: sidebarItems,
          footer: sidebarFooterNode
        }
      ) : void 0,
      topNav: headerConfig ? /* @__PURE__ */ jsx(
        TopNav,
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
export {
  AppTemplate
};
//# sourceMappingURL=app-template.js.map