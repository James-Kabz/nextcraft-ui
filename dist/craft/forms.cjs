"use strict";
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

// src/craft/forms.ts
var forms_exports = {};
__export(forms_exports, {
  CraftForm: () => CraftForm,
  CraftFormBuilder: () => CraftFormBuilder,
  CraftFormField: () => CraftFormField
});
module.exports = __toCommonJS(forms_exports);

// src/components/craft-form.tsx
var React2 = __toESM(require("react"), 1);
var import_react_hook_form2 = require("react-hook-form");

// src/utils/cn.ts
function cn(...values) {
  return values.filter(Boolean).join(" ");
}

// src/components/craft-modal.tsx
var React = __toESM(require("react"), 1);
var import_react_dom = require("react-dom");
var import_jsx_runtime = require("react/jsx-runtime");
var FOCUSABLE_SELECTORS = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "[tabindex]:not([tabindex='-1'])"
].join(",");
function useFocusTrap(active) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!active || !ref.current) return;
    const root = ref.current;
    const getFocusable = () => Array.from(root.querySelectorAll(FOCUSABLE_SELECTORS));
    const focusables = getFocusable();
    if (focusables.length) {
      focusables[0].focus();
    } else {
      root.focus();
    }
    const handleKeyDown = (event) => {
      if (event.key !== "Tab") return;
      const items = getFocusable();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      const activeEl = document.activeElement;
      if (event.shiftKey && activeEl === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && activeEl === last) {
        event.preventDefault();
        first.focus();
      }
    };
    root.addEventListener("keydown", handleKeyDown);
    return () => root.removeEventListener("keydown", handleKeyDown);
  }, [active]);
  return ref;
}
function CraftModal({
  open,
  defaultOpen = false,
  onOpenChange,
  tone,
  title,
  description,
  children,
  trigger,
  footer,
  className
}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
  const isControlled = typeof open === "boolean";
  const isOpen = isControlled ? open : uncontrolledOpen;
  const setOpen = React.useCallback(
    (next) => {
      if (!isControlled) {
        setUncontrolledOpen(next);
      }
      onOpenChange == null ? void 0 : onOpenChange(next);
    },
    [isControlled, onOpenChange]
  );
  React.useEffect(() => {
    if (!isOpen) return;
    const handleKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, setOpen]);
  const ref = useFocusTrap(isOpen);
  const content = isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "fixed inset-0 z-50 flex items-center justify-center px-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        className: "absolute inset-0 backdrop-blur-sm",
        onClick: () => setOpen(false)
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        ref,
        tabIndex: -1,
        className: cn(
          "relative z-10 w-full max-w-7xl rounded-3xl border border-[rgb(var(--nc-border)/0.45)] p-6 text-[rgb(var(--nc-fg))] shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl",
          "max-h-[calc(100vh-1rem)] overflow-y-auto",
          className
        ),
        "data-nc-theme": tone,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-start justify-between gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "space-y-1", children: [
              title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "text-2xl font-semibold", children: title }),
              description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-[rgb(var(--nc-fg-muted))]", children: description })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "button",
              {
                className: "rounded-full border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] p-2 text-[rgb(var(--nc-fg-soft))] transition hover:text-[rgb(var(--nc-fg))]",
                onClick: () => setOpen(false),
                "aria-label": "Close",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { viewBox: "0 0 20 20", className: "h-4 w-4", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" }) })
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-5 space-y-4", children }),
          footer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-6", children: footer })
        ]
      }
    )
  ] }) : null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    trigger && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "span",
      {
        onClick: () => setOpen(true),
        onKeyDown: (event) => {
          if (event.key === "Enter" || event.key === " ") setOpen(true);
        },
        role: "button",
        tabIndex: 0,
        className: "inline-flex",
        children: trigger
      }
    ),
    typeof document !== "undefined" && content ? (0, import_react_dom.createPortal)(content, document.body) : content
  ] });
}

