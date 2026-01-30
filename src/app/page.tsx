"use client";
import { CraftInput } from "@/components/craft-input";
import { CraftTextarea } from "@/components/craft-textarea";
import { CraftSelect } from "@/components/craft-select";
import { CraftCheckbox } from "@/components/craft-checkbox";
import { CraftSwitch } from "@/components/craft-switch";
import { CraftBadge } from "@/components/craft-badge";
import { CraftCard } from "@/components/craft-card";
import { CraftModal } from "@/components/craft-modal";
import { CraftDrawer } from "@/components/craft-drawer";
import { CraftTabs } from "@/components/craft-tabs";
import { CraftTooltip } from "@/components/craft-tooltip";
import { CraftToaster, toast } from "@/components/craft-toast";
import { CraftSkeleton } from "@/components/craft-skeleton";
import { CraftEmptyState } from "@/components/craft-empty-state";
import { CraftDatePicker } from "@/components/craft-date-picker";
import { CraftNumberInput } from "@/components/craft-number-input";
import { CraftCurrencyInput } from "@/components/craft-currency-input";
import { GlassCard } from "@/components/glass-card";
import { ThemeSwitcher } from "@/components/theme-switcher";
import React from "react";

export default function Home() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const push = toast;

  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-6xl w-full space-y-12">

          {/* Header */}
          <div className="text-center space-y-3">
            <h1 className="text-5xl font-bold bg-linear-to-r from-[rgb(var(--nc-accent-1))] via-[rgb(var(--nc-accent-2))] to-[rgb(var(--nc-accent-3))] bg-clip-text text-transparent">
              Craft Components
            </h1>
            <p className="text-lg">Beautiful glassmorphic inputs and cards</p>
            <div className="flex justify-center pt-4">
              <ThemeSwitcher />
            </div>
            <div className="flex justify-center pt-2">
              <a
                href="/layout-demo"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition hover: hover:bg-white/10 light:border-black/10 light:bg-black/5 light:text-black light:hover:text-black light:hover:bg-black/10"
              >
                View Layout Demo
              </a>
              <a
                href="/layout-template-demo"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition hover: hover:bg-white/10 light:border-black/10 light:bg-black/5 light:text-black light:hover:text-black light:hover:bg-black/10"
              >
                View Template Demo
              </a>
            </div>
          </div>

          {/* Input Showcase */}
          <GlassCard className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Input Components</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-[rgb(var(--nc-accent-soft))]">Global Theme Tone</label>
                <CraftInput
                  placeholder="Enter your email..."
                  type="email"
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-emerald-200">Aurora Tone</label>
                <CraftInput
                  tone="aurora"
                  placeholder="Your name..."
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-amber-200">Ember Tone</label>
                <CraftInput
                  tone="ember"
                  placeholder="Search..."
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-violet-200">Midnight Tone</label>
                <CraftInput
                  tone="midnight"
                  placeholder="Password..."
                  type="password"
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">Small</label>
                <CraftInput inputSize="sm" placeholder="Small input" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">Medium</label>
                <CraftInput inputSize="md" placeholder="Medium input" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">Large</label>
                <CraftInput inputSize="lg" placeholder="Large input" />
              </div>
            </div>
          </GlassCard>

          {/* Core Components */}
          <CraftCard className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold">Core Components</h2>
                <p className="">Theme-aware inputs and controls</p>
              </div>
              <CraftBadge>Core UI</CraftBadge>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <label className="text-sm font-medium">Textarea</label>
                <CraftTextarea placeholder="Tell us about your project..." />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-medium">Select</label>
                <CraftSelect defaultValue="">
                  <option value="" disabled className="text-slate-900">Pick a plan</option>
                  <option value="starter" className="text-slate-900">Starter</option>
                  <option value="growth" className="text-slate-900">Growth</option>
                  <option value="enterprise" className="text-slate-900">Enterprise</option>
                </CraftSelect>
              </div>
              <CraftCheckbox
                label="Email updates"
                description="Get updates on releases and new components."
              />
              <CraftSwitch label="Enable realtime mode" />
            </div>
          </CraftCard>

          {/* Interactive Components */}
          <CraftCard className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold">Interactive Components</h2>
                <p className="">Modals, drawers, tabs, tooltips, toasts</p>
              </div>
              <CraftBadge variant="outline">Phase 2</CraftBadge>
            </div>

            <div className="flex flex-wrap gap-4">
              <CraftModal
                title="Craft Modal"
                description="A focus-trapped modal with theme styling."
                trigger={
                  <button className="rounded-xl bg-[rgb(var(--nc-accent-1))] px-5 py-2  font-semibold">
                    Open Modal
                  </button>
                }
                footer={
                  <div className="flex justify-end gap-3">
                    <button className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm">
                      Cancel
                    </button>
                    <button className="rounded-xl bg-[rgb(var(--nc-accent-1))] px-4 py-2 text-sm font-semibold ">
                      Confirm
                    </button>
                  </div>
                }
              >
                <p className="">
                  The modal responds to the active theme tokens and traps focus for accessibility.
                </p>
              </CraftModal>

              <CraftDrawer
                title="Craft Drawer"
                trigger={
                  <button className="rounded-xl border border-white/10 px-5 py-2">
                    Open Drawer
                  </button>
                }
              >
                <p>
                  Use drawers for settings, filters, or context panels.
                </p>
              </CraftDrawer>

              <CraftTooltip content="A themed tooltip" side="bottom">
                <button className="rounded-xl border border-slate-300 bg-white px-5 py-2  shadow-sm dark:border-white/10 dark:bg-white/10">
                  Hover Tooltip
                </button>
              </CraftTooltip>

              <button
                className="rounded-xl border border-white/10 bg-white/10 px-5 py-2 "
                onClick={() =>
                  push("Toast message", {
                    description: "Theme-aware toast with quick feedback.",
                    variant: "success",
                  })
                }
              >
                Show Toast
              </button>
            </div>

            <CraftTabs
              tabs={[
                { value: "overview", label: "Overview" },
                { value: "details", label: "Details" },
                { value: "updates", label: "Updates" },
              ]}
              panels={{
                overview: (
                  <div className="">
                    A quick snapshot of the system and key highlights.
                  </div>
                ),
                details: (
                  <div className="">
                    Detailed breakdowns of components and theme tokens.
                  </div>
                ),
                updates: (
                  <div className="">
                    New releases, fixes, and upcoming changes.
                  </div>
                ),
              }}
            />
          </CraftCard>

          {/* Utility Components */}
          <CraftCard className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold">Utility Components</h2>
                <p className="">Skeletons, empty states, and formatted inputs</p>
              </div>
              <CraftBadge variant="outline">Phase 3</CraftBadge>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <label className="text-sm font-medium">Date Picker</label>
                <CraftDatePicker placeholder="Pick a date" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-medium">Number Input</label>
                <CraftNumberInput placeholder="42" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-medium">Currency Input</label>
                <CraftCurrencyInput placeholder="0.00" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-medium">Skeleton</label>
                <div className="space-y-3">
                  <CraftSkeleton className="h-6 w-40" />
                  <CraftSkeleton className="h-4 w-full" />
                  <CraftSkeleton className="h-4 w-5/6" />
                </div>
              </div>
            </div>

            <CraftEmptyState
              title="No activity yet"
              description="Connect your first data source to unlock insights."
              action={(
                <button className="rounded-xl bg-[rgb(var(--nc-accent-1))] px-5 py-2 text-sm font-semibold ">
                  Connect Source
                </button>
              )}
            />
          </CraftCard>

          {/* Layout Kit Preview */}
          <CraftCard className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold">Layout Kit</h2>
                <p className="">A compact preview of the navigation system.</p>
              </div>
              <a
                href="/layout-demo"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm  transition hover: hover:bg-white/10"
              >
                Open Full Demo
              </a>
              <a
                href="/layout-template-demo"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm  transition hover: hover:bg-white/10"
              >
                Open Template Demo
              </a>
            </div>

            <div className="grid gap-4 lg:grid-cols-[220px_1fr]">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4 space-y-4">
                <div className="text-sm font-semibold ">Nextcraft</div>
                <div className="space-y-2 text-sm">
                  <div className="rounded-2xl bg-[rgb(var(--nc-accent-1)/0.25)] px-3 py-2 ">
                    Dashboard
                  </div>
                  {[
                    "Projects",
                    "Analytics",
                    "Billing",
                    "Team",
                  ].map((label) => (
                    <div
                      key={label}
                      className="rounded-2xl px-3 py-2  hover:bg-white/10"
                    >
                      {label}
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 px-3 py-2 text-xs ">
                  Theme-ready sidebar
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4 flex flex-wrap items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="text-xs /50">Home / Dashboard</div>
                    <div className="text-lg font-semibold ">Workspace</div>
                  </div>
                  <div className="flex gap-2">
                    <button className="rounded-xl border border-white/10 bg-white/10 px-3 py-1 text-xs">
                      Filter
                    </button>
                    <button className="rounded-xl bg-[rgb(var(--nc-accent-1)/0.25)] px-3 py-1 text-xs ">
                      Create
                    </button>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {["Revenue", "Users", "Latency"].map((metric) => (
                    <div
                      key={metric}
                      className="rounded-3xl border border-white/10 bg-white/5 p-4 space-y-2"
                    >
                      <div className="text-xs /50">{metric}</div>
                      <div className="text-xl font-semibold ">+14%</div>
                      <div className="text-xs /40">vs last week</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CraftCard>

          {/* Glass Card Showcase */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold ">Glass Card Variants</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <GlassCard tone="aurora">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[rgb(var(--nc-accent-1)/0.2)] flex items-center justify-center">
                    <svg className="w-6 h-6 text-[rgb(var(--nc-accent-1))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[rgb(var(--nc-accent-soft))]">Aurora</h3>
                  <p className=" text-sm">Emerald and teal gradients with a fresh, natural feel</p>
                </div>
              </GlassCard>

              <GlassCard tone="ember">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[rgb(var(--nc-accent-1)/0.2)] flex items-center justify-center">
                    <svg className="w-6 h-6 text-[rgb(var(--nc-accent-1))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[rgb(var(--nc-accent-soft))]">Ember</h3>
                  <p className=" text-sm">Warm amber and rose tones perfect for call-to-actions</p>
                </div>
              </GlassCard>

              <GlassCard>
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[rgb(var(--nc-accent-1)/0.2)] flex items-center justify-center">
                    <svg className="w-6 h-6 text-[rgb(var(--nc-accent-1))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[rgb(var(--nc-accent-soft))]">Global Theme</h3>
                  <p className=" text-sm">Follows the active theme selection automatically</p>
                </div>
              </GlassCard>

              <GlassCard tone="midnight">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[rgb(var(--nc-accent-1)/0.2)] flex items-center justify-center">
                    <svg className="w-6 h-6 text-[rgb(var(--nc-accent-1))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[rgb(var(--nc-accent-soft))]">Midnight</h3>
                  <p className=" text-sm">Deep purple hues for sophisticated, premium interfaces</p>
                </div>
              </GlassCard>

              <GlassCard tone="cosmic">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[rgb(var(--nc-accent-1)/0.2)] flex items-center justify-center">
                    <svg className="w-6 h-6 text-[rgb(var(--nc-accent-1))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[rgb(var(--nc-accent-soft))]">Cosmic</h3>
                  <p className=" text-sm">Vibrant pink to indigo creating magical experiences</p>
                </div>
              </GlassCard>

              <GlassCard intensity="strong">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[rgb(var(--nc-accent-1)/0.2)] flex items-center justify-center">
                    <svg className="w-6 h-6 text-[rgb(var(--nc-accent-1))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[rgb(var(--nc-accent-soft))]">Strong Blur</h3>
                  <p className=" text-sm">Enhanced backdrop blur for maximum glassmorphism effect</p>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* Login Form Example */}
          <GlassCard intensity="strong" className="max-w-md mx-auto">
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold">Welcome Back</h2>
                <p className="text-[rgb(var(--nc-accent-soft)/0.7)]">Sign in to continue</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <CraftInput
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Password</label>
                  <CraftInput
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    icon={
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    }
                  />
                </div>

                <button className="w-full h-12 rounded-2xl bg-linear-to-r from-[rgb(var(--nc-accent-1))] via-[rgb(var(--nc-accent-2))] to-[rgb(var(--nc-accent-3))]  font-semibold hover:scale-[1.01] transition-all shadow-[0_12px_30px_rgb(var(--nc-accent-1)/0.45)] hover:shadow-[0_16px_36px_rgb(var(--nc-accent-1)/0.6)]">
                  Sign In
                </button>
              </div>
            </div>
          </GlassCard>

        </div>
      </div>
      <CraftToaster/>
    </>
  );
}
