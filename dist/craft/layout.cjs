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

// src/craft/layout.ts
var layout_exports = {};
__export(layout_exports, {
  AppShell: () => AppShell,
  AppTemplate: () => AppTemplate,
  AuthLayout: () => AuthLayout,
  Breadcrumbs: () => Breadcrumbs,
  Container: () => Container,
  Grid: () => Grid,
  PageHeader: () => PageHeader,
  Sidebar: () => Sidebar,
  TopNav: () => TopNav,
  layoutConfigSchema: () => layoutConfigSchema
});
module.exports = __toCommonJS(layout_exports);

// src/utils/cn.ts
function cn(...values) {
  return values.filter(Boolean).join(" ");
}

// src/components/layout/app-shell.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function AppShell({ className, sidebar, topNav, children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      className: cn(
        "grid min-h-screen grid-cols-1 gap-6 bg-background p-6 lg:grid-cols-[260px_1fr]",
        className
      ),
      ...props,
      children: [
        sidebar && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full lg:sticky lg:top-6 lg:self-start lg:max-h-[calc(100vh-3rem)] lg:overflow-y-auto", children: sidebar }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-col gap-6", children: [
          topNav && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "lg:sticky lg:top-6 lg:z-20", children: topNav }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { className: "flex-1", children })
        ] })
      ]
    }
  );
}

// src/components/layout/app-template.tsx
var React2 = __toESM(require("react"), 1);

// src/components/craft-icon.tsx
var React = __toESM(require("react"), 1);
var import_dynamic = require("lucide-react/dynamic");
var import_jsx_runtime2 = require("react/jsx-runtime");
var CraftIconContext = React.createContext(null);
function CraftIcon({
  name,
  className,
  "aria-label": ariaLabel,
  icons,
  useLucide = true
}) {
  var _a;
  const registry = icons != null ? icons : React.useContext(CraftIconContext);
  const icon = registry == null ? void 0 : registry[name];
  if (!icon) {
    if (!useLucide) return null;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_dynamic.DynamicIcon,
      {
        name,
        className,
        "aria-hidden": ariaLabel ? void 0 : true,
        "aria-label": ariaLabel
      }
    );
  }
  if (React.isValidElement(icon)) {
    return React.cloneElement(icon, {
      className: cn((_a = icon.props) == null ? void 0 : _a.className, className),
      "aria-hidden": ariaLabel ? void 0 : true,
      "aria-label": ariaLabel
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className, "aria-label": ariaLabel, children: icon });
}

// src/components/layout/breadcrumbs.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function Breadcrumbs({ className, items, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("nav", { className: cn("flex items-center text-sm text-[rgb(var(--nc-fg-muted))]", className), ...props, children: items.map((item, index) => {
    const content = item.href ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", { href: item.href, className: "transition hover:text-[rgb(var(--nc-fg))]", children: item.label }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "text-[rgb(var(--nc-fg))]", children: item.label });
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "flex items-center", children: [
      content,
      index < items.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "mx-2 text-[rgb(var(--nc-fg-soft))]", children: "/" })
    ] }, `${item.label}-${index}`);
  }) });
}

// src/components/layout/sidebar.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function Sidebar({ className, title, items, footer, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    "aside",
    {
      className: cn(
        "flex h-full w-full flex-col gap-6 rounded-3xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.08)] p-6 text-[rgb(var(--nc-fg))] backdrop-blur-xl",
        className
      ),
      ...props,
      children: [
        title && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "text-lg font-semibold", children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("nav", { className: "flex flex-col gap-2", children: items.map((item, index) => {
          var _a;
          return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
            "a",
            {
              href: (_a = item.href) != null ? _a : "#",
              className: cn(
                "flex items-center gap-3 rounded-2xl px-3 py-2 text-sm transition",
                item.active ? "bg-[rgb(var(--nc-accent-1)/0.25)] text-[rgb(var(--nc-fg))]" : "text-[rgb(var(--nc-fg-muted))] hover:bg-[rgb(var(--nc-surface)/0.12)] hover:text-[rgb(var(--nc-fg))]"
              ),
              children: [
                item.icon,
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: item.label })
              ]
            },
            `${item.label}-${index}`
          );
        }) }),
        footer && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "mt-auto pt-4", children: footer })
      ]
    }
  );
}

