"use client";

import * as React from "react";

import { cn } from "@/utils/cn";
import type { ThemeName } from "@/theme/theme-context";
import { CraftModal } from "@/components/craft-modal";
import { CraftButton } from "@/components/craft-button";

export type CraftConfirmDialogProps = {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  tone?: ThemeName;
  title?: React.ReactNode;
  description?: React.ReactNode;
  confirmLabel?: React.ReactNode;
  cancelLabel?: React.ReactNode;
  onConfirm?: () => void | Promise<void>;
  trigger?: React.ReactNode;
  className?: string;
  confirmVariant?: "solid" | "gradient" | "outline";
};

export function CraftConfirmDialog({
  open,
  defaultOpen = false,
  onOpenChange,
  tone,
  title = "Confirm action",
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  trigger,
  className,
  confirmVariant = "solid",
}: CraftConfirmDialogProps) {
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

  const [isLoading, setIsLoading] = React.useState(false);

  const handleConfirm = async () => {
    if (!onConfirm) {
      setOpen(false);
      return;
    }
    setIsLoading(true);
    await onConfirm();
    setIsLoading(false);
    setOpen(false);
  };

  return (
    <CraftModal
      open={isOpen}
      onOpenChange={setOpen}
      trigger={trigger}
      title={title}
      description={description}
      tone={tone}
      className={cn("max-w-md", className)}
      footer={
        <div className="flex flex-wrap items-center justify-end gap-3">
          <CraftButton
            type="button"
            variant="ghost"
            onClick={() => setOpen(false)}
          >
            {cancelLabel}
          </CraftButton>
          <CraftButton
            type="button"
            variant={confirmVariant}
            disabled={isLoading}
            onClick={handleConfirm}
          >
            {isLoading ? "Working..." : confirmLabel}
          </CraftButton>
        </div>
      }
    >
      <div className="text-sm text-[rgb(var(--nc-fg-muted))]">
        {description}
      </div>
    </CraftModal>
  );
}
