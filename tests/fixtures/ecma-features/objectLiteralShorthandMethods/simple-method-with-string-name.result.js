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
                                "type": "Literal",
                                "value": "method",
                                "raw": "\"method\"",
                                "range": [
                                    10,
                                    18
                                ],
                                "loc": {
                                    "start": {
                                        "line": 2,
                                        "column": 4
                                    },
                                    "end": {
                                        "line": 2,
                                        "column": 12
                                    }
                                }
                            },
                            "value": {
                                "type": "FunctionExpression",
                                "id": null,
                                "params": [],
                                "body": {
                                    "type": "BlockStatement",
                                    "body": [],
                                    "range": [
                                        21,
                                        28
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 2,
                                            "column": 15
                                        },
                                        "end": {
                                            "line": 3,
                                            "column": 5
                                        }
                                    }
                                },
                                "generator": false,
                                "expression": false,
                                "range": [
                                    18,
                                    28
                                ],
                                "loc": {
                                    "start": {
                                        "line": 2,
                                        "column": 12
                                    },
                                    "end": {
                                        "line": 3,
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
                                28
                            ],
                            "loc": {
                                "start": {
                                    "line": 2,
                                    "column": 4
                                },
                                "end": {
                                    "line": 3,
                                    "column": 5
                                }
                            }
                        }
                    ],
                    "range": [
                        4,
                        30
                    ],
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 4
                        },
                        "end": {
                            "line": 4,
                            "column": 1
                        }
                    }
                },
                "range": [
                    0,
                    30
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 0
                    },
                    "end": {
                        "line": 4,
                        "column": 1
                    }
                }
            },
            "range": [
                0,
                31
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 4,
                    "column": 2
                }
            }
        },
        {
            "type": "EmptyStatement",
            "range": [
                31,
                32
            ],
            "loc": {
                "start": {
                    "line": 4,
                    "column": 2
                },
                "end": {
                    "line": 4,
                    "column": 3
                }
            }
        }
    ],
    "sourceType": "script",
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
            "line": 4,
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
            "type": "String",
            "value": "\"method\"",
            "range": [
                10,
                18
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 4
                },
                "end": {
                    "line": 2,
                    "column": 12
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "(",
            "range": [
                18,
                19
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 12
                },
                "end": {
                    "line": 2,
                    "column": 13
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ")",
            "range": [
                19,
                20
            ],
            "loc": {
                "start": {
                    "line": 2,
                    "column": 13
                },
                "end": {
                    "line": 2,
                    "column": 14
                }
            }
        },
        {
            "type": "Punctuator",
            "value": "{",
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
            "value": "}",
            "range": [
                27,
                28
            ],
            "loc": {
                "start": {
                    "line": 3,
                    "column": 4
                },
                "end": {
                    "line": 3,
                    "column": 5
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
                    "line": 4,
                    "column": 0
                },
                "end": {
                    "line": 4,
                    "column": 1
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ";",
            "range": [
                30,
                31
            ],
            "loc": {
                "start": {
                    "line": 4,
                    "column": 1
                },
                "end": {
                    "line": 4,
                    "column": 2
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
                    "line": 4,
                    "column": 2
                },
                "end": {
                    "line": 4,
                    "column": 3
                }
            }
        }
    ]
};