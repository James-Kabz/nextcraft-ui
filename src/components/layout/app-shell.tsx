import * as React from "react";

import { cn } from "@/utils/cn";

export type AppShellProps = React.HTMLAttributes<HTMLDivElement> & {
  sidebar?: React.ReactNode;
  topNav?: React.ReactNode;
};

export function AppShell({ className, sidebar, topNav, children, ...props }: AppShellProps) {
  return (
    <div
      className={cn(
        "grid min-h-screen grid-cols-1 gap-4 bg-background p-4 lg:grid-cols-[var(--nc-sidebar-width,72px)_1fr] lg:gap-5 lg:p-5",
        className
      )}
      {...props}
    >
      {sidebar && (
        <div className="relative z-30 h-full overflow-visible lg:sticky lg:top-4 lg:self-start lg:max-h-[calc(100vh-2rem)] lg:overflow-y-auto">
          {sidebar}
        </div>
      )}
      <div className="flex min-w-0 flex-col gap-4 lg:gap-5">
        {topNav && <div className="lg:sticky lg:top-4 lg:z-20">{topNav}</div>}
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
