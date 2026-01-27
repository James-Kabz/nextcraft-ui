import * as React from "react";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";
import { CraftCard } from "@/components/craft-card";

type CraftStatTrend = "up" | "down" | "neutral";

export type CraftStatCardProps = React.HTMLAttributes<HTMLDivElement> & {
  label: React.ReactNode;
  value: React.ReactNode;
  delta?: React.ReactNode;
  trend?: CraftStatTrend;
  icon?: React.ReactNode;
  footer?: React.ReactNode;
  tone?: ThemeName;
};

const trendClasses: Record<CraftStatTrend, string> = {
  up: "text-emerald-300",
  down: "text-rose-300",
  neutral: "text-[rgb(var(--nc-fg-muted))]",
};

export function CraftStatCard({
  label,
  value,
  delta,
  trend = "neutral",
  icon,
  footer,
  tone,
  className,
  ...props
}: CraftStatCardProps) {
  return (
    <CraftCard
      className={cn("space-y-3", className)}
      tone={tone}
      {...props}
    >
      <div className="flex items-center justify-between">
        <p className="text-sm text-[rgb(var(--nc-fg-muted))]">{label}</p>
        {icon && <div className="text-[rgb(var(--nc-fg-soft))]">{icon}</div>}
      </div>
      <p className="text-3xl font-semibold">{value}</p>
      <div className="flex items-center justify-between text-xs">
        {delta && <span className={trendClasses[trend]}>{delta}</span>}
        {footer && <span className="text-[rgb(var(--nc-fg-muted))]">{footer}</span>}
      </div>
    </CraftCard>
  );
}
