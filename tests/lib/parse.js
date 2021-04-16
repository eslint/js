/**
 * @fileoverview Tests for parse().
 * @author Nicholas C. Zakas
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import fs from "fs";
import tester from "./tester.js";
import * as espree from "../../espree.js";
import assert from "assert";


const allPiecesJson = JSON.parse(fs.readFileSync("./tests/fixtures/parse/all-pieces.json", "utf8"));

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

describe("parse()", () => {

    describe("ecmaVersion", () => {

        it("should be 5 if not specified", () => {

            // `ecmaVersion: 3` would throw on getters/setters
            espree.parse("var foo = { get bar() {} }");

            // needs `ecmaVersion: 6` or higher
            assert.throws(() => {
                espree.parse("let foo");
            });
        });

    });

    describe("modules", () => {

        it("should have correct column number when strict mode error occurs", () => {

            try {
                espree.parse("function fn(a, a) {\n}", { ecmaVersion: 6, sourceType: "module" });
            } catch (err) {
                assert.strictEqual(err.column, 16);
            }
        });

    });

    describe("ES5", () => {

        it("should throw an error when using the y regex flag", () => {

            assert.throws(() => {
                espree.parse("/./y");
            });
        });

        it("should throw an error when using the u regex flag", () => {

            assert.throws(() => {
                espree.parse("/./u");
            });
        });

    });

    describe("general", () => {
        it("should output tokens, comments, locs, and ranges when called with those options", () => {
            const ast = espree.parse("let foo = bar;", {
                ecmaVersion: 6,
                comment: true,
                tokens: true,
                range: true,
                loc: true
            });

            assert.deepStrictEqual(tester.getRaw(ast), allPiecesJson);
        });

        it("should reset lastToken on each parse", () => {
            espree.parse("var foo = bar;");
            const ast = espree.parse("//foo", {
                comment: true,
                tokens: true,
                range: true,
                loc: true
            });

            assert.deepStrictEqual(ast.range, [0, 5]);
            assert.deepStrictEqual([ast.loc.start.line, ast.loc.start.column], [1, 0]);
            assert.deepStrictEqual([ast.loc.end.line, ast.loc.end.column], [1, 5]);
        });

        it("should not mutate config", () => {
            espree.parse("foo", Object.freeze({ ecmaFeatures: Object.freeze({}) }));
        });

        it("Cast valid non-string input", () => {
            const str = "var foo = bar;";

            assert.deepStrictEqual(
                espree.parse(Buffer.from(str)),
                espree.parse(str)
            );
        });

        // https://github.com/eslint/espree/issues/470
        it("Should throw on invalid `(a = 1) = t`", () => {
            assert.throws(() => {
                espree.parse("(a = 1) = t", { ecmaVersion: 6 });
            });
        });
    });

    describe("nodes", () => {
        it("should not re-use the same identifier node in shorthand properties", () => {
            const code = "({x, y = 1} = {z})";

            const ast = espree.parse(code, { ecmaVersion: 2015 });

            const assignment = ast.body[0].expression;
            const objectPattern = assignment.left;
            const objectExpression = assignment.right;

            const propertyX = objectPattern.properties[0];
            const propertyY = objectPattern.properties[1];
            const propertyZ = objectExpression.properties[0];

            assert.notStrictEqual(propertyX.key, propertyX.value);
            assert.notStrictEqual(propertyY.key, propertyY.value.left);
            assert.notStrictEqual(propertyZ.key, propertyZ.value);
        });
    });
});
