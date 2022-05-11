/**
 * Tokenizes the given code.
 * @param {string} code The code to tokenize.
 * @param {ParserOptions} options Options defining how to tokenize.
 * @returns {EspreeTokens} An array of tokens.
 * @throws {import('./lib/espree').EnhancedSyntaxError} If the input code is invalid.
 * @private
 */
export function tokenize(code: string, options: ParserOptions): EspreeTokens;
/**
 * Parses the given code.
 * @param {string} code The code to tokenize.
 * @param {ParserOptions} options Options defining how to tokenize.
 * @returns {import('acorn').Node} The "Program" AST node.
 * @throws {import('./lib/espree').EnhancedSyntaxError} If the input code is invalid.
 */
export function parse(code: string, options: ParserOptions): import('acorn').Node;
export const version: "main";
export const VisitorKeys: visitorKeys.VisitorKeys;
export const Syntax: {
    [x: string]: string;
};
export const latestEcmaVersion: number;
export const supportedEcmaVersions: number[];
export type ecmaVersion = 3 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 'latest';
export type EspreeToken = import('./lib/token-translator').EsprimaToken;
export type EspreeComment = import('./lib/espree').EsprimaComment;
export type EspreeTokens = {
    comments?: EspreeComment[];
} & EspreeToken[];
export type ParserOptions = {
    allowReserved?: boolean;
    ecmaVersion?: ecmaVersion;
    sourceType?: "script" | "module" | "commonjs";
    ecmaFeatures?: {
        jsx?: boolean;
        globalReturn?: boolean;
        impliedStrict?: boolean;
    };
    range?: boolean;
    loc?: boolean;
    tokens?: boolean;
    comment?: boolean;
};
import * as visitorKeys from "eslint-visitor-keys";
import jsx from "acorn-jsx";
//# sourceMappingURL=espree.d.ts.map