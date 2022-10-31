import { rollup as htmlplus } from "@htmlplus/element/bundlers/index.js";
import {
  customElement,
  extract,
  parse,
  read,
  validate,
} from "@htmlplus/element/compiler/index.js";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: "src/main.tsx",
  output: {
    format: "esm",
    dir: "dist",
  },
  plugins: [
    htmlplus(read(), parse(), validate(), extract(), customElement()),

    resolve({
      browser: true,
    }),

    commonjs(),

    typescript(),
  ],
};
