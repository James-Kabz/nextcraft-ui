import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/components/**/*.ts",
    "src/components/**/*.tsx",
    "src/theme/**/*.ts",
    "src/theme/**/*.tsx",
    "src/utils/**/*.ts",
    "src/lib/**/*.ts",
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
