module.exports = {
    "type": "Program",
    "body": [
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                        "type": "Identifier",
                        "name": "module",
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
                    "property": {
                        "type": "Identifier",
                        "name": "exports",
                        "range": [
                            7,
                            14
                        ],
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 7
                            },
                            "end": {
                                "line": 1,
                                "column": 14
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
                },
                "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "params": [
                        {
                            "type": "Identifier",
                            "name": "context",
                            "range": [
                                26,
                                33
                            ],
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 26
                                },
                                "end": {
                                    "line": 1,
                                    "column": 33
                                }
                            }
                        }
                    ],
                    "body": {
                        "type": "BlockStatement",
                        "body": [
                            {
                                "type": "FunctionDeclaration",
                                "id": {
                                    "type": "Identifier",
                                    "name": "isConstant",
                                    "range": [
                                        51,
                                        61
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 3,
                                            "column": 13
                                        },
                                        "end": {
                                            "line": 3,
                                            "column": 23
                                        }
                                    }
                                },
                                "params": [
                                    {
                                        "type": "Identifier",
                                        "name": "node",
                                        "range": [
                                            62,
                                            66
                                        ],
                                        "loc": {
                                            "start": {
                                                "line": 3,
                                                "column": 24
                                            },
                                            "end": {
                                                "line": 3,
                                                "column": 28
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
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                    "type": "Identifier",
                                                    "name": "node",
                                                    "range": [
                                                        86,
                                                        90
                                                    ],
                                                    "loc": {
                                                        "start": {
                                                            "line": 4,
                                                            "column": 16
                                                        },
                                                        "end": {
                                                            "line": 4,
                                                            "column": 20
                                                        }
                                                    }
                                                },
                                                "property": {
                                                    "type": "Identifier",
                                                    "name": "type",
                                                    "range": [
                                                        91,
                                                        95
                                                    ],
                                                    "loc": {
                                                        "start": {
                                                            "line": 4,
                                                            "column": 21
                                                        },
                                                        "end": {
                                                            "line": 4,
                                                            "column": 25
                                                        }
                                                    }
                                                },
                                                "range": [
                                                    86,
                                                    95
                                                ],
                                                "loc": {
                                                    "start": {
                                                        "line": 4,
                                                        "column": 16
                                                    },
                                                    "end": {
                                                        "line": 4,
                                                        "column": 25
                                                    }
                                                }
                                            },
                                            "cases": [
                                                {
                                                    "type": "SwitchCase",
                                                    "test": {
                                                        "type": "Literal",
                                                        "value": "SequenceExpression",
                                                        "raw": "\"SequenceExpression\"",
                                                        "range": [
                                                            116,
                                                            136
                                                        ],
                                                        "loc": {
                                                            "start": {
                                                                "line": 5,
                                                                "column": 17
                                                            },
                                                            "end": {
                                                                "line": 5,
                                                                "column": 37
                                                            }
                                                        }
                                                    },
                                                    "consequent": [
                                                        {
                                                            "type": "ReturnStatement",
                                                            "argument": {
                                                                "type": "CallExpression",
                                                                "callee": {
                                                                    "type": "Identifier",
                                                                    "name": "isConstant",
                                                                    "range": [
                                                                        161,
                                                                        171
                                                                    ],
                                                                    "loc": {
                                                                        "start": {
                                                                            "line": 6,
                                                                            "column": 23
                                                                        },
                                                                        "end": {
                                                                            "line": 6,
                                                                            "column": 33
                                                                        }
                                                                    }
                                                                },
                                                                "arguments": [
                                                                    {
                                                                        "type": "MemberExpression",
                                                                        "computed": true,
                                                                        "object": {
                                                                            "type": "MemberExpression",
                                                                            "computed": false,
                                                                            "object": {
                                                                                "type": "Identifier",
                                                                                "name": "node",
                                                                                "range": [
                                                                                    172,
                                                                                    176
                                                                                ],
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 6,
                                                                                        "column": 34
                                                                                    },
                                                                                    "end": {
                                                                                        "line": 6,
                                                                                        "column": 38
                                                                                    }
                                                                                }
                                                                            },
                                                                            "property": {
                                                                                "type": "Identifier",
                                                                                "name": "expressions",
                                                                                "range": [
                                                                                    177,
                                                                                    188
                                                                                ],
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 6,
                                                                                        "column": 39
                                                                                    },
                                                                                    "end": {
                                                                                        "line": 6,
                                                                                        "column": 50
                                                                                    }
                                                                                }
                                                                            },
                                                                            "range": [
                                                                                172,
                                                                                188
                                                                            ],
                                                                            "loc": {
                                                                                "start": {
                                                                                    "line": 6,
                                                                                    "column": 34
                                                                                },
                                                                                "end": {
                                                                                    "line": 6,
                                                                                    "column": 50
                                                                                }
                                                                            }
                                                                        },
                                                                        "property": {
                                                                            "type": "BinaryExpression",
                                                                            "operator": "-",
                                                                            "left": {
                                                                                "type": "MemberExpression",
                                                                                "computed": false,
                                                                                "object": {
                                                                                    "type": "MemberExpression",
                                                                                    "computed": false,
                                                                                    "object": {
                                                                                        "type": "Identifier",
                                                                                        "name": "node",
                                                                                        "range": [
                                                                                            189,
                                                                                            193
                                                                                        ],
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 6,
                                                                                                "column": 51
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 6,
                                                                                                "column": 55
                                                                                            }
                                                                                        }
                                                                                    },
                                                                                    "property": {
                                                                                        "type": "Identifier",
                                                                                        "name": "expressions",
                                                                                        "range": [
                                                                                            194,
                                                                                            205
                                                                                        ],
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 6,
                                                                                                "column": 56
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 6,
                                                                                                "column": 67
                                                                                            }
                                                                                        }
                                                                                    },
                                                                                    "range": [
                                                                                        189,
                                                                                        205
                                                                                    ],
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 6,
                                                                                            "column": 51
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 6,
                                                                                            "column": 67
                                                                                        }
                                                                                    }
                                                                                },
                                                                                "property": {
                                                                                    "type": "Identifier",
                                                                                    "name": "length",
                                                                                    "range": [
                                                                                        206,
                                                                                        212
                                                                                    ],
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 6,
                                                                                            "column": 68
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 6,
                                                                                            "column": 74
                                                                                        }
                                                                                    }
                                                                                },
                                                                                "range": [
                                                                                    189,
                                                                                    212
                                                                                ],
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 6,
                                                                                        "column": 51
                                                                                    },
                                                                                    "end": {
                                                                                        "line": 6,
                                                                                        "column": 74
                                                                                    }
                                                                                }
                                                                            },
                                                                            "right": {
                                                                                "type": "Literal",
                                                                                "value": 1,
                                                                                "raw": "1",
                                                                                "range": [
                                                                                    215,
                                                                                    216
                                                                                ],
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 6,
                                                                                        "column": 77
                                                                                    },
                                                                                    "end": {
                                                                                        "line": 6,
                                                                                        "column": 78
                                                                                    }
                                                                                }
                                                                            },
                                                                            "range": [
                                                                                189,
                                                                                216
                                                                            ],
                                                                            "loc": {
                                                                                "start": {
                                                                                    "line": 6,
                                                                                    "column": 51
                                                                                },
                                                                                "end": {
                                                                                    "line": 6,
                                                                                    "column": 78
                                                                                }
                                                                            }
                                                                        },
                                                                        "range": [
                                                                            172,
                                                                            217
                                                                        ],
                                                                        "loc": {
                                                                            "start": {
                                                                                "line": 6,
                                                                                "column": 34
                                                                            },
                                                                            "end": {
                                                                                "line": 6,
                                                                                "column": 79
                                                                            }
                                                                        }
                                                                    }
                                                                ],
                                                                "range": [
                                                                    161,
                                                                    218
                                                                ],
                                                                "loc": {
                                                                    "start": {
                                                                        "line": 6,
                                                                        "column": 23
                                                                    },
                                                                    "end": {
                                                                        "line": 6,
                                                                        "column": 80
                                                                    }
                                                                }
                                                            },
                                                            "range": [
                                                                154,
                                                                219
                                                            ],
                                                            "loc": {
                                                                "start": {
                                                                    "line": 6,
                                                                    "column": 16
                                                                },
                                                                "end": {
                                                                    "line": 6,
                                                                    "column": 81
                                                                }
                                                            }
                                                        }
                                                    ],
                                                    "range": [
                                                        111,
                                                        219
                                                    ],
                                                    "loc": {
                                                        "start": {
                                                            "line": 5,
                                                            "column": 12
                                                        },
                                                        "end": {
                                                            "line": 6,
                                                            "column": 81
                                                        }
                                                    },
                                                    "trailingComments": [
                                                        {
                                                            "type": "Line",
                                                            "value": " no default",
                                                            "range": [
                                                                232,
                                                                245
                                                            ],
                                                            "loc": {
                                                                "start": {
                                                                    "line": 7,
                                                                    "column": 12
                                                                },
                                                                "end": {
                                                                    "line": 7,
                                                                    "column": 25
                                                                }
                                                            }
                                                        }
                                                    ]
                                                }
                                            ],
                                            "range": [
                                                78,
                                                255
                                            ],
                                            "loc": {
                                                "start": {
                                                    "line": 4,
                                                    "column": 8
                                                },
                                                "end": {
                                                    "line": 8,
                                                    "column": 9
                                                }
                                            }
                                        },
                                        {
                                            "type": "ReturnStatement",
                                            "argument": {
                                                "type": "Literal",
                                                "value": false,
                                                "raw": "false",
                                                "range": [
                                                    271,
                                                    276
                                                ],
                                                "loc": {
                                                    "start": {
                                                        "line": 9,
                                                        "column": 15
                                                    },
                                                    "end": {
                                                        "line": 9,
                                                        "column": 20
                                                    }
                                                }
                                            },
                                            "range": [
                                                264,
                                                277
                                            ],
                                            "loc": {
                                                "start": {
                                                    "line": 9,
                                                    "column": 8
                                                },
                                                "end": {
                                                    "line": 9,
                                                    "column": 21
                                                }
                                            },
                                            "leadingComments": [
                                                {
                                                    "type": "Line",
                                                    "value": " no default",
                                                    "range": [
                                                        232,
                                                        245
                                                    ],
                                                    "loc": {
                                                        "start": {
                                                            "line": 7,
                                                            "column": 12
                                                        },
                                                        "end": {
                                                            "line": 7,
                                                            "column": 25
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    ],
                                    "range": [
                                        68,
                                        283
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 3,
                                            "column": 30
                                        },
                                        "end": {
                                            "line": 10,
                                            "column": 5
                                        }
                                    }
                                },
                                "generator": false,
                                "expression": false,
                                "range": [
                                    42,
                                    283
                                ],
                                "loc": {
                                    "start": {
                                        "line": 3,
                                        "column": 4
                                    },
                                    "end": {
                                        "line": 10,
                                        "column": 5
                                    }
                                }
                            }
                        ],
                        "range": [
                            35,
                            286
                        ],
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 35
                            },
                            "end": {
                                "line": 12,
                                "column": 1
                            }
                        }
                    },
                    "generator": false,
                    "expression": false,
                    "range": [
                        17,
                        286
                    ],
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 17
                        },
                        "end": {
                            "line": 12,
                            "column": 1
                        }
                    }
                },
                "range": [
                    0,
                    286
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 0
                    },
                    "end": {
                        "line": 12,
                        "column": 1
                    }
                }
            },
            "range": [
                0,
                287
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 12,
                    "column": 2
                }
            }
        }
    ],
    "sourceType": "script",
    "range": [
        0,
        287
    ],
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 12,
            "column": 2
        }
    },
    "comments": [
        {
            "type": "Line",
            "value": " no default",
            "range": [
                232,
                245
            ],
            "loc": {
                "start": {
                    "line": 7,
                    "column": 12
                },
                "end": {
                    "line": 7,
                    "column": 25
                }
            }
        }
    ],
    "tokens": [
        {
            "type": "Identifier",
            "value": "module",
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
            "type": "Punctuator",
            "value": ".",
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
            "type": "Identifier",
            "value": "exports",
            "range": [
                7,
                14
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 7
                },
                "end": {
                    "line": 1,
                    "column": 14
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "=",
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
            "value": "function",
            "range": [
                17,
                25
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 17
                },
                "end": {
                    "line": 1,
                    "column": 25
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "(",
            "range": [
                25,
                26
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 25
                },
                "end": {
                    "line": 1,
                    "column": 26
                }
            }
        },
        {
            "type": "Identifier",
            "value": "context",
            "range": [
                26,
                33
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 26
                },
                "end": {
                    "line": 1,
                    "column": 33
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ")",
            "range": [
                33,
                34
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 33
                },
                "end": {
                    "line": 1,
                    "column": 34
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "{",
            "range": [
                35,
                36
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 35
                },
                "end": {
                    "line": 1,
                    "column": 36
                }
            }
        },
        {
            "type": "Keyword",
            "value": "function",
            "range": [
                42,
                50
            ],
            "loc": {
                "start": {
                    "line": 3,
                    "column": 4
                },
                "end": {
                    "line": 3,
                    "column": 12
                }
            }
        },
        {
            "type": "Identifier",
            "value": "isConstant",
            "range": [
                51,
                61
            ],
            "loc": {
                "start": {
                    "line": 3,
                    "column": 13
                },
                "end": {
                    "line": 3,
                    "column": 23
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "(",
            "range": [
                61,
                62
            ],
            "loc": {
                "start": {
                    "line": 3,
                    "column": 23
                },
                "end": {
                    "line": 3,
                    "column": 24
                }
            }
        },
        {
            "type": "Identifier",
            "value": "node",
            "range": [
                62,
                66
            ],
            "loc": {
                "start": {
                    "line": 3,
                    "column": 24
                },
                "end": {
                    "line": 3,
                    "column": 28
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ")",
            "range": [
                66,
                67
            ],
            "loc": {
                "start": {
                    "line": 3,
                    "column": 28
                },
                "end": {
                    "line": 3,
                    "column": 29
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "{",
            "range": [
                68,
                69
            ],
            "loc": {
                "start": {
                    "line": 3,
                    "column": 30
                },
                "end": {
                    "line": 3,
                    "column": 31
                }
            }
        },
        {
            "type": "Keyword",
            "value": "switch",
            "range": [
                78,
                84
            ],
            "loc": {
                "start": {
                    "line": 4,
                    "column": 8
                },
                "end": {
                    "line": 4,
                    "column": 14
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "(",
            "range": [
                85,
                86
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
            "type": "Identifier",
            "value": "node",
            "range": [
                86,
                90
            ],
            "loc": {
                "start": {
                    "line": 4,
                    "column": 16
                },
                "end": {
                    "line": 4,
                    "column": 20
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ".",
            "range": [
                90,
                91
            ],
            "loc": {
                "start": {
                    "line": 4,
                    "column": 20
                },
                "end": {
                    "line": 4,
                    "column": 21
                }
            }
        },
        {
            "type": "Identifier",
            "value": "type",
            "range": [
                91,
                95
            ],
            "loc": {
                "start": {
                    "line": 4,
                    "column": 21
                },
                "end": {
                    "line": 4,
                    "column": 25
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ")",
            "range": [
                95,
                96
            ],
            "loc": {
                "start": {
                    "line": 4,
                    "column": 25
                },
                "end": {
                    "line": 4,
                    "column": 26
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "{",
            "range": [
                97,
                98
            ],
            "loc": {
                "start": {
                    "line": 4,
                    "column": 27
                },
                "end": {
                    "line": 4,
                    "column": 28
                }
            }
        },
        {
            "type": "Keyword",
            "value": "case",
            "range": [
                111,
                115
            ],
            "loc": {
                "start": {
                    "line": 5,
                    "column": 12
                },
                "end": {
                    "line": 5,
                    "column": 16
                }
            }
        },
        {
            "type": "String",
            "value": "\"SequenceExpression\"",
            "range": [
                116,
                136
            ],
            "loc": {
                "start": {
                    "line": 5,
                    "column": 17
                },
                "end": {
                    "line": 5,
                    "column": 37
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ":",
            "range": [
                136,
                137
            ],
            "loc": {
                "start": {
                    "line": 5,
                    "column": 37
                },
                "end": {
                    "line": 5,
                    "column": 38
                }
            }
        },
        {
            "type": "Keyword",
            "value": "return",
            "range": [
                154,
                160
            ],
            "loc": {
                "start": {
                    "line": 6,
                    "column": 16
                },
                "end": {
                    "line": 6,
                    "column": 22
                }
            }
        },
        {
            "type": "Identifier",
            "value": "isConstant",
            "range": [
                161,
                171
            ],
            "loc": {
                "start": {
                    "line": 6,
                    "column": 23
                },
                "end": {
                    "line": 6,
                    "column": 33
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "(",
            "range": [
                171,
                172
            ],
            "loc": {
                "start": {
                    "line": 6,
                    "column": 33
                },
                "end": {
                    "line": 6,
                    "column": 34
                }
            }
        },
        {
            "type": "Identifier",
            "value": "node",
            "range": [
                172,
                176
            ],
            "loc": {
                "start": {
                    "line": 6,
                    "column": 34
                },
                "end": {
                    "line": 6,
                    "column": 38
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ".",
            "range": [
                176,
                177
            ],
            "loc": {
                "start": {
                    "line": 6,
                    "column": 38
                },
                "end": {
                    "line": 6,
                    "column": 39
                }
            }
        },
        {
            "type": "Identifier",
            "value": "expressions",
            "range": [
                177,
                188
            ],
            "loc": {
                "start": {
                    "line": 6,
                    "column": 39
                },
                "end": {
                    "line": 6,
                    "column": 50
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "[",
            "range": [
                188,
                189
            ],
            "loc": {
                "start": {
                    "line": 6,
                    "column": 50
                },
                "end": {
                    "line": 6,
                    "column": 51
                }
            }
        },
        {
            "type": "Identifier",
            "value": "node",
            "range": [
                189,
                193
            ],
            "loc": {
                "start": {
                    "line": 6,
                    "column": 51
                },
                "end": {
                    "line": 6,
                    "column": 55
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ".",
            "range": [
                193,
                194
            ],
            "loc": {
                "start": {
                    "line": 6,
                    "column": 55
                },
                "end": {
                    "line": 6,
                    "column": 56
                }
            }
        },
        {
            "type": "Identifier",
            "value": "expressions",
            "range": [
                194,
                205
            ],
            "loc": {
                "start": {
                    "line": 6,
                    "column": 56
                },
                "end": {
                    "line": 6,
                    "column": 67
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ".",
            "range": [
                205,
                206
            ],
            "loc": {
                "start": {
                    "line": 6,
                    "column": 67
                },
                "end": {
                    "line": 6,
                    "column": 68
                }
            }
        },
        {
            "type": "Identifier",
            "value": "length",
            "range": [
                206,
                212
            ],
            "loc": {
                "start": {
                    "line": 6,
                    "column": 68
                },
                "end": {
                    "line": 6,
                    "column": 74
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "-",
            "range": [
                213,
                214
            ],
            "loc": {
                "start": {
                    "line": 6,
                    "column": 75
                },
                "end": {
                    "line": 6,
                    "column": 76
                }
            }
        },
        {
            "type": "Numeric",
            "value": "1",
            "range": [
                215,
                216
            ],
            "loc": {
                "start": {
                    "line": 6,
                    "column": 77
                },
                "end": {
                    "line": 6,
                    "column": 78
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "]",
            "range": [
                216,
                217
            ],
            "loc": {
                "start": {
                    "line": 6,
                    "column": 78
                },
                "end": {
                    "line": 6,
                    "column": 79
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ")",
            "range": [
                217,
                218
            ],
            "loc": {
                "start": {
                    "line": 6,
                    "column": 79
                },
                "end": {
                    "line": 6,
                    "column": 80
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ";",
            "range": [
                218,
                219
            ],
            "loc": {
                "start": {
                    "line": 6,
                    "column": 80
                },
                "end": {
                    "line": 6,
                    "column": 81
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "}",
            "range": [
                254,
                255
            ],
            "loc": {
                "start": {
                    "line": 8,
                    "column": 8
                },
                "end": {
                    "line": 8,
                    "column": 9
                }
            }
        },
        {
            "type": "Keyword",
            "value": "return",
            "range": [
                264,
                270
            ],
            "loc": {
                "start": {
                    "line": 9,
                    "column": 8
                },
                "end": {
                    "line": 9,
                    "column": 14
                }
            }
        },
        {
            "type": "Boolean",
            "value": "false",
            "range": [
                271,
                276
            ],
            "loc": {
                "start": {
                    "line": 9,
                    "column": 15
                },
                "end": {
                    "line": 9,
                    "column": 20
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ";",
            "range": [
                276,
                277
            ],
            "loc": {
                "start": {
                    "line": 9,
                    "column": 20
                },
                "end": {
                    "line": 9,
                    "column": 21
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "}",
            "range": [
                282,
                283
            ],
            "loc": {
                "start": {
                    "line": 10,
                    "column": 4
                },
                "end": {
                    "line": 10,
                    "column": 5
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "}",
            "range": [
                285,
                286
            ],
            "loc": {
                "start": {
                    "line": 12,
                    "column": 0
                },
                "end": {
                    "line": 12,
                    "column": 1
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ";",
            "range": [
                286,
                287
            ],
            "loc": {
                "start": {
                    "line": 12,
                    "column": 1
                },
                "end": {
                    "line": 12,
                    "column": 2
                }
            }
        }
    ]
};