import * as react_jsx_runtime from 'react/jsx-runtime';
import { ThemeName } from '../theme/theme-context.js';
import 'react';

type CraftCardProps = React.HTMLAttributes<HTMLDivElement> & {
    tone?: ThemeName;
    elevated?: boolean;
    intensity?: "subtle" | "medium" | "strong";
    bordered?: boolean;
};
declare function CraftCard({ className, tone, elevated, intensity, bordered, children, ...props }: CraftCardProps): react_jsx_runtime.JSX.Element;

export { CraftCard, type CraftCardProps };
