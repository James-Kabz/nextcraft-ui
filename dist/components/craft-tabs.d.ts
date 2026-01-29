import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { ThemeName } from '../theme/theme-context.js';

type CraftTabsProps = {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    tone?: ThemeName;
    tabs: Array<{
        value: string;
        label: React.ReactNode;
    }>;
    panels: Record<string, React.ReactNode>;
    className?: string;
};
declare function CraftTabs({ value, defaultValue, onValueChange, tone, tabs, panels, className, }: CraftTabsProps): react_jsx_runtime.JSX.Element;

export { CraftTabs, type CraftTabsProps };
