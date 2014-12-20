// const foo = bar;
module.exports = {
    "range": [
        0,
        16
    ],
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 1,
            "column": 16
        }
    },
    "type": "Program",
    "body": [
        {
            "range": [
                0,
                16
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 16
                }
            },
            "type": "VariableDeclaration",
            "declarations": [
                {
                    "range": [
                        6,
                        15
                    ],
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 6
                        },
                        "end": {
                            "line": 1,
                            "column": 15
                        }
                    },
                    "type": "VariableDeclarator",
                    "id": {
                        "range": [
                            6,
                            9
                        ],
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 6
                            },
                            "end": {
                                "line": 1,
                                "column": 9
                            }
                        },
                        "type": "Identifier",
                        "name": "foo"
                    },
                    "init": {
                        "range": [
                            12,
                            15
                        ],
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 12
                            },
                            "end": {
                                "line": 1,
                                "column": 15
                            }
                        },
                        "type": "Identifier",
                        "name": "bar"
                    }
                }
            ],
            "kind": "const"
        }
    ]
};
