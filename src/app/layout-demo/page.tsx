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
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function LayoutDemoPage() {
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
              <div className="text-xs text-white/50">Version 0.1.3</div>
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
              <a
                href="/"
                className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/80 transition hover:text-white"
              >
                Back to Home
              </a>
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
              <p className="text-white/60">
                Build structured pages with consistent spacing and navigation.
              </p>
              <CraftBadge variant="soft">Updated</CraftBadge>
            </CraftCard>
          ))}
        </Grid>
      </Container>
    </AppShell>
  );
}
