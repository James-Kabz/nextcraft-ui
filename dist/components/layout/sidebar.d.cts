import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';

type SidebarItem = {
    label: React.ReactNode;
    href?: string;
    icon?: React.ReactNode | string;
    active?: boolean;
};
type SidebarProps = React.HTMLAttributes<HTMLElement> & {
    title?: React.ReactNode;
    items: SidebarItem[];
    footer?: React.ReactNode;
};
declare function Sidebar({ className, title, items, footer, ...props }: SidebarProps): react_jsx_runtime.JSX.Element;

export { Sidebar, type SidebarItem, type SidebarProps };
