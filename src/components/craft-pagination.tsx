"use client";

import * as React from "react";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";

export type CraftPaginationProps = {
  pageIndex: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  canPrevious?: boolean;
  canNext?: boolean;
  pageSize?: number;
  pageSizeOptions?: number[];
  onPageSizeChange?: (size: number) => void;
  tone?: ThemeName;
  className?: string;
};

function getPageNumbers(pageIndex: number, pageCount: number, maxButtons = 5) {
  if (pageCount <= maxButtons) {
    return Array.from({ length: pageCount }, (_, i) => i);
  }

  const pages: Array<number | "ellipsis"> = [];
  const start = Math.max(0, pageIndex - 1);
  const end = Math.min(pageCount - 1, pageIndex + 1);

  pages.push(0);

  if (start > 1) pages.push("ellipsis");

  for (let i = start; i <= end; i += 1) {
    if (i !== 0 && i !== pageCount - 1) pages.push(i);
  }

  if (end < pageCount - 2) pages.push("ellipsis");

  pages.push(pageCount - 1);

  return pages;
}

export function CraftPagination({
  pageIndex,
  pageCount,
  onPageChange,
  canPrevious = pageIndex > 0,
  canNext = pageIndex < pageCount - 1,
  pageSize,
  pageSizeOptions = [10, 20, 50],
  onPageSizeChange,
  tone,
  className,
}: CraftPaginationProps) {
  const pages = getPageNumbers(pageIndex, pageCount);

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-between gap-4",
        className
      )}
      data-nc-theme={tone}
    >
      <div className="flex items-center gap-2">
        <button
          type="button"
          className={cn(
            "rounded-xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] px-3 py-2 text-xs text-[rgb(var(--nc-fg))] transition",
            "hover:bg-[rgb(var(--nc-surface)/0.2)]",
            !canPrevious && "opacity-50 cursor-not-allowed"
          )}
          onClick={() => onPageChange(Math.max(pageIndex - 1, 0))}
          disabled={!canPrevious}
        >
          Prev
        </button>
        {pages.map((page, index) =>
          page === "ellipsis" ? (
            <span key={`ellipsis-${index}`} className="px-2 text-[rgb(var(--nc-fg-muted))]">
              ...
            </span>
          ) : (
            <button
              key={page}
              type="button"
              className={cn(
                "rounded-xl border px-3 py-2 text-xs transition",
                page === pageIndex
                  ? "border-[rgb(var(--nc-accent-1)/0.6)] bg-[rgb(var(--nc-accent-1)/0.2)] text-[rgb(var(--nc-fg))]"
                  : "border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] text-[rgb(var(--nc-fg-muted))] hover:text-[rgb(var(--nc-fg))] hover:bg-[rgb(var(--nc-surface)/0.2)]"
              )}
              onClick={() => onPageChange(page)}
            >
              {page + 1}
            </button>
          )
        )}
        <button
          type="button"
          className={cn(
            "rounded-xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] px-3 py-2 text-xs text-[rgb(var(--nc-fg))] transition",
            "hover:bg-[rgb(var(--nc-surface)/0.2)]",
            !canNext && "opacity-50 cursor-not-allowed"
          )}
          onClick={() => onPageChange(Math.min(pageIndex + 1, pageCount - 1))}
          disabled={!canNext}
        >
          Next
        </button>
      </div>

      {onPageSizeChange && (
        <div className="flex items-center gap-2 text-xs text-[rgb(var(--nc-fg-muted))]">
          <span>Rows</span>
          <select
            className="rounded-xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] px-2 py-1 text-xs text-[rgb(var(--nc-fg))]"
            value={pageSize}
            onChange={(event) => onPageSizeChange(Number(event.target.value))}
          >
            {pageSizeOptions.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
