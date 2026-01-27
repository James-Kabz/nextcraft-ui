import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';

type GridProps = React.HTMLAttributes<HTMLDivElement> & {
    columns?: 1 | 2 | 3 | 4 | 5 | 6;
    gap?: "sm" | "md" | "lg" | "xl";
};
declare function Grid({ className, columns, gap, ...props }: GridProps): react_jsx_runtime.JSX.Element;

export { Grid, type GridProps };
