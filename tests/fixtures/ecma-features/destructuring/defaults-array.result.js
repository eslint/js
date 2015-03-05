module.exports = {
	"type": "Program",
	"loc": {"start": {"line": 1, "column": 0}, "end": {"line": 1, "column": 10}},
	"range": [0, 10],
	"body": [{
		"type": "ExpressionStatement",
		"loc": {"start": {"line": 1, "column": 0}, "end": {"line": 1, "column": 10}},
		"range": [0, 10],
		"expression": {
			"type": "AssignmentExpression",
			"loc": {"start": {"line": 1, "column": 0}, "end": {"line": 1, "column": 10}},
			"range": [0, 10],
			"operator": "=",
			"left": {
				"type": "ArrayPattern",
				"loc": {"start": {"line": 1, "column": 0}, "end": {"line": 1, "column": 6}},
				"range": [0, 6],
				"elements": [{
					"type": "AssignmentPattern",
					"loc": {"start": {"line": 1, "column": 1}, "end": {"line": 1, "column": 5}},
					"range": [1, 5],
					"operator": "=",
					"left": {
						"type": "Identifier",
						"loc": {"start": {"line": 1, "column": 1}, "end": {"line": 1, "column": 2}},
						"range": [1, 2],
						"name": "x"
					},
					"right": {
						"type": "Literal",
						"loc": {"start": {"line": 1, "column": 3}, "end": {"line": 1, "column": 5}},
						"range": [3, 5],
						"value": 10,
						"raw": "10"
					}
				}]
			},
			"right": {
				"type": "Identifier",
				"loc": {"start": {"line": 1, "column": 9}, "end": {"line": 1, "column": 10}},
				"range": [9, 10],
				"name": "x"
			}
		}
	}]
};