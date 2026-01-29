import * as react_jsx_runtime from 'react/jsx-runtime';
import { ThemeName } from '../theme/theme-context.js';
import 'react';

type CraftToastVariant = "info" | "success" | "warning" | "error";
type CraftToast = {
    id: string;
    title: string;
    description?: string;
    variant?: CraftToastVariant;
};
declare function useCraftToast(): {
    toasts: CraftToast[];
    push: (toast: Omit<CraftToast, "id">) => string;
    remove: (id: string) => void;
};
type CraftToastHostProps = {
    toasts: CraftToast[];
    onDismiss: (id: string) => void;
    tone?: ThemeName;
};
declare function CraftToastHost({ toasts, onDismiss, tone }: CraftToastHostProps): react_jsx_runtime.JSX.Element;

export { type CraftToast, CraftToastHost, type CraftToastHostProps, type CraftToastVariant, useCraftToast };
