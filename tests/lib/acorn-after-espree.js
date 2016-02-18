/**
 * @fileoverview Tests for checking acorn works after espree was loaded.
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */


"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var acorn = require("acorn"),
    assert = require("chai").assert;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

describe("acorn", function() {
    it("acorn.parse() should work after espree was loaded.", function() {
        var before = acorn.parse("var foo = bar /*world*/;");
        require("../../espree");
        var after = acorn.parse("var foo = bar /*world*/;");

        assert.deepEqual(after, before);
    });
});
