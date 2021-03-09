/**
 * @fileoverview Tests for checking that the commonjs entry points are still accessible
 * @author Mike Reinstein
 */

// eslint-disable-next-line strict
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const assert = require("assert");
const tap = require("tap");
const espree = require("../../dist/espree.cjs");


tap.mochaGlobals();

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

describe("commonjs", () => {
    it("has parse", () => {

        assert.strictEqual(typeof espree.parse, "function");

        const ast = espree.parse("let foo = bar;", {
            ecmaVersion: 6,
            comment: true,
            tokens: true,
            range: true,
            loc: true
        });

        assert.strictEqual(typeof ast, "object");
    });

    it("has tokenize", () => {
        assert.strictEqual(typeof espree.tokenize, "function");
    });

    it("has version", () => {
        assert.strictEqual(typeof espree.version, "string");
    });

    it("has Syntax", () => {
        assert.strictEqual(typeof espree.Syntax, "object");
    });

    it("has VisitorKeys", () => {
        assert.strictEqual(typeof espree.VisitorKeys, "object");
    });

    it("has latestEcmaVersion", () => {
        assert.strictEqual(typeof espree.latestEcmaVersion, "number");
    });

    it("has supportedEcmaVersions", () => {
        assert.strictEqual(typeof espree.supportedEcmaVersions, "object");
    });
});
