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
    espree = require("../../espree");

//------------------------------------------------------------------------------
// Private
//------------------------------------------------------------------------------

/**
 * Gets a raw version of the AST that is suitable for comparison. This is necessary
 * due to the different order of properties across parsers.
 * @param {ASTNode} ast The AST to convert.
 * @returns {ASTNode} The converted AST.
 * @private
 */
function getRaw(ast) {
    return JSON.parse(JSON.stringify(ast, function(key, value) {
        if ((key === "start" || key === "end") && typeof value === "number") {
            return undefined; // eslint-disable-line no-undefined
        }

        return value;
    }));
}

//------------------------------------------------------------------------------
// Public
//------------------------------------------------------------------------------

module.exports = {
    getRaw: getRaw,

    assertMatches: function(code, config, expected) {
        var result;

        try {
            result = espree.parse(code, config);
            result = getRaw(result);
        } catch (ex) {

            // if the result is an error, create an error object so deepEqual works
            if (expected.message || expected.description) {
                result = getRaw(ex);
                result.message = ex.message;
            } else {
                throw ex;
            }

        }

        assert.deepEqual(result, expected);
    }
};
