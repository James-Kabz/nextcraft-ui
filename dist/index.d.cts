import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React$1 from 'react';
import { LinkProps } from 'next/link';
import { FieldValues, UseFormReturn, Path, RegisterOptions } from 'react-hook-form';

type ThemeName = "aurora" | "ember" | "ocean" | "midnight" | "cosmic";
type ThemeMode = "light" | "dark" | "system";
type ThemeContextValue = {
    theme: ThemeName;
    mode: ThemeMode;
    setTheme: (theme: ThemeName) => void;
    setMode: (mode: ThemeMode) => void;
};
type ThemeProviderProps = {
    children: React$1.ReactNode;
    defaultTheme?: ThemeName;
    defaultMode?: ThemeMode;
    storageKeyTheme?: string;
    storageKeyMode?: string;
};
declare function ThemeProvider({ children, defaultTheme, defaultMode, storageKeyTheme, storageKeyMode, }: ThemeProviderProps): react_jsx_runtime.JSX.Element;
declare function useTheme(): ThemeContextValue;

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

type CraftFormProps<TValues extends FieldValues> = {
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
    formClassName?: string;
};
declare function CraftForm<TValues extends FieldValues>({ form, onSubmit, open, defaultOpen, onOpenChange, trigger, title, description, submitLabel, cancelLabel, tone, className, children, footer, disableSubmitWhenInvalid, closeOnSubmit, formClassName, }: CraftFormProps<TValues>): react_jsx_runtime.JSX.Element;

type CraftFormFieldOption = {
    label: React$1.ReactNode;
    value: string;
    disabled?: boolean;
};
type CraftFormFieldType = "text" | "number" | "password" | "textarea" | "select" | "checkbox" | "slider" | "date" | "color" | "email" | "tel" | "url" | "time" | "datetime-local" | "month" | "week" | "file" | "multifile" | "radio" | "switch" | "range" | "search" | "hidden" | "multiselect" | "currency";
type CraftFormFieldProps<TValues extends FieldValues = FieldValues> = {
    name: Path<TValues>;
    label?: React$1.ReactNode;
    description?: React$1.ReactNode;
    type?: CraftFormFieldType;
    options?: CraftFormFieldOption[];
    placeholder?: string;
    tone?: ThemeName;
    className?: string;
    inputClassName?: string;
    labelClassName?: string;
    descriptionClassName?: string;
    rules?: RegisterOptions<TValues>;
    disabled?: boolean;
    fieldProps?: Record<string, unknown>;
};
declare function CraftFormField<TValues extends FieldValues = FieldValues>({ name, label, description, type, options, placeholder, tone, className, inputClassName, labelClassName, descriptionClassName, rules, disabled, fieldProps, }: CraftFormFieldProps<TValues>): react_jsx_runtime.JSX.Element;

type CraftFormBuilderField<TValues extends FieldValues> = {
    name: Path<TValues>;
    label?: React$1.ReactNode;
    description?: React$1.ReactNode;
    type: CraftFormFieldType;
    placeholder?: string;
    options?: CraftFormFieldOption[];
    required?: boolean;
    disabled?: boolean;
    rules?: RegisterOptions<TValues>;
    defaultValue?: unknown;
    min?: number;
    max?: number;
    step?: number;
    rows?: number;
    accept?: string;
    minFiles?: number;
    maxFiles?: number;
    helpText?: React$1.ReactNode;
    fieldProps?: Record<string, unknown>;
    validate?: (value: unknown, values: TValues) => string | boolean | undefined;
};
type CraftFormBuilderProps<TValues extends FieldValues> = {
    title?: React$1.ReactNode;
    description?: React$1.ReactNode;
    fields: Array<CraftFormBuilderField<TValues>>;
    initialData?: Partial<TValues> | null;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    trigger?: React$1.ReactNode;
    submitLabel?: React$1.ReactNode;
    cancelLabel?: React$1.ReactNode;
    resetLabel?: React$1.ReactNode;
    showReset?: boolean;
    showCancel?: boolean;
    tone?: ThemeName;
    className?: string;
    formClassName?: string;
    loading?: boolean;
    disableSubmitWhenInvalid?: boolean;
    closeOnSubmit?: boolean;
    closeOnCancel?: boolean;
    onSubmit: (values: TValues) => void | Promise<void>;
    onReset?: () => void;
    onCancel?: () => void;
    customValidation?: (values: TValues) => Partial<Record<Path<TValues>, string>>;
};
declare function CraftFormBuilder<TValues extends FieldValues>({ title, description, fields, initialData, open, defaultOpen, onOpenChange, trigger, submitLabel, cancelLabel, resetLabel, showReset, showCancel, tone, className, formClassName, loading, disableSubmitWhenInvalid, closeOnSubmit, closeOnCancel, onSubmit, onReset, onCancel, customValidation, }: CraftFormBuilderProps<TValues>): react_jsx_runtime.JSX.Element;

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

