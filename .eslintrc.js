module.exports = {
  extends: "next/core-web-vitals",
  plugins: ["unused-imports"],
  rules: {
    "no-console": "warn",
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true
      }
    ],
    "unused-imports/no-unused-imports": "error",   // "error" でも
  }
};
