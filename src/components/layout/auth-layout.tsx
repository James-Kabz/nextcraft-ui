import * as React from "react";

import { cn } from "@/utils/cn";

export type AuthLayoutProps = React.HTMLAttributes<HTMLDivElement> & {
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  graphic?: React.ReactNode;
};

export function AuthLayout({
  className,
  title,
  description,
  footer,
  graphic,
  children,
  ...props
}: AuthLayoutProps) {
  return (
    <div
      className={cn(
        "grid min-h-screen grid-cols-1 bg-background",
        "lg:grid-cols-[1.1fr_0.9fr]",
        className
      )}
      {...props}
    >
      <div className="flex flex-col justify-center px-6 py-16 sm:px-12">
        <div className="mx-auto w-full max-w-md space-y-6">
          {(title || description) && (
            <div className="space-y-2">
              {title && <h1 className="text-3xl font-bold text-[rgb(var(--nc-fg))]">{title}</h1>}
              {description && <p className="text-[rgb(var(--nc-fg-muted))]">{description}</p>}
            </div>
          )}
          {children}
          {footer && <div className="text-sm text-[rgb(var(--nc-fg-muted))]">{footer}</div>}
        </div>
      </div>
      <div className="hidden items-center justify-center border-l border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.08)] p-12 text-[rgb(var(--nc-fg))] lg:flex">
        {graphic ?? (
          <div className="max-w-sm space-y-4 text-center">
            <h2 className="text-2xl font-semibold">Crafted experiences</h2>
            <p className="text-[rgb(var(--nc-fg-muted))]">
              Build authentication flows that feel premium and cohesive.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
