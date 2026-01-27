import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { FieldValues, UseFormReturn } from 'react-hook-form';
import { a as ThemeName } from '../theme-context-EVI9PfKv.cjs';

type CraftFormProps<TValues extends FieldValues> = {
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
    formClassName?: string;
};
declare function CraftForm<TValues extends FieldValues>({ form, onSubmit, open, defaultOpen, onOpenChange, trigger, title, description, submitLabel, cancelLabel, tone, className, children, footer, disableSubmitWhenInvalid, closeOnSubmit, formClassName, }: CraftFormProps<TValues>): react_jsx_runtime.JSX.Element;

export { CraftForm, type CraftFormProps };
