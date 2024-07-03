import eslintConfigESLint from "eslint-config-eslint";
import eslintConfigESLintFormatting from "eslint-config-eslint/formatting";
import globals from "globals";

export default [
    {
        ignores: [
            "**/tests/fixtures/",
            "**/dist/",
            "**/coverage/",
            "packages/espree/tools/create-test-example.js"
        ]
    },
    ...eslintConfigESLint,
    eslintConfigESLintFormatting,
    {
        files: ["**/tests/lib/**"],
        languageOptions: {
            globals: {
                ...globals.mocha
            }
        }
    },
    {
        files: ["**/tools/**"],
        rules: {
            "no-console": "off",
            "no-tabs": "off",
            "n/no-process-exit": "off"
        }
    }
];
