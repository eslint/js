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
                        "name": "a",
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
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
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
                    "range": [
                        4,
                        9
                    ],
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 4
                        },
                        "end": {
                            "line": 1,
                            "column": 9
                        }
                    }
                }
            ],
            "kind": "var",
            "range": [
                0,
                10
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 10
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
                        "name": "b",
                        "range": [
                            15,
                            16
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
                    "init": {
                        "type": "Literal",
                        "value": "Fred",
                        "raw": "'Fred'",
                        "range": [
                            19,
                            25
                        ],
                        "loc": {
                            "start": {
                                "line": 2,
                                "column": 8
                            },
                            "end": {
                                "line": 2,
                                "column": 14
                            }
                        }
                    },
                    "range": [
                        15,
                        25
                    ],
                    "loc": {
                        "start": {
                            "line": 2,
                            "column": 4
                        },
                        "end": {
                            "line": 2,
                            "column": 14
                        }
                    }
                }
            ],
            "kind": "var",
            "range": [
                11,
                26
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 0
                },
                "end": {
                    "line": 2,
                    "column": 15
                }
            }
        },
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "TemplateLiteral",
                "quasis": [
                    {
                        "type": "TemplateElement",
                        "value": {
                            "raw": "Hello ",
                            "cooked": "Hello "
                        },
                        "tail": false,
                        "range": [
                            28,
                            37
                        ],
                        "loc": {
                            "start": {
                                "line": 4,
                                "column": 0
                            },
                            "end": {
                                "line": 4,
                                "column": 9
                            }
                        }
                    },
                    {
                        "type": "TemplateElement",
                        "value": {
                            "raw": ". a + 5 = ",
                            "cooked": ". a + 5 = "
                        },
                        "tail": false,
                        "range": [
                            38,
                            51
                        ],
                        "loc": {
                            "start": {
                                "line": 4,
                                "column": 10
                            },
                            "end": {
                                "line": 4,
                                "column": 23
                            }
                        }
                    },
                    {
                        "type": "TemplateElement",
                        "value": {
                            "raw": "",
                            "cooked": ""
                        },
                        "tail": true,
                        "range": [
                            56,
                            58
                        ],
                        "loc": {
                            "start": {
                                "line": 4,
                                "column": 28
                            },
                            "end": {
                                "line": 4,
                                "column": 30
                            }
                        }
                    }
                ],
                "expressions": [
                    {
                        "type": "Identifier",
                        "name": "b",
                        "range": [
                            37,
                            38
                        ],
                        "loc": {
                            "start": {
                                "line": 4,
                                "column": 9
                            },
                            "end": {
                                "line": 4,
                                "column": 10
                            }
                        }
                    },
                    {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                            "type": "Identifier",
                            "name": "a",
                            "range": [
                                51,
                                52
                            ],
                            "loc": {
                                "start": {
                                    "line": 4,
                                    "column": 23
                                },
                                "end": {
                                    "line": 4,
                                    "column": 24
                                }
                            }
                        },
                        "right": {
                            "type": "Literal",
                            "value": 5,
                            "raw": "5",
                            "range": [
                                55,
                                56
                            ],
                            "loc": {
                                "start": {
                                    "line": 4,
                                    "column": 27
                                },
                                "end": {
                                    "line": 4,
                                    "column": 28
                                }
                            }
                        },
                        "range": [
                            51,
                            56
                        ],
                        "loc": {
                            "start": {
                                "line": 4,
                                "column": 23
                            },
                            "end": {
                                "line": 4,
                                "column": 28
                            }
                        }
                    }
                ],
                "range": [
                    28,
                    58
                ],
                "loc": {
                    "start": {
                        "line": 4,
                        "column": 0
                    },
                    "end": {
                        "line": 4,
                        "column": 30
                    }
                }
            },
            "range": [
                28,
                59
            ],
            "loc": {
                "start": {
                    "line": 4,
                    "column": 0
                },
                "end": {
                    "line": 4,
                    "column": 31
                }
            }
        }
    ],
    "sourceType": "script",
    "range": [
        0,
        59
    ],
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 4,
            "column": 31
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
            "value": "a",
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
            "type": "Numeric",
            "value": "5",
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
            "value": ";",
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
            "type": "Keyword",
            "value": "var",
            "range": [
                11,
                14
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 0
                },
                "end": {
                    "line": 2,
                    "column": 3
                }
            }
        },
        {
            "type": "Identifier",
            "value": "b",
            "range": [
                15,
                16
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
            "type": "Punctuator",
            "value": "=",
            "range": [
                17,
                18
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 6
                },
                "end": {
                    "line": 2,
                    "column": 7
                }
            }
        },
        {
            "type": "String",
            "value": "'Fred'",
            "range": [
                19,
                25
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 8
                },
                "end": {
                    "line": 2,
                    "column": 14
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
                    "line": 2,
                    "column": 14
                },
                "end": {
                    "line": 2,
                    "column": 15
                }
            }
        },
        {
            "type": "Template",
            "value": "`Hello ${",
            "range": [
                28,
                37
            ],
            "loc": {
                "start": {
                    "line": 4,
                    "column": 0
                },
                "end": {
                    "line": 4,
                    "column": 9
                }
            }
        },
        {
            "type": "Identifier",
            "value": "b",
            "range": [
                37,
                38
            ],
            "loc": {
                "start": {
                    "line": 4,
                    "column": 9
                },
                "end": {
                    "line": 4,
                    "column": 10
                }
            }
        },
        {
            "type": "Template",
            "value": "}. a + 5 = ${",
            "range": [
                38,
                51
            ],
            "loc": {
                "start": {
                    "line": 4,
                    "column": 10
                },
                "end": {
                    "line": 4,
                    "column": 23
                }
            }
        },
        {
            "type": "Identifier",
            "value": "a",
            "range": [
                51,
                52
            ],
            "loc": {
                "start": {
                    "line": 4,
                    "column": 23
                },
                "end": {
                    "line": 4,
                    "column": 24
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "+",
            "range": [
                53,
                54
            ],
            "loc": {
                "start": {
                    "line": 4,
                    "column": 25
                },
                "end": {
                    "line": 4,
                    "column": 26
                }
            }
        },
        {
            "type": "Numeric",
            "value": "5",
            "range": [
                55,
                56
            ],
            "loc": {
                "start": {
                    "line": 4,
                    "column": 27
                },
                "end": {
                    "line": 4,
                    "column": 28
                }
            }
        },
        {
            "type": "Template",
            "value": "}`",
            "range": [
                56,
                58
            ],
            "loc": {
                "start": {
                    "line": 4,
                    "column": 28
                },
                "end": {
                    "line": 4,
                    "column": 30
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ";",
            "range": [
                58,
                59
            ],
            "loc": {
                "start": {
                    "line": 4,
                    "column": 30
                },
                "end": {
                    "line": 4,
                    "column": 31
                }
            }
        }
    ]
};