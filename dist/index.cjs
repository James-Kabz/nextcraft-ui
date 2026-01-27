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

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AppShell: () => AppShell,
  AppTemplate: () => AppTemplate,
  AuthLayout: () => AuthLayout,
  Breadcrumbs: () => Breadcrumbs,
  Container: () => Container,
  CraftAlert: () => CraftAlert,
  CraftBadge: () => CraftBadge,
  CraftButton: () => CraftButton,
  CraftCard: () => CraftCard,
  CraftCheckbox: () => CraftCheckbox,
  CraftCommandPalette: () => CraftCommandPalette,
  CraftConfirmDialog: () => CraftConfirmDialog,
  CraftCreateEditDrawer: () => CraftCreateEditDrawer,
  CraftCurrencyInput: () => CraftCurrencyInput,
  CraftDataTable: () => CraftDataTable,
  CraftDatePicker: () => CraftDatePicker,
  CraftDrawer: () => CraftDrawer,
  CraftDropdownMenu: () => CraftDropdownMenu,
  CraftEmptyState: () => CraftEmptyState,
  CraftErrorState: () => CraftErrorState,
  CraftFilterBar: () => CraftFilterBar,
  CraftForm: () => CraftForm,
  CraftFormBuilder: () => CraftFormBuilder,
  CraftFormField: () => CraftFormField,
  CraftIcon: () => CraftIcon,
  CraftIconProvider: () => CraftIconProvider,
  CraftInput: () => CraftInput,
  CraftLink: () => CraftLink,
  CraftLoadingState: () => CraftLoadingState,
  CraftModal: () => CraftModal,
  CraftNumberInput: () => CraftNumberInput,
  CraftPagination: () => CraftPagination,
  CraftPopover: () => CraftPopover,
  CraftSelect: () => CraftSelect,
  CraftSkeleton: () => CraftSkeleton,
  CraftStatCard: () => CraftStatCard,
  CraftSubmitButton: () => CraftSubmitButton,
  CraftSwitch: () => CraftSwitch,
  CraftTableToolbar: () => CraftTableToolbar,
  CraftTabs: () => CraftTabs,
  CraftTextarea: () => CraftTextarea,
  CraftToastHost: () => CraftToastHost,
  CraftTooltip: () => CraftTooltip,
  GlassCard: () => GlassCard,
  Grid: () => Grid,
  PageHeader: () => PageHeader,
  Sidebar: () => Sidebar,
  ThemeProvider: () => ThemeProvider,
  ThemeSwitcher: () => ThemeSwitcher,
  TopNav: () => TopNav,
  layoutConfigSchema: () => layoutConfigSchema,
  useCraftToast: () => useCraftToast,
  useTheme: () => useTheme
});
module.exports = __toCommonJS(index_exports);

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

// src/components/craft-input.tsx
var React = __toESM(require("react"), 1);
var import_jsx_runtime3 = require("react/jsx-runtime");
var inputSizeClasses = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-base",
  lg: "h-14 px-6 text-lg"
};
var CraftInput = React.forwardRef(
  ({ className, tone, inputSize = "md", glow = true, icon, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "relative w-full", "data-nc-theme": tone, children: [
      icon && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "absolute left-4 top-1/2 -translate-y-1/2 text-[rgb(var(--nc-fg-soft))]", children: icon }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
var import_jsx_runtime4 = require("react/jsx-runtime");
var CraftTextarea = React2.forwardRef(
  ({ className, tone, rows = 4, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "relative w-full", "data-nc-theme": tone, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
var import_jsx_runtime5 = require("react/jsx-runtime");
var CraftSelect = React3.forwardRef(
  ({ className, tone, children, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "relative w-full", "data-nc-theme": tone, children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "svg",
        {
          className: "pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[rgb(var(--nc-fg-soft))]",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          "aria-hidden": "true",
          children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
var import_jsx_runtime6 = require("react/jsx-runtime");
var CraftCheckbox = React4.forwardRef(
  ({ className, tone, label, description, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
      "label",
      {
        className: cn(
          "flex items-start gap-3 text-sm text-[rgb(var(--nc-fg))]",
          props.disabled ? "opacity-60" : "cursor-pointer",
          className
        ),
        "data-nc-theme": tone,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: "relative mt-0.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              "input",
              {
                ref,
                type: "checkbox",
                className: "peer sr-only",
                ...props
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              "span",
              {
                className: cn(
                  "flex h-5 w-5 items-center justify-center rounded-md border-2",
                  "border-[rgb(var(--nc-border)/0.45)] bg-[rgb(var(--nc-surface)/0.08)]",
                  "transition-all duration-200",
                  "peer-checked:border-[rgb(var(--nc-accent-1))] peer-checked:bg-[rgb(var(--nc-accent-1)/0.25)]",
                  "peer-focus-visible:ring-2 peer-focus-visible:ring-[rgb(var(--nc-accent-1)/0.5)]"
                ),
                children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                  "svg",
                  {
                    className: "h-3 w-3 text-[rgb(var(--nc-fg))] opacity-0 transition-opacity peer-checked:opacity-100",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: "space-y-1", children: [
            label && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "block font-medium text-[rgb(var(--nc-fg))]", children: label }),
            description && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "block text-xs text-[rgb(var(--nc-fg-muted))]", children: description })
          ] })
        ]
      }
    );
  }
);
CraftCheckbox.displayName = "CraftCheckbox";

// src/components/craft-switch.tsx
var React5 = __toESM(require("react"), 1);
var import_jsx_runtime7 = require("react/jsx-runtime");
var CraftSwitch = React5.forwardRef(
  ({ className, tone, label, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
      "label",
      {
        className: cn(
          "inline-flex items-center gap-3 text-sm text-[rgb(var(--nc-fg))]",
          props.disabled ? "opacity-60" : "cursor-pointer",
          className
        ),
        "data-nc-theme": tone,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("input", { ref, type: "checkbox", className: "peer sr-only", ...props }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            "span",
            {
              className: cn(
                "relative h-6 w-11 rounded-full border-2 border-[rgb(var(--nc-border)/0.35)] bg-[rgb(var(--nc-surface)/0.08)]",
                "transition-all duration-200",
                "peer-focus-visible:ring-2 peer-focus-visible:ring-[rgb(var(--nc-accent-1)/0.5)]",
                "peer-checked:border-[rgb(var(--nc-accent-1)/0.6)] peer-checked:bg-[rgb(var(--nc-accent-1)/0.25)]"
              ),
              children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
          label && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: label })
        ]
      }
    );
  }
);
CraftSwitch.displayName = "CraftSwitch";

// src/components/craft-badge.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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

// src/components/craft-alert.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
var variantClasses3 = {
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
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
    "div",
    {
      className: cn(
        "rounded-2xl border p-4 text-[rgb(var(--nc-fg))] backdrop-blur-xl",
        variantClasses3[variant],
        className
      ),
      "data-nc-theme": tone,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex items-start gap-3", children: [
          icon && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "mt-1 text-[rgb(var(--nc-fg))]", children: icon }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "space-y-1", children: [
            title && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "text-sm font-semibold", children: title }),
            description && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: description })
          ] })
        ] }),
        actions && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "mt-3 flex flex-wrap gap-2", children: actions })
      ]
    }
  );
}

// src/components/craft-error-state.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
    "div",
    {
      className: cn(
        "rounded-3xl border border-[rgb(var(--nc-border)/0.35)] bg-[rgb(var(--nc-surface)/0.12)] p-6 text-[rgb(var(--nc-fg))] shadow-[0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl",
        className
      ),
      "data-nc-theme": tone,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h3", { className: "text-lg font-semibold", children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: description })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "mt-4", children: action != null ? action : onAction && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(CraftButton, { size: "sm", onClick: onAction, children: actionLabel }) })
      ]
    }
  );
}

