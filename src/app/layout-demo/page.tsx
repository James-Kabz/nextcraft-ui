"use client";

import { AppShell } from "@/components/layout/app-shell";
import { Sidebar } from "@/components/layout/sidebar";
import { TopNav } from "@/components/layout/top-nav";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/layout/container";
import { Grid } from "@/components/layout/grid";
import { CraftCard } from "@/components/craft-card";
import { CraftBadge } from "@/components/craft-badge";
import { CraftButton } from "@/components/craft-button";
import { CraftFormBuilder, type CraftFormBuilderField } from "@/components/craft-form-builder";
import { CraftFormField } from "@/components/craft-form-field";
import { CraftConfirmDialog } from "@/components/craft-confirm-dialog";
import { CraftCreateEditDrawer } from "@/components/craft-create-edit-drawer";
import { CraftFilterBar } from "@/components/craft-filter-bar";
import { CraftDataTable, type CraftDataTableColumn, type CraftDataTableSort } from "@/components/craft-data-table";
import { CraftSelect } from "@/components/craft-select";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";
import { useForm } from "react-hook-form";
import React from "react";

type DemoFormValues = {
  name: string;
  email: string;
  password: string;
  description: string;
  plan: string;
  status: string;
  tags: string[];
  notify: boolean;
  realtime: boolean;
  startDate: string;
  budget: string;
  seats: number;
  color: string;
  time: string;
  datetime: string;
  month: string;
  week: string;
  website: string;
  phone: string;
  search: string;
  range: number;
  attachment: FileList | null;
  assets: FileList | null;
};

type DemoRow = {
  id: string;
  name: string;
  status: string;
  owner: string;
  budget: string;
  updated: string;
};

const demoRows: DemoRow[] = [
  { id: "nc-1001", name: "Aurora OS", status: "Active", owner: "Jade", budget: "$42,000", updated: "Jan 12" },
  { id: "nc-1002", name: "Ember Cloud", status: "Paused", owner: "Miles", budget: "$18,500", updated: "Jan 09" },
  { id: "nc-1003", name: "Ocean Pulse", status: "Active", owner: "Iris", budget: "$63,200", updated: "Jan 05" },
  { id: "nc-1004", name: "Cosmic Relay", status: "Draft", owner: "Avery", budget: "$7,800", updated: "Dec 28" },
  { id: "nc-1005", name: "Midnight Ops", status: "Active", owner: "Noah", budget: "$24,900", updated: "Dec 20" },
];

