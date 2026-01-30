"use client";

import * as React from "react";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";
import { CraftButton } from "@/components/craft-button";
import { CraftInput } from "@/components/craft-input";
import { CraftSelect } from "@/components/craft-select";

export type CraftDataTableFilterSelectOption = {
  label: React.ReactNode;
  value: string;
};

export type CraftDataTableFilterSelect = {
  key: string;
  label?: React.ReactNode;
  value: string;
  placeholder?: string;
  options: CraftDataTableFilterSelectOption[];
  disabled?: boolean;
};

export type CraftDataTableFilterDate = {
  key: string;
  label?: React.ReactNode;
  from?: string;
  to?: string;
};

export type CraftDataTableFiltersProps = {
  title?: React.ReactNode;
  description?: React.ReactNode;

  searchValue?: string;
  onSearchChange?: (value: string) => void;
  searchPlaceholder?: string;
  showSearch?: boolean;

  addButton?: {
    label: React.ReactNode;
    icon?: React.ReactNode | string;
    variant?: "solid" | "outline" | "ghost" | "default" | "primary" | "success";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    onClick: () => void;
  };

  selectFilters?: CraftDataTableFilterSelect[];
  onSelectFiltersChange?: (filters: CraftDataTableFilterSelect[]) => void;

  dateFilters?: CraftDataTableFilterDate[];
  onDateFiltersChange?: (filters: CraftDataTableFilterDate[]) => void;

  showFilters?: boolean;

  showClear?: boolean;
  clearLabel?: React.ReactNode;
  onClearFilters?: () => void;

  showFileUpload?: boolean;
  fileUploadAccept?: string;
  fileUploadMaxSize?: number;
  onFilesSelected?: (files: FileList) => void;

  totalItems?: number;
  itemLabel?: string;

  tone?: ThemeName;
  className?: string;
};

export function CraftDataTableFilters({
  title,
  description,
  searchValue,
  onSearchChange,
  searchPlaceholder = "Search...",
  showSearch = true,
  addButton,
  selectFilters,
  onSelectFiltersChange,
  dateFilters,
  onDateFiltersChange,
  showFilters = true,
  showClear = true,
  clearLabel = "Clear filters",
  onClearFilters,
  showFileUpload = false,
  fileUploadAccept,
  fileUploadMaxSize,
  onFilesSelected,
  totalItems,
  itemLabel = "items",
  tone,
  className,
}: CraftDataTableFiltersProps) {
  const hasSelects = Boolean(selectFilters && selectFilters.length > 0);
  const hasDates = Boolean(dateFilters && dateFilters.length > 0);
  const hasFilters = showFilters && (hasSelects || hasDates);

  const updateSelectFilter = (index: number, value: string) => {
    if (!selectFilters || !onSelectFiltersChange) return;
    const next = selectFilters.map((filter, idx) =>
      idx === index ? { ...filter, value } : filter
    );
    onSelectFiltersChange(next);
  };

  const updateDateFilter = (
    index: number,
    key: "from" | "to",
    value: string
  ) => {
    if (!dateFilters || !onDateFiltersChange) return;
    const next = dateFilters.map((filter, idx) =>
      idx === index ? { ...filter, [key]: value } : filter
    );
    onDateFiltersChange(next);
  };

  return (
    <div
      className={cn(
        "rounded-3xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] p-4 text-[rgb(var(--nc-fg))] shadow-[0_12px_36px_rgba(0,0,0,0.2)] backdrop-blur-2xl",
        className
      )}
      data-nc-theme={tone}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          {title && <h3 className="text-lg font-semibold">{title}</h3>}
          {description && (
            <p className="text-sm text-[rgb(var(--nc-fg-muted))]">
              {description}
            </p>
          )}
          {typeof totalItems === "number" && (
            <p className="text-xs text-[rgb(var(--nc-fg-muted))]">
              {totalItems} {itemLabel}
            </p>
          )}
        </div>

        <div className="flex items-center gap-3">
          {showFileUpload && (
            <CraftInput
              type="file"
              accept={fileUploadAccept}
              onChange={(event) => {
                const files = event.target.files;
                if (!files || files.length === 0) return;
                if (
                  typeof fileUploadMaxSize === "number" &&
                  files[0] &&
                  files[0].size > fileUploadMaxSize
                ) {
                  return;
                }
                onFilesSelected?.(files);
                event.currentTarget.value = "";
              }}
            />
          )}

          {addButton ? (
            <CraftButton
              type="button"
              variant={addButton.variant ?? "outline"}
              size={addButton.size ?? "sm"}
              disabled={addButton.disabled}
              onClick={addButton.onClick}
            >
              {addButton.label}
            </CraftButton>
          ) : null}

          {showClear && onClearFilters ? (
            <CraftButton type="button" variant="ghost" onClick={onClearFilters}>
              {clearLabel}
            </CraftButton>
          ) : null}
        </div>
      </div>

      {(showSearch || hasFilters) && (
        <div className="mt-4 grid gap-4">
          {showSearch && (
            <CraftInput
              type="search"
              placeholder={searchPlaceholder}
              value={searchValue ?? ""}
              onChange={(event) => onSearchChange?.(event.target.value)}
              tone={tone}
            />
          )}

          {hasFilters && (
            <div className="flex flex-wrap items-end gap-3">
              {selectFilters?.map((filter, index) => (
                <label key={filter.key} className="grid gap-2 text-xs">
                  {filter.label ? (
                    <span className="text-[rgb(var(--nc-fg-muted))]">
                      {filter.label}
                    </span>
                  ) : null}
                  <CraftSelect
                    value={filter.value}
                    disabled={filter.disabled}
                    onChange={(event) =>
                      updateSelectFilter(index, event.target.value)
                    }
                  >
                    {filter.placeholder ? (
                      <option value="">{filter.placeholder}</option>
                    ) : null}
                    {filter.options.map((option) => (
                      <option key={String(option.value)} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </CraftSelect>
                </label>
              ))}

              {dateFilters?.map((filter, index) => (
                <div key={filter.key} className="grid gap-2 text-xs">
                  {filter.label ? (
                    <span className="text-[rgb(var(--nc-fg-muted))]">
                      {filter.label}
                    </span>
                  ) : null}
                  <div className="flex items-center gap-2">
                    <CraftInput
                      type="date"
                      value={filter.from ?? ""}
                      onChange={(event) =>
                        updateDateFilter(index, "from", event.target.value)
                      }
                    />
                    <CraftInput
                      type="date"
                      value={filter.to ?? ""}
                      onChange={(event) =>
                        updateDateFilter(index, "to", event.target.value)
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
