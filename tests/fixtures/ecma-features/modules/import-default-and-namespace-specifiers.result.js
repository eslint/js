module.exports = {
    "type": "Program",
    "body": [
        {
            "type": "ImportDeclaration",
            "specifiers": [
                {
                    "type": "ImportDefaultSpecifier",
                    "local": {
                        "type": "Identifier",
                        "name": "foo",
                        "range": [
                            7,
                            10
                        ],
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 7
                            },
                            "end": {
                                "line": 1,
                                "column": 10
                            }
                        }
                    },
                    "range": [
                        7,
                        10
                    ],
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 7
                        },
                        "end": {
                            "line": 1,
                            "column": 10
                        }
                    }
                },
                {
                    "type": "ImportNamespaceSpecifier",
                    "local": {
                        "type": "Identifier",
                        "name": "bar",
                        "range": [
                            17,
                            20
                        ],
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 17
                            },
                            "end": {
                                "line": 1,
                                "column": 20
                            }
                        }
                    },
                    "range": [
                        12,
                        20
                    ],
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 12
                        },
                        "end": {
                            "line": 1,
                            "column": 20
                        }
                    }
                }
            ],
            "source": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "range": [
                    26,
                    31
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 26
                    },
                    "end": {
                        "line": 1,
                        "column": 31
                    }
                }
            },
            "range": [
                0,
                32
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 32
                }
            }
        }
    ],
    "sourceType": "module",
    "range": [
        0,
        32
    ],
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 1,
            "column": 32
        }
    },
    "tokens": [
        {
            "type": "Keyword",
            "value": "import",
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
            "type": "Identifier",
            "value": "foo",
            "range": [
                7,
                10
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 7
                },
                "end": {
                    "line": 1,
                    "column": 10
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ",",
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
            "value": "*",
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
            "value": "as",
            "range": [
                14,
                16
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 14
                },
                "end": {
                    "line": 1,
                    "column": 16
                }
            }
        },
        {
            "type": "Identifier",
            "value": "bar",
            "range": [
                17,
                20
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 17
                },
                "end": {
                    "line": 1,
                    "column": 20
                }
            }
        },
        {
            "type": "Identifier",
            "value": "from",
            "range": [
                21,
                25
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 21
                },
                "end": {
                    "line": 1,
                    "column": 25
                }
            }
        },
        {
            "type": "String",
            "value": "\"foo\"",
            "range": [
                26,
                31
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 26
                },
                "end": {
                    "line": 1,
                    "column": 31
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ";",
            "range": [
                31,
                32
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 31
                },
                "end": {
                    "line": 1,
                    "column": 32
                }
            }
        }
    ]
};