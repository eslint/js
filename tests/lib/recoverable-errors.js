/**
 * @fileoverview Tests for options.recoverableErrors.
 * @author Toru Nagashima <https://github.com/mysticatea>
 */
"use strict";

const assert = require("assert");
const { parseForESLint } = require("../../espree");

/**
 * Gets a raw version of the AST that is suitable for comparison. This is necessary
 * due to the different order of properties across parsers.
 * @param {ASTNode} ast The AST to convert.
 * @returns {ASTNode} The converted AST.
 * @private
 */
function getRaw(ast) {
    return JSON.parse(JSON.stringify(ast, (key, value) => {

        // Delete `node.start` and `node.end`.
        if ((key === "start" || key === "end") && typeof value === "number") {
            return void 0;
        }

        // Delete `error.stack`.
        if (value instanceof Error) {
            return Object.assign({ message: value.message }, value);
        }

        return value;
    }));
}

/**
 * Assert a given code to throw the expected error.
 * @param {Function} f The code to execute.
 * @param {Object} expected The expected properties.
 * @returns {void}
 */
function assertError(f, expected) {
    try {
        f();
    } catch (actual) {
        assert.deepStrictEqual(getRaw(actual), expected);
        return;
    }

    assert.fail("should throw.");
}

describe("'parseForESLint()' function with 'options.recoverableErrors'", () => {
    it("should return AST and errors if `let a, a;` was given.", () => {
        const { ast, recoverableErrors } = parseForESLint("let a, a;", { ecmaVersion: 2015, recoverableErrors: true });

        assert.deepStrictEqual(getRaw(ast), {
            type: "Program",
            sourceType: "script",
            body: [
                {
                    type: "VariableDeclaration",
                    kind: "let",
                    declarations: [
                        {
                            type: "VariableDeclarator",
                            id: {
                                name: "a",
                                type: "Identifier"
                            },
                            init: null
                        },
                        {
                            type: "VariableDeclarator",
                            id: {
                                name: "a",
                                type: "Identifier"
                            },
                            init: null
                        }
                    ]
                }
            ]
        });
        assert.deepStrictEqual(getRaw(recoverableErrors), [
            {
                column: 8,
                index: 7,
                lineNumber: 1,
                message: "Identifier 'a' has already been declared"
            }
        ]);
    });

    it("should throw an error that has 'recoverableErrors' property if `let a, a; {` was given.", () => {
        assertError(
            () => parseForESLint("let a, a; {", { ecmaVersion: 2015, recoverableErrors: true }),

            // Top-level is the fatal error.
            {
                column: 12,
                index: 11,
                lineNumber: 1,
                message: "Unexpected token",

                // The fatal error has the recovered syntax errors.
                recoverableErrors: [
                    {
                        column: 8,
                        index: 7,
                        lineNumber: 1,
                        message: "Identifier 'a' has already been declared"
                    }
                ]
            }
        );
    });
});
