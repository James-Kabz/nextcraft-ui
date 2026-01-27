import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';

type CraftIconRegistry = Record<string, React.ReactNode>;
type CraftIconProviderProps = {
    icons: CraftIconRegistry;
    children: React.ReactNode;
};
declare function CraftIconProvider({ icons, children }: CraftIconProviderProps): react_jsx_runtime.JSX.Element;
type CraftIconProps = {
    name: string;
    className?: string;
    "aria-label"?: string;
    icons?: CraftIconRegistry;
    useLucide?: boolean;
};
declare function CraftIcon({ name, className, "aria-label": ariaLabel, icons, useLucide, }: CraftIconProps): react_jsx_runtime.JSX.Element | null;

export { CraftIcon, type CraftIconProps, CraftIconProvider, type CraftIconProviderProps, type CraftIconRegistry };
