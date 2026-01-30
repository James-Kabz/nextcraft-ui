"use client";

import * as React from "react";

export type CraftToastVariant = "info" | "success" | "warning" | "error" | "danger";

export type CraftToast = {
  id: string;
  title?: string;
  description?: string;
  variant?: CraftToastVariant;
  duration?: number;
  custom?: React.ReactNode;
};

export type CraftToastOptions = {
  description?: string;
  variant?: CraftToastVariant;
  duration?: number;
};

export type CraftToastCustomOptions = {
  duration?: number;
};

const toastState: { toasts: CraftToast[] } = { toasts: [] };
const toastListeners = new Set<() => void>();
const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

function emitToastState() {
  toastListeners.forEach((listener) => listener());
}

export function normalizeVariant(
  variant?: CraftToastVariant
): Exclude<CraftToastVariant, "danger"> {
  if (variant === "danger") return "error";
  return variant ?? "info";
}

function scheduleToastRemoval(id: string, duration?: number) {
  const timeoutMs = typeof duration === "number" ? duration : 4000;
  if (timeoutMs <= 0) return;
  const existing = toastTimeouts.get(id);
  if (existing) clearTimeout(existing);
  toastTimeouts.set(
    id,
    setTimeout(() => {
      toastState.toasts = toastState.toasts.filter((toast) => toast.id !== id);
      toastTimeouts.delete(id);
      emitToastState();
    }, timeoutMs)
  );
}

function addToast(toast: Omit<CraftToast, "id">) {
  const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const next: CraftToast = {
    ...toast,
    id,
    variant: normalizeVariant(toast.variant),
  };
  toastState.toasts = [...toastState.toasts, next];
  emitToastState();
  scheduleToastRemoval(id, toast.duration);
  return id;
}

export function removeToast(id: string) {
  toastState.toasts = toastState.toasts.filter((toast) => toast.id !== id);
  const existing = toastTimeouts.get(id);
  if (existing) {
    clearTimeout(existing);
    toastTimeouts.delete(id);
  }
  emitToastState();
}

function clearToasts() {
  toastState.toasts = [];
  toastTimeouts.forEach((timeout) => clearTimeout(timeout));
  toastTimeouts.clear();
  emitToastState();
}

export function useToaster() {
  const subscribe = React.useCallback((listener: () => void) => {
    toastListeners.add(listener);
    return () => toastListeners.delete(listener);
  }, []);

  const getSnapshot = React.useCallback(() => toastState.toasts, []);

  return React.useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}

export function useCraftToast() {
  return React.useMemo(
    () => ({
      toast: (message: React.ReactNode, options?: CraftToastOptions) =>
        addToast({
          title: typeof message === "string" ? message : undefined,
          custom: typeof message === "string" ? undefined : message,
          description: options?.description,
          variant: options?.variant,
          duration: options?.duration,
        }),
      success: (message: React.ReactNode, options?: CraftToastOptions) =>
        addToast({
          title: typeof message === "string" ? message : undefined,
          custom: typeof message === "string" ? undefined : message,
          description: options?.description,
          variant: "success",
          duration: options?.duration,
        }),
      warning: (message: React.ReactNode, options?: CraftToastOptions) =>
        addToast({
          title: typeof message === "string" ? message : undefined,
          custom: typeof message === "string" ? undefined : message,
          description: options?.description,
          variant: "warning",
          duration: options?.duration,
        }),
      info: (message: React.ReactNode, options?: CraftToastOptions) =>
        addToast({
          title: typeof message === "string" ? message : undefined,
          custom: typeof message === "string" ? undefined : message,
          description: options?.description,
          variant: "info",
          duration: options?.duration,
        }),
      error: (message: React.ReactNode, options?: CraftToastOptions) =>
        addToast({
          title: typeof message === "string" ? message : undefined,
          custom: typeof message === "string" ? undefined : message,
          description: options?.description,
          variant: "error",
          duration: options?.duration,
        }),
      danger: (message: React.ReactNode, options?: CraftToastOptions) =>
        addToast({
          title: typeof message === "string" ? message : undefined,
          custom: typeof message === "string" ? undefined : message,
          description: options?.description,
          variant: "danger",
          duration: options?.duration,
        }),
      dismiss: (id: string) => removeToast(id),
      dismissAll: () => clearToasts(),
    }),
    []
  );
}

export const toast = Object.assign(
  (message: React.ReactNode, options?: CraftToastOptions) =>
    addToast({
      title: typeof message === "string" ? message : undefined,
      custom: typeof message === "string" ? undefined : message,
      description: options?.description,
      variant: options?.variant,
      duration: options?.duration,
    }),
  {
    success: (message: React.ReactNode, options?: CraftToastOptions) =>
      addToast({
        title: typeof message === "string" ? message : undefined,
        custom: typeof message === "string" ? undefined : message,
        description: options?.description,
        variant: "success",
        duration: options?.duration,
      }),
    error: (message: React.ReactNode, options?: CraftToastOptions) =>
      addToast({
        title: typeof message === "string" ? message : undefined,
        custom: typeof message === "string" ? undefined : message,
        description: options?.description,
        variant: "error",
        duration: options?.duration,
      }),
    warning: (message: React.ReactNode, options?: CraftToastOptions) =>
      addToast({
        title: typeof message === "string" ? message : undefined,
        custom: typeof message === "string" ? undefined : message,
        description: options?.description,
        variant: "warning",
        duration: options?.duration,
      }),
    info: (message: React.ReactNode, options?: CraftToastOptions) =>
      addToast({
        title: typeof message === "string" ? message : undefined,
        custom: typeof message === "string" ? undefined : message,
        description: options?.description,
        variant: "info",
        duration: options?.duration,
      }),
    custom: (component: React.ReactNode, options?: CraftToastCustomOptions) =>
      addToast({
        custom: component,
        duration: options?.duration,
      }),
    dismiss: (id: string) => removeToast(id),
    dismissAll: () => clearToasts(),
    promise: async <T,>(
      promise: Promise<T>,
      options?: {
        loading?: React.ReactNode;
        success?: ((value: T) => React.ReactNode) | React.ReactNode;
        error?: ((error: unknown) => React.ReactNode) | React.ReactNode;
        description?: string;
        duration?: number;
      }
    ) => {
      const loadingId = addToast({
        title: typeof options?.loading === "string" ? options.loading : undefined,
        custom: typeof options?.loading === "string" ? undefined : options?.loading,
        description: options?.description,
        variant: "info",
        duration: options?.duration ?? 0,
      });

      try {
        const result = await promise;
        removeToast(loadingId);
        const successContent =
          typeof options?.success === "function"
            ? options.success(result)
            : options?.success ?? "Success";
        addToast({
          title: typeof successContent === "string" ? successContent : undefined,
          custom: typeof successContent === "string" ? undefined : successContent,
          variant: "success",
          duration: options?.duration,
        });
        return result;
      } catch (error) {
        removeToast(loadingId);
        const errorContent =
          typeof options?.error === "function"
            ? options.error(error)
            : options?.error ?? "Something went wrong";
        addToast({
          title: typeof errorContent === "string" ? errorContent : undefined,
          custom: typeof errorContent === "string" ? undefined : errorContent,
          variant: "error",
          duration: options?.duration,
        });
        throw error;
      }
    },
  }
);
