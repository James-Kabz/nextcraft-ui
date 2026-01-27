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

// src/craft/components.ts
var components_exports = {};
__export(components_exports, {
  CraftAlert: () => CraftAlert,
  CraftBadge: () => CraftBadge,
  CraftButton: () => CraftButton,
  CraftCard: () => CraftCard,
  CraftCheckbox: () => CraftCheckbox,
  CraftCommandPalette: () => CraftCommandPalette,
  CraftConfirmDialog: () => CraftConfirmDialog,
  CraftCreateEditDrawer: () => CraftCreateEditDrawer,
  CraftCurrencyInput: () => CraftCurrencyInput,
  CraftDatePicker: () => CraftDatePicker,
  CraftDrawer: () => CraftDrawer,
  CraftDropdownMenu: () => CraftDropdownMenu,
  CraftEmptyState: () => CraftEmptyState,
  CraftErrorState: () => CraftErrorState,
  CraftIcon: () => CraftIcon,
  CraftIconProvider: () => CraftIconProvider,
  CraftInput: () => CraftInput,
  CraftLink: () => CraftLink,
  CraftLoadingState: () => CraftLoadingState,
  CraftModal: () => CraftModal,
  CraftNumberInput: () => CraftNumberInput,
  CraftPopover: () => CraftPopover,
  CraftSelect: () => CraftSelect,
  CraftSkeleton: () => CraftSkeleton,
  CraftStatCard: () => CraftStatCard,
  CraftSubmitButton: () => CraftSubmitButton,
  CraftSwitch: () => CraftSwitch,
  CraftTabs: () => CraftTabs,
  CraftTextarea: () => CraftTextarea,
  CraftToastHost: () => CraftToastHost,
  CraftTooltip: () => CraftTooltip,
  GlassCard: () => GlassCard,
  useCraftToast: () => useCraftToast
});
module.exports = __toCommonJS(components_exports);

// src/utils/cn.ts
function cn(...values) {
  return values.filter(Boolean).join(" ");
}

// src/components/craft-button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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

// src/components/glass-card.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var intensityClasses = {
  subtle: "backdrop-blur-md bg-opacity-50",
  medium: "backdrop-blur-xl bg-opacity-70",
  strong: "backdrop-blur-2xl bg-opacity-90"
};
function GlassCard({
  className,
  tone,
  intensity = "medium",
  bordered = true,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    {
      className: cn(
        "relative overflow-hidden rounded-3xl p-6 text-[rgb(var(--nc-fg))]",
        "shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
        "transition-all duration-300",
        "hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]",
        intensityClasses[intensity],
        "bg-linear-to-br from-[rgb(var(--nc-accent-1)/0.15)] via-[rgb(var(--nc-accent-2)/0.10)] to-[rgb(var(--nc-accent-3)/0.15)]",
        "border-[rgb(var(--nc-accent-1)/0.3)]",
        bordered ? "border-2" : "border-0",
        "before:absolute before:inset-0 before:bg-linear-to-br before:from-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        className
      ),
      "data-nc-theme": tone,
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "relative z-10", children })
    }
  );
}

// src/components/craft-card.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var intensityClasses2 = {
  subtle: "backdrop-blur-md bg-opacity-50",
  medium: "backdrop-blur-xl bg-opacity-70",
  strong: "backdrop-blur-2xl bg-opacity-90"
};
function CraftCard({
  className,
  tone,
  elevated = true,
  intensity = "medium",
  bordered = true,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "div",
    {
      className: cn(
        "relative overflow-hidden rounded-3xl p-6 text-[rgb(var(--nc-fg))]",
        intensityClasses2[intensity],
        "bg-linear-to-br from-[rgb(var(--nc-accent-1)/0.15)] via-[rgb(var(--nc-accent-2)/0.10)] to-[rgb(var(--nc-accent-3)/0.15)]",
        bordered ? "border-2 border-[rgb(var(--nc-accent-1)/0.3)]" : "border-0",
        elevated ? "shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]" : "shadow-none",
        "before:absolute before:inset-0 before:bg-linear-to-br before:from-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        "transition-all duration-300",
        className
      ),
      "data-nc-theme": tone,
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "relative z-10", children })
    }
  );
}

