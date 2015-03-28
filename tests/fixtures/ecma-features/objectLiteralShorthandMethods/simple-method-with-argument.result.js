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
                                "defaults": [],
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
    }
};