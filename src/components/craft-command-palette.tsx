"use client";

import * as React from "react";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";
import { CraftInput } from "@/components/craft-input";
import { CraftModal } from "@/components/craft-modal";

export type CraftCommandItem = {
  id: string;
  label: string;
  description?: string;
  keywords?: string[];
  icon?: React.ReactNode;
  onSelect?: () => void;
  disabled?: boolean;
};

export type CraftCommandPaletteProps = {
  items: CraftCommandItem[];
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: React.ReactNode;
  title?: React.ReactNode;
  placeholder?: string;
  emptyText?: React.ReactNode;
  tone?: ThemeName;
  className?: string;
};

export function CraftCommandPalette({
  items,
  open,
  defaultOpen = false,
  onOpenChange,
  trigger,
  title = "Command Palette",
  placeholder = "Search commands...",
  emptyText = "No results found.",
  tone,
  className,
}: CraftCommandPaletteProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
  const isControlled = typeof open === "boolean";
  const isOpen = isControlled ? open : uncontrolledOpen;
  const [query, setQuery] = React.useState("");

  const setOpen = React.useCallback(
    (next: boolean) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange?.(next);
    },
    [isControlled, onOpenChange]
  );

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((item) => {
      const haystack = [
        item.label,
        item.description ?? "",
        ...(item.keywords ?? []),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [items, query]);

  React.useEffect(() => {
    if (!isOpen) setQuery("");
  }, [isOpen]);

  return (
    <CraftModal
      open={isOpen}
      onOpenChange={setOpen}
      trigger={trigger}
      title={title}
      tone={tone}
      className={cn("max-w-xl", className)}
    >
      <div className="space-y-4">
        <CraftInput
          type="search"
          placeholder={placeholder}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <div className="space-y-2">
          {filtered.length === 0 && (
            <div className="rounded-2xl border border-[rgb(var(--nc-border)/0.35)] bg-[rgb(var(--nc-surface)/0.12)] p-4 text-sm text-[rgb(var(--nc-fg-muted))]">
              {emptyText}
            </div>
          )}
          {filtered.map((item) => (
            <button
              key={item.id}
              type="button"
              disabled={item.disabled}
              onClick={() => {
                if (item.disabled) return;
                item.onSelect?.();
                setOpen(false);
              }}
              className={cn(
                "flex w-full items-start gap-3 rounded-2xl border border-[rgb(var(--nc-border)/0.35)] bg-[rgb(var(--nc-surface)/0.08)] px-4 py-3 text-left transition",
                item.disabled
                  ? "cursor-not-allowed opacity-60"
                  : "hover:bg-[rgb(var(--nc-surface)/0.16)]"
              )}
            >
              {item.icon && <span className="mt-1">{item.icon}</span>}
              <span>
                <span className="block text-sm font-semibold">{item.label}</span>
                {item.description && (
                  <span className="block text-xs text-[rgb(var(--nc-fg-muted))]">
                    {item.description}
                  </span>
                )}
              </span>
            </button>
          ))}
        </div>
      </div>
    </CraftModal>
  );
}
