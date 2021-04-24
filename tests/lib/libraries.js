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

// eslint-disable-next-line no-underscore-dangle
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

            it("should produce correct AST when parsed", () => {
                const output = shelljs.cat(`${filename}.result.json`);
                const input = shelljs.cat(filename);

                const result = JSON.stringify(tester.getRaw(espree.parse(input, {
                    loc: true,
                    range: true,
                    tokens: true
                })));

                assert.strictEqual(result, output);
            });
        });

    });
});
