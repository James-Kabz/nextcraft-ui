import * as React from "react";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";
import { CraftInput } from "@/components/craft-input";

export type CraftTableToolbarProps = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  searchPlaceholder?: string;
  actions?: React.ReactNode;
  filters?: React.ReactNode;
  bulkActions?: React.ReactNode;
  tone?: ThemeName;
  className?: string;
};

export function CraftTableToolbar({
  title,
  description,
  searchValue,
  onSearchChange,
  searchPlaceholder = "Search table...",
  actions,
  filters,
  bulkActions,
  tone,
  className,
}: CraftTableToolbarProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] p-4 text-[rgb(var(--nc-fg))] shadow-[0_12px_36px_rgba(0,0,0,0.2)] backdrop-blur-2xl",
        className
      )}
      data-nc-theme={tone}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          {title && <h3 className="text-lg font-semibold">{title}</h3>}
          {description && (
            <p className="text-sm text-[rgb(var(--nc-fg-muted))]">
              {description}
            </p>
          )}
        </div>
        {actions && <div className="flex items-center gap-3">{actions}</div>}
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto]">
        <CraftInput
          type="search"
          placeholder={searchPlaceholder}
          value={searchValue ?? ""}
          onChange={(event) => onSearchChange?.(event.target.value)}
          tone={tone}
        />
        <div className="flex flex-wrap items-center gap-3">
          {filters}
          {bulkActions}
        </div>
      </div>
    </div>
  );
}
