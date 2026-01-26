"use client";

import * as React from "react";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";

export type CraftToastVariant = "info" | "success" | "warning" | "error";

export type CraftToast = {
  id: string;
  title: string;
  description?: string;
  variant?: CraftToastVariant;
};

const variantClasses: Record<CraftToastVariant, string> = {
  info: "border-[color:rgb(var(--nc-accent-1)/0.4)]",
  success: "border-emerald-400/40",
  warning: "border-amber-400/40",
  error: "border-rose-400/40",
};

export function useCraftToast() {
  const [toasts, setToasts] = React.useState<CraftToast[]>([]);

  const push = React.useCallback((toast: Omit<CraftToast, "id">) => {
    const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    setToasts((prev) => [...prev, { ...toast, id }]);
    return id;
  }, []);

  const remove = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return { toasts, push, remove };
}

export type CraftToastHostProps = {
  toasts: CraftToast[];
  onDismiss: (id: string) => void;
  tone?: ThemeName;
};

export function CraftToastHost({ toasts, onDismiss, tone }: CraftToastHostProps) {
  return (
    <div
      className="fixed right-6 top-6 z-50 flex w-full max-w-sm flex-col gap-3"
      data-nc-theme={tone}
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={cn(
            "rounded-2xl border bg-[rgb(var(--nc-surface)/0.12)] p-4 text-[rgb(var(--nc-fg))] shadow-[0_15px_35px_rgba(0,0,0,0.35)] backdrop-blur-xl",
            variantClasses[toast.variant ?? "info"]
          )}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold">{toast.title}</p>
              {toast.description && (
                <p className="text-xs text-[rgb(var(--nc-fg-muted))]">{toast.description}</p>
              )}
            </div>
            <button
              className="text-[rgb(var(--nc-fg-soft))] hover:text-[rgb(var(--nc-fg))]"
              onClick={() => onDismiss(toast.id)}
            >
              ✕
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
