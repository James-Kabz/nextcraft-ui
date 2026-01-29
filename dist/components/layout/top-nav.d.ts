import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';

type TopNavProps = React.HTMLAttributes<HTMLElement> & {
    title?: React.ReactNode;
    actions?: React.ReactNode;
    breadcrumb?: React.ReactNode;
};
declare function TopNav({ className, title, actions, breadcrumb, ...props }: TopNavProps): react_jsx_runtime.JSX.Element;

export { TopNav, type TopNavProps };
