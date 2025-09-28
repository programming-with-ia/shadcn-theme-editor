import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginNext from "@next/eslint-plugin-next";
import turboPlugin from "eslint-plugin-turbo";
import onlyWarn from "eslint-plugin-only-warn";
import globals from "globals";

/**
 * A comprehensive, unified ESLint configuration for a Next.js application
 * within a Turborepo monorepo.
 *
 * It combines:
 * - ✅ Base JavaScript and advanced TypeScript rules with type-checking.
 * - ✅ React, React Hooks, and Next.js specific rules.
 * - ✅ Turborepo safety rules for monorepos.
 * - ✅ Prettier integration to prevent style conflicts.
 * - ✅ All custom rules from your provided configurations.
 */
export default tseslint.config(
  // 1. Global settings and ignores
  {
    // Files to ignore across the entire project
    ignores: ["node_modules/**", ".next/**", "dist/**"],
    // Options that apply to all files
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },

  // 2. Core configurations applied to all relevant files
  js.configs.recommended, // Basic ESLint rules
  eslintConfigPrettier, // Must be last in this section to override style rules

  // 3. Main configuration for TypeScript, React, Next.js, and Turbo
  {
    files: ["**/*.{js,jsx,ts,tsx}"], // Target all code files
    // Use the most powerful, type-aware rulesets
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      "@next/next": pluginNext,
      turbo: turboPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser, // Standard browser globals
        ...globals.node, // Standard Node.js globals
      },
      parserOptions: {
        // Enable type-aware linting with the most performant settings
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      react: {
        // Automatically detect the React version
        version: "detect",
      },
    },
    // @ts-ignore
    rules: {
      // --- Recommended plugin rules ---
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs["core-web-vitals"].rules,

      // --- Monorepo safety ---
      "turbo/no-undeared-env-vars": "warn",

      // --- Best practices and overrides ---
      "react/react-in-jsx-scope": "off", // Not needed with modern React/Next.js
      "react/prop-types": "off", // Handled by TypeScript

      // --- Custom rules from your configs ---
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/no-misused-promises": [
        "error",
        { checksVoidReturn: { attributes: false } },
      ],
      // Rules you've chosen to disable
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/require-await": "off",
    },
  },

  // 4. (Optional) Convert all errors to warnings for development
  // This prevents build failures for minor lint issues.
  // Comment this section out for stricter CI/production builds.
  {
    plugins: {
      "only-warn": onlyWarn,
    },
  },
);
