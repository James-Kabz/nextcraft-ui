"use client";

import * as React from "react";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";
import { CraftButton } from "@/components/craft-button";
import { CraftCheckbox } from "@/components/craft-checkbox";
import { CraftIcon } from "@/components/craft-icon";
import { CraftModal } from "@/components/craft-modal";
import { CraftTooltip } from "@/components/craft-tooltip";
import { CraftLoader } from "@/components/craft-loader";
import { CraftDataTableHeader } from "@/components/craft-data-table-header";
import { CraftDataTablePagination } from "@/components/craft-data-table-pagination";

export type CraftDataTableColumn<T> = {
  id: string;
  header?: React.ReactNode;
  label?: React.ReactNode;
  accessor?: keyof T | ((row: T) => unknown);
  cell?: (row: T) => React.ReactNode;
  formatter?: (value: unknown, row: T) => React.ReactNode;
  sortable?: boolean;
  filterable?: boolean;
  width?: string | number;
  align?: "left" | "center" | "right";
  hidden?: boolean;
  headerClassName?: string;
  cellClassName?: string;
  truncate?: boolean;
  maxWords?: number;
};

export type CraftDataTableSort = {
  id: string;
  desc?: boolean;
};

export type CraftDataTableAction<T> = {
  key: string;
  label?: React.ReactNode;
  icon?: string | React.ReactNode;
  variant?:
    | "solid"
    | "outline"
    | "ghost"
    | "gradient"
    | "default"
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "warning"
    | "info"
    | "subtle"
    | "dark"
    | "light"
    | "primaryOutline"
    | "dangerOutline"
    | "successOutline"
    | "link";
  permission?: boolean | ((item: T) => boolean);
  visible?: boolean | ((item: T) => boolean);
  disabled?: boolean | ((item: T) => boolean);
  tooltip?: React.ReactNode | ((item: T) => React.ReactNode);
  onClick?: (item: T) => void;
  className?: string | ((item: T) => string);
};

