// const path = require("path");

/*
  ESLINT is currently broken, fix it!
*/
module.exports = {
  env: {
    es2020: true,
    browser: true,
    node: true,
    jest: true,
  },
  // parser: "babel-eslint",
  extends: [
    "eslint:recommended",
    "next",
    "next/babel",
    // 'plugin:@next/next/recommended',
    "plugin:react/all",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  settings: {
    react: {
      version: "detect",
    },
    next: {
      rootDir: "./app",
    },
  },
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
  // parserOptions: {
  //   ecmaVersion: 2018,
  //   sourceType: "module",
  //   ecmaFeatures: {
  //     jsx: true,
  //   },
  // },
  ignorePatterns: ["node_modules/", ".next/", "./package-lock.json"],
};
