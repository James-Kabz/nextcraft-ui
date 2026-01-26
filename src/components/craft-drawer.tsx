"use client";

import * as React from "react";
import { createPortal } from "react-dom";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";

export type CraftDrawerProps = {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  tone?: ThemeName;
  side?: "right" | "left";
  title?: React.ReactNode;
  children?: React.ReactNode;
  trigger?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
};

export function CraftDrawer({
  open,
  defaultOpen = false,
  onOpenChange,
  tone,
  side = "left",
  title,
  children,
  trigger,
  footer,
  className,
}: CraftDrawerProps) {
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

  React.useEffect(() => {
    if (!isOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, setOpen]);

  const content = isOpen ? (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <div
        className={cn(
          "absolute top-0 h-full w-full max-w-md border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] text-[rgb(var(--nc-fg))] shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl",
          side === "right" ? "right-0" : "left-0",
          className
        )}
        data-nc-theme={tone}
      >
        <div className="flex items-center justify-between border-b border-[rgb(var(--nc-border)/0.3)] p-6">
          {title && <h3 className="text-xl font-semibold">{title}</h3>}
          <button
            className="rounded-full border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] p-2 text-[rgb(var(--nc-fg-soft))] transition hover:text-[rgb(var(--nc-fg))]"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        </div>
        <div className="p-6 space-y-4 overflow-y-auto h-[calc(100%-5.5rem)]">
          {children}
        </div>
        {footer && <div className="border-t border-[rgb(var(--nc-border)/0.3)] p-6">{footer}</div>}
      </div>
    </div>
  ) : null;

  return (
    <>
      {trigger && (
        <span
          onClick={() => setOpen(true)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") setOpen(true);
          }}
          role="button"
          tabIndex={0}
          className="inline-flex"
        >
          {trigger}
        </span>
      )}
      {typeof document !== "undefined" && content
        ? createPortal(content, document.body)
        : content}
    </>
  );
}
