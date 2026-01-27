import { expectType, expectAssignable } from "tsd";

import * as espree from "../dist/espree.cjs";
import * as acorn from "acorn";
import type { VisitorKeys } from "eslint-visitor-keys";

const ast = espree.parse('let foo = "bar"');
expectType<acorn.Program>(ast);

const ast_option = espree.parse('let foo = "bar"', { ecmaVersion: 6 });
expectType<acorn.Program>(ast_option);

const tokens = espree.tokenize('let foo = "bar"');
expectType<espree.EspreeTokens>(tokens);

const tokens_option = espree.tokenize('let foo = "bar"', { ecmaVersion: 6 });
expectType<espree.EspreeTokens>(tokens_option);

const name = espree.name;
expectType<"espree">(name);

const version = espree.version;
expectType<string>(version);

const visitor_keys = espree.VisitorKeys;
expectType<VisitorKeys>(visitor_keys);

const latest_ecma = espree.latestEcmaVersion;
expectAssignable<number>(latest_ecma);

const supported_ecma = espree.supportedEcmaVersions;
expectAssignable<number[]>(supported_ecma);

const Syntax = espree.Syntax;
expectType<Record<string, string>>(Syntax);

const full_options: espree.Options = {
	range: false,
	loc: false,
	comment: false,
	tokens: false,
	ecmaVersion: 3,
	allowReserved: true,
	sourceType: "script",
	ecmaFeatures: {
		jsx: false,
		globalReturn: false,
		impliedStrict: false,
	},
};
expectType<espree.Options>(full_options);

const empty_options: espree.Options = {};
expectType<espree.Options>(empty_options);

const latest_options: espree.Options = {
	ecmaVersion: 16,
};
expectType<espree.Options>(latest_options);
