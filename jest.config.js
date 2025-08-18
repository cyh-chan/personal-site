const config = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
    "^.+\\.md$": "markdown-to-jsx",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
};

module.exports = config;
