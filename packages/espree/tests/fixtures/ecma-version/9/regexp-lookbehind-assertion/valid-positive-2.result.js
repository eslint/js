export default {
    "type": "Program",
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 2,
            "column": 0
        }
    },
    "range": [
        0,
        10
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
                    "column": 9
                }
            },
            "range": [
                0,
                9
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
                        "column": 9
                    }
                },
                "range": [
                    0,
                    9
                ],
                "value": /(?<=a)/u,
                "raw": "/(?<=a)/u",
                "regex": {
                    "pattern": "(?<=a)",
                    "flags": "u"
                }
            }
        }
    ],
    "sourceType": "script",
    "tokens": [
        {
            "type": "RegularExpression",
            "value": "/(?<=a)/u",
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 9
                }
            },
            "range": [
                0,
                9
            ],
            "regex": {
                "flags": "u",
                "pattern": "(?<=a)"
            }
        }
    ]
};