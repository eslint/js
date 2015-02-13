module.exports = {
    "type": "Program",
    "body": [
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                    "type": "ArrayPattern",
                    "elements": [
                        {
                            "type": "Identifier",
                            "name": "a",
                            "range": [
                                1,
                                2
                            ],
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 1
                                },
                                "end": {
                                    "line": 1,
                                    "column": 2
                                }
                            }
                        },
                        {
                            "type": "SpreadElement",
                            "argument": {
                                "type": "Identifier",
                                "name": "b",
                                "range": [
                                    7,
                                    8
                                ],
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 7
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 8
                                    }
                                }
                            },
                            "range": [
                                4,
                                8
                            ],
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 4
                                },
                                "end": {
                                    "line": 1,
                                    "column": 8
                                }
                            }
                        }
                    ],
                    "range": [
                        0,
                        9
                    ],
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 9
                        }
                    }
                },
                "right": {
                    "type": "Identifier",
                    "name": "c",
                    "range": [
                        12,
                        13
                    ],
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 12
                        },
                        "end": {
                            "line": 1,
                            "column": 13
                        }
                    }
                },
                "range": [
                    0,
                    13
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 0
                    },
                    "end": {
                        "line": 1,
                        "column": 13
                    }
                }
            },
            "range": [
                0,
                14
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 14
                }
            }
        }
    ],
    "range": [
        0,
        14
    ],
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 1,
            "column": 14
        }
    }
}