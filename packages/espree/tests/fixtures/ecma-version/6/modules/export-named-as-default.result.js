export default {
    "type": "Program",
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 3,
            "column": 0
        }
    },
    "range": [
        0,
        44
    ],
    "body": [
        {
            "type": "VariableDeclaration",
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
            "loc": {
                "start": {
                    "line": 2,
                    "column": 0
                },
                "end": {
                    "line": 2,
                    "column": 24
                }
            },
            "range": [
                19,
                43
            ],
            "declaration": null,
            "specifiers": [
                {
                    "type": "ExportSpecifier",
                    "loc": {
                        "start": {
                            "line": 2,
                            "column": 8
                        },
                        "end": {
                            "line": 2,
                            "column": 22
                        }
                    },
                    "range": [
                        27,
                        41
                    ],
                    "local": {
                        "type": "Identifier",
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
                        "loc": {
                            "start": {
                                "line": 2,
                                "column": 15
                            },
                            "end": {
                                "line": 2,
                                "column": 22
                            }
                        },
                        "range": [
                            34,
                            41
                        ],
                        "name": "default"
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
            "type": "Identifier",
            "value": "as",
            "loc": {
                "start": {
                    "line": 2,
                    "column": 12
                },
                "end": {
                    "line": 2,
                    "column": 14
                }
            },
            "range": [
                31,
                33
            ]
        },
        {
            "type": "Identifier",
            "value": "default",
            "loc": {
                "start": {
                    "line": 2,
                    "column": 15
                },
                "end": {
                    "line": 2,
                    "column": 22
                }
            },
            "range": [
                34,
                41
            ]
        },
        {
            "type": "Punctuator",
            "value": "}",
            "loc": {
                "start": {
                    "line": 2,
                    "column": 22
                },
                "end": {
                    "line": 2,
                    "column": 23
                }
            },
            "range": [
                41,
                42
            ]
        },
        {
            "type": "Punctuator",
            "value": ";",
            "loc": {
                "start": {
                    "line": 2,
                    "column": 23
                },
                "end": {
                    "line": 2,
                    "column": 24
                }
            },
            "range": [
                42,
                43
            ]
        }
    ]
};