/**
 * @fileoverview Tests for tokenize().
 * @author Nicholas C. Zakas
 * @copyright 2014 Nicholas C. Zakas. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright
 *   notice, this list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above copyright
 *   notice, this list of conditions and the following disclaimer in the
 *   documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
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

    });
});