export default function LayoutDemoPage() {
  const formFields = React.useMemo<CraftFormBuilderField<DemoFormValues>[]>(
    () => [
      { name: "name", label: "Project name", type: "text", placeholder: "Nextcraft UI", required: true },
      { name: "email", label: "Owner email", type: "email", placeholder: "team@nextcraft.io", required: true },
      { name: "password", label: "Admin password", type: "password", placeholder: "••••••••" },
      { name: "seats", label: "Seats", type: "number", min: 1, max: 200 },
      { name: "budget", label: "Budget", type: "currency", placeholder: "$42,000" },
      { name: "startDate", label: "Start date", type: "date" },
      { name: "color", label: "Brand color", type: "color" },
      { name: "time", label: "Daily sync time", type: "time" },
      { name: "datetime", label: "Launch datetime", type: "datetime-local" },
      { name: "month", label: "Billing month", type: "month" },
      { name: "week", label: "Sprint week", type: "week" },
      { name: "website", label: "Website", type: "url", placeholder: "https://nextcraft.io" },
      { name: "phone", label: "Phone", type: "tel", placeholder: "+1 555 013 774" },
      { name: "description", label: "Description", type: "textarea", placeholder: "Tell us about the project..." },
      {
        name: "plan",
        label: "Plan",
        type: "select",
        placeholder: "Select a plan",
        options: [
          { label: "Starter", value: "starter" },
          { label: "Growth", value: "growth" },
          { label: "Enterprise", value: "enterprise" },
        ],
      },
      {
        name: "tags",
        label: "Tags",
        type: "multiselect",
        options: [
          { label: "Design", value: "design" },
          { label: "Product", value: "product" },
          { label: "Infra", value: "infra" },
        ],
      },
      {
        name: "status",
        label: "Status",
        type: "radio",
        options: [
          { label: "Active", value: "active" },
          { label: "Paused", value: "paused" },
          { label: "Draft", value: "draft" },
        ],
      },
      { name: "range", label: "Confidence", type: "range", min: 0, max: 100 },
      { name: "attachment", label: "Project brief", type: "file" },
      { name: "assets", label: "Assets", type: "multifile" },
      { name: "notify", label: "Email updates", type: "checkbox", description: "Get progress updates." },
      { name: "realtime", label: "Realtime mode", type: "switch", description: "Stream live events." },
    ],
    []
  );

  const drawerForm = useForm<DemoFormValues>({
    mode: "onChange",
    defaultValues: {
      name: "Aurora OS",
      email: "team@nextcraft.io",
      password: "",
      description: "Realtime dashboards and analytics.",
      plan: "growth",
      status: "active",
      tags: ["design", "infra"],
      notify: true,
      realtime: true,
      startDate: "2026-01-12",
      budget: "42000",
      seats: 12,
      color: "#38bdf8",
      time: "09:30",
      datetime: "2026-01-12T09:30",
      month: "2026-01",
      week: "2026-W02",
      website: "https://nextcraft.io",
      phone: "+1 555 013 774",
      search: "",
      range: 60,
      attachment: null,
      assets: null,
    },
  });

  const [globalFilter, setGlobalFilter] = React.useState("");
  const [filters, setFilters] = React.useState<Record<string, string>>({});
  const [sortBy, setSortBy] = React.useState<CraftDataTableSort | null>(null);
  const [pageIndex, setPageIndex] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(4);

  const columns = React.useMemo<CraftDataTableColumn<DemoRow>[]>(
    () => [
      { id: "name", header: "Project", accessor: "name", sortable: true, filterable: true },
      { id: "status", header: "Status", accessor: "status", sortable: true, filterable: true },
      { id: "owner", header: "Owner", accessor: "owner", sortable: true, filterable: true },
      { id: "budget", header: "Budget", accessor: "budget", sortable: true },
      { id: "updated", header: "Updated", accessor: "updated", sortable: true, align: "right" },
    ],
    []
  );

  return (
    <AppShell
      sidebar={
        <Sidebar
          title="Nextcraft"
          items={[
            { label: "Dashboard", active: true },
            { label: "Projects" },
            { label: "Billing" },
            { label: "Team" },
          ]}
          footer={
            <div className="space-y-3">
              <ThemeSwitcher showLabels={false} />
              <div className="text-xs">Version 0.1.3</div>
            </div>
          }
        />
      }
      topNav={
        <TopNav
          title="Layout Demo"
          breadcrumb={
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Layout Demo" },
              ]}
            />
          }
          actions={
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="rounded-xl border px-4 py-2 text-sm transition"
              >
                Back to Home
              </Link>
              <CraftButton size="sm">New Project</CraftButton>
              <CraftButton size="sm" variant="ghost">Invite</CraftButton>
            </div>
          }
        />
      }
    >
      <Container className="space-y-10">
        <PageHeader
          title="Navigation & Layout"
          description="AppShell, Sidebar, TopNav, breadcrumbs, and layout primitives."
          actions={<CraftBadge>Live Preview</CraftBadge>}
        />

        <Grid columns={3} gap="lg">
          {[
            "Overview",
            "Usage",
            "Analytics",
            "Settings",
            "Team",
            "Integrations",
          ].map((title) => (
            <CraftCard key={title} className="space-y-3">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p>
                Build structured pages with consistent spacing and navigation.
              </p>
              <CraftBadge variant="soft">Updated</CraftBadge>
            </CraftCard>
          ))}
        </Grid>

        <PageHeader
          title="Forms & CRUD Speed"
          description="Reusable modal forms, confirmation dialogs, drawers, and data tables."
          actions={<CraftBadge>New</CraftBadge>}
        />

        <CraftCard className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">Form Modal</h3>
              <p className="text-sm text-white/60">CraftForm + CraftFormField + CraftSubmitButton.</p>
            </div>
            <CraftFormBuilder
              title="Create project"
              description="All input types are supported, styled, and validated via React Hook Form."
              submitLabel="Create project"
              trigger={<CraftButton size="sm">Open Form</CraftButton>}
              fields={formFields}
              initialData={{
                status: "active",
                realtime: true,
                color: "#38bdf8",
                range: 40,
              }}
              onSubmit={(values) => {
                console.log("Form submit", values);
              }}
            />
          </div>
        </CraftCard>

        <CraftCard className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">Confirm Dialog & Drawer</h3>
              <p className="text-sm text-white/60">Reusable confirmation and create/edit flows.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <CraftConfirmDialog
                title="Delete project?"
                description="This action cannot be undone."
                confirmLabel="Delete"
                trigger={<CraftButton size="sm" variant="outline">Confirm Delete</CraftButton>}
                onConfirm={() => {
                  console.log("Delete confirmed");
                }}
              />
              <CraftCreateEditDrawer
                mode="edit"
                form={drawerForm}
                title="Edit project"
                description="Update the project details and save your changes."
                trigger={<CraftButton size="sm" variant="ghost">Open Drawer</CraftButton>}
                onSubmit={(values) => {
                  console.log("Drawer submit", values);
                }}
              >
                <CraftFormField name="name" label="Project name" />
                <CraftFormField name="email" type="email" label="Owner email" />
                <CraftFormField name="description" type="textarea" label="Description" />
                <CraftFormField name="status" type="select" label="Status" options={[
                  { label: "Active", value: "active" },
                  { label: "Paused", value: "paused" },
                  { label: "Draft", value: "draft" },
                ]} />
                <CraftFormField name="notify" type="checkbox" label="Email updates" />
              </CraftCreateEditDrawer>
            </div>
          </div>
        </CraftCard>

        <CraftCard className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold">Filter Bar + Data Table</h3>
              <p className="text-sm text-white/60">Sorting, filtering, column visibility, selection, pagination.</p>
            </div>
          </div>

          <CraftDataTable
            data={demoRows}
            columns={columns}
            enableColumnVisibility
            enableRowSelection
            enableSorting
            enableFiltering
            enablePagination
            sortBy={sortBy}
            onSortChange={setSortBy}
            filters={filters}
            onFiltersChange={setFilters}
            globalFilter={globalFilter}
            onGlobalFilterChange={setGlobalFilter}
            pageIndex={pageIndex}
            pageSize={pageSize}
            onPageChange={setPageIndex}
            onPageSizeChange={setPageSize}
            toolbar={
              <CraftFilterBar
                title="Projects"
                description="Search and filter the project pipeline."
                searchValue={globalFilter}
                onSearchChange={setGlobalFilter}
                actions={
                  <CraftButton size="sm">Export</CraftButton>
                }
                filters={
                  <div className="flex items-center gap-3">
                    <CraftSelect
                      value={filters.status ?? ""}
                      onChange={(event) => setFilters({ ...filters, status: event.target.value })}
                    >
                      <option value="">All status</option>
                      <option value="Active">Active</option>
                      <option value="Paused">Paused</option>
                      <option value="Draft">Draft</option>
                    </CraftSelect>
                    <CraftButton size="sm" variant="ghost" onClick={() => setFilters({})}>
                      Reset
                    </CraftButton>
                  </div>
                }
              />
            }
          />
        </CraftCard>
      </Container>
    </AppShell>
  );
}
