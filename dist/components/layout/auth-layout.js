import { jsx, jsxs } from "react/jsx-runtime";
import { cn } from "@/utils/cn";
function AuthLayout({
  className,
  title,
  description,
  footer,
  graphic,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "grid min-h-screen grid-cols-1 bg-background",
        "lg:grid-cols-[1.1fr_0.9fr]",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("div", { className: "flex flex-col justify-center px-6 py-16 sm:px-12", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full max-w-md space-y-6", children: [
          (title || description) && /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            title && /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-[rgb(var(--nc-fg))]", children: title }),
            description && /* @__PURE__ */ jsx("p", { className: "text-[rgb(var(--nc-fg-muted))]", children: description })
          ] }),
          children,
          footer && /* @__PURE__ */ jsx("div", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: footer })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "hidden items-center justify-center border-l border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.08)] p-12 text-[rgb(var(--nc-fg))] lg:flex", children: graphic != null ? graphic : /* @__PURE__ */ jsxs("div", { className: "max-w-sm space-y-4 text-center", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold", children: "Crafted experiences" }),
          /* @__PURE__ */ jsx("p", { className: "text-[rgb(var(--nc-fg-muted))]", children: "Build authentication flows that feel premium and cohesive." })
        ] }) })
      ]
    }
  );
}
export {
  AuthLayout
};
//# sourceMappingURL=auth-layout.js.map