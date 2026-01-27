import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { ThemeName } from '../theme/theme-context.cjs';

type CraftAlertVariant = "info" | "success" | "warning" | "error";
type CraftAlertProps = React.HTMLAttributes<HTMLDivElement> & {
    title?: React.ReactNode;
    description?: React.ReactNode;
    variant?: CraftAlertVariant;
    icon?: React.ReactNode;
    actions?: React.ReactNode;
    tone?: ThemeName;
};
declare function CraftAlert({ title, description, variant, icon, actions, tone, className, ...props }: CraftAlertProps): react_jsx_runtime.JSX.Element;

export { CraftAlert, type CraftAlertProps };
