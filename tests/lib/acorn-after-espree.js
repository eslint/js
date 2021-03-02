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


tap.mochaGlobals();

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

describe("acorn", () => {
    it("acorn.parse() should work after espree was loaded.", async () => {
        const before = acorn.parse("var foo = bar /*world*/;");

        // eslint-disable-next-line node/no-unsupported-features/es-syntax
        await import("../../espree.js");

        const after = acorn.parse("var foo = bar /*world*/;");

        assert.deepStrictEqual(after, before);
    });
});
