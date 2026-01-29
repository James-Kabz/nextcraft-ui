import * as react_jsx_runtime from 'react/jsx-runtime';
import { ThemeName } from '../theme/theme-context.js';
import 'react';

type GlassCardProps = React.HTMLAttributes<HTMLDivElement> & {
    tone?: ThemeName;
    intensity?: "subtle" | "medium" | "strong";
    bordered?: boolean;
};
declare function GlassCard({ className, tone, intensity, bordered, children, ...props }: GlassCardProps): react_jsx_runtime.JSX.Element;

export { GlassCard, type GlassCardProps };
