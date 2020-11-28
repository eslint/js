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
        const before = acorn.parse("var foo = bar /*world*/;", { ecmaVersion: 5 });

        require("../../espree");
        const after = acorn.parse("var foo = bar /*world*/;", { ecmaVersion: 5 });

        assert.deepStrictEqual(after, before);
    });

    it("acorn.parse() should not re-use the same identifier node in object patterns", () => {
        const code = "({x, y = 1} = {z})";

        const ast = acorn.parse(code, { ecmaVersion: 2015 });

        const assignment = ast.body[0].expression;
        const objectPattern = assignment.left;
        const objectExpression = assignment.right;

        const propertyX = objectPattern.properties[0];
        const propertyY = objectPattern.properties[1];
        const propertyZ = objectExpression.properties[0];

        assert.notStrictEqual(propertyX.key, propertyX.value); // true in v7, false in v8
        assert.notStrictEqual(propertyY.key, propertyY.value.left); // true in v7, false in v8
        assert.notStrictEqual(propertyZ.key, propertyZ.value); // true in v7, false in v8

    });
});
