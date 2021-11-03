// const path = require("path");

module.exports = {
  extends: [
    "next",
    "next/babel",
    "eslint:recommended",
    "plugin:react/all",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  plugins: ["react", "import", "jsx-a11y"],
  rules: {
    "no-console": 1,
    "no-unused-vars": 1,
    "func-style": 0,
    "react/prop-types": 1,
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-filename-extension": 0,
    "react/react-in-jsx-scope": 0,
    "react/jsx-no-literals": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-max-depth": 0,
    "react/jsx-newline": 0,
    "react/jsx-props-no-spreading": 0,
  },
  env: {
    es2020: true,
    browser: true,
    node: true,
    jest: true,
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      alias: [
        ["@/components", "./app/components"],
        ["@/hooks", "./app/hooks"],
        ["@/layouts", "./app/layouts"],
      ],
      // node: {
      //   extensions: [".js", ".jsx"],
      //   // paths: [path.resolve(".", "app")],
      //   moduleDirectory: ["node_modules"], // "app/"],
      // },
    },
  },
  parserOptions: {
    // ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ["node_modules/", ".next/", "./package-lock.json"],
};
