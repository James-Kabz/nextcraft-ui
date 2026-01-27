import {
  CraftInput
} from "./chunk-7SKDTIEK.js";
import {
  cn
} from "./chunk-VQ6T3HIX.js";

// src/components/craft-filter-bar.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function CraftFilterBar({
  title,
  description,
  searchValue,
  onSearchChange,
  searchPlaceholder = "Search...",
  actions,
  filters,
  tone,
  className
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "rounded-3xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] p-4 text-[rgb(var(--nc-fg))] shadow-[0_12px_36px_rgba(0,0,0,0.2)] backdrop-blur-2xl",
        className
      ),
      "data-nc-theme": tone,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            title && /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold", children: title }),
            description && /* @__PURE__ */ jsx("p", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: description })
          ] }),
          actions && /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3", children: actions })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 grid gap-4 md:grid-cols-[minmax(0,1fr)_auto]", children: [
          /* @__PURE__ */ jsx(
            CraftInput,
            {
              type: "search",
              placeholder: searchPlaceholder,
              value: searchValue != null ? searchValue : "",
              onChange: (event) => onSearchChange == null ? void 0 : onSearchChange(event.target.value),
              tone
            }
          ),
          filters && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center gap-3", children: filters })
        ] })
      ]
    }
  );
}

// src/components/craft-table-toolbar.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function CraftTableToolbar({
  title,
  description,
  searchValue,
  onSearchChange,
  searchPlaceholder = "Search table...",
  actions,
  filters,
  bulkActions,
  tone,
  className
}) {
  return /* @__PURE__ */ jsxs2(
    "div",
    {
      className: cn(
        "rounded-3xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] p-4 text-[rgb(var(--nc-fg))] shadow-[0_12px_36px_rgba(0,0,0,0.2)] backdrop-blur-2xl",
        className
      ),
      "data-nc-theme": tone,
      children: [
        /* @__PURE__ */ jsxs2("div", { className: "flex flex-wrap items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxs2("div", { children: [
            title && /* @__PURE__ */ jsx2("h3", { className: "text-lg font-semibold", children: title }),
            description && /* @__PURE__ */ jsx2("p", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: description })
          ] }),
          actions && /* @__PURE__ */ jsx2("div", { className: "flex items-center gap-3", children: actions })
        ] }),
        /* @__PURE__ */ jsxs2("div", { className: "mt-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto]", children: [
          /* @__PURE__ */ jsx2(
            CraftInput,
            {
              type: "search",
              placeholder: searchPlaceholder,
              value: searchValue != null ? searchValue : "",
              onChange: (event) => onSearchChange == null ? void 0 : onSearchChange(event.target.value),
              tone
            }
          ),
          /* @__PURE__ */ jsxs2("div", { className: "flex flex-wrap items-center gap-3", children: [
            filters,
            bulkActions
          ] })
        ] })
      ]
    }
  );
}

