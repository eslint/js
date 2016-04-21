/**
 * @fileoverview A simple script to help generate test cases
 * @author Nicholas C. Zakas
 */

"use strict";

/*
 * Usage:
 *      node tools/create-test.js ecma-features/binaryLiterals/ file_with_code.js
 *
 * The file with code should use "/*!espree-section: name/" as a separator between examples
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var shelljs = require("shelljs"),
    esprima = require("../espree"),
    path = require("path");

//------------------------------------------------------------------------------
// Initialization
//------------------------------------------------------------------------------

var PATTERN = /\/\*!espree\-section:\s*[a-z\d\-]+\*\//gi;

var filename = process.argv[2],
    codeFilename = process.argv[3];

if (!codeFilename) {
    console.error("Missing code to generate tests for");
    console.error("Usage: node create-test.js ecma-features/binaryLiterals/ file_with_code.js");
    process.exit(1);
}

if (!filename) {
    console.error("Missing filename to generate tests for");
    console.error("Usage: node create-test.js ecma-features/binaryLiterals/ file_with_code.js");
    process.exit(1);
}

var rawCode = shelljs.cat(codeFilename),
    code = rawCode.split(PATTERN),
    sections = rawCode.match(PATTERN);

// pop off first code, it will be an empty string
code.shift();

if (!sections || sections.length !== code.length) {
    console.error("Missing a /*!espree-section: name*/ in the code file.");
    process.exit(1);
}

code.forEach(function(source, index) {

    var fullFilename = filename + "/" + (sections[index].substring(18, sections[index].length - 2).trim()),
        testSourceFilename = path.resolve("__dirname", "../tests/fixtures/" + fullFilename + ".src.js"),
        testResultFilename = path.resolve("__dirname", "../tests/fixtures/" + fullFilename + ".result.js");

    var result,
        sourceCode = source.trim();

    // add an extra semicolon if there's not already one at the end - helps normalize empty lines at end of input
    if (sourceCode[sourceCode.length - 1] !== ";") {
        sourceCode += ";";
    }

    //------------------------------------------------------------------------------
    // Run the code against Esprima to generate the AST to match against
    //------------------------------------------------------------------------------

    try {
        result = esprima.parse(sourceCode, {
            ecmaVersion: 6,
            ecmaFeatures: {
                experimentalObjectRestSpread: true
            },
            loc: true,
            range: true,
            tokens: true
        });
    } catch (ex) {
        result = ex;
    }

    sourceCode.to(testSourceFilename);
    ("module.exports = " + JSON.stringify(result, null, "    ")).to(testResultFilename);
});
