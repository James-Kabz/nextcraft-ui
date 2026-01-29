"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { FormProvider } from "react-hook-form";
import { cn } from "../utils/cn";
import { CraftModal } from "../components/craft-modal";
import { CraftButton } from "../components/craft-button";
function CraftForm({
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
  formClassName
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
  const formId = React.useId();
  const isSubmitDisabled = disableSubmitWhenInvalid && !form.formState.isValid;
  const handleSubmit = form.handleSubmit(async (values) => {
    await onSubmit(values);
    if (closeOnSubmit) setOpen(false);
  });
  const footerContent = footer != null ? footer : /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-end gap-3", children: [
    /* @__PURE__ */ jsx(CraftButton, { type: "button", variant: "ghost", onClick: () => setOpen(false), children: cancelLabel }),
    /* @__PURE__ */ jsx(
      CraftButton,
      {
        type: "submit",
        variant: "solid",
        form: formId,
        disabled: isSubmitDisabled,
        children: submitLabel
      }
    )
  ] });
  return /* @__PURE__ */ jsx(FormProvider, { ...form, children: /* @__PURE__ */ jsx(
    CraftModal,
    {
      open: isOpen,
      onOpenChange: setOpen,
      trigger,
      title,
      description,
      tone,
      className,
      footer: footerContent,
      children: /* @__PURE__ */ jsx(
        "form",
        {
          id: formId,
          onSubmit: handleSubmit,
          className: cn("space-y-5", formClassName),
          children
        }
      )
    }
  ) });
}
export {
  CraftForm
};
//# sourceMappingURL=craft-form.js.map