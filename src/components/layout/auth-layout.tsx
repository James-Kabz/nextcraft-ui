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
        "grid min-h-screen grid-cols-1 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950",
        "lg:grid-cols-[1.1fr_0.9fr]",
        className
      )}
      {...props}
    >
      <div className="flex flex-col justify-center px-6 py-16 sm:px-12">
        <div className="mx-auto w-full max-w-md space-y-6">
          {(title || description) && (
            <div className="space-y-2">
              {title && <h1 className="text-3xl font-bold text-white">{title}</h1>}
              {description && <p className="text-white/60">{description}</p>}
            </div>
          )}
          {children}
          {footer && <div className="text-sm text-white/60">{footer}</div>}
        </div>
      </div>
      <div className="hidden items-center justify-center border-l border-white/10 bg-white/5 p-12 text-white lg:flex">
        {graphic ?? (
          <div className="max-w-sm space-y-4 text-center">
            <h2 className="text-2xl font-semibold">Crafted experiences</h2>
            <p className="text-white/60">
              Build authentication flows that feel premium and cohesive.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
