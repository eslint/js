module.exports = {
	"type": "Program",
	"loc": {
		"start": {
			"line": 1,
			"column": 0
		},
		"end": {
			"line": 1,
			"column": 15
		}
	},
	"range": [
		0,
		15
	],
	"body": [
		{
			"type": "ExpressionStatement",
			"loc": {
				"start": {
					"line": 1,
					"column": 0
				},
				"end": {
					"line": 1,
					"column": 15
				}
			},
			"range": [
				0,
				15
			],
			"expression": {
				"type": "ArrowFunctionExpression",
				defaults: [],
				rest: null,
				"loc": {
					"start": {
						"line": 1,
						"column": 0
					},
					"end": {
						"line": 1,
						"column": 15
					}
				},
				"range": [
					0,
					15
				],
				"id": null,
				"generator": false,
				"expression": true,
				"params": [
					{
						"type": "ObjectPattern",
						"loc": {
							"start": {
								"line": 1,
								"column": 1
							},
							"end": {
								"line": 1,
								"column": 9
							}
						},
						"range": [
							1,
							9
						],
						"properties": [
							{
								"type": "Property",
								"loc": {
									"start": {
										"line": 1,
										"column": 2
									},
									"end": {
										"line": 1,
										"column": 8
									}
								},
								"range": [
									2,
									8
								],
								"method": false,
								"shorthand": true,
								"computed": false,
								"key": {
									"type": "Identifier",
									"loc": {
										"start": {
											"line": 1,
											"column": 2
										},
										"end": {
											"line": 1,
											"column": 3
										}
									},
									"range": [
										2,
										3
									],
									"name": "x"
								},
								"kind": "init",
								"value": {
									"type": "AssignmentPattern",
									"loc": {
										"start": {
											"line": 1,
											"column": 2
										},
										"end": {
											"line": 1,
											"column": 8
										}
									},
									"range": [
										2,
										8
									],
									"operator": "=",
									"left": {
										"type": "Identifier",
										"loc": {
											"start": {
												"line": 1,
												"column": 2
											},
											"end": {
												"line": 1,
												"column": 3
											}
										},
										"range": [
											2,
											3
										],
										"name": "x"
									},
									"right": {
										"type": "Literal",
										"loc": {
											"start": {
												"line": 1,
												"column": 6
											},
											"end": {
												"line": 1,
												"column": 8
											}
										},
										"range": [
											6,
											8
										],
										"value": 10,
										"raw": "10"
									}
								}
							}
						]
					}
				],
				"body": {
					"type": "Identifier",
					"loc": {
						"start": {
							"line": 1,
							"column": 14
						},
						"end": {
							"line": 1,
							"column": 15
						}
					},
					"range": [
						14,
						15
					],
					"name": "x"
				}
			}
		}
	]
};