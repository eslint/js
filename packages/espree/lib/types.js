/**
 * @import * as acorn from "acorn";
 * @import { AcornJsxParserCtor, AcornJsxParser, TokTypes } from "acorn-jsx";
 * @import { Options } from "../espree.js";
 */

/**
 * @typedef {number} Integer
 */

/**
 * @typedef {{
 *   value: any;
 *   start?: number;
 *   end?: number;
 *   loc?: acorn.SourceLocation;
 *   range?: [number, number];
 *   regex?: {flags: string, pattern: string};
 * }} BaseEsprimaToken
 */

/**
 * @typedef {{
 *   generator?: boolean
 * } & acorn.Node} EsprimaNode
 */

/**
 * @typedef {"Block"|"Hashbang"|"Line"} CommentType
 */

/**
 * @typedef {{
 *   tokenize: () => import('../espree.js').EspreeToken[],
 *   parse: () => acorn.Node
 * }} EspreeParser
 */

/* eslint-disable jsdoc/valid-types -- Bug in older versions */
/**
 * @typedef {{
 *   new (opts: Options | null | undefined, code: string | object): EspreeParser
 * } & Pick<typeof acorn.Parser, keyof typeof acorn.Parser>} EspreeParserCtor
 */
/**
 * @typedef {{
 *   new (opts: Options | null | undefined, code: string | object): EspreeParser
 * } & Pick<AcornJsxParserCtor, keyof AcornJsxParserCtor>} EspreeParserJsxCtor
 */

/**
 * @typedef {Pick<AcornJsxParserCtor, keyof AcornJsxParserCtor> & {
 *   acorn: {
 *     tokTypes: TokTypes,
 *     getLineInfo: (input: string, pos: number) => {
 *       line: number,
 *       column: number
 *     }
 *   }
 *   new (options: acorn.Options, input: string, startPos?: number): AcornJsxParser & {
 *     next: () => void,
 *     type: acorn.TokenType,
 *     curLine: number,
 *     start: number,
 *     end: number,
 *     finishNode (node: acorn.Node, type: string): acorn.Node,
 *     finishNodeAt (node: acorn.Node, type: string, pos: number, loc: acorn.Position): acorn.Node,
 *     parseTopLevel (node: acorn.Node): acorn.Node,
 *     nextToken (): void
 *   }
 * }} AcornJsxParserCtorEnhanced
 */

/* eslint-enable jsdoc/valid-types -- Bug in older versions */
