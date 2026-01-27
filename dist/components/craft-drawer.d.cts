import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { a as ThemeName } from '../theme-context-EVI9PfKv.cjs';

type CraftDrawerProps = {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    tone?: ThemeName;
    side?: "right" | "left";
    title?: React.ReactNode;
    children?: React.ReactNode;
    trigger?: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
};
declare function CraftDrawer({ open, defaultOpen, onOpenChange, tone, side, title, children, trigger, footer, className, }: CraftDrawerProps): react_jsx_runtime.JSX.Element;

export { CraftDrawer, type CraftDrawerProps };
