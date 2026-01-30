"use client";

import * as React from "react";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";
import { CraftInput } from "@/components/craft-input";
import { CraftSelect } from "@/components/craft-select";
import { CraftButton } from "@/components/craft-button";

export type CraftFilterSelectOption = {
  label: React.ReactNode;
  value: string;
};

export type CraftFilterSelect = {
  key: string;
  label?: React.ReactNode;
  value: string;
  placeholder?: string;
  options: CraftFilterSelectOption[];
  disabled?: boolean;
};

export type CraftFilterDate = {
  key: string;
  label?: React.ReactNode;
  from?: string;
  to?: string;
};

export type CraftFilterBarProps = {
  title?: React.ReactNode;
  description?: React.ReactNode;

  searchValue?: string;
  onSearchChange?: (value: string) => void;
  searchPlaceholder?: string;
  showSearch?: boolean;

  actions?: React.ReactNode;

  selectFilters?: CraftFilterSelect[];
  onSelectFiltersChange?: (filters: CraftFilterSelect[]) => void;

  dateFilters?: CraftFilterDate[];
  onDateFiltersChange?: (filters: CraftFilterDate[]) => void;

  showFilters?: boolean;
  showClear?: boolean;
  clearLabel?: React.ReactNode;
  onClearFilters?: () => void;

  tone?: ThemeName;
  className?: string;
};

export function CraftFilterBar({
  title,
  description,
  searchValue,
  onSearchChange,
  searchPlaceholder = "Search...",
  showSearch = true,
  actions,
  selectFilters,
  onSelectFiltersChange,
  dateFilters,
  onDateFiltersChange,
  showFilters = true,
  showClear = true,
  clearLabel = "Clear filters",
  onClearFilters,
  tone,
  className,
}: CraftFilterBarProps) {
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
        </div>
        <div className="flex items-center gap-3">
          {actions}
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
