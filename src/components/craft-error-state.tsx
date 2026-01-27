import * as React from "react";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";
import { CraftButton } from "@/components/craft-button";

export type CraftErrorStateProps = React.HTMLAttributes<HTMLDivElement> & {
  title?: React.ReactNode;
  description?: React.ReactNode;
  actionLabel?: React.ReactNode;
  onAction?: () => void;
  action?: React.ReactNode;
  tone?: ThemeName;
};

export function CraftErrorState({
  title = "Something went wrong",
  description = "Try again or check your connection.",
  actionLabel = "Retry",
  onAction,
  action,
  tone,
  className,
  ...props
}: CraftErrorStateProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-[rgb(var(--nc-border)/0.35)] bg-[rgb(var(--nc-surface)/0.12)] p-6 text-[rgb(var(--nc-fg))] shadow-[0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl",
        className
      )}
      data-nc-theme={tone}
      {...props}
    >
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-[rgb(var(--nc-fg-muted))]">{description}</p>
      </div>
      <div className="mt-4">
        {action ??
          (onAction && (
            <CraftButton size="sm" onClick={onAction}>
              {actionLabel}
            </CraftButton>
          ))}
      </div>
    </div>
  );
}
