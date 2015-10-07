module.exports = {
    "type": "Program",
    "body": [
        {
            "type": "FunctionDeclaration",
            "id": {
                "type": "Identifier",
                "name": "f",
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
            },
            "params": [],
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "VariableDeclaration",
                        "declarations": [
                            {
                                "type": "VariableDeclarator",
                                "id": {
                                    "type": "Identifier",
                                    "name": "x",
                                    "range": [
                                        23,
                                        24
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 2,
                                            "column": 8
                                        },
                                        "end": {
                                            "line": 2,
                                            "column": 9
                                        }
                                    }
                                },
                                "init": {
                                    "type": "MetaProperty",
                                    "meta": "new",
                                    "property": "target",
                                    "range": [
                                        27,
                                        37
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 2,
                                            "column": 12
                                        },
                                        "end": {
                                            "line": 2,
                                            "column": 22
                                        }
                                    }
                                },
                                "range": [
                                    23,
                                    37
                                ],
                                "loc": {
                                    "start": {
                                        "line": 2,
                                        "column": 8
                                    },
                                    "end": {
                                        "line": 2,
                                        "column": 22
                                    }
                                }
                            }
                        ],
                        "kind": "var",
                        "range": [
                            19,
                            38
                        ],
                        "loc": {
                            "start": {
                                "line": 2,
                                "column": 4
                            },
                            "end": {
                                "line": 2,
                                "column": 23
                            }
                        }
                    }
                ],
                "range": [
                    13,
                    40
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 13
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
                40
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
        }
    ],
    "sourceType": "script",
    "range": [
        0,
        40
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
            "value": "f",
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
        },
        {
            "type": "Punctuator",
            "value": "(",
            "range": [
                10,
                11
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 10
                },
                "end": {
                    "line": 1,
                    "column": 11
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ")",
            "range": [
                11,
                12
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 11
                },
                "end": {
                    "line": 1,
                    "column": 12
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "{",
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
            "type": "Keyword",
            "value": "var",
            "range": [
                19,
                22
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 4
                },
                "end": {
                    "line": 2,
                    "column": 7
                }
            }
        },
        {
            "type": "Identifier",
            "value": "x",
            "range": [
                23,
                24
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 8
                },
                "end": {
                    "line": 2,
                    "column": 9
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "=",
            "range": [
                25,
                26
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
            "type": "Keyword",
            "value": "new",
            "range": [
                27,
                30
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 12
                },
                "end": {
                    "line": 2,
                    "column": 15
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ".",
            "range": [
                30,
                31
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 15
                },
                "end": {
                    "line": 2,
                    "column": 16
                }
            }
        },
        {
            "type": "Identifier",
            "value": "target",
            "range": [
                31,
                37
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 16
                },
                "end": {
                    "line": 2,
                    "column": 22
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ";",
            "range": [
                37,
                38
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 22
                },
                "end": {
                    "line": 2,
                    "column": 23
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "}",
            "range": [
                39,
                40
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
        }
    ]
};