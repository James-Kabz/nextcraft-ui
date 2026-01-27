import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React$1 from 'react';
import { a as ThemeName } from '../theme-context-EVI9PfKv.js';
import { FieldValues, UseFormReturn } from 'react-hook-form';
import { LinkProps } from 'next/link';

type CraftButtonVariant = "solid" | "ghost" | "outline" | "gradient";
type CraftButtonSize = "sm" | "md" | "lg";
type CraftButtonProps = React$1.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: CraftButtonVariant;
    size?: CraftButtonSize;
    glow?: boolean;
    tone?: ThemeName;
};
declare function CraftButton({ className, variant, size, glow, tone, disabled, ...props }: CraftButtonProps): react_jsx_runtime.JSX.Element;

type GlassCardProps = React.HTMLAttributes<HTMLDivElement> & {
    tone?: ThemeName;
    intensity?: "subtle" | "medium" | "strong";
    bordered?: boolean;
};
declare function GlassCard({ className, tone, intensity, bordered, children, ...props }: GlassCardProps): react_jsx_runtime.JSX.Element;

type CraftInputSize = "sm" | "md" | "lg";
type CraftInputProps = Omit<React$1.InputHTMLAttributes<HTMLInputElement>, "size"> & {
    tone?: ThemeName;
    inputSize?: CraftInputSize;
    glow?: boolean;
    icon?: React$1.ReactNode;
};
declare const CraftInput: React$1.ForwardRefExoticComponent<Omit<React$1.InputHTMLAttributes<HTMLInputElement>, "size"> & {
    tone?: ThemeName;
    inputSize?: CraftInputSize;
    glow?: boolean;
    icon?: React$1.ReactNode;
} & React$1.RefAttributes<HTMLInputElement>>;

type CraftTextareaProps = React$1.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    tone?: ThemeName;
};
declare const CraftTextarea: React$1.ForwardRefExoticComponent<React$1.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    tone?: ThemeName;
} & React$1.RefAttributes<HTMLTextAreaElement>>;

type CraftSelectProps = React$1.SelectHTMLAttributes<HTMLSelectElement> & {
    tone?: ThemeName;
};
declare const CraftSelect: React$1.ForwardRefExoticComponent<React$1.SelectHTMLAttributes<HTMLSelectElement> & {
    tone?: ThemeName;
} & React$1.RefAttributes<HTMLSelectElement>>;

type CraftCheckboxProps = Omit<React$1.InputHTMLAttributes<HTMLInputElement>, "type"> & {
    tone?: ThemeName;
    label?: React$1.ReactNode;
    description?: React$1.ReactNode;
};
declare const CraftCheckbox: React$1.ForwardRefExoticComponent<Omit<React$1.InputHTMLAttributes<HTMLInputElement>, "type"> & {
    tone?: ThemeName;
    label?: React$1.ReactNode;
    description?: React$1.ReactNode;
} & React$1.RefAttributes<HTMLInputElement>>;

type CraftSwitchProps = Omit<React$1.InputHTMLAttributes<HTMLInputElement>, "type"> & {
    tone?: ThemeName;
    label?: React$1.ReactNode;
};
declare const CraftSwitch: React$1.ForwardRefExoticComponent<Omit<React$1.InputHTMLAttributes<HTMLInputElement>, "type"> & {
    tone?: ThemeName;
    label?: React$1.ReactNode;
} & React$1.RefAttributes<HTMLInputElement>>;

type CraftBadgeVariant = "solid" | "soft" | "outline";
type CraftBadgeProps = React$1.HTMLAttributes<HTMLSpanElement> & {
    variant?: CraftBadgeVariant;
    tone?: ThemeName;
};
declare function CraftBadge({ className, variant, tone, ...props }: CraftBadgeProps): react_jsx_runtime.JSX.Element;

type CraftAlertVariant = "info" | "success" | "warning" | "error";
type CraftAlertProps = React$1.HTMLAttributes<HTMLDivElement> & {
    title?: React$1.ReactNode;
    description?: React$1.ReactNode;
    variant?: CraftAlertVariant;
    icon?: React$1.ReactNode;
    actions?: React$1.ReactNode;
    tone?: ThemeName;
};
declare function CraftAlert({ title, description, variant, icon, actions, tone, className, ...props }: CraftAlertProps): react_jsx_runtime.JSX.Element;

