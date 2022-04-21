"use strict";

module.exports = {
    root: true,
    extends: "eslint",
    env: {
        es2020: true
    },
    settings: {
        jsdoc: {
            mode: "typescript"
        }
    },
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module"
    },
    overrides: [
        {
            files: ["*.cjs"],
            parserOptions: {
                sourceType: "script"
            }
        },
        {
            files: ["tests/lib/**"],
            env: {
                mocha: true
            }
        },
        {
            files: ["tools/**"],
            rules: {
                "no-console": "off"
            }
        }
    ],
    rules: {
        "jsdoc/check-tag-names": ["error", {
            definedTags: ["local", "export"]
        }]
    }
};
