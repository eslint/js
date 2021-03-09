import commonjs from "@rollup/plugin-commonjs";
import resolve  from "@rollup/plugin-node-resolve";
import json     from "@rollup/plugin-json";
import fs       from "fs";


// the espree package version is exported from the module (i.e., import { version } from "espree")
// read version from the package.json metadata and write it into lib/version.js at build time,
// since esm cannot import json by default
const pkg = JSON.parse(fs.readFileSync("./package.json", "utf8"));
fs.writeFileSync("lib/version.js", `const version = "${pkg.version}";\n\nexport default version;\n`);

export default {
  input: "espree.js",
  external: ["acorn", "acorn-jsx", "eslint-visitor-keys"],
  treeshake: false,
  output: {
    file: "dist/espree.cjs",
    format: "cjs",
    sourcemap: true
  },
  plugins: [ commonjs(), resolve(), json() ]
}
