import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { ThemeName } from '../theme/theme-context.cjs';

type CraftErrorStateProps = React.HTMLAttributes<HTMLDivElement> & {
    title?: React.ReactNode;
    description?: React.ReactNode;
    actionLabel?: React.ReactNode;
    onAction?: () => void;
    action?: React.ReactNode;
    tone?: ThemeName;
};
declare function CraftErrorState({ title, description, actionLabel, onAction, action, tone, className, ...props }: CraftErrorStateProps): react_jsx_runtime.JSX.Element;

export { CraftErrorState, type CraftErrorStateProps };
