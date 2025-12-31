import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  tsconfig: "tsconfig.build.json",   // 👈 importante!
  clean: true,
});