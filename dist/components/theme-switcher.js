"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { cn } from "../utils/cn";
import { THEME_NAMES, useTheme } from "@/theme/theme-context";
const MODE_OPTIONS = ["system", "light", "dark"];
function ThemeSwitcher({ className, showLabels = true, ...props }) {
  const { theme, mode, setTheme, setMode } = useTheme();
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "flex flex-wrap items-center gap-3 rounded-2xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.08)] px-4 py-3 text-sm text-[rgb(var(--nc-fg))] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-2", children: [
          showLabels && /* @__PURE__ */ jsx("span", { className: "text-[rgb(var(--nc-fg-muted))]", children: "Theme" }),
          /* @__PURE__ */ jsx(
            "select",
            {
              className: "rounded-lg border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] px-3 py-1 text-[rgb(var(--nc-fg))] outline-none focus:ring-2 focus:ring-[rgb(var(--nc-accent-1)/0.5)]",
              value: theme,
              onChange: (event) => setTheme(event.target.value),
              children: THEME_NAMES.map((name) => /* @__PURE__ */ jsx("option", { value: name, className: "text-slate-900", children: name }, name))
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-2", children: [
          showLabels && /* @__PURE__ */ jsx("span", { className: "text-[rgb(var(--nc-fg-muted))]", children: "Mode" }),
          /* @__PURE__ */ jsx(
            "select",
            {
              className: "rounded-lg border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.12)] px-3 py-1 text-[rgb(var(--nc-fg))] outline-none focus:ring-2 focus:ring-[rgb(var(--nc-accent-1)/0.5)]",
              value: mode,
              onChange: (event) => setMode(event.target.value),
              children: MODE_OPTIONS.map((value) => /* @__PURE__ */ jsx("option", { value, className: "text-slate-900", children: value }, value))
            }
          )
        ] })
      ]
    }
  );
}
export {
  ThemeSwitcher
};
//# sourceMappingURL=theme-switcher.js.map