import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { a as ThemeName } from '../theme-context-EVI9PfKv.cjs';

type CraftConfirmDialogProps = {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    tone?: ThemeName;
    title?: React.ReactNode;
    description?: React.ReactNode;
    confirmLabel?: React.ReactNode;
    cancelLabel?: React.ReactNode;
    onConfirm?: () => void | Promise<void>;
    trigger?: React.ReactNode;
    className?: string;
    confirmVariant?: "solid" | "gradient" | "outline";
};
declare function CraftConfirmDialog({ open, defaultOpen, onOpenChange, tone, title, description, confirmLabel, cancelLabel, onConfirm, trigger, className, confirmVariant, }: CraftConfirmDialogProps): react_jsx_runtime.JSX.Element;

export { CraftConfirmDialog, type CraftConfirmDialogProps };
