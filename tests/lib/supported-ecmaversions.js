/**
 * @fileoverview Tests for latestEcmaVersion & supportedEcmaVersions.
 * @author Kai Cataldo
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const assert = require("assert"),
    espree = require("../../espree");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

describe("latestEcmaVersion", () => {
    it("should return the latest supported ecmaVersion", () => {
        assert.strictEqual(espree.latestEcmaVersion, 12);
    });
});

describe("supportedEcmaVersions", () => {
    it("should return an array of all supported versions", () => {
        assert.deepStrictEqual(
            espree.supportedEcmaVersions,
            [3, 5, 6, 7, 8, 9, 10, 11, 12]
        );
    });
});
