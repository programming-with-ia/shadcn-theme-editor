import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import banner2 from 'rollup-plugin-banner2'
// import {} from "rollup";
// import { preserveDirectives } from "rollup-plugin-preserve-directives"

import tailwindcss from 'tailwindcss';

import postcss from "rollup-plugin-postcss";
// document.createElement('style');
const packageJson = require("./package.json");
const tailwindConfig = require('./tailwind.config.js');

export default [
  {
    input: "src/index.ts",
    // preserveModules: true,
    treeshake: true,
    output: [
      {
        // file: packageJson.main,
        dir: "./dist/cjs",
        format: "cjs",
        sourcemap: true,
        inlineDynamicImports: false,
      },
      {
        // file: packageJson.module,
        dir: "./dist/esm",
        format: "esm",
        sourcemap: true,
        inlineDynamicImports: false,
      },

    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
      postcss({
        plugins: [tailwindcss(tailwindConfig)],
        extract: true
      }),
      banner2(()=>`"use client";\nimport "./index.css";\n`), // or use: https://github.com/Ephem/rollup-plugin-preserve-directives
      // preserveDirectives(),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "src/index.ts",
    output: [{ file: packageJson.types }],
    plugins: [dts.default()],
    external: [/\.css$/],
  },
];
