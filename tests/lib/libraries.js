/**
 * @fileoverview Tests for parsing libraries.
 * @author Nicholas C. Zakas
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var assert = require("chai").assert,
    leche = require("leche"),
    path = require("path"),
    espree = require("../../espree"),
    shelljs = require("shelljs"),
    tester = require("./tester");

//------------------------------------------------------------------------------
// Setup
//------------------------------------------------------------------------------

var testFiles = shelljs.find("./tests/fixtures/libraries").filter(function(filename) {
    return path.extname(filename) === ".js";
});

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

describe("Libraries", function() {

    leche.withData(testFiles, function(filename) {
        // var filename = "angular-1.2.5.js";

        it("should produce correct AST when parsed", function() {

            this.timeout(10000);  // eslint-disable-line no-invalid-this

            var output = shelljs.cat(path.resolve(__dirname, "../../", filename + ".result.json"));
            var input = shelljs.cat(filename);

            var result = JSON.stringify(tester.getRaw(espree.parse(input, {
                loc: true,
                range: true,
                tokens: true,
                attachComment: true
            })));

            assert.equal(result, output);
        });

    });


});