// src/components/craft-loading-state.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
    "div",
    {
      className: cn("flex items-center gap-3 text-[rgb(var(--nc-fg))]", className),
      "data-nc-theme": tone,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          "span",
          {
            className: cn(
              "inline-block animate-spin rounded-full border-[rgb(var(--nc-accent-1)/0.25)] border-t-[rgb(var(--nc-accent-1))]",
              sizeClasses2[size]
            ),
            "aria-hidden": "true"
          }
        ),
        label && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: label })
      ]
    }
  );
}

// src/components/craft-card.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "relative z-10", children })
    }
  );
}

// src/components/craft-modal.tsx
var React6 = __toESM(require("react"), 1);
var import_react_dom = require("react-dom");
var import_jsx_runtime13 = require("react/jsx-runtime");
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
  const content = isOpen ? /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "fixed inset-0 z-50 flex items-center justify-center px-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      "div",
      {
        className: "absolute inset-0 backdrop-blur-sm",
        onClick: () => setOpen(false)
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
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
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex items-start justify-between gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "space-y-1", children: [
              title && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h3", { className: "text-2xl font-semibold", children: title }),
              description && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-[rgb(var(--nc-fg-muted))]", children: description })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              "button",
              {
                className: "rounded-full border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] p-2 text-[rgb(var(--nc-fg-soft))] transition hover:text-[rgb(var(--nc-fg))]",
                onClick: () => setOpen(false),
                "aria-label": "Close",
                children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("svg", { viewBox: "0 0 20 20", className: "h-4 w-4", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" }) })
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "mt-5 space-y-4", children }),
          footer && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "mt-6", children: footer })
        ]
      }
    )
  ] }) : null;
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
    trigger && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
var import_jsx_runtime14 = require("react/jsx-runtime");
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
  const content = isOpen ? /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "fixed inset-0 z-50 overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      "div",
      {
        className: "absolute inset-0 backdrop-blur-sm",
        onClick: () => setOpen(false)
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
      "div",
      {
        className: cn(
          "absolute top-0 h-full w-full max-w-md border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] text-[rgb(var(--nc-fg))] shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl",
          side === "right" ? "right-0" : "left-0",
          className
        ),
        "data-nc-theme": tone,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex items-center justify-between border-b border-[rgb(var(--nc-border)/0.3)] p-6", children: [
            title && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h3", { className: "text-xl font-semibold", children: title }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
              "button",
              {
                className: "rounded-full border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] p-2 text-[rgb(var(--nc-fg-soft))] transition hover:text-[rgb(var(--nc-fg))]",
                onClick: () => setOpen(false),
                "aria-label": "Close",
                children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("svg", { viewBox: "0 0 20 20", className: "h-4 w-4", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" }) })
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "p-6 space-y-4 overflow-y-auto h-[calc(100%-5.5rem)]", children }),
          footer && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "border-t border-[rgb(var(--nc-border)/0.3)] p-6", children: footer })
        ]
      }
    )
  ] }) : null;
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
    trigger && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
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
var import_jsx_runtime15 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: cn("space-y-4", className), "data-nc-theme": tone, children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      "div",
      {
        className: "inline-flex flex-wrap items-center gap-2 rounded-full border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.08)] p-2",
        role: "tablist",
        onKeyDown,
        children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "rounded-2xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.08)] p-4 text-[rgb(var(--nc-fg))]", children: panels[activeValue] })
  ] });
}

// src/components/craft-tooltip.tsx
var React9 = __toESM(require("react"), 1);
var import_jsx_runtime16 = require("react/jsx-runtime");
function CraftTooltip({ content, tone, children, side = "top" }) {
  const [open, setOpen] = React9.useState(false);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
    "span",
    {
      className: "relative inline-flex",
      onMouseEnter: () => setOpen(true),
      onMouseLeave: () => setOpen(false),
      onFocus: () => setOpen(true),
      onBlur: () => setOpen(false),
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
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
var import_jsx_runtime17 = require("react/jsx-runtime");
var variantClasses4 = {
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
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    "div",
    {
      className: "fixed right-6 top-6 z-50 flex w-full max-w-sm flex-col gap-3",
      "data-nc-theme": tone,
      children: toasts.map((toast) => {
        var _a;
        return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          "div",
          {
            className: cn(
              "rounded-2xl border bg-[rgb(var(--nc-surface)/0.12)] p-4 text-[rgb(var(--nc-fg))] shadow-[0_15px_35px_rgba(0,0,0,0.35)] backdrop-blur-xl",
              variantClasses4[(_a = toast.variant) != null ? _a : "info"]
            ),
            children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "flex items-start justify-between gap-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "text-sm font-semibold", children: toast.title }),
                toast.description && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("p", { className: "text-xs text-[rgb(var(--nc-fg-muted))]", children: toast.description })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
var import_jsx_runtime18 = require("react/jsx-runtime");
function CraftSkeleton({ className, tone, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
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
var import_jsx_runtime19 = require("react/jsx-runtime");
function CraftEmptyState({
  className,
  tone,
  title,
  description,
  icon,
  action,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
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
        icon && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgb(var(--nc-accent-1)/0.2)] text-[rgb(var(--nc-accent-1))]", children: icon }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("h3", { className: "text-xl font-semibold", children: title }),
        description && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("p", { className: "mt-2 text-sm text-[rgb(var(--nc-fg-muted))]", children: description }),
        action && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "mt-6 flex justify-center", children: action })
      ]
    }
  );
}

// src/components/craft-popover.tsx
var React11 = __toESM(require("react"), 1);
var import_jsx_runtime20 = require("react/jsx-runtime");
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
  const [uncontrolledOpen, setUncontrolledOpen] = React11.useState(defaultOpen);
  const isControlled = typeof open === "boolean";
  const isOpen = isControlled ? open : uncontrolledOpen;
  const rootRef = React11.useRef(null);
  const setOpen = React11.useCallback(
    (next) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange == null ? void 0 : onOpenChange(next);
    },
    [isControlled, onOpenChange]
  );
  React11.useEffect(() => {
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
  const triggerNode = React11.isValidElement(trigger) ? React11.cloneElement(trigger, {
    onClick: (event) => {
      const handler = trigger.props.onClick;
      handler == null ? void 0 : handler(event);
      if (!event.defaultPrevented) setOpen(!isOpen);
    },
    "aria-expanded": isOpen,
    "aria-haspopup": "dialog"
  }) : /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: cn("relative inline-flex", className), ref: rootRef, children: [
    triggerNode,
    isOpen && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
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
var React12 = __toESM(require("react"), 1);
var import_jsx_runtime21 = require("react/jsx-runtime");
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
  const [uncontrolledOpen, setUncontrolledOpen] = React12.useState(defaultOpen);
  const isControlled = typeof open === "boolean";
  const isOpen = isControlled ? open : uncontrolledOpen;
  const setOpen = React12.useCallback(
    (next) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange == null ? void 0 : onOpenChange(next);
    },
    [isControlled, onOpenChange]
  );
  const menuContent = content != null ? content : items.length ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: cn("space-y-1", menuClassName), role: "menu", children: items.map((item, index) => {
    var _a;
    const key = (_a = item.id) != null ? _a : `${index}-${String(item.label)}`;
    const itemClasses = cn(
      "flex w-full items-start gap-3 rounded-xl px-3 py-2 text-left text-sm transition",
      item.disabled ? "cursor-not-allowed text-[rgb(var(--nc-fg-soft))] opacity-60" : "text-[rgb(var(--nc-fg))] hover:bg-[rgb(var(--nc-surface)/0.12)]"
    );
    const contentNode = /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(import_jsx_runtime21.Fragment, { children: [
      item.icon && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "mt-0.5", children: item.icon }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("span", { className: "flex-1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "block font-medium", children: item.label }),
        item.description && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "block text-xs text-[rgb(var(--nc-fg-muted))]", children: item.description })
      ] })
    ] });
    if (item.href) {
      return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
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
var React13 = __toESM(require("react"), 1);
var import_jsx_runtime22 = require("react/jsx-runtime");
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
  const [uncontrolledOpen, setUncontrolledOpen] = React13.useState(defaultOpen);
  const isControlled = typeof open === "boolean";
  const isOpen = isControlled ? open : uncontrolledOpen;
  const [query, setQuery] = React13.useState("");
  const setOpen = React13.useCallback(
    (next) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange == null ? void 0 : onOpenChange(next);
    },
    [isControlled, onOpenChange]
  );
  const filtered = React13.useMemo(() => {
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
  React13.useEffect(() => {
    if (!isOpen) setQuery("");
  }, [isOpen]);
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    CraftModal,
    {
      open: isOpen,
      onOpenChange: setOpen,
      trigger,
      title,
      tone,
      className: cn("max-w-xl", className),
      children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
          CraftInput,
          {
            type: "search",
            placeholder,
            value: query,
            onChange: (event) => setQuery(event.target.value)
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "space-y-2", children: [
          filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "rounded-2xl border border-[rgb(var(--nc-border)/0.35)] bg-[rgb(var(--nc-surface)/0.12)] p-4 text-sm text-[rgb(var(--nc-fg-muted))]", children: emptyText }),
          filtered.map((item) => /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
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
                item.icon && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "mt-1", children: item.icon }),
                /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("span", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "block text-sm font-semibold", children: item.label }),
                  item.description && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "block text-xs text-[rgb(var(--nc-fg-muted))]", children: item.description })
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
var import_jsx_runtime23 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
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
var import_jsx_runtime24 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
    CraftCard,
    {
      className: cn("space-y-3", className),
      tone,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("p", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: label }),
          icon && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "text-[rgb(var(--nc-fg-soft))]", children: icon })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("p", { className: "text-3xl font-semibold", children: value }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "flex items-center justify-between text-xs", children: [
          delta && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: trendClasses[trend], children: delta }),
          footer && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "text-[rgb(var(--nc-fg-muted))]", children: footer })
        ] })
      ]
    }
  );
}

