"use client";

import * as React from "react";
import { FormProvider, type FieldValues, type UseFormReturn } from "react-hook-form";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";
import { CraftModal } from "@/components/craft-modal";
import { CraftButton } from "@/components/craft-button";
import { CraftSubmitButton } from "@/components/craft-submit-button";

export type CraftFormProps<TValues extends FieldValues> = {
  form: UseFormReturn<TValues>;
  onSubmit: (values: TValues) => void | Promise<void>;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  submitLabel?: React.ReactNode;
  cancelLabel?: React.ReactNode;
  tone?: ThemeName;
  className?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  disableSubmitWhenInvalid?: boolean;
  closeOnSubmit?: boolean;
  formClassName?: string;
};

export function CraftForm<TValues extends FieldValues>({
  form,
  onSubmit,
  open,
  defaultOpen = false,
  onOpenChange,
  trigger,
  title,
  description,
  submitLabel = "Save",
  cancelLabel = "Cancel",
  tone,
  className,
  children,
  footer,
  disableSubmitWhenInvalid = true,
  closeOnSubmit = true,
  formClassName,
}: CraftFormProps<TValues>) {
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

  const formId = React.useId();

  const handleSubmit = form.handleSubmit(async (values) => {
    await onSubmit(values);
    if (closeOnSubmit) setOpen(false);
  });

  const footerContent = footer ?? (
    <div className="flex flex-wrap items-center justify-end gap-3">
      <CraftButton type="button" variant="ghost" onClick={() => setOpen(false)}>
        {cancelLabel}
      </CraftButton>
      <CraftSubmitButton
        form={formId}
        disableWhenInvalid={disableSubmitWhenInvalid}
      >
        {submitLabel}
      </CraftSubmitButton>
    </div>
  );

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
        footer={footerContent}
      >
        <form
          id={formId}
          onSubmit={handleSubmit}
          className={cn("space-y-5", formClassName)}
        >
          {children}
        </form>
      </CraftModal>
    </FormProvider>
  );
}
