/**
 * Tokenizes the given code.
 * @param {string} code The code to tokenize.
 * @param {ParserOptions} options Options defining how to tokenize.
 * @returns {import('acorn').Token[] | null} An array of tokens.
 * @throws {import('./lib/espree').EnhancedSyntaxError} If the input code is invalid.
 * @private
 */
export function tokenize(code: string, options: ParserOptions): import('acorn').Token[] | null;
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
export type ParserOptions = {
    allowReserved?: boolean;
    ecmaVersion?: import('acorn').ecmaVersion;
    sourceType?: "script" | "module" | "commonjs";
    ecmaFeatures?: {
        jsx?: boolean;
        globalReturn?: boolean;
        impliedStrict?: boolean;
    };
    range?: boolean;
    loc?: boolean;
    tokens?: boolean | null;
    comment?: boolean;
};
import * as visitorKeys from "eslint-visitor-keys";
import jsx from "acorn-jsx";
//# sourceMappingURL=espree.d.ts.map