/**
 * @fileoverview Tests for options.
 * @author Aniketh Saha
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const assert = require("assert"),
    { normalizeOptions } = require("../../lib/options");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

describe("normalizeOptions", () => {
    it("should throw error for sourceType module and ecmaVersion < 6", () => {
        const option = {
            sourceType: "module",
            ecmaVersion: 5
        };

        assert.throws(() => {
            normalizeOptions(option);
        });
    });

    it("should normalize the ecmaVersion from year to version number", () => {
        const option = {
            ecmaVersion: 2018
        };

        const output = normalizeOptions(option);

        assert.strictEqual(output.ecmaVersion, 9);
    });

    it("should throw error for unsupported ecmaVersion", () => {
        const option = {
            ecmaVersion: 2040
        };

        assert.throws(() => {
            normalizeOptions(option);
        });
    });

    it("should throw error for unsupported sourceType", () => {
        const option = {
            sourceType: "esm"
        };

        assert.throws(() => {
            normalizeOptions(option);
        });
    });
});
