import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { ThemeName } from '../theme/theme-context.js';

type CraftLoaderType = "spin" | "pulse" | "bounce" | "ripple" | "bars" | "dots" | "ring";
type CraftLoaderSize = "small" | "medium" | "large" | "xl";
type CraftLoaderProps = {
    loading?: boolean;
    type?: CraftLoaderType;
    size?: CraftLoaderSize;
    color?: string;
    overlay?: boolean;
    text?: React.ReactNode;
    textPosition?: "top" | "bottom";
    backgroundColor?: string;
    tone?: ThemeName;
    className?: string;
};
declare function CraftLoader({ loading, type, size, color, overlay, text, textPosition, backgroundColor, tone, className, }: CraftLoaderProps): react_jsx_runtime.JSX.Element | null;

export { CraftLoader, type CraftLoaderProps, type CraftLoaderSize, type CraftLoaderType };
