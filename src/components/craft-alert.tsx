import * as React from "react";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";

type CraftAlertVariant = "info" | "success" | "warning" | "error";

export type CraftAlertProps = React.HTMLAttributes<HTMLDivElement> & {
  title?: React.ReactNode;
  description?: React.ReactNode;
  variant?: CraftAlertVariant;
  icon?: React.ReactNode;
  actions?: React.ReactNode;
  tone?: ThemeName;
};

const variantClasses: Record<CraftAlertVariant, string> = {
  info: "border-[rgb(var(--nc-accent-1)/0.45)] bg-[rgb(var(--nc-accent-1)/0.12)]",
  success: "border-[rgb(var(--nc-accent-2)/0.45)] bg-[rgb(var(--nc-accent-2)/0.12)]",
  warning: "border-[rgb(var(--nc-accent-3)/0.45)] bg-[rgb(var(--nc-accent-3)/0.12)]",
  error: "border-[rgb(var(--nc-accent-3)/0.65)] bg-[rgb(var(--nc-accent-3)/0.18)]",
};

export function CraftAlert({
  title,
  description,
  variant = "info",
  icon,
  actions,
  tone,
  className,
  ...props
}: CraftAlertProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-4 text-[rgb(var(--nc-fg))] backdrop-blur-xl",
        variantClasses[variant],
        className
      )}
      data-nc-theme={tone}
      {...props}
    >
      <div className="flex items-start gap-3">
        {icon && <div className="mt-1 text-[rgb(var(--nc-fg))]">{icon}</div>}
        <div className="space-y-1">
          {title && <p className="text-sm font-semibold">{title}</p>}
          {description && (
            <p className="text-sm text-[rgb(var(--nc-fg-muted))]">
              {description}
            </p>
          )}
        </div>
      </div>
      {actions && <div className="mt-3 flex flex-wrap gap-2">{actions}</div>}
    </div>
  );
}
