import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';
import { ThemeName } from '../theme/theme-context.js';

type CraftCreateEditDrawerProps<TValues extends FieldValues> = {
    mode?: "create" | "edit";
    form: UseFormReturn<TValues>;
    onSubmit: (values: TValues) => void | Promise<void>;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    trigger?: React.ReactNode;
    title?: React.ReactNode;
    description?: React.ReactNode;
    submitLabel?: React.ReactNode;
    cancelLabel?: React.ReactNode;
    tone?: ThemeName;
    className?: string;
    children?: React.ReactNode;
    footer?: React.ReactNode;
    disableSubmitWhenInvalid?: boolean;
    closeOnSubmit?: boolean;
    side?: "left" | "right";
};
declare function CraftCreateEditDrawer<TValues extends FieldValues>({ mode, form, onSubmit, open, defaultOpen, onOpenChange, trigger, title, description, submitLabel, cancelLabel, tone, className, children, footer, disableSubmitWhenInvalid, closeOnSubmit, side, }: CraftCreateEditDrawerProps<TValues>): react_jsx_runtime.JSX.Element;

export { CraftCreateEditDrawer, type CraftCreateEditDrawerProps };
