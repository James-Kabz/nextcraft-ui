import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';

type PageHeaderProps = React.HTMLAttributes<HTMLDivElement> & {
    title: React.ReactNode;
    description?: React.ReactNode;
    actions?: React.ReactNode;
};
declare function PageHeader({ className, title, description, actions, ...props }: PageHeaderProps): react_jsx_runtime.JSX.Element;

export { PageHeader, type PageHeaderProps };
