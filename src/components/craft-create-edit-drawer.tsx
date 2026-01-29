"use client";

import * as React from "react";
import { FormProvider, type FieldValues, type UseFormReturn } from "react-hook-form";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";
import { CraftDrawer } from "@/components/craft-drawer";
import { CraftButton } from "@/components/craft-button";

export type CraftCreateEditDrawerProps<TValues extends FieldValues> = {
  mode?: "create" | "edit";
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
  side?: "left" | "right";
  loading?: boolean;
};

export function CraftCreateEditDrawer<TValues extends FieldValues>({
  mode = "create",
  form,
  onSubmit,
  open,
  defaultOpen = false,
  onOpenChange,
  trigger,
  title,
  description,
  submitLabel,
  cancelLabel = "Cancel",
  tone,
  className,
  children,
  footer,
  disableSubmitWhenInvalid = true,
  closeOnSubmit = true,
  side = "right",
  loading,
}: CraftCreateEditDrawerProps<TValues>) {
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
  const isSubmitting = loading ?? form.formState.isSubmitting;
  const isSubmitDisabled =
    isSubmitting || (disableSubmitWhenInvalid && !form.formState.isValid);

  const handleSubmit = form.handleSubmit(async (values) => {
    await onSubmit(values);
    if (closeOnSubmit) setOpen(false);
  });

  const resolvedTitle = title ?? (mode === "create" ? "Create item" : "Edit item");
  const resolvedSubmitLabel =
    submitLabel ?? (mode === "create" ? "Create" : "Save changes");

  const footerContent = footer ?? (
    <div className="flex flex-wrap items-center justify-end gap-3">
      <CraftButton type="button" variant="ghost" onClick={() => setOpen(false)}>
        {cancelLabel}
      </CraftButton>
      <CraftButton
        type="submit"
        variant="solid"
        form={formId}
        disabled={isSubmitDisabled}
        loading={isSubmitting}
      >
        {resolvedSubmitLabel}
      </CraftButton>
    </div>
  );

  return (
    <FormProvider {...form}>
      <CraftDrawer
        open={isOpen}
        onOpenChange={setOpen}
        trigger={trigger}
        title={resolvedTitle}
        tone={tone}
        side={side}
        className={cn("flex flex-col", className)}
        footer={footerContent}
      >
        <form id={formId} onSubmit={handleSubmit} className="space-y-5">
          {description && (
            <p className="text-sm text-[rgb(var(--nc-fg-muted))]">
              {description}
            </p>
          )}
          {children}
        </form>
      </CraftDrawer>
    </FormProvider>
  );
}
