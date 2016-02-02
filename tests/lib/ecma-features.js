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
    shelljs = require("shelljs"),
    tester = require("./tester");

// var espree = require("esprima-fb");
//------------------------------------------------------------------------------
// Setup
//------------------------------------------------------------------------------

var FIXTURES_DIR = "./tests/fixtures/ecma-features";

var testFiles = shelljs.find(FIXTURES_DIR).filter(function(filename) {
    return filename.indexOf(".src.js") > -1;
}).map(function(filename) {
    return filename.substring(FIXTURES_DIR.length - 1, filename.length - 7);  // strip off ".src.js"
// }).filter(function(filename) {
//     return /experimental/.test(filename);
});


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

/**
 * Returns whether a feature should throw in its tests when it is enabled.
 * @param {string} feature The name of the feature.
 * @returns {boolean} Whether it should throw in its tests when it is enabled.
 */
function shouldThrowInTestsWhenEnabled(feature) {
    return (feature === "impliedStrict");
}

describe("ecmaFeatures", function() {

    var config;

    beforeEach(function() {
        config = {
            loc: true,
            range: true,
            tokens: true,
            ecmaVersion: 6,
            ecmaFeatures: {}
        };
    });

    leche.withData(testFiles, function(filename) {
        // Uncomment and fill in filename to focus on a single file
        // var filename = "jsx/invalid-matching-placeholder-in-closing-tag";
        var feature = path.dirname(filename),
            isPermissive = !shouldThrowInTestsWhenEnabled(feature),
            code = shelljs.cat(path.resolve(FIXTURES_DIR, filename) + ".src.js");

        it("should parse correctly when " + feature + " is " + isPermissive, function() {
            config.ecmaFeatures[feature] = isPermissive;
            var expected = require(path.resolve(__dirname, "../../", FIXTURES_DIR, filename) + ".result.js");

            tester.assertMatches(code, config, expected);
        });

        it("should throw an error when " + feature + " is " + !isPermissive, function() {
            config.ecmaFeatures[feature] = !isPermissive;

            assert.throws(function() {
                espree.parse(code, config);
            });

        });
    });

});
