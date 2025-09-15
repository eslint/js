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
        16
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
                    "column": 15
                }
            },
            "range": [
                0,
                15
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
                        "column": 15
                    }
                },
                "range": [
                    0,
                    15
                ],
                "value": /(?<\u{41}>a)/u,
                "raw": "/(?<\\u{41}>a)/u",
                "regex": {
                    "pattern": "(?<\\u{41}>a)",
                    "flags": "u"
                }
            }
        }
    ],
    "sourceType": "script",
    "tokens": [
        {
            "type": "RegularExpression",
            "value": "/(?<\\u{41}>a)/u",
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 15
                }
            },
            "range": [
                0,
                15
            ],
            "regex": {
                "flags": "u",
                "pattern": "(?<\\u{41}>a)"
            }
        }
    ]
};