"use client";

import * as React from "react";

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

type DynamicIconComponent = React.ComponentType<{
  name: string;
  className?: string;
  "aria-hidden"?: boolean;
  "aria-label"?: string;
}>;

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
  const [LucideIcon, setLucideIcon] = React.useState<DynamicIconComponent | null>(
    null
  );

  React.useEffect(() => {
    if (!useLucide || icon || LucideIcon) return;
    let mounted = true;
    (async () => {
      try {
        const mod = await import("lucide-react/dynamic.mjs");
        if (mounted) {
          setLucideIcon(() => mod.DynamicIcon as DynamicIconComponent);
        }
      } catch (error) {
        if (mounted) setLucideIcon(null);
        if (process.env.NODE_ENV !== "production") {
          console.warn(
            "[CraftIcon] Failed to load lucide-react/dynamic. Ensure lucide-react is installed."
          );
          console.warn(error);
        }
      }
    })();
    return () => {
      mounted = false;
    };
  }, [LucideIcon, icon, useLucide]);

  if (!icon) {
    if (!useLucide) return null;
    if (!LucideIcon) return null;
    return (
      <LucideIcon
        name={name}
        className={className}
        aria-hidden={ariaLabel ? undefined : true}
        aria-label={ariaLabel}
      />
    );
  }

  type IconElementProps = {
    className?: string;
    "aria-hidden"?: boolean;
    "aria-label"?: string;
  };

  if (React.isValidElement<IconElementProps>(icon)) {
    return React.cloneElement(icon, {
      className: cn(icon.props.className, className),
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
