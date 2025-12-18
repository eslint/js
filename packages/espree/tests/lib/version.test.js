/**
 * @fileoverview Tests for version.
 * @author Milos Djermanovic
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import * as espree from "../../espree.js";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";
import assert from "node:assert";

// eslint-disable-next-line no-underscore-dangle -- Conventional
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const { version } = JSON.parse(fs.readFileSync(`${__dirname}/../../package.json`, "utf8"));

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

describe("version", () => {
    it("should be equal to the version in package.json", () => {
        assert.strictEqual(espree.version, version);
    });
});
