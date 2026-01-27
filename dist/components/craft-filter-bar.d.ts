import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { a as ThemeName } from '../theme-context-EVI9PfKv.js';

type CraftFilterBarProps = {
    title?: React.ReactNode;
    description?: React.ReactNode;
    searchValue?: string;
    onSearchChange?: (value: string) => void;
    searchPlaceholder?: string;
    actions?: React.ReactNode;
    filters?: React.ReactNode;
    tone?: ThemeName;
    className?: string;
};
declare function CraftFilterBar({ title, description, searchValue, onSearchChange, searchPlaceholder, actions, filters, tone, className, }: CraftFilterBarProps): react_jsx_runtime.JSX.Element;

export { CraftFilterBar, type CraftFilterBarProps };
