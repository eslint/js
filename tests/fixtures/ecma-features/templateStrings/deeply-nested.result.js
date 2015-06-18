module.exports = {
    "type": "Program",
    "body": [
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "TaggedTemplateExpression",
                "tag": {
                    "type": "Identifier",
                    "name": "raw",
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
                                "raw": "hello ",
                                "cooked": "hello "
                            },
                            "tail": false,
                            "range": [
                                4,
                                10
                            ],
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 4
                                },
                                "end": {
                                    "line": 1,
                                    "column": 10
                                }
                            }
                        },
                        {
                            "type": "TemplateElement",
                            "value": {
                                "raw": "",
                                "cooked": ""
                            },
                            "tail": true,
                            "range": [
                                43,
                                43
                            ],
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 43
                                },
                                "end": {
                                    "line": 1,
                                    "column": 43
                                }
                            }
                        }
                    ],
                    "expressions": [
                        {
                            "type": "TemplateLiteral",
                            "quasis": [
                                {
                                    "type": "TemplateElement",
                                    "value": {
                                        "raw": "nested ",
                                        "cooked": "nested "
                                    },
                                    "tail": false,
                                    "range": [
                                        13,
                                        20
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 13
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 20
                                        }
                                    }
                                },
                                {
                                    "type": "TemplateElement",
                                    "value": {
                                        "raw": " blah",
                                        "cooked": " blah"
                                    },
                                    "tail": true,
                                    "range": [
                                        36,
                                        41
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 36
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 41
                                        }
                                    }
                                }
                            ],
                            "expressions": [
                                {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                        "type": "TemplateLiteral",
                                        "quasis": [
                                            {
                                                "type": "TemplateElement",
                                                "value": {
                                                    "raw": "deeply",
                                                    "cooked": "deeply"
                                                },
                                                "tail": true,
                                                "range": [
                                                    23,
                                                    29
                                                ],
                                                "loc": {
                                                    "start": {
                                                        "line": 1,
                                                        "column": 23
                                                    },
                                                    "end": {
                                                        "line": 1,
                                                        "column": 29
                                                    }
                                                }
                                            }
                                        ],
                                        "expressions": [],
                                        "range": [
                                            22,
                                            30
                                        ],
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 22
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 30
                                            }
                                        }
                                    },
                                    "right": {
                                        "type": "ObjectExpression",
                                        "properties": [],
                                        "range": [
                                            33,
                                            35
                                        ],
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 33
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 35
                                            }
                                        }
                                    },
                                    "range": [
                                        22,
                                        35
                                    ],
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 22
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 35
                                        }
                                    }
                                }
                            ],
                            "range": [
                                12,
                                42
                            ],
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 12
                                },
                                "end": {
                                    "line": 1,
                                    "column": 42
                                }
                            }
                        }
                    ],
                    "range": [
                        3,
                        44
                    ],
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 3
                        },
                        "end": {
                            "line": 1,
                            "column": 44
                        }
                    }
                },
                "range": [
                    0,
                    44
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 0
                    },
                    "end": {
                        "line": 1,
                        "column": 44
                    }
                }
            },
            "range": [
                0,
                45
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 45
                }
            }
        }
    ],
    "sourceType": "script",
    "range": [
        0,
        45
    ],
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 1,
            "column": 45
        }
    }
};