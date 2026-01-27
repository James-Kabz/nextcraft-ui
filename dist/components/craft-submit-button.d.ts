import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { a as ThemeName } from '../theme-context-EVI9PfKv.js';

type CraftSubmitButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    tone?: ThemeName;
    loading?: boolean;
    loadingLabel?: React.ReactNode;
    disableWhenInvalid?: boolean;
};
declare function CraftSubmitButton({ className, tone, loading, loadingLabel, disableWhenInvalid, disabled, children, ...props }: CraftSubmitButtonProps): react_jsx_runtime.JSX.Element;

export { CraftSubmitButton, type CraftSubmitButtonProps };
