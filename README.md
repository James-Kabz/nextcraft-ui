# Nextcraft UI

Bold, crafted UI components for Next.js + Tailwind CSS.

## Install

```bash
npm install @jameskabz/nextcraft-ui
```

## Usage

```tsx
import "@jameskabz/nextcraft-ui/styles.css";
import { CraftButton, GlassCard } from "@jameskabz/nextcraft-ui";

export default function Example() {
  return (
    <GlassCard tone="aurora" className="max-w-md">
      <h3 className="text-xl font-semibold">Nextcraft UI</h3>
      <p className="mt-2 text-sm text-white/80">
        Crafted components with a bold, modern edge.
      </p>
      <CraftButton className="mt-6">Launch</CraftButton>
    </GlassCard>
  );
}
```

## Styles setup

This library ships a precompiled stylesheet. Import it once in your app’s
global entry:

```ts
// App Router (Next.js)
import "@jameskabz/nextcraft-ui/styles.css";
```

## Themes

Wrap your app once to enable theme switching:

```tsx
import { ThemeProvider } from "@jameskabz/nextcraft-ui";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}
```

Add a switcher anywhere in your UI:

```tsx
import { ThemeSwitcher } from "@jameskabz/nextcraft-ui";

export function Settings() {
  return <ThemeSwitcher />;
}
```

Per-component theme override:

```tsx
<GlassCard tone="ember">...</GlassCard>
```

## Layout templates (config-driven)

You can drive the layout from JSON and reuse it across apps.

Example config:

```json
{
  "sidebar": {
    "title": "Nextcraft",
    "items": [
      { "label": "Dashboard", "href": "/dashboard", "icon": "home" },
      { "label": "Projects", "href": "/projects", "icon": "folder" }
    ],
    "footerText": "Version 0.1.3"
  },
  "header": {
    "title": "Dashboard",
    "breadcrumb": [
      { "label": "Home", "href": "/" },
      { "label": "Dashboard" }
    ]
  }
}
```

Use it:

```tsx
import {
  AppTemplate,
  CraftIconProvider,
  type LayoutConfig,
} from "@jameskabz/nextcraft-ui";
import { Home, Folder } from "lucide-react";

const layoutConfig: LayoutConfig = {
  sidebar: {
    title: "Nextcraft",
    items: [
      { label: "Dashboard", href: "/dashboard", icon: "home" },
      { label: "Projects", href: "/projects", icon: "folder" },
    ],
  },
  header: {
    title: "Dashboard",
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Dashboard" },
    ],
  },
};

const icons = {
  home: <Home size={16} />,
  folder: <Folder size={16} />,
};

export default function Page() {
  return (
    <CraftIconProvider icons={icons}>
      <AppTemplate config={layoutConfig} getActivePath={() => "/dashboard"}>
        {/* content */}
      </AppTemplate>
    </CraftIconProvider>
  );
}
```

Notes:
- `getActivePath` can be replaced with `activePath` if you already know the path.
- Config schema is exported as `layoutConfigSchema`.
- An example file is in `examples/layout-config.json`.
- Demo page: `src/app/layout-template-demo/page.tsx`.

## CraftIcon

CraftIcon uses Font Awesome (solid icons) by default. You can also register your own icons once and use them by name anywhere.

### 1) Install Font Awesome (required in your app)

```bash
npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
```

### 2) Use built-in icon names

These names are supported out of the box:

- `layout-dashboard`, `dashboard`
- `folder`, `folder-open`
- `users`
- `credit-card`
- `pen`, `edit`
- `trash`, `delete`
- `archive`
- `search`

```tsx
import { CraftIcon } from "@jameskabz/nextcraft-ui";

export function App() {
  return <CraftIcon name="pen" className="text-white" />;
}
```

### 3) Register your own icons (optional)

```tsx
import { CraftIcon, CraftIconProvider } from "@jameskabz/nextcraft-ui";

const icons = {
  home: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor">
      <path d="M3 12l9-9 9 9v9a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1z" />
    </svg>
  ),
};

export function App() {
  return (
    <CraftIconProvider icons={icons}>
      <CraftIcon name="home" className="text-white" />
    </CraftIconProvider>
  );
}
```

## Troubleshooting: Module not found

If your app (for example, a folder named `spendwise`) shows:

```
Module not found: Can't resolve '@jameskabz/nextcraft-ui'
```

Do the following:

1) Ensure the package is installed in the app:
```bash
npm install @jameskabz/nextcraft-ui
```

2) If you are developing locally from this repo, build and install it from a path:
```bash
# in this repo
npm run build

# in your app (spendwise)
npm install ../nextcraft-ui
```

3) Verify the package exports point to the built files:
- This repo expects ESM at `dist/index.js` and CJS at `dist/index.cjs`.
- If you change build outputs, update `package.json` `module` and `exports` accordingly.

## Scripts

- `npm run build` builds the library with `tsup`.
- `npm run typecheck` runs TypeScript checks.

## License

MIT
