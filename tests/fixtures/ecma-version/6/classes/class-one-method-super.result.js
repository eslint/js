export default {
  "type": "Program",
  "start": 0,
  "end": 64,
  "loc": {
    "start": {
      "line": 1,
      "column": 0
    },
    "end": {
      "line": 5,
      "column": 2
    }
  },
  "range": [
    0,
    64
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 63,
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 5,
          "column": 1
        }
      },
      "range": [
        0,
        63
      ],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "loc": {
          "start": {
            "line": 1,
            "column": 6
          },
          "end": {
            "line": 1,
            "column": 7
          }
        },
        "range": [
          6,
          7
        ],
        "name": "A"
      },
      "superClass": {
        "type": "Identifier",
        "start": 16,
        "end": 17,
        "loc": {
          "start": {
            "line": 1,
            "column": 16
          },
          "end": {
            "line": 1,
            "column": 17
          }
        },
        "range": [
          16,
          17
        ],
        "name": "B"
      },
      "body": {
        "type": "ClassBody",
        "start": 18,
        "end": 63,
        "loc": {
          "start": {
            "line": 1,
            "column": 18
          },
          "end": {
            "line": 5,
            "column": 1
          }
        },
        "range": [
          18,
          63
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "start": 24,
            "end": 61,
            "loc": {
              "start": {
                "line": 2,
                "column": 4
              },
              "end": {
                "line": 4,
                "column": 5
              }
            },
            "range": [
              24,
              61
            ],
            "kind": "constructor",
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 35,
              "loc": {
                "start": {
                  "line": 2,
                  "column": 4
                },
                "end": {
                  "line": 2,
                  "column": 15
                }
              },
              "range": [
                24,
                35
              ],
              "name": "constructor"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 35,
              "end": 61,
              "loc": {
                "start": {
                  "line": 2,
                  "column": 15
                },
                "end": {
                  "line": 4,
                  "column": 5
                }
              },
              "range": [
                35,
                61
              ],
              "id": null,
              "expression": false,
              "generator": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 37,
                "end": 61,
                "loc": {
                  "start": {
                    "line": 2,
                    "column": 17
                  },
                  "end": {
                    "line": 4,
                    "column": 5
                  }
                },
                "range": [
                  37,
                  61
                ],
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 47,
                    "end": 55,
                    "loc": {
                      "start": {
                        "line": 3,
                        "column": 8
                      },
                      "end": {
                        "line": 3,
                        "column": 16
                      }
                    },
                    "range": [
                      47,
                      55
                    ],
                    "expression": {
                      "type": "CallExpression",
                      "start": 47,
                      "end": 54,
                      "loc": {
                        "start": {
                          "line": 3,
                          "column": 8
                        },
                        "end": {
                          "line": 3,
                          "column": 15
                        }
                      },
                      "range": [
                        47,
                        54
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 47,
                        "end": 52,
                        "loc": {
                          "start": {
                            "line": 3,
                            "column": 8
                          },
                          "end": {
                            "line": 3,
                            "column": 13
                          }
                        },
                        "range": [
                          47,
                          52
                        ]
                      },
                      "arguments": []
                    }
                  }
                ]
              }
            }
          }
        ]
      }
    },
    {
      "type": "EmptyStatement",
      "start": 63,
      "end": 64,
      "loc": {
        "start": {
          "line": 5,
          "column": 1
        },
        "end": {
          "line": 5,
          "column": 2
        }
      },
      "range": [
        63,
        64
      ]
    }
  ],
  "sourceType": "script",
  "tokens": [
    {
      "type": "Keyword",
      "value": "class",
      "start": 0,
      "end": 5,
      "loc": {
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 1,
          "column": 5
        }
      },
      "range": [
        0,
        5
      ]
    },
    {
      "type": "Identifier",
      "value": "A",
      "start": 6,
      "end": 7,
      "loc": {
        "start": {
          "line": 1,
          "column": 6
        },
        "end": {
          "line": 1,
          "column": 7
        }
      },
      "range": [
        6,
        7
      ]
    },
    {
      "type": "Keyword",
      "value": "extends",
      "start": 8,
      "end": 15,
      "loc": {
        "start": {
          "line": 1,
          "column": 8
        },
        "end": {
          "line": 1,
          "column": 15
        }
      },
      "range": [
        8,
        15
      ]
    },
    {
      "type": "Identifier",
      "value": "B",
      "start": 16,
      "end": 17,
      "loc": {
        "start": {
          "line": 1,
          "column": 16
        },
        "end": {
          "line": 1,
          "column": 17
        }
      },
      "range": [
        16,
        17
      ]
    },
    {
      "type": "Punctuator",
      "value": "{",
      "start": 18,
      "end": 19,
      "loc": {
        "start": {
          "line": 1,
          "column": 18
        },
        "end": {
          "line": 1,
          "column": 19
        }
      },
      "range": [
        18,
        19
      ]
    },
    {
      "type": "Identifier",
      "value": "constructor",
      "start": 24,
      "end": 35,
      "loc": {
        "start": {
          "line": 2,
          "column": 4
        },
        "end": {
          "line": 2,
          "column": 15
        }
      },
      "range": [
        24,
        35
      ]
    },
    {
      "type": "Punctuator",
      "value": "(",
      "start": 35,
      "end": 36,
      "loc": {
        "start": {
          "line": 2,
          "column": 15
        },
        "end": {
          "line": 2,
          "column": 16
        }
      },
      "range": [
        35,
        36
      ]
    },
    {
      "type": "Punctuator",
      "value": ")",
      "start": 36,
      "end": 37,
      "loc": {
        "start": {
          "line": 2,
          "column": 16
        },
        "end": {
          "line": 2,
          "column": 17
        }
      },
      "range": [
        36,
        37
      ]
    },
    {
      "type": "Punctuator",
      "value": "{",
      "start": 37,
      "end": 38,
      "loc": {
        "start": {
          "line": 2,
          "column": 17
        },
        "end": {
          "line": 2,
          "column": 18
        }
      },
      "range": [
        37,
        38
      ]
    },
    {
      "type": "Keyword",
      "value": "super",
      "start": 47,
      "end": 52,
      "loc": {
        "start": {
          "line": 3,
          "column": 8
        },
        "end": {
          "line": 3,
          "column": 13
        }
      },
      "range": [
        47,
        52
      ]
    },
    {
      "type": "Punctuator",
      "value": "(",
      "start": 52,
      "end": 53,
      "loc": {
        "start": {
          "line": 3,
          "column": 13
        },
        "end": {
          "line": 3,
          "column": 14
        }
      },
      "range": [
        52,
        53
      ]
    },
    {
      "type": "Punctuator",
      "value": ")",
      "start": 53,
      "end": 54,
      "loc": {
        "start": {
          "line": 3,
          "column": 14
        },
        "end": {
          "line": 3,
          "column": 15
        }
      },
      "range": [
        53,
        54
      ]
    },
    {
      "type": "Punctuator",
      "value": ";",
      "start": 54,
      "end": 55,
      "loc": {
        "start": {
          "line": 3,
          "column": 15
        },
        "end": {
          "line": 3,
          "column": 16
        }
      },
      "range": [
        54,
        55
      ]
    },
    {
      "type": "Punctuator",
      "value": "}",
      "start": 60,
      "end": 61,
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
      "range": [
        60,
        61
      ]
    },
    {
      "type": "Punctuator",
      "value": "}",
      "start": 62,
      "end": 63,
      "loc": {
        "start": {
          "line": 5,
          "column": 0
        },
        "end": {
          "line": 5,
          "column": 1
        }
      },
      "range": [
        62,
        63
      ]
    },
    {
      "type": "Punctuator",
      "value": ";",
      "start": 63,
      "end": 64,
      "loc": {
        "start": {
          "line": 5,
          "column": 1
        },
        "end": {
          "line": 5,
          "column": 2
        }
      },
      "range": [
        63,
        64
      ]
    }
  ]
};