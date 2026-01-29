import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { ThemeName } from '../theme/theme-context.js';

type CraftDropdownItem = {
    id?: string;
    label: React.ReactNode;
    description?: React.ReactNode;
    icon?: React.ReactNode;
    href?: string;
    onSelect?: () => void;
    disabled?: boolean;
};
type CraftDropdownMenuProps = {
    trigger: React.ReactNode;
    items?: CraftDropdownItem[];
    content?: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    align?: "start" | "center" | "end";
    tone?: ThemeName;
    className?: string;
    menuClassName?: string;
};
declare function CraftDropdownMenu({ trigger, items, content, open, defaultOpen, onOpenChange, align, tone, className, menuClassName, }: CraftDropdownMenuProps): react_jsx_runtime.JSX.Element;

export { type CraftDropdownItem, CraftDropdownMenu, type CraftDropdownMenuProps };
