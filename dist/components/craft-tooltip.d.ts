import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { a as ThemeName } from '../theme-context-EVI9PfKv.js';

type CraftTooltipProps = {
    content: React.ReactNode;
    tone?: ThemeName;
    children: React.ReactElement;
    side?: "top" | "bottom" | "left" | "right";
};
declare function CraftTooltip({ content, tone, children, side }: CraftTooltipProps): react_jsx_runtime.JSX.Element;

export { CraftTooltip, type CraftTooltipProps };
