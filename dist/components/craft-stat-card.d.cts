import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { ThemeName } from '../theme/theme-context.cjs';

type CraftStatTrend = "up" | "down" | "neutral";
type CraftStatCardProps = React.HTMLAttributes<HTMLDivElement> & {
    label: React.ReactNode;
    value: React.ReactNode;
    delta?: React.ReactNode;
    trend?: CraftStatTrend;
    icon?: React.ReactNode;
    footer?: React.ReactNode;
    tone?: ThemeName;
};
declare function CraftStatCard({ label, value, delta, trend, icon, footer, tone, className, ...props }: CraftStatCardProps): react_jsx_runtime.JSX.Element;

export { CraftStatCard, type CraftStatCardProps };
