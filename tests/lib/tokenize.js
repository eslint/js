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

    it("should produce tokens when using not operator", function() {
        var ast = espree.parse("!x", {
            loc: true,
            range: true,
            tokens: true
        });
        assert.deepEqual(tester.getRaw(ast.tokens), require("../fixtures/tokenize/not-operator.tokens.js"));
    });

    it("should produce tokens when using tilde operator", function() {
        var ast = espree.parse("~x", {
            loc: true,
            range: true,
            tokens: true
        });
        assert.deepEqual(tester.getRaw(ast.tokens), require("../fixtures/tokenize/tilde-operator.tokens.js"));
    });

    it("should produce tokens when using a single identifier", function() {
        var tokens = espree.tokenize("a");
        assert.deepEqual(tester.getRaw(tokens), [ { type: "Identifier", value: "a"}]);
    });

    it("should not remove } token followed by a template literal.", function() {
        var tokens = espree.tokenize("const obj = {}\n`template${{}}!`", {ecmaVersion: 6});
        assert.deepEqual(
            tester.getRaw(tokens),
            [
                {type: "Keyword", value: "const"},
                {type: "Identifier", value: "obj"},
                {type: "Punctuator", value: "="},
                {type: "Punctuator", value: "{"},
                {type: "Punctuator", value: "}"},
                {type: "Template", value: "`template${"},
                {type: "Punctuator", value: "{"},
                {type: "Punctuator", value: "}"},
                {type: "Template", value: "}!`"}
            ]
        );

        tokens = espree.tokenize("if (a) { b }\n`template`", {ecmaVersion: 6});
        assert.deepEqual(
            tester.getRaw(tokens),
            [
                {type: "Keyword", value: "if"},
                {type: "Punctuator", value: "("},
                {type: "Identifier", value: "a"},
                {type: "Punctuator", value: ")"},
                {type: "Punctuator", value: "{"},
                {type: "Identifier", value: "b"},
                {type: "Punctuator", value: "}"},
                {type: "Template", value: "`template`"}
            ]
        );
    });

    it("should not mutate config", function() {
        espree.tokenize("foo", Object.freeze({ ecmaFeatures: Object.freeze({}) }));
    });

});
