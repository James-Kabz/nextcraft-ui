"use client";

import * as React from "react";

import {
  AppTemplate,
  CraftBadge,
  CraftButton,
  CraftCard,
  CraftCheckbox,
  CraftDataTable,
  type CraftDataTableAction,
  type CraftDataTableColumn,
  type CraftDataTableSort,
  CraftEmptyState,
  CraftIcon,
  CraftInput,
  CraftSelect,
  CraftSkeleton,
  CraftSwitch,
  CraftTabs,
  CraftTextarea,
  LayoutConfig,
} from "@/index";

type TemplateRow = {
  id: string;
  project: string;
  owner: string;
  status: string;
  updated: string;
};

const templateRows: TemplateRow[] = [
  { id: "row-1", project: "Aurora OS", owner: "Jade", status: "Active", updated: "Jan 12" },
  { id: "row-2", project: "Ember Cloud", owner: "Miles", status: "Paused", updated: "Jan 09" },
  { id: "row-3", project: "Ocean Pulse", owner: "Iris", status: "Active", updated: "Jan 05" },
  { id: "row-4", project: "Cosmic Relay", owner: "Avery", status: "Draft", updated: "Dec 28" },
];

const layoutConfig: LayoutConfig = {
  sidebar: {
    title: "Nextcraft",
    items: [
      { label: "Dashboard", href: "/layout-template-demo", icon: "gauge", active: true },
      { label: "Projects", href: "/projects", icon: "folder" },
      { label: "Billing", href: "/billing", icon: "credit-card" },
      { label: "Team", href: "/team", icon: "users" },
    ],
    footerText: "Version 0.1.3",
  },
  header: {
    title: "Template Demo",
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Template Demo" },
    ],
  },
};