type CraftErrorStateProps = React$1.HTMLAttributes<HTMLDivElement> & {
    title?: React$1.ReactNode;
    description?: React$1.ReactNode;
    actionLabel?: React$1.ReactNode;
    onAction?: () => void;
    action?: React$1.ReactNode;
    tone?: ThemeName;
};
declare function CraftErrorState({ title, description, actionLabel, onAction, action, tone, className, ...props }: CraftErrorStateProps): react_jsx_runtime.JSX.Element;

type CraftLoadingSize = "sm" | "md" | "lg";
type CraftLoadingStateProps = React$1.HTMLAttributes<HTMLDivElement> & {
    label?: React$1.ReactNode;
    size?: CraftLoadingSize;
    tone?: ThemeName;
};
declare function CraftLoadingState({ label, size, tone, className, ...props }: CraftLoadingStateProps): react_jsx_runtime.JSX.Element;

type CraftCardProps = React.HTMLAttributes<HTMLDivElement> & {
    tone?: ThemeName;
    elevated?: boolean;
    intensity?: "subtle" | "medium" | "strong";
    bordered?: boolean;
};
declare function CraftCard({ className, tone, elevated, intensity, bordered, children, ...props }: CraftCardProps): react_jsx_runtime.JSX.Element;

type CraftModalProps = {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    tone?: ThemeName;
    title?: React$1.ReactNode;
    description?: React$1.ReactNode;
    children?: React$1.ReactNode;
    trigger?: React$1.ReactNode;
    footer?: React$1.ReactNode;
    className?: string;
};
declare function CraftModal({ open, defaultOpen, onOpenChange, tone, title, description, children, trigger, footer, className, }: CraftModalProps): react_jsx_runtime.JSX.Element;

type CraftDrawerProps = {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    tone?: ThemeName;
    side?: "right" | "left";
    title?: React$1.ReactNode;
    children?: React$1.ReactNode;
    trigger?: React$1.ReactNode;
    footer?: React$1.ReactNode;
    className?: string;
};
declare function CraftDrawer({ open, defaultOpen, onOpenChange, tone, side, title, children, trigger, footer, className, }: CraftDrawerProps): react_jsx_runtime.JSX.Element;

type CraftTabsProps = {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    tone?: ThemeName;
    tabs: Array<{
        value: string;
        label: React$1.ReactNode;
    }>;
    panels: Record<string, React$1.ReactNode>;
    className?: string;
};
declare function CraftTabs({ value, defaultValue, onValueChange, tone, tabs, panels, className, }: CraftTabsProps): react_jsx_runtime.JSX.Element;

type CraftTooltipProps = {
    content: React$1.ReactNode;
    tone?: ThemeName;
    children: React$1.ReactElement;
    side?: "top" | "bottom" | "left" | "right";
};
declare function CraftTooltip({ content, tone, children, side }: CraftTooltipProps): react_jsx_runtime.JSX.Element;

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

type CraftSkeletonProps = React$1.HTMLAttributes<HTMLDivElement> & {
    tone?: ThemeName;
};
declare function CraftSkeleton({ className, tone, ...props }: CraftSkeletonProps): react_jsx_runtime.JSX.Element;

type CraftEmptyStateProps = React$1.HTMLAttributes<HTMLDivElement> & {
    tone?: ThemeName;
    title: string;
    description?: string;
    icon?: React$1.ReactNode;
    action?: React$1.ReactNode;
};
declare function CraftEmptyState({ className, tone, title, description, icon, action, ...props }: CraftEmptyStateProps): react_jsx_runtime.JSX.Element;

type PopoverAlign = "start" | "center" | "end";
type CraftPopoverProps = {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    trigger: React$1.ReactNode;
    content: React$1.ReactNode;
    align?: PopoverAlign;
    sideOffset?: number;
    tone?: ThemeName;
    className?: string;
    contentClassName?: string;
};
declare function CraftPopover({ open, defaultOpen, onOpenChange, trigger, content, align, sideOffset, tone, className, contentClassName, }: CraftPopoverProps): react_jsx_runtime.JSX.Element;