// src/components/craft-input.tsx
var React = __toESM(require("react"), 1);
var import_jsx_runtime4 = require("react/jsx-runtime");
var inputSizeClasses = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-base",
  lg: "h-14 px-6 text-lg"
};
var CraftInput = React.forwardRef(
  ({ className, tone, inputSize = "md", glow = true, icon, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "relative w-full", "data-nc-theme": tone, children: [
      icon && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "absolute left-4 top-1/2 -translate-y-1/2 text-[rgb(var(--nc-fg-soft))]", children: icon }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
var React2 = __toESM(require("react"), 1);
var import_jsx_runtime5 = require("react/jsx-runtime");
var CraftTextarea = React2.forwardRef(
  ({ className, tone, rows = 4, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "relative w-full", "data-nc-theme": tone, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
var React3 = __toESM(require("react"), 1);
var import_jsx_runtime6 = require("react/jsx-runtime");
var CraftSelect = React3.forwardRef(
  ({ className, tone, children, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "relative w-full", "data-nc-theme": tone, children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        "svg",
        {
          className: "pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[rgb(var(--nc-fg-soft))]",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          "aria-hidden": "true",
          children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
var React4 = __toESM(require("react"), 1);
var import_jsx_runtime7 = require("react/jsx-runtime");
var CraftCheckbox = React4.forwardRef(
  ({ className, tone, label, description, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
      "label",
      {
        className: cn(
          "flex items-start gap-3 text-sm text-[rgb(var(--nc-fg))]",
          props.disabled ? "opacity-60" : "cursor-pointer",
          className
        ),
        "data-nc-theme": tone,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "relative mt-0.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              "input",
              {
                ref,
                type: "checkbox",
                className: "peer sr-only",
                ...props
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              "span",
              {
                className: cn(
                  "flex h-5 w-5 items-center justify-center rounded-md border-2",
                  "border-[rgb(var(--nc-border)/0.45)] bg-[rgb(var(--nc-surface)/0.08)]",
                  "transition-all duration-200",
                  "peer-checked:border-[rgb(var(--nc-accent-1))] peer-checked:bg-[rgb(var(--nc-accent-1)/0.25)]",
                  "peer-focus-visible:ring-2 peer-focus-visible:ring-[rgb(var(--nc-accent-1)/0.5)]"
                ),
                children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                  "svg",
                  {
                    className: "h-3 w-3 text-[rgb(var(--nc-fg))] opacity-0 transition-opacity peer-checked:opacity-100",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "space-y-1", children: [
            label && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "block font-medium text-[rgb(var(--nc-fg))]", children: label }),
            description && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "block text-xs text-[rgb(var(--nc-fg-muted))]", children: description })
          ] })
        ]
      }
    );
  }
);
CraftCheckbox.displayName = "CraftCheckbox";

// src/components/craft-switch.tsx
var React5 = __toESM(require("react"), 1);
var import_jsx_runtime8 = require("react/jsx-runtime");
var CraftSwitch = React5.forwardRef(
  ({ className, tone, label, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
      "label",
      {
        className: cn(
          "inline-flex items-center gap-3 text-sm text-[rgb(var(--nc-fg))]",
          props.disabled ? "opacity-60" : "cursor-pointer",
          className
        ),
        "data-nc-theme": tone,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("input", { ref, type: "checkbox", className: "peer sr-only", ...props }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "span",
            {
              className: cn(
                "relative h-6 w-11 rounded-full border-2 border-[rgb(var(--nc-border)/0.35)] bg-[rgb(var(--nc-surface)/0.08)]",
                "transition-all duration-200",
                "peer-focus-visible:ring-2 peer-focus-visible:ring-[rgb(var(--nc-accent-1)/0.5)]",
                "peer-checked:border-[rgb(var(--nc-accent-1)/0.6)] peer-checked:bg-[rgb(var(--nc-accent-1)/0.25)]"
              ),
              children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
          label && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { children: label })
        ]
      }
    );
  }
);
CraftSwitch.displayName = "CraftSwitch";

// src/components/craft-badge.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
var variantClasses2 = {
  solid: "bg-[color:rgb(var(--nc-accent-1))] text-white shadow-[0_10px_20px_rgb(var(--nc-accent-1)/0.35)]",
  soft: "bg-[color:rgb(var(--nc-accent-1)/0.2)] text-[rgb(var(--nc-fg))]",
  outline: "border border-[color:rgb(var(--nc-accent-1)/0.6)] text-[rgb(var(--nc-fg))]"
};
function CraftBadge({
  className,
  variant = "soft",
  tone,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "span",
    {
      className: cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        variantClasses2[variant],
        className
      ),
      "data-nc-theme": tone,
      ...props
    }
  );
}

// src/components/craft-modal.tsx
var React6 = __toESM(require("react"), 1);
var import_react_dom = require("react-dom");
var import_jsx_runtime10 = require("react/jsx-runtime");
var FOCUSABLE_SELECTORS = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "[tabindex]:not([tabindex='-1'])"
].join(",");
function useFocusTrap(active) {
  const ref = React6.useRef(null);
  React6.useEffect(() => {
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
  const [uncontrolledOpen, setUncontrolledOpen] = React6.useState(defaultOpen);
  const isControlled = typeof open === "boolean";
  const isOpen = isControlled ? open : uncontrolledOpen;
  const setOpen = React6.useCallback(
    (next) => {
      if (!isControlled) {
        setUncontrolledOpen(next);
      }
      onOpenChange == null ? void 0 : onOpenChange(next);
    },
    [isControlled, onOpenChange]
  );
  React6.useEffect(() => {
    if (!isOpen) return;
    const handleKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, setOpen]);
  const ref = useFocusTrap(isOpen);
  const content = isOpen ? /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "fixed inset-0 z-50 flex items-center justify-center px-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "div",
      {
        className: "absolute inset-0 backdrop-blur-sm",
        onClick: () => setOpen(false)
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
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
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex items-start justify-between gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "space-y-1", children: [
              title && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h3", { className: "text-2xl font-semibold", children: title }),
              description && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "text-[rgb(var(--nc-fg-muted))]", children: description })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
              "button",
              {
                className: "rounded-full border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] p-2 text-[rgb(var(--nc-fg-soft))] transition hover:text-[rgb(var(--nc-fg))]",
                onClick: () => setOpen(false),
                "aria-label": "Close",
                children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", { viewBox: "0 0 20 20", className: "h-4 w-4", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" }) })
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "mt-5 space-y-4", children }),
          footer && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "mt-6", children: footer })
        ]
      }
    )
  ] }) : null;
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
    trigger && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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

