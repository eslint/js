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

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function getTestFilenames(directory) {
    return shelljs.find(directory).filter(function(filename) {
        return filename.indexOf(".src.js") > -1;
    }).map(function(filename) {
        return filename.substring(directory.length - 1, filename.length - 7);  // strip off ".src.js"
    });
}

function getLibraryFilenames(directory) {
    return shelljs.find(directory).filter(function(filename) {
        return filename.indexOf(".js") > -1 && filename.indexOf(".result.js") === -1;
    }).map(function(filename) {
        return filename.substring(directory.length - 1);  // strip off directory
    });
}

function outputResult(result, testResultFilename) {
    `export default ${tester.getAstCode(result)};`.to(testResultFilename);
}

//------------------------------------------------------------------------------
// Setup
//------------------------------------------------------------------------------

var FIXTURES_DIR = "./tests/fixtures/ecma-features",
    LIBRARIES_DIR = "./tests/fixtures/libraries";

var testFiles = getTestFilenames(FIXTURES_DIR),
    libraryFiles = getLibraryFilenames(LIBRARIES_DIR);

libraryFiles.forEach(function(filename) {
    var testResultFilename = path.resolve(__dirname, "..", LIBRARIES_DIR, filename) + ".result.json",
        code = shelljs.cat(path.resolve(LIBRARIES_DIR, filename)),
        result = getExpectedResult(code, {
            loc: true,
            range: true,
            tokens: true
        });
    JSON.stringify(result).to(testResultFilename);
    result = null;
});

// update all tests in ecma-features
testFiles.forEach(function(filename) {

    var feature = path.dirname(filename),
        code = shelljs.cat(path.resolve(FIXTURES_DIR, filename) + ".src.js"),
        config = {
            loc: true,
            range: true,
            tokens: true,
            ecmaVersion: 6,
            ecmaFeatures: {}
        };

    config.ecmaFeatures[feature] = true;
    var testResultFilename = path.resolve(__dirname, "..", FIXTURES_DIR, filename) + ".result.js";
    var result = getExpectedResult(code, config);

    outputResult(result, testResultFilename);
});
