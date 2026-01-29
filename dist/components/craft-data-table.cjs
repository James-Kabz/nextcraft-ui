"use strict";
"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var craft_data_table_exports = {};
__export(craft_data_table_exports, {
  CraftDataTable: () => CraftDataTable
});
module.exports = __toCommonJS(craft_data_table_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"), 1);
var import_cn = require("../utils/cn");
var import_craft_button = require("../components/craft-button");
var import_craft_checkbox = require("../components/craft-checkbox");
var import_craft_icon = require("../components/craft-icon");
var import_craft_modal = require("../components/craft-modal");
var import_craft_tooltip = require("../components/craft-tooltip");
var import_craft_loader = require("../components/craft-loader");
var import_craft_data_table_header = require("../components/craft-data-table-header");
var import_craft_data_table_pagination = require("../components/craft-data-table-pagination");
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
  const rowClassNames = (isSelected, rowId, index) => (0, import_cn.cn)(
    "transition-colors",
    variant === "bordered" && "border-b border-[rgb(var(--nc-border)/0.2)]",
    variant === "minimal" && "border-b border-[rgb(var(--nc-border)/0.15)]",
    striped && index % 2 === 1 && "bg-[rgb(var(--nc-surface)/0.04)]",
    hoverable && !clickableRows && "hover:bg-[rgb(var(--nc-surface)/0.12)]",
    clickableRows && "cursor-pointer hover:bg-[rgb(var(--nc-surface)/0.16)]",
    isSelected && "bg-[rgb(var(--nc-accent-1)/0.12)]",
    rowLoading[rowId] && "opacity-60"
  );
  const containerClasses = (0, import_cn.cn)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: (0, import_cn.cn)("space-y-4", className), "data-nc-theme": tone, children: [
    toolbar,
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_craft_data_table_header.CraftDataTableHeader,
      {
        title,
        description,
        variant: headerVariant,
        padding: headerPadding,
        tone,
        filters: resolvedShowGlobalFilter ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-2 rounded-2xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] px-3 py-2 text-xs text-[rgb(var(--nc-fg))]", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_craft_icon.CraftIcon, { name: "search", className: "h-4 w-4 text-[rgb(var(--nc-fg-muted))]" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
        actions: enableColumnVisibility ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_craft_button.CraftButton,
            {
              type: "button",
              variant: "ghost",
              size: "sm",
              onClick: () => setShowColumns((prev) => !prev),
              children: "Columns"
            }
          ),
          showColumns && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-0 top-12 z-20 w-56 rounded-2xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.2)] p-3 shadow-[0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur-2xl", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid gap-2", children: columns.map((column) => {
            var _a, _b;
            return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              "label",
              {
                className: "flex items-center gap-2 text-xs text-[rgb(var(--nc-fg))]",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: containerClasses, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_craft_loader.CraftLoader,
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
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (0, import_cn.cn)("overflow-x-auto", (loading || dataLoading) && "opacity-60"), children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", { className: "min-w-full border-collapse text-left text-sm", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { className: "bg-[rgb(var(--nc-surface)/0.12)] text-[rgb(var(--nc-fg-muted))]", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
            resolvedSelectable && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: (0, import_cn.cn)("w-12", headerPaddingClasses[density]), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex items-center justify-center", children: bulkLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_craft_loader.CraftLoader, { loading: true, type: "spin", size: "small", color: loadingColor }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_craft_checkbox.CraftCheckbox,
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
              return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                "th",
                {
                  className: (0, import_cn.cn)(
                    headerPaddingClasses[density],
                    "text-xs font-semibold uppercase tracking-[0.2em]",
                    column.headerClassName
                  ),
                  style: { width: column.width },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                      "button",
                      {
                        type: "button",
                        className: (0, import_cn.cn)(
                          "flex w-full items-center gap-2",
                          enableSorting && column.sortable !== false ? "cursor-pointer" : "cursor-default"
                        ),
                        onClick: () => toggleSort(column),
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: headerLabel }),
                          sortLoading && (resolvedSort == null ? void 0 : resolvedSort.id) === column.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_craft_loader.CraftLoader, { loading: true, type: "spin", size: "small", color: loadingColor }) : null,
                          (resolvedSort == null ? void 0 : resolvedSort.id) === column.id && !sortLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-[rgb(var(--nc-accent-1))]", children: resolvedSort.desc ? "\u2193" : "\u2191" }) : null
                        ]
                      }
                    ),
                    enableFiltering && column.filterable !== false && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
            shouldShowActionsColumn && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: (0, import_cn.cn)(headerPaddingClasses[density], "text-xs uppercase"), children: "Actions" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { className: "text-[rgb(var(--nc-fg))]", children: showSkeleton && (loading || dataLoading) ? Array.from({ length: skeletonRows }).map((_, rowIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { className: "animate-pulse", children: [
            resolvedSelectable && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { className: (0, import_cn.cn)(headerPaddingClasses[density], "w-12"), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-4 rounded bg-[rgb(var(--nc-border)/0.3)]" }) }),
            visibleColumns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { className: (0, import_cn.cn)(densityPadding[density]), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-3/4 rounded bg-[rgb(var(--nc-border)/0.3)]" }) }, column.id)),
            shouldShowActionsColumn && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { className: (0, import_cn.cn)(densityPadding[density]), children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-6 w-6 rounded bg-[rgb(var(--nc-border)/0.3)]" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-6 w-6 rounded bg-[rgb(var(--nc-border)/0.3)]" })
            ] }) })
          ] }, `skeleton-${rowIndex}`)) : pagedData.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { colSpan: totalColumns, className: (0, import_cn.cn)(densityPadding[density], "py-12"), children: emptyState != null ? emptyState : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-col items-center justify-center text-center", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_craft_icon.CraftIcon,
              {
                name: "search",
                className: "mb-4 h-12 w-12 text-[rgb(var(--nc-fg-muted))]"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-base font-semibold text-[rgb(var(--nc-fg))]", children: emptyText }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: emptySubtitle })
          ] }) }) }) : pagedData.map((row, rowIndex) => {
            const rowId = rowIdFor(row, pageStartIndex + rowIndex);
            const isSelected = Boolean(resolvedSelection[rowId]);
            return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              "tr",
              {
                className: rowClassNames(isSelected, rowId, rowIndex),
                onClick: () => {
                  if (!clickableRows) return;
                  onRowClick == null ? void 0 : onRowClick({ item: row, index: rowIndex });
                },
                children: [
                  resolvedSelectable && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { className: (0, import_cn.cn)(densityPadding[density], "w-12"), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    import_craft_checkbox.CraftCheckbox,
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
                      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        "td",
                        {
                          className: (0, import_cn.cn)(
                            densityPadding[density],
                            column.align === "center" && "text-center",
                            column.align === "right" && "text-right",
                            column.cellClassName
                          ),
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
                    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "td",
                      {
                        className: (0, import_cn.cn)(
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
                  shouldShowActionsColumn && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { className: (0, import_cn.cn)(densityPadding[density]), children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex items-center justify-center gap-2", children: getVisibleActions(row).map((action) => {
                    const tooltip = typeof action.tooltip === "function" ? action.tooltip(row) : action.tooltip;
                    const className2 = typeof action.className === "function" ? action.className(row) : action.className;
                    const button = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      import_craft_button.CraftButton,
                      {
                        type: "button",
                        size: "sm",
                        variant: resolveActionVariant(action.variant),
                        disabled: isActionDisabled(action, row),
                        className: (0, import_cn.cn)("h-8 w-8 p-0", className2),
                        onClick: (event) => {
                          event.stopPropagation();
                          handleActionClick(action, row);
                        },
                        children: action.icon ? typeof action.icon === "string" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_craft_icon.CraftIcon, { name: action.icon, className: "h-4 w-4" }) : action.icon : action.label ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-[11px]", children: action.label }) : null
                      }
                    );
                    if (tooltip) {
                      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_craft_tooltip.CraftTooltip, { content: tooltip, children: button }, action.key);
                    }
                    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(React.Fragment, { children: button }, action.key);
                  }) }) })
                ]
              },
              rowId
            );
          }) })
        ] }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_craft_data_table_pagination.CraftDataTablePagination,
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_craft_modal.CraftModal, { open: showModal, onOpenChange: setShowModal, title: "Full Text", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "space-y-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: "Full content" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "text-sm text-[rgb(var(--nc-fg))] whitespace-pre-wrap wrap-break-words", children: modalContent }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex justify-end", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_craft_button.CraftButton, { type: "button", variant: "ghost", onClick: closeModal, children: "Close" }) })
    ] }) })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CraftDataTable
});
//# sourceMappingURL=craft-data-table.cjs.map