type CraftDropdownItem = {
    id?: string;
    label: React$1.ReactNode;
    description?: React$1.ReactNode;
    icon?: React$1.ReactNode;
    href?: string;
    onSelect?: () => void;
    disabled?: boolean;
};
type CraftDropdownMenuProps = {
    trigger: React$1.ReactNode;
    items?: CraftDropdownItem[];
    content?: React$1.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    align?: "start" | "center" | "end";
    tone?: ThemeName;
    className?: string;
    menuClassName?: string;
};
declare function CraftDropdownMenu({ trigger, items, content, open, defaultOpen, onOpenChange, align, tone, className, menuClassName, }: CraftDropdownMenuProps): react_jsx_runtime.JSX.Element;

type CraftCommandItem = {
    id: string;
    label: string;
    description?: string;
    keywords?: string[];
    icon?: React$1.ReactNode;
    onSelect?: () => void;
    disabled?: boolean;
};
type CraftCommandPaletteProps = {
    items: CraftCommandItem[];
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    trigger?: React$1.ReactNode;
    title?: React$1.ReactNode;
    placeholder?: string;
    emptyText?: React$1.ReactNode;
    tone?: ThemeName;
    className?: string;
};
declare function CraftCommandPalette({ items, open, defaultOpen, onOpenChange, trigger, title, placeholder, emptyText, tone, className, }: CraftCommandPaletteProps): react_jsx_runtime.JSX.Element;

type CraftLinkVariant = "default" | "muted" | "button" | "ghost";
type CraftLinkProps = LinkProps & React$1.AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: CraftLinkVariant;
    underline?: boolean;
    tone?: ThemeName;
};
declare function CraftLink({ variant, underline, tone, className, children, ...props }: CraftLinkProps): react_jsx_runtime.JSX.Element;

type CraftStatTrend = "up" | "down" | "neutral";
type CraftStatCardProps = React$1.HTMLAttributes<HTMLDivElement> & {
    label: React$1.ReactNode;
    value: React$1.ReactNode;
    delta?: React$1.ReactNode;
    trend?: CraftStatTrend;
    icon?: React$1.ReactNode;
    footer?: React$1.ReactNode;
    tone?: ThemeName;
};
declare function CraftStatCard({ label, value, delta, trend, icon, footer, tone, className, ...props }: CraftStatCardProps): react_jsx_runtime.JSX.Element;

type CraftDatePickerProps = {
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    tone?: ThemeName;
    min?: string;
    max?: string;
    placeholder?: string;
    className?: string;
};
declare function CraftDatePicker({ value, defaultValue, onChange, tone, min, max, placeholder, className, }: CraftDatePickerProps): react_jsx_runtime.JSX.Element;

type CraftIconRegistry = Record<string, React$1.ReactNode>;
type CraftIconProviderProps = {
    icons: CraftIconRegistry;
    children: React$1.ReactNode;
};
declare function CraftIconProvider({ icons, children }: CraftIconProviderProps): react_jsx_runtime.JSX.Element;
type CraftIconProps = {
    name: string;
    className?: string;
    "aria-label"?: string;
    icons?: CraftIconRegistry;
    useLucide?: boolean;
};
declare function CraftIcon({ name, className, "aria-label": ariaLabel, icons, useLucide, }: CraftIconProps): react_jsx_runtime.JSX.Element | null;

type CraftNumberInputProps = React$1.InputHTMLAttributes<HTMLInputElement> & {
    tone?: ThemeName;
};
declare const CraftNumberInput: React$1.ForwardRefExoticComponent<React$1.InputHTMLAttributes<HTMLInputElement> & {
    tone?: ThemeName;
} & React$1.RefAttributes<HTMLInputElement>>;

type CraftCurrencyInputProps = Omit<React$1.InputHTMLAttributes<HTMLInputElement>, "type"> & {
    tone?: ThemeName;
    currencySymbol?: string;
};
declare const CraftCurrencyInput: React$1.ForwardRefExoticComponent<Omit<React$1.InputHTMLAttributes<HTMLInputElement>, "type"> & {
    tone?: ThemeName;
    currencySymbol?: string;
} & React$1.RefAttributes<HTMLInputElement>>;