// src/components/craft-button.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var sizeClasses = {
  sm: "h-9 px-4 text-xs",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base"
};
var variantClasses = {
  solid: "bg-gradient-to-br from-[rgb(var(--nc-accent-1))] via-[rgb(var(--nc-accent-2))] to-[rgb(var(--nc-accent-3))] text-white shadow-[0_12px_30px_rgb(var(--nc-accent-1)/0.45)] hover:shadow-[0_16px_36px_rgb(var(--nc-accent-1)/0.6)] hover:scale-[1.02] active:scale-[0.98]",
  ghost: "bg-[color:rgb(var(--nc-surface)/0.12)] text-[rgb(var(--nc-fg))] hover:bg-[color:rgb(var(--nc-surface)/0.18)] backdrop-blur-sm border border-[rgb(var(--nc-border)/0.35)] hover:border-[color:rgb(var(--nc-border)/0.5)]",
  outline: "bg-transparent text-[color:rgb(var(--nc-accent-1))] border-2 border-[color:rgb(var(--nc-accent-1)/0.5)] hover:border-[color:rgb(var(--nc-accent-1))] hover:bg-[color:rgb(var(--nc-accent-1)/0.1)]",
  gradient: "bg-gradient-to-r from-[rgb(var(--nc-accent-1))] via-[rgb(var(--nc-accent-2))] to-[rgb(var(--nc-accent-3))] text-white shadow-[0_12px_30px_rgb(var(--nc-accent-2)/0.45)] hover:shadow-[0_16px_36px_rgb(var(--nc-accent-2)/0.6)] hover:scale-[1.02] active:scale-[0.98]"
};
function CraftButton({
  className,
  variant = "solid",
  size = "md",
  glow = true,
  tone,
  disabled,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "button",
    {
      className: cn(
        "relative inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--nc-accent-1)/0.6)] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
        sizeClasses[size],
        variantClasses[variant],
        glow && (variant === "solid" || variant === "gradient") ? "before:absolute before:-inset-1 before:rounded-xl before:bg-linear-to-r before:from-[rgb(var(--nc-accent-1)/0.2)] before:via-[rgb(var(--nc-accent-2)/0.2)] before:to-[rgb(var(--nc-accent-3)/0.2)] before:blur-xl before:-z-10 before:opacity-0 hover:before:opacity-100 before:transition-opacity" : "",
        className
      ),
      "data-nc-theme": tone,
      disabled,
      ...props
    }
  );
}

// src/components/craft-submit-button.tsx
var import_react_hook_form = require("react-hook-form");
var import_jsx_runtime3 = require("react/jsx-runtime");
function CraftSubmitButton({
  className,
  tone,
  loading,
  loadingLabel = "Submitting...",
  disableWhenInvalid = true,
  disabled,
  children,
  ...props
}) {
  var _a, _b, _c, _d;
  const form = (0, import_react_hook_form.useFormContext)();
  const isSubmitting = (_b = loading != null ? loading : (_a = form == null ? void 0 : form.formState) == null ? void 0 : _a.isSubmitting) != null ? _b : false;
  const isValid = (_d = (_c = form == null ? void 0 : form.formState) == null ? void 0 : _c.isValid) != null ? _d : true;
  const isDisabled = disabled || isSubmitting || disableWhenInvalid && !isValid;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "button",
    {
      type: "submit",
      className: cn(
        "relative inline-flex items-center justify-center gap-2 rounded-xl px-6 py-2 text-sm font-semibold",
        "bg-linear-to-br from-[rgb(var(--nc-accent-1))] via-[rgb(var(--nc-accent-2))] to-[rgb(var(--nc-accent-3))]",
        "text-white shadow-[0_12px_30px_rgb(var(--nc-accent-1)/0.35)]",
        "transition-all duration-200",
        "hover:shadow-[0_16px_36px_rgb(var(--nc-accent-1)/0.5)] hover:scale-[1.02] active:scale-[0.98]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--nc-accent-1)/0.6)]",
        "disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100",
        className
      ),
      "data-nc-theme": tone,
      disabled: isDisabled,
      ...props,
      children: [
        isSubmitting && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "inline-flex h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: isSubmitting ? loadingLabel : children })
      ]
    }
  );
}

