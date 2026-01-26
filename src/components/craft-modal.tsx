"use client";

import * as React from "react";
import { createPortal } from "react-dom";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";

const FOCUSABLE_SELECTORS = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

function useFocusTrap(active: boolean) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!active || !ref.current) return;
    const root = ref.current;
    const getFocusable = () =>
      Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS));

    const focusables = getFocusable();
    if (focusables.length) {
      focusables[0].focus();
    } else {
      root.focus();
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const items = getFocusable();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      const activeEl = document.activeElement as HTMLElement | null;

      if (event.shiftKey && activeEl === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && activeEl === last) {
        event.preventDefault();
        first.focus();
      }
    };

    root.addEventListener("keydown", handleKeyDown);
    return () => root.removeEventListener("keydown", handleKeyDown);
  }, [active]);

  return ref;
}

export type CraftModalProps = {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  tone?: ThemeName;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  trigger?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
};

export function CraftModal({
  open,
  defaultOpen = false,
  onOpenChange,
  tone,
  title,
  description,
  children,
  trigger,
  footer,
  className,
}: CraftModalProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
  const isControlled = typeof open === "boolean";
  const isOpen = isControlled ? open : uncontrolledOpen;

  const setOpen = React.useCallback(
    (next: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(next);
      }
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

  const ref = useFocusTrap(isOpen);

  const content = isOpen ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <div
        ref={ref}
        tabIndex={-1}
        className={cn(
          "relative z-10 w-full max-w-lg rounded-3xl border border-white/10 bg-white/10 p-6 text-white shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl",
          className
        )}
        data-nc-theme={tone}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            {title && <h3 className="text-2xl font-semibold">{title}</h3>}
            {description && <p className="text-white/60">{description}</p>}
          </div>
          <button
            className="rounded-full border border-white/10 bg-white/10 p-2 text-white/70 transition hover:text-white"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        </div>
        <div className="mt-5 space-y-4">{children}</div>
        {footer && <div className="mt-6">{footer}</div>}
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
