import eslintRecommended from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  eslintRecommended.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tseslint.parser,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-undef": "off"
    }
  }
];
