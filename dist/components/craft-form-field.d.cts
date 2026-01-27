import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { FieldValues, Path, RegisterOptions } from 'react-hook-form';
import { a as ThemeName } from '../theme-context-EVI9PfKv.cjs';

type CraftFormFieldOption = {
    label: React.ReactNode;
    value: string;
    disabled?: boolean;
};
type CraftFormFieldType = "text" | "number" | "password" | "textarea" | "select" | "checkbox" | "slider" | "date" | "color" | "email" | "tel" | "url" | "time" | "datetime-local" | "month" | "week" | "file" | "multifile" | "radio" | "switch" | "range" | "search" | "hidden" | "multiselect" | "currency";
type CraftFormFieldProps<TValues extends FieldValues = FieldValues> = {
    name: Path<TValues>;
    label?: React.ReactNode;
    description?: React.ReactNode;
    type?: CraftFormFieldType;
    options?: CraftFormFieldOption[];
    placeholder?: string;
    tone?: ThemeName;
    className?: string;
    inputClassName?: string;
    labelClassName?: string;
    descriptionClassName?: string;
    rules?: RegisterOptions<TValues>;
    disabled?: boolean;
    fieldProps?: Record<string, unknown>;
};
declare function CraftFormField<TValues extends FieldValues = FieldValues>({ name, label, description, type, options, placeholder, tone, className, inputClassName, labelClassName, descriptionClassName, rules, disabled, fieldProps, }: CraftFormFieldProps<TValues>): react_jsx_runtime.JSX.Element;

export { CraftFormField, type CraftFormFieldOption, type CraftFormFieldProps, type CraftFormFieldType };
