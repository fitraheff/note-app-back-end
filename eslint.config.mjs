import globals from "globals";
import pluginJs from "@eslint/js";

import daStyle from 'eslint-config-dicodingacademy';

export default [
  daStyle,
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node,
    },
    rules: {
      "no-console": "off",
      "linebreak-style": "off",
      "indent": "off",
    },
  },
  pluginJs.configs.recommended,
];


