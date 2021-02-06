module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  plugins: ["react", "prettier"],
  ignorePatterns: ["node_modules/*", ".cache/*", "public/*", "!.prettierrc.js"],
  extends: ["react-app", "eslint:recommended", "prettier", "prettier/react"],
  rules: {
    "prettier/prettier": ["error", {}, { usePrettierrc: true }],
  },
};
