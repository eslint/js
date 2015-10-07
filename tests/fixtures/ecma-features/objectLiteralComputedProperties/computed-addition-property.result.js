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
                        "name": "x",
                        "range": [
                            4,
                            5
                        ],
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 4
                            },
                            "end": {
                                "line": 1,
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
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                        "type": "Literal",
                                        "value": 5,
                                        "raw": "5",
                                        "range": [
                                            15,
                                            16
                                        ],
                                        "loc": {
                                            "start": {
                                                "line": 2,
                                                "column": 5
                                            },
                                            "end": {
                                                "line": 2,
                                                "column": 6
                                            }
                                        }
                                    },
                                    "right": {
                                        "type": "Literal",
                                        "value": 5,
                                        "raw": "5",
                                        "range": [
                                            19,
                                            20
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
                                    "range": [
                                        15,
                                        20
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 2,
                                            "column": 5
                                        },
                                        "end": {
                                            "line": 2,
                                            "column": 10
                                        }
                                    }
                                },
                                "value": {
                                    "type": "Identifier",
                                    "name": "foo",
                                    "range": [
                                        23,
                                        26
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 2,
                                            "column": 13
                                        },
                                        "end": {
                                            "line": 2,
                                            "column": 16
                                        }
                                    }
                                },
                                "kind": "init",
                                "method": false,
                                "shorthand": false,
                                "computed": true,
                                "range": [
                                    14,
                                    26
                                ],
                                "loc": {
                                    "start": {
                                        "line": 2,
                                        "column": 4
                                    },
                                    "end": {
                                        "line": 2,
                                        "column": 16
                                    }
                                }
                            }
                        ],
                        "range": [
                            8,
                            28
                        ],
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 8
                            },
                            "end": {
                                "line": 3,
                                "column": 1
                            }
                        }
                    },
                    "range": [
                        4,
                        28
                    ],
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 4
                        },
                        "end": {
                            "line": 3,
                            "column": 1
                        }
                    }
                }
            ],
            "kind": "var",
            "range": [
                0,
                29
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 3,
                    "column": 2
                }
            }
        }
    ],
    "sourceType": "script",
    "range": [
        0,
        29
    ],
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 3,
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
            "value": "x",
            "range": [
                4,
                5
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 4
                },
                "end": {
                    "line": 1,
                    "column": 5
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "=",
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
            "type": "Punctuator",
            "value": "{",
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
            "value": "[",
            "range": [
                14,
                15
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 4
                },
                "end": {
                    "line": 2,
                    "column": 5
                }
            }
        },
        {
            "type": "Numeric",
            "value": "5",
            "range": [
                15,
                16
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 5
                },
                "end": {
                    "line": 2,
                    "column": 6
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "+",
            "range": [
                17,
                18
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
            "type": "Numeric",
            "value": "5",
            "range": [
                19,
                20
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
            "value": "]",
            "range": [
                20,
                21
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
            "type": "Punctuator",
            "value": ":",
            "range": [
                21,
                22
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
            "value": "foo",
            "range": [
                23,
                26
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 13
                },
                "end": {
                    "line": 2,
                    "column": 16
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "}",
            "range": [
                27,
                28
            ],
            "loc": {
                "start": {
                    "line": 3,
                    "column": 0
                },
                "end": {
                    "line": 3,
                    "column": 1
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ";",
            "range": [
                28,
                29
            ],
            "loc": {
                "start": {
                    "line": 3,
                    "column": 1
                },
                "end": {
                    "line": 3,
                    "column": 2
                }
            }
        }
    ]
};