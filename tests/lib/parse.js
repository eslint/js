/**
 * @fileoverview Tests for tokenize().
 * @author Nicholas C. Zakas
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const assert = require("assert"),
    espree = require("../../espree"),
    tester = require("./tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

describe("parse()", () => {

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

            assert.deepStrictEqual(tester.getRaw(ast), require("../fixtures/parse/all-pieces.json"));
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

    });

    describe("nodes", () => {
        it("acorn.parse() should not re-use the same identifier node in object patterns", () => {
            const code = "({x, y = 1} = {z})";

            const ast = espree.parse(code, { ecmaVersion: 2015 });

            const assignment = ast.body[0].expression;
            const objectPattern = assignment.left;
            const objectExpression = assignment.right;

            const propertyX = objectPattern.properties[0];
            const propertyY = objectPattern.properties[1];
            const propertyZ = objectExpression.properties[0];

            assert.notStrictEqual(propertyX.key, propertyX.value); // true in v7, false in v8
            assert.notStrictEqual(propertyY.key, propertyY.value.left); // true in v7, false in v8
            assert.notStrictEqual(propertyZ.key, propertyZ.value); // true in v7, false in v8
        });
    });
});
