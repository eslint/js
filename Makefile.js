/**
 * @fileoverview Build file
 * @author nzakas
 */
/* global cp, echo, exit, rm, target */

"use strict";

/* eslint no-console: 0*/
//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

require("shelljs/make");

const nodeCLI = require("shelljs-nodecli");

//------------------------------------------------------------------------------
// Data
//------------------------------------------------------------------------------

const NODE_MODULES = "./node_modules/",
    DOCS_DIR = "./docs",

    // Utilities - intentional extra space at the end of each string
    MOCHA = `${NODE_MODULES}mocha/bin/_mocha `,

    // Files
    MAKEFILE = "Makefile.js",
    CONFIG_FILES = ".eslintrc.js",
    JS_FILES = "\"lib/**/*.js\" \"espree.js\"",
    TEST_FILES = "tests/lib/**/*.js",

    // FLAGS
    CLIFLAGS = process.argv.slice(3);

//------------------------------------------------------------------------------
// Tasks
//------------------------------------------------------------------------------

target.all = function() {
    target.test();
};

target.lint = function() {
    let errors = 0,
        lastReturn;

    echo("Validating Makefile.js");
    lastReturn = nodeCLI.exec("eslint", MAKEFILE, ...CLIFLAGS);
    if (lastReturn.code !== 0) {
        errors++;
    }

    echo("Validating configuration files");
    lastReturn = nodeCLI.exec("eslint", CONFIG_FILES, ...CLIFLAGS);
    if (lastReturn.code !== 0) {
        errors++;
    }

    echo("Validating JavaScript files");
    lastReturn = nodeCLI.exec("eslint", JS_FILES, ...CLIFLAGS);
    if (lastReturn.code !== 0) {
        errors++;
    }

    echo("Validating JavaScript test files");
    lastReturn = nodeCLI.exec("eslint", TEST_FILES, ...CLIFLAGS);
    if (lastReturn.code !== 0) {
        errors++;
    }

    if (errors) {
        exit(1);
    }
};

target.test = function() {

    // target.lint();

    let errors = 0;

    const lastReturn = nodeCLI.exec(
        "nyc",
        MOCHA,
        "--color",
        "--reporter progress",
        "--timeout 30000",
        TEST_FILES
    );

    if (lastReturn.code !== 0) {
        errors++;
    }

    if (errors) {
        exit(1);
    }
};

target.docs = function() {
    echo("Syncing README.md from root with docs/README.md");
    rm("-r", `${DOCS_DIR}/README.md`);
    cp("README.md", DOCS_DIR);
    echo("Done. ");
};
