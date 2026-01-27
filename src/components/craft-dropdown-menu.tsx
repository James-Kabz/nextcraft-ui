"use client";

import * as React from "react";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";
import { CraftPopover } from "@/components/craft-popover";

export type CraftDropdownItem = {
  id?: string;
  label: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
  onSelect?: () => void;
  disabled?: boolean;
};

export type CraftDropdownMenuProps = {
  trigger: React.ReactNode;
  items?: CraftDropdownItem[];
  content?: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  align?: "start" | "center" | "end";
  tone?: ThemeName;
  className?: string;
  menuClassName?: string;
};

export function CraftDropdownMenu({
  trigger,
  items = [],
  content,
  open,
  defaultOpen = false,
  onOpenChange,
  align = "end",
  tone,
  className,
  menuClassName,
}: CraftDropdownMenuProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
  const isControlled = typeof open === "boolean";
  const isOpen = isControlled ? open : uncontrolledOpen;

  const setOpen = React.useCallback(
    (next: boolean) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange?.(next);
    },
    [isControlled, onOpenChange]
  );

  const menuContent =
    content ??
    (items.length ? (
      <div className={cn("space-y-1", menuClassName)} role="menu">
        {items.map((item, index) => {
          const key = item.id ?? `${index}-${String(item.label)}`;
          const itemClasses = cn(
            "flex w-full items-start gap-3 rounded-xl px-3 py-2 text-left text-sm transition",
            item.disabled
              ? "cursor-not-allowed text-[rgb(var(--nc-fg-soft))] opacity-60"
              : "text-[rgb(var(--nc-fg))] hover:bg-[rgb(var(--nc-surface)/0.12)]"
          );
          const contentNode = (
            <>
              {item.icon && <span className="mt-0.5">{item.icon}</span>}
              <span className="flex-1">
                <span className="block font-medium">{item.label}</span>
                {item.description && (
                  <span className="block text-xs text-[rgb(var(--nc-fg-muted))]">
                    {item.description}
                  </span>
                )}
              </span>
            </>
          );

          if (item.href) {
            return (
              <a
                key={key}
                href={item.href}
                className={itemClasses}
                role="menuitem"
                onClick={() => {
                  if (item.disabled) return;
                  item.onSelect?.();
                  setOpen(false);
                }}
              >
                {contentNode}
              </a>
            );
          }

          return (
            <button
              key={key}
              type="button"
              className={itemClasses}
              role="menuitem"
              onClick={() => {
                if (item.disabled) return;
                item.onSelect?.();
                setOpen(false);
              }}
            >
              {contentNode}
            </button>
          );
        })}
      </div>
    ) : null);

  return (
    <CraftPopover
      trigger={trigger}
      content={menuContent}
      open={isOpen}
      onOpenChange={setOpen}
      align={align}
      tone={tone}
      className={className}
    />
  );
}
