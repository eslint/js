/**
 * @fileoverview Tests for parsing and attaching comments.
 * @author Nicholas C. Zakas
 * @copyright jQuery Foundation and other contributors, https://jquery.org/
 * BSD 2-Clause License
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

var testFiles = shelljs.find("./tests/fixtures/attach-comments").filter(function(filename) {
    return filename.indexOf(".src.js") > -1;
}).map(function(filename) {
    return filename.substring(0, filename.length - 7);  // strip off ".src.js"
// }).filter(function(filename) {
//     return /line-and-block/.test(filename);
});

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

describe("attachComment: true", function() {

    leche.withData(testFiles, function(filename) {
        it("should produce correct AST when parsed with attachComments", function() {
            var output = require(path.resolve(__dirname, "../../", filename + ".result.js"));
            var input = shelljs.cat(filename + ".src.js");
            var result;

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

            assert.deepEqual(tester.getRaw(result), output);
        });

    });


});
