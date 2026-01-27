import { jsx } from "react/jsx-runtime";
import Link from "next/link";
import { cn } from "../utils/cn";
const variantClasses = {
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
  return /* @__PURE__ */ jsx(
    Link,
    {
      className: cn(
        "transition-colors",
        variantClasses[variant],
        underline && "underline underline-offset-4",
        className
      ),
      "data-nc-theme": tone,
      ...props,
      children
    }
  );
}
export {
  CraftLink
};
//# sourceMappingURL=craft-link.js.map