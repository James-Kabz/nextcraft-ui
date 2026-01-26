"use client";

import * as React from "react";
import { useFormContext } from "react-hook-form";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";

export type CraftSubmitButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: ThemeName;
  loading?: boolean;
  loadingLabel?: React.ReactNode;
  disableWhenInvalid?: boolean;
};

export function CraftSubmitButton({
  className,
  tone,
  loading,
  loadingLabel = "Submitting...",
  disableWhenInvalid = true,
  disabled,
  children,
  ...props
}: CraftSubmitButtonProps) {
  const form = useFormContext();
  const isSubmitting = loading ?? form?.formState?.isSubmitting ?? false;
  const isValid = form?.formState?.isValid ?? true;
  const isDisabled =
    disabled || isSubmitting || (disableWhenInvalid && !isValid);

  return (
    <button
      type="submit"
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-xl px-6 py-2 text-sm font-semibold",
        "bg-linear-to-br from-[rgb(var(--nc-accent-1))] via-[rgb(var(--nc-accent-2))] to-[rgb(var(--nc-accent-3))]",
        "text-white shadow-[0_12px_30px_rgb(var(--nc-accent-1)/0.35)]",
        "transition-all duration-200",
        "hover:shadow-[0_16px_36px_rgb(var(--nc-accent-1)/0.5)] hover:scale-[1.02] active:scale-[0.98]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--nc-accent-1)/0.6)]",
        "disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100",
        className
      )}
      data-nc-theme={tone}
      disabled={isDisabled}
      {...props}
    >
      {isSubmitting && (
        <span className="inline-flex h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-white" />
      )}
      <span>{isSubmitting ? loadingLabel : children}</span>
    </button>
  );
}
