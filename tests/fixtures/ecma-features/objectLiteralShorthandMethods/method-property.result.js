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
                                    "type": "Identifier",
                                    "name": "foo",
                                    "range": [
                                        14,
                                        17
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 2,
                                            "column": 4
                                        },
                                        "end": {
                                            "line": 2,
                                            "column": 7
                                        }
                                    }
                                },
                                "value": {
                                    "type": "FunctionExpression",
                                    "id": null,
                                    "params": [],
                                    "defaults": [],
                                    "body": {
                                        "type": "BlockStatement",
                                        "body": [
                                            {
                                                "type": "ReturnStatement",
                                                "argument": {
                                                    "type": "Identifier",
                                                    "name": "bar",
                                                    "range": [
                                                        37,
                                                        40
                                                    ],
                                                    "loc": {
                                                        "start": {
                                                            "line": 3,
                                                            "column": 15
                                                        },
                                                        "end": {
                                                            "line": 3,
                                                            "column": 18
                                                        }
                                                    }
                                                },
                                                "range": [
                                                    30,
                                                    41
                                                ],
                                                "loc": {
                                                    "start": {
                                                        "line": 3,
                                                        "column": 8
                                                    },
                                                    "end": {
                                                        "line": 3,
                                                        "column": 19
                                                    }
                                                }
                                            }
                                        ],
                                        "range": [
                                            20,
                                            47
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
                                    "generator": false,
                                    "expression": false,
                                    "range": [
                                        17,
                                        47
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 2,
                                            "column": 7
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
                                    14,
                                    47
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
                            8,
                            49
                        ],
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 8
                            },
                            "end": {
                                "line": 5,
                                "column": 1
                            }
                        }
                    },
                    "range": [
                        4,
                        49
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
                }
            ],
            "kind": "var",
            "range": [
                0,
                50
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
        }
    ],
    "sourceType": "script",
    "range": [
        0,
        50
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
};