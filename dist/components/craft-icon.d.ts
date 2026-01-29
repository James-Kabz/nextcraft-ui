import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

type CraftIconRegistry = Record<string, React.ReactNode>;
type CraftIconProviderProps = {
    icons: CraftIconRegistry;
    children: React.ReactNode;
};
declare function CraftIconProvider({ icons, children }: CraftIconProviderProps): react_jsx_runtime.JSX.Element;
type CraftIconProps = {
    name: IconName | string;
    prefix?: IconPrefix;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
    color?: string;
    className?: string;
    "aria-label"?: string;
    icons?: CraftIconRegistry;
};
declare function CraftIcon({ name, prefix, size, color, className, "aria-label": ariaLabel, icons, }: CraftIconProps): react_jsx_runtime.JSX.Element;

export { CraftIcon, type CraftIconProps, CraftIconProvider, type CraftIconProviderProps, type CraftIconRegistry };
