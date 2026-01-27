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
var craft_modal_exports = {};
__export(craft_modal_exports, {
  CraftModal: () => CraftModal
});
module.exports = __toCommonJS(craft_modal_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var React = __toESM(require("react"), 1);
var import_react_dom = require("react-dom");
var import_cn = require("../utils/cn");
const FOCUSABLE_SELECTORS = [
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
        className: (0, import_cn.cn)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CraftModal
});
//# sourceMappingURL=craft-modal.cjs.map