import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { ThemeName } from '../theme/theme-context.cjs';

type CraftSkeletonProps = React.HTMLAttributes<HTMLDivElement> & {
    tone?: ThemeName;
};
declare function CraftSkeleton({ className, tone, ...props }: CraftSkeletonProps): react_jsx_runtime.JSX.Element;

export { CraftSkeleton, type CraftSkeletonProps };
