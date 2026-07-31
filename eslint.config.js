import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginImportX from "eslint-plugin-import-x";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,jsx}"],
    extends: [js.configs.recommended, reactHooks.configs.flat.recommended, reactRefresh.configs.vite, eslintConfigPrettier],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } }
    },
    plugins: {
      "import-x": eslintPluginImportX
    },
    rules: {
      "no-console": ["warn", { allow: ["warn", "error", "info"] }],
      "prefer-const": "warn",
      "no-trailing-spaces": "warn",
      "no-var": "warn",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
      "import-x/no-duplicates": "warn",
      "import-x/no-unresolved": "off",
      "import-x/newline-after-import": "warn",
      "import-x/order": [
        "warn",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "never",
          alphabetize: { order: "asc", caseInsensitive: false }
        }
      ],
      eqeqeq: ["warn", "always"],
      curly: "warn"
    }
  }
]);
