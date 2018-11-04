/**
 * @fileoverview Tests for parsing libraries.
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

const testFiles = shelljs.find("./tests/fixtures/libraries").filter(filename => path.extname(filename) === ".js");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

describe("Libraries", () => {

    leche.withData(testFiles, filename => {

        // var filename = "angular-1.2.5.js";

        it("should produce correct AST when parsed", function() {

            this.timeout(10000); // eslint-disable-line no-invalid-this

            const output = shelljs.cat(path.resolve(__dirname, "../../", `${filename}.result.json`));
            const input = shelljs.cat(filename);

            const result = JSON.stringify(tester.getRaw(espree.parse(input, {
                loc: true,
                range: true,
                tokens: true,
                attachComment: true
            })));

            assert.strictEqual(result, output);
        });

    });


});
