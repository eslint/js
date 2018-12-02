"use strict";

module.exports = {
    root: true,
    extends: "eslint",
    env: {
        node: true,
        es6: true
    },
    overrides: [
        {
            files: ["tests/lib/*"],
            env: {
                mocha: true
            }
        }
    ]
};
