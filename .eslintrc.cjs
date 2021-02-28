module.exports = {
    root: true,
    extends: "eslint",
    parserOptions: {
        sourceType: "module"
    },
    env: {
        es6: true,
        node: true
    },
    overrides: [
        {
            files: ["tests/lib/*"],
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: "module"
            },
            env: {
                mocha: true
            }
        }
    ]
};
