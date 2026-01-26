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
        "grid min-h-screen grid-cols-1 gap-6 bg-background p-6 lg:grid-cols-[260px_1fr]",
        className
      )}
      {...props}
    >
      {sidebar && <div className="h-full">{sidebar}</div>}
      <div className="flex flex-col gap-6">
        {topNav}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