// src/components/craft-form.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
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
  const formId = React2.useId();
  const handleSubmit = form.handleSubmit(async (values) => {
    await onSubmit(values);
    if (closeOnSubmit) setOpen(false);
  });
  const footerContent = footer != null ? footer : /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex flex-wrap items-center justify-end gap-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(CraftButton, { type: "button", variant: "ghost", onClick: () => setOpen(false), children: cancelLabel }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      CraftSubmitButton,
      {
        form: formId,
        disableWhenInvalid: disableSubmitWhenInvalid,
        children: submitLabel
      }
    )
  ] });
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_hook_form2.FormProvider, { ...form, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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

// src/components/craft-form-builder.tsx
var React11 = __toESM(require("react"), 1);
var import_react_hook_form4 = require("react-hook-form");

// src/components/craft-form-field.tsx
var import_react_hook_form3 = require("react-hook-form");

// src/components/craft-input.tsx
var React3 = __toESM(require("react"), 1);
var import_jsx_runtime5 = require("react/jsx-runtime");
var inputSizeClasses = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-base",
  lg: "h-14 px-6 text-lg"
};
var CraftInput = React3.forwardRef(
  ({ className, tone, inputSize = "md", glow = true, icon, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "relative w-full", "data-nc-theme": tone, children: [
      icon && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "absolute left-4 top-1/2 -translate-y-1/2 text-[rgb(var(--nc-fg-soft))]", children: icon }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "input",
        {
          ref,
          className: cn(
            "w-full rounded-2xl border-2 bg-[rgb(var(--nc-surface)/0.08)] text-[rgb(var(--nc-fg))] backdrop-blur-xl",
            "shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)]",
            "focus:outline-none focus:ring-4",
            "transition-all duration-300",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            inputSizeClasses[inputSize],
            "border-[rgb(var(--nc-border)/0.35)]",
            "focus:border-[rgb(var(--nc-accent-1)/0.8)] focus:ring-[rgb(var(--nc-accent-1)/0.3)]",
            "placeholder:text-[rgb(var(--nc-fg-soft))]",
            glow ? "focus:shadow-[0_0_30px_-5px_var(--glow-color)]" : "",
            icon ? "pl-12" : "",
            className
          ),
          style: {
            "--glow-color": "rgb(var(--nc-accent-1) / 0.5)"
          },
          ...props
        }
      )
    ] });
  }
);
CraftInput.displayName = "CraftInput";

// src/components/craft-textarea.tsx
var React4 = __toESM(require("react"), 1);
var import_jsx_runtime6 = require("react/jsx-runtime");
var CraftTextarea = React4.forwardRef(
  ({ className, tone, rows = 4, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "relative w-full", "data-nc-theme": tone, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "textarea",
      {
        ref,
        rows,
        className: cn(
          "w-full rounded-2xl border-2 bg-[rgb(var(--nc-surface)/0.08)] text-[rgb(var(--nc-fg))] backdrop-blur-xl",
          "shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)]",
          "focus:outline-none focus:ring-4",
          "transition-all duration-300",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "border-[rgb(var(--nc-border)/0.35)]",
          "focus:border-[rgb(var(--nc-accent-1)/0.8)] focus:ring-[rgb(var(--nc-accent-1)/0.3)]",
          "placeholder:text-[rgb(var(--nc-fg-soft))]",
          "px-5 py-3 text-base",
          className
        ),
        style: {
          "--glow-color": "rgb(var(--nc-accent-1) / 0.5)"
        },
        ...props
      }
    ) });
  }
);
CraftTextarea.displayName = "CraftTextarea";

