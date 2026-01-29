"use client";

import * as React from "react";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";
import { CraftPagination } from "@/components/craft-pagination";

export type CraftDataTablePaginationProps = {
  currentPage: number;
  totalPages: number;
  total: number;
  pageSize: number;
  selectable?: boolean;
  selectedCount?: number;
  showPagination?: boolean;
  loading?: boolean;
  disabled?: boolean;
  onPageChange?: (page: number) => void;
  onPageSizeChange?: (size: number) => void;
  variant?: "default" | "minimal";
  padding?: "compact" | "normal" | "comfortable";
  tone?: ThemeName;
  className?: string;
  footer?: React.ReactNode;
};

const paddingClasses: Record<NonNullable<CraftDataTablePaginationProps["padding"]>, string> = {
  compact: "px-4 py-3",
  normal: "px-6 py-4",
  comfortable: "px-8 py-5",
};

const variantClasses: Record<NonNullable<CraftDataTablePaginationProps["variant"]>, string> = {
  default:
    "border-t border-[rgb(var(--nc-border)/0.35)] bg-[rgb(var(--nc-surface)/0.08)]",
  minimal: "border-t border-[rgb(var(--nc-border)/0.2)] bg-transparent",
};

export function CraftDataTablePagination({
  currentPage,
  totalPages,
  total,
  pageSize,
  selectable,
  selectedCount = 0,
  showPagination = true,
  loading = false,
  disabled = false,
  onPageChange,
  onPageSizeChange,
  variant = "default",
  padding = "normal",
  tone,
  className,
  footer,
}: CraftDataTablePaginationProps) {
  if (!showPagination && !footer) return null;

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-between gap-4",
        paddingClasses[padding],
        variantClasses[variant],
        className
      )}
      data-nc-theme={tone}
    >
      <div className="flex flex-wrap items-center gap-3 text-xs text-[rgb(var(--nc-fg-muted))]">
        <span>
          Page <span className="text-[rgb(var(--nc-fg))]">{currentPage + 1}</span> of {totalPages}
        </span>
        <span>
          {total} rows
        </span>
        {selectable ? (
          <span>
            {selectedCount} selected
          </span>
        ) : null}
        {loading ? <span className="text-[rgb(var(--nc-fg))]">Loading...</span> : null}
      </div>
      {footer}
      {showPagination && onPageChange ? (
        <CraftPagination
          pageIndex={currentPage}
          pageCount={totalPages}
          onPageChange={onPageChange}
          pageSize={pageSize}
          onPageSizeChange={onPageSizeChange}
          canPrevious={currentPage > 0 && !disabled}
          canNext={currentPage < totalPages - 1 && !disabled}
          tone={tone}
          className={disabled ? "opacity-60" : undefined}
        />
      ) : null}
    </div>
  );
}
