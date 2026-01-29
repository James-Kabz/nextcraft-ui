"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { cn } from "../utils/cn";
import { CraftIcon } from "../components/craft-icon";
const sizeClasses = {
  sm: "h-9 px-4 text-xs",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base"
};
const variantClasses = {
  solid: "bg-gradient-to-br from-[rgb(var(--nc-accent-1))] via-[rgb(var(--nc-accent-2))] to-[rgb(var(--nc-accent-3))] text-white shadow-[0_12px_30px_rgb(var(--nc-accent-1)/0.45)] hover:shadow-[0_16px_36px_rgb(var(--nc-accent-1)/0.6)] hover:scale-[1.02] active:scale-[0.98]",
  ghost: "bg-[color:rgb(var(--nc-surface)/0.12)] text-[rgb(var(--nc-fg))] hover:bg-[color:rgb(var(--nc-surface)/0.18)] backdrop-blur-sm border border-[rgb(var(--nc-border)/0.35)] hover:border-[color:rgb(var(--nc-border)/0.5)]",
  outline: "bg-transparent text-[color:rgb(var(--nc-accent-1))] border-2 border-[color:rgb(var(--nc-accent-1)/0.5)] hover:border-[color:rgb(var(--nc-accent-1))] hover:bg-[color:rgb(var(--nc-accent-1)/0.1)]",
  gradient: "bg-gradient-to-r from-[rgb(var(--nc-accent-1))] via-[rgb(var(--nc-accent-2))] to-[rgb(var(--nc-accent-3))] text-white shadow-[0_12px_30px_rgb(var(--nc-accent-2)/0.45)] hover:shadow-[0_16px_36px_rgb(var(--nc-accent-2)/0.6)] hover:scale-[1.02] active:scale-[0.98]"
};
const iconSizeClasses = {
  sm: "h-4 w-4",
  md: "h-4 w-4",
  lg: "h-5 w-5"
};
const spinnerSizeClasses = {
  sm: "h-4 w-4",
  md: "h-4 w-4",
  lg: "h-5 w-5"
};
function CraftButton({
  className,
  variant = "solid",
  size = "md",
  tone,
  disabled,
  glow = true,
  loading = false,
  loadingText,
  icon,
  children,
  ...props
}) {
  const isDisabled = disabled || loading;
  const iconClassName = iconSizeClasses[size];
  const spinnerClassName = spinnerSizeClasses[size];
  const iconNode = typeof icon === "string" ? /* @__PURE__ */ jsx(CraftIcon, { name: icon, className: iconClassName }) : icon ? /* @__PURE__ */ jsx("span", { className: cn("inline-flex", iconClassName), children: icon }) : null;
  return /* @__PURE__ */ jsxs(
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
      disabled: isDisabled,
      "aria-disabled": isDisabled,
      "aria-busy": loading,
      ...props,
      children: [
        loading && /* @__PURE__ */ jsxs(
          "svg",
          {
            className: cn("mr-2 animate-spin text-current", spinnerClassName),
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            children: [
              /* @__PURE__ */ jsx(
                "circle",
                {
                  className: "opacity-25",
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: "currentColor",
                  strokeWidth: "4"
                }
              ),
              /* @__PURE__ */ jsx(
                "path",
                {
                  className: "opacity-75",
                  fill: "none",
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeWidth: "4",
                  d: "M4 12a8 8 0 018-8"
                }
              )
            ]
          }
        ),
        !loading && iconNode,
        loading && loadingText ? /* @__PURE__ */ jsx("span", { children: loadingText }) : children
      ]
    }
  );
}
export {
  CraftButton
};
//# sourceMappingURL=craft-button.js.map