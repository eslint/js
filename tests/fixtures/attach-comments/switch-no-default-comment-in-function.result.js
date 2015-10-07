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
                    "name": "a",
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
                }
            ],
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "SwitchStatement",
                        "discriminant": {
                            "type": "Identifier",
                            "name": "a",
                            "range": [
                                30,
                                31
                            ],
                            "loc": {
                                "start": {
                                    "line": 2,
                                    "column": 12
                                },
                                "end": {
                                    "line": 2,
                                    "column": 13
                                }
                            }
                        },
                        "cases": [
                            {
                                "type": "SwitchCase",
                                "test": {
                                    "type": "Literal",
                                    "value": 2,
                                    "raw": "2",
                                    "range": [
                                        48,
                                        49
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 3,
                                            "column": 13
                                        },
                                        "end": {
                                            "line": 3,
                                            "column": 14
                                        }
                                    }
                                },
                                "consequent": [
                                    {
                                        "type": "BreakStatement",
                                        "label": null,
                                        "range": [
                                            63,
                                            69
                                        ],
                                        "loc": {
                                            "start": {
                                                "line": 4,
                                                "column": 12
                                            },
                                            "end": {
                                                "line": 4,
                                                "column": 18
                                            }
                                        }
                                    }
                                ],
                                "range": [
                                    43,
                                    69
                                ],
                                "loc": {
                                    "start": {
                                        "line": 3,
                                        "column": 8
                                    },
                                    "end": {
                                        "line": 4,
                                        "column": 18
                                    }
                                }
                            },
                            {
                                "type": "SwitchCase",
                                "test": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "range": [
                                        83,
                                        84
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 5,
                                            "column": 13
                                        },
                                        "end": {
                                            "line": 5,
                                            "column": 14
                                        }
                                    }
                                },
                                "consequent": [
                                    {
                                        "type": "BreakStatement",
                                        "label": null,
                                        "range": [
                                            98,
                                            104
                                        ],
                                        "loc": {
                                            "start": {
                                                "line": 6,
                                                "column": 12
                                            },
                                            "end": {
                                                "line": 6,
                                                "column": 18
                                            }
                                        }
                                    }
                                ],
                                "range": [
                                    78,
                                    104
                                ],
                                "loc": {
                                    "start": {
                                        "line": 5,
                                        "column": 8
                                    },
                                    "end": {
                                        "line": 6,
                                        "column": 18
                                    }
                                },
                                "trailingComments": [
                                    {
                                        "type": "Line",
                                        "value": "no default",
                                        "range": [
                                            113,
                                            125
                                        ],
                                        "loc": {
                                            "start": {
                                                "line": 7,
                                                "column": 8
                                            },
                                            "end": {
                                                "line": 7,
                                                "column": 20
                                            }
                                        }
                                    }
                                ]
                            }
                        ],
                        "range": [
                            22,
                            131
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
                    16,
                    133
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 16
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
                133
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
        133
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
            "value": "no default",
            "range": [
                113,
                125
            ],
            "loc": {
                "start": {
                    "line": 7,
                    "column": 8
                },
                "end": {
                    "line": 7,
                    "column": 20
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
            "value": "a",
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
            "value": ")",
            "range": [
                14,
                15
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 14
                },
                "end": {
                    "line": 1,
                    "column": 15
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "{",
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
            "type": "Keyword",
            "value": "switch",
            "range": [
                22,
                28
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
                29,
                30
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
            "type": "Identifier",
            "value": "a",
            "range": [
                30,
                31
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 12
                },
                "end": {
                    "line": 2,
                    "column": 13
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ")",
            "range": [
                31,
                32
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 13
                },
                "end": {
                    "line": 2,
                    "column": 14
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "{",
            "range": [
                33,
                34
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
            "type": "Keyword",
            "value": "case",
            "range": [
                43,
                47
            ],
            "loc": {
                "start": {
                    "line": 3,
                    "column": 8
                },
                "end": {
                    "line": 3,
                    "column": 12
                }
            }
        },
        {
            "type": "Numeric",
            "value": "2",
            "range": [
                48,
                49
            ],
            "loc": {
                "start": {
                    "line": 3,
                    "column": 13
                },
                "end": {
                    "line": 3,
                    "column": 14
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ":",
            "range": [
                49,
                50
            ],
            "loc": {
                "start": {
                    "line": 3,
                    "column": 14
                },
                "end": {
                    "line": 3,
                    "column": 15
                }
            }
        },
        {
            "type": "Keyword",
            "value": "break",
            "range": [
                63,
                68
            ],
            "loc": {
                "start": {
                    "line": 4,
                    "column": 12
                },
                "end": {
                    "line": 4,
                    "column": 17
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ";",
            "range": [
                68,
                69
            ],
            "loc": {
                "start": {
                    "line": 4,
                    "column": 17
                },
                "end": {
                    "line": 4,
                    "column": 18
                }
            }
        },
        {
            "type": "Keyword",
            "value": "case",
            "range": [
                78,
                82
            ],
            "loc": {
                "start": {
                    "line": 5,
                    "column": 8
                },
                "end": {
                    "line": 5,
                    "column": 12
                }
            }
        },
        {
            "type": "Numeric",
            "value": "1",
            "range": [
                83,
                84
            ],
            "loc": {
                "start": {
                    "line": 5,
                    "column": 13
                },
                "end": {
                    "line": 5,
                    "column": 14
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ":",
            "range": [
                84,
                85
            ],
            "loc": {
                "start": {
                    "line": 5,
                    "column": 14
                },
                "end": {
                    "line": 5,
                    "column": 15
                }
            }
        },
        {
            "type": "Keyword",
            "value": "break",
            "range": [
                98,
                103
            ],
            "loc": {
                "start": {
                    "line": 6,
                    "column": 12
                },
                "end": {
                    "line": 6,
                    "column": 17
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ";",
            "range": [
                103,
                104
            ],
            "loc": {
                "start": {
                    "line": 6,
                    "column": 17
                },
                "end": {
                    "line": 6,
                    "column": 18
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "}",
            "range": [
                130,
                131
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
                132,
                133
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