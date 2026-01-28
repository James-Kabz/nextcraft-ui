"use client";

import * as React from "react";
import {
  FormProvider,
  type DefaultValues,
  type FieldValues,
  type Path,
  type RegisterOptions,
  useForm,
} from "react-hook-form";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";
import { CraftModal } from "@/components/craft-modal";
import { CraftButton } from "@/components/craft-button";
import { CraftSubmitButton } from "@/components/craft-submit-button";
import {
  CraftFormField,
  type CraftFormFieldOption,
  type CraftFormFieldType,
} from "@/components/craft-form-field";

export type CraftFormModalField<TValues extends FieldValues> = {
  name: Path<TValues>;
  label?: React.ReactNode;
  description?: React.ReactNode;
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
  helpText?: React.ReactNode;
  fieldProps?: Record<string, unknown>;
  validate?: (value: unknown, values: TValues) => string | boolean | undefined;
};

export type CraftFormModalProps<TValues extends FieldValues> = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  fields: Array<CraftFormModalField<TValues>>;
  initialData?: Partial<TValues> | null;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: React.ReactNode;
  submitLabel?: React.ReactNode;
  cancelLabel?: React.ReactNode;
  resetLabel?: React.ReactNode;
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

function defaultValueForField<TValues extends FieldValues>(
  field: CraftFormModalField<TValues>
) {
  if (field.defaultValue !== undefined) return field.defaultValue;
  switch (field.type) {
    case "checkbox":
    case "switch":
      return false;
    case "number":
    case "slider":
    case "range":
      return field.min ?? 0;
    case "multifile":
      return [];
    case "file":
      return null;
    case "multiselect":
      return [];
    case "radio":
      return field.options?.[0]?.value ?? "";
    default:
      return "";
  }
}

function buildDefaultValues<TValues extends FieldValues>(
  fields: Array<CraftFormModalField<TValues>>,
  initialData?: Partial<TValues> | null
): DefaultValues<TValues> {
  const values = {} as Record<string, unknown>;
  fields.forEach((field) => {
    const initialValue = initialData?.[field.name as keyof TValues];
    if (initialValue !== undefined && initialValue !== null) {
      values[field.name] = initialValue;
    } else {
      values[field.name] = defaultValueForField(field);
    }
  });
  return values as DefaultValues<TValues>;
}

function buildRules<TValues extends FieldValues>(
  field: CraftFormModalField<TValues>,
  getValues: () => TValues
): RegisterOptions<TValues> {
  const rules: RegisterOptions<TValues> = { ...field.rules };
  const mergeValidate = (
    current: RegisterOptions<TValues>["validate"],
    next: (value: unknown) => string | boolean | undefined
  ) => {
    if (!current) return next;
    if (typeof current === "function") {
      return (value: unknown): string | boolean | undefined => {
        const result = (current as (value: unknown, values: TValues) => string | boolean | undefined)(
          value,
          getValues()
        );
        if (result !== true) return result as string | undefined;
        return next(value);
      };
    }
    if (typeof current === "object") {
      return (value: unknown): string | boolean | undefined => {
        const entries = Object.entries(current);
        for (const [, validator] of entries) {
          const result = (validator as (value: unknown, values: TValues) => string | boolean | undefined)(
            value,
            getValues()
          );
          if (result !== true) return result as string | undefined;
        }
        return next(value);
      };
    }
    return next;
  };

  if (field.required && field.type !== "hidden") {
    if (field.type === "checkbox" || field.type === "switch") {
      rules.validate = mergeValidate(
        rules.validate,
        (value: unknown): string | boolean | undefined =>
          value ? true : `${String(field.label ?? field.name)} is required`
      );
    } else if (field.type === "multiselect") {
      rules.validate = mergeValidate(
        rules.validate,
        (value: unknown): string | boolean | undefined =>
          Array.isArray(value) && value.length > 0
            ? true
            : `${String(field.label ?? field.name)} is required`
      );
    } else if (field.type === "file") {
      rules.validate = mergeValidate(
        rules.validate,
        (value: unknown): string | boolean | undefined =>
          value instanceof FileList && value.length > 0
            ? true
            : `${String(field.label ?? field.name)} is required`
      );
    } else if (field.type === "multifile") {
      rules.validate = mergeValidate(
        rules.validate,
        (value: unknown): string | boolean | undefined =>
          Array.isArray(value) && value.length > 0
            ? true
            : `${String(field.label ?? field.name)} is required`
      );
    } else {
      rules.required = `${String(field.label ?? field.name)} is required`;
    }
  }

  if (field.min !== undefined) {
    rules.min = { value: field.min, message: `Min ${field.min}` };
  }
  if (field.max !== undefined) {
    rules.max = { value: field.max, message: `Max ${field.max}` };
  }

  if (field.type === "email") {
    rules.pattern = {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Please enter a valid email address",
    };
  }

  if (field.type === "url") {
    rules.pattern = {
      value: /^https?:\/\/.+/,
      message: "Please enter a valid URL",
    };
  }

  if (field.validate) {
    rules.validate = mergeValidate(
      rules.validate,
      (value: unknown): string | boolean | undefined =>
        field.validate?.(value, getValues())
    );
  }

  return rules;
}

