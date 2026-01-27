import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';

type AppShellProps = React.HTMLAttributes<HTMLDivElement> & {
    sidebar?: React.ReactNode;
    topNav?: React.ReactNode;
};
declare function AppShell({ className, sidebar, topNav, children, ...props }: AppShellProps): react_jsx_runtime.JSX.Element;

type LayoutIconName = string;
type LayoutBreadcrumbItem = {
    label: string;
    href?: string;
};
type LayoutSidebarItem = {
    label: string;
    href?: string;
    icon?: LayoutIconName;
    active?: boolean;
};
type LayoutConfig = {
    sidebar?: {
        title?: string;
        items: LayoutSidebarItem[];
        footerText?: string;
    };
    header?: {
        title?: string;
        breadcrumb?: LayoutBreadcrumbItem[];
    };
};
declare const layoutConfigSchema: {
    readonly $schema: "https://json-schema.org/draft/2020-12/schema";
    readonly title: "Nextcraft UI Layout Config";
    readonly type: "object";
    readonly additionalProperties: false;
    readonly properties: {
        readonly sidebar: {
            readonly type: "object";
            readonly additionalProperties: false;
            readonly properties: {
                readonly title: {
                    readonly type: "string";
                };
                readonly footerText: {
                    readonly type: "string";
                };
                readonly items: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly additionalProperties: false;
                        readonly properties: {
                            readonly label: {
                                readonly type: "string";
                            };
                            readonly href: {
                                readonly type: "string";
                            };
                            readonly icon: {
                                readonly type: "string";
                            };
                            readonly active: {
                                readonly type: "boolean";
                            };
                        };
                        readonly required: readonly ["label"];
                    };
                };
            };
            readonly required: readonly ["items"];
        };
        readonly header: {
            readonly type: "object";
            readonly additionalProperties: false;
            readonly properties: {
                readonly title: {
                    readonly type: "string";
                };
                readonly breadcrumb: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly additionalProperties: false;
                        readonly properties: {
                            readonly label: {
                                readonly type: "string";
                            };
                            readonly href: {
                                readonly type: "string";
                            };
                        };
                        readonly required: readonly ["label"];
                    };
                };
            };
        };
    };
};

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

type SidebarItem = {
    label: React.ReactNode;
    href?: string;
    icon?: React.ReactNode;
    active?: boolean;
};
type SidebarProps = React.HTMLAttributes<HTMLElement> & {
    title?: React.ReactNode;
    items: SidebarItem[];
    footer?: React.ReactNode;
};
declare function Sidebar({ className, title, items, footer, ...props }: SidebarProps): react_jsx_runtime.JSX.Element;

type TopNavProps = React.HTMLAttributes<HTMLElement> & {
    title?: React.ReactNode;
    actions?: React.ReactNode;
    breadcrumb?: React.ReactNode;
};
declare function TopNav({ className, title, actions, breadcrumb, ...props }: TopNavProps): react_jsx_runtime.JSX.Element;

type PageHeaderProps = React.HTMLAttributes<HTMLDivElement> & {
    title: React.ReactNode;
    description?: React.ReactNode;
    actions?: React.ReactNode;
};
declare function PageHeader({ className, title, description, actions, ...props }: PageHeaderProps): react_jsx_runtime.JSX.Element;

type BreadcrumbItem = {
    label: React.ReactNode;
    href?: string;
};
type BreadcrumbsProps = React.HTMLAttributes<HTMLElement> & {
    items: BreadcrumbItem[];
};
declare function Breadcrumbs({ className, items, ...props }: BreadcrumbsProps): react_jsx_runtime.JSX.Element;

type AuthLayoutProps = React.HTMLAttributes<HTMLDivElement> & {
    title?: React.ReactNode;
    description?: React.ReactNode;
    footer?: React.ReactNode;
    graphic?: React.ReactNode;
};
declare function AuthLayout({ className, title, description, footer, graphic, children, ...props }: AuthLayoutProps): react_jsx_runtime.JSX.Element;

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
    size?: "sm" | "md" | "lg" | "xl";
};
declare function Container({ className, size, ...props }: ContainerProps): react_jsx_runtime.JSX.Element;

type GridProps = React.HTMLAttributes<HTMLDivElement> & {
    columns?: 1 | 2 | 3 | 4 | 5 | 6;
    gap?: "sm" | "md" | "lg" | "xl";
};
declare function Grid({ className, columns, gap, ...props }: GridProps): react_jsx_runtime.JSX.Element;

export { AppShell, type AppShellProps, AppTemplate, type AppTemplateProps, AuthLayout, type AuthLayoutProps, type BreadcrumbItem, Breadcrumbs, type BreadcrumbsProps, Container, type ContainerProps, Grid, type GridProps, type LayoutBreadcrumbItem, type LayoutConfig, type LayoutIconName, type LayoutSidebarItem, PageHeader, type PageHeaderProps, Sidebar, type SidebarItem, type SidebarProps, TopNav, type TopNavProps, layoutConfigSchema };
