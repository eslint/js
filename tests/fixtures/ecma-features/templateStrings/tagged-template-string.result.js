module.exports = {
    "type": "Program",
    "body": [
        {
            "type": "FunctionDeclaration",
            "id": {
                "type": "Identifier",
                "name": "tag",
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
            "params": [],
            "defaults": [],
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "CallExpression",
                            "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                    "type": "Identifier",
                                    "name": "console",
                                    "range": [
                                        18,
                                        25
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 2,
                                            "column": 1
                                        },
                                        "end": {
                                            "line": 2,
                                            "column": 8
                                        }
                                    }
                                },
                                "property": {
                                    "type": "Identifier",
                                    "name": "log",
                                    "range": [
                                        26,
                                        29
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 2,
                                            "column": 9
                                        },
                                        "end": {
                                            "line": 2,
                                            "column": 12
                                        }
                                    }
                                },
                                "range": [
                                    18,
                                    29
                                ],
                                "loc": {
                                    "start": {
                                        "line": 2,
                                        "column": 1
                                    },
                                    "end": {
                                        "line": 2,
                                        "column": 12
                                    }
                                }
                            },
                            "arguments": [
                                {
                                    "type": "Identifier",
                                    "name": "arguments",
                                    "range": [
                                        30,
                                        39
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 2,
                                            "column": 13
                                        },
                                        "end": {
                                            "line": 2,
                                            "column": 22
                                        }
                                    }
                                }
                            ],
                            "range": [
                                18,
                                40
                            ],
                            "loc": {
                                "start": {
                                    "line": 2,
                                    "column": 1
                                },
                                "end": {
                                    "line": 2,
                                    "column": 23
                                }
                            }
                        },
                        "range": [
                            18,
                            41
                        ],
                        "loc": {
                            "start": {
                                "line": 2,
                                "column": 1
                            },
                            "end": {
                                "line": 2,
                                "column": 24
                            }
                        }
                    }
                ],
                "range": [
                    15,
                    43
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 15
                    },
                    "end": {
                        "line": 3,
                        "column": 1
                    }
                }
            },
            "generator": false,
            "expression": false,
            "range": [
                0,
                43
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 3,
                    "column": 1
                }
            }
        },
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "TaggedTemplateExpression",
                "tag": {
                    "type": "Identifier",
                    "name": "tag",
                    "range": [
                        44,
                        47
                    ],
                    "loc": {
                        "start": {
                            "line": 4,
                            "column": 0
                        },
                        "end": {
                            "line": 4,
                            "column": 3
                        }
                    }
                },
                "quasi": {
                    "type": "TemplateLiteral",
                    "quasis": [
                        {
                            "type": "TemplateElement",
                            "value": {
                                "raw": "a is ",
                                "cooked": "a is "
                            },
                            "tail": false,
                            "range": [
                                47,
                                55
                            ],
                            "loc": {
                                "start": {
                                    "line": 4,
                                    "column": 3
                                },
                                "end": {
                                    "line": 4,
                                    "column": 11
                                }
                            }
                        },
                        {
                            "type": "TemplateElement",
                            "value": {
                                "raw": " while b is ",
                                "cooked": " while b is "
                            },
                            "tail": false,
                            "range": [
                                56,
                                71
                            ],
                            "loc": {
                                "start": {
                                    "line": 4,
                                    "column": 12
                                },
                                "end": {
                                    "line": 4,
                                    "column": 27
                                }
                            }
                        },
                        {
                            "type": "TemplateElement",
                            "value": {
                                "raw": ".",
                                "cooked": "."
                            },
                            "tail": true,
                            "range": [
                                72,
                                75
                            ],
                            "loc": {
                                "start": {
                                    "line": 4,
                                    "column": 28
                                },
                                "end": {
                                    "line": 4,
                                    "column": 31
                                }
                            }
                        }
                    ],
                    "expressions": [
                        {
                            "type": "Identifier",
                            "name": "a",
                            "range": [
                                55,
                                56
                            ],
                            "loc": {
                                "start": {
                                    "line": 4,
                                    "column": 11
                                },
                                "end": {
                                    "line": 4,
                                    "column": 12
                                }
                            }
                        },
                        {
                            "type": "Identifier",
                            "name": "b",
                            "range": [
                                71,
                                72
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
                        }
                    ],
                    "range": [
                        47,
                        75
                    ],
                    "loc": {
                        "start": {
                            "line": 4,
                            "column": 3
                        },
                        "end": {
                            "line": 4,
                            "column": 31
                        }
                    }
                },
                "range": [
                    44,
                    75
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
            },
            "range": [
                44,
                76
            ],
            "loc": {
                "start": {
                    "line": 4,
                    "column": 0
                },
                "end": {
                    "line": 4,
                    "column": 32
                }
            }
        }
    ],
    "sourceType": "script",
    "range": [
        0,
        76
    ],
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 4,
            "column": 32
        }
    }
};