// src/components/craft-date-picker.tsx
var React14 = __toESM(require("react"), 1);
var import_jsx_runtime25 = require("react/jsx-runtime");
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
  const [open, setOpen] = React14.useState(false);
  const [uncontrolledValue, setUncontrolledValue] = React14.useState(defaultValue != null ? defaultValue : "");
  const isControlled = value !== void 0;
  const selectedValue = isControlled ? value != null ? value : "" : uncontrolledValue;
  const selectedDate = parseDate(selectedValue);
  const initialMonth = selectedDate != null ? selectedDate : /* @__PURE__ */ new Date();
  const [viewDate, setViewDate] = React14.useState(initialMonth);
  React14.useEffect(() => {
    if (selectedDate) setViewDate(selectedDate);
  }, [selectedDate]);
  const wrapperRef = React14.useRef(null);
  React14.useEffect(() => {
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
  const setValue = React14.useCallback(
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
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "relative w-full", "data-nc-theme": tone, ref: wrapperRef, children: [
    /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
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
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: selectedValue ? "text-[rgb(var(--nc-fg))]" : "text-[rgb(var(--nc-fg-soft))]", children: selectedValue || placeholder }),
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("svg", { className: "h-4 w-4 text-[rgb(var(--nc-fg-soft))]", viewBox: "0 0 20 20", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("path", { d: "M6 2a1 1 0 011 1v1h6V3a1 1 0 112 0v1h1a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h1V3a1 1 0 011-1zm10 6H4v8h12V8z" }) })
        ]
      }
    ),
    open && /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
      "div",
      {
        className: cn(
          "absolute left-0 top-full z-20 mt-3 w-full rounded-3xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/1.52)] p-4 text-[rgb(var(--nc-fg))] shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-10xl"
        ),
        onKeyDown: handleKeyDown,
        tabIndex: -1,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
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
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "text-sm font-semibold", children: viewDate.toLocaleString(void 0, { month: "long", year: "numeric" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "mt-4 grid grid-cols-7 gap-2 text-xs text-[rgb(var(--nc-fg-muted))]", children: WEEK_DAYS.map((day) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "text-center", children: day }, day)) }),
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "mt-2 grid grid-cols-7 gap-2", children: cells.map((date, index) => {
            if (!date) return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", {}, `empty-${index}`);
            const disabled = isOutsideRange(date, min, max);
            const selected = selectedDate && isSameDay(date, selectedDate);
            return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
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

// src/components/craft-icon.tsx
var React15 = __toESM(require("react"), 1);
var import_dynamic = require("lucide-react/dynamic");
var import_jsx_runtime26 = require("react/jsx-runtime");
var CraftIconContext = React15.createContext(null);
function CraftIconProvider({ icons, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(CraftIconContext.Provider, { value: icons, children });
}
function CraftIcon({
  name,
  className,
  "aria-label": ariaLabel,
  icons,
  useLucide = true
}) {
  var _a;
  const registry = icons != null ? icons : React15.useContext(CraftIconContext);
  const icon = registry == null ? void 0 : registry[name];
  if (!icon) {
    if (!useLucide) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
      import_dynamic.DynamicIcon,
      {
        name,
        className,
        "aria-hidden": ariaLabel ? void 0 : true,
        "aria-label": ariaLabel
      }
    );
  }
  if (React15.isValidElement(icon)) {
    return React15.cloneElement(icon, {
      className: cn((_a = icon.props) == null ? void 0 : _a.className, className),
      "aria-hidden": ariaLabel ? void 0 : true,
      "aria-label": ariaLabel
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("span", { className, "aria-label": ariaLabel, children: icon });
}

// src/components/craft-number-input.tsx
var React16 = __toESM(require("react"), 1);
var import_jsx_runtime27 = require("react/jsx-runtime");
var CraftNumberInput = React16.forwardRef(({ className, tone, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "relative w-full", "data-nc-theme": tone, children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
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
var React17 = __toESM(require("react"), 1);
var import_jsx_runtime28 = require("react/jsx-runtime");
var CraftCurrencyInput = React17.forwardRef(({ className, tone, currencySymbol = "$", ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "relative w-full", "data-nc-theme": tone, children: [
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[rgb(var(--nc-fg-soft))]", children: currencySymbol }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
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

// src/components/craft-form.tsx
var React18 = __toESM(require("react"), 1);
var import_react_hook_form2 = require("react-hook-form");

// src/components/craft-submit-button.tsx
var import_react_hook_form = require("react-hook-form");
var import_jsx_runtime29 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(
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
        isSubmitting && /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "inline-flex h-4 w-4 animate-spin rounded-full border-2 border-white/60 border-t-white" }),
        /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { children: isSubmitting ? loadingLabel : children })
      ]
    }
  );
}

// src/components/craft-form.tsx
var import_jsx_runtime30 = require("react/jsx-runtime");
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
  const [uncontrolledOpen, setUncontrolledOpen] = React18.useState(defaultOpen);
  const isControlled = typeof open === "boolean";
  const isOpen = isControlled ? open : uncontrolledOpen;
  const setOpen = React18.useCallback(
    (next) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange == null ? void 0 : onOpenChange(next);
    },
    [isControlled, onOpenChange]
  );
  const formId = React18.useId();
  const handleSubmit = form.handleSubmit(async (values) => {
    await onSubmit(values);
    if (closeOnSubmit) setOpen(false);
  });
  const footerContent = footer != null ? footer : /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)("div", { className: "flex flex-wrap items-center justify-end gap-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(CraftButton, { type: "button", variant: "ghost", onClick: () => setOpen(false), children: cancelLabel }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
      CraftSubmitButton,
      {
        form: formId,
        disableWhenInvalid: disableSubmitWhenInvalid,
        children: submitLabel
      }
    )
  ] });
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_react_hook_form2.FormProvider, { ...form, children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
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
var React19 = __toESM(require("react"), 1);
var import_react_hook_form4 = require("react-hook-form");

// src/components/craft-form-field.tsx
var import_react_hook_form3 = require("react-hook-form");
var import_jsx_runtime31 = require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("input", { type: "hidden", ...register(name, rules) });
  }
  const labelNode = label ? /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
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
  const descriptionNode = description ? /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
    "p",
    {
      className: cn(
        "text-xs text-[rgb(var(--nc-fg-muted))]",
        descriptionClassName
      ),
      children: description
    }
  ) : null;
  const errorNode = errorMessage ? /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("p", { className: "text-xs text-[rgb(var(--nc-accent-3))]", children: errorMessage }) : null;
  const renderInput = () => {
    if (type === "textarea") {
      return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
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
            placeholder && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("option", { value: "", disabled: true, children: placeholder }),
            options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
        import_react_hook_form3.Controller,
        {
          control,
          name,
          rules,
          render: ({ field }) => {
            var _a;
            return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("div", { className: "grid gap-3", children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
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
            /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
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
            /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { children: option.label })
          ]
        },
        option.value
      )) });
    }
    if (type === "range" || type === "slider") {
      return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)("div", { className: cn("space-y-2", className), "data-nc-theme": tone, children: [
    showLabel ? labelNode : null,
    showDescriptionAbove ? descriptionNode : null,
    renderInput(),
    showDescriptionBelow ? descriptionNode : null,
    errorNode
  ] });
}

