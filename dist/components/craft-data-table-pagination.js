"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { cn } from "../utils/cn";
import { CraftPagination } from "../components/craft-pagination";
const paddingClasses = {
  compact: "px-4 py-3",
  normal: "px-6 py-4",
  comfortable: "px-8 py-5"
};
const variantClasses = {
  default: "border-t border-[rgb(var(--nc-border)/0.35)] bg-[rgb(var(--nc-surface)/0.08)]",
  minimal: "border-t border-[rgb(var(--nc-border)/0.2)] bg-transparent"
};
function CraftDataTablePagination({
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
  footer
}) {
  if (!showPagination && !footer) return null;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "flex flex-wrap items-center justify-between gap-4",
        paddingClasses[padding],
        variantClasses[variant],
        className
      ),
      "data-nc-theme": tone,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-3 text-xs text-[rgb(var(--nc-fg-muted))]", children: [
          /* @__PURE__ */ jsxs("span", { children: [
            "Page ",
            /* @__PURE__ */ jsx("span", { className: "text-[rgb(var(--nc-fg))]", children: currentPage + 1 }),
            " of ",
            totalPages
          ] }),
          /* @__PURE__ */ jsxs("span", { children: [
            total,
            " rows"
          ] }),
          selectable ? /* @__PURE__ */ jsxs("span", { children: [
            selectedCount,
            " selected"
          ] }) : null,
          loading ? /* @__PURE__ */ jsx("span", { className: "text-[rgb(var(--nc-fg))]", children: "Loading..." }) : null
        ] }),
        footer,
        showPagination && onPageChange ? /* @__PURE__ */ jsx(
          CraftPagination,
          {
            pageIndex: currentPage,
            pageCount: totalPages,
            onPageChange,
            pageSize,
            onPageSizeChange,
            canPrevious: currentPage > 0 && !disabled,
            canNext: currentPage < totalPages - 1 && !disabled,
            tone,
            className: disabled ? "opacity-60" : void 0
          }
        ) : null
      ]
    }
  );
}
export {
  CraftDataTablePagination
};
//# sourceMappingURL=craft-data-table-pagination.js.map