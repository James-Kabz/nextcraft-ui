"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { FormProvider } from "react-hook-form";
import { cn } from "../utils/cn";
import { CraftDrawer } from "../components/craft-drawer";
import { CraftButton } from "../components/craft-button";
import { CraftSubmitButton } from "../components/craft-submit-button";
function CraftCreateEditDrawer({
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
  side = "right"
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
  const handleSubmit = form.handleSubmit(async (values) => {
    await onSubmit(values);
    if (closeOnSubmit) setOpen(false);
  });
  const resolvedTitle = title != null ? title : mode === "create" ? "Create item" : "Edit item";
  const resolvedSubmitLabel = submitLabel != null ? submitLabel : mode === "create" ? "Create" : "Save changes";
  const footerContent = footer != null ? footer : /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-end gap-3", children: [
    /* @__PURE__ */ jsx(CraftButton, { type: "button", variant: "ghost", onClick: () => setOpen(false), children: cancelLabel }),
    /* @__PURE__ */ jsx(
      CraftSubmitButton,
      {
        form: formId,
        disableWhenInvalid: disableSubmitWhenInvalid,
        children: resolvedSubmitLabel
      }
    )
  ] });
  return /* @__PURE__ */ jsx(FormProvider, { ...form, children: /* @__PURE__ */ jsx(
    CraftDrawer,
    {
      open: isOpen,
      onOpenChange: setOpen,
      trigger,
      title: resolvedTitle,
      tone,
      side,
      className: cn("flex flex-col", className),
      footer: footerContent,
      children: /* @__PURE__ */ jsxs("form", { id: formId, onSubmit: handleSubmit, className: "space-y-5", children: [
        description && /* @__PURE__ */ jsx("p", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: description }),
        children
      ] })
    }
  ) });
}
export {
  CraftCreateEditDrawer
};
//# sourceMappingURL=craft-create-edit-drawer.js.map