// src/components/craft-select.tsx
var React5 = __toESM(require("react"), 1);
var import_jsx_runtime7 = require("react/jsx-runtime");
var CraftSelect = React5.forwardRef(
  ({ className, tone, children, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "relative w-full", "data-nc-theme": tone, children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "select",
        {
          ref,
          className: cn(
            "w-full appearance-none rounded-2xl border-2 bg-[rgb(var(--nc-surface)/0.08)] text-[rgb(var(--nc-fg))] backdrop-blur-xl",
            "shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)]",
            "focus:outline-none focus:ring-4",
            "transition-all duration-300",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "border-[rgb(var(--nc-border)/0.35)]",
            "focus:border-[rgb(var(--nc-accent-1)/0.8)] focus:ring-[rgb(var(--nc-accent-1)/0.3)]",
            "px-5 py-3 pr-10 text-base",
            className
          ),
          ...props,
          children
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "svg",
        {
          className: "pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[rgb(var(--nc-fg-soft))]",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          "aria-hidden": "true",
          children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            "path",
            {
              fillRule: "evenodd",
              d: "M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.7a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z",
              clipRule: "evenodd"
            }
          )
        }
      )
    ] });
  }
);
CraftSelect.displayName = "CraftSelect";

// src/components/craft-checkbox.tsx
var React6 = __toESM(require("react"), 1);
var import_jsx_runtime8 = require("react/jsx-runtime");
var CraftCheckbox = React6.forwardRef(
  ({ className, tone, label, description, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
      "label",
      {
        className: cn(
          "flex items-start gap-3 text-sm text-[rgb(var(--nc-fg))]",
          props.disabled ? "opacity-60" : "cursor-pointer",
          className
        ),
        "data-nc-theme": tone,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { className: "relative mt-0.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
              "input",
              {
                ref,
                type: "checkbox",
                className: "peer sr-only",
                ...props
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
              "span",
              {
                className: cn(
                  "flex h-5 w-5 items-center justify-center rounded-md border-2",
                  "border-[rgb(var(--nc-border)/0.45)] bg-[rgb(var(--nc-surface)/0.08)]",
                  "transition-all duration-200",
                  "peer-checked:border-[rgb(var(--nc-accent-1))] peer-checked:bg-[rgb(var(--nc-accent-1)/0.25)]",
                  "peer-focus-visible:ring-2 peer-focus-visible:ring-[rgb(var(--nc-accent-1)/0.5)]"
                ),
                children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                  "svg",
                  {
                    className: "h-3 w-3 text-[rgb(var(--nc-fg))] opacity-0 transition-opacity peer-checked:opacity-100",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                      "path",
                      {
                        fillRule: "evenodd",
                        d: "M16.704 5.29a1 1 0 010 1.415l-7.2 7.2a1 1 0 01-1.415 0l-3.2-3.2a1 1 0 111.415-1.415l2.492 2.493 6.493-6.493a1 1 0 011.415 0z",
                        clipRule: "evenodd"
                      }
                    )
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { className: "space-y-1", children: [
            label && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "block font-medium text-[rgb(var(--nc-fg))]", children: label }),
            description && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "block text-xs text-[rgb(var(--nc-fg-muted))]", children: description })
          ] })
        ]
      }
    );
  }
);
CraftCheckbox.displayName = "CraftCheckbox";

// src/components/craft-switch.tsx
var React7 = __toESM(require("react"), 1);
var import_jsx_runtime9 = require("react/jsx-runtime");
var CraftSwitch = React7.forwardRef(
  ({ className, tone, label, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
      "label",
      {
        className: cn(
          "inline-flex items-center gap-3 text-sm text-[rgb(var(--nc-fg))]",
          props.disabled ? "opacity-60" : "cursor-pointer",
          className
        ),
        "data-nc-theme": tone,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", { ref, type: "checkbox", className: "peer sr-only", ...props }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            "span",
            {
              className: cn(
                "relative h-6 w-11 rounded-full border-2 border-[rgb(var(--nc-border)/0.35)] bg-[rgb(var(--nc-surface)/0.08)]",
                "transition-all duration-200",
                "peer-focus-visible:ring-2 peer-focus-visible:ring-[rgb(var(--nc-accent-1)/0.5)]",
                "peer-checked:border-[rgb(var(--nc-accent-1)/0.6)] peer-checked:bg-[rgb(var(--nc-accent-1)/0.25)]"
              ),
              children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                "span",
                {
                  className: cn(
                    "absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-[rgb(var(--nc-surface-muted)/0.9)]",
                    "transition-all duration-200",
                    "peer-checked:translate-x-5 peer-checked:bg-[rgb(var(--nc-surface-muted))]"
                  )
                }
              )
            }
          ),
          label && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: label })
        ]
      }
    );
  }
);
CraftSwitch.displayName = "CraftSwitch";

