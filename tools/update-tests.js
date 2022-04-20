/* globals getExpectedResult */
/* eslint-disable no-restricted-properties */
/**
 * @fileoverview A simple script to update existing tests to reflect new
 *      parser changes.
 * @author Nicholas C. Zakas
 *
 * Usage:
 *      node tools/update-tests.js
 *
 */

//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------

import shelljs from "shelljs";
import tester from "../tests/lib/tester.js";
import path from "path";
import { fileURLToPath } from "url";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

// eslint-disable-next-line no-underscore-dangle -- Conventional
const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Gets test file names
 * @param {string} directory The directory
 * @returns {string[]} The file names
 */
function getTestFilenames(directory) {
    return shelljs.find(directory).filter(filename =>
        filename.indexOf(".src.js") > -1).map(filename =>
        filename.substring(directory.length - 1, filename.length - 7)); // strip off ".src.js"
}

/**
 * Gets library file names
 * @param {string} directory The directory
 * @returns {string[]} The file names
 */
function getLibraryFilenames(directory) {
    return shelljs.find(directory).filter(filename =>
        filename.indexOf(".js") > -1 &&
            filename.indexOf(".result.js") === -1).map(filename =>
        filename.substring(directory.length - 1)); // strip off directory
}

/**
 * Outputs the result.
 * @param {any} result The result
 * @param {string} testResultFilename Test result file name
 * @returns {void}
 */
function outputResult(result, testResultFilename) {
    `export default ${tester.getAstCode(result)};`.to(testResultFilename);
}

//------------------------------------------------------------------------------
// Setup
//------------------------------------------------------------------------------

const FIXTURES_DIR = "./tests/fixtures/ecma-features",
    LIBRARIES_DIR = "./tests/fixtures/libraries";

const testFiles = getTestFilenames(FIXTURES_DIR),
    libraryFiles = getLibraryFilenames(LIBRARIES_DIR);

libraryFiles.forEach(filename => {
    const testResultFilename = `${path.resolve(__dirname, "..", LIBRARIES_DIR, filename)}.result.json`,
        code = shelljs.cat(path.resolve(LIBRARIES_DIR, filename));
    let result = getExpectedResult(code, {
        loc: true,
        range: true,
        tokens: true
    });

    JSON.stringify(result).to(testResultFilename);
    result = null;
});

// update all tests in ecma-features
testFiles.forEach(filename => {

    const feature = path.dirname(filename),
        code = shelljs.cat(`${path.resolve(FIXTURES_DIR, filename)}.src.js`),
        config = {
            loc: true,
            range: true,
            tokens: true,
            ecmaVersion: 6,
            ecmaFeatures: {}
        };

    config.ecmaFeatures[feature] = true;
    const testResultFilename = `${path.resolve(__dirname, "..", FIXTURES_DIR, filename)}.result.js`;
    const result = getExpectedResult(code, config);

    outputResult(result, testResultFilename);
});
