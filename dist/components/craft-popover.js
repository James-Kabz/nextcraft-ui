"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../utils/cn";
const alignClasses = {
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
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
  const isControlled = typeof open === "boolean";
  const isOpen = isControlled ? open : uncontrolledOpen;
  const rootRef = React.useRef(null);
  const setOpen = React.useCallback(
    (next) => {
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange == null ? void 0 : onOpenChange(next);
    },
    [isControlled, onOpenChange]
  );
  React.useEffect(() => {
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
  const triggerNode = React.isValidElement(trigger) ? React.cloneElement(trigger, {
    onClick: (event) => {
      const handler = trigger.props.onClick;
      handler == null ? void 0 : handler(event);
      if (!event.defaultPrevented) setOpen(!isOpen);
    },
    "aria-expanded": isOpen,
    "aria-haspopup": "dialog"
  }) : /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsxs("div", { className: cn("relative inline-flex", className), ref: rootRef, children: [
    triggerNode,
    isOpen && /* @__PURE__ */ jsx(
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
export {
  CraftPopover
};
//# sourceMappingURL=craft-popover.js.map