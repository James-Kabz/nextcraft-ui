import * as React from "react";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";

export type CraftCheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  tone?: ThemeName;
  label?: React.ReactNode;
  description?: React.ReactNode;
};

export const CraftCheckbox = React.forwardRef<HTMLInputElement, CraftCheckboxProps>(
  ({ className, tone, label, description, ...props }, ref) => {
    return (
      <label
        className={cn(
          "flex items-start gap-3 text-sm text-white",
          props.disabled ? "opacity-60" : "cursor-pointer",
          className
        )}
        data-nc-theme={tone}
      >
        <span className="relative mt-0.5">
          <input
            ref={ref}
            type="checkbox"
            className="peer sr-only"
            {...props}
          />
          <span
            className={cn(
              "flex h-5 w-5 items-center justify-center rounded-md border-2",
              "border-[color:rgb(var(--nc-accent-1)/0.45)] bg-white/5",
              "transition-all duration-200",
              "peer-checked:border-[color:rgb(var(--nc-accent-1))] peer-checked:bg-[color:rgb(var(--nc-accent-1)/0.25)]",
              "peer-focus-visible:ring-2 peer-focus-visible:ring-[color:rgb(var(--nc-accent-1)/0.5)]"
            )}
          >
            <svg
              className="h-3 w-3 text-white opacity-0 transition-opacity peer-checked:opacity-100"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.704 5.29a1 1 0 010 1.415l-7.2 7.2a1 1 0 01-1.415 0l-3.2-3.2a1 1 0 111.415-1.415l2.492 2.493 6.493-6.493a1 1 0 011.415 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </span>
        <span className="space-y-1">
          {label && <span className="block font-medium text-white">{label}</span>}
          {description && (
            <span className="block text-xs text-white/60">{description}</span>
          )}
        </span>
      </label>
    );
  }
);

CraftCheckbox.displayName = "CraftCheckbox";
