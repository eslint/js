"use strict";

module.exports = {
    root: true,
    extends: "eslint",
    env: {
        es6: true
    },
    overrides: [
        {
            files: ["tests/lib/**"],
            parserOptions: {
                ecmaVersion: 2020
            },
            env: {
                mocha: true
            }
        }
    ]
};
