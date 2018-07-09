/**
 * @fileoverview Tests for ECMA feature flags
 * @author Nicholas C. Zakas
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const assert = require("chai").assert,
    leche = require("leche"),
    path = require("path"),
    espree = require("../../espree"),
    shelljs = require("shelljs"),
    tester = require("./tester");

// var espree = require("esprima-fb");
//------------------------------------------------------------------------------
// Setup
//------------------------------------------------------------------------------

const FIXTURES_DIR = "./tests/fixtures/ecma-features";

const testFiles = shelljs.find(FIXTURES_DIR)
    .filter(filename => filename.indexOf(".src.js") > -1)
    .map(filename => filename.slice(FIXTURES_DIR.length - 1, filename.length - 7));


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

describe("ecmaFeatures", () => {

    let config;

    beforeEach(() => {
        config = {
            loc: true,
            range: true,
            tokens: true,
            ecmaVersion: 6,
            ecmaFeatures: {}
        };
    });

    leche.withData(testFiles, filename => {

        // Uncomment and fill in filename to focus on a single file
        // var filename = "jsx/invalid-matching-placeholder-in-closing-tag";
        const feature = path.dirname(filename),
            isPermissive = !shouldThrowInTestsWhenEnabled(feature),
            code = shelljs.cat(`${path.resolve(FIXTURES_DIR, filename)}.src.js`);

        it(`should parse correctly when ${feature} is ${isPermissive}`, () => {
            config.ecmaFeatures[feature] = isPermissive;
            const expected = require(`${path.resolve(__dirname, "../../", FIXTURES_DIR, filename)}.result.js`);

            tester.assertMatches(code, config, expected);
        });

        it(`should throw an error when ${feature} is ${!isPermissive}`, () => {
            config.ecmaFeatures[feature] = !isPermissive;

            assert.throws(() => {
                espree.parse(code, config);
            });

        });
    });
});
