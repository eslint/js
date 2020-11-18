import commonjs from '@rollup/plugin-commonjs';
import resolve  from '@rollup/plugin-node-resolve';
import json     from '@rollup/plugin-json';
import fs       from 'fs';


const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
fs.writeFileSync('lib/version.js', `export default version = '${pkg.version}'`);

export default [
  {
    input: "espree.js",
    output: {
      file: "dist/espree.js",
      format: "umd",
      name: "espree",
      sourcemap: true
    },
    plugins: [ commonjs(), resolve(), json() ]
  },
  {
    input: "espree.js",
    external: ["acorn", "acorn-jsx", "eslint-visitor-keys"],
    output: {
      file: "dist/espree.cjs",
      format: "cjs",
      sourcemap: true
    },
    plugins: [ ]
  }
]
