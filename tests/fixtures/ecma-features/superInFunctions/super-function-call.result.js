module.exports = {
    "type": "Program",
    "body": [
        {
            "type": "FunctionDeclaration",
            "id": {
                "type": "Identifier",
                "name": "foo",
                "range": [
                    9,
                    12
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 9
                    },
                    "end": {
                        "line": 1,
                        "column": 12
                    }
                }
            },
            "params": [],
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "CallExpression",
                            "callee": {
                                "type": "Super",
                                "range": [
                                    21,
                                    26
                                ],
                                "loc": {
                                    "start": {
                                        "line": 2,
                                        "column": 4
                                    },
                                    "end": {
                                        "line": 2,
                                        "column": 9
                                    }
                                }
                            },
                            "arguments": [],
                            "range": [
                                21,
                                28
                            ],
                            "loc": {
                                "start": {
                                    "line": 2,
                                    "column": 4
                                },
                                "end": {
                                    "line": 2,
                                    "column": 11
                                }
                            }
                        },
                        "range": [
                            21,
                            29
                        ],
                        "loc": {
                            "start": {
                                "line": 2,
                                "column": 4
                            },
                            "end": {
                                "line": 2,
                                "column": 12
                            }
                        }
                    }
                ],
                "range": [
                    15,
                    31
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 15
                    },
                    "end": {
                        "line": 3,
                        "column": 1
                    }
                }
            },
            "generator": false,
            "expression": false,
            "range": [
                0,
                31
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 3,
                    "column": 1
                }
            }
        },
        {
            "type": "EmptyStatement",
            "range": [
                31,
                32
            ],
            "loc": {
                "start": {
                    "line": 3,
                    "column": 1
                },
                "end": {
                    "line": 3,
                    "column": 2
                }
            }
        }
    ],
    "sourceType": "script",
    "range": [
        0,
        32
    ],
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 3,
            "column": 2
        }
    },
    "tokens": [
        {
            "type": "Keyword",
            "value": "function",
            "range": [
                0,
                8
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 8
                }
            }
        },
        {
            "type": "Identifier",
            "value": "foo",
            "range": [
                9,
                12
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 9
                },
                "end": {
                    "line": 1,
                    "column": 12
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "(",
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
        {
            "type": "Punctuator",
            "value": ")",
            "range": [
                13,
                14
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 13
                },
                "end": {
                    "line": 1,
                    "column": 14
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "{",
            "range": [
                15,
                16
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 15
                },
                "end": {
                    "line": 1,
                    "column": 16
                }
            }
        },
        {
            "type": "Keyword",
            "value": "super",
            "range": [
                21,
                26
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 4
                },
                "end": {
                    "line": 2,
                    "column": 9
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "(",
            "range": [
                26,
                27
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 9
                },
                "end": {
                    "line": 2,
                    "column": 10
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ")",
            "range": [
                27,
                28
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 10
                },
                "end": {
                    "line": 2,
                    "column": 11
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ";",
            "range": [
                28,
                29
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 11
                },
                "end": {
                    "line": 2,
                    "column": 12
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "}",
            "range": [
                30,
                31
            ],
            "loc": {
                "start": {
                    "line": 3,
                    "column": 0
                },
                "end": {
                    "line": 3,
                    "column": 1
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ";",
            "range": [
                31,
                32
            ],
            "loc": {
                "start": {
                    "line": 3,
                    "column": 1
                },
                "end": {
                    "line": 3,
                    "column": 2
                }
            }
        }
    ]
};