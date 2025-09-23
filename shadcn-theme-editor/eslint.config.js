import tseslint from "typescript-eslint";
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
  {
    ignores: ['dist'],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    extends: [
      ...tseslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      js.configs.recommended,
      eslintConfigPrettier,
    ],
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
    parserOptions: {
      project: './tsconfig.json', // points to package tsconfig
      tsconfigRootDir: __dirname,
    },
  }
);
