"use client";

import * as React from "react";
import { DynamicIcon } from "lucide-react/dynamic";

import { cn } from "@/utils/cn";

export type CraftIconRegistry = Record<string, React.ReactNode>;

const CraftIconContext = React.createContext<CraftIconRegistry | null>(null);

export type CraftIconProviderProps = {
  icons: CraftIconRegistry;
  children: React.ReactNode;
};

export function CraftIconProvider({ icons, children }: CraftIconProviderProps) {
  return <CraftIconContext.Provider value={icons}>{children}</CraftIconContext.Provider>;
}

export type CraftIconProps = {
  name: string;
  className?: string;
  "aria-label"?: string;
  icons?: CraftIconRegistry;
  useLucide?: boolean;
};

export function CraftIcon({
  name,
  className,
  "aria-label": ariaLabel,
  icons,
  useLucide = true,
}: CraftIconProps) {
  const contextRegistry = React.useContext(CraftIconContext);
  const registry = icons ?? contextRegistry;
  const icon = registry?.[name];

  if (!icon) {
    if (!useLucide) return null;
    return (
      <DynamicIcon
        name={name as unknown as React.ComponentProps<typeof DynamicIcon>["name"]}
        className={className}
        aria-hidden={ariaLabel ? undefined : true}
        aria-label={ariaLabel}
      />
    );
  }

  if (React.isValidElement(icon)) {
    const iconProps = icon.props as { className?: string };
    return React.cloneElement(icon, {
      className: cn(iconProps.className, className),
      "aria-hidden": ariaLabel ? undefined : true,
      "aria-label": ariaLabel,
    });
  }

  return (
    <span className={className} aria-label={ariaLabel}>
      {icon}
    </span>
  );
}
