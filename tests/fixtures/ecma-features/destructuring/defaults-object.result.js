module.exports = {
	"type": "Program",
	"loc": {"start": {"line": 1, "column": 0}, "end": {"line": 1, "column": 16}},
	"range": [0, 16],
	"body": [{
		"type": "VariableDeclaration",
		"loc": {"start": {"line": 1, "column": 0}, "end": {"line": 1, "column": 16}},
		"range": [0, 16],
		"declarations": [{
			"type": "VariableDeclarator",
			"loc": {"start": {"line": 1, "column": 4}, "end": {"line": 1, "column": 16}},
			"range": [4, 16],
			"id": {
				"type": "ObjectPattern",
				"loc": {"start": {"line": 1, "column": 4}, "end": {"line": 1, "column": 12}},
				"range": [4, 12],
				"properties": [{
					"type": "Property",
					"loc": {"start": {"line": 1, "column": 5}, "end": {"line": 1, "column": 11}},
					"range": [5, 11],
					"method": false,
					"shorthand": true,
					"computed": false,
					"key": {
						"type": "Identifier",
						"loc": {"start": {"line": 1, "column": 5}, "end": {"line": 1, "column": 6}},
						"range": [5, 6],
						"name": "x"
					},
					"kind": "init",
					"value": {
						"type": "AssignmentPattern",
						"loc": {"start": {"line": 1, "column": 5}, "end": {"line": 1, "column": 11}},
						"range": [5, 11],
						"operator": "=",
						"left": {
							"type": "Identifier",
							"loc": {"start": {"line": 1, "column": 5}, "end": {"line": 1, "column": 6}},
							"range": [5, 6],
							"name": "x"
						},
						"right": {
							"type": "Literal",
							"loc": {"start": {"line": 1, "column": 9}, "end": {"line": 1, "column": 11}},
							"range": [9, 11],
							"value": 10,
							"raw": "10"
						}
					}
				}]
			},
			"init": {
				"type": "Identifier",
				"loc": {"start": {"line": 1, "column": 15}, "end": {"line": 1, "column": 16}},
				"range": [15, 16],
				"name": "x"
			}
		}],
		"kind": "var"
	}]
};