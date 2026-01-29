import * as React from "react";

import { cn } from "@/utils/cn";

export type BreadcrumbItem = {
  label: React.ReactNode;
  href?: string;
};

export type BreadcrumbsProps = React.HTMLAttributes<HTMLElement> & {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ className, items, ...props }: BreadcrumbsProps) {
  return (
    <nav
      className={cn(
        "flex items-center text-xs text-[rgb(var(--nc-fg-muted))]",
        className
      )}
      {...props}
    >
      {items.map((item, index) => {
        const content = item.href ? (
          <a href={item.href} className="transition hover:text-[rgb(var(--nc-fg))]">
            {item.label}
          </a>
        ) : (
          <span className="text-[rgb(var(--nc-fg))]">{item.label}</span>
        );

        return (
          <span key={`${item.label}-${index}`} className="flex items-center">
            {content}
            {index < items.length - 1 && (
              <span className="mx-2 text-[rgb(var(--nc-fg-soft))]">/</span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
