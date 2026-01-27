import * as React from "react";
import Link, { type LinkProps } from "next/link";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";

type CraftLinkVariant = "default" | "muted" | "button" | "ghost";

export type CraftLinkProps = LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: CraftLinkVariant;
    underline?: boolean;
    tone?: ThemeName;
  };

const variantClasses: Record<CraftLinkVariant, string> = {
  default:
    "text-[rgb(var(--nc-accent-1))] hover:text-[rgb(var(--nc-accent-1))]",
  muted: "text-[rgb(var(--nc-fg-muted))] hover:text-[rgb(var(--nc-fg))]",
  button:
    "inline-flex items-center rounded-xl border border-[rgb(var(--nc-border)/0.35)] bg-[rgb(var(--nc-surface)/0.12)] px-4 py-2 text-sm font-semibold text-[rgb(var(--nc-fg))] transition hover:bg-[rgb(var(--nc-surface)/0.2)]",
  ghost:
    "inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold text-[rgb(var(--nc-fg))] transition hover:bg-[rgb(var(--nc-surface)/0.18)]",
};

export function CraftLink({
  variant = "default",
  underline = false,
  tone,
  className,
  children,
  ...props
}: CraftLinkProps) {
  return (
    <Link
      className={cn(
        "transition-colors",
        variantClasses[variant],
        underline && "underline underline-offset-4",
        className
      )}
      data-nc-theme={tone}
      {...props}
    >
      {children}
    </Link>
  );
}
