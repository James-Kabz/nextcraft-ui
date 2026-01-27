import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { LayoutConfig } from './layout-config.cjs';

type AppTemplateProps = {
    config: LayoutConfig;
    headerActions?: React.ReactNode;
    headerBreadcrumb?: React.ReactNode;
    sidebarFooter?: React.ReactNode;
    resolveIcon?: (name: string) => React.ReactNode;
    icons?: Record<string, React.ReactNode>;
    activePath?: string;
    getActivePath?: () => string | undefined;
    lucideFallback?: boolean;
    children: React.ReactNode;
};
declare function AppTemplate({ config, headerActions, headerBreadcrumb, sidebarFooter, resolveIcon, icons, activePath, getActivePath, lucideFallback, children, }: AppTemplateProps): react_jsx_runtime.JSX.Element;

export { AppTemplate, type AppTemplateProps };
