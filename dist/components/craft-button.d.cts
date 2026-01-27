import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { a as ThemeName } from '../theme-context-EVI9PfKv.cjs';

type CraftButtonVariant = "solid" | "ghost" | "outline" | "gradient";
type CraftButtonSize = "sm" | "md" | "lg";
type CraftButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: CraftButtonVariant;
    size?: CraftButtonSize;
    glow?: boolean;
    tone?: ThemeName;
};
declare function CraftButton({ className, variant, size, glow, tone, disabled, ...props }: CraftButtonProps): react_jsx_runtime.JSX.Element;

export { CraftButton, type CraftButtonProps };
