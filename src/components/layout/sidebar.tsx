"use client";

import * as React from "react";
import Link from "next/link";

import { CraftIcon } from "@/components/craft-icon";
import { cn } from "@/utils/cn";

export type SidebarItem = {
  label: React.ReactNode;
  href?: string;
  icon?: React.ReactNode | string;
  active?: boolean;
};

export type SidebarProps = React.HTMLAttributes<HTMLElement> & {
  title?: React.ReactNode;
  items: SidebarItem[];
  footer?: React.ReactNode;
  hoverExpand?: boolean;
};

export function Sidebar({
  className,
  title,
  items,
  footer,
  hoverExpand = true,
  ...props
}: SidebarProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <aside
      className={cn(
        "group flex h-full flex-col gap-4 rounded-2xl border border-[rgb(var(--nc-border)/0.2)] bg-[rgb(var(--nc-surface)/0.04)] p-3 text-[rgb(var(--nc-fg))] backdrop-blur-xl transition-all duration-300 ease-in-out",
        hoverExpand && !isExpanded ? "w-16 hover:w-56" : "w-56",
        hoverExpand
          ? "fixed left-0 top-0 z-50 shadow-[0_16px_40px_rgba(0,0,0,0.18)]"
          : "relative",
        className
      )}
      {...props}
    >
      {title && (
        <div className="flex items-center gap-3 px-1">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[rgb(var(--nc-accent-1)/0.18)] text-2xl font-semibold">
            {typeof title === "string" ? title.slice(0, 1) : title}
          </div>
          <span
            className={cn(
              "truncate text-sm font-semibold transition-all duration-300 ease-in-out",
              hoverExpand && !isExpanded
                ? "max-w-0 opacity-0 group-hover:max-w-40 group-hover:opacity-100"
                : "max-w-40 opacity-100"
            )}
          >
            {title}
          </span>
        </div>
      )}

      {hoverExpand && (
        <button
          onClick={toggleSidebar}
          className={cn(
            "flex items-center rounded-xl px-2 py-2 text-sm transition-all duration-300 ease-in-out",
            !isExpanded
              ? "justify-center group-hover:justify-start group-hover:gap-3 group-hover:px-3"
              : "justify-start gap-3 px-3",
            "hover:bg-[rgb(var(--nc-surface)/0.1)]",
            isExpanded
              ? "text-[rgb(var(--nc-fg))] bg-[rgb(var(--nc-surface)/0.08)]"
              : "text-[rgb(var(--nc-fg-muted))]"
          )}
          aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
        >
          <div className="flex shrink-0 items-center justify-center transition-all duration-300 ease-in-out">
            <CraftIcon name="bars" size="2xl" />
          </div>
          <span
            className={cn(
              "truncate whitespace-nowrap transition-all duration-300 ease-in-out",
              !isExpanded
                ? "max-w-0 opacity-0 group-hover:max-w-40 group-hover:opacity-100"
                : "max-w-40 opacity-100"
            )}
          >
            {isExpanded ? "Collapse" : "Expand"}
          </span>
        </button>
      )}

      <nav className="flex flex-col gap-1.5">
        {items.map((item, index) => (
          <Link
            key={`${item.label}-${index}`}
            href={item.href ?? "#"}
            className={cn(
              "flex items-center rounded-xl text-sm transition-all duration-300 ease-in-out",
              hoverExpand && !isExpanded
                ? "justify-center px-2 py-2 group-hover:justify-start group-hover:gap-3 group-hover:px-3"
                : "justify-start gap-3 px-3 py-2",
              item.active
                ? "bg-[rgb(var(--nc-accent-1)/0.18)] text-[rgb(var(--nc-fg))] shadow-[inset_0_0_0_1px_rgb(var(--nc-accent-1)/0.25)]"
                : "text-[rgb(var(--nc-fg-muted))] hover:bg-[rgb(var(--nc-surface)/0.1)] hover:text-[rgb(var(--nc-fg))]"
            )}
          >
            <div
              className={cn(
                "flex shrink-0 items-center justify-center transition-all duration-300 ease-in-out",
                hoverExpand && !isExpanded
                  ? "h-9 w-9 rounded-xl bg-[rgb(var(--nc-surface)/0.12)] group-hover:bg-[rgb(var(--nc-surface)/0.18)]"
                  : ""
              )}
            >
              {typeof item.icon === "string" ? (
                <CraftIcon name={item.icon} size="lg" />
              ) : (
                item.icon
              )}
            </div>
            <span
              className={cn(
                "truncate whitespace-nowrap transition-all duration-300 ease-in-out",
                hoverExpand && !isExpanded
                  ? "max-w-0 opacity-0 group-hover:max-w-40 group-hover:opacity-100"
                  : "max-w-40 opacity-100"
              )}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </nav>

      {footer && (
        <div
          className={cn(
            "mt-auto px-2 pt-3 text-xs text-[rgb(var(--nc-fg-muted))] transition-all duration-300 ease-in-out",
            hoverExpand && !isExpanded
              ? "max-w-0 opacity-0 group-hover:max-w-40 group-hover:opacity-100"
              : "max-w-40 opacity-100"
          )}
        >
          {footer}
        </div>
      )}
    </aside>
  );
}
