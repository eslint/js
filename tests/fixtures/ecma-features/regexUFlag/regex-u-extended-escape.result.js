// var x = /[\u{0000000000000061}-\u{7A}]/u;
module.exports = {
    type: 'Program',
    body: [{
        type: 'VariableDeclaration',
        declarations: [{
            type: 'VariableDeclarator',
            id: {
                type: 'Identifier',
                name: 'x',
                range: [4, 5],
                loc: {
                    start: { line: 1, column: 4 },
                    end: { line: 1, column: 5 }
                }
            },
            init: {
                type: 'Literal',
                value: null,
                raw: '/[\\u{0000000000000061}-\\u{7A}]/u',
                regex: {
                    pattern: '[\\u{0000000000000061}-\\u{7A}]',
                    flags: 'u'
                },
                range: [8, 40],
                loc: {
                    start: { line: 1, column: 8 },
                    end: { line: 1, column: 40 }
                }
            },
            range: [4, 40],
            loc: {
                start: { line: 1, column: 4 },
                end: { line: 1, column: 40 }
            }
        }],
        kind: 'var',
        range: [0, 41],
        loc: {
            start: { line: 1, column: 0 },
            end: { line: 1, column: 41 }
        }
    }],
    range: [0, 41],
    loc: {
        start: { line: 1, column: 0 },
        end: { line: 1, column: 41 }
    }
};
