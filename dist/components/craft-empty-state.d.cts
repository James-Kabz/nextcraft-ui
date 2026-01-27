import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { a as ThemeName } from '../theme-context-EVI9PfKv.cjs';

type CraftEmptyStateProps = React.HTMLAttributes<HTMLDivElement> & {
    tone?: ThemeName;
    title: string;
    description?: string;
    icon?: React.ReactNode;
    action?: React.ReactNode;
};
declare function CraftEmptyState({ className, tone, title, description, icon, action, ...props }: CraftEmptyStateProps): react_jsx_runtime.JSX.Element;

export { CraftEmptyState, type CraftEmptyStateProps };
