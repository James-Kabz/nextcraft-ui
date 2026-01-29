"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../utils/cn";
import { CraftButton } from "../components/craft-button";
import { CraftCheckbox } from "../components/craft-checkbox";
import { CraftIcon } from "../components/craft-icon";
import { CraftModal } from "../components/craft-modal";
import { CraftTooltip } from "../components/craft-tooltip";
import { CraftLoader } from "../components/craft-loader";
import { CraftDataTableHeader } from "../components/craft-data-table-header";
import { CraftDataTablePagination } from "../components/craft-data-table-pagination";
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
function truncateText(text, maxWords) {
  const words = text.split(" ");
  if (words.length <= maxWords) return text;
  return `${words.slice(0, maxWords).join(" ")}...`;
}
function resolveActionVariant(variant) {
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
function CraftDataTable({
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
  loadingBackground = "rgba(0, 0, 0, 0.35)",
  showSkeleton = true,
  skeletonRows = 5,
  truncateWords = 10,
  enableTextModal = true,
  onRowClick
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
  const [showModal, setShowModal] = React.useState(false);
  const [modalContent, setModalContent] = React.useState("");
  const resolvedSort = sortBy != null ? sortBy : internalSort;
  const resolvedFilters = filters != null ? filters : internalFilters;
  const resolvedGlobalFilter = globalFilter != null ? globalFilter : internalGlobalFilter;
  const resolvedVisibility = columnVisibility != null ? columnVisibility : internalVisibility;
  const resolvedSelection = selectedRowIds != null ? selectedRowIds : internalSelection;
  const resolvedPageIndex = pageIndex != null ? pageIndex : internalPageIndex;
  const resolvedSelectable = selectable != null ? selectable : enableRowSelection;
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
      if (getRowId) return getRowId(row, index);
      if (rowKey) return String((_a = row[rowKey]) != null ? _a : index);
      return String(index);
    },
    [getRowId, rowKey]
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
  const resolvedShowGlobalFilter = showGlobalFilter != null ? showGlobalFilter : enableFiltering && !toolbar;
  const setGlobalFilter = (next) => {
    if (globalFilter === void 0) setInternalGlobalFilter(next);
    onGlobalFilterChange == null ? void 0 : onGlobalFilterChange(next);
  };
  const shouldShowActionsColumn = React.useMemo(() => {
    if (!showActionsColumn) return false;
    if (!actions || actions.length === 0) return false;
    return actions.some((action) => {
      if (action.permission === void 0) return true;
      if (typeof action.permission === "boolean") return action.permission;
      return true;
    });
  }, [actions, showActionsColumn]);
  const getVisibleActions = (item) => actions.filter((action) => {
    if (action.permission !== void 0) {
      if (typeof action.permission === "boolean" && !action.permission) return false;
      if (typeof action.permission === "function" && !action.permission(item)) return false;
    }
    if (action.visible && typeof action.visible === "function") {
      return action.visible(item);
    }
    if (typeof action.visible === "boolean") return action.visible;
    return true;
  });
  const isActionDisabled = (action, item) => {
    if (action.disabled && typeof action.disabled === "function") return action.disabled(item);
    if (typeof action.disabled === "boolean") return action.disabled;
    return false;
  };
  const handleActionClick = (action, item) => {
    var _a;
    if (isActionDisabled(action, item)) return;
    (_a = action.onClick) == null ? void 0 : _a.call(action, item);
  };
  const totalColumns = visibleColumns.length + (resolvedSelectable ? 1 : 0) + (shouldShowActionsColumn ? 1 : 0);
  const densityPadding = {
    compact: "px-4 py-2",
    normal: "px-6 py-4",
    comfortable: "px-8 py-6"
  };
  const headerPaddingClasses = {
    compact: "px-4 py-2",
    normal: "px-6 py-3",
    comfortable: "px-8 py-4"
  };
  const rowClassNames = (isSelected, rowId, index) => cn(
    "transition-colors",
    variant === "bordered" && "border-b border-[rgb(var(--nc-border)/0.2)]",
    variant === "minimal" && "border-b border-[rgb(var(--nc-border)/0.15)]",
    striped && index % 2 === 1 && "bg-[rgb(var(--nc-surface)/0.04)]",
    hoverable && !clickableRows && "hover:bg-[rgb(var(--nc-surface)/0.12)]",
    clickableRows && "cursor-pointer hover:bg-[rgb(var(--nc-surface)/0.16)]",
    isSelected && "bg-[rgb(var(--nc-accent-1)/0.12)]",
    rowLoading[rowId] && "opacity-60"
  );
  const containerClasses = cn(
    "overflow-hidden rounded-3xl border border-[rgb(var(--nc-border)/0.3)]",
    "bg-[rgb(var(--nc-surface)/0.08)] shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl",
    variant === "minimal" && "border-transparent bg-transparent shadow-none"
  );
  const openModal = (content) => {
    if (!enableTextModal) return;
    setModalContent(content);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    setModalContent("");
  };
  return /* @__PURE__ */ jsxs("div", { className: cn("space-y-4", className), "data-nc-theme": tone, children: [
    toolbar,
    /* @__PURE__ */ jsx(
      CraftDataTableHeader,
      {
        title,
        description,
        variant: headerVariant,
        padding: headerPadding,
        tone,
        filters: resolvedShowGlobalFilter ? /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 rounded-2xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] px-3 py-2 text-xs text-[rgb(var(--nc-fg))]", children: [
          /* @__PURE__ */ jsx(CraftIcon, { name: "search", className: "h-4 w-4 text-[rgb(var(--nc-fg-muted))]" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "search",
              value: resolvedGlobalFilter,
              onChange: (event) => setGlobalFilter(event.target.value),
              placeholder: "Search all columns...",
              className: "w-full max-w-xs bg-transparent text-xs text-[rgb(var(--nc-fg))] placeholder:text-[rgb(var(--nc-fg-muted))] focus:outline-none"
            }
          )
        ] }) : null,
        actions: enableColumnVisibility ? /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            CraftButton,
            {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: () => setShowColumns((prev) => !prev),
              children: "Columns"
            }
          ),
          showColumns && /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-12 z-20 w-56 rounded-2xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.2)] p-3 shadow-[0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur-2xl", children: /* @__PURE__ */ jsx("div", { className: "grid gap-2", children: columns.map((column) => {
            var _a, _b;
            return /* @__PURE__ */ jsxs(
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
                  (_b = (_a = column.header) != null ? _a : column.label) != null ? _b : column.id
                ]
              },
              column.id
            );
          }) }) })
        ] }) : null
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: containerClasses, children: [
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(
          CraftLoader,
          {
            loading: loading || dataLoading,
            type: loadingType,
            size: loadingSize,
            color: loadingColor,
            overlay: true,
            text: loadingText,
            textPosition: loadingTextPosition,
            backgroundColor: loadingBackground
          }
        ),
        /* @__PURE__ */ jsx("div", { className: cn("overflow-x-auto", (loading || dataLoading) && "opacity-60"), children: /* @__PURE__ */ jsxs("table", { className: "min-w-full border-collapse text-left text-sm", children: [
          /* @__PURE__ */ jsx("thead", { className: "bg-[rgb(var(--nc-surface)/0.12)] text-[rgb(var(--nc-fg-muted))]", children: /* @__PURE__ */ jsxs("tr", { children: [
            resolvedSelectable && /* @__PURE__ */ jsx("th", { className: cn("w-12", headerPaddingClasses[density]), children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: bulkLoading ? /* @__PURE__ */ jsx(CraftLoader, { loading: true, type: "spin", size: "small", color: loadingColor }) : /* @__PURE__ */ jsx(
              CraftCheckbox,
              {
                ref: headerCheckboxRef,
                checked: allSelected,
                onChange: (event) => {
                  const next = { ...resolvedSelection };
                  pageRowIds.forEach((id) => {
                    next[id] = event.target.checked;
                  });
                  setSelection(next);
                }
              }
            ) }) }),
            visibleColumns.map((column) => {
              var _a, _b, _c;
              const headerLabel = (_b = (_a = column.header) != null ? _a : column.label) != null ? _b : column.id;
              return /* @__PURE__ */ jsxs(
                "th",
                {
                  className: cn(
                    headerPaddingClasses[density],
                    "text-xs font-semibold uppercase tracking-[0.2em]",
                    column.headerClassName
                  ),
                  style: { width: column.width },
                  children: [
                    /* @__PURE__ */ jsxs(
                      "button",
                      {
                        type: "button",
                        className: cn(
                          "flex w-full items-center gap-2",
                          enableSorting && column.sortable !== false ? "cursor-pointer" : "cursor-default"
                        ),
                        onClick: () => toggleSort(column),
                        children: [
                          /* @__PURE__ */ jsx("span", { children: headerLabel }),
                          sortLoading && (resolvedSort == null ? void 0 : resolvedSort.id) === column.id ? /* @__PURE__ */ jsx(CraftLoader, { loading: true, type: "spin", size: "small", color: loadingColor }) : null,
                          (resolvedSort == null ? void 0 : resolvedSort.id) === column.id && !sortLoading ? /* @__PURE__ */ jsx("span", { className: "text-[rgb(var(--nc-accent-1))]", children: resolvedSort.desc ? "\u2193" : "\u2191" }) : null
                        ]
                      }
                    ),
                    enableFiltering && column.filterable !== false && /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "text",
                        value: (_c = resolvedFilters[column.id]) != null ? _c : "",
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
            }),
            shouldShowActionsColumn && /* @__PURE__ */ jsx("th", { className: cn(headerPaddingClasses[density], "text-xs uppercase"), children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { className: "text-[rgb(var(--nc-fg))]", children: showSkeleton && (loading || dataLoading) ? Array.from({ length: skeletonRows }).map((_, rowIndex) => /* @__PURE__ */ jsxs("tr", { className: "animate-pulse", children: [
            resolvedSelectable && /* @__PURE__ */ jsx("td", { className: cn(headerPaddingClasses[density], "w-12"), children: /* @__PURE__ */ jsx("div", { className: "h-4 w-4 rounded bg-[rgb(var(--nc-border)/0.3)]" }) }),
            visibleColumns.map((column) => /* @__PURE__ */ jsx("td", { className: cn(densityPadding[density]), children: /* @__PURE__ */ jsx("div", { className: "h-4 w-3/4 rounded bg-[rgb(var(--nc-border)/0.3)]" }) }, column.id)),
            shouldShowActionsColumn && /* @__PURE__ */ jsx("td", { className: cn(densityPadding[density]), children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsx("div", { className: "h-6 w-6 rounded bg-[rgb(var(--nc-border)/0.3)]" }),
              /* @__PURE__ */ jsx("div", { className: "h-6 w-6 rounded bg-[rgb(var(--nc-border)/0.3)]" })
            ] }) })
          ] }, `skeleton-${rowIndex}`)) : pagedData.length === 0 ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: totalColumns, className: cn(densityPadding[density], "py-12"), children: emptyState != null ? emptyState : /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center text-center", children: [
            /* @__PURE__ */ jsx(
              CraftIcon,
              {
                name: "search",
                className: "mb-4 h-12 w-12 text-[rgb(var(--nc-fg-muted))]"
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-base font-semibold text-[rgb(var(--nc-fg))]", children: emptyText }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: emptySubtitle })
          ] }) }) }) : pagedData.map((row, rowIndex) => {
            const rowId = rowIdFor(row, pageStartIndex + rowIndex);
            const isSelected = Boolean(resolvedSelection[rowId]);
            return /* @__PURE__ */ jsxs(
              "tr",
              {
                className: rowClassNames(isSelected, rowId, rowIndex),
                onClick: () => {
                  if (!clickableRows) return;
                  onRowClick == null ? void 0 : onRowClick({ item: row, index: rowIndex });
                },
                children: [
                  resolvedSelectable && /* @__PURE__ */ jsx("td", { className: cn(densityPadding[density], "w-12"), children: /* @__PURE__ */ jsx(
                    CraftCheckbox,
                    {
                      checked: isSelected,
                      onChange: (event) => setSelection({
                        ...resolvedSelection,
                        [rowId]: event.target.checked
                      })
                    }
                  ) }),
                  visibleColumns.map((column) => {
                    var _a, _b, _c;
                    const rawValue = getColumnValue(column, row);
                    const formatted = column.formatter ? column.formatter(rawValue, row) : rawValue;
                    const content = column.cell ? column.cell(row) : formatted != null ? formatted : "";
                    if (enableTextModal && !column.cell && typeof formatted === "string" && ((_a = column.truncate) != null ? _a : true) && formatted.split(" ").length > ((_b = column.maxWords) != null ? _b : truncateWords)) {
                      const maxWords = (_c = column.maxWords) != null ? _c : truncateWords;
                      return /* @__PURE__ */ jsx(
                        "td",
                        {
                          className: cn(
                            densityPadding[density],
                            column.align === "center" && "text-center",
                            column.align === "right" && "text-right",
                            column.cellClassName
                          ),
                          children: /* @__PURE__ */ jsx(
                            "button",
                            {
                              type: "button",
                              className: "text-[rgb(var(--nc-accent-1))] hover:text-[rgb(var(--nc-accent-2))]",
                              onClick: () => openModal(formatted),
                              children: truncateText(formatted, maxWords)
                            }
                          )
                        },
                        column.id
                      );
                    }
                    return /* @__PURE__ */ jsx(
                      "td",
                      {
                        className: cn(
                          densityPadding[density],
                          column.align === "center" && "text-center",
                          column.align === "right" && "text-right",
                          column.cellClassName
                        ),
                        children: content
                      },
                      column.id
                    );
                  }),
                  shouldShowActionsColumn && /* @__PURE__ */ jsx("td", { className: cn(densityPadding[density]), children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center gap-2", children: getVisibleActions(row).map((action) => {
                    const tooltip = typeof action.tooltip === "function" ? action.tooltip(row) : action.tooltip;
                    const className2 = typeof action.className === "function" ? action.className(row) : action.className;
                    const button = /* @__PURE__ */ jsx(
                      CraftButton,
                      {
                        type: "button",
                        size: "sm",
                        variant: resolveActionVariant(action.variant),
                        disabled: isActionDisabled(action, row),
                        className: cn("h-8 w-8 p-0", className2),
                        onClick: (event) => {
                          event.stopPropagation();
                          handleActionClick(action, row);
                        },
                        children: action.icon ? typeof action.icon === "string" ? /* @__PURE__ */ jsx(CraftIcon, { name: action.icon, className: "h-4 w-4" }) : action.icon : action.label ? /* @__PURE__ */ jsx("span", { className: "text-[11px]", children: action.label }) : null
                      }
                    );
                    if (tooltip) {
                      return /* @__PURE__ */ jsx(CraftTooltip, { content: tooltip, children: button }, action.key);
                    }
                    return /* @__PURE__ */ jsx(React.Fragment, { children: button }, action.key);
                  }) }) })
                ]
              },
              rowId
            );
          }) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx(
        CraftDataTablePagination,
        {
          currentPage: resolvedPageIndex,
          totalPages: resolvedPageCount,
          total: filteredData.length,
          pageSize,
          selectable: Boolean(resolvedSelectable),
          selectedCount: Object.values(resolvedSelection).filter(Boolean).length,
          showPagination: enablePagination,
          loading: paginationLoading,
          disabled: loading || dataLoading,
          onPageChange: setPageIndex,
          onPageSizeChange,
          variant: paginationVariant,
          padding: paginationPadding,
          tone
        }
      )
    ] }),
    /* @__PURE__ */ jsx(CraftModal, { open: showModal, onOpenChange: setShowModal, title: "Full Text", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: "Full content" }),
      /* @__PURE__ */ jsx("div", { className: "text-sm text-[rgb(var(--nc-fg))] whitespace-pre-wrap wrap-break-words", children: modalContent }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(CraftButton, { type: "button", variant: "ghost", onClick: closeModal, children: "Close" }) })
    ] }) })
  ] });
}
export {
  CraftDataTable
};
//# sourceMappingURL=craft-data-table.js.map