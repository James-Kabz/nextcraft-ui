import {
  CraftIcon
} from "./chunk-UCYYHYKL.js";
import {
  cn
} from "./chunk-VQ6T3HIX.js";

// src/components/layout/app-shell.tsx
import { jsx, jsxs } from "react/jsx-runtime";
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

// src/components/layout/breadcrumbs.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function Breadcrumbs({ className, items, ...props }) {
  return /* @__PURE__ */ jsx2("nav", { className: cn("flex items-center text-sm text-[rgb(var(--nc-fg-muted))]", className), ...props, children: items.map((item, index) => {
    const content = item.href ? /* @__PURE__ */ jsx2("a", { href: item.href, className: "transition hover:text-[rgb(var(--nc-fg))]", children: item.label }) : /* @__PURE__ */ jsx2("span", { className: "text-[rgb(var(--nc-fg))]", children: item.label });
    return /* @__PURE__ */ jsxs2("span", { className: "flex items-center", children: [
      content,
      index < items.length - 1 && /* @__PURE__ */ jsx2("span", { className: "mx-2 text-[rgb(var(--nc-fg-soft))]", children: "/" })
    ] }, `${item.label}-${index}`);
  }) });
}

// src/components/layout/sidebar.tsx
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
function Sidebar({ className, title, items, footer, ...props }) {
  return /* @__PURE__ */ jsxs3(
    "aside",
    {
      className: cn(
        "flex h-full w-full flex-col gap-6 rounded-3xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.08)] p-6 text-[rgb(var(--nc-fg))] backdrop-blur-xl",
        className
      ),
      ...props,
      children: [
        title && /* @__PURE__ */ jsx3("div", { className: "text-lg font-semibold", children: title }),
        /* @__PURE__ */ jsx3("nav", { className: "flex flex-col gap-2", children: items.map((item, index) => {
          var _a;
          return /* @__PURE__ */ jsxs3(
            "a",
            {
              href: (_a = item.href) != null ? _a : "#",
              className: cn(
                "flex items-center gap-3 rounded-2xl px-3 py-2 text-sm transition",
                item.active ? "bg-[rgb(var(--nc-accent-1)/0.25)] text-[rgb(var(--nc-fg))]" : "text-[rgb(var(--nc-fg-muted))] hover:bg-[rgb(var(--nc-surface)/0.12)] hover:text-[rgb(var(--nc-fg))]"
              ),
              children: [
                item.icon,
                /* @__PURE__ */ jsx3("span", { children: item.label })
              ]
            },
            `${item.label}-${index}`
          );
        }) }),
        footer && /* @__PURE__ */ jsx3("div", { className: "mt-auto pt-4", children: footer })
      ]
    }
  );
}

// src/components/layout/top-nav.tsx
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
function TopNav({ className, title, actions, breadcrumb, ...props }) {
  return /* @__PURE__ */ jsxs4(
    "header",
    {
      className: cn(
        "flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.08)] px-6 py-4 text-[rgb(var(--nc-fg))] backdrop-blur-xl",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxs4("div", { className: "space-y-1", children: [
          breadcrumb,
          title && /* @__PURE__ */ jsx4("div", { className: "text-xl font-semibold", children: title })
        ] }),
        actions && /* @__PURE__ */ jsx4("div", { className: "flex flex-wrap gap-3", children: actions })
      ]
    }
  );
}