// src/components/craft-form-builder.tsx
var import_jsx_runtime32 = require("react/jsx-runtime");
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
  const [uncontrolledOpen, setUncontrolledOpen] = React19.useState(defaultOpen);
  const isControlled = typeof open === "boolean";
  const isOpen = isControlled ? open : uncontrolledOpen;
  const setOpen = React19.useCallback(
    (next) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange == null ? void 0 : onOpenChange(next);
    },
    [isControlled, onOpenChange]
  );
  const defaultValues = React19.useMemo(
    () => buildDefaultValues(fields, initialData),
    [fields, initialData]
  );
  const form = (0, import_react_hook_form4.useForm)({
    mode: "onChange",
    defaultValues
  });
  const formId = React19.useId();
  React19.useEffect(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_react_hook_form4.FormProvider, { ...form, children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
    CraftModal,
    {
      open: isOpen,
      onOpenChange: setOpen,
      trigger,
      title,
      description,
      tone,
      className,
      footer: /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "flex flex-wrap items-center justify-end gap-3", children: [
        showReset && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
          CraftButton,
          {
            type: "button",
            variant: "outline",
            onClick: handleReset,
            disabled: loading,
            children: resetLabel
          }
        ),
        showCancel && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
          CraftButton,
          {
            type: "button",
            variant: "ghost",
            onClick: handleCancel,
            disabled: loading,
            children: cancelLabel
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
          CraftSubmitButton,
          {
            loading,
            disableWhenInvalid: disableSubmitWhenInvalid,
            form: formId,
            children: submitLabel
          }
        )
      ] }),
      children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
        "form",
        {
          id: formId,
          onSubmit: handleSubmit,
          className: cn("space-y-5", formClassName),
          children: fields.map((field) => /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { className: "space-y-2", children: [
            field.helpText && /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("p", { className: "text-xs text-[rgb(var(--nc-fg-muted))]", children: field.helpText }),
            /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
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

// src/components/craft-confirm-dialog.tsx
var React20 = __toESM(require("react"), 1);
var import_jsx_runtime33 = require("react/jsx-runtime");
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
  const [uncontrolledOpen, setUncontrolledOpen] = React20.useState(defaultOpen);
  const isControlled = typeof open === "boolean";
  const isOpen = isControlled ? open : uncontrolledOpen;
  const setOpen = React20.useCallback(
    (next) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange == null ? void 0 : onOpenChange(next);
    },
    [isControlled, onOpenChange]
  );
  const [isLoading, setIsLoading] = React20.useState(false);
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
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
    CraftModal,
    {
      open: isOpen,
      onOpenChange: setOpen,
      trigger,
      title,
      description,
      tone,
      className: cn("max-w-md", className),
      footer: /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: "flex flex-wrap items-center justify-end gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
          CraftButton,
          {
            type: "button",
            variant: "ghost",
            onClick: () => setOpen(false),
            children: cancelLabel
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: description })
    }
  );
}

// src/components/craft-create-edit-drawer.tsx
var React21 = __toESM(require("react"), 1);
var import_react_hook_form5 = require("react-hook-form");
var import_jsx_runtime34 = require("react/jsx-runtime");
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
  const [uncontrolledOpen, setUncontrolledOpen] = React21.useState(defaultOpen);
  const isControlled = typeof open === "boolean";
  const isOpen = isControlled ? open : uncontrolledOpen;
  const setOpen = React21.useCallback(
    (next) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange == null ? void 0 : onOpenChange(next);
    },
    [isControlled, onOpenChange]
  );
  const formId = React21.useId();
  const handleSubmit = form.handleSubmit(async (values) => {
    await onSubmit(values);
    if (closeOnSubmit) setOpen(false);
  });
  const resolvedTitle = title != null ? title : mode === "create" ? "Create item" : "Edit item";
  const resolvedSubmitLabel = submitLabel != null ? submitLabel : mode === "create" ? "Create" : "Save changes";
  const footerContent = footer != null ? footer : /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "flex flex-wrap items-center justify-end gap-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(CraftButton, { type: "button", variant: "ghost", onClick: () => setOpen(false), children: cancelLabel }),
    /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
      CraftSubmitButton,
      {
        form: formId,
        disableWhenInvalid: disableSubmitWhenInvalid,
        children: resolvedSubmitLabel
      }
    )
  ] });
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_react_hook_form5.FormProvider, { ...form, children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("form", { id: formId, onSubmit: handleSubmit, className: "space-y-5", children: [
        description && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("p", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: description }),
        children
      ] })
    }
  ) });
}

// src/components/craft-filter-bar.tsx
var import_jsx_runtime35 = require("react/jsx-runtime");
function CraftFilterBar({
  title,
  description,
  searchValue,
  onSearchChange,
  searchPlaceholder = "Search...",
  actions,
  filters,
  tone,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(
    "div",
    {
      className: cn(
        "rounded-3xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] p-4 text-[rgb(var(--nc-fg))] shadow-[0_12px_36px_rgba(0,0,0,0.2)] backdrop-blur-2xl",
        className
      ),
      "data-nc-theme": tone,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "flex flex-wrap items-center justify-between gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { children: [
            title && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("h3", { className: "text-lg font-semibold", children: title }),
            description && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("p", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: description })
          ] }),
          actions && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "flex items-center gap-3", children: actions })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: "mt-4 grid gap-4 md:grid-cols-[minmax(0,1fr)_auto]", children: [
          /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
            CraftInput,
            {
              type: "search",
              placeholder: searchPlaceholder,
              value: searchValue != null ? searchValue : "",
              onChange: (event) => onSearchChange == null ? void 0 : onSearchChange(event.target.value),
              tone
            }
          ),
          filters && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: "flex flex-wrap items-center gap-3", children: filters })
        ] })
      ]
    }
  );
}

// src/components/craft-table-toolbar.tsx
var import_jsx_runtime36 = require("react/jsx-runtime");
function CraftTableToolbar({
  title,
  description,
  searchValue,
  onSearchChange,
  searchPlaceholder = "Search table...",
  actions,
  filters,
  bulkActions,
  tone,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
    "div",
    {
      className: cn(
        "rounded-3xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] p-4 text-[rgb(var(--nc-fg))] shadow-[0_12px_36px_rgba(0,0,0,0.2)] backdrop-blur-2xl",
        className
      ),
      "data-nc-theme": tone,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "flex flex-wrap items-center justify-between gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { children: [
            title && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("h3", { className: "text-lg font-semibold", children: title }),
            description && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("p", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: description })
          ] }),
          actions && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: "flex items-center gap-3", children: actions })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "mt-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto]", children: [
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
            CraftInput,
            {
              type: "search",
              placeholder: searchPlaceholder,
              value: searchValue != null ? searchValue : "",
              onChange: (event) => onSearchChange == null ? void 0 : onSearchChange(event.target.value),
              tone
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: "flex flex-wrap items-center gap-3", children: [
            filters,
            bulkActions
          ] })
        ] })
      ]
    }
  );
}