// src/components/craft-drawer.tsx
var React7 = __toESM(require("react"), 1);
var import_react_dom2 = require("react-dom");
var import_jsx_runtime11 = require("react/jsx-runtime");
function CraftDrawer({
  open,
  defaultOpen = false,
  onOpenChange,
  tone,
  side = "left",
  title,
  children,
  trigger,
  footer,
  className
}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React7.useState(defaultOpen);
  const isControlled = typeof open === "boolean";
  const isOpen = isControlled ? open : uncontrolledOpen;
  const setOpen = React7.useCallback(
    (next) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange == null ? void 0 : onOpenChange(next);
    },
    [isControlled, onOpenChange]
  );
  React7.useEffect(() => {
    if (!isOpen) return;
    const handleKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, setOpen]);
  const content = isOpen ? /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "fixed inset-0 z-50 overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      "div",
      {
        className: "absolute inset-0 backdrop-blur-sm",
        onClick: () => setOpen(false)
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
      "div",
      {
        className: cn(
          "absolute top-0 h-full w-full max-w-md border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] text-[rgb(var(--nc-fg))] shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl",
          side === "right" ? "right-0" : "left-0",
          className
        ),
        "data-nc-theme": tone,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex items-center justify-between border-b border-[rgb(var(--nc-border)/0.3)] p-6", children: [
            title && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h3", { className: "text-xl font-semibold", children: title }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              "button",
              {
                className: "rounded-full border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] p-2 text-[rgb(var(--nc-fg-soft))] transition hover:text-[rgb(var(--nc-fg))]",
                onClick: () => setOpen(false),
                "aria-label": "Close",
                children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("svg", { viewBox: "0 0 20 20", className: "h-4 w-4", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" }) })
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "p-6 space-y-4 overflow-y-auto h-[calc(100%-5.5rem)]", children }),
          footer && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "border-t border-[rgb(var(--nc-border)/0.3)] p-6", children: footer })
        ]
      }
    )
  ] }) : null;
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
    trigger && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
    typeof document !== "undefined" && content ? (0, import_react_dom2.createPortal)(content, document.body) : content
  ] });
}

// src/components/craft-tabs.tsx
var React8 = __toESM(require("react"), 1);
var import_jsx_runtime12 = require("react/jsx-runtime");
function CraftTabs({
  value,
  defaultValue,
  onValueChange,
  tone,
  tabs,
  panels,
  className
}) {
  var _a, _b;
  const fallback = (_b = (_a = tabs[0]) == null ? void 0 : _a.value) != null ? _b : "";
  const [uncontrolledValue, setUncontrolledValue] = React8.useState(
    defaultValue != null ? defaultValue : fallback
  );
  const isControlled = value !== void 0;
  const activeValue = isControlled ? value : uncontrolledValue;
  const setValue = React8.useCallback(
    (next) => {
      if (!isControlled) setUncontrolledValue(next);
      onValueChange == null ? void 0 : onValueChange(next);
    },
    [isControlled, onValueChange]
  );
  const onKeyDown = (event) => {
    if (!tabs.length) return;
    const currentIndex = tabs.findIndex((tab) => tab.value === activeValue);
    if (event.key === "ArrowRight") {
      event.preventDefault();
      const next = tabs[(currentIndex + 1) % tabs.length];
      setValue(next.value);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      const next = tabs[(currentIndex - 1 + tabs.length) % tabs.length];
      setValue(next.value);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: cn("space-y-4", className), "data-nc-theme": tone, children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      "div",
      {
        className: "inline-flex flex-wrap items-center gap-2 rounded-full border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.08)] p-2",
        role: "tablist",
        onKeyDown,
        children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          "button",
          {
            role: "tab",
            "aria-selected": activeValue === tab.value,
            onClick: () => setValue(tab.value),
            className: cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition-all",
              activeValue === tab.value ? "bg-[rgb(var(--nc-accent-1)/0.65)] text-white shadow-[0_7px_5px_rgb(var(--nc-accent-1)/0.35)]" : "text-[rgb(var(--nc-fg-muted))] hover:text-[rgb(var(--nc-fg))]"
            ),
            children: tab.label
          },
          tab.value
        ))
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "rounded-2xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.08)] p-4 text-[rgb(var(--nc-fg))]", children: panels[activeValue] })
  ] });
}

