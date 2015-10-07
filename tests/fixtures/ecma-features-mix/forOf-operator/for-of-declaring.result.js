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
    "sourceType": "script",
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
    },
    "tokens": [
        {
            "type": "Keyword",
            "value": "var",
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
            "type": "Identifier",
            "value": "k",
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
        {
            "type": "Punctuator",
            "value": ";",
            "range": [
                5,
                6
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 5
                },
                "end": {
                    "line": 1,
                    "column": 6
                }
            }
        },
        {
            "type": "Keyword",
            "value": "for",
            "range": [
                7,
                10
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 0
                },
                "end": {
                    "line": 2,
                    "column": 3
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "(",
            "range": [
                11,
                12
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 4
                },
                "end": {
                    "line": 2,
                    "column": 5
                }
            }
        },
        {
            "type": "Identifier",
            "value": "k",
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
        {
            "type": "Keyword",
            "value": "in",
            "range": [
                14,
                16
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 7
                },
                "end": {
                    "line": 2,
                    "column": 9
                }
            }
        },
        {
            "type": "Identifier",
            "value": "console",
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
        {
            "type": "Punctuator",
            "value": ")",
            "range": [
                24,
                25
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 17
                },
                "end": {
                    "line": 2,
                    "column": 18
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "{",
            "range": [
                26,
                27
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 19
                },
                "end": {
                    "line": 2,
                    "column": 20
                }
            }
        },
        {
            "type": "Identifier",
            "value": "doSomething",
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
        {
            "type": "Punctuator",
            "value": "(",
            "range": [
                43,
                44
            ],
            "loc": {
                "start": {
                    "line": 3,
                    "column": 15
                },
                "end": {
                    "line": 3,
                    "column": 16
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ")",
            "range": [
                44,
                45
            ],
            "loc": {
                "start": {
                    "line": 3,
                    "column": 16
                },
                "end": {
                    "line": 3,
                    "column": 17
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ";",
            "range": [
                45,
                46
            ],
            "loc": {
                "start": {
                    "line": 3,
                    "column": 17
                },
                "end": {
                    "line": 3,
                    "column": 18
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "}",
            "range": [
                47,
                48
            ],
            "loc": {
                "start": {
                    "line": 4,
                    "column": 0
                },
                "end": {
                    "line": 4,
                    "column": 1
                }
            }
        }
    ]
};