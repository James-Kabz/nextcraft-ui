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
var craft_form_builder_exports = {};
__export(craft_form_builder_exports, {
  CraftFormBuilder: () => CraftFormBuilder
});
module.exports = __toCommonJS(craft_form_builder_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"), 1);
var import_react_hook_form = require("react-hook-form");
var import_cn = require("../utils/cn");
var import_craft_modal = require("../components/craft-modal");
var import_craft_button = require("../components/craft-button");
var import_craft_submit_button = require("../components/craft-submit-button");
var import_craft_form_field = require("../components/craft-form-field");
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
  const defaultValues = React.useMemo(
    () => buildDefaultValues(fields, initialData),
    [fields, initialData]
  );
  const form = (0, import_react_hook_form.useForm)({
    mode: "onChange",
    defaultValues
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_hook_form.FormProvider, { ...form, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_craft_modal.CraftModal,
    {
      open: isOpen,
      onOpenChange: setOpen,
      trigger,
      title,
      description,
      tone,
      className,
      footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-wrap items-center justify-end gap-3", children: [
        showReset && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_craft_button.CraftButton,
          {
            type: "button",
            variant: "outline",
            onClick: handleReset,
            disabled: loading,
            children: resetLabel
          }
        ),
        showCancel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_craft_button.CraftButton,
          {
            type: "button",
            variant: "ghost",
            onClick: handleCancel,
            disabled: loading,
            children: cancelLabel
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_craft_submit_button.CraftSubmitButton,
          {
            loading,
            disableWhenInvalid: disableSubmitWhenInvalid,
            form: formId,
            children: submitLabel
          }
        )
      ] }),
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "form",
        {
          id: formId,
          onSubmit: handleSubmit,
          className: (0, import_cn.cn)("space-y-5", formClassName),
          children: fields.map((field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "space-y-2", children: [
            field.helpText && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xs text-[rgb(var(--nc-fg-muted))]", children: field.helpText }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_craft_form_field.CraftFormField,
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CraftFormBuilder
});
//# sourceMappingURL=craft-form-builder.cjs.map