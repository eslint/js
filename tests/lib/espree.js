/**
 * @fileoverview Tests for main Espree object.
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
    leche = require("leche"),
    espree = require("../../espree");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

describe("espree", function() {

    describe("parse()", function() {

        describe("ECMAScript 5 mode", function() {

            it("should throw an error when using let", function() {

                assert.throws(function() {
                    espree.parse("let foo = bar;", { ecmascript: 5 });
                }, /Unexpected token let/);

            });

            it("should throw an error when using const", function() {

                assert.throws(function() {
                    espree.parse("const foo = bar;", { ecmascript: 5 });
                }, /Unexpected token const/);

            });

        });

        describe("ECMAScript 6 mode", function() {

            it("should produce an AST when using let", function() {
                var ast = espree.parse("let foo = bar;", { ecmascript: 6 });
                assert.deepEqual(ast, require("../fixtures/espree/let.json"));
            });

            it("should produce an AST when using const", function() {
                var ast = espree.parse("const foo = bar;", { ecmascript: 6 });
                assert.deepEqual(ast, require("../fixtures/espree/const.json"));
            });

        });

        describe("Edge mode", function() {

            it("should produce an AST when using let", function() {
                var ast = espree.parse("let foo = bar;");
                assert.deepEqual(ast, require("../fixtures/espree/let.json"));
            });

            it("should produce an AST when using const", function() {
                var ast = espree.parse("const foo = bar;");
                assert.deepEqual(ast, require("../fixtures/espree/const.json"));
            });

        });

    });

});


