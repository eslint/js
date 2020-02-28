/**
 * @fileoverview A simple script to update existing tests to reflect new
 *      parser changes.
 * @author Nicholas C. Zakas

"use strict";

/*
 * Usage:
 *      node tools/update-tests.js
 *
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const shelljs = require("shelljs"),
    espree = require("../espree"),
    tester = require("../tests/lib/tester"),
    path = require("path");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

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
    ("module.exports = " + JSON.stringify(result, null, "    ") + ";").to(testResultFilename);
}

//------------------------------------------------------------------------------
// Setup
//------------------------------------------------------------------------------

const FIXTURES_DIR = "./tests/fixtures/ecma-features",
    FIXTURES_VERSION_DIR = "./tests/fixtures/ecma-version",
    LIBRARIES_DIR = "./tests/fixtures/libraries";

const testFiles = getTestFilenames(FIXTURES_DIR),
    versionFiles = getTestFilenames(FIXTURES_VERSION_DIR),
    libraryFiles = getLibraryFilenames(LIBRARIES_DIR);

libraryFiles.forEach((filename) => {
    const testResultFilename = path.resolve(__dirname, "..", LIBRARIES_DIR, filename) + ".result.json",
        code = shelljs.cat(path.resolve(LIBRARIES_DIR, filename)),
        result = getExpectedResult(code, {
            loc: true,
            range: true,
            tokens: true
        });
    JSON.stringify(result).to(testResultFilename);
});

// update all tests in ecma-features
testFiles.forEach((filename) => {
    const feature = path.dirname(filename),
        code = shelljs.cat(path.resolve(FIXTURES_DIR, filename) + ".src.js"),
        config = {
            loc: true,
            range: true,
            tokens: true,
            ecmaVersion: 6,
            ecmaFeatures: {
                [feature]: true
            }
        };

    const testResultFilename = path.resolve(__dirname, "..", FIXTURES_DIR, filename) + ".result.js";
    const result = getExpectedResult(code, config);

    outputResult(result, testResultFilename);
});

versionFiles.forEach((filename) => {
    const version = Number(filename.substring(0, filename.indexOf("/"))),
        code = shelljs.cat(path.resolve(FIXTURES_VERSION_DIR, filename) + ".src.js"),
        config = {
            loc: true,
            range: true,
            tokens: true,
            ecmaVersion: version
        };

    const testResultFilename = path.resolve(__dirname, "..", FIXTURES_VERSION_DIR, filename) + ".result.js",
        result = getExpectedResult(code, config);

    outputResult(result, testResultFilename);
});
