/**
 * @fileoverview Tests for ECMAScript version features.
 * @author Nicholas C. Zakas
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const leche = require("leche"),
    path = require("path"),
    shelljs = require("shelljs"),
    tester = require("./tester"),
    espree = require("../../espree"),
    assert = require("chai").assert;

// var espree = require("esprima-fb");
//------------------------------------------------------------------------------
// Setup
//------------------------------------------------------------------------------

const FIXTURES_DIR = "./tests/fixtures/ecma-version/";

const allTestFiles = shelljs.find(FIXTURES_DIR)
    .filter(filename => filename.indexOf(".src.js") > -1)
    .map(filename => filename.slice(FIXTURES_DIR.length - 2, filename.length - 7)); // strip off ".src.js"


const scriptOnlyTestFiles = allTestFiles.filter(filename => filename.indexOf("modules") === -1);

const moduleTestFiles = allTestFiles.filter(filename => filename.indexOf("not-strict") === -1 && filename.indexOf("edge-cases") === -1);

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

describe("ecmaVersion", () => {

    let config;

    beforeEach(() => {
        config = {
            loc: true,
            range: true,
            tokens: true,
            ecmaVersion: 5
        };
    });

    describe("Scripts", () => {

        leche.withData(scriptOnlyTestFiles, filename => {

            const version = filename.slice(0, filename.indexOf("/"));

            // Uncomment and fill in filename to focus on a single file
            // var filename = "newTarget/simple-new-target";
            const code = shelljs.cat(`${path.resolve(FIXTURES_DIR, filename)}.src.js`);

            it("should parse correctly when sourceType is script", () => {
                config.ecmaVersion = Number(version);
                const expected = require(`${path.resolve(__dirname, "../../", FIXTURES_DIR, filename)}.result.js`);

                tester.assertMatches(code, config, expected);
            });

        });

    });

    describe("Modules", () => {

        leche.withData(moduleTestFiles, filename => {

            const version = filename.slice(0, filename.indexOf("/"));
            const code = shelljs.cat(`${path.resolve(FIXTURES_DIR, filename)}.src.js`);

            it("should parse correctly when sourceType is module", () => {
                let expected;

                try {
                    expected = require(`${path.resolve(__dirname, "../../", FIXTURES_DIR, filename)}.module-result.js`);
                } catch (err) {
                    expected = require(`${path.resolve(__dirname, "../../", FIXTURES_DIR, filename)}.result.js`);
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

    describe("general", () => {
        it("Should parse using 2015 instead of 6", () => {
            const ast = espree.parse("let foo = bar;", {
                ecmaVersion: 2015,
                comment: true,
                tokens: true,
                range: true,
                loc: true
            });

            assert.deepStrictEqual(tester.getRaw(ast), require("../fixtures/parse/all-pieces.json"));
        });

        it("Should throw error using invalid number", () => {
            assert.throws(() => {
                espree.parse(
                    "let foo = bar;", {
                        ecmaVersion: 32,
                        comment: true,
                        tokens: true,
                        range: true,
                        loc: true
                    }
                );
            }, "Invalid ecmaVersion.");
        });

        it("Should throw error using invalid year", () => {
            assert.throws(() => {
                espree.parse(
                    "let foo = bar;", {
                        ecmaVersion: 2050,
                        comment: true,
                        tokens: true,
                        range: true,
                        loc: true
                    }
                );
            }, "Invalid ecmaVersion.");
        });

    });

});
