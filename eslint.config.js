import { defineConfig, globalIgnores } from "eslint/config";
import eslintConfigESLint from "eslint-config-eslint";
import eslintConfigESLintFormatting from "eslint-config-eslint/formatting";
import eslintPluginChaiFriendly from "eslint-plugin-chai-friendly";
import * as expectType from "eslint-plugin-expect-type";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";

export default defineConfig([
    globalIgnores([
        "**/tests/fixtures/",
        "**/dist/",
        "**/coverage/",
        "packages/espree/tools/create-test-example.js"
    ]),
    {
        files: ["**/*.{,c}js"],
        extends: [eslintConfigESLint, eslintConfigESLintFormatting],
        rules: {
            "jsdoc/no-bad-blocks": ["error", { ignore: ["__PURE__"] }]
        }
    },
    {
        files: ["packages/*/tests/**/*.test.{,c}js"],
        languageOptions: {
            globals: {
                ...globals.mocha
            }
        }
    },
    {
        files: ["packages/eslint-scope/tests/**/*.{,c}js"],
        plugins: {
            "chai-friendly": eslintPluginChaiFriendly
        },
        rules: {
            "no-unused-expressions": "off",
            "chai-friendly/no-unused-expressions": "error"
        }
    },
    {
        files: ["packages/eslint-scope/lib/**"],
        rules: {
            "no-underscore-dangle": "off"
        }
    },
    {
        files: ["packages/eslint-scope/Makefile.js"],
        languageOptions: {
            globals: {
                ...globals.shelljs,
                target: false
            }
        },
        rules: {
            "no-console": "off"
        }
    },
    {
        files: ["packages/eslint-scope/**"],
        linterOptions: {
            reportUnusedDisableDirectives: "error"
        },
        settings: {
            jsdoc: {
                preferredTypes: {
                    Object: "object",
                    "object<>": "Object"
                },
                tagNamePreference: {
                    __PURE__: false
                }
            }
        }
    },
    {
        files: ["packages/eslint-scope/tests/types/*.{,c}ts"],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: ["packages/eslint-scope/tests/types/tsconfig.json"]
            }
        },
        plugins: {
            "expect-type": expectType
        },
        rules: {
            "expect-type/expect": "error"
        }
    },
    {
        files: ["**/tools/**"],
        rules: {
            "no-console": "off",
            "n/no-process-exit": "off"
        }
    }
]);
