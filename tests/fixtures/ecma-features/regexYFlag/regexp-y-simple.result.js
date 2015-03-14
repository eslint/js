module.exports = {
    "type": "Program",
    "body": [
        {
            "type": "VariableDeclaration",
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "foo",
                        "range": [
                            4,
                            7
                        ],
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 4
                            },
                            "end": {
                                "line": 1,
                                "column": 7
                            }
                        }
                    },
                    "init": {
                        "type": "Literal",
                        "value": null,
                        "raw": "/foo/y",
                        "regex": {
                            "pattern": "foo",
                            "flags": "y"
                        },
                        "range": [
                            10,
                            16
                        ],
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 10
                            },
                            "end": {
                                "line": 1,
                                "column": 16
                            }
                        }
                    },
                    "range": [
                        4,
                        16
                    ],
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 4
                        },
                        "end": {
                            "line": 1,
                            "column": 16
                        }
                    }
                }
            ],
            "kind": "var",
            "range": [
                0,
                17
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 17
                }
            }
        }
    ],
    "sourceType": "script",
    "range": [
        0,
        17
    ],
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 1,
            "column": 17
        }
    }
};