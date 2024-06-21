/* global module */
module.exports = {
  "env": {
      "browser": true,
      "es2021": true
  },
  "extends": [
    "next/core-web-vitals",
    "plugin:storybook/recommended"
  ],
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 12,
      "sourceType": "module"
  },
  "plugins": [
      "react"
  ],
  "globals": {
    "process": true
},
  "rules": {
    "react/prop-types": 0,
    "react/no-unescaped-entities": 0,
    "react/display-name": 0,
    "no-useless-escape": 0
  },
  "settings": {
      "react": {
          "version": "detect"
      }
  }
};
