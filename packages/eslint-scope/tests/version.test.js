/**
 * @fileoverview Tests for version.
 * @author Milos Djermanovic
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import { expect } from "chai";
import * as eslintScope from "../lib/index.js";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";

// eslint-disable-next-line no-underscore-dangle -- Conventional
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const { version } = JSON.parse(fs.readFileSync(`${__dirname}/../package.json`, "utf8"));

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

describe("version", () => {
    it("should be equal to the version in package.json", () => {
        expect(eslintScope.version).to.be.equal(version);
    });
});
