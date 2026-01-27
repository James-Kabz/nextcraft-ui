"use client";

import * as React from "react";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";

type PopoverAlign = "start" | "center" | "end";

export type CraftPopoverProps = {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger: React.ReactNode;
  content: React.ReactNode;
  align?: PopoverAlign;
  sideOffset?: number;
  tone?: ThemeName;
  className?: string;
  contentClassName?: string;
};

const alignClasses: Record<PopoverAlign, string> = {
  start: "left-0",
  center: "left-1/2 -translate-x-1/2",
  end: "right-0",
};

export function CraftPopover({
  open,
  defaultOpen = false,
  onOpenChange,
  trigger,
  content,
  align = "start",
  sideOffset = 10,
  tone,
  className,
  contentClassName,
}: CraftPopoverProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
  const isControlled = typeof open === "boolean";
  const isOpen = isControlled ? open : uncontrolledOpen;
  const rootRef = React.useRef<HTMLDivElement>(null);

  const setOpen = React.useCallback(
    (next: boolean) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange?.(next);
    },
    [isControlled, onOpenChange]
  );

  React.useEffect(() => {
    if (!isOpen) return;
    const handleClick = (event: MouseEvent) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(event.target as Node)) setOpen(false);
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, setOpen]);

  const triggerNode = React.isValidElement(trigger)
    ? React.cloneElement(trigger as React.ReactElement<any>, {
        onClick: (event: React.MouseEvent) => {
          const handler = (trigger.props as any).onClick;
          handler?.(event);
          if (!event.defaultPrevented) setOpen(!isOpen);
        },
        "aria-expanded": isOpen,
        "aria-haspopup": "dialog",
      })
    : (
        <button
          type="button"
          onClick={() => setOpen(!isOpen)}
          className="inline-flex"
          aria-expanded={isOpen}
          aria-haspopup="dialog"
        >
          {trigger}
        </button>
      );

  return (
    <div className={cn("relative inline-flex", className)} ref={rootRef}>
      {triggerNode}
      {isOpen && (
        <div
          className={cn(
            "absolute z-40 w-max min-w-48 rounded-2xl border border-[rgb(var(--nc-border)/0.35)] bg-[rgb(var(--nc-surface)/0.08)] p-3 text-[rgb(var(--nc-fg))] shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl",
            alignClasses[align],
            contentClassName
          )}
          style={{ marginTop: sideOffset }}
          role="dialog"
          data-nc-theme={tone}
        >
          {content}
        </div>
      )}
    </div>
  );
}
