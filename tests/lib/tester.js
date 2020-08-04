/**
 * @fileoverview Tests for parsing and attaching comments.
 * @author Nicholas C. Zakas
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const assert = require("assert"),
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
    return JSON.parse(
        JSON.stringify(ast, (key, value) => {
            if ((key === "start" || key === "end") && typeof value === "number") {
                return undefined; // eslint-disable-line no-undefined
            }

            // JSON cannot handle BigInt.
            if (typeof value === "bigint") {
                return `$$BIGINT$$${value}`;
            }

            return value;
        }),
        (_key, value) => {
            if (typeof value === "string" && value.startsWith("$$BIGINT$$")) {
                return BigInt(value.slice("$$BIGINT$$".length));
            }
            return value;
        }
    );
}

//------------------------------------------------------------------------------
// Public
//------------------------------------------------------------------------------

module.exports = {
    getRaw,

    assertMatches(code, config, expected) {
        let result;

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

        assert.deepStrictEqual(result, getRaw(expected));
    }
};
