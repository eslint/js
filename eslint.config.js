import eslintConfigESLint from "eslint-config-eslint";
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
    ...eslintConfigESLint,
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
            "n/no-process-exit": "off"
        }
    }
];
