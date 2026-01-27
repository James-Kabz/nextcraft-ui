import {
  CraftButton,
  CraftCheckbox,
  CraftCurrencyInput,
  CraftDatePicker,
  CraftModal,
  CraftNumberInput,
  CraftSelect,
  CraftSubmitButton,
  CraftSwitch,
  CraftTextarea
} from "./chunk-6F7FN2ZF.js";
import {
  CraftInput
} from "./chunk-7SKDTIEK.js";
import {
  cn
} from "./chunk-VQ6T3HIX.js";

// src/components/craft-form.tsx
import * as React from "react";
import { FormProvider } from "react-hook-form";
import { jsx, jsxs } from "react/jsx-runtime";
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
  const handleSubmit = form.handleSubmit(async (values) => {
    await onSubmit(values);
    if (closeOnSubmit) setOpen(false);
  });
  const footerContent = footer != null ? footer : /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-end gap-3", children: [
    /* @__PURE__ */ jsx(CraftButton, { type: "button", variant: "ghost", onClick: () => setOpen(false), children: cancelLabel }),
    /* @__PURE__ */ jsx(
      CraftSubmitButton,
      {
        form: formId,
        disableWhenInvalid: disableSubmitWhenInvalid,
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

// src/components/craft-form-field.tsx
import {
  Controller,
  useFormContext
} from "react-hook-form";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function getFieldError(errors, name) {
  if (!errors || typeof errors !== "object") return void 0;
  const segments = name.split(".");
  let current = errors;
  for (const segment of segments) {
    if (!current || typeof current !== "object") return void 0;
    current = current[segment];
  }
  return current;
}
var baseInputClass = "w-full rounded-2xl border-2 bg-[rgb(var(--nc-surface)/0.08)] text-[rgb(var(--nc-fg))] backdrop-blur-xl shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)] focus:outline-none focus:ring-4 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border-[rgb(var(--nc-border)/0.35)] focus:border-[rgb(var(--nc-accent-1)/0.8)] focus:ring-[rgb(var(--nc-accent-1)/0.3)] px-5 py-3 text-base placeholder:text-[rgb(var(--nc-fg-soft))]";
function CraftFormField({
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
  fieldProps
}) {
  const { register, control, formState } = useFormContext();
  const error = getFieldError(formState.errors, name);
  const errorMessage = typeof (error == null ? void 0 : error.message) === "string" ? error.message : void 0;
  if (type === "hidden") {
    return /* @__PURE__ */ jsx2("input", { type: "hidden", ...register(name, rules) });
  }
  const labelNode = label ? /* @__PURE__ */ jsx2(
    "label",
    {
      htmlFor: name,
      className: cn(
        "text-sm font-semibold text-[rgb(var(--nc-fg))]",
        labelClassName
      ),
      children: label
    }
  ) : null;
  const descriptionNode = description ? /* @__PURE__ */ jsx2(
    "p",
    {
      className: cn(
        "text-xs text-[rgb(var(--nc-fg-muted))]",
        descriptionClassName
      ),
      children: description
    }
  ) : null;
  const errorNode = errorMessage ? /* @__PURE__ */ jsx2("p", { className: "text-xs text-[rgb(var(--nc-accent-3))]", children: errorMessage }) : null;
  const renderInput = () => {
    if (type === "textarea") {
      return /* @__PURE__ */ jsx2(
        CraftTextarea,
        {
          id: name,
          placeholder,
          tone,
          className: inputClassName,
          disabled,
          ...fieldProps,
          ...register(name, rules)
        }
      );
    }
    if (type === "select" || type === "multiselect") {
      return /* @__PURE__ */ jsxs2(
        CraftSelect,
        {
          id: name,
          tone,
          className: inputClassName,
          multiple: type === "multiselect",
          disabled,
          ...fieldProps,
          ...register(name, rules),
          children: [
            placeholder && /* @__PURE__ */ jsx2("option", { value: "", disabled: true, children: placeholder }),
            options.map((option) => /* @__PURE__ */ jsx2(
              "option",
              {
                value: option.value,
                disabled: option.disabled,
                children: option.label
              },
              option.value
            ))
          ]
        }
      );
    }
    if (type === "checkbox") {
      return /* @__PURE__ */ jsx2(
        CraftCheckbox,
        {
          tone,
          label,
          description,
          disabled,
          ...fieldProps,
          ...register(name, rules)
        }
      );
    }
    if (type === "switch") {
      return /* @__PURE__ */ jsx2(
        CraftSwitch,
        {
          tone,
          label,
          disabled,
          ...fieldProps,
          ...register(name, rules)
        }
      );
    }
    if (type === "date") {
      return /* @__PURE__ */ jsx2(
        Controller,
        {
          control,
          name,
          rules,
          render: ({ field }) => {
            var _a;
            return /* @__PURE__ */ jsx2(
              CraftDatePicker,
              {
                value: (_a = field.value) != null ? _a : "",
                onChange: field.onChange,
                tone,
                placeholder,
                ...fieldProps
              }
            );
          }
        }
      );
    }
    if (type === "number") {
      return /* @__PURE__ */ jsx2(
        CraftNumberInput,
        {
          id: name,
          tone,
          placeholder,
          className: inputClassName,
          disabled,
          ...fieldProps,
          ...register(name, rules)
        }
      );
    }
    if (type === "currency") {
      return /* @__PURE__ */ jsx2(
        CraftCurrencyInput,
        {
          id: name,
          tone,
          placeholder,
          className: inputClassName,
          disabled,
          ...fieldProps,
          ...register(name, rules)
        }
      );
    }
    if (type === "radio") {
      return /* @__PURE__ */ jsx2("div", { className: "grid gap-3", children: options.map((option) => /* @__PURE__ */ jsxs2(
        "label",
        {
          className: cn(
            "flex items-center gap-3 rounded-2xl border border-[rgb(var(--nc-border)/0.35)] bg-[rgb(var(--nc-surface)/0.08)] px-4 py-3 text-sm text-[rgb(var(--nc-fg))]",
            "transition-all duration-200",
            "focus-within:ring-2 focus-within:ring-[rgb(var(--nc-accent-1)/0.5)]",
            option.disabled ? "opacity-60" : "cursor-pointer"
          ),
          "data-nc-theme": tone,
          children: [
            /* @__PURE__ */ jsx2(
              "input",
              {
                type: "radio",
                value: option.value,
                disabled: option.disabled || disabled,
                className: "h-4 w-4 accent-[rgb(var(--nc-accent-1))]",
                ...fieldProps,
                ...register(name, rules)
              }
            ),
            /* @__PURE__ */ jsx2("span", { children: option.label })
          ]
        },
        option.value
      )) });
    }
    if (type === "range" || type === "slider") {
      return /* @__PURE__ */ jsx2(
        "input",
        {
          id: name,
          type: "range",
          className: cn(
            "w-full accent-[rgb(var(--nc-accent-1))]",
            inputClassName
          ),
          disabled,
          ...fieldProps,
          ...register(name, rules)
        }
      );
    }
    if (type === "file" || type === "multifile") {
      return /* @__PURE__ */ jsx2(
        "input",
        {
          id: name,
          type: "file",
          multiple: type === "multifile",
          className: cn(
            baseInputClass,
            "file:mr-4 file:rounded-xl file:border-0 file:bg-[rgb(var(--nc-surface)/0.35)] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-[rgb(var(--nc-fg))]",
            inputClassName
          ),
          disabled,
          ...fieldProps,
          ...register(name, rules)
        }
      );
    }
    const inputType = type === "search" || type === "password" || type === "email" || type === "tel" || type === "url" || type === "time" || type === "datetime-local" || type === "month" || type === "week" || type === "color" ? type : "text";
    return /* @__PURE__ */ jsx2(
      CraftInput,
      {
        id: name,
        type: inputType,
        placeholder,
        tone,
        className: inputClassName,
        disabled,
        ...fieldProps,
        ...register(name, rules)
      }
    );
  };
  const showLabel = type !== "checkbox" && type !== "switch";
  const showDescriptionAbove = type !== "checkbox" && type !== "switch";
  const showDescriptionBelow = type === "switch";
  return /* @__PURE__ */ jsxs2("div", { className: cn("space-y-2", className), "data-nc-theme": tone, children: [
    showLabel ? labelNode : null,
    showDescriptionAbove ? descriptionNode : null,
    renderInput(),
    showDescriptionBelow ? descriptionNode : null,
    errorNode
  ] });
}

// src/components/craft-form-builder.tsx
import * as React2 from "react";
import {
  FormProvider as FormProvider2,
  useForm
} from "react-hook-form";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
function defaultValueForField(field) {
  var _a, _b, _c, _d;
  if (field.defaultValue !== void 0) return field.defaultValue;
  switch (field.type) {
    case "checkbox":
    case "switch":
      return false;
    case "number":
    case "slider":
    case "range":
      return (_a = field.min) != null ? _a : 0;
    case "multifile":
      return [];
    case "file":
      return null;
    case "multiselect":
      return [];
    case "radio":
      return (_d = (_c = (_b = field.options) == null ? void 0 : _b[0]) == null ? void 0 : _c.value) != null ? _d : "";
    default:
      return "";
  }
}
function buildDefaultValues(fields, initialData) {
  const values = {};
  fields.forEach((field) => {
    const initialValue = initialData == null ? void 0 : initialData[field.name];
    if (initialValue !== void 0 && initialValue !== null) {
      values[field.name] = initialValue;
    } else {
      values[field.name] = defaultValueForField(field);
    }
  });
  return values;
}
function buildRules(field, getValues) {
  var _a;
  const rules = { ...field.rules };
  const mergeValidate = (current, next) => {
    if (!current) return next;
    if (typeof current === "function") {
      return (value) => {
        const result = current(
          value,
          getValues()
        );
        if (result !== true) return result;
        return next(value);
      };
    }
    if (typeof current === "object") {
      return (value) => {
        const entries = Object.entries(current);
        for (const [, validator] of entries) {
          const result = validator(
            value,
            getValues()
          );
          if (result !== true) return result;
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
        (value) => {
          var _a2;
          return value ? true : `${String((_a2 = field.label) != null ? _a2 : field.name)} is required`;
        }
      );
    } else if (field.type === "multiselect") {
      rules.validate = mergeValidate(
        rules.validate,
        (value) => {
          var _a2;
          return Array.isArray(value) && value.length > 0 ? true : `${String((_a2 = field.label) != null ? _a2 : field.name)} is required`;
        }
      );
    } else if (field.type === "file") {
      rules.validate = mergeValidate(
        rules.validate,
        (value) => {
          var _a2;
          return value instanceof FileList && value.length > 0 ? true : `${String((_a2 = field.label) != null ? _a2 : field.name)} is required`;
        }
      );
    } else if (field.type === "multifile") {
      rules.validate = mergeValidate(
        rules.validate,
        (value) => {
          var _a2;
          return Array.isArray(value) && value.length > 0 ? true : `${String((_a2 = field.label) != null ? _a2 : field.name)} is required`;
        }
      );
    } else {
      rules.required = `${String((_a = field.label) != null ? _a : field.name)} is required`;
    }
  }
  if (field.min !== void 0) {
    rules.min = { value: field.min, message: `Min ${field.min}` };
  }
  if (field.max !== void 0) {
    rules.max = { value: field.max, message: `Max ${field.max}` };
  }
  if (field.type === "email") {
    rules.pattern = {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Please enter a valid email address"
    };
  }
  if (field.type === "url") {
    rules.pattern = {
      value: /^https?:\/\/.+/,
      message: "Please enter a valid URL"
    };
  }
  if (field.validate) {
    rules.validate = mergeValidate(
      rules.validate,
      (value) => {
        var _a2;
        return (_a2 = field.validate) == null ? void 0 : _a2.call(field, value, getValues());
      }
    );
  }
  return rules;
}
function CraftFormBuilder({
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
  customValidation
}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React2.useState(defaultOpen);
  const isControlled = typeof open === "boolean";
  const isOpen = isControlled ? open : uncontrolledOpen;
  const setOpen = React2.useCallback(
    (next) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange == null ? void 0 : onOpenChange(next);
    },
    [isControlled, onOpenChange]
  );
  const defaultValues = React2.useMemo(
    () => buildDefaultValues(fields, initialData),
    [fields, initialData]
  );
  const form = useForm({
    mode: "onChange",
    defaultValues
  });
  const formId = React2.useId();
  React2.useEffect(() => {
    form.reset(defaultValues);
  }, [defaultValues, form]);
  const handleSubmit = form.handleSubmit(async (values) => {
    if (customValidation) {
      const customErrors = customValidation(values);
      if (customErrors && Object.keys(customErrors).length > 0) {
        Object.entries(customErrors).forEach(([key, message]) => {
          if (message) {
            form.setError(key, {
              type: "custom",
              message: String(message)
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
    onReset == null ? void 0 : onReset();
  };
  const handleCancel = () => {
    onCancel == null ? void 0 : onCancel();
    if (closeOnCancel) setOpen(false);
  };
  return /* @__PURE__ */ jsx3(FormProvider2, { ...form, children: /* @__PURE__ */ jsx3(
    CraftModal,
    {
      open: isOpen,
      onOpenChange: setOpen,
      trigger,
      title,
      description,
      tone,
      className,
      footer: /* @__PURE__ */ jsxs3("div", { className: "flex flex-wrap items-center justify-end gap-3", children: [
        showReset && /* @__PURE__ */ jsx3(
          CraftButton,
          {
            type: "button",
            variant: "outline",
            onClick: handleReset,
            disabled: loading,
            children: resetLabel
          }
        ),
        showCancel && /* @__PURE__ */ jsx3(
          CraftButton,
          {
            type: "button",
            variant: "ghost",
            onClick: handleCancel,
            disabled: loading,
            children: cancelLabel
          }
        ),
        /* @__PURE__ */ jsx3(
          CraftSubmitButton,
          {
            loading,
            disableWhenInvalid: disableSubmitWhenInvalid,
            form: formId,
            children: submitLabel
          }
        )
      ] }),
      children: /* @__PURE__ */ jsx3(
        "form",
        {
          id: formId,
          onSubmit: handleSubmit,
          className: cn("space-y-5", formClassName),
          children: fields.map((field) => /* @__PURE__ */ jsxs3("div", { className: "space-y-2", children: [
            field.helpText && /* @__PURE__ */ jsx3("p", { className: "text-xs text-[rgb(var(--nc-fg-muted))]", children: field.helpText }),
            /* @__PURE__ */ jsx3(
              CraftFormField,
              {
                name: field.name,
                label: field.label,
                description: field.description,
                type: field.type,
                placeholder: field.placeholder,
                options: field.options,
                tone,
                disabled: field.disabled || loading,
                rules: buildRules(field, form.getValues),
                fieldProps: {
                  min: field.min,
                  max: field.max,
                  step: field.step,
                  rows: field.rows,
                  accept: field.accept,
                  multiple: field.type === "multifile",
                  ...field.fieldProps
                }
              }
            )
          ] }, field.name))
        }
      )
    }
  ) });
}

export {
  CraftForm,
  CraftFormField,
  CraftFormBuilder
};
//# sourceMappingURL=chunk-7Q4Z47HT.js.map