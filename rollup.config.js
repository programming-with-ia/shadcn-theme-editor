import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import banner2 from "rollup-plugin-banner2";
// import {} from "rollup";
// import { preserveDirectives } from "rollup-plugin-preserve-directives"

import tailwindcss from "tailwindcss";

import postcss from "rollup-plugin-postcss";
const packageJson = require("./package.json");
const tailwindConfig = require('./tailwind.config.js');

// document.createElement('style');
// import packageJson from './package.json' assert { type: 'json' };
// const tailwindConfig = (await import('./tailwind.config.js')).default;

export default [
  {
    input: "src/index.ts",
    output: [
      // {
      //   file: packageJson.main,
      //   format: "cjs",
      //   sourcemap: true,
      // },
      {
        file: packageJson.module,
        format: "esm",
        // sourcemap: true,
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
        extract: true,
      }),
      banner2(() => `"use client";\nimport "./index.css";\n`), // or use: https://github.com/Ephem/rollup-plugin-preserve-directives
      // preserveDirectives(),
    ],
    external: [
      "react",
      "react-dom",
      "next-themes",
      "clsx",
      "class-variance-authority",
    ],
  },
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts" }],
    plugins: [dts.default()],
    external: [/\.css$/],
  },
];
