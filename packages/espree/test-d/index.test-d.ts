import { expectType, expectAssignable } from 'tsd';

import * as espree from "../espree.js";
import * as acorn from "acorn";
import type { Options, EspreeTokens } from "../espree.js";
import type {VisitorKeys} from "../../eslint-visitor-keys/lib/index.js";

const ast = espree.parse("let foo = \"bar\"");
expectType<acorn.Node>(ast);

const ast_option = espree.parse("let foo = \"bar\"", { ecmaVersion: 6 });
expectType<acorn.Node>(ast_option);

const tokens = espree.tokenize("let foo = \"bar\"");
expectType<EspreeTokens>(tokens);

const tokens_option = espree.tokenize("let foo = \"bar\"", { ecmaVersion: 6 });
expectType<EspreeTokens>(tokens_option);

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

const full_options: Options = {
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
expectType<Options>(full_options);

const empty_options: Options = {};
expectType<Options>(empty_options);

const latest_options: Options = {
    ecmaVersion: 16,
};
expectType<Options>(latest_options);
