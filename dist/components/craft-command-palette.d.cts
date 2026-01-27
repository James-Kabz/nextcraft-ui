import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { ThemeName } from '../theme/theme-context.cjs';

type CraftCommandItem = {
    id: string;
    label: string;
    description?: string;
    keywords?: string[];
    icon?: React.ReactNode;
    onSelect?: () => void;
    disabled?: boolean;
};
type CraftCommandPaletteProps = {
    items: CraftCommandItem[];
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    trigger?: React.ReactNode;
    title?: React.ReactNode;
    placeholder?: string;
    emptyText?: React.ReactNode;
    tone?: ThemeName;
    className?: string;
};
declare function CraftCommandPalette({ items, open, defaultOpen, onOpenChange, trigger, title, placeholder, emptyText, tone, className, }: CraftCommandPaletteProps): react_jsx_runtime.JSX.Element;

export { type CraftCommandItem, CraftCommandPalette, type CraftCommandPaletteProps };
