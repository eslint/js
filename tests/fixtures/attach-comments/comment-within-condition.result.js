module.exports = {
    "type": "Program",
    "body": [
        {
            "type": "IfStatement",
            "test": {
                "type": "Identifier",
                "name": "a",
                "range": [
                    25,
                    26
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
                },
                "leadingComments": [
                    {
                        "type": "Block",
                        "value": " bar ",
                        "range": [
                            14,
                            23
                        ],
                        "loc": {
                            "start": {
                                "line": 2,
                                "column": 4
                            },
                            "end": {
                                "line": 2,
                                "column": 13
                            }
                        }
                    }
                ]
            },
            "consequent": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                    28,
                    30
                ],
                "loc": {
                    "start": {
                        "line": 2,
                        "column": 18
                    },
                    "end": {
                        "line": 2,
                        "column": 20
                    }
                }
            },
            "alternate": null,
            "range": [
                10,
                30
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 0
                },
                "end": {
                    "line": 2,
                    "column": 20
                }
            },
            "leadingComments": [
                {
                    "type": "Block",
                    "value": " foo ",
                    "range": [
                        0,
                        9
                    ],
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 9
                        }
                    }
                }
            ]
        }
    ],
    "sourceType": "script",
    "range": [
        10,
        30
    ],
    "loc": {
        "start": {
            "line": 2,
            "column": 0
        },
        "end": {
            "line": 2,
            "column": 20
        }
    },
    "comments": [
        {
            "type": "Block",
            "value": " foo ",
            "range": [
                0,
                9
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 9
                }
            }
        },
        {
            "type": "Block",
            "value": " bar ",
            "range": [
                14,
                23
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 4
                },
                "end": {
                    "line": 2,
                    "column": 13
                }
            }
        }
    ],
    "tokens": [
        {
            "type": "Keyword",
            "value": "if",
            "range": [
                10,
                12
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 0
                },
                "end": {
                    "line": 2,
                    "column": 2
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "(",
            "range": [
                13,
                14
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 3
                },
                "end": {
                    "line": 2,
                    "column": 4
                }
            }
        },
        {
            "type": "Identifier",
            "value": "a",
            "range": [
                25,
                26
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
            "type": "Punctuator",
            "value": ")",
            "range": [
                26,
                27
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
            "type": "Punctuator",
            "value": "{",
            "range": [
                28,
                29
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 18
                },
                "end": {
                    "line": 2,
                    "column": 19
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "}",
            "range": [
                29,
                30
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
        }
    ]
};