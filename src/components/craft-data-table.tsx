"use client";

import * as React from "react";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";
import { CraftPagination } from "@/components/craft-pagination";

export type CraftDataTableColumn<T> = {
  id: string;
  header: React.ReactNode;
  accessor?: keyof T | ((row: T) => unknown);
  cell?: (row: T) => React.ReactNode;
  sortable?: boolean;
  filterable?: boolean;
  width?: string | number;
  align?: "left" | "center" | "right";
  hidden?: boolean;
  headerClassName?: string;
  cellClassName?: string;
};

export type CraftDataTableSort = {
  id: string;
  desc?: boolean;
};

export type CraftDataTableProps<T> = {
  data: T[];
  columns: CraftDataTableColumn<T>[];
  tone?: ThemeName;
  className?: string;
  loading?: boolean;
  emptyState?: React.ReactNode;
  toolbar?: React.ReactNode;
  enableSorting?: boolean;
  enableFiltering?: boolean;
  enableColumnVisibility?: boolean;
  enableRowSelection?: boolean;
  enablePagination?: boolean;
  showGlobalFilter?: boolean;
  manualSorting?: boolean;
  manualFiltering?: boolean;
  manualPagination?: boolean;
  sortBy?: CraftDataTableSort | null;
  onSortChange?: (sort: CraftDataTableSort | null) => void;
  filters?: Record<string, string>;
  onFiltersChange?: (filters: Record<string, string>) => void;
  globalFilter?: string;
  onGlobalFilterChange?: (value: string) => void;
  columnVisibility?: Record<string, boolean>;
  onColumnVisibilityChange?: (visibility: Record<string, boolean>) => void;
  selectedRowIds?: Record<string, boolean>;
  onRowSelectionChange?: (selection: Record<string, boolean>) => void;
  getRowId?: (row: T, index: number) => string;
  pageIndex?: number;
  pageSize?: number;
  pageCount?: number;
  onPageChange?: (pageIndex: number) => void;
  onPageSizeChange?: (size: number) => void;
};

function getColumnValue<T>(column: CraftDataTableColumn<T>, row: T) {
  if (typeof column.accessor === "function") return column.accessor(row);
  const record = row as Record<string, unknown>;
  if (typeof column.accessor === "string") return record[column.accessor];
  return record[column.id];
}

function normalizeValue(value: unknown) {
  if (value === null || value === undefined) return "";
  if (typeof value === "number") return value;
  if (typeof value === "string") return value.toLowerCase();
  if (value instanceof Date) return value.getTime();
  return String(value).toLowerCase();
}

