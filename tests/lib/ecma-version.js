/**
 * @fileoverview Tests for ECMAScript version features.
 * @author Nicholas C. Zakas
 * @copyright 2015 Nicholas C. Zakas. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright
 *   notice, this list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above copyright
 *   notice, this list of conditions and the following disclaimer in the
 *   documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
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
