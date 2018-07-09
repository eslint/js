/**
 * @fileoverview Tests for parsing and attaching comments.
 * @author Nicholas C. Zakas
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const assert = require("assert"),
    leche = require("leche"),
    path = require("path"),
    espree = require("../../espree"),
    shelljs = require("shelljs"),
    tester = require("./tester");

//------------------------------------------------------------------------------
// Setup
//------------------------------------------------------------------------------

const testFiles = shelljs.find("./tests/fixtures/attach-comments")
    .filter(filename => filename.indexOf(".src.js") > -1)
    .map(filename => filename.slice(0, filename.length - 7));

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

describe("attachComment: true", () => {

    leche.withData(testFiles, filename => {
        it("should produce correct AST when parsed with attachComments", () => {
            const output = require(path.resolve(__dirname, "../../", `${filename}.result.js`));
            const input = shelljs.cat(`${filename}.src.js`);
            let result;

            if (output.sourceType === "script") {
                result = espree.parse(input, {
                    loc: true,
                    range: true,
                    tokens: true,
                    attachComment: true
                });
            } else {
                result = espree.parse(input, {
                    loc: true,
                    range: true,
                    tokens: true,
                    attachComment: true,
                    sourceType: "module"
                });
            }

            assert.deepStrictEqual(tester.getRaw(result), output);
        });

    });


});