// src/components/craft-data-table.tsx
var React22 = __toESM(require("react"), 1);

// src/components/craft-pagination.tsx
var import_jsx_runtime37 = require("react/jsx-runtime");
function getPageNumbers(pageIndex, pageCount, maxButtons = 5) {
  if (pageCount <= maxButtons) {
    return Array.from({ length: pageCount }, (_, i) => i);
  }
  const pages = [];
  const start = Math.max(0, pageIndex - 1);
  const end = Math.min(pageCount - 1, pageIndex + 1);
  pages.push(0);
  if (start > 1) pages.push("ellipsis");
  for (let i = start; i <= end; i += 1) {
    if (i !== 0 && i !== pageCount - 1) pages.push(i);
  }
  if (end < pageCount - 2) pages.push("ellipsis");
  pages.push(pageCount - 1);
  return pages;
}
function CraftPagination({
  pageIndex,
  pageCount,
  onPageChange,
  canPrevious = pageIndex > 0,
  canNext = pageIndex < pageCount - 1,
  pageSize,
  pageSizeOptions = [10, 20, 50],
  onPageSizeChange,
  tone,
  className
}) {
  const pages = getPageNumbers(pageIndex, pageCount);
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
    "div",
    {
      className: cn(
        "flex flex-wrap items-center justify-between gap-4",
        className
      ),
      "data-nc-theme": tone,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
            "button",
            {
              type: "button",
              className: cn(
                "rounded-xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] px-3 py-2 text-xs text-[rgb(var(--nc-fg))] transition",
                "hover:bg-[rgb(var(--nc-surface)/0.2)]",
                !canPrevious && "opacity-50 cursor-not-allowed"
              ),
              onClick: () => onPageChange(Math.max(pageIndex - 1, 0)),
              disabled: !canPrevious,
              children: "Prev"
            }
          ),
          pages.map(
            (page, index) => page === "ellipsis" ? /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { className: "px-2 text-[rgb(var(--nc-fg-muted))]", children: "..." }, `ellipsis-${index}`) : /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
              "button",
              {
                type: "button",
                className: cn(
                  "rounded-xl border px-3 py-2 text-xs transition",
                  page === pageIndex ? "border-[rgb(var(--nc-accent-1)/0.6)] bg-[rgb(var(--nc-accent-1)/0.2)] text-[rgb(var(--nc-fg))]" : "border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] text-[rgb(var(--nc-fg-muted))] hover:text-[rgb(var(--nc-fg))] hover:bg-[rgb(var(--nc-surface)/0.2)]"
                ),
                onClick: () => onPageChange(page),
                children: page + 1
              },
              page
            )
          ),
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
            "button",
            {
              type: "button",
              className: cn(
                "rounded-xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] px-3 py-2 text-xs text-[rgb(var(--nc-fg))] transition",
                "hover:bg-[rgb(var(--nc-surface)/0.2)]",
                !canNext && "opacity-50 cursor-not-allowed"
              ),
              onClick: () => onPageChange(Math.min(pageIndex + 1, pageCount - 1)),
              disabled: !canNext,
              children: "Next"
            }
          )
        ] }),
        onPageSizeChange && /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)("div", { className: "flex items-center gap-2 text-xs text-[rgb(var(--nc-fg-muted))]", children: [
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { children: "Rows" }),
          /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
            "select",
            {
              className: "rounded-xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] px-2 py-1 text-xs text-[rgb(var(--nc-fg))]",
              value: pageSize,
              onChange: (event) => onPageSizeChange(Number(event.target.value)),
              children: pageSizeOptions.map((size) => /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("option", { value: size, children: size }, size))
            }
          )
        ] })
      ]
    }
  );
}

