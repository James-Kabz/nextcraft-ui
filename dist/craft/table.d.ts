import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { a as ThemeName } from '../theme-context-EVI9PfKv.js';

type CraftFilterBarProps = {
    title?: React.ReactNode;
    description?: React.ReactNode;
    searchValue?: string;
    onSearchChange?: (value: string) => void;
    searchPlaceholder?: string;
    actions?: React.ReactNode;
    filters?: React.ReactNode;
    tone?: ThemeName;
    className?: string;
};
declare function CraftFilterBar({ title, description, searchValue, onSearchChange, searchPlaceholder, actions, filters, tone, className, }: CraftFilterBarProps): react_jsx_runtime.JSX.Element;

type CraftTableToolbarProps = {
    title?: React.ReactNode;
    description?: React.ReactNode;
    searchValue?: string;
    onSearchChange?: (value: string) => void;
    searchPlaceholder?: string;
    actions?: React.ReactNode;
    filters?: React.ReactNode;
    bulkActions?: React.ReactNode;
    tone?: ThemeName;
    className?: string;
};
declare function CraftTableToolbar({ title, description, searchValue, onSearchChange, searchPlaceholder, actions, filters, bulkActions, tone, className, }: CraftTableToolbarProps): react_jsx_runtime.JSX.Element;

type CraftDataTableColumn<T> = {
    id: string;
    header: React.ReactNode;
    accessor?: keyof T | ((row: T) => unknown);
    cell?: (row: T) => React.ReactNode;
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
    emptyState?: React.ReactNode;
    toolbar?: React.ReactNode;
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

export { CraftDataTable, type CraftDataTableColumn, type CraftDataTableProps, type CraftDataTableSort, CraftFilterBar, type CraftFilterBarProps, CraftPagination, type CraftPaginationProps, CraftTableToolbar, type CraftTableToolbarProps };
