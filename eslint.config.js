// eslint.config.js import js from "@eslint/js"; import tseslint from "typescript-eslint"; import react from "eslint-plugin-react"; import reactHooks from "eslint-plugin-react-hooks"; import globals from "globals";
export default [
  js.configs.recommended,
  { ignores: ["/dist/", "/node_modules/"] },
  tseslint.configs.recommended,
  {
    files: ["/*.ts", "/*.tsx"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: { react, "react-hooks": reactHooks },
    rules: {
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "react/prop-types": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
    settings: { react: { version: "detect" } },
  },
];
