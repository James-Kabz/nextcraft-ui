import {
  CraftButton,
  CraftModal,
  CraftSubmitButton
} from "./chunk-6F7FN2ZF.js";
import {
  CraftInput
} from "./chunk-7SKDTIEK.js";
import {
  cn
} from "./chunk-VQ6T3HIX.js";

// src/components/glass-card.tsx
import { jsx } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx(
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
      children: /* @__PURE__ */ jsx("div", { className: "relative z-10", children })
    }
  );
}

// src/components/craft-badge.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var variantClasses = {
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
  return /* @__PURE__ */ jsx2(
    "span",
    {
      className: cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        variantClasses[variant],
        className
      ),
      "data-nc-theme": tone,
      ...props
    }
  );
}

// src/components/craft-alert.tsx
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
var variantClasses2 = {
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
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "rounded-2xl border p-4 text-[rgb(var(--nc-fg))] backdrop-blur-xl",
        variantClasses2[variant],
        className
      ),
      "data-nc-theme": tone,
      ...props,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
          icon && /* @__PURE__ */ jsx3("div", { className: "mt-1 text-[rgb(var(--nc-fg))]", children: icon }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            title && /* @__PURE__ */ jsx3("p", { className: "text-sm font-semibold", children: title }),
            description && /* @__PURE__ */ jsx3("p", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: description })
          ] })
        ] }),
        actions && /* @__PURE__ */ jsx3("div", { className: "mt-3 flex flex-wrap gap-2", children: actions })
      ]
    }
  );
}

// src/components/craft-error-state.tsx
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs2(
    "div",
    {
      className: cn(
        "rounded-3xl border border-[rgb(var(--nc-border)/0.35)] bg-[rgb(var(--nc-surface)/0.12)] p-6 text-[rgb(var(--nc-fg))] shadow-[0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl",
        className
      ),
      "data-nc-theme": tone,
      ...props,
      children: [
        /* @__PURE__ */ jsxs2("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx4("h3", { className: "text-lg font-semibold", children: title }),
          /* @__PURE__ */ jsx4("p", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: description })
        ] }),
        /* @__PURE__ */ jsx4("div", { className: "mt-4", children: action != null ? action : onAction && /* @__PURE__ */ jsx4(CraftButton, { size: "sm", onClick: onAction, children: actionLabel }) })
      ]
    }
  );
}

// src/components/craft-loading-state.tsx
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
var sizeClasses = {
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
  return /* @__PURE__ */ jsxs3(
    "div",
    {
      className: cn("flex items-center gap-3 text-[rgb(var(--nc-fg))]", className),
      "data-nc-theme": tone,
      ...props,
      children: [
        /* @__PURE__ */ jsx5(
          "span",
          {
            className: cn(
              "inline-block animate-spin rounded-full border-[rgb(var(--nc-accent-1)/0.25)] border-t-[rgb(var(--nc-accent-1))]",
              sizeClasses[size]
            ),
            "aria-hidden": "true"
          }
        ),
        label && /* @__PURE__ */ jsx5("span", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: label })
      ]
    }
  );
}

// src/components/craft-card.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx6(
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
      children: /* @__PURE__ */ jsx6("div", { className: "relative z-10", children })
    }
  );
}