export function CraftFormModal<TValues extends FieldValues>({
  title = "Form",
  description,
  fields,
  initialData = null,
  open,
  defaultOpen = false,
  onOpenChange,
  trigger,
  submitLabel = "Submit",
  cancelLabel = "Cancel",
  resetLabel = "Reset",
  showReset = true,
  showCancel = true,
  tone,
  className,
  formClassName,
  loading = false,
  disableSubmitWhenInvalid = true,
  closeOnSubmit = true,
  closeOnCancel = true,
  onSubmit,
  onReset,
  onCancel,
  customValidation,
}: CraftFormModalProps<TValues>) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
  const isControlled = typeof open === "boolean";
  const isOpen = isControlled ? open : uncontrolledOpen;

  const setOpen = React.useCallback(
    (next: boolean) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange?.(next);
    },
    [isControlled, onOpenChange]
  );

  const defaultValues = React.useMemo(
    () => buildDefaultValues(fields, initialData),
    [fields, initialData]
  );

  const form = useForm<TValues>({
    mode: "onChange",
    defaultValues,
  });

  const formId = React.useId();

  React.useEffect(() => {
    form.reset(defaultValues);
  }, [defaultValues, form]);

  const handleSubmit = form.handleSubmit(async (values) => {
    if (customValidation) {
      const customErrors = customValidation(values);
      if (customErrors && Object.keys(customErrors).length > 0) {
        Object.entries(customErrors).forEach(([key, message]) => {
          if (message) {
            form.setError(key as Path<TValues>, {
              type: "custom",
              message: String(message),
            });
          }
        });
        return;
      }
    }

    await onSubmit(values);
    if (closeOnSubmit) setOpen(false);
  });

  const handleReset = () => {
    form.reset(defaultValues);
    onReset?.();
  };

  const handleCancel = () => {
    onCancel?.();
    if (closeOnCancel) setOpen(false);
  };

  return (
    <FormProvider {...form}>
      <CraftModal
        open={isOpen}
        onOpenChange={setOpen}
        trigger={trigger}
        title={title}
        description={description}
        tone={tone}
        className={className}
        footer={
          <div className="flex flex-wrap items-center justify-end gap-3">
            {showReset && (
              <CraftButton
                type="button"
                variant="outline"
                onClick={handleReset}
                disabled={loading}
              >
                {resetLabel}
              </CraftButton>
            )}
            {showCancel && (
              <CraftButton
                type="button"
                variant="ghost"
                onClick={handleCancel}
                disabled={loading}
              >
                {cancelLabel}
              </CraftButton>
            )}
            <CraftSubmitButton
              loading={loading}
              disableWhenInvalid={disableSubmitWhenInvalid}
              form={formId}
            >
              {submitLabel}
            </CraftSubmitButton>
          </div>
        }
      >
        <form
          id={formId}
          onSubmit={handleSubmit}
          className={cn("space-y-5", formClassName)}
        >
          {fields.map((field) => (
            <div key={field.name} className="space-y-2">
              {field.helpText && (
                <p className="text-xs text-[rgb(var(--nc-fg-muted))]">
                  {field.helpText}
                </p>
              )}
              <CraftFormField
                name={field.name}
                label={field.label}
                description={field.description}
                type={field.type}
                placeholder={field.placeholder}
                options={field.options}
                tone={tone}
                disabled={field.disabled || loading}
                rules={buildRules(field, form.getValues)}
                fieldProps={{
                  min: field.min,
                  max: field.max,
                  step: field.step,
                  rows: field.rows,
                  accept: field.accept,
                  multiple: field.type === "multifile",
                  ...field.fieldProps,
                }}
              />
            </div>
          ))}
        </form>
      </CraftModal>
    </FormProvider>
  );
}
