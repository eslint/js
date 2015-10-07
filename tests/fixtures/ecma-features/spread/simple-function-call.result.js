module.exports = {
    "type": "Program",
    "body": [
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "CallExpression",
                "callee": {
                    "type": "Identifier",
                    "name": "foo",
                    "range": [
                        0,
                        3
                    ],
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 3
                        }
                    }
                },
                "arguments": [
                    {
                        "type": "SpreadElement",
                        "argument": {
                            "type": "Identifier",
                            "name": "a",
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
            "range": [
                0,
                10
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 10
                }
            }
        }
    ],
    "sourceType": "script",
    "range": [
        0,
        10
    ],
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 1,
            "column": 10
        }
    },
    "tokens": [
        {
            "type": "Identifier",
            "value": "foo",
            "range": [
                0,
                3
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 3
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "(",
            "range": [
                3,
                4
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 3
                },
                "end": {
                    "line": 1,
                    "column": 4
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "...",
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
        {
            "type": "Identifier",
            "value": "a",
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
        {
            "type": "Punctuator",
            "value": ")",
            "range": [
                8,
                9
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 8
                },
                "end": {
                    "line": 1,
                    "column": 9
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ";",
            "range": [
                9,
                10
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 9
                },
                "end": {
                    "line": 1,
                    "column": 10
                }
            }
        }
    ]
};