module.exports = {
  env: {
    node: true,
    browser: true,
    es2024: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:astro/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    // Syntax and formatting
    semi: ["error", "always"],
    quotes: ["error", "double", { "allowTemplateLiterals": true }],
    "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 1 }],
    "eol-last": ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
    
    // TypeScript specific
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    
    // Best practices
    "curly": ["error", "all"],
    "no-var": "error",
    "prefer-const": "error",
    "prefer-template": "warn",
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {
        // Astro-specific rules
        "astro/no-conflict-set-directives": "error",
        "astro/no-unused-define-vars-in-style": "error",
      },
    },
  ],
};
