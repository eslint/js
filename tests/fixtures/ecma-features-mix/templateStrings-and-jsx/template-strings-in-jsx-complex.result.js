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
                        "name": "React",
                        "range": [
                            4,
                            9
                        ],
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 4
                            },
                            "end": {
                                "line": 1,
                                "column": 9
                            }
                        }
                    },
                    "init": {
                        "type": "CallExpression",
                        "callee": {
                            "type": "Identifier",
                            "name": "require",
                            "range": [
                                12,
                                19
                            ],
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 12
                                },
                                "end": {
                                    "line": 1,
                                    "column": 19
                                }
                            }
                        },
                        "arguments": [
                            {
                                "type": "Literal",
                                "value": "react/addons",
                                "raw": "'react/addons'",
                                "range": [
                                    20,
                                    34
                                ],
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 20
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 34
                                    }
                                }
                            }
                        ],
                        "range": [
                            12,
                            35
                        ],
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 12
                            },
                            "end": {
                                "line": 1,
                                "column": 35
                            }
                        }
                    },
                    "range": [
                        4,
                        35
                    ],
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 4
                        },
                        "end": {
                            "line": 1,
                            "column": 35
                        }
                    }
                }
            ],
            "kind": "var",
            "range": [
                0,
                36
            ],
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 36
                }
            }
        },
        {
            "type": "VariableDeclaration",
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "MyComponent",
                        "range": [
                            42,
                            53
                        ],
                        "loc": {
                            "start": {
                                "line": 3,
                                "column": 4
                            },
                            "end": {
                                "line": 3,
                                "column": 15
                            }
                        }
                    },
                    "init": {
                        "type": "CallExpression",
                        "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                                "type": "Identifier",
                                "name": "React",
                                "range": [
                                    56,
                                    61
                                ],
                                "loc": {
                                    "start": {
                                        "line": 3,
                                        "column": 18
                                    },
                                    "end": {
                                        "line": 3,
                                        "column": 23
                                    }
                                }
                            },
                            "property": {
                                "type": "Identifier",
                                "name": "createClass",
                                "range": [
                                    62,
                                    73
                                ],
                                "loc": {
                                    "start": {
                                        "line": 3,
                                        "column": 24
                                    },
                                    "end": {
                                        "line": 3,
                                        "column": 35
                                    }
                                }
                            },
                            "range": [
                                56,
                                73
                            ],
                            "loc": {
                                "start": {
                                    "line": 3,
                                    "column": 18
                                },
                                "end": {
                                    "line": 3,
                                    "column": 35
                                }
                            }
                        },
                        "arguments": [
                            {
                                "type": "ObjectExpression",
                                "properties": [
                                    {
                                        "type": "Property",
                                        "key": {
                                            "type": "Identifier",
                                            "name": "render",
                                            "range": [
                                                78,
                                                84
                                            ],
                                            "loc": {
                                                "start": {
                                                    "line": 4,
                                                    "column": 2
                                                },
                                                "end": {
                                                    "line": 4,
                                                    "column": 8
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
                                                            "type": "JSXElement",
                                                            "openingElement": {
                                                                "type": "JSXOpeningElement",
                                                                "name": {
                                                                    "type": "JSXIdentifier",
                                                                    "name": "div",
                                                                    "range": [
                                                                        119,
                                                                        122
                                                                    ],
                                                                    "loc": {
                                                                        "start": {
                                                                            "line": 6,
                                                                            "column": 7
                                                                        },
                                                                        "end": {
                                                                            "line": 6,
                                                                            "column": 10
                                                                        }
                                                                    }
                                                                },
                                                                "selfClosing": false,
                                                                "attributes": [],
                                                                "range": [
                                                                    118,
                                                                    123
                                                                ],
                                                                "loc": {
                                                                    "start": {
                                                                        "line": 6,
                                                                        "column": 6
                                                                    },
                                                                    "end": {
                                                                        "line": 6,
                                                                        "column": 11
                                                                    }
                                                                }
                                                            },
                                                            "closingElement": {
                                                                "type": "JSXClosingElement",
                                                                "name": {
                                                                    "type": "JSXIdentifier",
                                                                    "name": "div",
                                                                    "range": [
                                                                        242,
                                                                        245
                                                                    ],
                                                                    "loc": {
                                                                        "start": {
                                                                            "line": 9,
                                                                            "column": 8
                                                                        },
                                                                        "end": {
                                                                            "line": 9,
                                                                            "column": 11
                                                                        }
                                                                    }
                                                                },
                                                                "range": [
                                                                    240,
                                                                    246
                                                                ],
                                                                "loc": {
                                                                    "start": {
                                                                        "line": 9,
                                                                        "column": 6
                                                                    },
                                                                    "end": {
                                                                        "line": 9,
                                                                        "column": 12
                                                                    }
                                                                }
                                                            },
                                                            "children": [
                                                                {
                                                                    "type": "Literal",
                                                                    "value": "\n        ",
                                                                    "raw": "\n        ",
                                                                    "range": [
                                                                        123,
                                                                        132
                                                                    ],
                                                                    "loc": {
                                                                        "start": {
                                                                            "line": 6,
                                                                            "column": 11
                                                                        },
                                                                        "end": {
                                                                            "line": 7,
                                                                            "column": 8
                                                                        }
                                                                    }
                                                                },
                                                                {
                                                                    "type": "JSXElement",
                                                                    "openingElement": {
                                                                        "type": "JSXOpeningElement",
                                                                        "name": {
                                                                            "type": "JSXIdentifier",
                                                                            "name": "div",
                                                                            "range": [
                                                                                133,
                                                                                136
                                                                            ],
                                                                            "loc": {
                                                                                "start": {
                                                                                    "line": 7,
                                                                                    "column": 9
                                                                                },
                                                                                "end": {
                                                                                    "line": 7,
                                                                                    "column": 12
                                                                                }
                                                                            }
                                                                        },
                                                                        "selfClosing": true,
                                                                        "attributes": [
                                                                            {
                                                                                "type": "JSXAttribute",
                                                                                "name": {
                                                                                    "type": "JSXIdentifier",
                                                                                    "name": "myProp",
                                                                                    "range": [
                                                                                        137,
                                                                                        143
                                                                                    ],
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 7,
                                                                                            "column": 13
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 7,
                                                                                            "column": 19
                                                                                        }
                                                                                    }
                                                                                },
                                                                                "value": {
                                                                                    "type": "JSXExpressionContainer",
                                                                                    "expression": {
                                                                                        "type": "TemplateLiteral",
                                                                                        "quasis": [
                                                                                            {
                                                                                                "type": "TemplateElement",
                                                                                                "value": {
                                                                                                    "raw": "",
                                                                                                    "cooked": ""
                                                                                                },
                                                                                                "tail": false,
                                                                                                "range": [
                                                                                                    145,
                                                                                                    148
                                                                                                ],
                                                                                                "loc": {
                                                                                                    "start": {
                                                                                                        "line": 7,
                                                                                                        "column": 21
                                                                                                    },
                                                                                                    "end": {
                                                                                                        "line": 7,
                                                                                                        "column": 24
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
                                                                                                    168,
                                                                                                    170
                                                                                                ],
                                                                                                "loc": {
                                                                                                    "start": {
                                                                                                        "line": 7,
                                                                                                        "column": 44
                                                                                                    },
                                                                                                    "end": {
                                                                                                        "line": 7,
                                                                                                        "column": 46
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        ],
                                                                                        "expressions": [
                                                                                            {
                                                                                                "type": "MemberExpression",
                                                                                                "computed": false,
                                                                                                "object": {
                                                                                                    "type": "MemberExpression",
                                                                                                    "computed": false,
                                                                                                    "object": {
                                                                                                        "type": "ThisExpression",
                                                                                                        "range": [
                                                                                                            148,
                                                                                                            152
                                                                                                        ],
                                                                                                        "loc": {
                                                                                                            "start": {
                                                                                                                "line": 7,
                                                                                                                "column": 24
                                                                                                            },
                                                                                                            "end": {
                                                                                                                "line": 7,
                                                                                                                "column": 28
                                                                                                            }
                                                                                                        }
                                                                                                    },
                                                                                                    "property": {
                                                                                                        "type": "Identifier",
                                                                                                        "name": "props",
                                                                                                        "range": [
                                                                                                            153,
                                                                                                            158
                                                                                                        ],
                                                                                                        "loc": {
                                                                                                            "start": {
                                                                                                                "line": 7,
                                                                                                                "column": 29
                                                                                                            },
                                                                                                            "end": {
                                                                                                                "line": 7,
                                                                                                                "column": 34
                                                                                                            }
                                                                                                        }
                                                                                                    },
                                                                                                    "range": [
                                                                                                        148,
                                                                                                        158
                                                                                                    ],
                                                                                                    "loc": {
                                                                                                        "start": {
                                                                                                            "line": 7,
                                                                                                            "column": 24
                                                                                                        },
                                                                                                        "end": {
                                                                                                            "line": 7,
                                                                                                            "column": 34
                                                                                                        }
                                                                                                    }
                                                                                                },
                                                                                                "property": {
                                                                                                    "type": "Identifier",
                                                                                                    "name": "something",
                                                                                                    "range": [
                                                                                                        159,
                                                                                                        168
                                                                                                    ],
                                                                                                    "loc": {
                                                                                                        "start": {
                                                                                                            "line": 7,
                                                                                                            "column": 35
                                                                                                        },
                                                                                                        "end": {
                                                                                                            "line": 7,
                                                                                                            "column": 44
                                                                                                        }
                                                                                                    }
                                                                                                },
                                                                                                "range": [
                                                                                                    148,
                                                                                                    168
                                                                                                ],
                                                                                                "loc": {
                                                                                                    "start": {
                                                                                                        "line": 7,
                                                                                                        "column": 24
                                                                                                    },
                                                                                                    "end": {
                                                                                                        "line": 7,
                                                                                                        "column": 44
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        ],
                                                                                        "range": [
                                                                                            145,
                                                                                            170
                                                                                        ],
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 7,
                                                                                                "column": 21
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 7,
                                                                                                "column": 46
                                                                                            }
                                                                                        }
                                                                                    },
                                                                                    "range": [
                                                                                        144,
                                                                                        171
                                                                                    ],
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 7,
                                                                                            "column": 20
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 7,
                                                                                            "column": 47
                                                                                        }
                                                                                    }
                                                                                },
                                                                                "range": [
                                                                                    137,
                                                                                    171
                                                                                ],
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 7,
                                                                                        "column": 13
                                                                                    },
                                                                                    "end": {
                                                                                        "line": 7,
                                                                                        "column": 47
                                                                                    }
                                                                                }
                                                                            }
                                                                        ],
                                                                        "range": [
                                                                            132,
                                                                            173
                                                                        ],
                                                                        "loc": {
                                                                            "start": {
                                                                                "line": 7,
                                                                                "column": 8
                                                                            },
                                                                            "end": {
                                                                                "line": 7,
                                                                                "column": 49
                                                                            }
                                                                        }
                                                                    },
                                                                    "closingElement": null,
                                                                    "children": [],
                                                                    "range": [
                                                                        132,
                                                                        173
                                                                    ],
                                                                    "loc": {
                                                                        "start": {
                                                                            "line": 7,
                                                                            "column": 8
                                                                        },
                                                                        "end": {
                                                                            "line": 7,
                                                                            "column": 49
                                                                        }
                                                                    }
                                                                },
                                                                {
                                                                    "type": "Literal",
                                                                    "value": "\n        ",
                                                                    "raw": "\n        ",
                                                                    "range": [
                                                                        173,
                                                                        182
                                                                    ],
                                                                    "loc": {
                                                                        "start": {
                                                                            "line": 7,
                                                                            "column": 49
                                                                        },
                                                                        "end": {
                                                                            "line": 8,
                                                                            "column": 8
                                                                        }
                                                                    }
                                                                },
                                                                {
                                                                    "type": "JSXElement",
                                                                    "openingElement": {
                                                                        "type": "JSXOpeningElement",
                                                                        "name": {
                                                                            "type": "JSXIdentifier",
                                                                            "name": "div",
                                                                            "range": [
                                                                                183,
                                                                                186
                                                                            ],
                                                                            "loc": {
                                                                                "start": {
                                                                                    "line": 8,
                                                                                    "column": 9
                                                                                },
                                                                                "end": {
                                                                                    "line": 8,
                                                                                    "column": 12
                                                                                }
                                                                            }
                                                                        },
                                                                        "selfClosing": true,
                                                                        "attributes": [
                                                                            {
                                                                                "type": "JSXAttribute",
                                                                                "name": {
                                                                                    "type": "JSXIdentifier",
                                                                                    "name": "differentProp",
                                                                                    "range": [
                                                                                        187,
                                                                                        200
                                                                                    ],
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 8,
                                                                                            "column": 13
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 8,
                                                                                            "column": 26
                                                                                        }
                                                                                    }
                                                                                },
                                                                                "value": {
                                                                                    "type": "JSXExpressionContainer",
                                                                                    "expression": {
                                                                                        "type": "TemplateLiteral",
                                                                                        "quasis": [
                                                                                            {
                                                                                                "type": "TemplateElement",
                                                                                                "value": {
                                                                                                    "raw": "",
                                                                                                    "cooked": ""
                                                                                                },
                                                                                                "tail": false,
                                                                                                "range": [
                                                                                                    202,
                                                                                                    205
                                                                                                ],
                                                                                                "loc": {
                                                                                                    "start": {
                                                                                                        "line": 8,
                                                                                                        "column": 28
                                                                                                    },
                                                                                                    "end": {
                                                                                                        "line": 8,
                                                                                                        "column": 31
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
                                                                                                    228,
                                                                                                    230
                                                                                                ],
                                                                                                "loc": {
                                                                                                    "start": {
                                                                                                        "line": 8,
                                                                                                        "column": 54
                                                                                                    },
                                                                                                    "end": {
                                                                                                        "line": 8,
                                                                                                        "column": 56
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        ],
                                                                                        "expressions": [
                                                                                            {
                                                                                                "type": "MemberExpression",
                                                                                                "computed": false,
                                                                                                "object": {
                                                                                                    "type": "MemberExpression",
                                                                                                    "computed": false,
                                                                                                    "object": {
                                                                                                        "type": "ThisExpression",
                                                                                                        "range": [
                                                                                                            205,
                                                                                                            209
                                                                                                        ],
                                                                                                        "loc": {
                                                                                                            "start": {
                                                                                                                "line": 8,
                                                                                                                "column": 31
                                                                                                            },
                                                                                                            "end": {
                                                                                                                "line": 8,
                                                                                                                "column": 35
                                                                                                            }
                                                                                                        }
                                                                                                    },
                                                                                                    "property": {
                                                                                                        "type": "Identifier",
                                                                                                        "name": "props",
                                                                                                        "range": [
                                                                                                            210,
                                                                                                            215
                                                                                                        ],
                                                                                                        "loc": {
                                                                                                            "start": {
                                                                                                                "line": 8,
                                                                                                                "column": 36
                                                                                                            },
                                                                                                            "end": {
                                                                                                                "line": 8,
                                                                                                                "column": 41
                                                                                                            }
                                                                                                        }
                                                                                                    },
                                                                                                    "range": [
                                                                                                        205,
                                                                                                        215
                                                                                                    ],
                                                                                                    "loc": {
                                                                                                        "start": {
                                                                                                            "line": 8,
                                                                                                            "column": 31
                                                                                                        },
                                                                                                        "end": {
                                                                                                            "line": 8,
                                                                                                            "column": 41
                                                                                                        }
                                                                                                    }
                                                                                                },
                                                                                                "property": {
                                                                                                    "type": "Identifier",
                                                                                                    "name": "anotherThing",
                                                                                                    "range": [
                                                                                                        216,
                                                                                                        228
                                                                                                    ],
                                                                                                    "loc": {
                                                                                                        "start": {
                                                                                                            "line": 8,
                                                                                                            "column": 42
                                                                                                        },
                                                                                                        "end": {
                                                                                                            "line": 8,
                                                                                                            "column": 54
                                                                                                        }
                                                                                                    }
                                                                                                },
                                                                                                "range": [
                                                                                                    205,
                                                                                                    228
                                                                                                ],
                                                                                                "loc": {
                                                                                                    "start": {
                                                                                                        "line": 8,
                                                                                                        "column": 31
                                                                                                    },
                                                                                                    "end": {
                                                                                                        "line": 8,
                                                                                                        "column": 54
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        ],
                                                                                        "range": [
                                                                                            202,
                                                                                            230
                                                                                        ],
                                                                                        "loc": {
                                                                                            "start": {
                                                                                                "line": 8,
                                                                                                "column": 28
                                                                                            },
                                                                                            "end": {
                                                                                                "line": 8,
                                                                                                "column": 56
                                                                                            }
                                                                                        }
                                                                                    },
                                                                                    "range": [
                                                                                        201,
                                                                                        231
                                                                                    ],
                                                                                    "loc": {
                                                                                        "start": {
                                                                                            "line": 8,
                                                                                            "column": 27
                                                                                        },
                                                                                        "end": {
                                                                                            "line": 8,
                                                                                            "column": 57
                                                                                        }
                                                                                    }
                                                                                },
                                                                                "range": [
                                                                                    187,
                                                                                    231
                                                                                ],
                                                                                "loc": {
                                                                                    "start": {
                                                                                        "line": 8,
                                                                                        "column": 13
                                                                                    },
                                                                                    "end": {
                                                                                        "line": 8,
                                                                                        "column": 57
                                                                                    }
                                                                                }
                                                                            }
                                                                        ],
                                                                        "range": [
                                                                            182,
                                                                            233
                                                                        ],
                                                                        "loc": {
                                                                            "start": {
                                                                                "line": 8,
                                                                                "column": 8
                                                                            },
                                                                            "end": {
                                                                                "line": 8,
                                                                                "column": 59
                                                                            }
                                                                        }
                                                                    },
                                                                    "closingElement": null,
                                                                    "children": [],
                                                                    "range": [
                                                                        182,
                                                                        233
                                                                    ],
                                                                    "loc": {
                                                                        "start": {
                                                                            "line": 8,
                                                                            "column": 8
                                                                        },
                                                                        "end": {
                                                                            "line": 8,
                                                                            "column": 59
                                                                        }
                                                                    }
                                                                },
                                                                {
                                                                    "type": "Literal",
                                                                    "value": "\n      ",
                                                                    "raw": "\n      ",
                                                                    "range": [
                                                                        233,
                                                                        240
                                                                    ],
                                                                    "loc": {
                                                                        "start": {
                                                                            "line": 8,
                                                                            "column": 59
                                                                        },
                                                                        "end": {
                                                                            "line": 9,
                                                                            "column": 6
                                                                        }
                                                                    }
                                                                }
                                                            ],
                                                            "range": [
                                                                118,
                                                                246
                                                            ],
                                                            "loc": {
                                                                "start": {
                                                                    "line": 6,
                                                                    "column": 6
                                                                },
                                                                "end": {
                                                                    "line": 9,
                                                                    "column": 12
                                                                }
                                                            }
                                                        },
                                                        "range": [
                                                            103,
                                                            253
                                                        ],
                                                        "loc": {
                                                            "start": {
                                                                "line": 5,
                                                                "column": 4
                                                            },
                                                            "end": {
                                                                "line": 10,
                                                                "column": 6
                                                            }
                                                        }
                                                    }
                                                ],
                                                "range": [
                                                    97,
                                                    257
                                                ],
                                                "loc": {
                                                    "start": {
                                                        "line": 4,
                                                        "column": 21
                                                    },
                                                    "end": {
                                                        "line": 11,
                                                        "column": 3
                                                    }
                                                }
                                            },
                                            "generator": false,
                                            "expression": false,
                                            "range": [
                                                86,
                                                257
                                            ],
                                            "loc": {
                                                "start": {
                                                    "line": 4,
                                                    "column": 10
                                                },
                                                "end": {
                                                    "line": 11,
                                                    "column": 3
                                                }
                                            }
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "range": [
                                            78,
                                            257
                                        ],
                                        "loc": {
                                            "start": {
                                                "line": 4,
                                                "column": 2
                                            },
                                            "end": {
                                                "line": 11,
                                                "column": 3
                                            }
                                        }
                                    }
                                ],
                                "range": [
                                    74,
                                    259
                                ],
                                "loc": {
                                    "start": {
                                        "line": 3,
                                        "column": 36
                                    },
                                    "end": {
                                        "line": 12,
                                        "column": 1
                                    }
                                }
                            }
                        ],
                        "range": [
                            56,
                            260
                        ],
                        "loc": {
                            "start": {
                                "line": 3,
                                "column": 18
                            },
                            "end": {
                                "line": 12,
                                "column": 2
                            }
                        }
                    },
                    "range": [
                        42,
                        260
                    ],
                    "loc": {
                        "start": {
                            "line": 3,
                            "column": 4
                        },
                        "end": {
                            "line": 12,
                            "column": 2
                        }
                    }
                }
            ],
            "kind": "var",
            "range": [
                38,
                261
            ],
            "loc": {
                "start": {
                    "line": 3,
                    "column": 0
                },
                "end": {
                    "line": 12,
                    "column": 3
                }
            }
        },
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                        "type": "Identifier",
                        "name": "module",
                        "range": [
                            263,
                            269
                        ],
                        "loc": {
                            "start": {
                                "line": 14,
                                "column": 0
                            },
                            "end": {
                                "line": 14,
                                "column": 6
                            }
                        }
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "exports",
                        "range": [
                            270,
                            277
                        ],
                        "loc": {
                            "start": {
                                "line": 14,
                                "column": 7
                            },
                            "end": {
                                "line": 14,
                                "column": 14
                            }
                        }
                    },
                    "range": [
                        263,
                        277
                    ],
                    "loc": {
                        "start": {
                            "line": 14,
                            "column": 0
                        },
                        "end": {
                            "line": 14,
                            "column": 14
                        }
                    }
                },
                "right": {
                    "type": "Identifier",
                    "name": "MyComponent",
                    "range": [
                        280,
                        291
                    ],
                    "loc": {
                        "start": {
                            "line": 14,
                            "column": 17
                        },
                        "end": {
                            "line": 14,
                            "column": 28
                        }
                    }
                },
                "range": [
                    263,
                    291
                ],
                "loc": {
                    "start": {
                        "line": 14,
                        "column": 0
                    },
                    "end": {
                        "line": 14,
                        "column": 28
                    }
                }
            },
            "range": [
                263,
                292
            ],
            "loc": {
                "start": {
                    "line": 14,
                    "column": 0
                },
                "end": {
                    "line": 14,
                    "column": 29
                }
            }
        }
    ],
    "sourceType": "script",
    "range": [
        0,
        292
    ],
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 14,
            "column": 29
        }
    }
};