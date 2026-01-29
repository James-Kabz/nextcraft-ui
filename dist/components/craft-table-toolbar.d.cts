import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { ThemeName } from '../theme/theme-context.cjs';

type CraftTableToolbarProps = {
    title?: React.ReactNode;
    description?: React.ReactNode;
    searchValue?: string;
    onSearchChange?: (value: string) => void;
    searchPlaceholder?: string;
    actions?: React.ReactNode;
    filters?: React.ReactNode;
    bulkActions?: React.ReactNode;
    tone?: ThemeName;
    className?: string;
};
declare function CraftTableToolbar({ title, description, searchValue, onSearchChange, searchPlaceholder, actions, filters, bulkActions, tone, className, }: CraftTableToolbarProps): react_jsx_runtime.JSX.Element;

export { CraftTableToolbar, type CraftTableToolbarProps };
