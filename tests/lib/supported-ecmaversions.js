/**
 * @fileoverview Tests for getLatestEcmaVersion() & getSupportedEcmaVersions().
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

describe("getLatestEcmaVersion()", () => {
    it("should return the latest supported ecmaVersion", () => {
        assert.strictEqual(espree.getLatestEcmaVersion(), 11);
    });
});

describe("getSupportedEcmaVersions()", () => {
    it("should return an array of all supported versions", () => {
        assert.deepStrictEqual(
            espree.getSupportedEcmaVersions(),
            [3, 5, 6, 7, 8, 9, 10, 11]
        );
    });

    it("the array of supported versions should not be mutable by reference", () => {
        const supportedVersions = espree.getSupportedEcmaVersions();
        const originalValue = [...supportedVersions];

        supportedVersions.push("a", "b", "c");
        assert.deepStrictEqual(espree.getSupportedEcmaVersions(), originalValue);
    });
});
