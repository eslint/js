/**
 * @fileoverview A simple script to help generate test cases
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
 *      node tools/create-test.js ecma-features/binaryLiterals/ file_with_code.js
 *
 * The file with code should use "/*!espree-section: name/" as a separator between examples
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var shelljs = require("shelljs"),
    esprima = require("esprima-fb"),
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
            loc: true,
            range: true
        });
    } catch (ex) {
        result = ex;
    }

    sourceCode.to(testSourceFilename);
    ("module.exports = " + JSON.stringify(result, null, "    ")).to(testResultFilename);
});