// src/components/craft-date-picker.tsx
var React8 = __toESM(require("react"), 1);
var import_jsx_runtime10 = require("react/jsx-runtime");
var WEEK_DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
function formatDate(date) {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function parseDate(value) {
  if (!value) return null;
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return null;
  return new Date(year, month - 1, day);
}
function isSameDay(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function isOutsideRange(date, min, max) {
  const minDate = parseDate(min);
  const maxDate = parseDate(max);
  if (minDate && date < minDate) return true;
  if (maxDate && date > maxDate) return true;
  return false;
}
function CraftDatePicker({
  value,
  defaultValue,
  onChange,
  tone,
  min,
  max,
  placeholder = "Select date",
  className
}) {
  const [open, setOpen] = React8.useState(false);
  const [uncontrolledValue, setUncontrolledValue] = React8.useState(defaultValue != null ? defaultValue : "");
  const isControlled = value !== void 0;
  const selectedValue = isControlled ? value != null ? value : "" : uncontrolledValue;
  const selectedDate = parseDate(selectedValue);
  const initialMonth = selectedDate != null ? selectedDate : /* @__PURE__ */ new Date();
  const [viewDate, setViewDate] = React8.useState(initialMonth);
  React8.useEffect(() => {
    if (selectedDate) setViewDate(selectedDate);
  }, [selectedDate]);
  const wrapperRef = React8.useRef(null);
  React8.useEffect(() => {
    if (!open) return;
    const handleClick = (event) => {
      var _a;
      if (!((_a = wrapperRef.current) == null ? void 0 : _a.contains(event.target))) {
        setOpen(false);
      }
    };
    const handleKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);
  const setValue = React8.useCallback(
    (next) => {
      if (!isControlled) setUncontrolledValue(next);
      onChange == null ? void 0 : onChange(next);
    },
    [isControlled, onChange]
  );
  const monthStart = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1);
  const monthEnd = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0);
  const startDay = monthStart.getDay();
  const daysInMonth = monthEnd.getDate();
  const cells = Array.from({ length: startDay + daysInMonth }, (_, i) => {
    const dayNumber = i - startDay + 1;
    if (dayNumber < 1) return null;
    return new Date(viewDate.getFullYear(), viewDate.getMonth(), dayNumber);
  });
  const handleDaySelect = (date) => {
    if (isOutsideRange(date, min, max)) return;
    const next = formatDate(date);
    setValue(next);
    setOpen(false);
  };
  const handleKeyDown = (event) => {
    if (!open) return;
    if (!selectedDate) return;
    const next = new Date(selectedDate);
    if (event.key === "ArrowRight") next.setDate(next.getDate() + 1);
    if (event.key === "ArrowLeft") next.setDate(next.getDate() - 1);
    if (event.key === "ArrowDown") next.setDate(next.getDate() + 7);
    if (event.key === "ArrowUp") next.setDate(next.getDate() - 7);
    if (event.key === "Enter") {
      event.preventDefault();
      handleDaySelect(selectedDate);
      return;
    }
    if (next.getTime() !== selectedDate.getTime()) {
      event.preventDefault();
      if (!isOutsideRange(next, min, max)) {
        setValue(formatDate(next));
        setViewDate(next);
      }
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "relative w-full", "data-nc-theme": tone, ref: wrapperRef, children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
      "button",
      {
        type: "button",
        onClick: () => setOpen((prev) => !prev),
        className: cn(
          "flex w-full items-center justify-between rounded-2xl border-2 bg-[rgb(var(--nc-surface)/0.08)] px-5 py-3 text-left text-base text-[rgb(var(--nc-fg))] backdrop-blur-xl",
          "shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)]",
          "transition-all duration-300",
          "border-[rgb(var(--nc-border)/0.35)]",
          "focus:outline-none focus:ring-4 focus:ring-[rgb(var(--nc-accent-1)/0.3)]",
          className
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: selectedValue ? "text-[rgb(var(--nc-fg))]" : "text-[rgb(var(--nc-fg-soft))]", children: selectedValue || placeholder }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", { className: "h-4 w-4 text-[rgb(var(--nc-fg-soft))]", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", { d: "M6 2a1 1 0 011 1v1h6V3a1 1 0 112 0v1h1a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h1V3a1 1 0 011-1zm10 6H4v8h12V8z" }) })
        ]
      }
    ),
    open && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
      "div",
      {
        className: cn(
          "absolute left-0 top-full z-20 mt-3 w-full rounded-3xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/1.52)] p-4 text-[rgb(var(--nc-fg))] shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-10xl"
        ),
        onKeyDown: handleKeyDown,
        tabIndex: -1,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
              "button",
              {
                type: "button",
                className: "rounded-xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] px-3 py-1 text-sm text-[rgb(var(--nc-fg))]",
                onClick: () => setViewDate(
                  new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1)
                ),
                children: "Prev"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "text-sm font-semibold", children: viewDate.toLocaleString(void 0, { month: "long", year: "numeric" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
              "button",
              {
                type: "button",
                className: "rounded-xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] px-3 py-1 text-sm text-[rgb(var(--nc-fg))]",
                onClick: () => setViewDate(
                  new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1)
                ),
                children: "Next"
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "mt-4 grid grid-cols-7 gap-2 text-xs text-[rgb(var(--nc-fg-muted))]", children: WEEK_DAYS.map((day) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "text-center", children: day }, day)) }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "mt-2 grid grid-cols-7 gap-2", children: cells.map((date, index) => {
            if (!date) return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {}, `empty-${index}`);
            const disabled = isOutsideRange(date, min, max);
            const selected = selectedDate && isSameDay(date, selectedDate);
            return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
              "button",
              {
                type: "button",
                onClick: () => handleDaySelect(date),
                disabled,
                className: cn(
                  "rounded-lg py-2 text-sm transition-all",
                  selected ? "bg-[rgb(var(--nc-accent-1)/0.3)] text-[rgb(var(--nc-fg))]" : "text-[rgb(var(--nc-fg-muted))] hover:bg-[rgb(var(--nc-surface)/0.12)]",
                  disabled && "opacity-40 hover:bg-transparent"
                ),
                children: date.getDate()
              },
              date.toISOString()
            );
          }) })
        ]
      }
    )
  ] });
}

