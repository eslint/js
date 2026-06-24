import { dts } from "rollup-plugin-dts";

export default [
	{
		input: "espree.js",
		external: ["acorn", "acorn-jsx", "eslint-visitor-keys"],
		treeshake: false,
		output: {
			file: "dist/espree.cjs",
			format: "cjs",
		},
	},
	{
		plugins: [dts()],
		input: "espree.js",
		treeshake: false,
		output: {
			file: "dist/espree.d.cts",
			format: "cjs",
			sourcemap: true,
		},
	},
];
