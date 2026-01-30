"use client";

import * as React from "react";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";
import {
  normalizeVariant,
  removeToast,
  useToaster,
  type CraftToastCustomOptions,
  type CraftToastOptions,
  type CraftToastVariant,
} from "../lib/toast";

export { useCraftToast, useToaster, toast } from "../lib/toast";
export type { CraftToastOptions, CraftToastCustomOptions, CraftToastVariant };

const variantClasses: Record<Exclude<CraftToastVariant, "danger">, string> = {
  info: "border-[color:rgb(var(--nc-accent-1)/0.4)]",
  success: "border-emerald-400/40",
  warning: "border-amber-400/40",
  error: "border-rose-400/40",
};

export type CraftToasterProps = {
  tone?: ThemeName;
  className?: string;
};

export function CraftToaster({ tone, className }: CraftToasterProps) {
  const toasts = useToaster();

  return (
    <div
      className={cn(
        "fixed right-6 top-6 z-50 flex w-full max-w-sm flex-col gap-3",
        className
      )}
      data-nc-theme={tone}
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={cn(
            "rounded-2xl border bg-[rgb(var(--nc-surface)/0.12)] p-4 text-[rgb(var(--nc-fg))] shadow-[0_15px_35px_rgba(0,0,0,0.35)] backdrop-blur-xl",
            variantClasses[normalizeVariant(toast.variant)]
          )}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              {toast.custom ? (
                toast.custom
              ) : (
                <>
                  {toast.title && <p className="text-sm font-semibold">{toast.title}</p>}
                  {toast.description && (
                    <p className="text-xs text-[rgb(var(--nc-fg-muted))]">
                      {toast.description}
                    </p>
                  )}
                </>
              )}
            </div>
            <button
              className="text-[rgb(var(--nc-fg-soft))] hover:text-[rgb(var(--nc-fg))]"
              onClick={() => removeToast(toast.id)}
            >
              ✕
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
