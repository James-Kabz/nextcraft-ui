import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { a as ThemeName } from '../theme-context-EVI9PfKv.js';

type CraftModalProps = {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    tone?: ThemeName;
    title?: React.ReactNode;
    description?: React.ReactNode;
    children?: React.ReactNode;
    trigger?: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
};
declare function CraftModal({ open, defaultOpen, onOpenChange, tone, title, description, children, trigger, footer, className, }: CraftModalProps): react_jsx_runtime.JSX.Element;

export { CraftModal, type CraftModalProps };