export function CraftDataTable<T>({
  data,
  columns,
  tone,
  className,
  loading = false,
  emptyState,
  toolbar,
  enableSorting = true,
  enableFiltering = true,
  enableColumnVisibility = true,
  enableRowSelection = true,
  enablePagination = true,
  showGlobalFilter,
  manualSorting = false,
  manualFiltering = false,
  manualPagination = false,
  sortBy,
  onSortChange,
  filters,
  onFiltersChange,
  globalFilter,
  onGlobalFilterChange,
  columnVisibility,
  onColumnVisibilityChange,
  selectedRowIds,
  onRowSelectionChange,
  getRowId,
  pageIndex,
  pageSize = 10,
  pageCount,
  onPageChange,
  onPageSizeChange,
}: CraftDataTableProps<T>) {
  const [internalSort, setInternalSort] = React.useState<CraftDataTableSort | null>(null);
  const [internalFilters, setInternalFilters] = React.useState<Record<string, string>>({});
  const [internalGlobalFilter, setInternalGlobalFilter] = React.useState("");
  const [internalVisibility, setInternalVisibility] = React.useState<Record<string, boolean>>(() =>
    columns.reduce((acc, column) => {
      acc[column.id] = !column.hidden;
      return acc;
    }, {} as Record<string, boolean>)
  );
  const [internalSelection, setInternalSelection] = React.useState<Record<string, boolean>>({});
  const [internalPageIndex, setInternalPageIndex] = React.useState(0);
  const [showColumns, setShowColumns] = React.useState(false);

  const resolvedSort = sortBy ?? internalSort;
  const resolvedFilters = filters ?? internalFilters;
  const resolvedGlobalFilter = globalFilter ?? internalGlobalFilter;
  const resolvedVisibility = columnVisibility ?? internalVisibility;
  const resolvedSelection = selectedRowIds ?? internalSelection;
  const resolvedPageIndex = pageIndex ?? internalPageIndex;

  const setSort = (next: CraftDataTableSort | null) => {
    if (sortBy === undefined) setInternalSort(next);
    onSortChange?.(next);
  };

  const setFilters = (next: Record<string, string>) => {
    if (filters === undefined) setInternalFilters(next);
    onFiltersChange?.(next);
  };

  const setVisibility = (next: Record<string, boolean>) => {
    if (columnVisibility === undefined) setInternalVisibility(next);
    onColumnVisibilityChange?.(next);
  };

  const setSelection = (next: Record<string, boolean>) => {
    if (selectedRowIds === undefined) setInternalSelection(next);
    onRowSelectionChange?.(next);
  };

  const setPageIndex = React.useCallback(
    (next: number) => {
      if (pageIndex === undefined) setInternalPageIndex(next);
      onPageChange?.(next);
    },
    [pageIndex, onPageChange]
  );

  const visibleColumns = columns.filter(
    (column) => resolvedVisibility[column.id] !== false
  );

  const filteredData = React.useMemo(() => {
    if (manualFiltering) return data;
    const globalValue = resolvedGlobalFilter.trim();
    return data.filter((row) => {
      if (globalValue) {
        const matchesGlobal = columns.some((column) => {
          const value = normalizeValue(getColumnValue(column, row));
          return String(value).includes(globalValue.toLowerCase());
        });
        if (!matchesGlobal) return false;
      }

      return Object.entries(resolvedFilters).every(([columnId, value]) => {
        if (!value) return true;
        const column = columns.find((col) => col.id === columnId);
        if (!column) return true;
        const cellValue = normalizeValue(getColumnValue(column, row));
        return String(cellValue).includes(value.toLowerCase());
      });
    });
  }, [columns, data, manualFiltering, resolvedFilters, resolvedGlobalFilter]);

  const sortedData = React.useMemo(() => {
    if (manualSorting || !resolvedSort) return filteredData;
    const column = columns.find((col) => col.id === resolvedSort.id);
    if (!column) return filteredData;
    const sorted = [...filteredData].sort((a, b) => {
      const valueA = normalizeValue(getColumnValue(column, a));
      const valueB = normalizeValue(getColumnValue(column, b));
      if (typeof valueA === "number" && typeof valueB === "number") {
        return valueA - valueB;
      }
      return String(valueA).localeCompare(String(valueB));
    });
    return resolvedSort.desc ? sorted.reverse() : sorted;
  }, [columns, filteredData, manualSorting, resolvedSort]);

  const resolvedPageCount = manualPagination
    ? Math.max(pageCount ?? 1, 1)
    : Math.max(Math.ceil(sortedData.length / pageSize), 1);

  React.useEffect(() => {
    if (resolvedPageIndex > resolvedPageCount - 1) {
      setPageIndex(Math.max(resolvedPageCount - 1, 0));
    }
  }, [resolvedPageCount, resolvedPageIndex, setPageIndex]);

  const pagedData = React.useMemo(() => {
    if (!enablePagination || manualPagination) return sortedData;
    const start = resolvedPageIndex * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [enablePagination, manualPagination, pageSize, resolvedPageIndex, sortedData]);

  const rowIdFor = React.useCallback(
    (row: T, index: number) => getRowId?.(row, index) ?? String(index),
    [getRowId]
  );

  const pageStartIndex =
    enablePagination && !manualPagination ? resolvedPageIndex * pageSize : 0;
  const pageRowIds = pagedData.map((row, index) =>
    rowIdFor(row, pageStartIndex + index)
  );
  const allSelected =
    pageRowIds.length > 0 && pageRowIds.every((id) => resolvedSelection[id]);
  const someSelected = pageRowIds.some((id) => resolvedSelection[id]);
  const headerCheckboxRef = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    if (headerCheckboxRef.current) {
      headerCheckboxRef.current.indeterminate = someSelected && !allSelected;
    }
  }, [someSelected, allSelected]);

  const toggleSort = (column: CraftDataTableColumn<T>) => {
    if (!enableSorting || column.sortable === false) return;
    const current = resolvedSort;
    if (!current || current.id !== column.id) {
      setSort({ id: column.id, desc: false });
      return;
    }
    if (!current.desc) {
      setSort({ id: column.id, desc: true });
      return;
    }
    setSort(null);
  };

  const emptyContent = emptyState ?? (
    <div className="text-center text-sm text-[rgb(var(--nc-fg-muted))]">
      No results found.
    </div>
  );

  const resolvedShowGlobalFilter =
    showGlobalFilter ?? (enableFiltering && !toolbar);

  const setGlobalFilter = (next: string) => {
    if (globalFilter === undefined) setInternalGlobalFilter(next);
    onGlobalFilterChange?.(next);
  };

  return (
    <div className={cn("space-y-4", className)} data-nc-theme={tone}>
      {toolbar}

      {resolvedShowGlobalFilter && (
        <div className="flex items-center justify-between gap-3 rounded-2xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] px-3 py-2 text-sm text-[rgb(var(--nc-fg))]">
          <span className="text-xs text-[rgb(var(--nc-fg-muted))]">Global filter</span>
          <input
            type="search"
            value={resolvedGlobalFilter}
            onChange={(event) => setGlobalFilter(event.target.value)}
            placeholder="Search all columns..."
            className="w-full max-w-xs rounded-xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.18)] px-3 py-2 text-xs text-[rgb(var(--nc-fg))]"
          />
        </div>
      )}

      {enableColumnVisibility && (
        <div className="relative flex justify-end">
          <button
            type="button"
            className="rounded-xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] px-3 py-2 text-xs text-[rgb(var(--nc-fg))] transition hover:bg-[rgb(var(--nc-surface)/0.2)]"
            onClick={() => setShowColumns((prev) => !prev)}
          >
            Columns
          </button>
          {showColumns && (
            <div className="absolute right-0 top-10 z-20 w-48 rounded-2xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.2)] p-3 shadow-[0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
              <div className="grid gap-2">
                {columns.map((column) => (
                  <label
                    key={column.id}
                    className="flex items-center gap-2 text-xs text-[rgb(var(--nc-fg))]"
                  >
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-[rgb(var(--nc-accent-1))]"
                      checked={resolvedVisibility[column.id] !== false}
                      onChange={(event) =>
                        setVisibility({
                          ...resolvedVisibility,
                          [column.id]: event.target.checked,
                        })
                      }
                    />
                    {column.header}
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <div className="overflow-hidden rounded-3xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.08)] shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-[rgb(var(--nc-surface)/0.12)] text-[rgb(var(--nc-fg-muted))]">
            <tr>
              {enableRowSelection && (
                <th className="w-12 px-4 py-3">
                  <input
                    ref={headerCheckboxRef}
                    type="checkbox"
                    className="h-4 w-4 accent-[rgb(var(--nc-accent-1))]"
                    checked={allSelected}
                    onChange={(event) => {
                      const next = { ...resolvedSelection };
                      pageRowIds.forEach((id) => {
                        next[id] = event.target.checked;
                      });
                      setSelection(next);
                    }}
                  />
                </th>
              )}
              {visibleColumns.map((column) => (
                <th
                  key={column.id}
                  className={cn(
                    "px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em]",
                    column.headerClassName
                  )}
                  style={{ width: column.width }}
                >
                  <button
                    type="button"
                    className={cn(
                      "flex items-center gap-2",
                      enableSorting && column.sortable !== false
                        ? "cursor-pointer"
                        : "cursor-default"
                    )}
                    onClick={() => toggleSort(column)}
                  >
                    <span>{column.header}</span>
                    {resolvedSort?.id === column.id && (
                      <span className="text-[rgb(var(--nc-accent-1))]">
                        {resolvedSort.desc ? "↓" : "↑"}
                      </span>
                    )}
                  </button>
                  {enableFiltering && column.filterable !== false && (
                    <input
                      type="text"
                      value={resolvedFilters[column.id] ?? ""}
                      onChange={(event) =>
                        setFilters({
                          ...resolvedFilters,
                          [column.id]: event.target.value,
                        })
                      }
                      placeholder="Filter"
                      className="mt-2 w-full rounded-xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.18)] px-2 py-1 text-xs text-[rgb(var(--nc-fg))]"
                    />
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-[rgb(var(--nc-fg))]">
            {loading && (
              <tr>
                <td
                  colSpan={visibleColumns.length + (enableRowSelection ? 1 : 0)}
                  className="px-4 py-10 text-center text-sm text-[rgb(var(--nc-fg-muted))]"
                >
                  <span className="inline-flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-[rgb(var(--nc-fg-muted))] border-t-transparent" />
                    Loading data...
                  </span>
                </td>
              </tr>
            )}
            {!loading && pagedData.length === 0 && (
              <tr>
                <td
                  colSpan={visibleColumns.length + (enableRowSelection ? 1 : 0)}
                  className="px-4 py-10"
                >
                  {emptyContent}
                </td>
              </tr>
            )}
            {!loading &&
              pagedData.map((row, rowIndex) => {
                const rowId = rowIdFor(row, pageStartIndex + rowIndex);
                const isSelected = resolvedSelection[rowId];
                return (
                  <tr
                    key={rowId}
                    className={cn(
                      "border-t border-[rgb(var(--nc-border)/0.15)]",
                      isSelected && "bg-[rgb(var(--nc-accent-1)/0.08)]"
                    )}
                  >
                    {enableRowSelection && (
                      <td className="px-4 py-4">
                        <input
                          type="checkbox"
                          className="h-4 w-4 accent-[rgb(var(--nc-accent-1))]"
                          checked={isSelected}
                          onChange={(event) =>
                            setSelection({
                              ...resolvedSelection,
                              [rowId]: event.target.checked,
                            })
                          }
                        />
                      </td>
                    )}
                    {visibleColumns.map((column) => (
                      <td
                        key={column.id}
                        className={cn(
                          "px-4 py-4",
                          column.align === "center" && "text-center",
                          column.align === "right" && "text-right",
                          column.cellClassName
                        )}
                      >
                        {column.cell
                          ? column.cell(row)
                          : String(getColumnValue(column, row) ?? "")}
                      </td>
                    ))}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      {enablePagination && (
        <CraftPagination
          pageIndex={resolvedPageIndex}
          pageCount={resolvedPageCount}
          onPageChange={setPageIndex}
          pageSize={pageSize}
          onPageSizeChange={onPageSizeChange}
          tone={tone}
        />
      )}
    </div>
  );
}