// src/components/craft-drawer.tsx
import * as React from "react";
import { createPortal } from "react-dom";
import { Fragment, jsx as jsx7, jsxs as jsxs4 } from "react/jsx-runtime";
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
  React.useEffect(() => {
    if (!isOpen) return;
    const handleKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, setOpen]);
  const content = isOpen ? /* @__PURE__ */ jsxs4("div", { className: "fixed inset-0 z-50 overflow-hidden", children: [
    /* @__PURE__ */ jsx7(
      "div",
      {
        className: "absolute inset-0 backdrop-blur-sm",
        onClick: () => setOpen(false)
      }
    ),
    /* @__PURE__ */ jsxs4(
      "div",
      {
        className: cn(
          "absolute top-0 h-full w-full max-w-md border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] text-[rgb(var(--nc-fg))] shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl",
          side === "right" ? "right-0" : "left-0",
          className
        ),
        "data-nc-theme": tone,
        children: [
          /* @__PURE__ */ jsxs4("div", { className: "flex items-center justify-between border-b border-[rgb(var(--nc-border)/0.3)] p-6", children: [
            title && /* @__PURE__ */ jsx7("h3", { className: "text-xl font-semibold", children: title }),
            /* @__PURE__ */ jsx7(
              "button",
              {
                className: "rounded-full border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] p-2 text-[rgb(var(--nc-fg-soft))] transition hover:text-[rgb(var(--nc-fg))]",
                onClick: () => setOpen(false),
                "aria-label": "Close",
                children: /* @__PURE__ */ jsx7("svg", { viewBox: "0 0 20 20", className: "h-4 w-4", fill: "currentColor", children: /* @__PURE__ */ jsx7("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" }) })
              }
            )
          ] }),
          /* @__PURE__ */ jsx7("div", { className: "p-6 space-y-4 overflow-y-auto h-[calc(100%-5.5rem)]", children }),
          footer && /* @__PURE__ */ jsx7("div", { className: "border-t border-[rgb(var(--nc-border)/0.3)] p-6", children: footer })
        ]
      }
    )
  ] }) : null;
  return /* @__PURE__ */ jsxs4(Fragment, { children: [
    trigger && /* @__PURE__ */ jsx7(
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
    typeof document !== "undefined" && content ? createPortal(content, document.body) : content
  ] });
}

