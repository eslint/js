module.exports = {
    "type": "Program",
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 1,
            "column": 8
        }
    },
    "range": [
        0,
        8
    ],
    "body": [
        {
            "type": "ExpressionStatement",
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 8
                }
            },
            "range": [
                0,
                8
            ],
            "expression": {
                "type": "Literal",
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 0
                    },
                    "end": {
                        "line": 1,
                        "column": 8
                    }
                },
                "range": [
                    0,
                    8
                ],
                "value": process.version.node >= "9.0.0" ? /(?<!a)/ : null,
                "raw": "/(?<!a)/",
                "regex": {
                    "pattern": "(?<!a)",
                    "flags": ""
                }
            }
        }
    ],
    "sourceType": "script",
    "tokens": [
        {
            "type": "RegularExpression",
            "value": "/(?<!a)/",
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 8
                }
            },
            "range": [
                0,
                8
            ],
            "regex": {
                "flags": "",
                "pattern": "(?<!a)"
            }
        }
    ]
};