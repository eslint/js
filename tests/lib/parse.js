/**
 * @fileoverview Tests for tokenize().
 * @author Nicholas C. Zakas
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var assert = require("chai").assert,
    espree = require("../../espree"),
    tester = require("./tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

describe("parse()", function() {

    describe("modules", function() {

        it("should have correct column number when strict mode error occurs", function() {

            try {
                espree.parse("function fn(a, a) {\n}", { sourceType: "module" });
            } catch (err) {
                assert.equal(err.column, 16);
            }
        });

    });

    describe("ES5", function() {

        it("should throw an error when using the y regex flag", function() {

            assert.throws(function() {
                espree.parse("/./y");
            });
        });

        it("should throw an error when using the u regex flag", function() {

            assert.throws(function() {
                espree.parse("/./u");
            });
        });

    });

    describe("general", function() {
        it("should output tokens, comments, locs, and ranges when called with those options", function() {
            var ast = espree.parse("let foo = bar;", {
                ecmaVersion: 6,
                comment: true,
                tokens: true,
                range: true,
                loc: true
            });

            assert.deepEqual(tester.getRaw(ast), require("../fixtures/parse/all-pieces.json"));
        });

        it("should reset lastToken on each parse", function() {
            espree.parse("var foo = bar;");
            var ast = espree.parse("//foo", {
                comment: true,
                tokens: true,
                range: true,
                loc: true
            });

            assert.deepEqual(ast.range, [0, 5]);
            assert.deepEqual([ast.loc.start.line, ast.loc.start.column], [1, 0]);
            assert.deepEqual([ast.loc.end.line, ast.loc.end.column], [1, 5]);
        });

        it("should not mutate config", function() {
            espree.parse("foo", Object.freeze({ ecmaFeatures: Object.freeze({}) }));
        });

    });
});
