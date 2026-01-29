import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { ThemeName } from '../theme/theme-context.cjs';

type CraftButtonVariant = "solid" | "ghost" | "outline" | "gradient";
type CraftButtonSize = "sm" | "md" | "lg";
type CraftButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: CraftButtonVariant;
    size?: CraftButtonSize;
    tone?: ThemeName;
    glow?: boolean;
    loading?: boolean;
    loadingText?: React.ReactNode;
    icon?: string | React.ReactNode;
};
declare function CraftButton({ className, variant, size, tone, disabled, glow, loading, loadingText, icon, children, ...props }: CraftButtonProps): react_jsx_runtime.JSX.Element;

export { CraftButton, type CraftButtonProps };