// src/components/craft-number-input.tsx
var React9 = __toESM(require("react"), 1);
var import_jsx_runtime11 = require("react/jsx-runtime");
var CraftNumberInput = React9.forwardRef(({ className, tone, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "relative w-full", "data-nc-theme": tone, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    "input",
    {
      ref,
      type: "number",
      className: cn(
        "w-full rounded-2xl border-2 bg-[rgb(var(--nc-surface)/0.08)] text-[rgb(var(--nc-fg))] backdrop-blur-xl",
        "shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)]",
        "focus:outline-none focus:ring-4",
        "transition-all duration-300",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "border-[rgb(var(--nc-border)/0.35)]",
        "focus:border-[rgb(var(--nc-accent-1)/0.8)] focus:ring-[rgb(var(--nc-accent-1)/0.3)]",
        "px-5 py-3 text-base",
        className
      ),
      ...props
    }
  ) });
});
CraftNumberInput.displayName = "CraftNumberInput";

// src/components/craft-currency-input.tsx
var React10 = __toESM(require("react"), 1);
var import_jsx_runtime12 = require("react/jsx-runtime");
var CraftCurrencyInput = React10.forwardRef(({ className, tone, currencySymbol = "$", ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "relative w-full", "data-nc-theme": tone, children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[rgb(var(--nc-fg-soft))]", children: currencySymbol }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      "input",
      {
        ref,
        type: "text",
        inputMode: "decimal",
        className: cn(
          "w-full rounded-2xl border-2 bg-[rgb(var(--nc-surface)/0.08)] text-[rgb(var(--nc-fg))] backdrop-blur-xl",
          "shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)]",
          "focus:outline-none focus:ring-4",
          "transition-all duration-300",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "border-[rgb(var(--nc-border)/0.35)]",
          "focus:border-[rgb(var(--nc-accent-1)/0.8)] focus:ring-[rgb(var(--nc-accent-1)/0.3)]",
          "placeholder:text-[rgb(var(--nc-fg-soft))]",
          "px-5 py-3 pl-9 text-base",
          className
        ),
        ...props
      }
    )
  ] });
});
CraftCurrencyInput.displayName = "CraftCurrencyInput";

