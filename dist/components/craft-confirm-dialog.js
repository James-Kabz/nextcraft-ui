"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../utils/cn";
import { CraftModal } from "../components/craft-modal";
import { CraftButton } from "../components/craft-button";
function CraftConfirmDialog({
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
  confirmVariant = "solid"
}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
  const isControlled = typeof open === "boolean";
  const isOpen = isControlled ? open : uncontrolledOpen;
  const setOpen = React.useCallback(
    (next) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange == null ? void 0 : onOpenChange(next);
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
  return /* @__PURE__ */ jsx(
    CraftModal,
    {
      open: isOpen,
      onOpenChange: setOpen,
      trigger,
      title,
      description,
      tone,
      className: cn("max-w-md", className),
      footer: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-end gap-3", children: [
        /* @__PURE__ */ jsx(
          CraftButton,
          {
            type: "button",
            variant: "ghost",
            onClick: () => setOpen(false),
            children: cancelLabel
          }
        ),
        /* @__PURE__ */ jsx(
          CraftButton,
          {
            type: "button",
            variant: confirmVariant,
            disabled: isLoading,
            onClick: handleConfirm,
            children: isLoading ? "Working..." : confirmLabel
          }
        )
      ] }),
      children: /* @__PURE__ */ jsx("div", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: description })
    }
  );
}
export {
  CraftConfirmDialog
};
//# sourceMappingURL=craft-confirm-dialog.js.map