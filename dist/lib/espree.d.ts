declare function _default(): (Parser: import('acorn-jsx').AcornJsxParser) => typeof EspreeParser;
export default _default;
export class EspreeParser extends acorn.Parser {
    /**
     * Adapted parser for Espree.
     * @param {import('../espree').ParserOptions | null} opts Espree options
     * @param {string | object} code The source code
     */
    constructor(opts: import('../espree').ParserOptions | null, code: string | object);
    /**
     * Returns Espree tokens.
     * @returns {import('../espree').EspreeTokens | null} Espree tokens
     */
    tokenize(): import('../espree').EspreeTokens | null;
    /**
     * Parses.
     * @returns {{sourceType?: "script" | "module" | "commonjs"; comments?: EsprimaComment[]; tokens?: import('../espree').EspreeTokens; body: import('acorn').Node[]} & import('acorn').Node} The program Node
     */
    parse(): {
        sourceType?: "script" | "module" | "commonjs";
        comments?: EsprimaComment[];
        tokens?: import('../espree').EspreeTokens;
        body: import('acorn').Node[];
    } & import('acorn').Node;
    /**
     * Overwrites the default raise method to throw Esprima-style errors.
     * @param {number} pos The position of the error.
     * @param {string} message The error message.
     * @throws {EnhancedSyntaxError} A syntax error.
     * @returns {void}
     */
    raiseRecoverable(pos: number, message: string): void;
    /**
     * Esprima-FB represents JSX strings as tokens called "JSXText", but Acorn-JSX
     * uses regular tt.string without any distinction between this and regular JS
     * strings. As such, we intercept an attempt to read a JSX string and set a flag
     * on extra so that when tokens are converted, the next token will be switched
     * to JSXText via onToken.
     * @param {number} quote A character code
     * @returns {void}
     */
    jsx_readString(quote: number): void;
}
export type EnhancedSyntaxError = {
    index?: number;
    lineNumber?: number;
    column?: number;
} & SyntaxError;
export type EnhancedTokTypes = {
    jsxAttrValueToken?: import('acorn').TokenType;
} & typeof import('acorn-jsx').tokTypes;
export type EsprimaComment = {
    type: string;
    value: string;
    range?: [number, number];
    start?: number;
    end?: number;
    loc?: {
        start: import('acorn').Position | undefined;
        end: import('acorn').Position | undefined;
    };
};
import * as acorn from "acorn";
//# sourceMappingURL=espree.d.ts.map