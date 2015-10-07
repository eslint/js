module.exports = {
    "type": "Program",
    "body": [
        {
            "type": "FunctionDeclaration",
            "id": {
                "type": "Identifier",
                "name": "bar",
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
            "params": [
                {
                    "type": "Identifier",
                    "name": "foo",
                    "range": [
                        13,
                        16
                    ],
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 13
                        },
                        "end": {
                            "line": 1,
                            "column": 16
                        }
                    }
                }
            ],
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "SwitchStatement",
                        "discriminant": {
                            "type": "Identifier",
                            "name": "foo",
                            "range": [
                                31,
                                34
                            ],
                            "loc": {
                                "start": {
                                    "line": 2,
                                    "column": 11
                                },
                                "end": {
                                    "line": 2,
                                    "column": 14
                                }
                            }
                        },
                        "cases": [
                            {
                                "type": "SwitchCase",
                                "test": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "range": [
                                        66,
                                        67
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
                                "consequent": [],
                                "range": [
                                    61,
                                    68
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
                                },
                                "leadingComments": [
                                    {
                                        "type": "Line",
                                        "value": " foo",
                                        "range": [
                                            46,
                                            52
                                        ],
                                        "loc": {
                                            "start": {
                                                "line": 3,
                                                "column": 8
                                            },
                                            "end": {
                                                "line": 3,
                                                "column": 14
                                            }
                                        }
                                    }
                                ],
                                "trailingComments": [
                                    {
                                        "type": "Line",
                                        "value": " falls through",
                                        "range": [
                                            81,
                                            97
                                        ],
                                        "loc": {
                                            "start": {
                                                "line": 5,
                                                "column": 12
                                            },
                                            "end": {
                                                "line": 5,
                                                "column": 28
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                "type": "SwitchCase",
                                "test": {
                                    "type": "Literal",
                                    "value": 2,
                                    "raw": "2",
                                    "range": [
                                        111,
                                        112
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 6,
                                            "column": 13
                                        },
                                        "end": {
                                            "line": 6,
                                            "column": 14
                                        }
                                    }
                                },
                                "consequent": [
                                    {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                            "type": "CallExpression",
                                            "callee": {
                                                "type": "Identifier",
                                                "name": "doIt",
                                                "range": [
                                                    126,
                                                    130
                                                ],
                                                "loc": {
                                                    "start": {
                                                        "line": 7,
                                                        "column": 12
                                                    },
                                                    "end": {
                                                        "line": 7,
                                                        "column": 16
                                                    }
                                                }
                                            },
                                            "arguments": [],
                                            "range": [
                                                126,
                                                132
                                            ],
                                            "loc": {
                                                "start": {
                                                    "line": 7,
                                                    "column": 12
                                                },
                                                "end": {
                                                    "line": 7,
                                                    "column": 18
                                                }
                                            }
                                        },
                                        "range": [
                                            126,
                                            133
                                        ],
                                        "loc": {
                                            "start": {
                                                "line": 7,
                                                "column": 12
                                            },
                                            "end": {
                                                "line": 7,
                                                "column": 19
                                            }
                                        }
                                    }
                                ],
                                "range": [
                                    106,
                                    133
                                ],
                                "loc": {
                                    "start": {
                                        "line": 6,
                                        "column": 8
                                    },
                                    "end": {
                                        "line": 7,
                                        "column": 19
                                    }
                                },
                                "leadingComments": [
                                    {
                                        "type": "Line",
                                        "value": " falls through",
                                        "range": [
                                            81,
                                            97
                                        ],
                                        "loc": {
                                            "start": {
                                                "line": 5,
                                                "column": 12
                                            },
                                            "end": {
                                                "line": 5,
                                                "column": 28
                                            }
                                        }
                                    }
                                ]
                            }
                        ],
                        "range": [
                            24,
                            139
                        ],
                        "loc": {
                            "start": {
                                "line": 2,
                                "column": 4
                            },
                            "end": {
                                "line": 8,
                                "column": 5
                            }
                        }
                    }
                ],
                "range": [
                    18,
                    141
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 18
                    },
                    "end": {
                        "line": 9,
                        "column": 1
                    }
                }
            },
            "generator": false,
            "expression": false,
            "range": [
                0,
                141
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 9,
                    "column": 1
                }
            }
        }
    ],
    "sourceType": "script",
    "range": [
        0,
        141
    ],
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 9,
            "column": 1
        }
    },
    "comments": [
        {
            "type": "Line",
            "value": " foo",
            "range": [
                46,
                52
            ],
            "loc": {
                "start": {
                    "line": 3,
                    "column": 8
                },
                "end": {
                    "line": 3,
                    "column": 14
                }
            }
        },
        {
            "type": "Line",
            "value": " falls through",
            "range": [
                81,
                97
            ],
            "loc": {
                "start": {
                    "line": 5,
                    "column": 12
                },
                "end": {
                    "line": 5,
                    "column": 28
                }
            }
        }
    ],
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
            "value": "bar",
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
            "type": "Identifier",
            "value": "foo",
            "range": [
                13,
                16
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 13
                },
                "end": {
                    "line": 1,
                    "column": 16
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ")",
            "range": [
                16,
                17
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 16
                },
                "end": {
                    "line": 1,
                    "column": 17
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "{",
            "range": [
                18,
                19
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 18
                },
                "end": {
                    "line": 1,
                    "column": 19
                }
            }
        },
        {
            "type": "Keyword",
            "value": "switch",
            "range": [
                24,
                30
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 4
                },
                "end": {
                    "line": 2,
                    "column": 10
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "(",
            "range": [
                30,
                31
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
            "type": "Identifier",
            "value": "foo",
            "range": [
                31,
                34
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 11
                },
                "end": {
                    "line": 2,
                    "column": 14
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ")",
            "range": [
                34,
                35
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 14
                },
                "end": {
                    "line": 2,
                    "column": 15
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "{",
            "range": [
                36,
                37
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 16
                },
                "end": {
                    "line": 2,
                    "column": 17
                }
            }
        },
        {
            "type": "Keyword",
            "value": "case",
            "range": [
                61,
                65
            ],
            "loc": {
                "start": {
                    "line": 4,
                    "column": 8
                },
                "end": {
                    "line": 4,
                    "column": 12
                }
            }
        },
        {
            "type": "Numeric",
            "value": "1",
            "range": [
                66,
                67
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
            "value": ":",
            "range": [
                67,
                68
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
            "type": "Keyword",
            "value": "case",
            "range": [
                106,
                110
            ],
            "loc": {
                "start": {
                    "line": 6,
                    "column": 8
                },
                "end": {
                    "line": 6,
                    "column": 12
                }
            }
        },
        {
            "type": "Numeric",
            "value": "2",
            "range": [
                111,
                112
            ],
            "loc": {
                "start": {
                    "line": 6,
                    "column": 13
                },
                "end": {
                    "line": 6,
                    "column": 14
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ":",
            "range": [
                112,
                113
            ],
            "loc": {
                "start": {
                    "line": 6,
                    "column": 14
                },
                "end": {
                    "line": 6,
                    "column": 15
                }
            }
        },
        {
            "type": "Identifier",
            "value": "doIt",
            "range": [
                126,
                130
            ],
            "loc": {
                "start": {
                    "line": 7,
                    "column": 12
                },
                "end": {
                    "line": 7,
                    "column": 16
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "(",
            "range": [
                130,
                131
            ],
            "loc": {
                "start": {
                    "line": 7,
                    "column": 16
                },
                "end": {
                    "line": 7,
                    "column": 17
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ")",
            "range": [
                131,
                132
            ],
            "loc": {
                "start": {
                    "line": 7,
                    "column": 17
                },
                "end": {
                    "line": 7,
                    "column": 18
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ";",
            "range": [
                132,
                133
            ],
            "loc": {
                "start": {
                    "line": 7,
                    "column": 18
                },
                "end": {
                    "line": 7,
                    "column": 19
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "}",
            "range": [
                138,
                139
            ],
            "loc": {
                "start": {
                    "line": 8,
                    "column": 4
                },
                "end": {
                    "line": 8,
                    "column": 5
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "}",
            "range": [
                140,
                141
            ],
            "loc": {
                "start": {
                    "line": 9,
                    "column": 0
                },
                "end": {
                    "line": 9,
                    "column": 1
                }
            }
        }
    ]
};