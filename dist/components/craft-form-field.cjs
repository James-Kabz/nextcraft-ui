"use strict";
"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var craft_form_field_exports = {};
__export(craft_form_field_exports, {
  CraftFormField: () => CraftFormField
});
module.exports = __toCommonJS(craft_form_field_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"), 1);
var import_react_hook_form = require("react-hook-form");
var import_cn = require("../utils/cn");
var import_craft_input = require("../components/craft-input");
var import_craft_textarea = require("../components/craft-textarea");
var import_craft_select = require("../components/craft-select");
var import_craft_checkbox = require("../components/craft-checkbox");
var import_craft_switch = require("../components/craft-switch");
var import_craft_date_picker = require("../components/craft-date-picker");
var import_craft_number_input = require("../components/craft-number-input");
var import_craft_currency_input = require("../components/craft-currency-input");
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
  const { register, control, formState } = (0, import_react_hook_form.useFormContext)();
  const error = getFieldError(formState.errors, name);
  const fieldId = React.useId();
  const errorId = `${fieldId}-error`;
  const helpId = `${fieldId}-help`;
  const errorMessage = typeof (error == null ? void 0 : error.message) === "string" ? error.message : void 0;
  const hasError = Boolean(errorMessage);
  const resolvedInputClassName = (0, import_cn.cn)(
    inputClassName,
    hasError ? "border-[rgb(var(--nc-accent-3))] focus:border-[rgb(var(--nc-accent-3))] focus:ring-[rgb(var(--nc-accent-3)/0.35)]" : null
  );
  const ariaDescribedBy = hasError ? errorId : helpText ? helpId : void 0;
  if (type === "hidden") {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { type: "hidden", ...register(name, rules) });
  }
  const labelNode = label ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "label",
    {
      htmlFor: name,
      className: (0, import_cn.cn)(
        "text-sm font-semibold text-[rgb(var(--nc-fg))]",
        labelClassName
      ),
      children: [
        label,
        required ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-1 text-[rgb(var(--nc-accent-3))]", "aria-label": "required", children: "*" }) : null
      ]
    }
  ) : null;
  const descriptionNode = description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "p",
    {
      className: (0, import_cn.cn)(
        "text-xs text-[rgb(var(--nc-fg-muted))]",
        descriptionClassName
      ),
      children: description
    }
  ) : null;
  const errorNode = errorMessage ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      id: errorId,
      className: "flex items-start gap-2 text-xs text-[rgb(var(--nc-accent-3))]",
      role: "alert",
      "aria-live": "polite",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { className: "mt-0.5 h-4 w-4 shrink-0", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 2.5a.75.75 0 01.66.39l7.25 12.5a.75.75 0 01-.66 1.11H2.75a.75.75 0 01-.66-1.11l7.25-12.5A.75.75 0 0110 2.5zm0 4.25a.75.75 0 00-.75.75v4.5a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75zm0 9a1 1 0 100-2 1 1 0 000 2z" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: errorMessage })
      ]
    }
  ) : null;
  const helpNode = helpText && !hasError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { id: helpId, className: "text-xs text-[rgb(var(--nc-fg-muted))]", children: helpText }) : null;
  const successNode = success && !hasError ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-start gap-2 text-xs text-[rgb(var(--nc-accent-2))]", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { className: "mt-0.5 h-4 w-4 shrink-0", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7.5 10.75l2 2 4-4a.75.75 0 111.06 1.06l-4.53 4.53a.75.75 0 01-1.06 0L6.44 11.81a.75.75 0 011.06-1.06z" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: success })
  ] }) : null;
  const renderInput = () => {
    if (type === "textarea") {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_craft_textarea.CraftTextarea,
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
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        import_craft_select.CraftSelect,
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
            placeholder && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "", disabled: true, children: placeholder }),
            options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_craft_checkbox.CraftCheckbox,
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
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_craft_switch.CraftSwitch,
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
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react_hook_form.Controller,
        {
          control,
          name,
          rules,
          render: ({ field }) => {
            var _a;
            return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_craft_date_picker.CraftDatePicker,
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
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_craft_number_input.CraftNumberInput,
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
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_craft_currency_input.CraftCurrencyInput,
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
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid gap-3", children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "label",
        {
          className: (0, import_cn.cn)(
            "flex items-center gap-3 rounded-2xl border border-[rgb(var(--nc-border)/0.35)] bg-[rgb(var(--nc-surface)/0.08)] px-4 py-3 text-sm text-[rgb(var(--nc-fg))]",
            "transition-all duration-200",
            "focus-within:ring-2 focus-within:ring-[rgb(var(--nc-accent-1)/0.5)]",
            option.disabled ? "opacity-60" : "cursor-pointer"
          ),
          "data-nc-theme": tone,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: option.label })
          ]
        },
        option.value
      )) });
    }
    if (type === "range" || type === "slider") {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "input",
        {
          id: name,
          type: "range",
          className: (0, import_cn.cn)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "input",
        {
          id: name,
          type: "file",
          multiple: type === "multifile",
          className: (0, import_cn.cn)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_craft_input.CraftInput,
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: (0, import_cn.cn)("space-y-2", className), "data-nc-theme": tone, children: [
    showLabel ? labelNode : null,
    showDescriptionAbove ? descriptionNode : null,
    renderInput(),
    showDescriptionBelow ? descriptionNode : null,
    errorNode,
    helpNode,
    successNode
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CraftFormField
});
//# sourceMappingURL=craft-form-field.cjs.map