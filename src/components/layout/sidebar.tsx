import * as React from "react";

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
};

export function Sidebar({ className, title, items, footer, ...props }: SidebarProps) {
  return (
    <aside
      className={cn(
        "flex h-full w-full flex-col gap-6 rounded-3xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.08)] p-6 text-[rgb(var(--nc-fg))] backdrop-blur-xl",
        className
      )}
      {...props}
    >
      {title && <div className="text-lg font-semibold">{title}</div>}
      <nav className="flex flex-col gap-2">
        {items.map((item, index) => (
          <a
            key={`${item.label}-${index}`}
            href={item.href ?? "#"}
            className={cn(
              "flex items-center gap-3 rounded-2xl px-3 py-2 text-sm transition",
              item.active
                ? "bg-[rgb(var(--nc-accent-1)/0.25)] text-[rgb(var(--nc-fg))]"
                : "text-[rgb(var(--nc-fg-muted))] hover:bg-[rgb(var(--nc-surface)/0.12)] hover:text-[rgb(var(--nc-fg))]"
            )}
          >
            {typeof item.icon === "string" ? (
              <CraftIcon name={item.icon} size="lg" />
            ) : (
              item.icon
            )}
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
      {footer && <div className="mt-auto pt-4">{footer}</div>}
    </aside>
  );
}
