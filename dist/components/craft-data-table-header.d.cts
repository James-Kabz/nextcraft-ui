import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { ThemeName } from '../theme/theme-context.cjs';

type CraftDataTableHeaderProps = {
    title?: React.ReactNode;
    description?: React.ReactNode;
    actions?: React.ReactNode;
    filters?: React.ReactNode;
    tone?: ThemeName;
    variant?: "default" | "minimal";
    padding?: "compact" | "normal" | "comfortable";
    className?: string;
};
declare function CraftDataTableHeader({ title, description, actions, filters, tone, variant, padding, className, }: CraftDataTableHeaderProps): react_jsx_runtime.JSX.Element | null;

export { CraftDataTableHeader, type CraftDataTableHeaderProps };