// src/components/layout/app-template.tsx
import * as React from "react";
import { jsx as jsx5 } from "react/jsx-runtime";
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
  const buildIcon = React.useCallback(
    (name) => {
      if (!name) return void 0;
      if (resolveIcon) return resolveIcon(name);
      if (icons == null ? void 0 : icons[name]) return icons[name];
      return /* @__PURE__ */ jsx5(CraftIcon, { name, useLucide: lucideFallback });
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
  const breadcrumbNode = headerBreadcrumb != null ? headerBreadcrumb : (headerConfig == null ? void 0 : headerConfig.breadcrumb) ? /* @__PURE__ */ jsx5(Breadcrumbs, { items: headerConfig.breadcrumb }) : null;
  const sidebarFooterNode = sidebarFooter != null ? sidebarFooter : (sidebarConfig == null ? void 0 : sidebarConfig.footerText) ? /* @__PURE__ */ jsx5("div", { className: "text-xs text-[rgb(var(--nc-fg-muted))]", children: sidebarConfig.footerText }) : null;
  return /* @__PURE__ */ jsx5(
    AppShell,
    {
      sidebar: sidebarConfig && sidebarItems ? /* @__PURE__ */ jsx5(
        Sidebar,
        {
          title: sidebarConfig.title,
          items: sidebarItems,
          footer: sidebarFooterNode
        }
      ) : void 0,
      topNav: headerConfig ? /* @__PURE__ */ jsx5(
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
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
function PageHeader({
  className,
  title,
  description,
  actions,
  ...props
}) {
  return /* @__PURE__ */ jsxs5(
    "div",
    {
      className: cn("flex flex-wrap items-start justify-between gap-6", className),
      ...props,
      children: [
        /* @__PURE__ */ jsxs5("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx6("h1", { className: "text-3xl font-bold text-[rgb(var(--nc-fg))]", children: title }),
          description && /* @__PURE__ */ jsx6("p", { className: "text-[rgb(var(--nc-fg-muted))]", children: description })
        ] }),
        actions && /* @__PURE__ */ jsx6("div", { className: "flex flex-wrap gap-3", children: actions })
      ]
    }
  );
}

// src/components/layout/auth-layout.tsx
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
function AuthLayout({
  className,
  title,
  description,
  footer,
  graphic,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs6(
    "div",
    {
      className: cn(
        "grid min-h-screen grid-cols-1 bg-background",
        "lg:grid-cols-[1.1fr_0.9fr]",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx7("div", { className: "flex flex-col justify-center px-6 py-16 sm:px-12", children: /* @__PURE__ */ jsxs6("div", { className: "mx-auto w-full max-w-md space-y-6", children: [
          (title || description) && /* @__PURE__ */ jsxs6("div", { className: "space-y-2", children: [
            title && /* @__PURE__ */ jsx7("h1", { className: "text-3xl font-bold text-[rgb(var(--nc-fg))]", children: title }),
            description && /* @__PURE__ */ jsx7("p", { className: "text-[rgb(var(--nc-fg-muted))]", children: description })
          ] }),
          children,
          footer && /* @__PURE__ */ jsx7("div", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: footer })
        ] }) }),
        /* @__PURE__ */ jsx7("div", { className: "hidden items-center justify-center border-l border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.08)] p-12 text-[rgb(var(--nc-fg))] lg:flex", children: graphic != null ? graphic : /* @__PURE__ */ jsxs6("div", { className: "max-w-sm space-y-4 text-center", children: [
          /* @__PURE__ */ jsx7("h2", { className: "text-2xl font-semibold", children: "Crafted experiences" }),
          /* @__PURE__ */ jsx7("p", { className: "text-[rgb(var(--nc-fg-muted))]", children: "Build authentication flows that feel premium and cohesive." })
        ] }) })
      ]
    }
  );
}

// src/components/layout/container.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
var sizeClasses = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl"
};
function Container({ className, size = "lg", ...props }) {
  return /* @__PURE__ */ jsx8(
    "div",
    {
      className: cn("mx-auto w-full px-4 sm:px-6 lg:px-8", sizeClasses[size], className),
      ...props
    }
  );
}

// src/components/layout/grid.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx9("div", { className: cn("grid", colClasses[columns], gapClasses[gap], className), ...props });
}

export {
  AppShell,
  Breadcrumbs,
  Sidebar,
  TopNav,
  AppTemplate,
  layoutConfigSchema,
  PageHeader,
  AuthLayout,
  Container,
  Grid
};
//# sourceMappingURL=chunk-VGJZLNFX.js.map