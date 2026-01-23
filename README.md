# Nextcraft UI

Bold, crafted UI components for Next.js + Tailwind CSS.

## Install

```bash
npm install @stl-packages/nextcraft-ui
```

## Usage

```tsx
import { CraftButton, GlassCard } from "@stl-packages/nextcraft-ui";

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

## Tailwind setup

This library ships class names only. Make sure Tailwind scans your node_modules
for the package so the classes are generated:

```ts
// tailwind.config.ts
export default {
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/@stl-packages/nextcraft-ui/dist/**/*.{js,mjs}"
  ]
};
```

## Scripts

- `npm run build` builds the library with `tsup`.
- `npm run typecheck` runs TypeScript checks.

## License

MIT