// src/components/craft-tooltip.tsx
var React9 = __toESM(require("react"), 1);
var import_jsx_runtime13 = require("react/jsx-runtime");
function CraftTooltip({ content, tone, children, side = "top" }) {
  const [open, setOpen] = React9.useState(false);
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
    "span",
    {
      className: "relative inline-flex",
      onMouseEnter: () => setOpen(true),
      onMouseLeave: () => setOpen(false),
      onFocus: () => setOpen(true),
      onBlur: () => setOpen(false),
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          "span",
          {
            className: cn(
              "pointer-events-none absolute z-20 whitespace-nowrap rounded-lg border border-white/10 bg-black/80 px-3 py-2 text-xs text-white shadow-lg transition-all",
              "backdrop-blur-xl",
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1",
              side === "top" && "bottom-full left-1/2 -translate-x-1/2 -translate-y-2",
              side === "bottom" && "top-full left-1/2 -translate-x-1/2 translate-y-2",
              side === "left" && "right-full top-1/2 -translate-y-1/2 -translate-x-2",
              side === "right" && "left-full top-1/2 -translate-y-1/2 translate-x-2"
            ),
            "data-nc-theme": tone,
            role: "tooltip",
            children: content
          }
        )
      ]
    }
  );
}

// src/components/craft-toast.tsx
var React10 = __toESM(require("react"), 1);
var import_jsx_runtime14 = require("react/jsx-runtime");
var variantClasses3 = {
  info: "border-[color:rgb(var(--nc-accent-1)/0.4)]",
  success: "border-emerald-400/40",
  warning: "border-amber-400/40",
  error: "border-rose-400/40"
};
function useCraftToast() {
  const [toasts, setToasts] = React10.useState([]);
  const push = React10.useCallback((toast) => {
    const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    setToasts((prev) => [...prev, { ...toast, id }]);
    return id;
  }, []);
  const remove = React10.useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);
  return { toasts, push, remove };
}
function CraftToastHost({ toasts, onDismiss, tone }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    "div",
    {
      className: "fixed right-6 top-6 z-50 flex w-full max-w-sm flex-col gap-3",
      "data-nc-theme": tone,
      children: toasts.map((toast) => {
        var _a;
        return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          "div",
          {
            className: cn(
              "rounded-2xl border bg-[rgb(var(--nc-surface)/0.12)] p-4 text-[rgb(var(--nc-fg))] shadow-[0_15px_35px_rgba(0,0,0,0.35)] backdrop-blur-xl",
              variantClasses3[(_a = toast.variant) != null ? _a : "info"]
            ),
            children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex items-start justify-between gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "text-sm font-semibold", children: toast.title }),
                toast.description && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "text-xs text-[rgb(var(--nc-fg-muted))]", children: toast.description })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                "button",
                {
                  className: "text-[rgb(var(--nc-fg-soft))] hover:text-[rgb(var(--nc-fg))]",
                  onClick: () => onDismiss(toast.id),
                  children: "\u2715"
                }
              )
            ] })
          },
          toast.id
        );
      })
    }
  );
}

// src/components/craft-skeleton.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
function CraftSkeleton({ className, tone, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    "div",
    {
      className: cn(
        "relative overflow-hidden rounded-2xl bg-[rgb(var(--nc-surface)/0.12)]",
        "after:absolute after:inset-0 after:-translate-x-full after:bg-linear-to-r after:from-transparent after:via-white/20 after:to-transparent",
        "after:animate-[shimmer_1.6s_infinite]",
        className
      ),
      "data-nc-theme": tone,
      ...props
    }
  );
}

// src/components/craft-empty-state.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
function CraftEmptyState({
  className,
  tone,
  title,
  description,
  icon,
  action,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
    "div",
    {
      className: cn(
        "rounded-3xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.08)] p-8 text-center text-[rgb(var(--nc-fg))] backdrop-blur-xl",
        "shadow-[0_18px_40px_rgba(0,0,0,0.25)]",
        className
      ),
      "data-nc-theme": tone,
      ...props,
      children: [
        icon && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgb(var(--nc-accent-1)/0.2)] text-[rgb(var(--nc-accent-1))]", children: icon }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h3", { className: "text-xl font-semibold", children: title }),
        description && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "mt-2 text-sm text-[rgb(var(--nc-fg-muted))]", children: description }),
        action && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "mt-6 flex justify-center", children: action })
      ]
    }
  );
}

