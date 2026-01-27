import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';

type AuthLayoutProps = React.HTMLAttributes<HTMLDivElement> & {
    title?: React.ReactNode;
    description?: React.ReactNode;
    footer?: React.ReactNode;
    graphic?: React.ReactNode;
};
declare function AuthLayout({ className, title, description, footer, graphic, children, ...props }: AuthLayoutProps): react_jsx_runtime.JSX.Element;

export { AuthLayout, type AuthLayoutProps };
