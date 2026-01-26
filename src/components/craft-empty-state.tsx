import * as React from "react";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";

export type CraftEmptyStateProps = React.HTMLAttributes<HTMLDivElement> & {
  tone?: ThemeName;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
};

export function CraftEmptyState({
  className,
  tone,
  title,
  description,
  icon,
  action,
  ...props
}: CraftEmptyStateProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-white backdrop-blur-xl",
        "shadow-[0_18px_40px_rgba(0,0,0,0.25)]",
        className
      )}
      data-nc-theme={tone}
      {...props}
    >
      {icon && (
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:rgb(var(--nc-accent-1)/0.2)] text-[color:rgb(var(--nc-accent-1))]">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold">{title}</h3>
      {description && <p className="mt-2 text-sm text-white/60">{description}</p>}
      {action && <div className="mt-6 flex justify-center">{action}</div>}
    </div>
  );
}
