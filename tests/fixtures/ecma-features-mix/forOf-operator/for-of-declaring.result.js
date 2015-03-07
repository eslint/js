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
                        "name": "k",
                        "range": [
                            4,
                            5
                        ],
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 4
                            },
                            "end": {
                                "line": 1,
                                "column": 5
                            }
                        }
                    },
                    "init": null,
                    "range": [
                        4,
                        5
                    ],
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 4
                        },
                        "end": {
                            "line": 1,
                            "column": 5
                        }
                    }
                }
            ],
            "kind": "var",
            "range": [
                0,
                6
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 6
                }
            }
        },
        {
            "type": "ForInStatement",
            "left": {
                "type": "Identifier",
                "name": "k",
                "range": [
                    12,
                    13
                ],
                "loc": {
                    "start": {
                        "line": 2,
                        "column": 5
                    },
                    "end": {
                        "line": 2,
                        "column": 6
                    }
                }
            },
            "right": {
                "type": "Identifier",
                "name": "console",
                "range": [
                    17,
                    24
                ],
                "loc": {
                    "start": {
                        "line": 2,
                        "column": 10
                    },
                    "end": {
                        "line": 2,
                        "column": 17
                    }
                }
            },
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "CallExpression",
                            "callee": {
                                "type": "Identifier",
                                "name": "doSomething",
                                "range": [
                                    32,
                                    43
                                ],
                                "loc": {
                                    "start": {
                                        "line": 3,
                                        "column": 4
                                    },
                                    "end": {
                                        "line": 3,
                                        "column": 15
                                    }
                                }
                            },
                            "arguments": [],
                            "range": [
                                32,
                                45
                            ],
                            "loc": {
                                "start": {
                                    "line": 3,
                                    "column": 4
                                },
                                "end": {
                                    "line": 3,
                                    "column": 17
                                }
                            }
                        },
                        "range": [
                            32,
                            46
                        ],
                        "loc": {
                            "start": {
                                "line": 3,
                                "column": 4
                            },
                            "end": {
                                "line": 3,
                                "column": 18
                            }
                        }
                    }
                ],
                "range": [
                    26,
                    48
                ],
                "loc": {
                    "start": {
                        "line": 2,
                        "column": 19
                    },
                    "end": {
                        "line": 4,
                        "column": 1
                    }
                }
            },
            "each": false,
            "range": [
                7,
                48
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 0
                },
                "end": {
                    "line": 4,
                    "column": 1
                }
            }
        }
    ],
    "range": [
        0,
        48
    ],
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 4,
            "column": 1
        }
    }
};