// src/components/craft-data-table.tsx
var import_jsx_runtime38 = require("react/jsx-runtime");
function getColumnValue(column, row) {
  if (typeof column.accessor === "function") return column.accessor(row);
  const record = row;
  if (typeof column.accessor === "string") return record[column.accessor];
  return record[column.id];
}
function normalizeValue(value) {
  if (value === null || value === void 0) return "";
  if (typeof value === "number") return value;
  if (typeof value === "string") return value.toLowerCase();
  if (value instanceof Date) return value.getTime();
  return String(value).toLowerCase();
}
function CraftDataTable({
  data,
  columns,
  tone,
  className,
  loading = false,
  emptyState,
  toolbar,
  enableSorting = true,
  enableFiltering = true,
  enableColumnVisibility = true,
  enableRowSelection = true,
  enablePagination = true,
  showGlobalFilter,
  manualSorting = false,
  manualFiltering = false,
  manualPagination = false,
  sortBy,
  onSortChange,
  filters,
  onFiltersChange,
  globalFilter,
  onGlobalFilterChange,
  columnVisibility,
  onColumnVisibilityChange,
  selectedRowIds,
  onRowSelectionChange,
  getRowId,
  pageIndex,
  pageSize = 10,
  pageCount,
  onPageChange,
  onPageSizeChange
}) {
  const [internalSort, setInternalSort] = React22.useState(null);
  const [internalFilters, setInternalFilters] = React22.useState({});
  const [internalGlobalFilter, setInternalGlobalFilter] = React22.useState("");
  const [internalVisibility, setInternalVisibility] = React22.useState(
    () => columns.reduce((acc, column) => {
      acc[column.id] = !column.hidden;
      return acc;
    }, {})
  );
  const [internalSelection, setInternalSelection] = React22.useState({});
  const [internalPageIndex, setInternalPageIndex] = React22.useState(0);
  const [showColumns, setShowColumns] = React22.useState(false);
  const resolvedSort = sortBy != null ? sortBy : internalSort;
  const resolvedFilters = filters != null ? filters : internalFilters;
  const resolvedGlobalFilter = globalFilter != null ? globalFilter : internalGlobalFilter;
  const resolvedVisibility = columnVisibility != null ? columnVisibility : internalVisibility;
  const resolvedSelection = selectedRowIds != null ? selectedRowIds : internalSelection;
  const resolvedPageIndex = pageIndex != null ? pageIndex : internalPageIndex;
  const setSort = (next) => {
    if (sortBy === void 0) setInternalSort(next);
    onSortChange == null ? void 0 : onSortChange(next);
  };
  const setFilters = (next) => {
    if (filters === void 0) setInternalFilters(next);
    onFiltersChange == null ? void 0 : onFiltersChange(next);
  };
  const setVisibility = (next) => {
    if (columnVisibility === void 0) setInternalVisibility(next);
    onColumnVisibilityChange == null ? void 0 : onColumnVisibilityChange(next);
  };
  const setSelection = (next) => {
    if (selectedRowIds === void 0) setInternalSelection(next);
    onRowSelectionChange == null ? void 0 : onRowSelectionChange(next);
  };
  const setPageIndex = React22.useCallback(
    (next) => {
      if (pageIndex === void 0) setInternalPageIndex(next);
      onPageChange == null ? void 0 : onPageChange(next);
    },
    [pageIndex, onPageChange]
  );
  const visibleColumns = columns.filter(
    (column) => resolvedVisibility[column.id] !== false
  );
  const filteredData = React22.useMemo(() => {
    if (manualFiltering) return data;
    const globalValue = resolvedGlobalFilter.trim();
    return data.filter((row) => {
      if (globalValue) {
        const matchesGlobal = columns.some((column) => {
          const value = normalizeValue(getColumnValue(column, row));
          return String(value).includes(globalValue.toLowerCase());
        });
        if (!matchesGlobal) return false;
      }
      return Object.entries(resolvedFilters).every(([columnId, value]) => {
        if (!value) return true;
        const column = columns.find((col) => col.id === columnId);
        if (!column) return true;
        const cellValue = normalizeValue(getColumnValue(column, row));
        return String(cellValue).includes(value.toLowerCase());
      });
    });
  }, [columns, data, manualFiltering, resolvedFilters, resolvedGlobalFilter]);
  const sortedData = React22.useMemo(() => {
    if (manualSorting || !resolvedSort) return filteredData;
    const column = columns.find((col) => col.id === resolvedSort.id);
    if (!column) return filteredData;
    const sorted = [...filteredData].sort((a, b) => {
      const valueA = normalizeValue(getColumnValue(column, a));
      const valueB = normalizeValue(getColumnValue(column, b));
      if (typeof valueA === "number" && typeof valueB === "number") {
        return valueA - valueB;
      }
      return String(valueA).localeCompare(String(valueB));
    });
    return resolvedSort.desc ? sorted.reverse() : sorted;
  }, [columns, filteredData, manualSorting, resolvedSort]);
  const resolvedPageCount = manualPagination ? Math.max(pageCount != null ? pageCount : 1, 1) : Math.max(Math.ceil(sortedData.length / pageSize), 1);
  React22.useEffect(() => {
    if (resolvedPageIndex > resolvedPageCount - 1) {
      setPageIndex(Math.max(resolvedPageCount - 1, 0));
    }
  }, [resolvedPageCount, resolvedPageIndex, setPageIndex]);
  const pagedData = React22.useMemo(() => {
    if (!enablePagination || manualPagination) return sortedData;
    const start = resolvedPageIndex * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [enablePagination, manualPagination, pageSize, resolvedPageIndex, sortedData]);
  const rowIdFor = React22.useCallback(
    (row, index) => {
      var _a;
      return (_a = getRowId == null ? void 0 : getRowId(row, index)) != null ? _a : String(index);
    },
    [getRowId]
  );
  const pageStartIndex = enablePagination && !manualPagination ? resolvedPageIndex * pageSize : 0;
  const pageRowIds = pagedData.map(
    (row, index) => rowIdFor(row, pageStartIndex + index)
  );
  const allSelected = pageRowIds.length > 0 && pageRowIds.every((id) => resolvedSelection[id]);
  const someSelected = pageRowIds.some((id) => resolvedSelection[id]);
  const headerCheckboxRef = React22.useRef(null);
  React22.useEffect(() => {
    if (headerCheckboxRef.current) {
      headerCheckboxRef.current.indeterminate = someSelected && !allSelected;
    }
  }, [someSelected, allSelected]);
  const toggleSort = (column) => {
    if (!enableSorting || column.sortable === false) return;
    const current = resolvedSort;
    if (!current || current.id !== column.id) {
      setSort({ id: column.id, desc: false });
      return;
    }
    if (!current.desc) {
      setSort({ id: column.id, desc: true });
      return;
    }
    setSort(null);
  };
  const emptyContent = emptyState != null ? emptyState : /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "text-center text-sm text-[rgb(var(--nc-fg-muted))]", children: "No results found." });
  const resolvedShowGlobalFilter = showGlobalFilter != null ? showGlobalFilter : enableFiltering && !toolbar;
  const setGlobalFilter = (next) => {
    if (globalFilter === void 0) setInternalGlobalFilter(next);
    onGlobalFilterChange == null ? void 0 : onGlobalFilterChange(next);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: cn("space-y-4", className), "data-nc-theme": tone, children: [
    toolbar,
    resolvedShowGlobalFilter && /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "flex items-center justify-between gap-3 rounded-2xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] px-3 py-2 text-sm text-[rgb(var(--nc-fg))]", children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "text-xs text-[rgb(var(--nc-fg-muted))]", children: "Global filter" }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
        "input",
        {
          type: "search",
          value: resolvedGlobalFilter,
          onChange: (event) => setGlobalFilter(event.target.value),
          placeholder: "Search all columns...",
          className: "w-full max-w-xs rounded-xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.18)] px-3 py-2 text-xs text-[rgb(var(--nc-fg))]"
        }
      )
    ] }),
    enableColumnVisibility && /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "relative flex justify-end", children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
        "button",
        {
          type: "button",
          className: "rounded-xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] px-3 py-2 text-xs text-[rgb(var(--nc-fg))] transition hover:bg-[rgb(var(--nc-surface)/0.2)]",
          onClick: () => setShowColumns((prev) => !prev),
          children: "Columns"
        }
      ),
      showColumns && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "absolute right-0 top-10 z-20 w-48 rounded-2xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.2)] p-3 shadow-[0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur-2xl", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "grid gap-2", children: columns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(
        "label",
        {
          className: "flex items-center gap-2 text-xs text-[rgb(var(--nc-fg))]",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
              "input",
              {
                type: "checkbox",
                className: "h-4 w-4 accent-[rgb(var(--nc-accent-1))]",
                checked: resolvedVisibility[column.id] !== false,
                onChange: (event) => setVisibility({
                  ...resolvedVisibility,
                  [column.id]: event.target.checked
                })
              }
            ),
            column.header
          ]
        },
        column.id
      )) }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "overflow-hidden rounded-3xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.08)] shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("table", { className: "w-full border-collapse text-left text-sm", children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("thead", { className: "bg-[rgb(var(--nc-surface)/0.12)] text-[rgb(var(--nc-fg-muted))]", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("tr", { children: [
        enableRowSelection && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("th", { className: "w-12 px-4 py-3", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          "input",
          {
            ref: headerCheckboxRef,
            type: "checkbox",
            className: "h-4 w-4 accent-[rgb(var(--nc-accent-1))]",
            checked: allSelected,
            onChange: (event) => {
              const next = { ...resolvedSelection };
              pageRowIds.forEach((id) => {
                next[id] = event.target.checked;
              });
              setSelection(next);
            }
          }
        ) }),
        visibleColumns.map((column) => {
          var _a;
          return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(
            "th",
            {
              className: cn(
                "px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em]",
                column.headerClassName
              ),
              style: { width: column.width },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(
                  "button",
                  {
                    type: "button",
                    className: cn(
                      "flex items-center gap-2",
                      enableSorting && column.sortable !== false ? "cursor-pointer" : "cursor-default"
                    ),
                    onClick: () => toggleSort(column),
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { children: column.header }),
                      (resolvedSort == null ? void 0 : resolvedSort.id) === column.id && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "text-[rgb(var(--nc-accent-1))]", children: resolvedSort.desc ? "\u2193" : "\u2191" })
                    ]
                  }
                ),
                enableFiltering && column.filterable !== false && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                  "input",
                  {
                    type: "text",
                    value: (_a = resolvedFilters[column.id]) != null ? _a : "",
                    onChange: (event) => setFilters({
                      ...resolvedFilters,
                      [column.id]: event.target.value
                    }),
                    placeholder: "Filter",
                    className: "mt-2 w-full rounded-xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.18)] px-2 py-1 text-xs text-[rgb(var(--nc-fg))]"
                  }
                )
              ]
            },
            column.id
          );
        })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("tbody", { className: "text-[rgb(var(--nc-fg))]", children: [
        loading && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          "td",
          {
            colSpan: visibleColumns.length + (enableRowSelection ? 1 : 0),
            className: "px-4 py-10 text-center text-sm text-[rgb(var(--nc-fg-muted))]",
            children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("span", { className: "inline-flex items-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("span", { className: "h-4 w-4 animate-spin rounded-full border-2 border-[rgb(var(--nc-fg-muted))] border-t-transparent" }),
              "Loading data..."
            ] })
          }
        ) }),
        !loading && pagedData.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          "td",
          {
            colSpan: visibleColumns.length + (enableRowSelection ? 1 : 0),
            className: "px-4 py-10",
            children: emptyContent
          }
        ) }),
        !loading && pagedData.map((row, rowIndex) => {
          const rowId = rowIdFor(row, pageStartIndex + rowIndex);
          const isSelected = resolvedSelection[rowId];
          return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(
            "tr",
            {
              className: cn(
                "border-t border-[rgb(var(--nc-border)/0.15)]",
                isSelected && "bg-[rgb(var(--nc-accent-1)/0.08)]"
              ),
              children: [
                enableRowSelection && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("td", { className: "px-4 py-4", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                  "input",
                  {
                    type: "checkbox",
                    className: "h-4 w-4 accent-[rgb(var(--nc-accent-1))]",
                    checked: isSelected,
                    onChange: (event) => setSelection({
                      ...resolvedSelection,
                      [rowId]: event.target.checked
                    })
                  }
                ) }),
                visibleColumns.map((column) => {
                  var _a;
                  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                    "td",
                    {
                      className: cn(
                        "px-4 py-4",
                        column.align === "center" && "text-center",
                        column.align === "right" && "text-right",
                        column.cellClassName
                      ),
                      children: column.cell ? column.cell(row) : String((_a = getColumnValue(column, row)) != null ? _a : "")
                    },
                    column.id
                  );
                })
              ]
            },
            rowId
          );
        })
      ] })
    ] }) }),
    enablePagination && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
      CraftPagination,
      {
        pageIndex: resolvedPageIndex,
        pageCount: resolvedPageCount,
        onPageChange: setPageIndex,
        pageSize,
        onPageSizeChange,
        tone
      }
    )
  ] });
}

