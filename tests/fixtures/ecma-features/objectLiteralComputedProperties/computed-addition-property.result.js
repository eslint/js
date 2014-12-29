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
};