// src/components/craft-date-picker.tsx
var React11 = __toESM(require("react"), 1);
var import_jsx_runtime17 = require("react/jsx-runtime");
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
  const [open, setOpen] = React11.useState(false);
  const [uncontrolledValue, setUncontrolledValue] = React11.useState(defaultValue != null ? defaultValue : "");
  const isControlled = value !== void 0;
  const selectedValue = isControlled ? value != null ? value : "" : uncontrolledValue;
  const selectedDate = parseDate(selectedValue);
  const initialMonth = selectedDate != null ? selectedDate : /* @__PURE__ */ new Date();
  const [viewDate, setViewDate] = React11.useState(initialMonth);
  React11.useEffect(() => {
    if (selectedDate) setViewDate(selectedDate);
  }, [selectedDate]);
  const wrapperRef = React11.useRef(null);
  React11.useEffect(() => {
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
  const setValue = React11.useCallback(
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
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "relative w-full", "data-nc-theme": tone, ref: wrapperRef, children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
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
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: selectedValue ? "text-[rgb(var(--nc-fg))]" : "text-[rgb(var(--nc-fg-soft))]", children: selectedValue || placeholder }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("svg", { className: "h-4 w-4 text-[rgb(var(--nc-fg-soft))]", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("path", { d: "M6 2a1 1 0 011 1v1h6V3a1 1 0 112 0v1h1a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h1V3a1 1 0 011-1zm10 6H4v8h12V8z" }) })
        ]
      }
    ),
    open && /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
      "div",
      {
        className: cn(
          "absolute left-0 top-full z-20 mt-3 w-full rounded-3xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/1.52)] p-4 text-[rgb(var(--nc-fg))] shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-10xl"
        ),
        onKeyDown: handleKeyDown,
        tabIndex: -1,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "text-sm font-semibold", children: viewDate.toLocaleString(void 0, { month: "long", year: "numeric" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "mt-4 grid grid-cols-7 gap-2 text-xs text-[rgb(var(--nc-fg-muted))]", children: WEEK_DAYS.map((day) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "text-center", children: day }, day)) }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "mt-2 grid grid-cols-7 gap-2", children: cells.map((date, index) => {
            if (!date) return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", {}, `empty-${index}`);
            const disabled = isOutsideRange(date, min, max);
            const selected = selectedDate && isSameDay(date, selectedDate);
            return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
var React12 = __toESM(require("react"), 1);
var import_jsx_runtime18 = require("react/jsx-runtime");
var CraftNumberInput = React12.forwardRef(({ className, tone, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "relative w-full", "data-nc-theme": tone, children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
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
var React13 = __toESM(require("react"), 1);
var import_jsx_runtime19 = require("react/jsx-runtime");
var CraftCurrencyInput = React13.forwardRef(({ className, tone, currencySymbol = "$", ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "relative w-full", "data-nc-theme": tone, children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[rgb(var(--nc-fg-soft))]", children: currencySymbol }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
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

// src/components/craft-submit-button.tsx
var import_react_hook_form = require("react-hook-form");
var import_jsx_runtime20 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
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
        isSubmitting && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "inline-flex h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: isSubmitting ? loadingLabel : children })
      ]
    }
  );
}

// src/components/craft-confirm-dialog.tsx
var React14 = __toESM(require("react"), 1);
var import_jsx_runtime21 = require("react/jsx-runtime");
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
  const [uncontrolledOpen, setUncontrolledOpen] = React14.useState(defaultOpen);
  const isControlled = typeof open === "boolean";
  const isOpen = isControlled ? open : uncontrolledOpen;
  const setOpen = React14.useCallback(
    (next) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange == null ? void 0 : onOpenChange(next);
    },
    [isControlled, onOpenChange]
  );
  const [isLoading, setIsLoading] = React14.useState(false);
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
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    CraftModal,
    {
      open: isOpen,
      onOpenChange: setOpen,
      trigger,
      title,
      description,
      tone,
      className: cn("max-w-md", className),
      footer: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "flex flex-wrap items-center justify-end gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
          CraftButton,
          {
            type: "button",
            variant: "ghost",
            onClick: () => setOpen(false),
            children: cancelLabel
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: description })
    }
  );
}

// src/components/craft-create-edit-drawer.tsx
var React15 = __toESM(require("react"), 1);
var import_react_hook_form2 = require("react-hook-form");
var import_jsx_runtime22 = require("react/jsx-runtime");
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
  const [uncontrolledOpen, setUncontrolledOpen] = React15.useState(defaultOpen);
  const isControlled = typeof open === "boolean";
  const isOpen = isControlled ? open : uncontrolledOpen;
  const setOpen = React15.useCallback(
    (next) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange == null ? void 0 : onOpenChange(next);
    },
    [isControlled, onOpenChange]
  );
  const formId = React15.useId();
  const handleSubmit = form.handleSubmit(async (values) => {
    await onSubmit(values);
    if (closeOnSubmit) setOpen(false);
  });
  const resolvedTitle = title != null ? title : mode === "create" ? "Create item" : "Edit item";
  const resolvedSubmitLabel = submitLabel != null ? submitLabel : mode === "create" ? "Create" : "Save changes";
  const footerContent = footer != null ? footer : /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex flex-wrap items-center justify-end gap-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(CraftButton, { type: "button", variant: "ghost", onClick: () => setOpen(false), children: cancelLabel }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      CraftSubmitButton,
      {
        form: formId,
        disableWhenInvalid: disableSubmitWhenInvalid,
        children: resolvedSubmitLabel
      }
    )
  ] });
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react_hook_form2.FormProvider, { ...form, children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("form", { id: formId, onSubmit: handleSubmit, className: "space-y-5", children: [
        description && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: description }),
        children
      ] })
    }
  ) });
}

