"use client";

import * as React from "react";
import { Controller, type RegisterOptions, useFormContext } from "react-hook-form";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";
import { CraftInput } from "@/components/craft-input";
import { CraftTextarea } from "@/components/craft-textarea";
import { CraftSelect } from "@/components/craft-select";
import { CraftCheckbox } from "@/components/craft-checkbox";
import { CraftSwitch } from "@/components/craft-switch";
import { CraftDatePicker } from "@/components/craft-date-picker";
import { CraftNumberInput } from "@/components/craft-number-input";
import { CraftCurrencyInput } from "@/components/craft-currency-input";

export type CraftFormFieldOption = {
  label: React.ReactNode;
  value: string;
  disabled?: boolean;
};

export type CraftFormFieldType =
  | "text"
  | "number"
  | "password"
  | "textarea"
  | "select"
  | "checkbox"
  | "slider"
  | "date"
  | "color"
  | "email"
  | "tel"
  | "url"
  | "time"
  | "datetime-local"
  | "month"
  | "week"
  | "file"
  | "multifile"
  | "radio"
  | "switch"
  | "range"
  | "search"
  | "hidden"
  | "multiselect"
  | "currency";

export type CraftFormFieldProps = {
  name: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
  type?: CraftFormFieldType;
  options?: CraftFormFieldOption[];
  placeholder?: string;
  tone?: ThemeName;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  descriptionClassName?: string;
  rules?: RegisterOptions;
  disabled?: boolean;
  fieldProps?: Record<string, unknown>;
};

function getFieldError(errors: unknown, name: string) {
  if (!errors || typeof errors !== "object") return undefined;
  const segments = name.split(".");
  let current: unknown = errors;
  for (const segment of segments) {
    if (!current || typeof current !== "object") return undefined;
    current = (current as Record<string, unknown>)[segment];
  }
  return current;
}

const baseInputClass =
  "w-full rounded-2xl border-2 bg-[rgb(var(--nc-surface)/0.08)] text-[rgb(var(--nc-fg))] backdrop-blur-xl shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)] focus:outline-none focus:ring-4 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border-[rgb(var(--nc-border)/0.35)] focus:border-[rgb(var(--nc-accent-1)/0.8)] focus:ring-[rgb(var(--nc-accent-1)/0.3)] px-5 py-3 text-base placeholder:text-[rgb(var(--nc-fg-soft))]";

