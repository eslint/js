function uFlagSupported() {
    try {
        RegExp("", "u"); // eslint-disable-line no-invalid-regexp
        return true;
    } catch (err) {
        return false;
    }
}

// Acorn's parsing error is different depending on whether the environment supports the regex u flag.
if (uFlagSupported()) {
    module.exports = {
        "index": 9,
        "lineNumber": 1,
        "column": 10,
        "message": "Error parsing regular expression: Invalid regular expression: /\\u{110000}/: Invalid unicode escape"
    };
} else {
    module.exports = {
        "index": 12,
        "lineNumber": 1,
        "column": 13,
        "message": "Code point out of bounds"
    };
}
