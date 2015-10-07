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
                        "name": "foo",
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
                    "init": null,
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
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "get",
                        "range": [
                            13,
                            16
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
                    "init": null,
                    "range": [
                        13,
                        16
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
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "set",
                        "range": [
                            22,
                            25
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
                    "init": null,
                    "range": [
                        22,
                        25
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
                }
            ],
            "kind": "var",
            "range": [
                0,
                26
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 3,
                    "column": 8
                }
            }
        },
        {
            "type": "VariableDeclaration",
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "x",
                        "range": [
                            32,
                            33
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
                    "init": {
                        "type": "ObjectExpression",
                        "properties": [
                            {
                                "type": "Property",
                                "key": {
                                    "type": "Identifier",
                                    "name": "foo",
                                    "range": [
                                        42,
                                        45
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 6,
                                            "column": 4
                                        },
                                        "end": {
                                            "line": 6,
                                            "column": 7
                                        }
                                    }
                                },
                                "value": {
                                    "type": "Identifier",
                                    "name": "foo",
                                    "range": [
                                        47,
                                        50
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 6,
                                            "column": 9
                                        },
                                        "end": {
                                            "line": 6,
                                            "column": 12
                                        }
                                    }
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "range": [
                                    42,
                                    50
                                ],
                                "loc": {
                                    "start": {
                                        "line": 6,
                                        "column": 4
                                    },
                                    "end": {
                                        "line": 6,
                                        "column": 12
                                    }
                                }
                            },
                            {
                                "type": "Property",
                                "key": {
                                    "type": "Identifier",
                                    "name": "get",
                                    "range": [
                                        56,
                                        59
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 7,
                                            "column": 4
                                        },
                                        "end": {
                                            "line": 7,
                                            "column": 7
                                        }
                                    }
                                },
                                "value": {
                                    "type": "Identifier",
                                    "name": "get",
                                    "range": [
                                        61,
                                        64
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 7,
                                            "column": 9
                                        },
                                        "end": {
                                            "line": 7,
                                            "column": 12
                                        }
                                    }
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "range": [
                                    56,
                                    64
                                ],
                                "loc": {
                                    "start": {
                                        "line": 7,
                                        "column": 4
                                    },
                                    "end": {
                                        "line": 7,
                                        "column": 12
                                    }
                                }
                            },
                            {
                                "type": "ExperimentalSpreadProperty",
                                "argument": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                        "type": "Identifier",
                                        "name": "set",
                                        "range": [
                                            73,
                                            76
                                        ],
                                        "loc": {
                                            "start": {
                                                "line": 8,
                                                "column": 7
                                            },
                                            "end": {
                                                "line": 8,
                                                "column": 10
                                            }
                                        }
                                    },
                                    "property": {
                                        "type": "Identifier",
                                        "name": "foo",
                                        "range": [
                                            77,
                                            80
                                        ],
                                        "loc": {
                                            "start": {
                                                "line": 8,
                                                "column": 11
                                            },
                                            "end": {
                                                "line": 8,
                                                "column": 14
                                            }
                                        }
                                    },
                                    "range": [
                                        73,
                                        80
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 8,
                                            "column": 7
                                        },
                                        "end": {
                                            "line": 8,
                                            "column": 14
                                        }
                                    }
                                },
                                "range": [
                                    70,
                                    80
                                ],
                                "loc": {
                                    "start": {
                                        "line": 8,
                                        "column": 4
                                    },
                                    "end": {
                                        "line": 8,
                                        "column": 14
                                    }
                                }
                            }
                        ],
                        "range": [
                            36,
                            82
                        ],
                        "loc": {
                            "start": {
                                "line": 5,
                                "column": 8
                            },
                            "end": {
                                "line": 9,
                                "column": 1
                            }
                        }
                    },
                    "range": [
                        32,
                        82
                    ],
                    "loc": {
                        "start": {
                            "line": 5,
                            "column": 4
                        },
                        "end": {
                            "line": 9,
                            "column": 1
                        }
                    }
                }
            ],
            "kind": "var",
            "range": [
                28,
                83
            ],
            "loc": {
                "start": {
                    "line": 5,
                    "column": 0
                },
                "end": {
                    "line": 9,
                    "column": 2
                }
            }
        }
    ],
    "sourceType": "script",
    "range": [
        0,
        83
    ],
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 9,
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
            "value": "foo",
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
            "type": "Punctuator",
            "value": ",",
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
            "type": "Identifier",
            "value": "get",
            "range": [
                13,
                16
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
            "type": "Punctuator",
            "value": ",",
            "range": [
                16,
                17
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 7
                },
                "end": {
                    "line": 2,
                    "column": 8
                }
            }
        },
        {
            "type": "Identifier",
            "value": "set",
            "range": [
                22,
                25
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
            "value": ";",
            "range": [
                25,
                26
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
            "value": "var",
            "range": [
                28,
                31
            ],
            "loc": {
                "start": {
                    "line": 5,
                    "column": 0
                },
                "end": {
                    "line": 5,
                    "column": 3
                }
            }
        },
        {
            "type": "Identifier",
            "value": "x",
            "range": [
                32,
                33
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
            "value": "=",
            "range": [
                34,
                35
            ],
            "loc": {
                "start": {
                    "line": 5,
                    "column": 6
                },
                "end": {
                    "line": 5,
                    "column": 7
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
                    "line": 5,
                    "column": 8
                },
                "end": {
                    "line": 5,
                    "column": 9
                }
            }
        },
        {
            "type": "Identifier",
            "value": "foo",
            "range": [
                42,
                45
            ],
            "loc": {
                "start": {
                    "line": 6,
                    "column": 4
                },
                "end": {
                    "line": 6,
                    "column": 7
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ":",
            "range": [
                45,
                46
            ],
            "loc": {
                "start": {
                    "line": 6,
                    "column": 7
                },
                "end": {
                    "line": 6,
                    "column": 8
                }
            }
        },
        {
            "type": "Identifier",
            "value": "foo",
            "range": [
                47,
                50
            ],
            "loc": {
                "start": {
                    "line": 6,
                    "column": 9
                },
                "end": {
                    "line": 6,
                    "column": 12
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ",",
            "range": [
                50,
                51
            ],
            "loc": {
                "start": {
                    "line": 6,
                    "column": 12
                },
                "end": {
                    "line": 6,
                    "column": 13
                }
            }
        },
        {
            "type": "Identifier",
            "value": "get",
            "range": [
                56,
                59
            ],
            "loc": {
                "start": {
                    "line": 7,
                    "column": 4
                },
                "end": {
                    "line": 7,
                    "column": 7
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ":",
            "range": [
                59,
                60
            ],
            "loc": {
                "start": {
                    "line": 7,
                    "column": 7
                },
                "end": {
                    "line": 7,
                    "column": 8
                }
            }
        },
        {
            "type": "Identifier",
            "value": "get",
            "range": [
                61,
                64
            ],
            "loc": {
                "start": {
                    "line": 7,
                    "column": 9
                },
                "end": {
                    "line": 7,
                    "column": 12
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ",",
            "range": [
                64,
                65
            ],
            "loc": {
                "start": {
                    "line": 7,
                    "column": 12
                },
                "end": {
                    "line": 7,
                    "column": 13
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "...",
            "range": [
                70,
                73
            ],
            "loc": {
                "start": {
                    "line": 8,
                    "column": 4
                },
                "end": {
                    "line": 8,
                    "column": 7
                }
            }
        },
        {
            "type": "Identifier",
            "value": "set",
            "range": [
                73,
                76
            ],
            "loc": {
                "start": {
                    "line": 8,
                    "column": 7
                },
                "end": {
                    "line": 8,
                    "column": 10
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ".",
            "range": [
                76,
                77
            ],
            "loc": {
                "start": {
                    "line": 8,
                    "column": 10
                },
                "end": {
                    "line": 8,
                    "column": 11
                }
            }
        },
        {
            "type": "Identifier",
            "value": "foo",
            "range": [
                77,
                80
            ],
            "loc": {
                "start": {
                    "line": 8,
                    "column": 11
                },
                "end": {
                    "line": 8,
                    "column": 14
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "}",
            "range": [
                81,
                82
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
        },
        {
            "type": "Punctuator",
            "value": ";",
            "range": [
                82,
                83
            ],
            "loc": {
                "start": {
                    "line": 9,
                    "column": 1
                },
                "end": {
                    "line": 9,
                    "column": 2
                }
            }
        }
    ]
};