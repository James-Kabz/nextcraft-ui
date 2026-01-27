import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { LinkProps } from 'next/link';
import { ThemeName } from '../theme/theme-context.cjs';

type CraftLinkVariant = "default" | "muted" | "button" | "ghost";
type CraftLinkProps = LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: CraftLinkVariant;
    underline?: boolean;
    tone?: ThemeName;
};
declare function CraftLink({ variant, underline, tone, className, children, ...props }: CraftLinkProps): react_jsx_runtime.JSX.Element;

export { CraftLink, type CraftLinkProps };
