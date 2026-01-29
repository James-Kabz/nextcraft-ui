"use client";

import * as React from "react";
import { library, type IconName, type IconPrefix } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  name: IconName | string;
  prefix?: IconPrefix;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  color?: string;
  className?: string;
  "aria-label"?: string;
  icons?: CraftIconRegistry;
};

library.add(fas, far, fab);

export function CraftIcon({
  name,
  prefix = "fas",
  size = "md",
  color,
  className,
  "aria-label": ariaLabel,
  icons,
}: CraftIconProps) {
  const contextRegistry = React.useContext(CraftIconContext);
  const registry = icons ?? contextRegistry;
  const icon = registry?.[name];

  if (!icon) {
    const faSizeMap = {
      xs: "xs",
      sm: "sm",
      md: "lg",
      lg: "xl",
      xl: "2x",
      xxl: "3x",
    } as const;

    return (
      <FontAwesomeIcon
        icon={[prefix, name as IconName]}
        size={faSizeMap[size]}
        className={cn(color ? `text-${color}` : "text-current", "inline-block", className)}
        aria-hidden={ariaLabel ? undefined : true}
        aria-label={ariaLabel}
        role={ariaLabel ? "img" : undefined}
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