type CraftSubmitButtonProps = React$1.ButtonHTMLAttributes<HTMLButtonElement> & {
    tone?: ThemeName;
    loading?: boolean;
    loadingLabel?: React$1.ReactNode;
    disableWhenInvalid?: boolean;
};
declare function CraftSubmitButton({ className, tone, loading, loadingLabel, disableWhenInvalid, disabled, children, ...props }: CraftSubmitButtonProps): react_jsx_runtime.JSX.Element;

type CraftConfirmDialogProps = {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    tone?: ThemeName;
    title?: React$1.ReactNode;
    description?: React$1.ReactNode;
    confirmLabel?: React$1.ReactNode;
    cancelLabel?: React$1.ReactNode;
    onConfirm?: () => void | Promise<void>;
    trigger?: React$1.ReactNode;
    className?: string;
    confirmVariant?: "solid" | "gradient" | "outline";
};
declare function CraftConfirmDialog({ open, defaultOpen, onOpenChange, tone, title, description, confirmLabel, cancelLabel, onConfirm, trigger, className, confirmVariant, }: CraftConfirmDialogProps): react_jsx_runtime.JSX.Element;

type CraftCreateEditDrawerProps<TValues extends FieldValues> = {
    mode?: "create" | "edit";
    form: UseFormReturn<TValues>;
    onSubmit: (values: TValues) => void | Promise<void>;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    trigger?: React$1.ReactNode;
    title?: React$1.ReactNode;
    description?: React$1.ReactNode;
    submitLabel?: React$1.ReactNode;
    cancelLabel?: React$1.ReactNode;
    tone?: ThemeName;
    className?: string;
    children?: React$1.ReactNode;
    footer?: React$1.ReactNode;
    disableSubmitWhenInvalid?: boolean;
    closeOnSubmit?: boolean;
    side?: "left" | "right";
};
declare function CraftCreateEditDrawer<TValues extends FieldValues>({ mode, form, onSubmit, open, defaultOpen, onOpenChange, trigger, title, description, submitLabel, cancelLabel, tone, className, children, footer, disableSubmitWhenInvalid, closeOnSubmit, side, }: CraftCreateEditDrawerProps<TValues>): react_jsx_runtime.JSX.Element;

export { CraftAlert, type CraftAlertProps, CraftBadge, type CraftBadgeProps, CraftButton, type CraftButtonProps, CraftCard, type CraftCardProps, CraftCheckbox, type CraftCheckboxProps, type CraftCommandItem, CraftCommandPalette, type CraftCommandPaletteProps, CraftConfirmDialog, type CraftConfirmDialogProps, CraftCreateEditDrawer, type CraftCreateEditDrawerProps, CraftCurrencyInput, type CraftCurrencyInputProps, CraftDatePicker, type CraftDatePickerProps, CraftDrawer, type CraftDrawerProps, type CraftDropdownItem, CraftDropdownMenu, type CraftDropdownMenuProps, CraftEmptyState, type CraftEmptyStateProps, CraftErrorState, type CraftErrorStateProps, CraftIcon, type CraftIconProps, CraftIconProvider, type CraftIconProviderProps, type CraftIconRegistry, CraftInput, type CraftInputProps, CraftLink, type CraftLinkProps, CraftLoadingState, type CraftLoadingStateProps, CraftModal, type CraftModalProps, CraftNumberInput, type CraftNumberInputProps, CraftPopover, type CraftPopoverProps, CraftSelect, type CraftSelectProps, CraftSkeleton, type CraftSkeletonProps, CraftStatCard, type CraftStatCardProps, CraftSubmitButton, type CraftSubmitButtonProps, CraftSwitch, type CraftSwitchProps, CraftTabs, type CraftTabsProps, CraftTextarea, type CraftTextareaProps, type CraftToast, CraftToastHost, type CraftToastHostProps, CraftTooltip, type CraftTooltipProps, GlassCard, type GlassCardProps, useCraftToast };