export default function LayoutTemplateDemoPage() {
  const [tableSort, setTableSort] = React.useState<CraftDataTableSort | null>(null);
  const [tablePageIndex, setTablePageIndex] = React.useState(0);
  const [tablePageSize, setTablePageSize] = React.useState(3);

  const tableColumns = React.useMemo<CraftDataTableColumn<TemplateRow>[]>(
    () => [
      { id: "project", header: "Project", accessor: "project", sortable: true, filterable: true },
      { id: "owner", header: "Owner", accessor: "owner", sortable: true, filterable: true },
      { id: "status", header: "Status", accessor: "status", sortable: true, filterable: true },
      { id: "updated", header: "Updated", accessor: "updated", sortable: true, align: "right" },
    ],
    []
  );

  const tableActions = React.useMemo<CraftDataTableAction<TemplateRow>[]>(
    () => [
      {
        key: "open",
        label: "Open",
        icon: "folder-open",
        variant: "ghost",
        tooltip: "Open project",
        onClick: (item) => {
          console.log("Open", item.id);
        },
      },
      {
        key: "archive",
        label: "Archive",
        icon: "archive",
        variant: "outline",
        tooltip: "Archive project",
        onClick: (item) => {
          console.log("Archive", item.id);
        },
      },
    ],
    []
  );

  return (
      <AppTemplate
        config={layoutConfig}
        getActivePath={() => "/layout-template-demo"}
        headerActions={
        <div className="flex items-center gap-3">
          <CraftButton size="sm" variant="ghost">
            Preview
          </CraftButton>
          <CraftButton size="sm">New Item</CraftButton>
        </div>
      }
      sidebarFooter={<CraftBadge>Live</CraftBadge>}
    >
      <div className="space-y-8 text-[rgb(var(--nc-fg))]">
        <div className="space-y-6 rounded-3xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.08)] p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold">Config-driven layout</h2>
              <p className="text-sm text-[rgb(var(--nc-fg-muted))]">
                This page uses AppTemplate with JSON config and Font Awesome icon names.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <CraftBadge>Live</CraftBadge>
              <CraftBadge>v0.1.3</CraftBadge>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[rgb(var(--nc-border)/0.35)] bg-[rgb(var(--nc-surface)/0.12)] p-4">
              <p className="text-sm font-semibold">Shared config</p>
              <p className="text-xs text-[rgb(var(--nc-fg-muted))]">
                Same layout JSON can be reused across apps.
              </p>
            </div>
            <div className="rounded-2xl border border-[rgb(var(--nc-border)/0.35)] bg-[rgb(var(--nc-surface)/0.12)] p-4">
              <p className="text-sm font-semibold">Active path</p>
              <p className="text-xs text-[rgb(var(--nc-fg-muted))]">
                Automatically highlights the current route.
              </p>
            </div>
            <div className="rounded-2xl border border-[rgb(var(--nc-border)/0.35)] bg-[rgb(var(--nc-surface)/0.12)] p-4">
              <p className="text-sm font-semibold">CraftIcon test</p>
              <div className="mt-2 flex items-center gap-3 text-[rgb(var(--nc-fg-muted))]">
                <CraftIcon name="gauge" size="lg"/>
                <CraftIcon name="folder" className="h-4 w-4" />
                <CraftIcon name="users" className="h-4 w-4" />
                <CraftIcon name="credit-card" className="h-4 w-4" />
              </div>
            </div>
            <div className="rounded-2xl border border-[rgb(var(--nc-border)/0.35)] bg-[rgb(var(--nc-surface)/0.12)] p-4">
              <p className="text-sm font-semibold">Lucide fallback</p>
              <p className="text-xs text-[rgb(var(--nc-fg-muted))]">
                Icons resolve by name without a registry when enabled.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { label: "Active projects", value: "24", trend: "+6%" },
            { label: "Open tasks", value: "182", trend: "-4%" },
            { label: "Revenue", value: "$28.4k", trend: "+12%" },
          ].map((stat) => (
            <CraftCard key={stat.label} className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-sm text-[rgb(var(--nc-fg-muted))]">{stat.label}</p>
                <CraftBadge>{stat.trend}</CraftBadge>
              </div>
              <p className="text-3xl font-semibold">{stat.value}</p>
              <p className="text-xs text-[rgb(var(--nc-fg-muted))]">Last 30 days</p>
            </CraftCard>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <CraftCard className="space-y-5">
            <div>
              <h3 className="text-xl font-semibold">Quick create</h3>
              <p className="text-sm text-[rgb(var(--nc-fg-muted))]">
                A compact form using package inputs.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <CraftInput placeholder="Project name" />
              <CraftInput placeholder="Owner email" type="email" />
              <CraftSelect>
                <option value="">Select status</option>
                <option>Planning</option>
                <option>In progress</option>
                <option>Review</option>
              </CraftSelect>
              <CraftInput placeholder="Budget" type="number" />
            </div>
            <CraftTextarea placeholder="Project summary" rows={4} />
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <CraftCheckbox label="Notify team" />
                <CraftSwitch label="High priority" />
              </div>
              <div className="flex items-center gap-2">
                <CraftButton variant="ghost">Cancel</CraftButton>
                <CraftButton>Save</CraftButton>
              </div>
            </div>
          </CraftCard>

          <CraftCard className="space-y-5">
            <div>
              <h3 className="text-xl font-semibold">Activity feed</h3>
              <p className="text-sm text-[rgb(var(--nc-fg-muted))]">
                Skeletons and tabs for loading states.
              </p>
            </div>
            <CraftTabs
              tabs={[
                { value: "all", label: "All" },
                { value: "mentions", label: "Mentions" },
                { value: "files", label: "Files" },
              ]}
              defaultValue="all"
              panels={{
                all: (
                  <div className="space-y-3">
                    <CraftSkeleton className="h-12" />
                    <CraftSkeleton className="h-12" />
                    <CraftSkeleton className="h-12" />
                  </div>
                ),
                mentions: (
                  <div className="space-y-3 text-sm text-[rgb(var(--nc-fg-muted))]">
                    <p>Mentions will appear here when activity picks up.</p>
                  </div>
                ),
                files: (
                  <div className="space-y-3 text-sm text-[rgb(var(--nc-fg-muted))]">
                    <p>No files uploaded yet.</p>
                  </div>
                ),
              }}
            />
          </CraftCard>
        </div>

        <CraftCard className="space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">Recent projects</h3>
              <p className="text-sm text-[rgb(var(--nc-fg-muted))]">
                CraftDataTable with selection, filters, actions, and pagination.
              </p>
            </div>
            <CraftButton size="sm" variant="ghost">
              View all
            </CraftButton>
          </div>
          <CraftDataTable
            data={templateRows}
            columns={tableColumns}
            actions={tableActions}
            selectable
            enableColumnVisibility
            enableSorting
            enableFiltering
            enablePagination
            showGlobalFilter
            sortBy={tableSort}
            onSortChange={setTableSort}
            pageIndex={tablePageIndex}
            pageSize={tablePageSize}
            onPageChange={setTablePageIndex}
            onPageSizeChange={setTablePageSize}
          />
        </CraftCard>

        <CraftCard className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">Empty state</h3>
              <p className="text-sm text-[rgb(var(--nc-fg-muted))]">
                When there is nothing to show yet.
              </p>
            </div>
            <CraftButton size="sm">Create first item</CraftButton>
          </div>
          <CraftEmptyState
            title="No reports yet"
            description="Create your first report to start tracking progress."
          />
        </CraftCard>
      </div>
    </AppTemplate>
  );
}
