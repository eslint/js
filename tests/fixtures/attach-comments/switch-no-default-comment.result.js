module.exports = {
    "type": "Program",
    "body": [
        {
            "type": "SwitchStatement",
            "discriminant": {
                "type": "Identifier",
                "name": "a",
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
            "cases": [
                {
                    "type": "SwitchCase",
                    "test": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "range": [
                            22,
                            23
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
                    "consequent": [
                        {
                            "type": "BreakStatement",
                            "label": null,
                            "range": [
                                33,
                                39
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
                    "range": [
                        17,
                        39
                    ],
                    "loc": {
                        "start": {
                            "line": 2,
                            "column": 4
                        },
                        "end": {
                            "line": 3,
                            "column": 14
                        }
                    },
                    "trailingComments": [
                        {
                            "type": "Line",
                            "value": "no default",
                            "range": [
                                44,
                                56
                            ],
                            "loc": {
                                "start": {
                                    "line": 4,
                                    "column": 4
                                },
                                "end": {
                                    "line": 4,
                                    "column": 16
                                }
                            }
                        }
                    ]
                }
            ],
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
                    "line": 5,
                    "column": 1
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
            "line": 5,
            "column": 1
        }
    },
    "comments": [
        {
            "type": "Line",
            "value": "no default",
            "range": [
                44,
                56
            ],
            "loc": {
                "start": {
                    "line": 4,
                    "column": 4
                },
                "end": {
                    "line": 4,
                    "column": 16
                }
            }
        }
    ],
    "tokens": [
        {
            "type": "Keyword",
            "value": "switch",
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
            "value": "(",
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
            "value": "a",
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
            "value": ")",
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
            "value": "{",
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
            "type": "Keyword",
            "value": "case",
            "range": [
                17,
                21
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 4
                },
                "end": {
                    "line": 2,
                    "column": 8
                }
            }
        },
        {
            "type": "Numeric",
            "value": "1",
            "range": [
                22,
                23
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
            "value": ":",
            "range": [
                23,
                24
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
            "value": "break",
            "range": [
                33,
                38
            ],
            "loc": {
                "start": {
                    "line": 3,
                    "column": 8
                },
                "end": {
                    "line": 3,
                    "column": 13
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ";",
            "range": [
                38,
                39
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
            "value": "}",
            "range": [
                57,
                58
            ],
            "loc": {
                "start": {
                    "line": 5,
                    "column": 0
                },
                "end": {
                    "line": 5,
                    "column": 1
                }
            }
        }
    ]
};