import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';

type BreadcrumbItem = {
    label: React.ReactNode;
    href?: string;
};
type BreadcrumbsProps = React.HTMLAttributes<HTMLElement> & {
    items: BreadcrumbItem[];
};
declare function Breadcrumbs({ className, items, ...props }: BreadcrumbsProps): react_jsx_runtime.JSX.Element;

export { type BreadcrumbItem, Breadcrumbs, type BreadcrumbsProps };
