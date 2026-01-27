import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { ThemeName } from '../theme/theme-context.js';

type CraftLoadingSize = "sm" | "md" | "lg";
type CraftLoadingStateProps = React.HTMLAttributes<HTMLDivElement> & {
    label?: React.ReactNode;
    size?: CraftLoadingSize;
    tone?: ThemeName;
};
declare function CraftLoadingState({ label, size, tone, className, ...props }: CraftLoadingStateProps): react_jsx_runtime.JSX.Element;

export { CraftLoadingState, type CraftLoadingStateProps };