// src/components/craft-alert.tsx
var import_jsx_runtime23 = require("react/jsx-runtime");
var variantClasses4 = {
  info: "border-[rgb(var(--nc-accent-1)/0.45)] bg-[rgb(var(--nc-accent-1)/0.12)]",
  success: "border-[rgb(var(--nc-accent-2)/0.45)] bg-[rgb(var(--nc-accent-2)/0.12)]",
  warning: "border-[rgb(var(--nc-accent-3)/0.45)] bg-[rgb(var(--nc-accent-3)/0.12)]",
  error: "border-[rgb(var(--nc-accent-3)/0.65)] bg-[rgb(var(--nc-accent-3)/0.18)]"
};
function CraftAlert({
  title,
  description,
  variant = "info",
  icon,
  actions,
  tone,
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
    "div",
    {
      className: cn(
        "rounded-2xl border p-4 text-[rgb(var(--nc-fg))] backdrop-blur-xl",
        variantClasses4[variant],
        className
      ),
      "data-nc-theme": tone,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "flex items-start gap-3", children: [
          icon && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "mt-1 text-[rgb(var(--nc-fg))]", children: icon }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "space-y-1", children: [
            title && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "text-sm font-semibold", children: title }),
            description && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: description })
          ] })
        ] }),
        actions && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "mt-3 flex flex-wrap gap-2", children: actions })
      ]
    }
  );
}

// src/components/craft-error-state.tsx
var import_jsx_runtime24 = require("react/jsx-runtime");
function CraftErrorState({
  title = "Something went wrong",
  description = "Try again or check your connection.",
  actionLabel = "Retry",
  onAction,
  action,
  tone,
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
    "div",
    {
      className: cn(
        "rounded-3xl border border-[rgb(var(--nc-border)/0.35)] bg-[rgb(var(--nc-surface)/0.12)] p-6 text-[rgb(var(--nc-fg))] shadow-[0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl",
        className
      ),
      "data-nc-theme": tone,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("h3", { className: "text-lg font-semibold", children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("p", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: description })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "mt-4", children: action != null ? action : onAction && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(CraftButton, { size: "sm", onClick: onAction, children: actionLabel }) })
      ]
    }
  );
}

// src/components/craft-loading-state.tsx
var import_jsx_runtime25 = require("react/jsx-runtime");
var sizeClasses2 = {
  sm: "h-4 w-4 border-2",
  md: "h-6 w-6 border-2",
  lg: "h-8 w-8 border-[3px]"
};
function CraftLoadingState({
  label = "Loading...",
  size = "md",
  tone,
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
    "div",
    {
      className: cn("flex items-center gap-3 text-[rgb(var(--nc-fg))]", className),
      "data-nc-theme": tone,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
          "span",
          {
            className: cn(
              "inline-block animate-spin rounded-full border-[rgb(var(--nc-accent-1)/0.25)] border-t-[rgb(var(--nc-accent-1))]",
              sizeClasses2[size]
            ),
            "aria-hidden": "true"
          }
        ),
        label && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: label })
      ]
    }
  );
}

// src/components/craft-popover.tsx
var React16 = __toESM(require("react"), 1);
var import_jsx_runtime26 = require("react/jsx-runtime");
var alignClasses = {
  start: "left-0",
  center: "left-1/2 -translate-x-1/2",
  end: "right-0"
};
function CraftPopover({
  open,
  defaultOpen = false,
  onOpenChange,
  trigger,
  content,
  align = "start",
  sideOffset = 10,
  tone,
  className,
  contentClassName
}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React16.useState(defaultOpen);
  const isControlled = typeof open === "boolean";
  const isOpen = isControlled ? open : uncontrolledOpen;
  const rootRef = React16.useRef(null);
  const setOpen = React16.useCallback(
    (next) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange == null ? void 0 : onOpenChange(next);
    },
    [isControlled, onOpenChange]
  );
  React16.useEffect(() => {
    if (!isOpen) return;
    const handleClick = (event) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(event.target)) setOpen(false);
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
  }, [isOpen, setOpen]);
  const triggerNode = React16.isValidElement(trigger) ? React16.cloneElement(trigger, {
    onClick: (event) => {
      const handler = trigger.props.onClick;
      handler == null ? void 0 : handler(event);
      if (!event.defaultPrevented) setOpen(!isOpen);
    },
    "aria-expanded": isOpen,
    "aria-haspopup": "dialog"
  }) : /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
    "button",
    {
      type: "button",
      onClick: () => setOpen(!isOpen),
      className: "inline-flex",
      "aria-expanded": isOpen,
      "aria-haspopup": "dialog",
      children: trigger
    }
  );
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: cn("relative inline-flex", className), ref: rootRef, children: [
    triggerNode,
    isOpen && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
      "div",
      {
        className: cn(
          "absolute z-40 w-max min-w-48 rounded-2xl border border-[rgb(var(--nc-border)/0.35)] bg-[rgb(var(--nc-surface)/0.08)] p-3 text-[rgb(var(--nc-fg))] shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl",
          alignClasses[align],
          contentClassName
        ),
        style: { marginTop: sideOffset },
        role: "dialog",
        "data-nc-theme": tone,
        children: content
      }
    )
  ] });
}

