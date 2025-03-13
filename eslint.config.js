const eslintRecommended = require("@eslint/js");
const tseslint = require("typescript-eslint");

module.exports = [
  eslintRecommended.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tseslint.parser,
    },
  },
];
