import { jsx, jsxs } from "react/jsx-runtime";
import { cn } from "@/utils/cn";
function AppShell({ className, sidebar, topNav, children, ...props }) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "grid min-h-screen grid-cols-1 gap-6 bg-background p-6 lg:grid-cols-[260px_1fr]",
        className
      ),
      ...props,
      children: [
        sidebar && /* @__PURE__ */ jsx("div", { className: "h-full lg:sticky lg:top-6 lg:self-start lg:max-h-[calc(100vh-3rem)] lg:overflow-y-auto", children: sidebar }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
          topNav && /* @__PURE__ */ jsx("div", { className: "lg:sticky lg:top-6 lg:z-20", children: topNav }),
          /* @__PURE__ */ jsx("main", { className: "flex-1", children })
        ] })
      ]
    }
  );
}
export {
  AppShell
};
//# sourceMappingURL=app-shell.js.map