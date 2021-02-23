// simple script to convert the old Esprima giant file tests into small ones

import tests from "../test/test";

Object.keys(tests).forEach(function(key) {
    var value = tests[key];

    JSON.stringify(value, function(key, value) {
        if (value === undefined) {
            return "espree@undefined";
        } else {
            return value;
        }
    }, "    ").to('./tests/fixtures/ast/' + key.replace(/[^a-z0-9]/gi, "-") + ".json");
});
