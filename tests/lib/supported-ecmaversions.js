/**
 * @fileoverview Tests for latestEcmaVersion() & supportedEcmaVersions().
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

describe("latestEcmaVersion()", () => {
    it("should return the latest supported ecmaVersion", () => {
        assert.strictEqual(espree.latestEcmaVersion(), 11);
    });
});

describe("supportedEcmaVersions()", () => {
    it("should return an array of all supported versions", () => {
        assert.deepStrictEqual(
            espree.supportedEcmaVersions(),
            [3, 5, 6, 7, 8, 9, 10, 11]
        );
    });

    it("the array of supported versions should not be mutable by reference", () => {
        const supportedVersions = espree.supportedEcmaVersions();
        const originalValue = [...supportedVersions];

        supportedVersions.push("a", "b", "c");
        assert.deepStrictEqual(espree.supportedEcmaVersions(), originalValue);
    });
});
