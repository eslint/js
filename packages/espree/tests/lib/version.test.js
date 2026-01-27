/**
 * @fileoverview Tests for version.
 * @author Milos Djermanovic
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import * as espree from "../../espree.js";
import assert from "node:assert";
import packageJson from "../../package.json" with { type: "json" };

const { version } = packageJson;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

describe("version", () => {
	it("should be equal to the version in package.json", () => {
		assert.strictEqual(espree.version, version);
	});
});
