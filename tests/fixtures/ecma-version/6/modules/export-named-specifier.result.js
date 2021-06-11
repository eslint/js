module.exports = {
    "type": "Program",
    "start": 0,
    "end": 32,
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 2,
            "column": 13
        }
    },
    "range": [
        0,
        32
    ],
    "body": [
        {
            "type": "VariableDeclaration",
            "start": 0,
            "end": 18,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 18
                }
            },
            "range": [
                0,
                18
            ],
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "start": 6,
                    "end": 17,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 6
                        },
                        "end": {
                            "line": 1,
                            "column": 17
                        }
                    },
                    "range": [
                        6,
                        17
                    ],
                    "id": {
                        "type": "Identifier",
                        "start": 6,
                        "end": 9,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 6
                            },
                            "end": {
                                "line": 1,
                                "column": 9
                            }
                        },
                        "range": [
                            6,
                            9
                        ],
                        "name": "foo"
                    },
                    "init": {
                        "type": "Literal",
                        "start": 12,
                        "end": 17,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 12
                            },
                            "end": {
                                "line": 1,
                                "column": 17
                            }
                        },
                        "range": [
                            12,
                            17
                        ],
                        "value": "foo",
                        "raw": "\"foo\""
                    }
                }
            ],
            "kind": "const"
        },
        {
            "type": "ExportNamedDeclaration",
            "start": 19,
            "end": 32,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 0
                },
                "end": {
                    "line": 2,
                    "column": 13
                }
            },
            "range": [
                19,
                32
            ],
            "declaration": null,
            "specifiers": [
                {
                    "type": "ExportSpecifier",
                    "start": 27,
                    "end": 30,
                    "loc": {
                        "start": {
                            "line": 2,
                            "column": 8
                        },
                        "end": {
                            "line": 2,
                            "column": 11
                        }
                    },
                    "range": [
                        27,
                        30
                    ],
                    "local": {
                        "type": "Identifier",
                        "start": 27,
                        "end": 30,
                        "loc": {
                            "start": {
                                "line": 2,
                                "column": 8
                            },
                            "end": {
                                "line": 2,
                                "column": 11
                            }
                        },
                        "range": [
                            27,
                            30
                        ],
                        "name": "foo"
                    },
                    "exported": {
                        "type": "Identifier",
                        "start": 27,
                        "end": 30,
                        "loc": {
                            "start": {
                                "line": 2,
                                "column": 8
                            },
                            "end": {
                                "line": 2,
                                "column": 11
                            }
                        },
                        "range": [
                            27,
                            30
                        ],
                        "name": "foo"
                    }
                }
            ],
            "source": null
        }
    ],
    "sourceType": "module",
    "tokens": [
        {
            "type": "Keyword",
            "value": "const",
            "start": 0,
            "end": 5,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 5
                }
            },
            "range": [
                0,
                5
            ]
        },
        {
            "type": "Identifier",
            "value": "foo",
            "start": 6,
            "end": 9,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 6
                },
                "end": {
                    "line": 1,
                    "column": 9
                }
            },
            "range": [
                6,
                9
            ]
        },
        {
            "type": "Punctuator",
            "value": "=",
            "start": 10,
            "end": 11,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 10
                },
                "end": {
                    "line": 1,
                    "column": 11
                }
            },
            "range": [
                10,
                11
            ]
        },
        {
            "type": "String",
            "value": "\"foo\"",
            "start": 12,
            "end": 17,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 12
                },
                "end": {
                    "line": 1,
                    "column": 17
                }
            },
            "range": [
                12,
                17
            ]
        },
        {
            "type": "Punctuator",
            "value": ";",
            "start": 17,
            "end": 18,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 17
                },
                "end": {
                    "line": 1,
                    "column": 18
                }
            },
            "range": [
                17,
                18
            ]
        },
        {
            "type": "Keyword",
            "value": "export",
            "start": 19,
            "end": 25,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 0
                },
                "end": {
                    "line": 2,
                    "column": 6
                }
            },
            "range": [
                19,
                25
            ]
        },
        {
            "type": "Punctuator",
            "value": "{",
            "start": 26,
            "end": 27,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 7
                },
                "end": {
                    "line": 2,
                    "column": 8
                }
            },
            "range": [
                26,
                27
            ]
        },
        {
            "type": "Identifier",
            "value": "foo",
            "start": 27,
            "end": 30,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 8
                },
                "end": {
                    "line": 2,
                    "column": 11
                }
            },
            "range": [
                27,
                30
            ]
        },
        {
            "type": "Punctuator",
            "value": "}",
            "start": 30,
            "end": 31,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 11
                },
                "end": {
                    "line": 2,
                    "column": 12
                }
            },
            "range": [
                30,
                31
            ]
        },
        {
            "type": "Punctuator",
            "value": ";",
            "start": 31,
            "end": 32,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 12
                },
                "end": {
                    "line": 2,
                    "column": 13
                }
            },
            "range": [
                31,
                32
            ]
        }
    ]
};