// src/components/craft-tabs.tsx
import * as React2 from "react";
import { jsx as jsx8, jsxs as jsxs5 } from "react/jsx-runtime";
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
  const [uncontrolledValue, setUncontrolledValue] = React2.useState(
    defaultValue != null ? defaultValue : fallback
  );
  const isControlled = value !== void 0;
  const activeValue = isControlled ? value : uncontrolledValue;
  const setValue = React2.useCallback(
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
  return /* @__PURE__ */ jsxs5("div", { className: cn("space-y-4", className), "data-nc-theme": tone, children: [
    /* @__PURE__ */ jsx8(
      "div",
      {
        className: "inline-flex flex-wrap items-center gap-2 rounded-full border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.08)] p-2",
        role: "tablist",
        onKeyDown,
        children: tabs.map((tab) => /* @__PURE__ */ jsx8(
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
    /* @__PURE__ */ jsx8("div", { className: "rounded-2xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.08)] p-4 text-[rgb(var(--nc-fg))]", children: panels[activeValue] })
  ] });
}

// src/components/craft-tooltip.tsx
import * as React3 from "react";
import { jsx as jsx9, jsxs as jsxs6 } from "react/jsx-runtime";
function CraftTooltip({ content, tone, children, side = "top" }) {
  const [open, setOpen] = React3.useState(false);
  return /* @__PURE__ */ jsxs6(
    "span",
    {
      className: "relative inline-flex",
      onMouseEnter: () => setOpen(true),
      onMouseLeave: () => setOpen(false),
      onFocus: () => setOpen(true),
      onBlur: () => setOpen(false),
      children: [
        children,
        /* @__PURE__ */ jsx9(
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
import * as React4 from "react";
import { jsx as jsx10, jsxs as jsxs7 } from "react/jsx-runtime";
var variantClasses3 = {
  info: "border-[color:rgb(var(--nc-accent-1)/0.4)]",
  success: "border-emerald-400/40",
  warning: "border-amber-400/40",
  error: "border-rose-400/40"
};
function useCraftToast() {
  const [toasts, setToasts] = React4.useState([]);
  const push = React4.useCallback((toast) => {
    const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    setToasts((prev) => [...prev, { ...toast, id }]);
    return id;
  }, []);
  const remove = React4.useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);
  return { toasts, push, remove };
}
function CraftToastHost({ toasts, onDismiss, tone }) {
  return /* @__PURE__ */ jsx10(
    "div",
    {
      className: "fixed right-6 top-6 z-50 flex w-full max-w-sm flex-col gap-3",
      "data-nc-theme": tone,
      children: toasts.map((toast) => {
        var _a;
        return /* @__PURE__ */ jsx10(
          "div",
          {
            className: cn(
              "rounded-2xl border bg-[rgb(var(--nc-surface)/0.12)] p-4 text-[rgb(var(--nc-fg))] shadow-[0_15px_35px_rgba(0,0,0,0.35)] backdrop-blur-xl",
              variantClasses3[(_a = toast.variant) != null ? _a : "info"]
            ),
            children: /* @__PURE__ */ jsxs7("div", { className: "flex items-start justify-between gap-4", children: [
              /* @__PURE__ */ jsxs7("div", { children: [
                /* @__PURE__ */ jsx10("p", { className: "text-sm font-semibold", children: toast.title }),
                toast.description && /* @__PURE__ */ jsx10("p", { className: "text-xs text-[rgb(var(--nc-fg-muted))]", children: toast.description })
              ] }),
              /* @__PURE__ */ jsx10(
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
import { jsx as jsx11 } from "react/jsx-runtime";
function CraftSkeleton({ className, tone, ...props }) {
  return /* @__PURE__ */ jsx11(
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
import { jsx as jsx12, jsxs as jsxs8 } from "react/jsx-runtime";
function CraftEmptyState({
  className,
  tone,
  title,
  description,
  icon,
  action,
  ...props
}) {
  return /* @__PURE__ */ jsxs8(
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
        icon && /* @__PURE__ */ jsx12("div", { className: "mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgb(var(--nc-accent-1)/0.2)] text-[rgb(var(--nc-accent-1))]", children: icon }),
        /* @__PURE__ */ jsx12("h3", { className: "text-xl font-semibold", children: title }),
        description && /* @__PURE__ */ jsx12("p", { className: "mt-2 text-sm text-[rgb(var(--nc-fg-muted))]", children: description }),
        action && /* @__PURE__ */ jsx12("div", { className: "mt-6 flex justify-center", children: action })
      ]
    }
  );
}

// src/components/craft-popover.tsx
import * as React5 from "react";
import { jsx as jsx13, jsxs as jsxs9 } from "react/jsx-runtime";
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
  const [uncontrolledOpen, setUncontrolledOpen] = React5.useState(defaultOpen);
  const isControlled = typeof open === "boolean";
  const isOpen = isControlled ? open : uncontrolledOpen;
  const rootRef = React5.useRef(null);
  const setOpen = React5.useCallback(
    (next) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange == null ? void 0 : onOpenChange(next);
    },
    [isControlled, onOpenChange]
  );
  React5.useEffect(() => {
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
  const triggerNode = React5.isValidElement(trigger) ? React5.cloneElement(trigger, {
    onClick: (event) => {
      const handler = trigger.props.onClick;
      handler == null ? void 0 : handler(event);
      if (!event.defaultPrevented) setOpen(!isOpen);
    },
    "aria-expanded": isOpen,
    "aria-haspopup": "dialog"
  }) : /* @__PURE__ */ jsx13(
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
  return /* @__PURE__ */ jsxs9("div", { className: cn("relative inline-flex", className), ref: rootRef, children: [
    triggerNode,
    isOpen && /* @__PURE__ */ jsx13(
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
import * as React6 from "react";
import { Fragment as Fragment2, jsx as jsx14, jsxs as jsxs10 } from "react/jsx-runtime";
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
  const [uncontrolledOpen, setUncontrolledOpen] = React6.useState(defaultOpen);
  const isControlled = typeof open === "boolean";
  const isOpen = isControlled ? open : uncontrolledOpen;
  const setOpen = React6.useCallback(
    (next) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange == null ? void 0 : onOpenChange(next);
    },
    [isControlled, onOpenChange]
  );
  const menuContent = content != null ? content : items.length ? /* @__PURE__ */ jsx14("div", { className: cn("space-y-1", menuClassName), role: "menu", children: items.map((item, index) => {
    var _a;
    const key = (_a = item.id) != null ? _a : `${index}-${String(item.label)}`;
    const itemClasses = cn(
      "flex w-full items-start gap-3 rounded-xl px-3 py-2 text-left text-sm transition",
      item.disabled ? "cursor-not-allowed text-[rgb(var(--nc-fg-soft))] opacity-60" : "text-[rgb(var(--nc-fg))] hover:bg-[rgb(var(--nc-surface)/0.12)]"
    );
    const contentNode = /* @__PURE__ */ jsxs10(Fragment2, { children: [
      item.icon && /* @__PURE__ */ jsx14("span", { className: "mt-0.5", children: item.icon }),
      /* @__PURE__ */ jsxs10("span", { className: "flex-1", children: [
        /* @__PURE__ */ jsx14("span", { className: "block font-medium", children: item.label }),
        item.description && /* @__PURE__ */ jsx14("span", { className: "block text-xs text-[rgb(var(--nc-fg-muted))]", children: item.description })
      ] })
    ] });
    if (item.href) {
      return /* @__PURE__ */ jsx14(
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
    return /* @__PURE__ */ jsx14(
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
  return /* @__PURE__ */ jsx14(
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
import * as React7 from "react";
import { jsx as jsx15, jsxs as jsxs11 } from "react/jsx-runtime";
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
  const [uncontrolledOpen, setUncontrolledOpen] = React7.useState(defaultOpen);
  const isControlled = typeof open === "boolean";
  const isOpen = isControlled ? open : uncontrolledOpen;
  const [query, setQuery] = React7.useState("");
  const setOpen = React7.useCallback(
    (next) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange == null ? void 0 : onOpenChange(next);
    },
    [isControlled, onOpenChange]
  );
  const filtered = React7.useMemo(() => {
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
  React7.useEffect(() => {
    if (!isOpen) setQuery("");
  }, [isOpen]);
  return /* @__PURE__ */ jsx15(
    CraftModal,
    {
      open: isOpen,
      onOpenChange: setOpen,
      trigger,
      title,
      tone,
      className: cn("max-w-xl", className),
      children: /* @__PURE__ */ jsxs11("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx15(
          CraftInput,
          {
            type: "search",
            placeholder,
            value: query,
            onChange: (event) => setQuery(event.target.value)
          }
        ),
        /* @__PURE__ */ jsxs11("div", { className: "space-y-2", children: [
          filtered.length === 0 && /* @__PURE__ */ jsx15("div", { className: "rounded-2xl border border-[rgb(var(--nc-border)/0.35)] bg-[rgb(var(--nc-surface)/0.12)] p-4 text-sm text-[rgb(var(--nc-fg-muted))]", children: emptyText }),
          filtered.map((item) => /* @__PURE__ */ jsxs11(
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
                item.icon && /* @__PURE__ */ jsx15("span", { className: "mt-1", children: item.icon }),
                /* @__PURE__ */ jsxs11("span", { children: [
                  /* @__PURE__ */ jsx15("span", { className: "block text-sm font-semibold", children: item.label }),
                  item.description && /* @__PURE__ */ jsx15("span", { className: "block text-xs text-[rgb(var(--nc-fg-muted))]", children: item.description })
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
import Link from "next/link";
import { jsx as jsx16 } from "react/jsx-runtime";
var variantClasses4 = {
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
  return /* @__PURE__ */ jsx16(
    Link,
    {
      className: cn(
        "transition-colors",
        variantClasses4[variant],
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
import { jsx as jsx17, jsxs as jsxs12 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs12(
    CraftCard,
    {
      className: cn("space-y-3", className),
      tone,
      ...props,
      children: [
        /* @__PURE__ */ jsxs12("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx17("p", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: label }),
          icon && /* @__PURE__ */ jsx17("div", { className: "text-[rgb(var(--nc-fg-soft))]", children: icon })
        ] }),
        /* @__PURE__ */ jsx17("p", { className: "text-3xl font-semibold", children: value }),
        /* @__PURE__ */ jsxs12("div", { className: "flex items-center justify-between text-xs", children: [
          delta && /* @__PURE__ */ jsx17("span", { className: trendClasses[trend], children: delta }),
          footer && /* @__PURE__ */ jsx17("span", { className: "text-[rgb(var(--nc-fg-muted))]", children: footer })
        ] })
      ]
    }
  );
}

// src/components/craft-confirm-dialog.tsx
import * as React8 from "react";
import { jsx as jsx18, jsxs as jsxs13 } from "react/jsx-runtime";
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
  const [uncontrolledOpen, setUncontrolledOpen] = React8.useState(defaultOpen);
  const isControlled = typeof open === "boolean";
  const isOpen = isControlled ? open : uncontrolledOpen;
  const setOpen = React8.useCallback(
    (next) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange == null ? void 0 : onOpenChange(next);
    },
    [isControlled, onOpenChange]
  );
  const [isLoading, setIsLoading] = React8.useState(false);
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
  return /* @__PURE__ */ jsx18(
    CraftModal,
    {
      open: isOpen,
      onOpenChange: setOpen,
      trigger,
      title,
      description,
      tone,
      className: cn("max-w-md", className),
      footer: /* @__PURE__ */ jsxs13("div", { className: "flex flex-wrap items-center justify-end gap-3", children: [
        /* @__PURE__ */ jsx18(
          CraftButton,
          {
            type: "button",
            variant: "ghost",
            onClick: () => setOpen(false),
            children: cancelLabel
          }
        ),
        /* @__PURE__ */ jsx18(
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
      children: /* @__PURE__ */ jsx18("div", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: description })
    }
  );
}

// src/components/craft-create-edit-drawer.tsx
import * as React9 from "react";
import { FormProvider } from "react-hook-form";
import { jsx as jsx19, jsxs as jsxs14 } from "react/jsx-runtime";
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
  const [uncontrolledOpen, setUncontrolledOpen] = React9.useState(defaultOpen);
  const isControlled = typeof open === "boolean";
  const isOpen = isControlled ? open : uncontrolledOpen;
  const setOpen = React9.useCallback(
    (next) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange == null ? void 0 : onOpenChange(next);
    },
    [isControlled, onOpenChange]
  );
  const formId = React9.useId();
  const handleSubmit = form.handleSubmit(async (values) => {
    await onSubmit(values);
    if (closeOnSubmit) setOpen(false);
  });
  const resolvedTitle = title != null ? title : mode === "create" ? "Create item" : "Edit item";
  const resolvedSubmitLabel = submitLabel != null ? submitLabel : mode === "create" ? "Create" : "Save changes";
  const footerContent = footer != null ? footer : /* @__PURE__ */ jsxs14("div", { className: "flex flex-wrap items-center justify-end gap-3", children: [
    /* @__PURE__ */ jsx19(CraftButton, { type: "button", variant: "ghost", onClick: () => setOpen(false), children: cancelLabel }),
    /* @__PURE__ */ jsx19(
      CraftSubmitButton,
      {
        form: formId,
        disableWhenInvalid: disableSubmitWhenInvalid,
        children: resolvedSubmitLabel
      }
    )
  ] });
  return /* @__PURE__ */ jsx19(FormProvider, { ...form, children: /* @__PURE__ */ jsx19(
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
      children: /* @__PURE__ */ jsxs14("form", { id: formId, onSubmit: handleSubmit, className: "space-y-5", children: [
        description && /* @__PURE__ */ jsx19("p", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: description }),
        children
      ] })
    }
  ) });
}

export {
  GlassCard,
  CraftBadge,
  CraftAlert,
  CraftErrorState,
  CraftLoadingState,
  CraftCard,
  CraftDrawer,
  CraftTabs,
  CraftTooltip,
  useCraftToast,
  CraftToastHost,
  CraftSkeleton,
  CraftEmptyState,
  CraftPopover,
  CraftDropdownMenu,
  CraftCommandPalette,
  CraftLink,
  CraftStatCard,
  CraftConfirmDialog,
  CraftCreateEditDrawer
};
//# sourceMappingURL=chunk-L6I5CN5M.js.map