type CraftFilterBarProps = {
    title?: React$1.ReactNode;
    description?: React$1.ReactNode;
    searchValue?: string;
    onSearchChange?: (value: string) => void;
    searchPlaceholder?: string;
    actions?: React$1.ReactNode;
    filters?: React$1.ReactNode;
    tone?: ThemeName;
    className?: string;
};
declare function CraftFilterBar({ title, description, searchValue, onSearchChange, searchPlaceholder, actions, filters, tone, className, }: CraftFilterBarProps): react_jsx_runtime.JSX.Element;

type CraftTableToolbarProps = {
    title?: React$1.ReactNode;
    description?: React$1.ReactNode;
    searchValue?: string;
    onSearchChange?: (value: string) => void;
    searchPlaceholder?: string;
    actions?: React$1.ReactNode;
    filters?: React$1.ReactNode;
    bulkActions?: React$1.ReactNode;
    tone?: ThemeName;
    className?: string;
};
declare function CraftTableToolbar({ title, description, searchValue, onSearchChange, searchPlaceholder, actions, filters, bulkActions, tone, className, }: CraftTableToolbarProps): react_jsx_runtime.JSX.Element;

type CraftDataTableColumn<T> = {
    id: string;
    header: React$1.ReactNode;
    accessor?: keyof T | ((row: T) => unknown);
    cell?: (row: T) => React$1.ReactNode;
    sortable?: boolean;
    filterable?: boolean;
    width?: string | number;
    align?: "left" | "center" | "right";
    hidden?: boolean;
    headerClassName?: string;
    cellClassName?: string;
};
type CraftDataTableSort = {
    id: string;
    desc?: boolean;
};
type CraftDataTableProps<T> = {
    data: T[];
    columns: CraftDataTableColumn<T>[];
    tone?: ThemeName;
    className?: string;
    loading?: boolean;
    emptyState?: React$1.ReactNode;
    toolbar?: React$1.ReactNode;
    enableSorting?: boolean;
    enableFiltering?: boolean;
    enableColumnVisibility?: boolean;
    enableRowSelection?: boolean;
    enablePagination?: boolean;
    showGlobalFilter?: boolean;
    manualSorting?: boolean;
    manualFiltering?: boolean;
    manualPagination?: boolean;
    sortBy?: CraftDataTableSort | null;
    onSortChange?: (sort: CraftDataTableSort | null) => void;
    filters?: Record<string, string>;
    onFiltersChange?: (filters: Record<string, string>) => void;
    globalFilter?: string;
    onGlobalFilterChange?: (value: string) => void;
    columnVisibility?: Record<string, boolean>;
    onColumnVisibilityChange?: (visibility: Record<string, boolean>) => void;
    selectedRowIds?: Record<string, boolean>;
    onRowSelectionChange?: (selection: Record<string, boolean>) => void;
    getRowId?: (row: T, index: number) => string;
    pageIndex?: number;
    pageSize?: number;
    pageCount?: number;
    onPageChange?: (pageIndex: number) => void;
    onPageSizeChange?: (size: number) => void;
};
declare function CraftDataTable<T>({ data, columns, tone, className, loading, emptyState, toolbar, enableSorting, enableFiltering, enableColumnVisibility, enableRowSelection, enablePagination, showGlobalFilter, manualSorting, manualFiltering, manualPagination, sortBy, onSortChange, filters, onFiltersChange, globalFilter, onGlobalFilterChange, columnVisibility, onColumnVisibilityChange, selectedRowIds, onRowSelectionChange, getRowId, pageIndex, pageSize, pageCount, onPageChange, onPageSizeChange, }: CraftDataTableProps<T>): react_jsx_runtime.JSX.Element;