// src/components/craft-pagination.tsx
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
function getPageNumbers(pageIndex, pageCount, maxButtons = 5) {
  if (pageCount <= maxButtons) {
    return Array.from({ length: pageCount }, (_, i) => i);
  }
  const pages = [];
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
function CraftPagination({
  pageIndex,
  pageCount,
  onPageChange,
  canPrevious = pageIndex > 0,
  canNext = pageIndex < pageCount - 1,
  pageSize,
  pageSizeOptions = [10, 20, 50],
  onPageSizeChange,
  tone,
  className
}) {
  const pages = getPageNumbers(pageIndex, pageCount);
  return /* @__PURE__ */ jsxs3(
    "div",
    {
      className: cn(
        "flex flex-wrap items-center justify-between gap-4",
        className
      ),
      "data-nc-theme": tone,
      children: [
        /* @__PURE__ */ jsxs3("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx3(
            "button",
            {
              type: "button",
              className: cn(
                "rounded-xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] px-3 py-2 text-xs text-[rgb(var(--nc-fg))] transition",
                "hover:bg-[rgb(var(--nc-surface)/0.2)]",
                !canPrevious && "opacity-50 cursor-not-allowed"
              ),
              onClick: () => onPageChange(Math.max(pageIndex - 1, 0)),
              disabled: !canPrevious,
              children: "Prev"
            }
          ),
          pages.map(
            (page, index) => page === "ellipsis" ? /* @__PURE__ */ jsx3("span", { className: "px-2 text-[rgb(var(--nc-fg-muted))]", children: "..." }, `ellipsis-${index}`) : /* @__PURE__ */ jsx3(
              "button",
              {
                type: "button",
                className: cn(
                  "rounded-xl border px-3 py-2 text-xs transition",
                  page === pageIndex ? "border-[rgb(var(--nc-accent-1)/0.6)] bg-[rgb(var(--nc-accent-1)/0.2)] text-[rgb(var(--nc-fg))]" : "border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] text-[rgb(var(--nc-fg-muted))] hover:text-[rgb(var(--nc-fg))] hover:bg-[rgb(var(--nc-surface)/0.2)]"
                ),
                onClick: () => onPageChange(page),
                children: page + 1
              },
              page
            )
          ),
          /* @__PURE__ */ jsx3(
            "button",
            {
              type: "button",
              className: cn(
                "rounded-xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] px-3 py-2 text-xs text-[rgb(var(--nc-fg))] transition",
                "hover:bg-[rgb(var(--nc-surface)/0.2)]",
                !canNext && "opacity-50 cursor-not-allowed"
              ),
              onClick: () => onPageChange(Math.min(pageIndex + 1, pageCount - 1)),
              disabled: !canNext,
              children: "Next"
            }
          )
        ] }),
        onPageSizeChange && /* @__PURE__ */ jsxs3("div", { className: "flex items-center gap-2 text-xs text-[rgb(var(--nc-fg-muted))]", children: [
          /* @__PURE__ */ jsx3("span", { children: "Rows" }),
          /* @__PURE__ */ jsx3(
            "select",
            {
              className: "rounded-xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] px-2 py-1 text-xs text-[rgb(var(--nc-fg))]",
              value: pageSize,
              onChange: (event) => onPageSizeChange(Number(event.target.value)),
              children: pageSizeOptions.map((size) => /* @__PURE__ */ jsx3("option", { value: size, children: size }, size))
            }
          )
        ] })
      ]
    }
  );
}

