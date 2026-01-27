import * as react_jsx_runtime from 'react/jsx-runtime';
import { a as ThemeName } from '../theme-context-EVI9PfKv.js';
import 'react';

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

export { CraftPagination, type CraftPaginationProps };