type CraftPaginationProps = {
    pageIndex: number;
    pageCount: number;
    onPageChange: (page: number) => void;
    canPrevious?: boolean;
    canNext?: boolean;
    pageSize?: number;
    pageSizeOptions?: number[];
    onPageSizeChange?: (size: number) => void;
    tone?: ThemeName;
    className?: string;
};
declare function CraftPagination({ pageIndex, pageCount, onPageChange, canPrevious, canNext, pageSize, pageSizeOptions, onPageSizeChange, tone, className, }: CraftPaginationProps): react_jsx_runtime.JSX.Element;

type AppShellProps = React$1.HTMLAttributes<HTMLDivElement> & {
    sidebar?: React$1.ReactNode;
    topNav?: React$1.ReactNode;
};
declare function AppShell({ className, sidebar, topNav, children, ...props }: AppShellProps): react_jsx_runtime.JSX.Element;

type LayoutIconName = string;
type LayoutBreadcrumbItem = {
    label: string;
    href?: string;
};
type LayoutSidebarItem = {
    label: string;
    href?: string;
    icon?: LayoutIconName;
    active?: boolean;
};
type LayoutConfig = {
    sidebar?: {
        title?: string;
        items: LayoutSidebarItem[];
        footerText?: string;
    };
    header?: {
        title?: string;
        breadcrumb?: LayoutBreadcrumbItem[];
    };
};
declare const layoutConfigSchema: {
    readonly $schema: "https://json-schema.org/draft/2020-12/schema";
    readonly title: "Nextcraft UI Layout Config";
    readonly type: "object";
    readonly additionalProperties: false;
    readonly properties: {
        readonly sidebar: {
            readonly type: "object";
            readonly additionalProperties: false;
            readonly properties: {
                readonly title: {
                    readonly type: "string";
                };
                readonly footerText: {
                    readonly type: "string";
                };
                readonly items: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly additionalProperties: false;
                        readonly properties: {
                            readonly label: {
                                readonly type: "string";
                            };
                            readonly href: {
                                readonly type: "string";
                            };
                            readonly icon: {
                                readonly type: "string";
                            };
                            readonly active: {
                                readonly type: "boolean";
                            };
                        };
                        readonly required: readonly ["label"];
                    };
                };
            };
            readonly required: readonly ["items"];
        };
        readonly header: {
            readonly type: "object";
            readonly additionalProperties: false;
            readonly properties: {
                readonly title: {
                    readonly type: "string";
                };
                readonly breadcrumb: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly additionalProperties: false;
                        readonly properties: {
                            readonly label: {
                                readonly type: "string";
                            };
                            readonly href: {
                                readonly type: "string";
                            };
                        };
                        readonly required: readonly ["label"];
                    };
                };
            };
        };
    };
};

type AppTemplateProps = {
    config: LayoutConfig;
    headerActions?: React$1.ReactNode;
    headerBreadcrumb?: React$1.ReactNode;
    sidebarFooter?: React$1.ReactNode;
    resolveIcon?: (name: string) => React$1.ReactNode;
    icons?: Record<string, React$1.ReactNode>;
    activePath?: string;
    getActivePath?: () => string | undefined;
    lucideFallback?: boolean;
    children: React$1.ReactNode;
};
declare function AppTemplate({ config, headerActions, headerBreadcrumb, sidebarFooter, resolveIcon, icons, activePath, getActivePath, lucideFallback, children, }: AppTemplateProps): react_jsx_runtime.JSX.Element;

type SidebarItem = {
    label: React$1.ReactNode;
    href?: string;
    icon?: React$1.ReactNode;
    active?: boolean;
};
type SidebarProps = React$1.HTMLAttributes<HTMLElement> & {
    title?: React$1.ReactNode;
    items: SidebarItem[];
    footer?: React$1.ReactNode;
};
declare function Sidebar({ className, title, items, footer, ...props }: SidebarProps): react_jsx_runtime.JSX.Element;

type TopNavProps = React$1.HTMLAttributes<HTMLElement> & {
    title?: React$1.ReactNode;
    actions?: React$1.ReactNode;
    breadcrumb?: React$1.ReactNode;
};
declare function TopNav({ className, title, actions, breadcrumb, ...props }: TopNavProps): react_jsx_runtime.JSX.Element;

type PageHeaderProps = React$1.HTMLAttributes<HTMLDivElement> & {
    title: React$1.ReactNode;
    description?: React$1.ReactNode;
    actions?: React$1.ReactNode;
};
declare function PageHeader({ className, title, description, actions, ...props }: PageHeaderProps): react_jsx_runtime.JSX.Element;

