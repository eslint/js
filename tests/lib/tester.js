/**
 * @fileoverview Tests for parsing and attaching comments.
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
