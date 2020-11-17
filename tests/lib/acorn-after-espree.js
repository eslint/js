/**
 * @fileoverview Tests for checking acorn works after espree was loaded.
 * @author Toru Nagashima
 */


"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const acorn = require("acorn"),
    assert = require("assert");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

describe("acorn", () => {
    it("acorn.parse() should work after espree was loaded.", () => {
        const before = acorn.parse("var foo = bar /*world*/;", {ecmaVersion: 5});

        require("../../espree");
        const after = acorn.parse("var foo = bar /*world*/;", {ecmaVersion: 5});

        assert.deepStrictEqual(after, before);
    });
});
