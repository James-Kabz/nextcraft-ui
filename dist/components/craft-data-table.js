"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../utils/cn";
import { CraftPagination } from "../components/craft-pagination";
function getColumnValue(column, row) {
  if (typeof column.accessor === "function") return column.accessor(row);
  const record = row;
  if (typeof column.accessor === "string") return record[column.accessor];
  return record[column.id];
}
function normalizeValue(value) {
  if (value === null || value === void 0) return "";
  if (typeof value === "number") return value;
  if (typeof value === "string") return value.toLowerCase();
  if (value instanceof Date) return value.getTime();
  return String(value).toLowerCase();
}
function CraftDataTable({
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
  onPageSizeChange
}) {
  const [internalSort, setInternalSort] = React.useState(null);
  const [internalFilters, setInternalFilters] = React.useState({});
  const [internalGlobalFilter, setInternalGlobalFilter] = React.useState("");
  const [internalVisibility, setInternalVisibility] = React.useState(
    () => columns.reduce((acc, column) => {
      acc[column.id] = !column.hidden;
      return acc;
    }, {})
  );
  const [internalSelection, setInternalSelection] = React.useState({});
  const [internalPageIndex, setInternalPageIndex] = React.useState(0);
  const [showColumns, setShowColumns] = React.useState(false);
  const resolvedSort = sortBy != null ? sortBy : internalSort;
  const resolvedFilters = filters != null ? filters : internalFilters;
  const resolvedGlobalFilter = globalFilter != null ? globalFilter : internalGlobalFilter;
  const resolvedVisibility = columnVisibility != null ? columnVisibility : internalVisibility;
  const resolvedSelection = selectedRowIds != null ? selectedRowIds : internalSelection;
  const resolvedPageIndex = pageIndex != null ? pageIndex : internalPageIndex;
  const setSort = (next) => {
    if (sortBy === void 0) setInternalSort(next);
    onSortChange == null ? void 0 : onSortChange(next);
  };
  const setFilters = (next) => {
    if (filters === void 0) setInternalFilters(next);
    onFiltersChange == null ? void 0 : onFiltersChange(next);
  };
  const setVisibility = (next) => {
    if (columnVisibility === void 0) setInternalVisibility(next);
    onColumnVisibilityChange == null ? void 0 : onColumnVisibilityChange(next);
  };
  const setSelection = (next) => {
    if (selectedRowIds === void 0) setInternalSelection(next);
    onRowSelectionChange == null ? void 0 : onRowSelectionChange(next);
  };
  const setPageIndex = React.useCallback(
    (next) => {
      if (pageIndex === void 0) setInternalPageIndex(next);
      onPageChange == null ? void 0 : onPageChange(next);
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
  const resolvedPageCount = manualPagination ? Math.max(pageCount != null ? pageCount : 1, 1) : Math.max(Math.ceil(sortedData.length / pageSize), 1);
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
    (row, index) => {
      var _a;
      return (_a = getRowId == null ? void 0 : getRowId(row, index)) != null ? _a : String(index);
    },
    [getRowId]
  );
  const pageStartIndex = enablePagination && !manualPagination ? resolvedPageIndex * pageSize : 0;
  const pageRowIds = pagedData.map(
    (row, index) => rowIdFor(row, pageStartIndex + index)
  );
  const allSelected = pageRowIds.length > 0 && pageRowIds.every((id) => resolvedSelection[id]);
  const someSelected = pageRowIds.some((id) => resolvedSelection[id]);
  const headerCheckboxRef = React.useRef(null);
  React.useEffect(() => {
    if (headerCheckboxRef.current) {
      headerCheckboxRef.current.indeterminate = someSelected && !allSelected;
    }
  }, [someSelected, allSelected]);
  const toggleSort = (column) => {
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
  const emptyContent = emptyState != null ? emptyState : /* @__PURE__ */ jsx("div", { className: "text-center text-sm text-[rgb(var(--nc-fg-muted))]", children: "No results found." });
  const resolvedShowGlobalFilter = showGlobalFilter != null ? showGlobalFilter : enableFiltering && !toolbar;
  const setGlobalFilter = (next) => {
    if (globalFilter === void 0) setInternalGlobalFilter(next);
    onGlobalFilterChange == null ? void 0 : onGlobalFilterChange(next);
  };
  return /* @__PURE__ */ jsxs("div", { className: cn("space-y-4", className), "data-nc-theme": tone, children: [
    toolbar,
    resolvedShowGlobalFilter && /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3 rounded-2xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] px-3 py-2 text-sm text-[rgb(var(--nc-fg))]", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs text-[rgb(var(--nc-fg-muted))]", children: "Global filter" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "search",
          value: resolvedGlobalFilter,
          onChange: (event) => setGlobalFilter(event.target.value),
          placeholder: "Search all columns...",
          className: "w-full max-w-xs rounded-xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.18)] px-3 py-2 text-xs text-[rgb(var(--nc-fg))]"
        }
      )
    ] }),
    enableColumnVisibility && /* @__PURE__ */ jsxs("div", { className: "relative flex justify-end", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          className: "rounded-xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] px-3 py-2 text-xs text-[rgb(var(--nc-fg))] transition hover:bg-[rgb(var(--nc-surface)/0.2)]",
          onClick: () => setShowColumns((prev) => !prev),
          children: "Columns"
        }
      ),
      showColumns && /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-10 z-20 w-48 rounded-2xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.2)] p-3 shadow-[0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur-2xl", children: /* @__PURE__ */ jsx("div", { className: "grid gap-2", children: columns.map((column) => /* @__PURE__ */ jsxs(
        "label",
        {
          className: "flex items-center gap-2 text-xs text-[rgb(var(--nc-fg))]",
          children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "checkbox",
                className: "h-4 w-4 accent-[rgb(var(--nc-accent-1))]",
                checked: resolvedVisibility[column.id] !== false,
                onChange: (event) => setVisibility({
                  ...resolvedVisibility,
                  [column.id]: event.target.checked
                })
              }
            ),
            column.header
          ]
        },
        column.id
      )) }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-3xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.08)] shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse text-left text-sm", children: [
      /* @__PURE__ */ jsx("thead", { className: "bg-[rgb(var(--nc-surface)/0.12)] text-[rgb(var(--nc-fg-muted))]", children: /* @__PURE__ */ jsxs("tr", { children: [
        enableRowSelection && /* @__PURE__ */ jsx("th", { className: "w-12 px-4 py-3", children: /* @__PURE__ */ jsx(
          "input",
          {
            ref: headerCheckboxRef,
            type: "checkbox",
            className: "h-4 w-4 accent-[rgb(var(--nc-accent-1))]",
            checked: allSelected,
            onChange: (event) => {
              const next = { ...resolvedSelection };
              pageRowIds.forEach((id) => {
                next[id] = event.target.checked;
              });
              setSelection(next);
            }
          }
        ) }),
        visibleColumns.map((column) => {
          var _a;
          return /* @__PURE__ */ jsxs(
            "th",
            {
              className: cn(
                "px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em]",
                column.headerClassName
              ),
              style: { width: column.width },
              children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    type: "button",
                    className: cn(
                      "flex items-center gap-2",
                      enableSorting && column.sortable !== false ? "cursor-pointer" : "cursor-default"
                    ),
                    onClick: () => toggleSort(column),
                    children: [
                      /* @__PURE__ */ jsx("span", { children: column.header }),
                      (resolvedSort == null ? void 0 : resolvedSort.id) === column.id && /* @__PURE__ */ jsx("span", { className: "text-[rgb(var(--nc-accent-1))]", children: resolvedSort.desc ? "\u2193" : "\u2191" })
                    ]
                  }
                ),
                enableFiltering && column.filterable !== false && /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    value: (_a = resolvedFilters[column.id]) != null ? _a : "",
                    onChange: (event) => setFilters({
                      ...resolvedFilters,
                      [column.id]: event.target.value
                    }),
                    placeholder: "Filter",
                    className: "mt-2 w-full rounded-xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.18)] px-2 py-1 text-xs text-[rgb(var(--nc-fg))]"
                  }
                )
              ]
            },
            column.id
          );
        })
      ] }) }),
      /* @__PURE__ */ jsxs("tbody", { className: "text-[rgb(var(--nc-fg))]", children: [
        loading && /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx(
          "td",
          {
            colSpan: visibleColumns.length + (enableRowSelection ? 1 : 0),
            className: "px-4 py-10 text-center text-sm text-[rgb(var(--nc-fg-muted))]",
            children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "h-4 w-4 animate-spin rounded-full border-2 border-[rgb(var(--nc-fg-muted))] border-t-transparent" }),
              "Loading data..."
            ] })
          }
        ) }),
        !loading && pagedData.length === 0 && /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx(
          "td",
          {
            colSpan: visibleColumns.length + (enableRowSelection ? 1 : 0),
            className: "px-4 py-10",
            children: emptyContent
          }
        ) }),
        !loading && pagedData.map((row, rowIndex) => {
          const rowId = rowIdFor(row, pageStartIndex + rowIndex);
          const isSelected = resolvedSelection[rowId];
          return /* @__PURE__ */ jsxs(
            "tr",
            {
              className: cn(
                "border-t border-[rgb(var(--nc-border)/0.15)]",
                isSelected && "bg-[rgb(var(--nc-accent-1)/0.08)]"
              ),
              children: [
                enableRowSelection && /* @__PURE__ */ jsx("td", { className: "px-4 py-4", children: /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "checkbox",
                    className: "h-4 w-4 accent-[rgb(var(--nc-accent-1))]",
                    checked: isSelected,
                    onChange: (event) => setSelection({
                      ...resolvedSelection,
                      [rowId]: event.target.checked
                    })
                  }
                ) }),
                visibleColumns.map((column) => {
                  var _a;
                  return /* @__PURE__ */ jsx(
                    "td",
                    {
                      className: cn(
                        "px-4 py-4",
                        column.align === "center" && "text-center",
                        column.align === "right" && "text-right",
                        column.cellClassName
                      ),
                      children: column.cell ? column.cell(row) : String((_a = getColumnValue(column, row)) != null ? _a : "")
                    },
                    column.id
                  );
                })
              ]
            },
            rowId
          );
        })
      ] })
    ] }) }),
    enablePagination && /* @__PURE__ */ jsx(
      CraftPagination,
      {
        pageIndex: resolvedPageIndex,
        pageCount: resolvedPageCount,
        onPageChange: setPageIndex,
        pageSize,
        onPageSizeChange,
        tone
      }
    )
  ] });
}
export {
  CraftDataTable
};
//# sourceMappingURL=craft-data-table.js.map