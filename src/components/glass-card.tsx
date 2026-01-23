import * as React from "react";

import { cn } from "../utils/cn";

export type GlassCardProps = React.HTMLAttributes<HTMLDivElement> & {
  tone?: "aurora" | "ember" | "ocean";
};

const toneClasses: Record<NonNullable<GlassCardProps["tone"]>, string> = {
  aurora:
    "from-emerald-300/20 via-sky-300/10 to-indigo-400/20 border-emerald-200/20",
  ember: "from-amber-300/20 via-rose-300/10 to-fuchsia-400/20 border-amber-200/20",
  ocean: "from-sky-300/20 via-cyan-300/10 to-blue-400/20 border-sky-200/20",
};

export function GlassCard({
  className,
  tone = "aurora",
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border bg-linear-to-br p-6 text-white shadow-[0_25px_70px_-45px_rgba(15,23,42,0.9)]",
        "backdrop-blur-xl",
        toneClasses[tone],
        className
      )}
      {...props}
    />
  );
}