// src/components/craft-data-table.tsx
import * as React from "react";
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
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
  const emptyContent = emptyState != null ? emptyState : /* @__PURE__ */ jsx4("div", { className: "text-center text-sm text-[rgb(var(--nc-fg-muted))]", children: "No results found." });
  const resolvedShowGlobalFilter = showGlobalFilter != null ? showGlobalFilter : enableFiltering && !toolbar;
  const setGlobalFilter = (next) => {
    if (globalFilter === void 0) setInternalGlobalFilter(next);
    onGlobalFilterChange == null ? void 0 : onGlobalFilterChange(next);
  };
  return /* @__PURE__ */ jsxs4("div", { className: cn("space-y-4", className), "data-nc-theme": tone, children: [
    toolbar,
    resolvedShowGlobalFilter && /* @__PURE__ */ jsxs4("div", { className: "flex items-center justify-between gap-3 rounded-2xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] px-3 py-2 text-sm text-[rgb(var(--nc-fg))]", children: [
      /* @__PURE__ */ jsx4("span", { className: "text-xs text-[rgb(var(--nc-fg-muted))]", children: "Global filter" }),
      /* @__PURE__ */ jsx4(
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
    enableColumnVisibility && /* @__PURE__ */ jsxs4("div", { className: "relative flex justify-end", children: [
      /* @__PURE__ */ jsx4(
        "button",
        {
          type: "button",
          className: "rounded-xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] px-3 py-2 text-xs text-[rgb(var(--nc-fg))] transition hover:bg-[rgb(var(--nc-surface)/0.2)]",
          onClick: () => setShowColumns((prev) => !prev),
          children: "Columns"
        }
      ),
      showColumns && /* @__PURE__ */ jsx4("div", { className: "absolute right-0 top-10 z-20 w-48 rounded-2xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.2)] p-3 shadow-[0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur-2xl", children: /* @__PURE__ */ jsx4("div", { className: "grid gap-2", children: columns.map((column) => /* @__PURE__ */ jsxs4(
        "label",
        {
          className: "flex items-center gap-2 text-xs text-[rgb(var(--nc-fg))]",
          children: [
            /* @__PURE__ */ jsx4(
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
    /* @__PURE__ */ jsx4("div", { className: "overflow-hidden rounded-3xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.08)] shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl", children: /* @__PURE__ */ jsxs4("table", { className: "w-full border-collapse text-left text-sm", children: [
      /* @__PURE__ */ jsx4("thead", { className: "bg-[rgb(var(--nc-surface)/0.12)] text-[rgb(var(--nc-fg-muted))]", children: /* @__PURE__ */ jsxs4("tr", { children: [
        enableRowSelection && /* @__PURE__ */ jsx4("th", { className: "w-12 px-4 py-3", children: /* @__PURE__ */ jsx4(
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
          return /* @__PURE__ */ jsxs4(
            "th",
            {
              className: cn(
                "px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em]",
                column.headerClassName
              ),
              style: { width: column.width },
              children: [
                /* @__PURE__ */ jsxs4(
                  "button",
                  {
                    type: "button",
                    className: cn(
                      "flex items-center gap-2",
                      enableSorting && column.sortable !== false ? "cursor-pointer" : "cursor-default"
                    ),
                    onClick: () => toggleSort(column),
                    children: [
                      /* @__PURE__ */ jsx4("span", { children: column.header }),
                      (resolvedSort == null ? void 0 : resolvedSort.id) === column.id && /* @__PURE__ */ jsx4("span", { className: "text-[rgb(var(--nc-accent-1))]", children: resolvedSort.desc ? "\u2193" : "\u2191" })
                    ]
                  }
                ),
                enableFiltering && column.filterable !== false && /* @__PURE__ */ jsx4(
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
      /* @__PURE__ */ jsxs4("tbody", { className: "text-[rgb(var(--nc-fg))]", children: [
        loading && /* @__PURE__ */ jsx4("tr", { children: /* @__PURE__ */ jsx4(
          "td",
          {
            colSpan: visibleColumns.length + (enableRowSelection ? 1 : 0),
            className: "px-4 py-10 text-center text-sm text-[rgb(var(--nc-fg-muted))]",
            children: /* @__PURE__ */ jsxs4("span", { className: "inline-flex items-center gap-2", children: [
              /* @__PURE__ */ jsx4("span", { className: "h-4 w-4 animate-spin rounded-full border-2 border-[rgb(var(--nc-fg-muted))] border-t-transparent" }),
              "Loading data..."
            ] })
          }
        ) }),
        !loading && pagedData.length === 0 && /* @__PURE__ */ jsx4("tr", { children: /* @__PURE__ */ jsx4(
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
          return /* @__PURE__ */ jsxs4(
            "tr",
            {
              className: cn(
                "border-t border-[rgb(var(--nc-border)/0.15)]",
                isSelected && "bg-[rgb(var(--nc-accent-1)/0.08)]"
              ),
              children: [
                enableRowSelection && /* @__PURE__ */ jsx4("td", { className: "px-4 py-4", children: /* @__PURE__ */ jsx4(
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
                  return /* @__PURE__ */ jsx4(
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
    enablePagination && /* @__PURE__ */ jsx4(
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
  CraftFilterBar,
  CraftTableToolbar,
  CraftPagination,
  CraftDataTable
};
//# sourceMappingURL=chunk-ZRV4Y374.js.map