import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { a as ThemeName } from '../theme-context-EVI9PfKv.js';

type PopoverAlign = "start" | "center" | "end";
type CraftPopoverProps = {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    trigger: React.ReactNode;
    content: React.ReactNode;
    align?: PopoverAlign;
    sideOffset?: number;
    tone?: ThemeName;
    className?: string;
    contentClassName?: string;
};
declare function CraftPopover({ open, defaultOpen, onOpenChange, trigger, content, align, sideOffset, tone, className, contentClassName, }: CraftPopoverProps): react_jsx_runtime.JSX.Element;

export { CraftPopover, type CraftPopoverProps };
