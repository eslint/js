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
                        "name": "o",
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
                    "init": {
                        "type": "ObjectExpression",
                        "properties": [
                            {
                                "type": "Property",
                                "key": {
                                    "type": "Identifier",
                                    "name": "foo",
                                    "range": [
                                        15,
                                        18
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 3,
                                            "column": 4
                                        },
                                        "end": {
                                            "line": 3,
                                            "column": 7
                                        }
                                    }
                                },
                                "value": {
                                    "type": "FunctionExpression",
                                    "id": null,
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
                                                            41,
                                                            46
                                                        ],
                                                        "loc": {
                                                            "start": {
                                                                "line": 4,
                                                                "column": 8
                                                            },
                                                            "end": {
                                                                "line": 4,
                                                                "column": 13
                                                            }
                                                        }
                                                    },
                                                    "arguments": [],
                                                    "range": [
                                                        41,
                                                        48
                                                    ],
                                                    "loc": {
                                                        "start": {
                                                            "line": 4,
                                                            "column": 8
                                                        },
                                                        "end": {
                                                            "line": 4,
                                                            "column": 15
                                                        }
                                                    }
                                                },
                                                "range": [
                                                    41,
                                                    49
                                                ],
                                                "loc": {
                                                    "start": {
                                                        "line": 4,
                                                        "column": 8
                                                    },
                                                    "end": {
                                                        "line": 4,
                                                        "column": 16
                                                    }
                                                }
                                            }
                                        ],
                                        "range": [
                                            31,
                                            55
                                        ],
                                        "loc": {
                                            "start": {
                                                "line": 3,
                                                "column": 20
                                            },
                                            "end": {
                                                "line": 5,
                                                "column": 5
                                            }
                                        }
                                    },
                                    "generator": false,
                                    "expression": false,
                                    "range": [
                                        20,
                                        55
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 3,
                                            "column": 9
                                        },
                                        "end": {
                                            "line": 5,
                                            "column": 5
                                        }
                                    }
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "range": [
                                    15,
                                    55
                                ],
                                "loc": {
                                    "start": {
                                        "line": 3,
                                        "column": 4
                                    },
                                    "end": {
                                        "line": 5,
                                        "column": 5
                                    }
                                }
                            }
                        ],
                        "range": [
                            8,
                            57
                        ],
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 8
                            },
                            "end": {
                                "line": 6,
                                "column": 1
                            }
                        }
                    },
                    "range": [
                        4,
                        57
                    ],
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 4
                        },
                        "end": {
                            "line": 6,
                            "column": 1
                        }
                    }
                }
            ],
            "kind": "var",
            "range": [
                0,
                58
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 6,
                    "column": 2
                }
            }
        }
    ],
    "sourceType": "script",
    "range": [
        0,
        58
    ],
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 6,
            "column": 2
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
            "value": "o",
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
            "value": "=",
            "range": [
                6,
                7
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 6
                },
                "end": {
                    "line": 1,
                    "column": 7
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "{",
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
            "type": "Identifier",
            "value": "foo",
            "range": [
                15,
                18
            ],
            "loc": {
                "start": {
                    "line": 3,
                    "column": 4
                },
                "end": {
                    "line": 3,
                    "column": 7
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ":",
            "range": [
                18,
                19
            ],
            "loc": {
                "start": {
                    "line": 3,
                    "column": 7
                },
                "end": {
                    "line": 3,
                    "column": 8
                }
            }
        },
        {
            "type": "Keyword",
            "value": "function",
            "range": [
                20,
                28
            ],
            "loc": {
                "start": {
                    "line": 3,
                    "column": 9
                },
                "end": {
                    "line": 3,
                    "column": 17
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "(",
            "range": [
                28,
                29
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
            "value": ")",
            "range": [
                29,
                30
            ],
            "loc": {
                "start": {
                    "line": 3,
                    "column": 18
                },
                "end": {
                    "line": 3,
                    "column": 19
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "{",
            "range": [
                31,
                32
            ],
            "loc": {
                "start": {
                    "line": 3,
                    "column": 20
                },
                "end": {
                    "line": 3,
                    "column": 21
                }
            }
        },
        {
            "type": "Keyword",
            "value": "super",
            "range": [
                41,
                46
            ],
            "loc": {
                "start": {
                    "line": 4,
                    "column": 8
                },
                "end": {
                    "line": 4,
                    "column": 13
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "(",
            "range": [
                46,
                47
            ],
            "loc": {
                "start": {
                    "line": 4,
                    "column": 13
                },
                "end": {
                    "line": 4,
                    "column": 14
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ")",
            "range": [
                47,
                48
            ],
            "loc": {
                "start": {
                    "line": 4,
                    "column": 14
                },
                "end": {
                    "line": 4,
                    "column": 15
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ";",
            "range": [
                48,
                49
            ],
            "loc": {
                "start": {
                    "line": 4,
                    "column": 15
                },
                "end": {
                    "line": 4,
                    "column": 16
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "}",
            "range": [
                54,
                55
            ],
            "loc": {
                "start": {
                    "line": 5,
                    "column": 4
                },
                "end": {
                    "line": 5,
                    "column": 5
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "}",
            "range": [
                56,
                57
            ],
            "loc": {
                "start": {
                    "line": 6,
                    "column": 0
                },
                "end": {
                    "line": 6,
                    "column": 1
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ";",
            "range": [
                57,
                58
            ],
            "loc": {
                "start": {
                    "line": 6,
                    "column": 1
                },
                "end": {
                    "line": 6,
                    "column": 2
                }
            }
        }
    ]
};