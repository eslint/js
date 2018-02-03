/**
 * @fileoverview Tests for ECMA feature flags
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

    describe("combination with 'ecmaVersion:2018' and 'ecmaFeatures.experimentalObjectRestSpread:true'", function() {
        it("should generate ExperimentalRestProperty/ExperimentalSpreadProperty.", function() {
            config.ecmaVersion = 2018;
            config.ecmaFeatures.experimentalObjectRestSpread = true;

            var ast = espree.parse("({...rest} = {...spread})", config);

            assert.strictEqual(ast.body[0].expression.left.properties[0].type, "ExperimentalRestProperty");
            assert.strictEqual(ast.body[0].expression.right.properties[0].type, "ExperimentalSpreadProperty");
        });
    });
});
