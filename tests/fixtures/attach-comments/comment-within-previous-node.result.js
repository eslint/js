module.exports = {
    "type": "Program",
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 6,
            "column": 8
        }
    },
    "range": [
        0,
        54
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
                    "line": 4,
                    "column": 2
                }
            },
            "range": [
                0,
                44
            ],
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 4
                        },
                        "end": {
                            "line": 4,
                            "column": 1
                        }
                    },
                    "range": [
                        4,
                        43
                    ],
                    "id": {
                        "type": "Identifier",
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 4
                            },
                            "end": {
                                "line": 1,
                                "column": 7
                            }
                        },
                        "range": [
                            4,
                            7
                        ],
                        "name": "foo"
                    },
                    "init": {
                        "type": "ObjectExpression",
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 10
                            },
                            "end": {
                                "line": 4,
                                "column": 1
                            }
                        },
                        "range": [
                            10,
                            43
                        ],
                        "properties": [
                            {
                                "type": "Property",
                                "loc": {
                                    "start": {
                                        "line": 2,
                                        "column": 4
                                    },
                                    "end": {
                                        "line": 2,
                                        "column": 14
                                    }
                                },
                                "range": [
                                    16,
                                    26
                                ],
                                "key": {
                                    "type": "Identifier",
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
                                        16,
                                        19
                                    ],
                                    "name": "bar"
                                },
                                "value": {
                                    "type": "Literal",
                                    "loc": {
                                        "start": {
                                            "line": 2,
                                            "column": 9
                                        },
                                        "end": {
                                            "line": 2,
                                            "column": 14
                                        }
                                    },
                                    "range": [
                                        21,
                                        26
                                    ],
                                    "value": "bar",
                                    "raw": "'bar'"
                                },
                                "kind": "init",
                                "trailingComments": [
                                    {
                                        "type": "Line",
                                        "value": " comment",
                                        "range": [
                                            31,
                                            41
                                        ],
                                        "loc": {
                                            "start": {
                                                "line": 3,
                                                "column": 4
                                            },
                                            "end": {
                                                "line": 3,
                                                "column": 14
                                            }
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                }
            ],
            "kind": "var"
        },
        {
            "type": "VariableDeclaration",
            "loc": {
                "start": {
                    "line": 6,
                    "column": 0
                },
                "end": {
                    "line": 6,
                    "column": 8
                }
            },
            "range": [
                46,
                54
            ],
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "loc": {
                        "start": {
                            "line": 6,
                            "column": 4
                        },
                        "end": {
                            "line": 6,
                            "column": 7
                        }
                    },
                    "range": [
                        50,
                        53
                    ],
                    "id": {
                        "type": "Identifier",
                        "loc": {
                            "start": {
                                "line": 6,
                                "column": 4
                            },
                            "end": {
                                "line": 6,
                                "column": 7
                            }
                        },
                        "range": [
                            50,
                            53
                        ],
                        "name": "baz"
                    },
                    "init": null
                }
            ],
            "kind": "var"
        }
    ],
    "sourceType": "script",
    "comments": [
        {
            "type": "Line",
            "value": " comment",
            "range": [
                31,
                41
            ],
            "loc": {
                "start": {
                    "line": 3,
                    "column": 4
                },
                "end": {
                    "line": 3,
                    "column": 14
                }
            }
        }
    ],
    "tokens": [
        {
            "type": "Keyword",
            "value": "var",
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 3
                }
            },
            "range": [
                0,
                3
            ]
        },
        {
            "type": "Identifier",
            "value": "foo",
            "loc": {
                "start": {
                    "line": 1,
                    "column": 4
                },
                "end": {
                    "line": 1,
                    "column": 7
                }
            },
            "range": [
                4,
                7
            ]
        },
        {
            "type": "Punctuator",
            "value": "=",
            "loc": {
                "start": {
                    "line": 1,
                    "column": 8
                },
                "end": {
                    "line": 1,
                    "column": 9
                }
            },
            "range": [
                8,
                9
            ]
        },
        {
            "type": "Punctuator",
            "value": "{",
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
            "type": "Identifier",
            "value": "bar",
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
                16,
                19
            ]
        },
        {
            "type": "Punctuator",
            "value": ":",
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
                19,
                20
            ]
        },
        {
            "type": "String",
            "value": "'bar'",
            "loc": {
                "start": {
                    "line": 2,
                    "column": 9
                },
                "end": {
                    "line": 2,
                    "column": 14
                }
            },
            "range": [
                21,
                26
            ]
        },
        {
            "type": "Punctuator",
            "value": "}",
            "loc": {
                "start": {
                    "line": 4,
                    "column": 0
                },
                "end": {
                    "line": 4,
                    "column": 1
                }
            },
            "range": [
                42,
                43
            ]
        },
        {
            "type": "Punctuator",
            "value": ";",
            "loc": {
                "start": {
                    "line": 4,
                    "column": 1
                },
                "end": {
                    "line": 4,
                    "column": 2
                }
            },
            "range": [
                43,
                44
            ]
        },
        {
            "type": "Keyword",
            "value": "var",
            "loc": {
                "start": {
                    "line": 6,
                    "column": 0
                },
                "end": {
                    "line": 6,
                    "column": 3
                }
            },
            "range": [
                46,
                49
            ]
        },
        {
            "type": "Identifier",
            "value": "baz",
            "loc": {
                "start": {
                    "line": 6,
                    "column": 4
                },
                "end": {
                    "line": 6,
                    "column": 7
                }
            },
            "range": [
                50,
                53
            ]
        },
        {
            "type": "Punctuator",
            "value": ";",
            "loc": {
                "start": {
                    "line": 6,
                    "column": 7
                },
                "end": {
                    "line": 6,
                    "column": 8
                }
            },
            "range": [
                53,
                54
            ]
        }
    ]
};