// src/components/layout/app-shell.tsx
var import_jsx_runtime39 = require("react/jsx-runtime");
function AppShell({ className, sidebar, topNav, children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
    "div",
    {
      className: cn(
        "grid min-h-screen grid-cols-1 gap-6 bg-background p-6 lg:grid-cols-[260px_1fr]",
        className
      ),
      ...props,
      children: [
        sidebar && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "h-full lg:sticky lg:top-6 lg:self-start lg:max-h-[calc(100vh-3rem)] lg:overflow-y-auto", children: sidebar }),
        /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "flex flex-col gap-6", children: [
          topNav && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "lg:sticky lg:top-6 lg:z-20", children: topNav }),
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("main", { className: "flex-1", children })
        ] })
      ]
    }
  );
}

// src/components/layout/app-template.tsx
var React23 = __toESM(require("react"), 1);

// src/components/layout/breadcrumbs.tsx
var import_jsx_runtime40 = require("react/jsx-runtime");
function Breadcrumbs({ className, items, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("nav", { className: cn("flex items-center text-sm text-[rgb(var(--nc-fg-muted))]", className), ...props, children: items.map((item, index) => {
    const content = item.href ? /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("a", { href: item.href, className: "transition hover:text-[rgb(var(--nc-fg))]", children: item.label }) : /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("span", { className: "text-[rgb(var(--nc-fg))]", children: item.label });
    return /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)("span", { className: "flex items-center", children: [
      content,
      index < items.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("span", { className: "mx-2 text-[rgb(var(--nc-fg-soft))]", children: "/" })
    ] }, `${item.label}-${index}`);
  }) });
}

// src/components/layout/sidebar.tsx
var import_jsx_runtime41 = require("react/jsx-runtime");
function Sidebar({ className, title, items, footer, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
    "aside",
    {
      className: cn(
        "flex h-full w-full flex-col gap-6 rounded-3xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.08)] p-6 text-[rgb(var(--nc-fg))] backdrop-blur-xl",
        className
      ),
      ...props,
      children: [
        title && /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "text-lg font-semibold", children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("nav", { className: "flex flex-col gap-2", children: items.map((item, index) => {
          var _a;
          return /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(
            "a",
            {
              href: (_a = item.href) != null ? _a : "#",
              className: cn(
                "flex items-center gap-3 rounded-2xl px-3 py-2 text-sm transition",
                item.active ? "bg-[rgb(var(--nc-accent-1)/0.25)] text-[rgb(var(--nc-fg))]" : "text-[rgb(var(--nc-fg-muted))] hover:bg-[rgb(var(--nc-surface)/0.12)] hover:text-[rgb(var(--nc-fg))]"
              ),
              children: [
                item.icon,
                /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("span", { children: item.label })
              ]
            },
            `${item.label}-${index}`
          );
        }) }),
        footer && /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("div", { className: "mt-auto pt-4", children: footer })
      ]
    }
  );
}

// src/components/layout/top-nav.tsx
var import_jsx_runtime42 = require("react/jsx-runtime");
function TopNav({ className, title, actions, breadcrumb, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(
    "header",
    {
      className: cn(
        "flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.08)] px-6 py-4 text-[rgb(var(--nc-fg))] backdrop-blur-xl",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("div", { className: "space-y-1", children: [
          breadcrumb,
          title && /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "text-xl font-semibold", children: title })
        ] }),
        actions && /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", { className: "flex flex-wrap gap-3", children: actions })
      ]
    }
  );
}

// src/components/layout/app-template.tsx
var import_jsx_runtime43 = require("react/jsx-runtime");
function AppTemplate({
  config,
  headerActions,
  headerBreadcrumb,
  sidebarFooter,
  resolveIcon,
  icons,
  activePath,
  getActivePath,
  lucideFallback = true,
  children
}) {
  const sidebarConfig = config.sidebar;
  const headerConfig = config.header;
  const resolvedActivePath = activePath != null ? activePath : getActivePath == null ? void 0 : getActivePath();
  const buildIcon = React23.useCallback(
    (name) => {
      if (!name) return void 0;
      if (resolveIcon) return resolveIcon(name);
      if (icons == null ? void 0 : icons[name]) return icons[name];
      return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(CraftIcon, { name, useLucide: lucideFallback });
    },
    [icons, lucideFallback, resolveIcon]
  );
  const sidebarItems = sidebarConfig ? sidebarConfig.items.map((item) => {
    var _a;
    return {
      label: item.label,
      href: item.href,
      active: (_a = item.active) != null ? _a : resolvedActivePath && item.href ? item.href === resolvedActivePath : false,
      icon: buildIcon(item.icon)
    };
  }) : null;
  const breadcrumbNode = headerBreadcrumb != null ? headerBreadcrumb : (headerConfig == null ? void 0 : headerConfig.breadcrumb) ? /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(Breadcrumbs, { items: headerConfig.breadcrumb }) : null;
  const sidebarFooterNode = sidebarFooter != null ? sidebarFooter : (sidebarConfig == null ? void 0 : sidebarConfig.footerText) ? /* @__PURE__ */ (0, import_jsx_runtime43.jsx)("div", { className: "text-xs text-[rgb(var(--nc-fg-muted))]", children: sidebarConfig.footerText }) : null;
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
    AppShell,
    {
      sidebar: sidebarConfig && sidebarItems ? /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
        Sidebar,
        {
          title: sidebarConfig.title,
          items: sidebarItems,
          footer: sidebarFooterNode
        }
      ) : void 0,
      topNav: headerConfig ? /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
        TopNav,
        {
          title: headerConfig.title,
          breadcrumb: breadcrumbNode,
          actions: headerActions
        }
      ) : void 0,
      children
    }
  );
}

// src/components/layout/layout-config.ts
var layoutConfigSchema = {
  $schema: "https://json-schema.org/draft/2020-12/schema",
  title: "Nextcraft UI Layout Config",
  type: "object",
  additionalProperties: false,
  properties: {
    sidebar: {
      type: "object",
      additionalProperties: false,
      properties: {
        title: { type: "string" },
        footerText: { type: "string" },
        items: {
          type: "array",
          items: {
            type: "object",
            additionalProperties: false,
            properties: {
              label: { type: "string" },
              href: { type: "string" },
              icon: { type: "string" },
              active: { type: "boolean" }
            },
            required: ["label"]
          }
        }
      },
      required: ["items"]
    },
    header: {
      type: "object",
      additionalProperties: false,
      properties: {
        title: { type: "string" },
        breadcrumb: {
          type: "array",
          items: {
            type: "object",
            additionalProperties: false,
            properties: {
              label: { type: "string" },
              href: { type: "string" }
            },
            required: ["label"]
          }
        }
      }
    }
  }
};

