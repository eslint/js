/**
 * @fileoverview Tests for version.
 * @author Milos Djermanovic
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import { expect } from "chai";
import * as eslintScope from "../lib/index.js";
import packageJson from "../package.json" with { type: "json" };

const { version } = packageJson;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

describe("version", () => {
	it("should be equal to the version in package.json", () => {
		expect(eslintScope.version).to.be.equal(version);
	});
});
