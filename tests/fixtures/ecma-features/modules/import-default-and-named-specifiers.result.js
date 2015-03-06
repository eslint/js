module.exports = {
    "type": "Program",
    "body": [
        {
            "type": "ImportDeclaration",
            "specifiers": [
                {
                    "type": "ImportDefaultSpecifier",
                    "local": {
                        "type": "Identifier",
                        "name": "foo",
                        "range": [
                            7,
                            10
                        ],
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 7
                            },
                            "end": {
                                "line": 1,
                                "column": 10
                            }
                        }
                    },
                    "range": [
                        7,
                        10
                    ],
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 7
                        },
                        "end": {
                            "line": 1,
                            "column": 10
                        }
                    }
                },
                {
                    "type": "ImportSpecifier",
                    "local": {
                        "type": "Identifier",
                        "name": "bar",
                        "range": [
                            13,
                            16
                        ],
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 13
                            },
                            "end": {
                                "line": 1,
                                "column": 16
                            }
                        }
                    },
                    "imported": {
                        "type": "Identifier",
                        "name": "bar",
                        "range": [
                            13,
                            16
                        ],
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 13
                            },
                            "end": {
                                "line": 1,
                                "column": 16
                            }
                        }
                    },
                    "range": [
                        13,
                        16
                    ],
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 13
                        },
                        "end": {
                            "line": 1,
                            "column": 16
                        }
                    }
                }
            ],
            "source": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "range": [
                    23,
                    28
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 23
                    },
                    "end": {
                        "line": 1,
                        "column": 28
                    }
                }
            },
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
                    "line": 1,
                    "column": 29
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
            "line": 1,
            "column": 29
        }
    }
};