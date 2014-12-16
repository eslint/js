// var foo = /foo/y;
module.exports = {
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
    },
    "type": "Program",
    "body": [
        {
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
            },
            "type": "VariableDeclaration",
            "declarations": [
                {
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
                    },
                    "type": "VariableDeclarator",
                    "id": {
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
                        },
                        "type": "Identifier",
                        "name": "foo"
                    },
                    "init": {
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
                        },
                        "type": "Literal",
                        "value": null,
                        "regex": {
                            "pattern": "foo",
                            "flags": "y"
                        },
                        "raw": "/foo/y"
                    }
                }
            ],
            "kind": "var"
        }
    ]
};
