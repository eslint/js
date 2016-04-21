/**
 * @fileoverview A simple script to update existing tests to reflect new
 *      parser changes.
 * @author Nicholas C. Zakas

"use strict";

/*
 * Usage:
 *      node tools/update-tests-esprima.js [directory]
 *
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var shelljs = require("shelljs"),
    esprima = require("esprima"),
    path = require("path");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

var directory = process.argv[2];

function getExpectedResult(code, config) {
    try {
        return esprima.parse(code, config);
    } catch (ex) {
        return ex;    // if an error is thrown, match the error
    }
}

function getTestFilenames(directory) {
    return shelljs.find(directory).filter(function(filename) {
        return filename.indexOf(".src.js") > -1;
    }).map(function(filename) {
        return filename.substring(directory.length - 1, filename.length - 7);  // strip off ".src.js"
    });
}

function outputResult(result, testResultFilename) {
    ("module.exports = " + JSON.stringify(result, null, "    ") + ";").to(testResultFilename);
}

//------------------------------------------------------------------------------
// Setup
//------------------------------------------------------------------------------

var FIXTURES_DIR = "./tests/fixtures/" + directory;

var testFiles = getTestFilenames(FIXTURES_DIR);

// update all tests in ecma-features
testFiles.forEach(function(filename) {

    var feature = path.dirname(filename),
        code = shelljs.cat(path.resolve(FIXTURES_DIR, filename) + ".src.js"),
        config = {
            loc: true,
            range: true,
            ecmaFeatures: {}
        };

    config.ecmaFeatures[feature] = true;
    var testResultFilename = path.resolve(__dirname, "..", FIXTURES_DIR, filename) + ".result.js";
    var result = getExpectedResult(code, config);
    result.sourceType = "script";
    outputResult(result, testResultFilename);
});