// src/components/layout/top-nav.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function TopNav({ className, title, actions, breadcrumb, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    "header",
    {
      className: cn(
        "flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.08)] px-6 py-4 text-[rgb(var(--nc-fg))] backdrop-blur-xl",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "space-y-1", children: [
          breadcrumb,
          title && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "text-xl font-semibold", children: title })
        ] }),
        actions && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "flex flex-wrap gap-3", children: actions })
      ]
    }
  );
}

// src/components/layout/app-template.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
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
  const buildIcon = React2.useCallback(
    (name) => {
      if (!name) return void 0;
      if (resolveIcon) return resolveIcon(name);
      if (icons == null ? void 0 : icons[name]) return icons[name];
      return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CraftIcon, { name, useLucide: lucideFallback });
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
  const breadcrumbNode = headerBreadcrumb != null ? headerBreadcrumb : (headerConfig == null ? void 0 : headerConfig.breadcrumb) ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Breadcrumbs, { items: headerConfig.breadcrumb }) : null;
  const sidebarFooterNode = sidebarFooter != null ? sidebarFooter : (sidebarConfig == null ? void 0 : sidebarConfig.footerText) ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "text-xs text-[rgb(var(--nc-fg-muted))]", children: sidebarConfig.footerText }) : null;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    AppShell,
    {
      sidebar: sidebarConfig && sidebarItems ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        Sidebar,
        {
          title: sidebarConfig.title,
          items: sidebarItems,
          footer: sidebarFooterNode
        }
      ) : void 0,
      topNav: headerConfig ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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

// src/components/layout/page-header.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function PageHeader({
  className,
  title,
  description,
  actions,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    "div",
    {
      className: cn("flex flex-wrap items-start justify-between gap-6", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h1", { className: "text-3xl font-bold text-[rgb(var(--nc-fg))]", children: title }),
          description && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-[rgb(var(--nc-fg-muted))]", children: description })
        ] }),
        actions && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "flex flex-wrap gap-3", children: actions })
      ]
    }
  );
}

// src/components/layout/auth-layout.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function AuthLayout({
  className,
  title,
  description,
  footer,
  graphic,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
    "div",
    {
      className: cn(
        "grid min-h-screen grid-cols-1 bg-background",
        "lg:grid-cols-[1.1fr_0.9fr]",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "flex flex-col justify-center px-6 py-16 sm:px-12", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "mx-auto w-full max-w-md space-y-6", children: [
          (title || description) && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "space-y-2", children: [
            title && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h1", { className: "text-3xl font-bold text-[rgb(var(--nc-fg))]", children: title }),
            description && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-[rgb(var(--nc-fg-muted))]", children: description })
          ] }),
          children,
          footer && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "text-sm text-[rgb(var(--nc-fg-muted))]", children: footer })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "hidden items-center justify-center border-l border-[rgb(var(--nc-border)/0.3)] bg-[rgb(var(--nc-surface)/0.08)] p-12 text-[rgb(var(--nc-fg))] lg:flex", children: graphic != null ? graphic : /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "max-w-sm space-y-4 text-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { className: "text-2xl font-semibold", children: "Crafted experiences" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-[rgb(var(--nc-fg-muted))]", children: "Build authentication flows that feel premium and cohesive." })
        ] }) })
      ]
    }
  );
}

// src/components/layout/container.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
var sizeClasses = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl"
};
function Container({ className, size = "lg", ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "div",
    {
      className: cn("mx-auto w-full px-4 sm:px-6 lg:px-8", sizeClasses[size], className),
      ...props
    }
  );
}

// src/components/layout/grid.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: cn("grid", colClasses[columns], gapClasses[gap], className), ...props });
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppShell,
  AppTemplate,
  AuthLayout,
  Breadcrumbs,
  Container,
  Grid,
  PageHeader,
  Sidebar,
  TopNav,
  layoutConfigSchema
});
//# sourceMappingURL=layout.cjs.map