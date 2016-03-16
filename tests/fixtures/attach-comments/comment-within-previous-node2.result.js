module.exports = {
    "type": "Program",
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 6,
            "column": 1
        }
    },
    "range": [0, 70],
    "body": [{
        "type": "FunctionDeclaration",
        "loc": {
            "start": {
                "line": 1,
                "column": 0
            },
            "end": {
                "line": 6,
                "column": 1
            }
        },
        "range": [0, 70],
        "id": {
            "type": "Identifier",
            "loc": {
                "start": {
                    "line": 1,
                    "column": 9
                },
                "end": {
                    "line": 1,
                    "column": 10
                }
            },
            "range": [9, 10],
            "name": "a"
        },
        "params": [],
        "body": {
            "type": "BlockStatement",
            "loc": {
                "start": {
                    "line": 1,
                    "column": 13
                },
                "end": {
                    "line": 6,
                    "column": 1
                }
            },
            "range": [13, 70],
            "body": [{
                "type": "VariableDeclaration",
                "loc": {
                    "start": {
                        "line": 2,
                        "column": 4
                    },
                    "end": {
                        "line": 4,
                        "column": 6
                    }
                },
                "range": [19, 54],
                "declarations": [{
                    "type": "VariableDeclarator",
                    "loc": {
                        "start": {
                            "line": 2,
                            "column": 8
                        },
                        "end": {
                            "line": 4,
                            "column": 5
                        }
                    },
                    "range": [23, 53],
                    "id": {
                        "type": "Identifier",
                        "loc": {
                            "start": {
                                "line": 2,
                                "column": 8
                            },
                            "end": {
                                "line": 2,
                                "column": 9
                            }
                        },
                        "range": [23, 24],
                        "name": "b"
                    },
                    "init": {
                        "type": "ObjectExpression",
                        "loc": {
                            "start": {
                                "line": 2,
                                "column": 12
                            },
                            "end": {
                                "line": 4,
                                "column": 5
                            }
                        },
                        "range": [27, 53],
                        "properties": [],
                        "trailingComments": [{
                            "type": "Line",
                            "value": " comment",
                            "range": [37, 47],
                            "loc": {
                                "start": {
                                    "line": 3,
                                    "column": 8
                                },
                                "end": {
                                    "line": 3,
                                    "column": 18
                                }
                            }
                        }]
                    }
                }],
                "kind": "var"
            }, {
                "type": "ReturnStatement",
                "loc": {
                    "start": {
                        "line": 5,
                        "column": 4
                    },
                    "end": {
                        "line": 5,
                        "column": 13
                    }
                },
                "range": [59, 68],
                "argument": {
                    "type": "Identifier",
                    "loc": {
                        "start": {
                            "line": 5,
                            "column": 11
                        },
                        "end": {
                            "line": 5,
                            "column": 12
                        }
                    },
                    "range": [66, 67],
                    "name": "b"
                }
            }]
        },
        "expression": false,
        "generator": false
    }],
    "sourceType": "script",
    "comments": [{
        "type": "Line",
        "value": " comment",
        "range": [37, 47],
        "loc": {
            "start": {
                "line": 3,
                "column": 8
            },
            "end": {
                "line": 3,
                "column": 18
            }
        }
    }],
    "tokens": [{
        "type": "Keyword",
        "value": "function",
        "loc": {
            "start": {
                "line": 1,
                "column": 0
            },
            "end": {
                "line": 1,
                "column": 8
            }
        },
        "range": [0, 8]
    }, {
        "type": "Identifier",
        "value": "a",
        "loc": {
            "start": {
                "line": 1,
                "column": 9
            },
            "end": {
                "line": 1,
                "column": 10
            }
        },
        "range": [9, 10]
    }, {
        "type": "Punctuator",
        "value": "(",
        "loc": {
            "start": {
                "line": 1,
                "column": 10
            },
            "end": {
                "line": 1,
                "column": 11
            }
        },
        "range": [10, 11]
    }, {
        "type": "Punctuator",
        "value": ")",
        "loc": {
            "start": {
                "line": 1,
                "column": 11
            },
            "end": {
                "line": 1,
                "column": 12
            }
        },
        "range": [11, 12]
    }, {
        "type": "Punctuator",
        "value": "{",
        "loc": {
            "start": {
                "line": 1,
                "column": 13
            },
            "end": {
                "line": 1,
                "column": 14
            }
        },
        "range": [13, 14]
    }, {
        "type": "Keyword",
        "value": "var",
        "loc": {
            "start": {
                "line": 2,
                "column": 4
            },
            "end": {
                "line": 2,
                "column": 7
            }
        },
        "range": [19, 22]
    }, {
        "type": "Identifier",
        "value": "b",
        "loc": {
            "start": {
                "line": 2,
                "column": 8
            },
            "end": {
                "line": 2,
                "column": 9
            }
        },
        "range": [23, 24]
    }, {
        "type": "Punctuator",
        "value": "=",
        "loc": {
            "start": {
                "line": 2,
                "column": 10
            },
            "end": {
                "line": 2,
                "column": 11
            }
        },
        "range": [25, 26]
    }, {
        "type": "Punctuator",
        "value": "{",
        "loc": {
            "start": {
                "line": 2,
                "column": 12
            },
            "end": {
                "line": 2,
                "column": 13
            }
        },
        "range": [27, 28]
    }, {
        "type": "Punctuator",
        "value": "}",
        "loc": {
            "start": {
                "line": 4,
                "column": 4
            },
            "end": {
                "line": 4,
                "column": 5
            }
        },
        "range": [52, 53]
    }, {
        "type": "Punctuator",
        "value": ";",
        "loc": {
            "start": {
                "line": 4,
                "column": 5
            },
            "end": {
                "line": 4,
                "column": 6
            }
        },
        "range": [53, 54]
    }, {
        "type": "Keyword",
        "value": "return",
        "loc": {
            "start": {
                "line": 5,
                "column": 4
            },
            "end": {
                "line": 5,
                "column": 10
            }
        },
        "range": [59, 65]
    }, {
        "type": "Identifier",
        "value": "b",
        "loc": {
            "start": {
                "line": 5,
                "column": 11
            },
            "end": {
                "line": 5,
                "column": 12
            }
        },
        "range": [66, 67]
    }, {
        "type": "Punctuator",
        "value": ";",
        "loc": {
            "start": {
                "line": 5,
                "column": 12
            },
            "end": {
                "line": 5,
                "column": 13
            }
        },
        "range": [67, 68]
    }, {
        "type": "Punctuator",
        "value": "}",
        "loc": {
            "start": {
                "line": 6,
                "column": 0
            },
            "end": {
                "line": 6,
                "column": 1
            }
        },
        "range": [69, 70]
    }]
};