type BreadcrumbItem = {
    label: React$1.ReactNode;
    href?: string;
};
type BreadcrumbsProps = React$1.HTMLAttributes<HTMLElement> & {
    items: BreadcrumbItem[];
};
declare function Breadcrumbs({ className, items, ...props }: BreadcrumbsProps): react_jsx_runtime.JSX.Element;

type AuthLayoutProps = React$1.HTMLAttributes<HTMLDivElement> & {
    title?: React$1.ReactNode;
    description?: React$1.ReactNode;
    footer?: React$1.ReactNode;
    graphic?: React$1.ReactNode;
};
declare function AuthLayout({ className, title, description, footer, graphic, children, ...props }: AuthLayoutProps): react_jsx_runtime.JSX.Element;

type ContainerProps = React$1.HTMLAttributes<HTMLDivElement> & {
    size?: "sm" | "md" | "lg" | "xl";
};
declare function Container({ className, size, ...props }: ContainerProps): react_jsx_runtime.JSX.Element;

type GridProps = React$1.HTMLAttributes<HTMLDivElement> & {
    columns?: 1 | 2 | 3 | 4 | 5 | 6;
    gap?: "sm" | "md" | "lg" | "xl";
};
declare function Grid({ className, columns, gap, ...props }: GridProps): react_jsx_runtime.JSX.Element;

type ThemeSwitcherProps = React$1.HTMLAttributes<HTMLDivElement> & {
    showLabels?: boolean;
};
declare function ThemeSwitcher({ className, showLabels, ...props }: ThemeSwitcherProps): react_jsx_runtime.JSX.Element;

export { AppShell, type AppShellProps, AppTemplate, type AppTemplateProps, AuthLayout, type AuthLayoutProps, type BreadcrumbItem, Breadcrumbs, type BreadcrumbsProps, Container, type ContainerProps, CraftAlert, type CraftAlertProps, CraftBadge, type CraftBadgeProps, CraftButton, type CraftButtonProps, CraftCard, type CraftCardProps, CraftCheckbox, type CraftCheckboxProps, type CraftCommandItem, CraftCommandPalette, type CraftCommandPaletteProps, CraftConfirmDialog, type CraftConfirmDialogProps, CraftCreateEditDrawer, type CraftCreateEditDrawerProps, CraftCurrencyInput, type CraftCurrencyInputProps, CraftDataTable, type CraftDataTableColumn, type CraftDataTableProps, type CraftDataTableSort, CraftDatePicker, type CraftDatePickerProps, CraftDrawer, type CraftDrawerProps, type CraftDropdownItem, CraftDropdownMenu, type CraftDropdownMenuProps, CraftEmptyState, type CraftEmptyStateProps, CraftErrorState, type CraftErrorStateProps, CraftFilterBar, type CraftFilterBarProps, CraftForm, CraftFormBuilder, type CraftFormBuilderField, type CraftFormBuilderProps, CraftFormField, type CraftFormFieldOption, type CraftFormFieldProps, type CraftFormFieldType, type CraftFormProps, CraftIcon, type CraftIconProps, CraftIconProvider, type CraftIconProviderProps, type CraftIconRegistry, CraftInput, type CraftInputProps, CraftLink, type CraftLinkProps, CraftLoadingState, type CraftLoadingStateProps, CraftModal, type CraftModalProps, CraftNumberInput, type CraftNumberInputProps, CraftPagination, type CraftPaginationProps, CraftPopover, type CraftPopoverProps, CraftSelect, type CraftSelectProps, CraftSkeleton, type CraftSkeletonProps, CraftStatCard, type CraftStatCardProps, CraftSubmitButton, type CraftSubmitButtonProps, CraftSwitch, type CraftSwitchProps, CraftTableToolbar, type CraftTableToolbarProps, CraftTabs, type CraftTabsProps, CraftTextarea, type CraftTextareaProps, type CraftToast, CraftToastHost, type CraftToastHostProps, CraftTooltip, type CraftTooltipProps, GlassCard, type GlassCardProps, Grid, type GridProps, type LayoutBreadcrumbItem, type LayoutConfig, type LayoutIconName, type LayoutSidebarItem, PageHeader, type PageHeaderProps, Sidebar, type SidebarItem, type SidebarProps, type ThemeMode, type ThemeName, ThemeProvider, ThemeSwitcher, type ThemeSwitcherProps, TopNav, type TopNavProps, layoutConfigSchema, useCraftToast, useTheme };