export function CraftFormField({
  name,
  label,
  description,
  type = "text",
  options = [],
  placeholder,
  tone,
  className,
  inputClassName,
  labelClassName,
  descriptionClassName,
  rules,
  disabled,
  fieldProps,
}: CraftFormFieldProps) {
  const { register, control, formState } = useFormContext();
  const error = getFieldError(formState.errors, name);
  const errorMessage =
    typeof (error as { message?: unknown })?.message === "string"
      ? (error as { message: string }).message
      : undefined;

  if (type === "hidden") {
    return <input type="hidden" {...register(name, rules)} />;
  }

  const labelNode = label ? (
    <label
      htmlFor={name}
      className={cn(
        "text-sm font-semibold text-[rgb(var(--nc-fg))]",
        labelClassName
      )}
    >
      {label}
    </label>
  ) : null;

  const descriptionNode = description ? (
    <p
      className={cn(
        "text-xs text-[rgb(var(--nc-fg-muted))]",
        descriptionClassName
      )}
    >
      {description}
    </p>
  ) : null;

  const errorNode = errorMessage ? (
    <p className="text-xs text-[rgb(var(--nc-accent-3))]">{errorMessage}</p>
  ) : null;

  const renderInput = () => {
    if (type === "textarea") {
      return (
        <CraftTextarea
          id={name}
          placeholder={placeholder}
          tone={tone}
          className={inputClassName}
          disabled={disabled}
          {...(fieldProps as Record<string, unknown>)}
          {...register(name, rules)}
        />
      );
    }

    if (type === "select" || type === "multiselect") {
      return (
        <CraftSelect
          id={name}
          tone={tone}
          className={inputClassName}
          multiple={type === "multiselect"}
          disabled={disabled}
          {...(fieldProps as Record<string, unknown>)}
          {...register(name, rules)}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </CraftSelect>
      );
    }

    if (type === "checkbox") {
      return (
        <CraftCheckbox
          tone={tone}
          label={label}
          description={description}
          disabled={disabled}
          {...(fieldProps as Record<string, unknown>)}
          {...register(name, rules)}
        />
      );
    }

    if (type === "switch") {
      return (
        <CraftSwitch
          tone={tone}
          label={label}
          disabled={disabled}
          {...(fieldProps as Record<string, unknown>)}
          {...register(name, rules)}
        />
      );
    }

    if (type === "date") {
      return (
        <Controller
          control={control}
          name={name}
          rules={rules}
          render={({ field }) => (
            <CraftDatePicker
              value={field.value ?? ""}
              onChange={field.onChange}
              tone={tone}
              placeholder={placeholder}
              {...(fieldProps as Record<string, unknown>)}
            />
          )}
        />
      );
    }

    if (type === "number") {
      return (
        <CraftNumberInput
          id={name}
          tone={tone}
          placeholder={placeholder}
          className={inputClassName}
          disabled={disabled}
          {...(fieldProps as Record<string, unknown>)}
          {...register(name, rules)}
        />
      );
    }

    if (type === "currency") {
      return (
        <CraftCurrencyInput
          id={name}
          tone={tone}
          placeholder={placeholder}
          className={inputClassName}
          disabled={disabled}
          {...(fieldProps as Record<string, unknown>)}
          {...register(name, rules)}
        />
      );
    }

    if (type === "radio") {
      return (
        <div className="grid gap-3">
          {options.map((option) => (
            <label
              key={option.value}
              className={cn(
                "flex items-center gap-3 rounded-2xl border border-[rgb(var(--nc-border)/0.35)] bg-[rgb(var(--nc-surface)/0.08)] px-4 py-3 text-sm text-[rgb(var(--nc-fg))]",
                "transition-all duration-200",
                "focus-within:ring-2 focus-within:ring-[rgb(var(--nc-accent-1)/0.5)]",
                option.disabled ? "opacity-60" : "cursor-pointer"
              )}
              data-nc-theme={tone}
            >
              <input
                type="radio"
                value={option.value}
                disabled={option.disabled || disabled}
                className="h-4 w-4 accent-[rgb(var(--nc-accent-1))]"
                {...(fieldProps as Record<string, unknown>)}
                {...register(name, rules)}
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      );
    }

    if (type === "range" || type === "slider") {
      return (
        <input
          id={name}
          type="range"
          className={cn(
            "w-full accent-[rgb(var(--nc-accent-1))]",
            inputClassName
          )}
          disabled={disabled}
          {...(fieldProps as Record<string, unknown>)}
          {...register(name, rules)}
        />
      );
    }

    if (type === "file" || type === "multifile") {
      return (
        <input
          id={name}
          type="file"
          multiple={type === "multifile"}
          className={cn(
            baseInputClass,
            "file:mr-4 file:rounded-xl file:border-0 file:bg-[rgb(var(--nc-surface)/0.35)] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-[rgb(var(--nc-fg))]",
            inputClassName
          )}
          disabled={disabled}
          {...(fieldProps as Record<string, unknown>)}
          {...register(name, rules)}
        />
      );
    }

    const inputType =
      type === "search" ||
      type === "password" ||
      type === "email" ||
      type === "tel" ||
      type === "url" ||
      type === "time" ||
      type === "datetime-local" ||
      type === "month" ||
      type === "week" ||
      type === "color"
        ? type
        : "text";

    return (
      <CraftInput
        id={name}
        type={inputType}
        placeholder={placeholder}
        tone={tone}
        className={inputClassName}
        disabled={disabled}
        {...(fieldProps as Record<string, unknown>)}
        {...register(name, rules)}
      />
    );
  };

  const showLabel = type !== "checkbox" && type !== "switch";
  const showDescriptionAbove = type !== "checkbox" && type !== "switch";
  const showDescriptionBelow = type === "switch";

  return (
    <div className={cn("space-y-2", className)} data-nc-theme={tone}>
      {showLabel ? labelNode : null}
      {showDescriptionAbove ? descriptionNode : null}
      {renderInput()}
      {showDescriptionBelow ? descriptionNode : null}
      {errorNode}
    </div>
  );
}
