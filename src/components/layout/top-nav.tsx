import * as React from "react";

import { cn } from "@/utils/cn";

export type TopNavProps = React.HTMLAttributes<HTMLElement> & {
  title?: React.ReactNode;
  actions?: React.ReactNode;
  breadcrumb?: React.ReactNode;
};

export function TopNav({ className, title, actions, breadcrumb, ...props }: TopNavProps) {
  return (
    <header
      className={cn(
        "flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 px-6 py-4 text-white backdrop-blur-xl",
        className
      )}
      {...props}
    >
      <div className="space-y-1">
        {breadcrumb}
        {title && <div className="text-xl font-semibold">{title}</div>}
      </div>
      {actions && <div className="flex flex-wrap gap-3">{actions}</div>}
    </header>
  );
}
