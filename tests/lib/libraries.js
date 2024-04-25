/**
 * @fileoverview Tests for parsing libraries.
 * @author Nicholas C. Zakas
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import path from "path";
import shelljs from "shelljs";
import tester from "./tester.js";
import * as espree from "../../espree.js";
import assert from "assert";
import { fileURLToPath } from "url";
import { readFile } from "fs/promises";

// eslint-disable-next-line no-underscore-dangle -- Conventional
const __dirname = path.dirname(fileURLToPath(import.meta.url));


//------------------------------------------------------------------------------
// Setup
//------------------------------------------------------------------------------

const testFiles = shelljs.find(`${__dirname}/../fixtures/libraries`).filter(filename => path.extname(filename) === ".js");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

describe("Libraries", () => {
    testFiles.forEach(filename => {
        describe(filename, () => {

            // var filename = "angular-1.2.5.js";

            it("should produce correct AST when parsed", async () => {
                const output = await readFile(`${filename}.result.json`, "utf-8");
                const input = await readFile(filename, "utf-8");
                const result = JSON.stringify(tester.getRaw(espree.parse(input, {
                    ecmaVersion: 5,
                    loc: true,
                    range: true,
                    tokens: true
                })));

                assert.strictEqual(result, output);
            });
        });

    });
});
