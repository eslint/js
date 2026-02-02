export default {
	useTabs: true,
	tabWidth: 4,
	arrowParens: "avoid",

	overrides: [
		{
			files: ["*.json", "*.jsonc", "*.json5"],
			options: {
				tabWidth: 2,
				useTabs: false,
			},
		},
	],
};
