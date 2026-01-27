import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/components/**/*.ts",
    "src/components/**/*.tsx",
    "src/craft/components.ts",
    "src/craft/layout.ts",
    "src/craft/forms.ts",
    "src/craft/theme.ts",
    "src/craft/table.ts",
    "src/theme/**/*.ts",
    "src/utils/**/*.ts",
  ],
  bundle: false,
  splitting: false,
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  target: "es2019",
  outDir: "dist",
  tsconfig: "tsconfig.lib.json",
  external: ["react", "react-dom", "next", "lucide-react"],
});
