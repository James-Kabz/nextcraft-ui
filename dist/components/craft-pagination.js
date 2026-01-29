"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { cn } from "../utils/cn";
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
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "flex flex-wrap items-center justify-between gap-4",
        className
      ),
      "data-nc-theme": tone,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(
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
            (page, index) => page === "ellipsis" ? /* @__PURE__ */ jsx("span", { className: "px-2 text-[rgb(var(--nc-fg-muted))]", children: "..." }, `ellipsis-${index}`) : /* @__PURE__ */ jsx(
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
          /* @__PURE__ */ jsx(
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
        onPageSizeChange && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs text-[rgb(var(--nc-fg-muted))]", children: [
          /* @__PURE__ */ jsx("span", { children: "Rows" }),
          /* @__PURE__ */ jsx(
            "select",
            {
              className: "rounded-xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] px-2 py-1 text-xs text-[rgb(var(--nc-fg))]",
              value: pageSize,
              onChange: (event) => onPageSizeChange(Number(event.target.value)),
              children: pageSizeOptions.map((size) => /* @__PURE__ */ jsx("option", { value: size, children: size }, size))
            }
          )
        ] })
      ]
    }
  );
}
export {
  CraftPagination
};
//# sourceMappingURL=craft-pagination.js.map