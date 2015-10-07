module.exports = {
    "type": "Program",
    "body": [
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                    "type": "Identifier",
                    "name": "x",
                    "range": [
                        0,
                        1
                    ],
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 1
                        }
                    }
                },
                "right": {
                    "type": "ObjectExpression",
                    "properties": [
                        {
                            "type": "Property",
                            "key": {
                                "type": "Identifier",
                                "name": "method",
                                "range": [
                                    10,
                                    16
                                ],
                                "loc": {
                                    "start": {
                                        "line": 2,
                                        "column": 4
                                    },
                                    "end": {
                                        "line": 2,
                                        "column": 10
                                    }
                                }
                            },
                            "value": {
                                "type": "FunctionExpression",
                                "id": null,
                                "params": [
                                    {
                                        "type": "Identifier",
                                        "name": "test",
                                        "range": [
                                            17,
                                            21
                                        ],
                                        "loc": {
                                            "start": {
                                                "line": 2,
                                                "column": 11
                                            },
                                            "end": {
                                                "line": 2,
                                                "column": 15
                                            }
                                        }
                                    }
                                ],
                                "body": {
                                    "type": "BlockStatement",
                                    "body": [],
                                    "range": [
                                        23,
                                        31
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 2,
                                            "column": 17
                                        },
                                        "end": {
                                            "line": 4,
                                            "column": 5
                                        }
                                    }
                                },
                                "generator": false,
                                "expression": false,
                                "range": [
                                    16,
                                    31
                                ],
                                "loc": {
                                    "start": {
                                        "line": 2,
                                        "column": 10
                                    },
                                    "end": {
                                        "line": 4,
                                        "column": 5
                                    }
                                }
                            },
                            "kind": "init",
                            "method": true,
                            "shorthand": false,
                            "computed": false,
                            "range": [
                                10,
                                31
                            ],
                            "loc": {
                                "start": {
                                    "line": 2,
                                    "column": 4
                                },
                                "end": {
                                    "line": 4,
                                    "column": 5
                                }
                            }
                        }
                    ],
                    "range": [
                        4,
                        33
                    ],
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 4
                        },
                        "end": {
                            "line": 5,
                            "column": 1
                        }
                    }
                },
                "range": [
                    0,
                    33
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
            },
            "range": [
                0,
                34
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 5,
                    "column": 2
                }
            }
        },
        {
            "type": "EmptyStatement",
            "range": [
                34,
                35
            ],
            "loc": {
                "start": {
                    "line": 5,
                    "column": 2
                },
                "end": {
                    "line": 5,
                    "column": 3
                }
            }
        }
    ],
    "sourceType": "script",
    "range": [
        0,
        35
    ],
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 5,
            "column": 3
        }
    },
    "tokens": [
        {
            "type": "Identifier",
            "value": "x",
            "range": [
                0,
                1
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 1
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "=",
            "range": [
                2,
                3
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 2
                },
                "end": {
                    "line": 1,
                    "column": 3
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "{",
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
            "type": "Identifier",
            "value": "method",
            "range": [
                10,
                16
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 4
                },
                "end": {
                    "line": 2,
                    "column": 10
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "(",
            "range": [
                16,
                17
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
            "type": "Identifier",
            "value": "test",
            "range": [
                17,
                21
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 11
                },
                "end": {
                    "line": 2,
                    "column": 15
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ")",
            "range": [
                21,
                22
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
            "value": "{",
            "range": [
                23,
                24
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 17
                },
                "end": {
                    "line": 2,
                    "column": 18
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "}",
            "range": [
                30,
                31
            ],
            "loc": {
                "start": {
                    "line": 4,
                    "column": 4
                },
                "end": {
                    "line": 4,
                    "column": 5
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "}",
            "range": [
                32,
                33
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
        },
        {
            "type": "Punctuator",
            "value": ";",
            "range": [
                33,
                34
            ],
            "loc": {
                "start": {
                    "line": 5,
                    "column": 1
                },
                "end": {
                    "line": 5,
                    "column": 2
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ";",
            "range": [
                34,
                35
            ],
            "loc": {
                "start": {
                    "line": 5,
                    "column": 2
                },
                "end": {
                    "line": 5,
                    "column": 3
                }
            }
        }
    ]
};