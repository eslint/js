/**
 * @fileoverview Tests for tokenize().
 * @author Nicholas C. Zakas
 * @copyright jQuery Foundation and other contributors, https://jquery.org/
 * BSD 2-Clause License
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

describe("tokenize()", function() {

    it("should produce tokens when using let", function() {
        var tokens = espree.tokenize("let foo = bar;", {
            ecmaVersion: 6,
            loc: true,
            range: true
        });
        assert.deepEqual(tester.getRaw(tokens), require("../fixtures/tokenize/let-result.tokens.js"));
    });

    it("should produce tokens when using const", function() {
        var tokens = espree.tokenize("const foo = bar;", {
            ecmaVersion: 6,
            loc: true,
            range: true
        });
        assert.deepEqual(tester.getRaw(tokens), require("../fixtures/tokenize/const-result.tokens.js"));
    });

    it("should produce tokens when using regular expression u flag", function() {
        var tokens = espree.tokenize("var foo = /foo/u;", {
            ecmaVersion: 6,
            loc: true,
            range: true
        });
        assert.deepEqual(tester.getRaw(tokens), require("../fixtures/tokenize/regexp-u-result.tokens.js"));
    });

    it("should produce tokens when using regular expression y flag", function() {
        var tokens = espree.tokenize("var foo = /foo/y;", {
            ecmaVersion: 6,
            loc: true,
            range: true
        });
        assert.deepEqual(tester.getRaw(tokens), require("../fixtures/tokenize/regexp-y-result.tokens.js"));
    });


    describe("templateStrings", function() {
        it("should produce tokens when tokenizing simple template string", function() {
            var tokens = espree.tokenize("var foo = `hi`;", {
                ecmaVersion: 6,
                loc: true,
                range: true
            });
            assert.deepEqual(tester.getRaw(tokens), require("../fixtures/tokenize/template-string-simple-result.tokens.js"));
        });

        it("should produce tokens when tokenizing template string with embedded variable", function() {
            var tokens = espree.tokenize("var foo = `hi${bar}`;", {
                ecmaVersion: 6,
                loc: true,
                range: true
            });
            assert.deepEqual(tester.getRaw(tokens), require("../fixtures/tokenize/template-string-embedded-result.tokens.js"));
        });

        it("should produce tokens when tokenizing template string with embedded variable in function call", function() {
            var tokens = espree.tokenize("var a; console.log(`${a}`, \"a\");", {
                ecmaVersion: 6,
                loc: true,
                range: true
            });

            assert.deepEqual(tester.getRaw(tokens), require("../fixtures/tokenize/template-string-embedded2-result.tokens.js"));
        });

        it("should produce tokens when parsing template string with embedded variable in function call and with tokens options on", function() {
            var ast = espree.parse("var a; console.log(`${a}`, \"a\");", {
                ecmaVersion: 6,
                tokens: true,
                loc: true,
                range: true
            });

            assert.deepEqual(tester.getRaw(ast.tokens), require("../fixtures/tokenize/template-string-embedded2-result.tokens.js"));
        });

        it("should produce tokens when tokenizing template string with embedded expressions", function() {
            var tokens = espree.tokenize("var foo = `Hello ${b}. a + 5 = ${a + 5}`;", {
                ecmaVersion: 6,
                loc: true,
                range: true
            });
            assert.deepEqual(tester.getRaw(tokens), require("../fixtures/tokenize/template-string-expressions-result.tokens.js"));
        });


    });

    // Make sure we don't introduce the same regex parsing error as Esprima
    it("should produce tokens when using regular expression wrapped in parens", function() {
        var tokens = espree.tokenize("(/foo/).test(bar);", {
            loc: true,
            range: true
        });
        assert.deepEqual(tester.getRaw(tokens), require("../fixtures/tokenize/regex-in-parens-result.tokens.js"));
    });

    it("should produce tokens when using regular expression wrapped in parens using parse()", function() {
        var ast = espree.parse("(/foo/).test(bar);", {
            loc: true,
            range: true,
            tokens: true
        });
        assert.deepEqual(tester.getRaw(ast.tokens), require("../fixtures/tokenize/regex-in-parens-result.tokens.js"));
    });

    it("should produce tokens when using a single identifier", function() {
        var tokens = espree.tokenize("a");
        assert.deepEqual(tester.getRaw(tokens), [ { type: "Identifier", value: "a"}]);
    });

});
