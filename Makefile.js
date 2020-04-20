/**
 * @fileoverview Build file
 * @author nzakas
 */
/* global cp, echo, exit, mkdir, rm, target, test */

"use strict";

/* eslint no-console: 0*/
//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

require("shelljs/make");

const nodeCLI = require("shelljs-nodecli");
const path = require("path");

//------------------------------------------------------------------------------
// Data
//------------------------------------------------------------------------------

const NODE_MODULES = "./node_modules/",
    TEMP_DIR = "./tmp/",
    BUILD_DIR = "./build/",

    // Utilities - intentional extra space at the end of each string
    MOCHA = `${NODE_MODULES}mocha/bin/_mocha `,

    // Files
    MAKEFILE = "Makefile.js",
    CONFIG_FILES = ".eslintrc.js",
    JS_FILES = "\"lib/**/*.js\" \"espree.js\"",
    TEST_FILES = "tests/lib/**/*.js";

//------------------------------------------------------------------------------
// Tasks
//------------------------------------------------------------------------------

target.all = function() {
    target.test();
};

target.lint = function() {

    const flag = process.argv[process.argv.length - 1];
    let errors = 0,
        lastReturn;

    echo("Validating Makefile.js");
    lastReturn = nodeCLI.exec("eslint", MAKEFILE, flag);
    if (lastReturn.code !== 0) {
        errors++;
    }

    echo("Validating configuration files");
    lastReturn = nodeCLI.exec("eslint", CONFIG_FILES, flag);
    if (lastReturn.code !== 0) {
        errors++;
    }

    echo("Validating JavaScript files");
    lastReturn = nodeCLI.exec("eslint", JS_FILES, flag);
    if (lastReturn.code !== 0) {
        errors++;
    }

    echo("Validating JavaScript test files");
    lastReturn = nodeCLI.exec("eslint", TEST_FILES, flag);
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
    echo("Generating documentation");
    nodeCLI.exec("jsdoc", "-d jsdoc lib");
    echo("Documentation has been output to /jsdoc");
};

target.browserify = function() {

    // 1. create temp and build directory
    if (!test("-d", TEMP_DIR)) {
        mkdir(TEMP_DIR);
        mkdir(path.join(TEMP_DIR, "lib"));
    }

    if (!test("-d", BUILD_DIR)) {
        mkdir(BUILD_DIR);
    }

    // 2. copy files into temp directory
    cp("-r", "lib/*", path.join(TEMP_DIR, "lib"));
    cp("espree.js", TEMP_DIR);
    cp("package.json", TEMP_DIR);

    // 3. browserify the temp directory
    nodeCLI.exec(
        "browserify",
        path.join(TEMP_DIR, "espree.js"),
        "-o",
        path.join(BUILD_DIR, "espree.js"),
        "-s espree"
    );

    // 4. remove temp directory
    rm("-r", TEMP_DIR);
};
