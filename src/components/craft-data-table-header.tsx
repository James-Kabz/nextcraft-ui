"use client";

import * as React from "react";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";

export type CraftDataTableHeaderProps = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  filters?: React.ReactNode;
  tone?: ThemeName;
  variant?: "default" | "minimal";
  padding?: "compact" | "normal" | "comfortable";
  className?: string;
};

const paddingClasses: Record<NonNullable<CraftDataTableHeaderProps["padding"]>, string> = {
  compact: "px-4 py-3",
  normal: "px-6 py-4",
  comfortable: "px-8 py-5",
};

const variantClasses: Record<NonNullable<CraftDataTableHeaderProps["variant"]>, string> = {
  default:
    "border-b border-[rgb(var(--nc-accent-1)/0.25)] bg-linear-to-r from-[rgb(var(--nc-accent-1)/0.08)] via-[rgb(var(--nc-accent-2)/0.05)] to-[rgb(var(--nc-accent-3)/0.08)]",
  minimal: "border-b border-[rgb(var(--nc-border)/0.25)] bg-transparent",
};

export function CraftDataTableHeader({
  title,
  description,
  actions,
  filters,
  tone,
  variant = "default",
  padding = "normal",
  className,
}: CraftDataTableHeaderProps) {
  if (!title && !description && !actions && !filters) return null;

  return (
    <div
      className={cn(
        "flex flex-wrap items-start justify-between gap-4",
        paddingClasses[padding],
        variantClasses[variant],
        className
      )}
      data-nc-theme={tone}
    >
      <div className="space-y-1">
        {title ? <h3 className="text-lg font-semibold">{title}</h3> : null}
        {description ? (
          <p className="text-sm text-[rgb(var(--nc-fg-muted))]">{description}</p>
        ) : null}
      </div>
      <div className="flex flex-wrap items-center gap-3">
        {filters}
        {actions}
      </div>
    </div>
  );
}
