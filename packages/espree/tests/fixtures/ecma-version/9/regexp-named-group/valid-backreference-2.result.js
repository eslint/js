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
        14
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
                    "column": 13
                }
            },
            "range": [
                0,
                13
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
                        "column": 13
                    }
                },
                "range": [
                    0,
                    13
                ],
                "value": /(?<AB>a)\1/u,
                "raw": "/(?<AB>a)\\1/u",
                "regex": {
                    "pattern": "(?<AB>a)\\1",
                    "flags": "u"
                }
            }
        }
    ],
    "sourceType": "script",
    "tokens": [
        {
            "type": "RegularExpression",
            "value": "/(?<AB>a)\\1/u",
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 13
                }
            },
            "range": [
                0,
                13
            ],
            "regex": {
                "flags": "u",
                "pattern": "(?<AB>a)\\1"
            }
        }
    ]
};
