import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { ThemeName } from '../theme/theme-context.js';

type CraftDataTablePaginationProps = {
    currentPage: number;
    totalPages: number;
    total: number;
    pageSize: number;
    selectable?: boolean;
    selectedCount?: number;
    showPagination?: boolean;
    loading?: boolean;
    disabled?: boolean;
    onPageChange?: (page: number) => void;
    onPageSizeChange?: (size: number) => void;
    variant?: "default" | "minimal";
    padding?: "compact" | "normal" | "comfortable";
    tone?: ThemeName;
    className?: string;
    footer?: React.ReactNode;
};
declare function CraftDataTablePagination({ currentPage, totalPages, total, pageSize, selectable, selectedCount, showPagination, loading, disabled, onPageChange, onPageSizeChange, variant, padding, tone, className, footer, }: CraftDataTablePaginationProps): react_jsx_runtime.JSX.Element | null;

export { CraftDataTablePagination, type CraftDataTablePaginationProps };
