import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';

type ThemeSwitcherProps = React.HTMLAttributes<HTMLDivElement> & {
    showLabels?: boolean;
};
declare function ThemeSwitcher({ className, showLabels, ...props }: ThemeSwitcherProps): react_jsx_runtime.JSX.Element;

export { ThemeSwitcher, type ThemeSwitcherProps };
