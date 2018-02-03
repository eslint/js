/**
 * @fileoverview Tests for ECMAScript version features.
 * @author Nicholas C. Zakas
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var leche = require("leche"),
    path = require("path"),
    shelljs = require("shelljs"),
    tester = require("./tester"),
    espree = require("../../espree"),
    assert = require("chai").assert;

// var espree = require("esprima-fb");
//------------------------------------------------------------------------------
// Setup
//------------------------------------------------------------------------------

var FIXTURES_DIR = "./tests/fixtures/ecma-version/";

var allTestFiles = shelljs.find(FIXTURES_DIR).filter(function(filename) {
    return filename.indexOf(".src.js") > -1;
}).map(function(filename) {
    return filename.substring(FIXTURES_DIR.length - 2, filename.length - 7);  // strip off ".src.js"
});

var scriptOnlyTestFiles = allTestFiles.filter(function(filename) {
    return filename.indexOf("modules") === -1;
});

var moduleTestFiles = allTestFiles.filter(function(filename) {
    return filename.indexOf("not-strict") === -1 && filename.indexOf("edge-cases") === -1;
});

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

describe("ecmaVersion", function() {

    var config;

    beforeEach(function() {
        config = {
            loc: true,
            range: true,
            tokens: true,
            ecmaVersion: 5
        };
    });

    describe("Scripts", function() {

        leche.withData(scriptOnlyTestFiles, function(filename) {

            var version = filename.substring(0, filename.indexOf("/"));

            // Uncomment and fill in filename to focus on a single file
            // var filename = "newTarget/simple-new-target";
            var code = shelljs.cat(path.resolve(FIXTURES_DIR, filename) + ".src.js");

            it("should parse correctly when sourceType is script", function() {
                config.ecmaVersion = Number(version);
                var expected = require(path.resolve(__dirname, "../../", FIXTURES_DIR, filename) + ".result.js");

                tester.assertMatches(code, config, expected);
            });

        });

    });

    describe("Modules", function() {

        leche.withData(moduleTestFiles, function(filename) {

            var version = filename.substring(0, filename.indexOf("/"));
            var code = shelljs.cat(path.resolve(FIXTURES_DIR, filename) + ".src.js");

            it("should parse correctly when sourceType is module", function() {
                var expected;

                try {
                    expected = require(path.resolve(__dirname, "../../", FIXTURES_DIR, filename) + ".module-result.js");
                } catch (err) {
                    expected = require(path.resolve(__dirname, "../../", FIXTURES_DIR, filename) + ".result.js");
                }

                config.ecmaVersion = Number(version);
                config.sourceType = "module";

                // set sourceType of program node to module
                if (expected.type === "Program") {
                    expected.sourceType = "module";
                }

                tester.assertMatches(code, config, expected);
            });

        });
    });

    describe("general", function() {
        it("Should parse using 2015 instead of 6", function() {
            var ast = espree.parse("let foo = bar;", {
                ecmaVersion: 2015,
                comment: true,
                tokens: true,
                range: true,
                loc: true
            });

            assert.deepEqual(tester.getRaw(ast), require("../fixtures/parse/all-pieces.json"));
        });

        it("Should throw error using invalid number", function() {
            assert.throws(function() {
                espree.parse(
                    "let foo = bar;", {
                        ecmaVersion: 32,
                        comment: true,
                        tokens: true,
                        range: true,
                        loc: true
                    });
            }, "Invalid ecmaVersion.");
        });

        it("Should throw error using invalid year", function() {
            assert.throws(function() {
                espree.parse(
                    "let foo = bar;", {
                        ecmaVersion: 2050,
                        comment: true,
                        tokens: true,
                        range: true,
                        loc: true
                    });
            }, "Invalid ecmaVersion.");
        });

    });

});