// src/components/craft-dropdown-menu.tsx
var React17 = __toESM(require("react"), 1);
var import_jsx_runtime27 = require("react/jsx-runtime");
function CraftDropdownMenu({
  trigger,
  items = [],
  content,
  open,
  defaultOpen = false,
  onOpenChange,
  align = "end",
  tone,
  className,
  menuClassName
}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React17.useState(defaultOpen);
  const isControlled = typeof open === "boolean";
  const isOpen = isControlled ? open : uncontrolledOpen;
  const setOpen = React17.useCallback(
    (next) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange == null ? void 0 : onOpenChange(next);
    },
    [isControlled, onOpenChange]
  );
  const menuContent = content != null ? content : items.length ? /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: cn("space-y-1", menuClassName), role: "menu", children: items.map((item, index) => {
    var _a;
    const key = (_a = item.id) != null ? _a : `${index}-${String(item.label)}`;
    const itemClasses = cn(
      "flex w-full items-start gap-3 rounded-xl px-3 py-2 text-left text-sm transition",
      item.disabled ? "cursor-not-allowed text-[rgb(var(--nc-fg-soft))] opacity-60" : "text-[rgb(var(--nc-fg))] hover:bg-[rgb(var(--nc-surface)/0.12)]"
    );
    const contentNode = /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(import_jsx_runtime27.Fragment, { children: [
      item.icon && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "mt-0.5", children: item.icon }),
      /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)("span", { className: "flex-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "block font-medium", children: item.label }),
        item.description && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("span", { className: "block text-xs text-[rgb(var(--nc-fg-muted))]", children: item.description })
      ] })
    ] });
    if (item.href) {
      return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
        "a",
        {
          href: item.href,
          className: itemClasses,
          role: "menuitem",
          onClick: () => {
            var _a2;
            if (item.disabled) return;
            (_a2 = item.onSelect) == null ? void 0 : _a2.call(item);
            setOpen(false);
          },
          children: contentNode
        },
        key
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
      "button",
      {
        type: "button",
        className: itemClasses,
        role: "menuitem",
        onClick: () => {
          var _a2;
          if (item.disabled) return;
          (_a2 = item.onSelect) == null ? void 0 : _a2.call(item);
          setOpen(false);
        },
        children: contentNode
      },
      key
    );
  }) }) : null;
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
    CraftPopover,
    {
      trigger,
      content: menuContent,
      open: isOpen,
      onOpenChange: setOpen,
      align,
      tone,
      className
    }
  );
}

// src/components/craft-command-palette.tsx
var React18 = __toESM(require("react"), 1);
var import_jsx_runtime28 = require("react/jsx-runtime");
function CraftCommandPalette({
  items,
  open,
  defaultOpen = false,
  onOpenChange,
  trigger,
  title = "Command Palette",
  placeholder = "Search commands...",
  emptyText = "No results found.",
  tone,
  className
}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React18.useState(defaultOpen);
  const isControlled = typeof open === "boolean";
  const isOpen = isControlled ? open : uncontrolledOpen;
  const [query, setQuery] = React18.useState("");
  const setOpen = React18.useCallback(
    (next) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange == null ? void 0 : onOpenChange(next);
    },
    [isControlled, onOpenChange]
  );
  const filtered = React18.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((item) => {
      var _a, _b;
      const haystack = [
        item.label,
        (_a = item.description) != null ? _a : "",
        ...(_b = item.keywords) != null ? _b : []
      ].join(" ").toLowerCase();
      return haystack.includes(q);
    });
  }, [items, query]);
  React18.useEffect(() => {
    if (!isOpen) setQuery("");
  }, [isOpen]);
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
    CraftModal,
    {
      open: isOpen,
      onOpenChange: setOpen,
      trigger,
      title,
      tone,
      className: cn("max-w-xl", className),
      children: /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
          CraftInput,
          {
            type: "search",
            placeholder,
            value: query,
            onChange: (event) => setQuery(event.target.value)
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "space-y-2", children: [
          filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: "rounded-2xl border border-[rgb(var(--nc-border)/0.35)] bg-[rgb(var(--nc-surface)/0.12)] p-4 text-sm text-[rgb(var(--nc-fg-muted))]", children: emptyText }),
          filtered.map((item) => /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
            "button",
            {
              type: "button",
              disabled: item.disabled,
              onClick: () => {
                var _a;
                if (item.disabled) return;
                (_a = item.onSelect) == null ? void 0 : _a.call(item);
                setOpen(false);
              },
              className: cn(
                "flex w-full items-start gap-3 rounded-2xl border border-[rgb(var(--nc-border)/0.35)] bg-[rgb(var(--nc-surface)/0.08)] px-4 py-3 text-left transition",
                item.disabled ? "cursor-not-allowed opacity-60" : "hover:bg-[rgb(var(--nc-surface)/0.16)]"
              ),
              children: [
                item.icon && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "mt-1", children: item.icon }),
                /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("span", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "block text-sm font-semibold", children: item.label }),
                  item.description && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "block text-xs text-[rgb(var(--nc-fg-muted))]", children: item.description })
                ] })
              ]
            },
            item.id
          ))
        ] })
      ] })
    }
  );
}