// src/components/craft-form-field.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
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
  const { register, control, formState } = (0, import_react_hook_form3.useFormContext)();
  const error = getFieldError(formState.errors, name);
  const errorMessage = typeof (error == null ? void 0 : error.message) === "string" ? error.message : void 0;
  if (type === "hidden") {
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("input", { type: "hidden", ...register(name, rules) });
  }
  const labelNode = label ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
  const descriptionNode = description ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    "p",
    {
      className: cn(
        "text-xs text-[rgb(var(--nc-fg-muted))]",
        descriptionClassName
      ),
      children: description
    }
  ) : null;
  const errorNode = errorMessage ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-xs text-[rgb(var(--nc-accent-3))]", children: errorMessage }) : null;
  const renderInput = () => {
    if (type === "textarea") {
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
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
            placeholder && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("option", { value: "", disabled: true, children: placeholder }),
            options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        import_react_hook_form3.Controller,
        {
          control,
          name,
          rules,
          render: ({ field }) => {
            var _a;
            return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "grid gap-3", children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
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
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { children: option.label })
          ]
        },
        option.value
      )) });
    }
    if (type === "range" || type === "slider") {
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: cn("space-y-2", className), "data-nc-theme": tone, children: [
    showLabel ? labelNode : null,
    showDescriptionAbove ? descriptionNode : null,
    renderInput(),
    showDescriptionBelow ? descriptionNode : null,
    errorNode
  ] });
}

// src/components/craft-form-builder.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
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
  const [uncontrolledOpen, setUncontrolledOpen] = React11.useState(defaultOpen);
  const isControlled = typeof open === "boolean";
  const isOpen = isControlled ? open : uncontrolledOpen;
  const setOpen = React11.useCallback(
    (next) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange == null ? void 0 : onOpenChange(next);
    },
    [isControlled, onOpenChange]
  );
  const defaultValues = React11.useMemo(
    () => buildDefaultValues(fields, initialData),
    [fields, initialData]
  );
  const form = (0, import_react_hook_form4.useForm)({
    mode: "onChange",
    defaultValues
  });
  const formId = React11.useId();
  React11.useEffect(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react_hook_form4.FormProvider, { ...form, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    CraftModal,
    {
      open: isOpen,
      onOpenChange: setOpen,
      trigger,
      title,
      description,
      tone,
      className,
      footer: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex flex-wrap items-center justify-end gap-3", children: [
        showReset && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          CraftButton,
          {
            type: "button",
            variant: "outline",
            onClick: handleReset,
            disabled: loading,
            children: resetLabel
          }
        ),
        showCancel && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          CraftButton,
          {
            type: "button",
            variant: "ghost",
            onClick: handleCancel,
            disabled: loading,
            children: cancelLabel
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          CraftSubmitButton,
          {
            loading,
            disableWhenInvalid: disableSubmitWhenInvalid,
            form: formId,
            children: submitLabel
          }
        )
      ] }),
      children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
        "form",
        {
          id: formId,
          onSubmit: handleSubmit,
          className: cn("space-y-5", formClassName),
          children: fields.map((field) => /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "space-y-2", children: [
            field.helpText && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "text-xs text-[rgb(var(--nc-fg-muted))]", children: field.helpText }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CraftForm,
  CraftFormBuilder,
  CraftFormField
});
//# sourceMappingURL=forms.cjs.map