/**
 * @fileoverview Tests for ECMAScript version features.
 * @author Nicholas C. Zakas
 * @copyright jQuery Foundation and other contributors, https://jquery.org/
 * BSD 2-Clause License
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var leche = require("leche"),
    path = require("path"),
    shelljs = require("shelljs"),
    tester = require("./tester");

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
                var expected = require(path.resolve(__dirname, "../../", FIXTURES_DIR, filename) + ".result.js");

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