// src/components/craft-link.tsx
var import_link = __toESM(require("next/link"), 1);
var import_jsx_runtime29 = require("react/jsx-runtime");
var variantClasses5 = {
  default: "text-[rgb(var(--nc-accent-1))] hover:text-[rgb(var(--nc-accent-1))]",
  muted: "text-[rgb(var(--nc-fg-muted))] hover:text-[rgb(var(--nc-fg))]",
  button: "inline-flex items-center rounded-xl border border-[rgb(var(--nc-border)/0.35)] bg-[rgb(var(--nc-surface)/0.12)] px-4 py-2 text-sm font-semibold text-[rgb(var(--nc-fg))] transition hover:bg-[rgb(var(--nc-surface)/0.2)]",
  ghost: "inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold text-[rgb(var(--nc-fg))] transition hover:bg-[rgb(var(--nc-surface)/0.18)]"
};
function CraftLink({
  variant = "default",
  underline = false,
  tone,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
    import_link.default,
    {
      className: cn(
        "transition-colors",
        variantClasses5[variant],
        underline && "underline underline-offset-4",
        className
      ),
      "data-nc-theme": tone,
      ...props,
      children
    }
  );
}

// src/components/craft-stat-card.tsx
var import_jsx_runtime30 = require("react/jsx-runtime");
var trendClasses = {
  up: "text-emerald-300",
  down: "text-rose-300",
  neutral: "text-[rgb(var(--nc-fg-muted))]"
};
function CraftStatCard({
  label,
  value,
  delta,
  trend = "neutral",
  icon,
  footer,
  tone,
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
    CraftCard,
    {
      className: cn("space-y-3", className),
      tone,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("p", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: label }),
          icon && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("div", { className: "text-[rgb(var(--nc-fg-soft))]", children: icon })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("p", { className: "text-3xl font-semibold", children: value }),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "flex items-center justify-between text-xs", children: [
          delta && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { className: trendClasses[trend], children: delta }),
          footer && /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { className: "text-[rgb(var(--nc-fg-muted))]", children: footer })
        ] })
      ]
    }
  );
}

// src/components/craft-icon.tsx
var React19 = __toESM(require("react"), 1);
var import_dynamic = require("lucide-react/dynamic");
var import_jsx_runtime31 = require("react/jsx-runtime");
var CraftIconContext = React19.createContext(null);
function CraftIconProvider({ icons, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(CraftIconContext.Provider, { value: icons, children });
}
function CraftIcon({
  name,
  className,
  "aria-label": ariaLabel,
  icons,
  useLucide = true
}) {
  var _a;
  const registry = icons != null ? icons : React19.useContext(CraftIconContext);
  const icon = registry == null ? void 0 : registry[name];
  if (!icon) {
    if (!useLucide) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
      import_dynamic.DynamicIcon,
      {
        name,
        className,
        "aria-hidden": ariaLabel ? void 0 : true,
        "aria-label": ariaLabel
      }
    );
  }
  if (React19.isValidElement(icon)) {
    return React19.cloneElement(icon, {
      className: cn((_a = icon.props) == null ? void 0 : _a.className, className),
      "aria-hidden": ariaLabel ? void 0 : true,
      "aria-label": ariaLabel
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { className, "aria-label": ariaLabel, children: icon });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CraftAlert,
  CraftBadge,
  CraftButton,
  CraftCard,
  CraftCheckbox,
  CraftCommandPalette,
  CraftConfirmDialog,
  CraftCreateEditDrawer,
  CraftCurrencyInput,
  CraftDatePicker,
  CraftDrawer,
  CraftDropdownMenu,
  CraftEmptyState,
  CraftErrorState,
  CraftIcon,
  CraftIconProvider,
  CraftInput,
  CraftLink,
  CraftLoadingState,
  CraftModal,
  CraftNumberInput,
  CraftPopover,
  CraftSelect,
  CraftSkeleton,
  CraftStatCard,
  CraftSubmitButton,
  CraftSwitch,
  CraftTabs,
  CraftTextarea,
  CraftToastHost,
  CraftTooltip,
  GlassCard,
  useCraftToast
});
//# sourceMappingURL=components.cjs.map