export type CraftDataTableProps<T> = {
  data: T[];
  columns: CraftDataTableColumn<T>[];
  title?: React.ReactNode;
  description?: React.ReactNode;
  tone?: ThemeName;
  className?: string;
  toolbar?: React.ReactNode;
  emptyState?: React.ReactNode;
  actions?: CraftDataTableAction<T>[];
  showActionsColumn?: boolean;
  selectable?: boolean;
  enableRowSelection?: boolean;
  selectedRowIds?: Record<string, boolean>;
  onRowSelectionChange?: (selection: Record<string, boolean>) => void;
  getRowId?: (row: T, index: number) => string;
  rowKey?: keyof T | string;
  enableSorting?: boolean;
  enableFiltering?: boolean;
  enableColumnVisibility?: boolean;
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
  pageIndex?: number;
  pageSize?: number;
  pageCount?: number;
  onPageChange?: (pageIndex: number) => void;
  onPageSizeChange?: (size: number) => void;
  striped?: boolean;
  hoverable?: boolean;
  clickableRows?: boolean;
  emptyText?: string;
  emptySubtitle?: string;
  variant?: "default" | "bordered" | "minimal";
  density?: "compact" | "normal" | "comfortable";
  headerVariant?: "default" | "minimal";
  headerPadding?: "compact" | "normal" | "comfortable";
  paginationVariant?: "default" | "minimal";
  paginationPadding?: "compact" | "normal" | "comfortable";
  loading?: boolean;
  dataLoading?: boolean;
  sortLoading?: boolean;
  paginationLoading?: boolean;
  bulkLoading?: boolean;
  rowLoading?: Record<string, boolean>;
  loadingType?: "spin" | "pulse" | "bounce" | "ripple" | "bars" | "dots" | "ring";
  loadingSize?: "small" | "medium" | "large" | "xl";
  loadingColor?: string;
  loadingText?: string;
  loadingTextPosition?: "top" | "bottom";
  loadingBackground?: string;
  showSkeleton?: boolean;
  skeletonRows?: number;
  truncateWords?: number;
  enableTextModal?: boolean;
  onRowClick?: (payload: { item: T; index: number }) => void;
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

function truncateText(text: string, maxWords: number) {
  const words = text.split(" ");
  if (words.length <= maxWords) return text;
  return `${words.slice(0, maxWords).join(" ")}...`;
}

function resolveActionVariant(
  variant: CraftDataTableAction<unknown>["variant"]
): "solid" | "outline" | "ghost" | "gradient" {
  switch (variant) {
    case "solid":
    case "default":
    case "primary":
      return "solid";
    case "gradient":
      return "gradient";
    case "outline":
    case "primaryOutline":
    case "dangerOutline":
    case "successOutline":
      return "outline";
    case "ghost":
    case "link":
    case "secondary":
    case "danger":
    case "success":
    case "warning":
    case "info":
    case "subtle":
    case "dark":
    case "light":
    default:
      return "ghost";
  }
}

export function CraftDataTable<T>({
  data,
  columns,
  title,
  description,
  tone,
  className,
  toolbar,
  emptyState,
  actions = [],
  showActionsColumn = true,
  selectable,
  enableRowSelection = true,
  selectedRowIds,
  onRowSelectionChange,
  getRowId,
  rowKey,
  enableSorting = true,
  enableFiltering = true,
  enableColumnVisibility = true,
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
  pageIndex,
  pageSize = 10,
  pageCount,
  onPageChange,
  onPageSizeChange,
  striped = false,
  hoverable = true,
  clickableRows = false,
  emptyText = "No data available",
  emptySubtitle = "Try adjusting your search or filter criteria",
  variant = "default",
  density = "normal",
  headerVariant = "default",
  headerPadding = "normal",
  paginationVariant = "default",
  paginationPadding = "normal",
  loading = false,
  dataLoading = false,
  sortLoading = false,
  paginationLoading = false,
  bulkLoading = false,
  rowLoading = {},
  loadingType = "dots",
  loadingSize = "medium",
  loadingColor = "rgb(var(--nc-accent-1))",
  loadingText = "Loading...",
  loadingTextPosition = "bottom",
  loadingBackground = "rgb(var(--nc-accent-soft)/0.1)",
  showSkeleton = true,
  skeletonRows = 5,
  truncateWords = 10,
  enableTextModal = true,
  onRowClick,
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
  const [showModal, setShowModal] = React.useState(false);
  const [modalContent, setModalContent] = React.useState<string>("");

  const resolvedSort = sortBy ?? internalSort;
  const resolvedFilters = filters ?? internalFilters;
  const resolvedGlobalFilter = globalFilter ?? internalGlobalFilter;
  const resolvedVisibility = columnVisibility ?? internalVisibility;
  const resolvedSelection = selectedRowIds ?? internalSelection;
  const resolvedPageIndex = pageIndex ?? internalPageIndex;
  const resolvedSelectable = selectable ?? enableRowSelection;

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
    (row: T, index: number) => {
      if (getRowId) return getRowId(row, index);
      if (rowKey) return String((row as Record<string, unknown>)[rowKey as string] ?? index);
      return String(index);
    },
    [getRowId, rowKey]
  );

  const pageStartIndex =
    enablePagination && !manualPagination ? resolvedPageIndex * pageSize : 0;
  const pageRowIds = pagedData.map((row: T, index: number) =>
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

  const resolvedShowGlobalFilter =
    showGlobalFilter ?? (enableFiltering && !toolbar);

  const setGlobalFilter = (next: string) => {
    if (globalFilter === undefined) setInternalGlobalFilter(next);
    onGlobalFilterChange?.(next);
  };

  const shouldShowActionsColumn = React.useMemo(() => {
    if (!showActionsColumn) return false;
    if (!actions || actions.length === 0) return false;
    return actions.some((action) => {
      if (action.permission === undefined) return true;
      if (typeof action.permission === "boolean") return action.permission;
      return true;
    });
  }, [actions, showActionsColumn]);

  const getVisibleActions = (item: T) =>
    actions.filter((action) => {
      if (action.permission !== undefined) {
        if (typeof action.permission === "boolean" && !action.permission) return false;
        if (typeof action.permission === "function" && !action.permission(item)) return false;
      }
      if (action.visible && typeof action.visible === "function") {
        return action.visible(item);
      }
      if (typeof action.visible === "boolean") return action.visible;
      return true;
    });

  const isActionDisabled = (action: CraftDataTableAction<T>, item: T) => {
    if (action.disabled && typeof action.disabled === "function") return action.disabled(item);
    if (typeof action.disabled === "boolean") return action.disabled;
    return false;
  };

  const handleActionClick = (action: CraftDataTableAction<T>, item: T) => {
    if (isActionDisabled(action, item)) return;
    action.onClick?.(item);
  };

  const totalColumns =
    visibleColumns.length +
    (resolvedSelectable ? 1 : 0) +
    (shouldShowActionsColumn ? 1 : 0);

  const densityPadding = {
    compact: "px-4 py-2",
    normal: "px-6 py-4",
    comfortable: "px-8 py-6",
  } as const;

  const headerPaddingClasses = {
    compact: "px-4 py-2",
    normal: "px-6 py-3",
    comfortable: "px-8 py-4",
  } as const;

  const rowClassNames = (isSelected: boolean, rowId: string, index: number) =>
    cn(
      "transition-colors",
      variant === "bordered" && "border-b border-[rgb(var(--nc-border)/0.2)]",
      variant === "minimal" && "border-b border-[rgb(var(--nc-border)/0.15)]",
      striped && index % 2 === 1 && "bg-[rgb(var(--nc-surface)/0.04)]",
      hoverable && !clickableRows && "hover:bg-[rgb(var(--nc-surface)]",
      clickableRows && "cursor-pointer hover:bg-[rgb(var(--nc-surface)/0.1)]",
      isSelected && "bg-[rgb(var(--nc-accent-1)/0.12)]",
      rowLoading[rowId] && "opacity-60"
    );

  const containerClasses = cn(
    "relative overflow-hidden rounded-3xl border border-[rgb(var(--nc-border)/0.3)]",
    "shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl",
    variant === "minimal"
      ? "border-transparent bg-transparent shadow-none"
      : cn(
          "border-[rgb(var(--nc-accent-1)/0.35)]",
          "bg-linear-to-br from-[rgb(var(--nc-accent-1)/0.08)] via-[rgb(var(--nc-accent-2)/0.05)] to-[rgb(var(--nc-accent-3)/0.08)]"
        )
  );

  const openModal = (content: string) => {
    if (!enableTextModal) return;
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent("");
  };

  return (
    <div className={cn("space-y-4", className)} data-nc-theme={tone}>
      {toolbar}

      <CraftDataTableHeader
        title={title}
        description={description}
        variant={headerVariant}
        padding={headerPadding}
        tone={tone}
        filters={
          resolvedShowGlobalFilter ? (
            <div className="flex items-center gap-2 rounded-3xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] px-3 py-2 text-xs text-[rgb(var(--nc-fg))]">
              <CraftIcon name="search" className="h-4 w-4 text-[rgb(var(--nc-fg-muted))]" />
              <input
                type="search"
                value={resolvedGlobalFilter}
                onChange={(event) => setGlobalFilter(event.target.value)}
                placeholder="Search all columns..."
                className="w-full max-w-xs bg-transparent text-xs text-[rgb(var(--nc-fg))] placeholder:text-[rgb(var(--nc-fg-muted))] focus:outline-none"
              />
            </div>
          ) : null
        }
        actions={
          enableColumnVisibility ? (
            <div className="relative">
              <CraftButton
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setShowColumns((prev) => !prev)}
              >
                Columns
              </CraftButton>
              {showColumns && (
                <div className="absolute right-0 top-12 z-20 w-56 rounded-3xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.2)] p-3 shadow-[0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
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
                        {column.header ?? column.label ?? column.id}
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : null
        }
      />

      <div className={containerClasses}>
        <div className="relative">
          <CraftLoader
            loading={loading || dataLoading}
            type={loadingType}
            size={loadingSize}
            color={loadingColor}
            overlay
            text={loadingText}
            textPosition={loadingTextPosition}
            backgroundColor={loadingBackground}
          />

          <div className={cn("overflow-x-auto", (loading || dataLoading) && "opacity-60")}>
            <table className="min-w-full border-collapse text-left text-sm">
              <thead className="bg-linear-to-r from-[rgb(var(--nc-accent-1)/0.08)] via-[rgb(var(--nc-accent-2)/0.05)] to-[rgb(var(--nc-accent-3)/0.08)] text-[rgb(var(--nc-fg-muted))]">
                <tr>
                  {resolvedSelectable && (
                    <th className={cn("w-12", headerPaddingClasses[density])}>
                      <div className="flex items-center justify-center">
                        {bulkLoading ? (
                          <CraftLoader loading type="spin" size="small" color={loadingColor} />
                        ) : (
                          <CraftCheckbox
                            ref={headerCheckboxRef}
                            checked={allSelected}
                            onChange={(event) => {
                              const next = { ...resolvedSelection };
                              pageRowIds.forEach((id) => {
                                next[id] = event.target.checked;
                              });
                              setSelection(next);
                            }}
                          />
                        )}
                      </div>
                    </th>
                  )}
                  {visibleColumns.map((column) => {
                    const headerLabel = column.header ?? column.label ?? column.id;
                    return (
                      <th
                        key={column.id}
                        className={cn(
                          headerPaddingClasses[density],
                          "text-xs font-semibold uppercase tracking-[0.2em]",
                          column.headerClassName
                        )}
                        style={{ width: column.width }}
                      >
                        <button
                          type="button"
                          className={cn(
                            "flex w-full items-center gap-2",
                            enableSorting && column.sortable !== false
                              ? "cursor-pointer"
                              : "cursor-default"
                          )}
                          onClick={() => toggleSort(column)}
                        >
                          <span>{headerLabel}</span>
                          {sortLoading && resolvedSort?.id === column.id ? (
                            <CraftLoader loading type="spin" size="small" color={loadingColor} />
                          ) : null}
                          {resolvedSort?.id === column.id && !sortLoading ? (
                            <span className="text-[rgb(var(--nc-accent-1))]">
                              {resolvedSort.desc ? "↓" : "↑"}
                            </span>
                          ) : null}
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
                    );
                  })}
                  {shouldShowActionsColumn && (
                    <th className={cn(headerPaddingClasses[density], "text-xs uppercase")}>Actions</th>
                  )}
                </tr>
              </thead>
              <tbody className="text-[rgb(var(--nc-fg))]">
                {showSkeleton && (loading || dataLoading) ? (
                  Array.from({ length: skeletonRows }).map((_, rowIndex) => (
                    <tr key={`skeleton-${rowIndex}`} className="animate-pulse">
                      {resolvedSelectable && (
                        <td className={cn(headerPaddingClasses[density], "w-12")}> 
                          <div className="h-4 w-4 rounded bg-[rgb(var(--nc-border)/0.3)]" />
                        </td>
                      )}
                      {visibleColumns.map((column) => (
                        <td key={column.id} className={cn(densityPadding[density])}>
                          <div className="h-4 w-3/4 rounded bg-[rgb(var(--nc-border)/0.3)]" />
                        </td>
                      ))}
                      {shouldShowActionsColumn && (
                        <td className={cn(densityPadding[density])}>
                          <div className="flex items-center justify-center gap-2">
                            <div className="h-6 w-6 rounded bg-[rgb(var(--nc-border)/0.3)]" />
                            <div className="h-6 w-6 rounded bg-[rgb(var(--nc-border)/0.3)]" />
                          </div>
                        </td>
                      )}
                    </tr>
                  ))
                ) : pagedData.length === 0 ? (
                  <tr>
                    <td colSpan={totalColumns} className={cn(densityPadding[density], "py-12")}> 
                      {emptyState ?? (
                        <div className="flex flex-col items-center justify-center text-center">
                          <CraftIcon
                            name="search"
                            className="mb-4 h-12 w-12 text-[rgb(var(--nc-fg-muted))]"
                          />
                          <p className="text-base font-semibold text-[rgb(var(--nc-fg))]">
                            {emptyText}
                          </p>
                          <p className="text-sm text-[rgb(var(--nc-fg-muted))]">
                            {emptySubtitle}
                          </p>
                        </div>
                      )}
                    </td>
                  </tr>
                ) : (
                  pagedData.map((row: T, rowIndex: number) => {
                    const rowId = rowIdFor(row, pageStartIndex + rowIndex);
                    const isSelected = Boolean(resolvedSelection[rowId]);
                    return (
                      <tr
                        key={rowId}
                        className={rowClassNames(isSelected, rowId, rowIndex)}
                        onClick={() => {
                          if (!clickableRows) return;
                          onRowClick?.({ item: row, index: rowIndex });
                        }}
                      >
                        {resolvedSelectable && (
                          <td className={cn(densityPadding[density], "w-12")}> 
                            <CraftCheckbox
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
                        {visibleColumns.map((column) => {
                          const rawValue = getColumnValue(column, row);
                          const formatted = column.formatter
                            ? column.formatter(rawValue, row)
                            : rawValue;
                          const content = column.cell
                            ? column.cell(row)
                            : formatted ?? "";

                          if (
                            enableTextModal &&
                            !column.cell &&
                            typeof formatted === "string" &&
                            (column.truncate ?? true) &&
                            formatted.split(" ").length > (column.maxWords ?? truncateWords)
                          ) {
                            const maxWords = column.maxWords ?? truncateWords;
                            return (
                              <td
                                key={column.id}
                                className={cn(
                                  densityPadding[density],
                                  column.align === "center" && "text-center",
                                  column.align === "right" && "text-right",
                                  column.cellClassName
                                )}
                              >
                                <button
                                  type="button"
                                  className="text-[rgb(var(--nc-accent-1))] hover:text-[rgb(var(--nc-accent-2))]"
                                  onClick={() => openModal(formatted)}
                                >
                                  {truncateText(formatted, maxWords)}
                                </button>
                              </td>
                            );
                          }

                          return (
                            <td
                              key={column.id}
                              className={cn(
                                densityPadding[density],
                                column.align === "center" && "text-center",
                                column.align === "right" && "text-right",
                                column.cellClassName
                              )}
                            >
                              {content as React.ReactNode}
                            </td>
                          );
                        })}
                        {shouldShowActionsColumn && (
                          <td className={cn(densityPadding[density])}>
                            <div className="flex items-center justify-center gap-2">
                              {getVisibleActions(row).map((action) => {
                                const tooltip =
                                  typeof action.tooltip === "function"
                                    ? action.tooltip(row)
                                    : action.tooltip;
                                const className =
                                  typeof action.className === "function"
                                    ? action.className(row)
                                    : action.className;
                                const button = (
                                  <CraftButton
                                    type="button"
                                    size="sm"
                                    variant={resolveActionVariant(action.variant)}
                                    disabled={isActionDisabled(action, row)}
                                    className={cn("h-8 w-8 p-0", className)}
                                    onClick={(event) => {
                                      event.stopPropagation();
                                      handleActionClick(action, row);
                                    }}
                                  >
                                    {action.icon ? (
                                      typeof action.icon === "string" ? (
                                        <CraftIcon name={action.icon} className="h-4 w-4" />
                                      ) : (
                                        action.icon
                                      )
                                    ) : action.label ? (
                                      <span className="text-[11px]">{action.label}</span>
                                    ) : null}
                                  </CraftButton>
                                );

                                if (tooltip) {
                                  return (
                                    <CraftTooltip key={action.key} content={tooltip}>
                                      {button}
                                    </CraftTooltip>
                                  );
                                }

                                return <React.Fragment key={action.key}>{button}</React.Fragment>;
                              })}
                            </div>
                          </td>
                        )}
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        <CraftDataTablePagination
          currentPage={resolvedPageIndex}
          totalPages={resolvedPageCount}
          total={filteredData.length}
          pageSize={pageSize}
          selectable={Boolean(resolvedSelectable)}
          selectedCount={Object.values(resolvedSelection).filter(Boolean).length}
          showPagination={enablePagination}
          loading={paginationLoading}
          disabled={loading || dataLoading}
          onPageChange={setPageIndex}
          onPageSizeChange={onPageSizeChange}
          variant={paginationVariant}
          padding={paginationPadding}
          tone={tone}
        />
      </div>

      <CraftModal open={showModal} onOpenChange={setShowModal} title="Full Text" tone={tone}>
        <div className="space-y-3">
          <p className="text-sm text-[rgb(var(--nc-fg-muted))]">Full content</p>
          <div className="text-sm text-[rgb(var(--nc-fg))] whitespace-pre-wrap wrap-break-words">
            {modalContent}
          </div>
          <div className="flex justify-end">
            <CraftButton type="button" variant="ghost" onClick={closeModal}>
              Close
            </CraftButton>
          </div>
        </div>
      </CraftModal>
    </div>
  );
}
