import * as React from "react";

import { cn } from "@/utils/cn";

export type TopNavProps = React.HTMLAttributes<HTMLElement> & {
  title?: React.ReactNode;
  actions?: React.ReactNode;
  breadcrumb?: React.ReactNode;
  leading?: React.ReactNode;
  search?: React.ReactNode;
};

export function TopNav({
  className,
  title,
  actions,
  breadcrumb,
  leading,
  search,
  ...props
}: TopNavProps) {
  return (
    <header
      className={cn(
        "flex flex-wrap items-center gap-3 rounded-2xl border border-[rgb(var(--nc-border)/0.2)] bg-[rgb(var(--nc-surface)/0.04)] px-4 py-3 text-[rgb(var(--nc-fg))] backdrop-blur-xl",
        className
      )}
      {...props}
    >
      <div className="flex min-w-0 flex-1 items-center gap-3">
        {leading && <div className="flex items-center gap-2">{leading}</div>}
        <div className="min-w-0 space-y-1">
          {breadcrumb}
          {title && <div className="truncate text-lg font-semibold">{title}</div>}
        </div>
      </div>
      {search && (
        <div className="order-last w-full min-w-[220px] flex-1 sm:order-none sm:w-auto sm:max-w-[480px]">
          {search}
        </div>
      )}
      {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
    </header>
  );
}
