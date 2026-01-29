"use client";

import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faArchive,
  faCreditCard,
  faFolder,
  faFolderOpen,
  faGauge,
  faPen,
  faSearch,
  faTrash,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

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
};

const fontAwesomeIcons: Record<string, IconDefinition> = {
  "layout-dashboard": faGauge,
  dashboard: faGauge,
  folder: faFolder,
  "folder-open": faFolderOpen,
  users: faUsers,
  "credit-card": faCreditCard,
  pen: faPen,
  edit: faPen,
  trash: faTrash,
  delete: faTrash,
  archive: faArchive,
  search: faSearch,
};

export function CraftIcon({
  name,
  className,
  "aria-label": ariaLabel,
  icons,
}: CraftIconProps) {
  const contextRegistry = React.useContext(CraftIconContext);
  const registry = icons ?? contextRegistry;
  const icon = registry?.[name];

  if (!icon) {
    const faIcon = fontAwesomeIcons[name];
    if (!faIcon) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(`[CraftIcon] Unknown icon name: ${name}`);
      }
      return null;
    }

    return (
      <FontAwesomeIcon
        icon={faIcon}
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
