/**
 * @fileoverview A simple script to update existing tests to reflect new
 *      parser changes.
 * @author Nicholas C. Zakas
 * @copyright 2014 Nicholas C. Zakas. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright
 *   notice, this list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above copyright
 *   notice, this list of conditions and the following disclaimer in the
 *   documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

"use strict";

/*
 * Usage:
 *      node tools/update-tests.js
 *
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var shelljs = require("shelljs"),
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

var FIXTURES_DIR = "./tests/fixtures/ecma-features",
    VERSION_DIR = "./tests/fixtures/ecma-version",
    COMMENTS_DIR = "./tests/fixtures/attach-comments",
    LIBRARIES_DIR = "./tests/fixtures/libraries";

var testFiles = getTestFilenames(FIXTURES_DIR),
    mixFiles = getTestFilenames(VERSION_DIR),
    commentFiles = getTestFilenames(COMMENTS_DIR),
    libraryFiles = getLibraryFilenames(LIBRARIES_DIR);


commentFiles.forEach(function(filename) {
    var testResultFilename = path.resolve(__dirname, "..", COMMENTS_DIR, filename) + ".result.js",
        code = shelljs.cat(path.resolve(COMMENTS_DIR, filename) + ".src.js"),
        result = getExpectedResult(code, {
            loc: true,
            range: true,
            tokens: true,
            attachComment: true,
            ecmaFeatures: {
                modules: true,
                classes: true
            }
        });

    outputResult(result, testResultFilename);
    result = null;
});

libraryFiles.forEach(function(filename) {
    var testResultFilename = path.resolve(__dirname, "..", LIBRARIES_DIR, filename) + ".result.json",
        code = shelljs.cat(path.resolve(LIBRARIES_DIR, filename)),
        result = getExpectedResult(code, {
            loc: true,
            range: true,
            tokens: true,
            attachComment: true
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

// update all tests in ecma-version
mixFiles.forEach(function(filename) {

    var feature = path.dirname(filename),
        code = shelljs.cat(path.resolve(VERSION_DIR, filename) + ".src.js"),
        config = {
            loc: true,
            range: true,
            tokens: true,
            ecmaVersion: 6,
            ecmaFeatures: {}
        };

    // config.ecmaFeatures = require(path.resolve(__dirname, "../", VERSION_DIR, filename) + ".config.js");

    var testResultFilename = path.resolve(__dirname, "..", VERSION_DIR, filename) + ".result.js",
        result = getExpectedResult(code, config);

    outputResult(result, testResultFilename);
});
