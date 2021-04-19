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
import * as espree from "../espree.js";
import tester from "../tests/lib/tester.js";
import path from "path";
import { fileURLToPath } from "url";

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function getExpectedResult(code, config) {
    try {
        return tester.getRaw(espree.parse(code, config));
    } catch (ex) {
        var raw = tester.getRaw(ex);
        raw.message = ex.message;
        return raw;
    }
}

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
    let code = `export default ${JSON.stringify(result, (key, value) => {
        return (typeof value === "bigint") ? `bigint<${value}n>` : value;
    }, 4)};`;
    
    code = code.replace(/"bigint<(\d+n)>"/g, "$1");
    
    code.to(testResultFilename);
}

//------------------------------------------------------------------------------
// Setup
//------------------------------------------------------------------------------

var FIXTURES_DIR = "./tests/fixtures/ecma-features",
    FIXTURES_VERSION_DIR = "./tests/fixtures/ecma-version",
    LIBRARIES_DIR = "./tests/fixtures/libraries";

var testFiles = getTestFilenames(FIXTURES_DIR),
    versionFiles = getTestFilenames(FIXTURES_VERSION_DIR),
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

versionFiles.forEach(function(filename) {

    var version = Number(filename.substring(0, filename.indexOf("/"))),
        code = shelljs.cat(path.resolve(FIXTURES_VERSION_DIR, filename) + ".src.js"),
        config = {
            loc: true,
            range: true,
            tokens: true,
            ecmaVersion: version
        };

    var testResultFilename = path.resolve(__dirname, "..", FIXTURES_VERSION_DIR, filename) + ".result.js",
        result = getExpectedResult(code, config);

    outputResult(result, testResultFilename);
});
