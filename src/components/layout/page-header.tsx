import * as React from "react";

import { cn } from "@/utils/cn";

export type PageHeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  title: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
};

export function PageHeader({
  className,
  title,
  description,
  actions,
  ...props
}: PageHeaderProps) {
  return (
    <div
      className={cn("flex flex-wrap items-start justify-between gap-6", className)}
      {...props}
    >
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-white">{title}</h1>
        {description && <p className="text-white/60">{description}</p>}
      </div>
      {actions && <div className="flex flex-wrap gap-3">{actions}</div>}
    </div>
  );
}
