/**
 * @fileoverview Tests for ECMA feature flags
 * @author Nicholas C. Zakas
 * @copyright 2014 Nicholas C. Zakas. All rights reserved.
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

var assert = require("chai").assert,
    leche = require("leche"),
    path = require("path"),
    espree = require("../../espree"),
    shelljs = require("shelljs");

// var espree = require("esprima-fb");
//------------------------------------------------------------------------------
// Setup
//------------------------------------------------------------------------------

var MODULES_IMPORT_DIR = "./tests/fixtures/modules/import";
var MODULES_EXPORT_DIR = "./tests/fixtures/modules/export";

var testImportFiles = shelljs.find(MODULES_IMPORT_DIR).filter(function(filename) {
    return filename.indexOf(".src.js") > -1;
}).map(function(filename) {
    return filename.substring(MODULES_IMPORT_DIR.length - 1, filename.length - 7);  // strip off ".src.js"
});

var testExportFiles = shelljs.find(MODULES_EXPORT_DIR).filter(function(filename) {
    return filename.indexOf(".src.js") > -1;
}).map(function(filename) {
    return filename.substring(MODULES_EXPORT_DIR.length - 1, filename.length - 7);  // strip off ".src.js"
});


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

describe("modules", function() {

    leche.withData(testImportFiles, function(filename) {
        // Uncomment and fill in filename to focus on a single file
        // var filename = "jsx/invalid-matching-placeholder-in-closing-tag";
        var code = shelljs.cat(path.resolve(MODULES_IMPORT_DIR, filename) + ".src.js");

        it("should parse import declarations correctly when sourceType is `module`", function() {
            var expected = require(path.resolve(__dirname, "../../", MODULES_IMPORT_DIR, filename) + ".result.js");
            var result;

            try {
                result = espree.parse(code, {
                    loc: true,
                    range: true,
                    sourceType: "module"
                });
            } catch (ex) {

                // if the result is an error, create an error object so deepEqual works
                if (expected.message || expected.description) {
                    var expectedError = new Error(expected.message || expected.description);
                    Object.keys(expected).forEach(function(key) {
                        expectedError[key] = expected[key];
                    });
                    expected = expectedError;
                }

                result = ex;    // if an error is thrown, match the error
            }
            assert.deepEqual(result, expected);
        });

        it("should throw an error for import declarations when sourceType is not `module`", function() {
            assert.throws(function() {
                espree.parse(code, {
                    loc: true,
                    range: true
                });
            });
        });
    });

    leche.withData(testExportFiles, function(filename) {
        // Uncomment and fill in filename to focus on a single file
        // var filename = "jsx/invalid-matching-placeholder-in-closing-tag";
        var code = shelljs.cat(path.resolve(MODULES_EXPORT_DIR, filename) + ".src.js");

        it("should parse export declarations correctly when sourceType is `module`", function() {
            var expected = require(path.resolve(__dirname, "../../", MODULES_EXPORT_DIR, filename) + ".result.js");
            var result;

            try {
                result = espree.parse(code, {
                    loc: true,
                    range: true,
                    sourceType: "module"
                });
            } catch (ex) {

                // if the result is an error, create an error object so deepEqual works
                if (expected.message || expected.description) {
                    var expectedError = new Error(expected.message || expected.description);
                    Object.keys(expected).forEach(function(key) {
                        expectedError[key] = expected[key];
                    });
                    expected = expectedError;
                }

                result = ex;    // if an error is thrown, match the error
            }
            assert.deepEqual(result, expected);
        });

        it("should throw an error for export declarations when sourceType is not `module`", function() {
            assert.throws(function() {
                espree.parse(code, {
                    loc: true,
                    range: true
                });
            });
        });
    });

});
