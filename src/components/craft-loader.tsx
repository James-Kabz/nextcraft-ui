"use client";

import * as React from "react";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";

export type CraftLoaderType =
  | "spin"
  | "pulse"
  | "bounce"
  | "ripple"
  | "bars"
  | "dots"
  | "ring";

export type CraftLoaderSize = "small" | "medium" | "large" | "xl";

export type CraftLoaderProps = {
  loading?: boolean;
  type?: CraftLoaderType;
  size?: CraftLoaderSize;
  color?: string;
  overlay?: boolean;
  text?: React.ReactNode;
  textPosition?: "top" | "bottom";
  backgroundColor?: string;
  tone?: ThemeName;
  className?: string;
};

const sizeMap: Record<CraftLoaderSize, number> = {
  small: 16,
  medium: 24,
  large: 32,
  xl: 40,
};

function Spinner({ size, color }: { size: number; color: string }) {
  return (
    <svg
      className="animate-spin"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke={color}
        strokeWidth="4"
        className="opacity-25"
      />
      <path
        d="M4 12a8 8 0 018-8"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        className="opacity-75"
      />
    </svg>
  );
}

function Dots({ size, color }: { size: number; color: string }) {
  const dotSize = Math.max(4, Math.floor(size / 6));
  return (
    <div className="flex items-center gap-2">
      {[0, 1, 2].map((index) => (
        <span
          key={index}
          className="inline-flex animate-bounce rounded-full"
          style={{
            width: dotSize,
            height: dotSize,
            backgroundColor: color,
            animationDelay: `${index * 120}ms`,
          }}
        />
      ))}
    </div>
  );
}

function Bars({ size, color }: { size: number; color: string }) {
  const barHeight = size;
  const barWidth = Math.max(3, Math.floor(size / 6));
  return (
    <div className="flex items-end gap-1">
      {[0, 1, 2, 3].map((index) => (
        <span
          key={index}
          className="inline-flex animate-pulse rounded-sm"
          style={{
            width: barWidth,
            height: barHeight - index * 4,
            backgroundColor: color,
            animationDelay: `${index * 100}ms`,
          }}
        />
      ))}
    </div>
  );
}

function Pulse({ size, color }: { size: number; color: string }) {
  return (
    <span
      className="inline-flex animate-pulse rounded-full"
      style={{ width: size, height: size, backgroundColor: color }}
    />
  );
}

function Ripple({ size, color }: { size: number; color: string }) {
  return (
    <span
      className="inline-flex rounded-full border-2 animate-ping"
      style={{ width: size, height: size, borderColor: color }}
    />
  );
}

function Ring({ size, color }: { size: number; color: string }) {
  return (
    <span
      className="inline-flex animate-spin rounded-full border-2 border-t-transparent"
      style={{ width: size, height: size, borderColor: color }}
    />
  );
}

function Bounce({ size, color }: { size: number; color: string }) {
  const dotSize = Math.max(4, Math.floor(size / 5));
  return (
    <div className="flex items-center gap-2">
      {[0, 1].map((index) => (
        <span
          key={index}
          className="inline-flex animate-bounce rounded-full"
          style={{
            width: dotSize,
            height: dotSize,
            backgroundColor: color,
            animationDelay: `${index * 140}ms`,
          }}
        />
      ))}
    </div>
  );
}

export function CraftLoader({
  loading = false,
  type = "dots",
  size = "medium",
  color = "rgb(var(--nc-accent-1))",
  overlay = false,
  text,
  textPosition = "bottom",
  backgroundColor = "rgba(0, 0, 0, 0.75)",
  tone,
  className,
}: CraftLoaderProps) {
  if (!loading) return null;

  const px = sizeMap[size];

  const content = (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3",
        textPosition === "top" && "flex-col-reverse",
        className
      )}
      data-nc-theme={tone}
    >
      {type === "spin" && <Spinner size={px} color={color} />}
      {type === "dots" && <Dots size={px} color={color} />}
      {type === "bars" && <Bars size={px} color={color} />}
      {type === "pulse" && <Pulse size={px} color={color} />}
      {type === "ripple" && <Ripple size={px} color={color} />}
      {type === "ring" && <Ring size={px} color={color} />}
      {type === "bounce" && <Bounce size={px} color={color} />}
      {text ? <span className="text-xs text-[rgb(var(--nc-fg-muted))]">{text}</span> : null}
    </div>
  );

  if (!overlay) return content;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden backdrop-blur-md"
      style={{ backgroundColor }}
      data-nc-theme={tone}
    >
      <span
        className="pointer-events-none absolute inset-0 bg-linear-to-br from-[rgb(var(--nc-accent-1)/0.12)] via-transparent to-[rgb(var(--nc-accent-3)/0.12)]"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -left-1/4 -top-1/3 h-full w-[120%] rotate-6 bg-white/10 blur-2xl opacity-40"
        aria-hidden="true"
      />
      <div className="relative z-10">{content}</div>
    </div>
  );
}
