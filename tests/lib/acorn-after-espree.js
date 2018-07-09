/**
 * @fileoverview Tests for checking acorn works after espree was loaded.
 * @author Toru Nagashima
 */


"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const acorn = require("acorn"),
    assert = require("chai").assert;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

describe("acorn", () => {
    it("acorn.parse() should work after espree was loaded.", () => {
        const before = acorn.parse("var foo = bar /*world*/;");

        require("../../espree");
        const after = acorn.parse("var foo = bar /*world*/;");

        assert.deepStrictEqual(after, before);
    });
});
