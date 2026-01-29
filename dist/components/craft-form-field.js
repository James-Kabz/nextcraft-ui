"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import {
  Controller,
  useFormContext
} from "react-hook-form";
import { cn } from "../utils/cn";
import { CraftInput } from "../components/craft-input";
import { CraftTextarea } from "../components/craft-textarea";
import { CraftSelect } from "../components/craft-select";
import { CraftCheckbox } from "../components/craft-checkbox";
import { CraftSwitch } from "../components/craft-switch";
import { CraftDatePicker } from "../components/craft-date-picker";
import { CraftNumberInput } from "../components/craft-number-input";
import { CraftCurrencyInput } from "../components/craft-currency-input";
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
const baseInputClass = "w-full rounded-2xl border-2 bg-[rgb(var(--nc-surface)/0.08)] text-[rgb(var(--nc-fg))] backdrop-blur-xl shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)] focus:outline-none focus:ring-4 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border-[rgb(var(--nc-border)/0.35)] focus:border-[rgb(var(--nc-accent-1)/0.8)] focus:ring-[rgb(var(--nc-accent-1)/0.3)] px-5 py-3 text-base placeholder:text-[rgb(var(--nc-fg-soft))]";
function CraftFormField({
  name,
  label,
  description,
  helpText,
  success,
  required,
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
  const fieldId = React.useId();
  const errorId = `${fieldId}-error`;
  const helpId = `${fieldId}-help`;
  const errorMessage = typeof (error == null ? void 0 : error.message) === "string" ? error.message : void 0;
  const hasError = Boolean(errorMessage);
  const resolvedInputClassName = cn(
    inputClassName,
    hasError ? "border-[rgb(var(--nc-accent-3))] focus:border-[rgb(var(--nc-accent-3))] focus:ring-[rgb(var(--nc-accent-3)/0.35)]" : null
  );
  const ariaDescribedBy = hasError ? errorId : helpText ? helpId : void 0;
  if (type === "hidden") {
    return /* @__PURE__ */ jsx("input", { type: "hidden", ...register(name, rules) });
  }
  const labelNode = label ? /* @__PURE__ */ jsxs(
    "label",
    {
      htmlFor: name,
      className: cn(
        "text-sm font-semibold text-[rgb(var(--nc-fg))]",
        labelClassName
      ),
      children: [
        label,
        required ? /* @__PURE__ */ jsx("span", { className: "ml-1 text-[rgb(var(--nc-accent-3))]", "aria-label": "required", children: "*" }) : null
      ]
    }
  ) : null;
  const descriptionNode = description ? /* @__PURE__ */ jsx(
    "p",
    {
      className: cn(
        "text-xs text-[rgb(var(--nc-fg-muted))]",
        descriptionClassName
      ),
      children: description
    }
  ) : null;
  const errorNode = errorMessage ? /* @__PURE__ */ jsxs(
    "div",
    {
      id: errorId,
      className: "flex items-start gap-2 text-xs text-[rgb(var(--nc-accent-3))]",
      role: "alert",
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ jsx("svg", { className: "mt-0.5 h-4 w-4 shrink-0", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M10 2.5a.75.75 0 01.66.39l7.25 12.5a.75.75 0 01-.66 1.11H2.75a.75.75 0 01-.66-1.11l7.25-12.5A.75.75 0 0110 2.5zm0 4.25a.75.75 0 00-.75.75v4.5a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75zm0 9a1 1 0 100-2 1 1 0 000 2z" }) }),
        /* @__PURE__ */ jsx("span", { children: errorMessage })
      ]
    }
  ) : null;
  const helpNode = helpText && !hasError ? /* @__PURE__ */ jsx("p", { id: helpId, className: "text-xs text-[rgb(var(--nc-fg-muted))]", children: helpText }) : null;
  const successNode = success && !hasError ? /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-xs text-[rgb(var(--nc-accent-2))]", children: [
    /* @__PURE__ */ jsx("svg", { className: "mt-0.5 h-4 w-4 shrink-0", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M7.5 10.75l2 2 4-4a.75.75 0 111.06 1.06l-4.53 4.53a.75.75 0 01-1.06 0L6.44 11.81a.75.75 0 011.06-1.06z" }) }),
    /* @__PURE__ */ jsx("span", { children: success })
  ] }) : null;
  const renderInput = () => {
    if (type === "textarea") {
      return /* @__PURE__ */ jsx(
        CraftTextarea,
        {
          id: name,
          placeholder,
          tone,
          className: resolvedInputClassName,
          disabled,
          "aria-describedby": ariaDescribedBy,
          ...fieldProps,
          ...register(name, rules)
        }
      );
    }
    if (type === "select" || type === "multiselect") {
      return /* @__PURE__ */ jsxs(
        CraftSelect,
        {
          id: name,
          tone,
          className: resolvedInputClassName,
          multiple: type === "multiselect",
          disabled,
          "aria-describedby": ariaDescribedBy,
          ...fieldProps,
          ...register(name, rules),
          children: [
            placeholder && /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: placeholder }),
            options.map((option) => /* @__PURE__ */ jsx(
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
      return /* @__PURE__ */ jsx(
        CraftCheckbox,
        {
          tone,
          label,
          description,
          disabled,
          "aria-describedby": ariaDescribedBy,
          ...fieldProps,
          ...register(name, rules)
        }
      );
    }
    if (type === "switch") {
      return /* @__PURE__ */ jsx(
        CraftSwitch,
        {
          tone,
          label,
          disabled,
          "aria-describedby": ariaDescribedBy,
          ...fieldProps,
          ...register(name, rules)
        }
      );
    }
    if (type === "date") {
      return /* @__PURE__ */ jsx(
        Controller,
        {
          control,
          name,
          rules,
          render: ({ field }) => {
            var _a;
            return /* @__PURE__ */ jsx(
              CraftDatePicker,
              {
                value: (_a = field.value) != null ? _a : "",
                onChange: field.onChange,
                tone,
                placeholder,
                "aria-describedby": ariaDescribedBy,
                ...fieldProps
              }
            );
          }
        }
      );
    }
    if (type === "number") {
      return /* @__PURE__ */ jsx(
        CraftNumberInput,
        {
          id: name,
          tone,
          placeholder,
          className: resolvedInputClassName,
          disabled,
          "aria-describedby": ariaDescribedBy,
          ...fieldProps,
          ...register(name, rules)
        }
      );
    }
    if (type === "currency") {
      return /* @__PURE__ */ jsx(
        CraftCurrencyInput,
        {
          id: name,
          tone,
          placeholder,
          className: resolvedInputClassName,
          disabled,
          "aria-describedby": ariaDescribedBy,
          ...fieldProps,
          ...register(name, rules)
        }
      );
    }
    if (type === "radio") {
      return /* @__PURE__ */ jsx("div", { className: "grid gap-3", children: options.map((option) => /* @__PURE__ */ jsxs(
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
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "radio",
                value: option.value,
                disabled: option.disabled || disabled,
                className: "h-4 w-4 accent-[rgb(var(--nc-accent-1))]",
                "aria-describedby": ariaDescribedBy,
                ...fieldProps,
                ...register(name, rules)
              }
            ),
            /* @__PURE__ */ jsx("span", { children: option.label })
          ]
        },
        option.value
      )) });
    }
    if (type === "range" || type === "slider") {
      return /* @__PURE__ */ jsx(
        "input",
        {
          id: name,
          type: "range",
          className: cn(
            "w-full accent-[rgb(var(--nc-accent-1))]",
            resolvedInputClassName
          ),
          disabled,
          "aria-describedby": ariaDescribedBy,
          ...fieldProps,
          ...register(name, rules)
        }
      );
    }
    if (type === "file" || type === "multifile") {
      return /* @__PURE__ */ jsx(
        "input",
        {
          id: name,
          type: "file",
          multiple: type === "multifile",
          className: cn(
            baseInputClass,
            "file:mr-4 file:rounded-xl file:border-0 file:bg-[rgb(var(--nc-surface)/0.35)] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-[rgb(var(--nc-fg))]",
            resolvedInputClassName
          ),
          disabled,
          "aria-describedby": ariaDescribedBy,
          ...fieldProps,
          ...register(name, rules)
        }
      );
    }
    const inputType = type === "search" || type === "password" || type === "email" || type === "tel" || type === "url" || type === "time" || type === "datetime-local" || type === "month" || type === "week" || type === "color" ? type : "text";
    return /* @__PURE__ */ jsx(
      CraftInput,
      {
        id: name,
        type: inputType,
        placeholder,
        tone,
        className: resolvedInputClassName,
        disabled,
        "aria-describedby": ariaDescribedBy,
        ...fieldProps,
        ...register(name, rules)
      }
    );
  };
  const showLabel = type !== "checkbox" && type !== "switch";
  const showDescriptionAbove = type !== "checkbox" && type !== "switch";
  const showDescriptionBelow = type === "switch";
  return /* @__PURE__ */ jsxs("div", { className: cn("space-y-2", className), "data-nc-theme": tone, children: [
    showLabel ? labelNode : null,
    showDescriptionAbove ? descriptionNode : null,
    renderInput(),
    showDescriptionBelow ? descriptionNode : null,
    errorNode,
    helpNode,
    successNode
  ] });
}
export {
  CraftFormField
};
//# sourceMappingURL=craft-form-field.js.map