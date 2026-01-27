import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
    size?: "sm" | "md" | "lg" | "xl";
};
declare function Container({ className, size, ...props }: ContainerProps): react_jsx_runtime.JSX.Element;

export { Container, type ContainerProps };
