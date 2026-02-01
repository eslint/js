/**
 * @fileoverview Tests for checking that the commonjs entry points are still accessible
 * @author Mike Reinstein
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const assert = require("node:assert");
const eslintScope = require("../dist/eslint-scope.cjs");
const { version } = require("../package.json");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

describe("commonjs", () => {
	it("is an object", () => {
		assert.strictEqual(typeof eslintScope, "object");
	});

	it("has version equal to the version in package.json", () => {
		assert.strictEqual(eslintScope.version, version);
	});

	it("has exports", () => {
		[
			"analyze",
			"Definition",
			"PatternVisitor",
			"Reference",
			"Referencer",
			"Scope",
			"ScopeManager",
			"Variable",
		].forEach(prop => {
			assert.strictEqual(typeof eslintScope[prop], "function");
		});
	});
});
