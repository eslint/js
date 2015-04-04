module.exports = {
    "type": "Program",
    "body": [
        {
            "type": "FunctionDeclaration",
            "id": {
                "type": "Identifier",
                "name": "x",
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
            "params": [
                {
                    "type": "ObjectPattern",
                    "properties": [
                        {
                            "type": "Property",
                            "key": {
                                "type": "Identifier",
                                "name": "a",
                                "range": [
                                    12,
                                    13
                                ],
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 12
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 13
                                    }
                                }
                            },
                            "value": {
                                "type": "Identifier",
                                "name": "a",
                                "range": [
                                    12,
                                    13
                                ],
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 12
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 13
                                    }
                                }
                            },
                            "kind": "init",
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "range": [
                                12,
                                13
                            ],
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 12
                                },
                                "end": {
                                    "line": 1,
                                    "column": 13
                                }
                            }
                        }
                    ],
                    "range": [
                        11,
                        14
                    ],
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 11
                        },
                        "end": {
                            "line": 1,
                            "column": 14
                        }
                    }
                }
            ],
            "defaults": [],
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "TryStatement",
                        "block": {
                            "type": "BlockStatement",
                            "body": [
                                {
                                    "type": "VariableDeclaration",
                                    "declarations": [
                                        {
                                            "type": "VariableDeclarator",
                                            "id": {
                                                "type": "ObjectPattern",
                                                "properties": [
                                                    {
                                                        "type": "Property",
                                                        "key": {
                                                            "type": "Identifier",
                                                            "name": "b",
                                                            "range": [
                                                                35,
                                                                36
                                                            ],
                                                            "loc": {
                                                                "start": {
                                                                    "line": 3,
                                                                    "column": 9
                                                                },
                                                                "end": {
                                                                    "line": 3,
                                                                    "column": 10
                                                                }
                                                            }
                                                        },
                                                        "value": {
                                                            "type": "Identifier",
                                                            "name": "b",
                                                            "range": [
                                                                35,
                                                                36
                                                            ],
                                                            "loc": {
                                                                "start": {
                                                                    "line": 3,
                                                                    "column": 9
                                                                },
                                                                "end": {
                                                                    "line": 3,
                                                                    "column": 10
                                                                }
                                                            }
                                                        },
                                                        "kind": "init",
                                                        "method": false,
                                                        "shorthand": true,
                                                        "computed": false,
                                                        "range": [
                                                            35,
                                                            36
                                                        ],
                                                        "loc": {
                                                            "start": {
                                                                "line": 3,
                                                                "column": 9
                                                            },
                                                            "end": {
                                                                "line": 3,
                                                                "column": 10
                                                            }
                                                        }
                                                    }
                                                ],
                                                "range": [
                                                    34,
                                                    37
                                                ],
                                                "loc": {
                                                    "start": {
                                                        "line": 3,
                                                        "column": 8
                                                    },
                                                    "end": {
                                                        "line": 3,
                                                        "column": 11
                                                    }
                                                }
                                            },
                                            "init": {
                                                "type": "Identifier",
                                                "name": "a",
                                                "range": [
                                                    40,
                                                    41
                                                ],
                                                "loc": {
                                                    "start": {
                                                        "line": 3,
                                                        "column": 14
                                                    },
                                                    "end": {
                                                        "line": 3,
                                                        "column": 15
                                                    }
                                                }
                                            },
                                            "range": [
                                                34,
                                                41
                                            ],
                                            "loc": {
                                                "start": {
                                                    "line": 3,
                                                    "column": 8
                                                },
                                                "end": {
                                                    "line": 3,
                                                    "column": 15
                                                }
                                            }
                                        }
                                    ],
                                    "kind": "var",
                                    "range": [
                                        30,
                                        42
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 3,
                                            "column": 4
                                        },
                                        "end": {
                                            "line": 3,
                                            "column": 16
                                        }
                                    }
                                }
                            ],
                            "range": [
                                24,
                                46
                            ],
                            "loc": {
                                "start": {
                                    "line": 2,
                                    "column": 6
                                },
                                "end": {
                                    "line": 4,
                                    "column": 3
                                }
                            }
                        },
                        "handler": {
                            "type": "CatchClause",
                            "param": {
                                "type": "ArrayPattern",
                                "elements": [
                                    {
                                        "type": "Identifier",
                                        "name": "stack",
                                        "range": [
                                            56,
                                            61
                                        ],
                                        "loc": {
                                            "start": {
                                                "line": 5,
                                                "column": 9
                                            },
                                            "end": {
                                                "line": 5,
                                                "column": 14
                                            }
                                        }
                                    }
                                ],
                                "range": [
                                    55,
                                    62
                                ],
                                "loc": {
                                    "start": {
                                        "line": 5,
                                        "column": 8
                                    },
                                    "end": {
                                        "line": 5,
                                        "column": 15
                                    }
                                }
                            },
                            "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "range": [
                                    64,
                                    69
                                ],
                                "loc": {
                                    "start": {
                                        "line": 5,
                                        "column": 17
                                    },
                                    "end": {
                                        "line": 6,
                                        "column": 3
                                    }
                                }
                            },
                            "range": [
                                49,
                                69
                            ],
                            "loc": {
                                "start": {
                                    "line": 5,
                                    "column": 2
                                },
                                "end": {
                                    "line": 6,
                                    "column": 3
                                }
                            }
                        },
                        "finalizer": null,
                        "range": [
                            20,
                            69
                        ],
                        "loc": {
                            "start": {
                                "line": 2,
                                "column": 2
                            },
                            "end": {
                                "line": 6,
                                "column": 3
                            }
                        }
                    }
                ],
                "range": [
                    16,
                    71
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 16
                    },
                    "end": {
                        "line": 7,
                        "column": 1
                    }
                }
            },
            "generator": false,
            "expression": false,
            "range": [
                0,
                71
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 7,
                    "column": 1
                }
            }
        },
        {
            "type": "EmptyStatement",
            "range": [
                71,
                72
            ],
            "loc": {
                "start": {
                    "line": 7,
                    "column": 1
                },
                "end": {
                    "line": 7,
                    "column": 2
                }
            }
        }
    ],
    "sourceType": "script",
    "range": [
        0,
        72
    ],
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 7,
            "column": 2
        }
    }
};