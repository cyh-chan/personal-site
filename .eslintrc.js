const os = require("os");

module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: "airbnb",
  ignorePatterns: ["node_modules/", "build/"],
  parser: "@babel/eslint-parser",
  plugins: ["react"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".mjs"],
        moduleDirectory: ["node_modules", "src/"],
      },
    },
  },
  rules: {
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        aspects: ["noHref", "invalidHref", "preferButton"],
        components: ["Link"],
        specialLink: ["to", "hrefLeft", "hrefRight"],
      },
    ],
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/no-static-element-interactions": 0,
    "linebreak-style": ["error", os.EOL === "\r\n" ? "windows" : "unix"],
    "no-console": [
      "error",
      {
        allow: ["warn", "error", "info"],
      },
    ],
    "no-underscore-dangle": 0,
    "react/destructuring-assignment": 0,
    "react/function-component-definition": [
      2,
      { namedComponents: "arrow-function" },
    ],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"],
      },
    ],
    "react/jsx-no-useless-fragment": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-wrap-multilines": [
      1,
      {
        assignment: true,
        declaration: true,
        return: true,
      },
    ],
    quotes: ["error", "single", { avoidEscape: true }],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/vite.config.{js,cjs,mjs}",
          "**/webpack.config.js",
          "**/rollup.config.js",
          "**/jest.setup.js",
          "**/*.test.js",
          "**/*.spec.js",
        ],
      },
    ],
    "import/no-unresolved": [
      "error",
      {
        ignore: ["^@vitejs/plugin-react$"],
      },
    ],
  },
};
