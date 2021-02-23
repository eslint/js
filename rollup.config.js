import commonjs from '@rollup/plugin-commonjs';
import resolve  from '@rollup/plugin-node-resolve';
import json     from '@rollup/plugin-json';
import fs       from 'fs';


const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
fs.writeFileSync('lib/version.js', `const version = "${pkg.version}";\n\nexport default version;\n`);

export default {
  input: "espree.js",
  external: ["acorn", "acorn-jsx", "eslint-visitor-keys"],
  output: {
    file: "dist/espree.cjs",
    format: "cjs",
    sourcemap: true
  },
  plugins: [ commonjs(), resolve(), json() ]
}
