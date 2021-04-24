/**
 * @fileoverview Tests for ECMAScript version features.
 * @author Nicholas C. Zakas
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import fs from "fs";
import path from "path";
import shelljs from "shelljs";
import tester from "./tester.js";
import * as espree from "../../espree.js";
import assert from "assert";
import { fileURLToPath, pathToFileURL } from "url";


// eslint-disable-next-line no-underscore-dangle
const __dirname = path.dirname(fileURLToPath(import.meta.url));


const allPiecesJson = JSON.parse(fs.readFileSync(`${__dirname}/../fixtures/parse/all-pieces.json`, "utf8"));

// var espree = require("esprima-fb");
//------------------------------------------------------------------------------
// Setup
//------------------------------------------------------------------------------

const FIXTURES_DIR = path.resolve(__dirname, "..", "fixtures/ecma-version");


const allTestFiles = shelljs.find(FIXTURES_DIR)
    .filter(filename => filename.includes(".src.js"))
    .map(filename => filename.slice(FIXTURES_DIR.length, filename.length - 7)); // strip off ".src.js"


const scriptOnlyTestFiles = allTestFiles.filter(filename => !filename.includes("modules"));


const moduleTestFiles = allTestFiles.filter(filename => !filename.includes("not-strict") && !filename.includes("edge-cases"));

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
        scriptOnlyTestFiles.forEach(filename => {
            describe(filename, () => {
                const version = filename.slice(1, filename.indexOf("/", 1));

                // Uncomment and fill in filename to focus on a single file
                // var filename = "newTarget/simple-new-target";
                const code = shelljs.cat(`${FIXTURES_DIR}/${filename}.src.js`);

                it("should parse correctly when sourceType is script", async () => {
                    config.ecmaVersion = Number(version);

                    const absolutePath = path.resolve(__dirname, FIXTURES_DIR, filename.slice(1));
                    // eslint-disable-next-line node/no-unsupported-features/es-syntax
                    const expected = await import(`${pathToFileURL(absolutePath).href}.result.js`);

                    tester.assertMatches(code, config, expected.default);
                });
            });

        });

    });


    describe("Modules", () => {
        moduleTestFiles.forEach(filename => {
            describe(filename, () => {
                const version = filename.slice(1, filename.indexOf("/", 1));
                const code = shelljs.cat(`${FIXTURES_DIR}/${filename}.src.js`);

                it("should parse correctly when sourceType is module", async () => {
                    const absolutePath = path.resolve(__dirname, FIXTURES_DIR, filename.slice(1));

                    let expected;

                    try {
                        // eslint-disable-next-line node/no-unsupported-features/es-syntax
                        expected = await import(`${pathToFileURL(absolutePath).href}.module-result.js`);
                    } catch {
                        // eslint-disable-next-line node/no-unsupported-features/es-syntax
                        expected = await import(`${pathToFileURL(absolutePath).href}.result.js`);
                    }

                    if (expected) {
                        expected = expected.default;
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

            assert.deepStrictEqual(tester.getRaw(ast), allPiecesJson);
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
            }, /Invalid ecmaVersion/u);
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
            }, /Invalid ecmaVersion/u);
        });

        it("Should throw error when non-numeric year is provided", () => {
            assert.throws(() => {
                espree.parse(
                    "let foo = bar;", {
                        ecmaVersion: "2015",
                        comment: true,
                        tokens: true,
                        range: true,
                        loc: true
                    }
                );
            }, /ecmaVersion must be a number. Received value of type string instead/u);
        });

        it("Should throw error when using module in pre-ES6", () => {
            assert.throws(() => {
                espree.parse(
                    "let foo = bar;", {
                        ecmaVersion: 5,
                        sourceType: "module"
                    }
                );
            }, /sourceType 'module' is not supported when ecmaVersion < 2015/u);
        });
    });

});
