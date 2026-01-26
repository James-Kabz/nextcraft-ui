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
