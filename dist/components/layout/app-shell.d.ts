import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';

type AppShellProps = React.HTMLAttributes<HTMLDivElement> & {
    sidebar?: React.ReactNode;
    topNav?: React.ReactNode;
};
declare function AppShell({ className, sidebar, topNav, children, ...props }: AppShellProps): react_jsx_runtime.JSX.Element;

export { AppShell, type AppShellProps };
