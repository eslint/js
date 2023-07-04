import eslintConfigESLint from "eslint-config-eslint";
import nodeRecommendedModule from "eslint-plugin-n/configs/recommended-module.js";
import nodeRecommendedScript from "eslint-plugin-n/configs/recommended-script.js";
import globals from "globals";

export default [
    {
        ignores: [
            "tests/fixtures/",
            "dist/",
            "coverage/",
            "tools/create-test-example.js"
        ]
    },

    // eslintConfigESLint[3] is eslint-plugin-n's recommended-script config
    ...eslintConfigESLint.slice(0, 3),
    {
        files: ["**/*.js"],
        ...nodeRecommendedModule
    },
    {
        files: ["**/*.cjs"],
        ...nodeRecommendedScript
    },
    ...eslintConfigESLint.slice(4),

    {
        settings: {
            jsdoc: {
                mode: "typescript"
            }
        }
    },
    {
        files: ["tests/lib/**"],
        languageOptions: {
            globals: {
                ...globals.mocha
            }
        }
    },
    {
        files: ["tools/**"],
        rules: {
            "no-console": "off",
            "n/no-process-exit": "off",
            "n/no-unsupported-features/es-syntax": ["error", {
                version: ">=16.0.0",
                ignores: ["modules"]
            }]
        }
    }
];
