import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { ThemeName } from '../theme/theme-context.js';

type CraftBadgeVariant = "solid" | "soft" | "outline";
type CraftBadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
    variant?: CraftBadgeVariant;
    tone?: ThemeName;
};
declare function CraftBadge({ className, variant, tone, ...props }: CraftBadgeProps): react_jsx_runtime.JSX.Element;

export { CraftBadge, type CraftBadgeProps, type CraftBadgeVariant };
