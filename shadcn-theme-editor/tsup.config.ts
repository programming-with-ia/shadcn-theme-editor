import { defineConfig, Options } from "tsup";
import { cpSync } from "fs";
import { join, resolve } from "path";

export default defineConfig((options) => {
  const isDev = !!options.watch;

  const common: Options = {
    entry: ["src/index.ts"],
    outDir: "dist",
    dts: true,
    sourcemap: true,
    clean: true,
    target: "es2022",
    splitting: false,
    skipNodeModulesBundle: true,
    minify: !isDev,
    format: ["esm", "cjs"],
    esbuildOptions(options) {
      options.legalComments = "none";
    },
    banner: {
      js: `"use client";`,
    },
    // mark peer deps (e.g. react) as external so they aren’t bundled
    // external: ["react", "react-dom"],
  };

  if (isDev) {
    return {
      ...common,
      watch: true,
      // helpful for faster rebuilds
      minify: false,
      sourcemap: true,
    };
  }

  return {
    ...common,
    // production-specific overrides
    minify: true,
    sourcemap: false,
  };
});
