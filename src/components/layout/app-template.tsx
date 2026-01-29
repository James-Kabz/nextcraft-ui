"use client";

import * as React from "react";

import { AppShell } from "./app-shell";
import { CraftIcon } from "@/components/craft-icon";
import { Breadcrumbs } from "./breadcrumbs";
import { Sidebar, type SidebarItem } from "./sidebar";
import { TopNav } from "./top-nav";
import type { LayoutConfig, LayoutSidebarItem } from "./layout-config";

export type AppTemplateProps = {
  config: LayoutConfig;
  headerActions?: React.ReactNode;
  headerBreadcrumb?: React.ReactNode;
  sidebarFooter?: React.ReactNode;
  resolveIcon?: (name: string) => React.ReactNode;
  icons?: Record<string, React.ReactNode>;
  activePath?: string;
  getActivePath?: () => string | undefined;
  sidebarDefaultExpanded?: boolean;
  sidebarExpanded?: boolean;
  onSidebarExpandedChange?: (expanded: boolean) => void;
  sidebarCollapsedWidth?: string;
  sidebarExpandedWidth?: string;
  sidebarHoverExpand?: boolean;
  children: React.ReactNode;
};

export function AppTemplate({
  config,
  headerActions,
  headerBreadcrumb,
  sidebarFooter,
  resolveIcon,
  icons,
  activePath,
  getActivePath,
  sidebarDefaultExpanded = false,
  sidebarExpanded,
  onSidebarExpandedChange,
  sidebarCollapsedWidth = "72px",
  sidebarExpandedWidth = "224px",
  sidebarHoverExpand = true,
  children,
}: AppTemplateProps) {
  const sidebarConfig = config.sidebar;
  const headerConfig = config.header;

  const [internalExpanded, setInternalExpanded] =
    React.useState(sidebarDefaultExpanded);
  const resolvedExpanded = sidebarExpanded ?? internalExpanded;
  const setExpanded = (next: boolean) => {
    if (sidebarExpanded === undefined) setInternalExpanded(next);
    onSidebarExpandedChange?.(next);
  };

  const resolvedActivePath = activePath ?? getActivePath?.();

  const buildIcon = React.useCallback(
    (name?: string) => {
      if (!name) return undefined;
      if (resolveIcon) return resolveIcon(name);
      if (icons?.[name]) return icons[name];
      return <CraftIcon name={name} size="lg"/>;
    },
    [icons, resolveIcon]
  );

  const sidebarItems: SidebarItem[] | null = sidebarConfig
    ? sidebarConfig.items.map((item: LayoutSidebarItem) => ({
        label: item.label,
        href: item.href,
        active:
          item.active ??
          (resolvedActivePath && item.href
            ? item.href === resolvedActivePath
            : false),
        icon: buildIcon(item.icon),
      }))
    : null;

  const breadcrumbNode =
    headerBreadcrumb ??
    (headerConfig?.breadcrumb ? (
      <Breadcrumbs items={headerConfig.breadcrumb} />
    ) : null);

  const sidebarFooterNode =
    sidebarFooter ??
    (sidebarConfig?.footerText ? (
      <div className="text-xs text-[rgb(var(--nc-fg-muted))]">
        {sidebarConfig.footerText}
      </div>
    ) : null);

  return (
    <AppShell
      style={
        {
          "--nc-sidebar-width": resolvedExpanded
            ? sidebarExpandedWidth
            : sidebarCollapsedWidth,
        } as React.CSSProperties
      }
      sidebar={
        sidebarConfig && sidebarItems ? (
          <Sidebar
            title={sidebarConfig.title}
            items={sidebarItems}
            footer={sidebarFooterNode}
            hoverExpand={sidebarHoverExpand}
            expanded={resolvedExpanded}
            onExpandedChange={setExpanded}
            collapsedWidth={sidebarCollapsedWidth}
            expandedWidth={sidebarExpandedWidth}
          />
        ) : undefined
      }
      topNav={
        headerConfig ? (
          <TopNav
            title={headerConfig.title}
            breadcrumb={breadcrumbNode}
            actions={headerActions}
          />
        ) : undefined
      }
    >
      {children}
    </AppShell>
  );
}
