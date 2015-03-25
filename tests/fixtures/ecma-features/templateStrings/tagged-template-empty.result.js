module.exports = {
    "type": "Program",
    "body": [
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "TaggedTemplateExpression",
                "tag": {
                    "type": "Identifier",
                    "name": "foo",
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
                "quasi": {
                    "type": "TemplateLiteral",
                    "quasis": [
                        {
                            "type": "TemplateElement",
                            "value": {
                                "raw": "foo",
                                "cooked": "foo"
                            },
                            "tail": true,
                            "range": [
                                3,
                                8
                            ],
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 3
                                },
                                "end": {
                                    "line": 1,
                                    "column": 8
                                }
                            }
                        }
                    ],
                    "expressions": [],
                    "range": [
                        3,
                        8
                    ],
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 3
                        },
                        "end": {
                            "line": 1,
                            "column": 8
                        }
                    }
                },
                "range": [
                    0,
                    8
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 0
                    },
                    "end": {
                        "line": 1,
                        "column": 8
                    }
                }
            },
            "range": [
                0,
                9
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 2,
                    "column": 0
                }
            }
        }
    ],
    "sourceType": "script",
    "range": [
        0,
        9
    ],
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 2,
            "column": 0
        }
    }
};