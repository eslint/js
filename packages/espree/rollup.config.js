import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

export default {
    input: "espree.js",
    external: ["acorn", "acorn-jsx", "eslint-visitor-keys"],
    treeshake: false,
    output: {
        file: "dist/espree.cjs",
        format: "cjs"
    },
    plugins: [commonjs(), resolve()]
};