// src/components/layout/page-header.tsx
var import_jsx_runtime44 = require("react/jsx-runtime");
function PageHeader({
  className,
  title,
  description,
  actions,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(
    "div",
    {
      className: cn("flex flex-wrap items-start justify-between gap-6", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)("div", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("h1", { className: "text-3xl font-bold text-[rgb(var(--nc-fg))]", children: title }),
          description && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("p", { className: "text-[rgb(var(--nc-fg-muted))]", children: description })
        ] }),
        actions && /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("div", { className: "flex flex-wrap gap-3", children: actions })
      ]
    }
  );
}

// src/components/layout/auth-layout.tsx
var import_jsx_runtime45 = require("react/jsx-runtime");
function AuthLayout({
  className,
  title,
  description,
  footer,
  graphic,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(
    "div",
    {
      className: cn(
        "grid min-h-screen grid-cols-1 bg-background",
        "lg:grid-cols-[1.1fr_0.9fr]",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "flex flex-col justify-center px-6 py-16 sm:px-12", children: /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "mx-auto w-full max-w-md space-y-6", children: [
          (title || description) && /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "space-y-2", children: [
            title && /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("h1", { className: "text-3xl font-bold text-[rgb(var(--nc-fg))]", children: title }),
            description && /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: "text-[rgb(var(--nc-fg-muted))]", children: description })
          ] }),
          children,
          footer && /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: footer })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "hidden items-center justify-center border-l border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.08)] p-12 text-[rgb(var(--nc-fg))] lg:flex", children: graphic != null ? graphic : /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)("div", { className: "max-w-sm space-y-4 text-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("h2", { className: "text-2xl font-semibold", children: "Crafted experiences" }),
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("p", { className: "text-[rgb(var(--nc-fg-muted))]", children: "Build authentication flows that feel premium and cohesive." })
        ] }) })
      ]
    }
  );
}

// src/components/layout/container.tsx
var import_jsx_runtime46 = require("react/jsx-runtime");
var sizeClasses3 = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl"
};
function Container({ className, size = "lg", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
    "div",
    {
      className: cn("mx-auto w-full px-4 sm:px-6 lg:px-8", sizeClasses3[size], className),
      ...props
    }
  );
}

// src/components/layout/grid.tsx
var import_jsx_runtime47 = require("react/jsx-runtime");
var colClasses = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  5: "grid-cols-1 md:grid-cols-2 lg:grid-cols-5",
  6: "grid-cols-1 md:grid-cols-3 lg:grid-cols-6"
};
var gapClasses = {
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
  xl: "gap-10"
};
function Grid({ className, columns = 3, gap = "md", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("div", { className: cn("grid", colClasses[columns], gapClasses[gap], className), ...props });
}

// src/theme/theme-context.tsx
var React24 = __toESM(require("react"), 1);
var import_jsx_runtime48 = require("react/jsx-runtime");
var THEME_NAMES = [
  "aurora",
  "ember",
  "ocean",
  "midnight",
  "cosmic"
];
var ThemeContext = React24.createContext(null);
var DEFAULT_THEME_KEY = "nextcraft-theme";
var DEFAULT_MODE_KEY = "nextcraft-mode";
function ThemeProvider({
  children,
  defaultTheme = "ocean",
  defaultMode = "system",
  storageKeyTheme = DEFAULT_THEME_KEY,
  storageKeyMode = DEFAULT_MODE_KEY
}) {
  const [theme, setTheme] = React24.useState(defaultTheme);
  const [mode, setMode] = React24.useState(defaultMode);
  React24.useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const storedTheme = window.localStorage.getItem(storageKeyTheme);
      const storedMode = window.localStorage.getItem(storageKeyMode);
      if (storedTheme) setTheme(storedTheme);
      if (storedMode) setMode(storedMode);
    } catch {
    }
  }, [storageKeyTheme, storageKeyMode]);
  React24.useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(storageKeyTheme, theme);
      window.localStorage.setItem(storageKeyMode, mode);
    } catch {
    }
  }, [theme, mode, storageKeyTheme, storageKeyMode]);
  React24.useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.dataset.ncTheme = theme;
    if (mode !== "system") {
      root.dataset.ncMode = mode;
      return;
    }
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const applySystem = () => {
      root.dataset.ncMode = mediaQuery.matches ? "dark" : "light";
    };
    applySystem();
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", applySystem);
      return () => mediaQuery.removeEventListener("change", applySystem);
    }
    mediaQuery.addListener(applySystem);
    return () => mediaQuery.removeListener(applySystem);
  }, [theme, mode]);
  const value = React24.useMemo(
    () => ({ theme, mode, setTheme, setMode }),
    [theme, mode]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(ThemeContext.Provider, { value, children });
}
function useTheme() {
  const context = React24.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

// src/components/theme-switcher.tsx
var import_jsx_runtime49 = require("react/jsx-runtime");
var MODE_OPTIONS = ["system", "light", "dark"];
function ThemeSwitcher({ className, showLabels = true, ...props }) {
  const { theme, mode, setTheme, setMode } = useTheme();
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
    "div",
    {
      className: cn(
        "flex flex-wrap items-center gap-3 rounded-2xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.08)] px-4 py-3 text-sm text-[rgb(var(--nc-fg))] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("label", { className: "flex items-center gap-2", children: [
          showLabels && /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("span", { className: "text-[rgb(var(--nc-fg-muted))]", children: "Theme" }),
          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
            "select",
            {
              className: "rounded-lg border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] px-3 py-1 text-[rgb(var(--nc-fg))] outline-none focus:ring-2 focus:ring-[rgb(var(--nc-accent-1)/0.5)]",
              value: theme,
              onChange: (event) => setTheme(event.target.value),
              children: THEME_NAMES.map((name) => /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("option", { value: name, className: "text-slate-900", children: name }, name))
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("label", { className: "flex items-center gap-2", children: [
          showLabels && /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("span", { className: "text-[rgb(var(--nc-fg-muted))]", children: "Mode" }),
          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
            "select",
            {
              className: "rounded-lg border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] px-3 py-1 text-[rgb(var(--nc-fg))] outline-none focus:ring-2 focus:ring-[rgb(var(--nc-accent-1)/0.5)]",
              value: mode,
              onChange: (event) => setMode(event.target.value),
              children: MODE_OPTIONS.map((value) => /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("option", { value, className: "text-slate-900", children: value }, value))
            }
          )
        ] })
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppShell,
  AppTemplate,
  AuthLayout,
  Breadcrumbs,
  Container,
  CraftAlert,
  CraftBadge,
  CraftButton,
  CraftCard,
  CraftCheckbox,
  CraftCommandPalette,
  CraftConfirmDialog,
  CraftCreateEditDrawer,
  CraftCurrencyInput,
  CraftDataTable,
  CraftDatePicker,
  CraftDrawer,
  CraftDropdownMenu,
  CraftEmptyState,
  CraftErrorState,
  CraftFilterBar,
  CraftForm,
  CraftFormBuilder,
  CraftFormField,
  CraftIcon,
  CraftIconProvider,
  CraftInput,
  CraftLink,
  CraftLoadingState,
  CraftModal,
  CraftNumberInput,
  CraftPagination,
  CraftPopover,
  CraftSelect,
  CraftSkeleton,
  CraftStatCard,
  CraftSubmitButton,
  CraftSwitch,
  CraftTableToolbar,
  CraftTabs,
  CraftTextarea,
  CraftToastHost,
  CraftTooltip,
  GlassCard,
  Grid,
  PageHeader,
  Sidebar,
  ThemeProvider,
  ThemeSwitcher,
  TopNav,
  layoutConfigSchema,
  useCraftToast,
  useTheme
});
//# sourceMappingURL=index.cjs.map