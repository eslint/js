/**
 * @fileoverview Tests for checking acorn works after espree was loaded.
 * @author Toru Nagashima
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import * as acorn from "acorn";
import assert from "assert";
import tap from "tap";
import "../../espree.js";


tap.mochaGlobals();

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

describe("acorn", () => {
    it("acorn.parse() should work after espree was loaded.", () => {
        const before = acorn.parse("var foo = bar /*world*/;");

        const after = acorn.parse("var foo = bar /*world*/;");

        assert.deepStrictEqual(after, before);
    });
});
