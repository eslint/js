import * as espree from '../';
import * as estree from 'estree';

let program: estree.Program;
let tokens: espree.Token[];
let string: string;
let number: number;

string = espree.version;
program = espree.parse('code');
program = espree.parse('code', {});

program = espree.parse(string, {
    range: true,
    loc: true,
    comment: true,
    attachComment: true,
    tokens: true,
    ecmaVersion: 5,
    sourceType: "script",
    ecmaFeatures: {
        jsx: true,
        globalReturn: true,
        impliedStrict: true,
        experimentalObjectRestSpread: true
    }
});

tokens = espree.tokenize(string);

const token = tokens[0];
string = token.type;
string = token.value;
number = token.start;
number = token.end;
