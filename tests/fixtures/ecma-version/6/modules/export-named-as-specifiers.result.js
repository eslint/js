export default {
    "type": "Program",
    "start": 0,
    "end": 65,
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 3,
            "column": 29
        }
    },
    "range": [
        0,
        65
    ],
    "body": [
        {
            "type": "VariableDeclaration",
            "start": 0,
            "end": 35,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 2,
                    "column": 16
                }
            },
            "range": [
                0,
                35
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
                },
                {
                    "type": "VariableDeclarator",
                    "start": 23,
                    "end": 34,
                    "loc": {
                        "start": {
                            "line": 2,
                            "column": 4
                        },
                        "end": {
                            "line": 2,
                            "column": 15
                        }
                    },
                    "range": [
                        23,
                        34
                    ],
                    "id": {
                        "type": "Identifier",
                        "start": 23,
                        "end": 26,
                        "loc": {
                            "start": {
                                "line": 2,
                                "column": 4
                            },
                            "end": {
                                "line": 2,
                                "column": 7
                            }
                        },
                        "range": [
                            23,
                            26
                        ],
                        "name": "bar"
                    },
                    "init": {
                        "type": "Literal",
                        "start": 29,
                        "end": 34,
                        "loc": {
                            "start": {
                                "line": 2,
                                "column": 10
                            },
                            "end": {
                                "line": 2,
                                "column": 15
                            }
                        },
                        "range": [
                            29,
                            34
                        ],
                        "value": "bar",
                        "raw": "\"bar\""
                    }
                }
            ],
            "kind": "const"
        },
        {
            "type": "ExportNamedDeclaration",
            "start": 36,
            "end": 65,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 0
                },
                "end": {
                    "line": 3,
                    "column": 29
                }
            },
            "range": [
                36,
                65
            ],
            "declaration": null,
            "specifiers": [
                {
                    "type": "ExportSpecifier",
                    "start": 44,
                    "end": 58,
                    "loc": {
                        "start": {
                            "line": 3,
                            "column": 8
                        },
                        "end": {
                            "line": 3,
                            "column": 22
                        }
                    },
                    "range": [
                        44,
                        58
                    ],
                    "local": {
                        "type": "Identifier",
                        "start": 44,
                        "end": 47,
                        "loc": {
                            "start": {
                                "line": 3,
                                "column": 8
                            },
                            "end": {
                                "line": 3,
                                "column": 11
                            }
                        },
                        "range": [
                            44,
                            47
                        ],
                        "name": "foo"
                    },
                    "exported": {
                        "type": "Identifier",
                        "start": 51,
                        "end": 58,
                        "loc": {
                            "start": {
                                "line": 3,
                                "column": 15
                            },
                            "end": {
                                "line": 3,
                                "column": 22
                            }
                        },
                        "range": [
                            51,
                            58
                        ],
                        "name": "default"
                    }
                },
                {
                    "type": "ExportSpecifier",
                    "start": 60,
                    "end": 63,
                    "loc": {
                        "start": {
                            "line": 3,
                            "column": 24
                        },
                        "end": {
                            "line": 3,
                            "column": 27
                        }
                    },
                    "range": [
                        60,
                        63
                    ],
                    "local": {
                        "type": "Identifier",
                        "start": 60,
                        "end": 63,
                        "loc": {
                            "start": {
                                "line": 3,
                                "column": 24
                            },
                            "end": {
                                "line": 3,
                                "column": 27
                            }
                        },
                        "range": [
                            60,
                            63
                        ],
                        "name": "bar"
                    },
                    "exported": {
                        "type": "Identifier",
                        "start": 60,
                        "end": 63,
                        "loc": {
                            "start": {
                                "line": 3,
                                "column": 24
                            },
                            "end": {
                                "line": 3,
                                "column": 27
                            }
                        },
                        "range": [
                            60,
                            63
                        ],
                        "name": "bar"
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
            "value": ",",
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
            "type": "Identifier",
            "value": "bar",
            "start": 23,
            "end": 26,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 4
                },
                "end": {
                    "line": 2,
                    "column": 7
                }
            },
            "range": [
                23,
                26
            ]
        },
        {
            "type": "Punctuator",
            "value": "=",
            "start": 27,
            "end": 28,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 8
                },
                "end": {
                    "line": 2,
                    "column": 9
                }
            },
            "range": [
                27,
                28
            ]
        },
        {
            "type": "String",
            "value": "\"bar\"",
            "start": 29,
            "end": 34,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 10
                },
                "end": {
                    "line": 2,
                    "column": 15
                }
            },
            "range": [
                29,
                34
            ]
        },
        {
            "type": "Punctuator",
            "value": ";",
            "start": 34,
            "end": 35,
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
            "range": [
                34,
                35
            ]
        },
        {
            "type": "Keyword",
            "value": "export",
            "start": 36,
            "end": 42,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 0
                },
                "end": {
                    "line": 3,
                    "column": 6
                }
            },
            "range": [
                36,
                42
            ]
        },
        {
            "type": "Punctuator",
            "value": "{",
            "start": 43,
            "end": 44,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 7
                },
                "end": {
                    "line": 3,
                    "column": 8
                }
            },
            "range": [
                43,
                44
            ]
        },
        {
            "type": "Identifier",
            "value": "foo",
            "start": 44,
            "end": 47,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 8
                },
                "end": {
                    "line": 3,
                    "column": 11
                }
            },
            "range": [
                44,
                47
            ]
        },
        {
            "type": "Identifier",
            "value": "as",
            "start": 48,
            "end": 50,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 12
                },
                "end": {
                    "line": 3,
                    "column": 14
                }
            },
            "range": [
                48,
                50
            ]
        },
        {
            "type": "Keyword",
            "value": "default",
            "start": 51,
            "end": 58,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 15
                },
                "end": {
                    "line": 3,
                    "column": 22
                }
            },
            "range": [
                51,
                58
            ]
        },
        {
            "type": "Punctuator",
            "value": ",",
            "start": 58,
            "end": 59,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 22
                },
                "end": {
                    "line": 3,
                    "column": 23
                }
            },
            "range": [
                58,
                59
            ]
        },
        {
            "type": "Identifier",
            "value": "bar",
            "start": 60,
            "end": 63,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 24
                },
                "end": {
                    "line": 3,
                    "column": 27
                }
            },
            "range": [
                60,
                63
            ]
        },
        {
            "type": "Punctuator",
            "value": "}",
            "start": 63,
            "end": 64,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 27
                },
                "end": {
                    "line": 3,
                    "column": 28
                }
            },
            "range": [
                63,
                64
            ]
        },
        {
            "type": "Punctuator",
            "value": ";",
            "start": 64,
            "end": 65,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 28
                },
                "end": {
                    "line": 3,
                    "column": 29
                }
            },
            "range": [
                64,
                65
            ]
        }
    ]
};
