'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var acorn = require('acorn');
var jsx = require('acorn-jsx');
var visitorKeys = require('eslint-visitor-keys');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var acorn__namespace = /*#__PURE__*/_interopNamespace(acorn);
var jsx__default = /*#__PURE__*/_interopDefaultLegacy(jsx);
var visitorKeys__namespace = /*#__PURE__*/_interopNamespace(visitorKeys);

/**
 * @fileoverview Translates tokens between Acorn format and Esprima format.
 * @author Nicholas C. Zakas
 */
/* eslint no-underscore-dangle: 0 */

// ----------------------------------------------------------------------------
// Local type imports
// ----------------------------------------------------------------------------
/**
 * @local
 * @typedef {import('acorn')} acorn
 * @typedef {import('./espree').EnhancedTokTypes} EnhancedTokTypes
 * @typedef {import('../espree').ecmaVersion} ecmaVersion
 */

// ----------------------------------------------------------------------------
// Local types
// ----------------------------------------------------------------------------
/**
 * Based on the `acorn.Token` class, but without a fixed `type` (since we need
 * it to be a string). Avoiding `type` lets us make one extending interface
 * more strict and another more lax.
 *
 * We could make `value` more strict to `string` even though the original is
 * `any`.
 *
 * `start` and `end` are required in `acorn.Token`
 *
 * `loc` and `range` are from `acorn.Token`
 *
 * Adds `regex`.
 */
/**
 * @local
 *
 * @typedef {{
 *   value: any;
 *   start?: number;
 *   end?: number;
 *   loc?: acorn.SourceLocation;
 *   range?: [number, number];
 *   regex?: {flags: string, pattern: string};
 * }} BaseEsprimaToken
 *
 * @typedef {{
 *   jsxAttrValueToken: boolean;
 *   ecmaVersion: ecmaVersion;
 * }} ExtraNoTokens
 *
 * @typedef {{
 *   tokens: EsprimaToken[]
 * } & ExtraNoTokens} Extra
 */

/**
 * @typedef {{
 *   type: string;
 * } & BaseEsprimaToken} EsprimaToken
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

// none!

//------------------------------------------------------------------------------
// Private
//------------------------------------------------------------------------------


// Esprima Token Types
const Token = {
    Boolean: "Boolean",
    EOF: "<end>",
    Identifier: "Identifier",
    PrivateIdentifier: "PrivateIdentifier",
    Keyword: "Keyword",
    Null: "Null",
    Numeric: "Numeric",
    Punctuator: "Punctuator",
    String: "String",
    RegularExpression: "RegularExpression",
    Template: "Template",
    JSXIdentifier: "JSXIdentifier",
    JSXText: "JSXText"
};

/**
 * Converts part of a template into an Esprima token.
 * @param {(acorn.Token)[]} tokens The Acorn tokens representing the template.
 * @param {string} code The source code.
 * @returns {EsprimaToken} The Esprima equivalent of the template token.
 * @private
 */
function convertTemplatePart(tokens, code) {
    const firstToken = tokens[0],
        lastTemplateToken = tokens[tokens.length - 1];

    /** @type {EsprimaToken} */
    const token = {
        type: Token.Template,
        value: code.slice(firstToken.start, lastTemplateToken.end)
    };

    if (firstToken.loc && lastTemplateToken.loc) {
        token.loc = {
            start: firstToken.loc.start,
            end: lastTemplateToken.loc.end
        };
    }

    if (firstToken.range && lastTemplateToken.range) {
        token.start = firstToken.range[0];
        token.end = lastTemplateToken.range[1];
        token.range = [token.start, token.end];
    }

    return token;
}

class TokenTranslator {

    /**
     * Contains logic to translate Acorn tokens into Esprima tokens.
     * @param {EnhancedTokTypes} acornTokTypes The Acorn token types.
     * @param {string} code The source code Acorn is parsing. This is necessary
     *      to correct the "value" property of some tokens.
     */
    constructor(acornTokTypes, code) {

        // token types
        this._acornTokTypes = acornTokTypes;

        // token buffer for templates
        /** @type {(acorn.Token)[]} */
        this._tokens = [];

        // track the last curly brace
        this._curlyBrace = null;

        // the source code
        this._code = code;

    }

    /**
     * Translates a single Acorn token to a single Esprima token. This may be
     * inaccurate due to how templates are handled differently in Esprima and
     * Acorn, but should be accurate for all other tokens.
     * @param {acorn.Token} token The Acorn token to translate.
     * @param {ExtraNoTokens} extra Espree extra object.
     * @returns {EsprimaToken} The Esprima version of the token.
     */
    translate(token, extra) {

        const type = token.type,
            tt = this._acornTokTypes,

            // We use an unknown type because `acorn.Token` is a class whose
            //   `type` property we cannot override to our desired `string`;
            //   this also allows us to define a stricter `EsprimaToken` with
            //   a string-only `type` property
            unknownType = /** @type {unknown} */ (token),
            newToken = /** @type {EsprimaToken} */ (unknownType);

        if (type === tt.name) {
            newToken.type = Token.Identifier;

            // TODO: See if this is an Acorn bug
            if (token.value === "static") {
                newToken.type = Token.Keyword;
            }

            if (extra.ecmaVersion > 5 && (token.value === "yield" || token.value === "let")) {
                newToken.type = Token.Keyword;
            }

        } else if (type === tt.privateId) {
            newToken.type = Token.PrivateIdentifier;

        } else if (type === tt.semi || type === tt.comma ||
                 type === tt.parenL || type === tt.parenR ||
                 type === tt.braceL || type === tt.braceR ||
                 type === tt.dot || type === tt.bracketL ||
                 type === tt.colon || type === tt.question ||
                 type === tt.bracketR || type === tt.ellipsis ||
                 type === tt.arrow || type === tt.jsxTagStart ||
                 type === tt.incDec || type === tt.starstar ||
                 type === tt.jsxTagEnd || type === tt.prefix ||
                 type === tt.questionDot ||
                 (type.binop && !type.keyword) ||
                 type.isAssign) {

            newToken.type = Token.Punctuator;
            newToken.value = this._code.slice(token.start, token.end);
        } else if (type === tt.jsxName) {
            newToken.type = Token.JSXIdentifier;
        } else if (type.label === "jsxText" || type === tt.jsxAttrValueToken) {
            newToken.type = Token.JSXText;
        } else if (type.keyword) {
            if (type.keyword === "true" || type.keyword === "false") {
                newToken.type = Token.Boolean;
            } else if (type.keyword === "null") {
                newToken.type = Token.Null;
            } else {
                newToken.type = Token.Keyword;
            }
        } else if (type === tt.num) {
            newToken.type = Token.Numeric;
            newToken.value = this._code.slice(token.start, token.end);
        } else if (type === tt.string) {

            if (extra.jsxAttrValueToken) {
                extra.jsxAttrValueToken = false;
                newToken.type = Token.JSXText;
            } else {
                newToken.type = Token.String;
            }

            newToken.value = this._code.slice(token.start, token.end);
        } else if (type === tt.regexp) {
            newToken.type = Token.RegularExpression;
            const value = token.value;

            newToken.regex = {
                flags: value.flags,
                pattern: value.pattern
            };
            newToken.value = `/${value.pattern}/${value.flags}`;
        }

        return newToken;
    }

    /**
     * Function to call during Acorn's onToken handler.
     * @param {acorn.Token} token The Acorn token.
     * @param {Extra} extra The Espree extra object.
     * @returns {void}
     */
    onToken(token, extra) {

        const that = this,
            tt = this._acornTokTypes,
            tokens = extra.tokens,
            templateTokens = this._tokens;

        /**
         * Flushes the buffered template tokens and resets the template
         * tracking.
         * @returns {void}
         * @private
         */
        function translateTemplateTokens() {
            tokens.push(convertTemplatePart(that._tokens, that._code));
            that._tokens = [];
        }

        if (token.type === tt.eof) {

            // might be one last curlyBrace
            if (this._curlyBrace) {
                tokens.push(this.translate(this._curlyBrace, extra));
            }

            return;
        }

        if (token.type === tt.backQuote) {

            // if there's already a curly, it's not part of the template
            if (this._curlyBrace) {
                tokens.push(this.translate(this._curlyBrace, extra));
                this._curlyBrace = null;
            }

            templateTokens.push(token);

            // it's the end
            if (templateTokens.length > 1) {
                translateTemplateTokens();
            }

            return;
        }
        if (token.type === tt.dollarBraceL) {
            templateTokens.push(token);
            translateTemplateTokens();
            return;
        }
        if (token.type === tt.braceR) {

            // if there's already a curly, it's not part of the template
            if (this._curlyBrace) {
                tokens.push(this.translate(this._curlyBrace, extra));
            }

            // store new curly for later
            this._curlyBrace = token;
            return;
        }
        if (token.type === tt.template || token.type === tt.invalidTemplate) {
            if (this._curlyBrace) {
                templateTokens.push(this._curlyBrace);
                this._curlyBrace = null;
            }

            templateTokens.push(token);
            return;
        }

        if (this._curlyBrace) {
            tokens.push(this.translate(this._curlyBrace, extra));
            this._curlyBrace = null;
        }

        tokens.push(this.translate(token, extra));
    }
}

/**
 * @fileoverview A collection of methods for processing Espree's options.
 * @author Kai Cataldo
 */

// ----------------------------------------------------------------------------
// Local type imports
// ----------------------------------------------------------------------------
/**
 * @local
 * @typedef {import('../espree').ParserOptions} ParserOptions
 * @typedef {import('../espree').ecmaVersion} ecmaVersion
 */

// ----------------------------------------------------------------------------
// Local types
// ----------------------------------------------------------------------------
/**
 * @local
 * @typedef {{
 *   ecmaVersion: ecmaVersion,
 *   sourceType: "script"|"module",
 *   range?: boolean,
 *   loc?: boolean,
 *   allowReserved: boolean | "never",
 *   ecmaFeatures?: {
 *     jsx?: boolean,
 *     globalReturn?: boolean,
 *     impliedStrict?: boolean
 *   },
 *   ranges: boolean,
 *   locations: boolean,
 *   allowReturnOutsideFunction: boolean,
 *   tokens?: boolean,
 *   comment?: boolean
 * }} NormalizedParserOptions
 */

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const SUPPORTED_VERSIONS = [
    3,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13
];

/**
 * Get the latest ECMAScript version supported by Espree.
 * @returns {number} The latest ECMAScript version.
 */
function getLatestEcmaVersion() {
    return SUPPORTED_VERSIONS[SUPPORTED_VERSIONS.length - 1];
}

/**
 * Get the list of ECMAScript versions supported by Espree.
 * @returns {number[]} An array containing the supported ECMAScript versions.
 */
function getSupportedEcmaVersions() {
    return [...SUPPORTED_VERSIONS];
}

/**
 * Normalize ECMAScript version from the initial config
 * @param {number|"latest"} ecmaVersion ECMAScript version from the initial config
 * @throws {Error} throws an error if the ecmaVersion is invalid.
 * @returns {number} normalized ECMAScript version
 */
function normalizeEcmaVersion(ecmaVersion = 5) {

    let version = ecmaVersion === "latest" ? getLatestEcmaVersion() : ecmaVersion;

    if (typeof version !== "number") {
        throw new Error(`ecmaVersion must be a number or "latest". Received value of type ${typeof ecmaVersion} instead.`);
    }

    // Calculate ECMAScript edition number from official year version starting with
    // ES2015, which corresponds with ES6 (or a difference of 2009).
    if (version >= 2015) {
        version -= 2009;
    }

    if (!SUPPORTED_VERSIONS.includes(version)) {
        throw new Error("Invalid ecmaVersion.");
    }

    return version;
}

/**
 * Normalize sourceType from the initial config
 * @param {"script"|"module"|"commonjs"} sourceType to normalize
 * @throws {Error} throw an error if sourceType is invalid
 * @returns {"script"|"module"} normalized sourceType
 */
function normalizeSourceType(sourceType = "script") {
    if (sourceType === "script" || sourceType === "module") {
        return sourceType;
    }

    if (sourceType === "commonjs") {
        return "script";
    }

    throw new Error("Invalid sourceType.");
}

/**
 * Normalize parserOptions
 * @param {ParserOptions} options the parser options to normalize
 * @throws {Error} throw an error if found invalid option.
 * @returns {NormalizedParserOptions} normalized options
 */
function normalizeOptions(options) {
    const ecmaVersion = normalizeEcmaVersion(options.ecmaVersion);

    /** @type {"script"|"module"} */
    const sourceType = normalizeSourceType(options.sourceType);
    const ranges = options.range === true;
    const locations = options.loc === true;

    if (ecmaVersion !== 3 && options.allowReserved) {

        // a value of `false` is intentionally allowed here, so a shared config can overwrite it when needed
        throw new Error("`allowReserved` is only supported when ecmaVersion is 3");
    }

    // Note: value in Acorn can also be "never" but we throw in such a case
    if (typeof options.allowReserved !== "undefined" && typeof options.allowReserved !== "boolean") {
        throw new Error("`allowReserved`, when present, must be `true` or `false`");
    }
    const allowReserved = ecmaVersion === 3 ? (options.allowReserved || "never") : false;
    const ecmaFeatures = options.ecmaFeatures || {};
    const allowReturnOutsideFunction = options.sourceType === "commonjs" ||
        Boolean(ecmaFeatures.globalReturn);

    if (sourceType === "module" && ecmaVersion < 6) {
        throw new Error("sourceType 'module' is not supported when ecmaVersion < 2015. Consider adding `{ ecmaVersion: 2015 }` to the parser options.");
    }

    return Object.assign({}, options, {
        ecmaVersion,
        sourceType,
        ranges,
        locations,
        allowReserved,
        allowReturnOutsideFunction
    });
}

/* eslint-disable no-param-reassign*/

const STATE = Symbol("espree's internal state");
const ESPRIMA_FINISH_NODE = Symbol("espree's esprimaFinishNode");

// ----------------------------------------------------------------------------
// Types exported from file
// ----------------------------------------------------------------------------
/**
 * @typedef {{
 *   index?: number;
 *   lineNumber?: number;
 *   column?: number;
 * } & SyntaxError} EnhancedSyntaxError
 */

// We add `jsxAttrValueToken` ourselves.
/**
 * @typedef {{
 *   jsxAttrValueToken?: acorn.TokenType;
 * } & tokTypesType} EnhancedTokTypes
 */

// ----------------------------------------------------------------------------
// Local type imports
// ----------------------------------------------------------------------------
/**
 * @local
 * @typedef {import('acorn')} acorn
 * @typedef {typeof import('acorn-jsx').tokTypes} tokTypesType
 * @typedef {import('acorn-jsx').AcornJsxParser} AcornJsxParser
 * @typedef {import('../espree').ParserOptions} ParserOptions
 * @typedef {import('../espree').ecmaVersion} ecmaVersion
 */

// ----------------------------------------------------------------------------
// Local types
// ----------------------------------------------------------------------------
/**
 * @local
 * @typedef {{
 *   generator?: boolean
 * } & acorn.Node} EsprimaNode
 */
/**
 * Suggests an integer
 * @local
 * @typedef {number} int
 */

/**
 * @typedef {{
 *   type: string,
 *   value: string,
 *   range?: [number, number],
 *   start?: number,
 *   end?: number,
 *   loc?: {
 *     start: acorn.Position | undefined,
 *     end: acorn.Position | undefined
 *   }
 * }} EsprimaComment
 */

/**
 *  First two properties as in `acorn.Comment`; next two as in `acorn.Comment`
 *  but optional. Last is different as has to allow `undefined`
 */
/**
 * @local
 *
 * @typedef {import('../espree').EspreeTokens} EspreeTokens
 *
 * @typedef {{
 *   tail?: boolean
 * } & acorn.Node} AcornTemplateNode
 *
 * @typedef {{
 *   originalSourceType: "script"|"module"|"commonjs";
 *   ecmaVersion: ecmaVersion;
 *   comments: EsprimaComment[]|null;
 *   impliedStrict: boolean;
 *   lastToken: acorn.Token|null;
 *   templateElements: (AcornTemplateNode)[];
 *   jsxAttrValueToken: boolean;
 * }} BaseStateObject
 *
 * @typedef {{
 *   tokens: null;
 * } & BaseStateObject} StateObject
 *
 * @typedef {{
 *   tokens: EspreeTokens;
 * } & BaseStateObject} StateObjectWithTokens
 *
 * @typedef {{
 *   sourceType?: "script"|"module"|"commonjs";
 *   comments?: EsprimaComment[];
 *   tokens?: EspreeTokens;
 *   body: acorn.Node[];
 * } & acorn.Node} EsprimaProgramNode
 */
/**
 * Converts an Acorn comment to an Esprima comment.
 *
 * - block True if it's a block comment, false if not.
 * - text The text of the comment.
 * - start The index at which the comment starts.
 * - end The index at which the comment ends.
 * - startLoc The location at which the comment starts.
 * - endLoc The location at which the comment ends.
 * @local
 * @typedef {(
 *   block: boolean,
 *   text: string,
 *   start: int,
 *   end: int,
 *   startLoc: acorn.Position | undefined,
 *   endLoc: acorn.Position | undefined
 * ) => EsprimaComment | void} AcornToEsprimaCommentConverter
 */

// ----------------------------------------------------------------------------
// Utilities
// ----------------------------------------------------------------------------
/**
 * Converts an Acorn comment to an Esprima comment.
 * @type {AcornToEsprimaCommentConverter}
 * @returns {EsprimaComment} The comment object.
 * @private
 */
function convertAcornCommentToEsprimaComment(block, text, start, end, startLoc, endLoc) {
    const comment = /** @type {EsprimaComment} */ ({
        type: block ? "Block" : "Line",
        value: text
    });

    if (typeof start === "number") {
        comment.start = start;
        comment.end = end;
        comment.range = [start, end];
    }

    if (typeof startLoc === "object") {
        comment.loc = {
            start: startLoc,
            end: endLoc
        };
    }

    return comment;
}

// ----------------------------------------------------------------------------
// Exports
// ----------------------------------------------------------------------------
/* eslint-disable arrow-body-style -- Need to supply formatted JSDoc for type info */
var espree = () => {

    /**
     * Returns the Espree parser.
     * @param {AcornJsxParser} Parser The Acorn parser
     * @returns {typeof EspreeParser} The Espree parser
     */
    return Parser => {
        const tokTypes = /** @type {EnhancedTokTypes} */ (Object.assign({}, Parser.acorn.tokTypes));

        if (Parser.acornJsx) {
            Object.assign(tokTypes, Parser.acornJsx.tokTypes);
        }

        /* eslint-disable no-shadow -- Using first class as type */
        /**
         * @export
         */
        return class EspreeParser extends Parser {
            /* eslint-enable no-shadow -- Using first class as type */
            /* eslint-disable jsdoc/check-types -- Allows generic object */
            /**
             * Adapted parser for Espree.
             * @param {ParserOptions|null} opts Espree options
             * @param {string|object} code The source code
             */
            constructor(opts, code) {
                /* eslint-enable jsdoc/check-types -- Allows generic object */

                /** @type {ParserOptions} */
                const newOpts = (typeof opts !== "object" || opts === null)
                    ? {}
                    : opts;

                const codeString = typeof code === "string"
                    ? /** @type {string} */ (code)
                    : String(code);

                // save original source type in case of commonjs
                const originalSourceType = newOpts.sourceType;
                const options = normalizeOptions(newOpts);
                const ecmaFeatures = options.ecmaFeatures || {};
                const tokenTranslator =
                    options.tokens === true
                        ? new TokenTranslator(tokTypes, codeString)
                        : null;

                // Initialize acorn parser.
                super({

                    // do not use spread, because we don't want to pass any unknown options to acorn
                    ecmaVersion: options.ecmaVersion,
                    sourceType: options.sourceType,
                    ranges: options.ranges,
                    locations: options.locations,
                    allowReserved: options.allowReserved,

                    // Truthy value is true for backward compatibility.
                    allowReturnOutsideFunction: options.allowReturnOutsideFunction,

                    // Collect tokens
                    /**
                     * Handler for receiving a token
                     * @param {acorn.Token} token The token
                     * @returns {void}
                     */
                    onToken: token => {
                        if (tokenTranslator) {

                            // Use `tokens`, `ecmaVersion`, and `jsxAttrValueToken` in the state.
                            tokenTranslator.onToken(token, /** @type {StateObjectWithTokens} */ (this[STATE]));
                        }
                        if (token.type !== tokTypes.eof) {
                            this[STATE].lastToken = token;
                        }
                    },

                    // Collect comments
                    /**
                     * Converts an Acorn comment to an Esprima comment.
                     * @type {AcornToEsprimaCommentConverter}
                     */
                    onComment: (block, text, start, end, startLoc, endLoc) => {
                        if (this[STATE].comments) {
                            const comment = convertAcornCommentToEsprimaComment(block, text, start, end, startLoc, endLoc);

                            const comments = /** @type {EsprimaComment[]} */ (this[STATE].comments);

                            comments.push(comment);
                        }
                    }
                }, codeString);

                // Force for TypeScript (indicating that `lineStart` is not undefined)
                if (!this.lineStart) {
                    this.lineStart = 0;
                }

                /**
                 * Data that is unique to Espree and is not represented internally in
                 * Acorn. We put all of this data into a symbol property as a way to
                 * avoid potential naming conflicts with future versions of Acorn.
                 * @type {StateObjectWithTokens|StateObject}
                 */
                this[STATE] = {
                    originalSourceType: originalSourceType || options.sourceType,
                    tokens: tokenTranslator ? /** @type {EspreeTokens} */ ([]) : null,
                    comments: options.comment === true
                        ? /** @type {EsprimaComment[]} */ ([])
                        : null,
                    impliedStrict: ecmaFeatures.impliedStrict === true && this.options.ecmaVersion >= 5,
                    ecmaVersion: this.options.ecmaVersion,
                    jsxAttrValueToken: false,

                    /** @type {acorn.Token|null} */
                    lastToken: null,

                    /** @type {(AcornTemplateNode)[]} */
                    templateElements: []
                };
            }

            /**
             * Returns Espree tokens.
             * @returns {EspreeTokens|null} Espree tokens
             */
            tokenize() {
                do {
                    this.next();
                } while (this.type !== tokTypes.eof);

                // Consume the final eof token
                this.next();

                const extra = this[STATE];
                const tokens = extra.tokens;

                if (extra.comments && tokens) {
                    tokens.comments = extra.comments;
                }

                return tokens;
            }

            /**
             * Calls parent.
             * @param {acorn.Node} node The node
             * @param {string} type The type
             * @returns {acorn.Node} The altered Node
             */
            finishNode(node, type) {
                const result = super.finishNode(node, type);

                return this[ESPRIMA_FINISH_NODE](result);
            }

            /**
             * Calls parent.
             * @param {acorn.Node} node The node
             * @param {string} type The type
             * @param {number} pos The position
             * @param {acorn.Position} loc The location
             * @returns {acorn.Node} The altered Node
             */
            finishNodeAt(node, type, pos, loc) {
                const result = super.finishNodeAt(node, type, pos, loc);

                return this[ESPRIMA_FINISH_NODE](result);
            }

            /**
             * Parses.
             * @returns {EsprimaProgramNode} The program Node
             */
            parse() {
                const extra = this[STATE];

                const program = /** @type {EsprimaProgramNode} */ (super.parse());

                program.sourceType = extra.originalSourceType;

                if (extra.comments) {
                    program.comments = extra.comments;
                }
                if (extra.tokens) {
                    program.tokens = extra.tokens;
                }

                /*
                 * Adjust opening and closing position of program to match Esprima.
                 * Acorn always starts programs at range 0 whereas Esprima starts at the
                 * first AST node's start (the only real difference is when there's leading
                 * whitespace or leading comments). Acorn also counts trailing whitespace
                 * as part of the program whereas Esprima only counts up to the last token.
                 */
                if (program.body.length) {
                    const [firstNode] = program.body;

                    if (program.range && firstNode.range) {
                        program.range[0] = firstNode.range[0];
                    }
                    if (program.loc && firstNode.loc) {
                        program.loc.start = firstNode.loc.start;
                    }
                    program.start = firstNode.start;
                }
                if (extra.lastToken) {
                    if (program.range && extra.lastToken.range) {
                        program.range[1] = extra.lastToken.range[1];
                    }
                    if (program.loc && extra.lastToken.loc) {
                        program.loc.end = extra.lastToken.loc.end;
                    }
                    program.end = extra.lastToken.end;
                }


                /*
                 * https://github.com/eslint/espree/issues/349
                 * Ensure that template elements have correct range information.
                 * This is one location where Acorn produces a different value
                 * for its start and end properties vs. the values present in the
                 * range property. In order to avoid confusion, we set the start
                 * and end properties to the values that are present in range.
                 * This is done here, instead of in finishNode(), because Acorn
                 * uses the values of start and end internally while parsing, making
                 * it dangerous to change those values while parsing is ongoing.
                 * By waiting until the end of parsing, we can safely change these
                 * values without affect any other part of the process.
                 */
                this[STATE].templateElements.forEach(templateElement => {
                    const startOffset = -1;
                    const endOffset = templateElement.tail ? 1 : 2;

                    templateElement.start += startOffset;
                    templateElement.end += endOffset;

                    if (templateElement.range) {
                        templateElement.range[0] += startOffset;
                        templateElement.range[1] += endOffset;
                    }

                    if (templateElement.loc) {
                        templateElement.loc.start.column += startOffset;
                        templateElement.loc.end.column += endOffset;
                    }
                });

                return program;
            }

            /**
             * Parses top level.
             * @param {acorn.Node} node AST Node
             * @returns {acorn.Node} The changed node
             */
            parseTopLevel(node) {
                if (this[STATE].impliedStrict) {
                    this.strict = true;
                }
                return super.parseTopLevel(node);
            }

            /**
             * Overwrites the default raise method to throw Esprima-style errors.
             * @param {int} pos The position of the error.
             * @param {string} message The error message.
             * @throws {EnhancedSyntaxError} A syntax error.
             * @returns {void}
             */
            raise(pos, message) {
                const loc = Parser.acorn.getLineInfo(this.input, pos);

                /** @type {EnhancedSyntaxError} */
                const err = new SyntaxError(message);

                err.index = pos;
                err.lineNumber = loc.line;
                err.column = loc.column + 1; // acorn uses 0-based columns
                throw err;
            }

            /**
             * Overwrites the default raise method to throw Esprima-style errors.
             * @param {int} pos The position of the error.
             * @param {string} message The error message.
             * @throws {EnhancedSyntaxError} A syntax error.
             * @returns {void}
             */
            raiseRecoverable(pos, message) {
                this.raise(pos, message);
            }

            /**
             * Overwrites the default unexpected method to throw Esprima-style errors.
             * @param {int} pos The position of the error.
             * @throws {EnhancedSyntaxError} A syntax error.
             * @returns {void}
             */
            unexpected(pos) {
                let message = "Unexpected token";

                if (pos !== null && pos !== void 0) {
                    this.pos = pos;

                    if (this.options.locations) {
                        while (this.pos < /** @type {int} */ (this.lineStart)) {

                            /** @type {int} */
                            this.lineStart = this.input.lastIndexOf("\n", /** @type {int} */ (this.lineStart) - 2) + 1;
                            --this.curLine;
                        }
                    }

                    this.nextToken();
                }

                if (this.end > this.start) {
                    message += ` ${this.input.slice(this.start, this.end)}`;
                }

                this.raise(this.start, message);
            }

            /**
             * Esprima-FB represents JSX strings as tokens called "JSXText", but Acorn-JSX
             * uses regular tt.string without any distinction between this and regular JS
             * strings. As such, we intercept an attempt to read a JSX string and set a flag
             * on extra so that when tokens are converted, the next token will be switched
             * to JSXText via onToken.
             * @param {number} quote A character code
             * @returns {void}
             */
            jsx_readString(quote) { // eslint-disable-line camelcase
                if (typeof super.jsx_readString === "undefined") {
                    throw new Error("Not a JSX parser");
                }
                super.jsx_readString(quote);

                if (this.type === tokTypes.string) {
                    this[STATE].jsxAttrValueToken = true;
                }
            }

            /**
             * Performs last-minute Esprima-specific compatibility checks and fixes.
             * @param {acorn.Node} result The node to check.
             * @returns {EsprimaNode} The finished node.
             */
            [ESPRIMA_FINISH_NODE](result) {

                const esprimaResult = /** @type {EsprimaNode} */ (result);

                // Acorn doesn't count the opening and closing backticks as part of templates
                // so we have to adjust ranges/locations appropriately.
                if (result.type === "TemplateElement") {

                    // save template element references to fix start/end later
                    this[STATE].templateElements.push(result);
                }

                if (result.type.includes("Function") && !esprimaResult.generator) {
                    esprimaResult.generator = false;
                }

                return esprimaResult;
            }
        };
    };
};

const version$1 = "main";

/**
 * @fileoverview Main Espree file that converts Acorn into Esprima output.
 *
 * This file contains code from the following MIT-licensed projects:
 * 1. Acorn
 * 2. Babylon
 * 3. Babel-ESLint
 *
 * This file also contains code from Esprima, which is BSD licensed.
 *
 * Acorn is Copyright 2012-2015 Acorn Contributors (https://github.com/marijnh/acorn/blob/master/AUTHORS)
 * Babylon is Copyright 2014-2015 various contributors (https://github.com/babel/babel/blob/master/packages/babylon/AUTHORS)
 * Babel-ESLint is Copyright 2014-2015 Sebastian McKenzie <sebmck@gmail.com>
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright
 *   notice, this list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above copyright
 *   notice, this list of conditions and the following disclaimer in the
 *   documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * Esprima is Copyright (c) jQuery Foundation, Inc. and Contributors, All Rights Reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *   * Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 *   * Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */


// To initialize lazily.
const parsers = {
    _regular: /** @type {IEspreeParser|null} */ (null),
    _jsx: /** @type {IEspreeParser|null} */ (null),

    /**
     * Returns regular Parser
     * @returns {IEspreeParser} Regular Acorn parser
     */
    get regular() {
        if (this._regular === null) {
            const espreeParserFactory = /** @type {unknown} */ (espree());

            this._regular = /** @type {IEspreeParser} */ (
                acorn__namespace.Parser.extend(

                    /** @type {(BaseParser: typeof acorn.Parser) => typeof acorn.Parser} */
                    (espreeParserFactory)
                )
            );
        }
        return this._regular;
    },

    /**
     * Returns JSX Parser
     * @returns {IEspreeParser} JSX Acorn parser
     */
    get jsx() {
        if (this._jsx === null) {
            const espreeParserFactory = /** @type {unknown} */ (espree());
            const jsxFactory = jsx__default["default"]();

            this._jsx = /** @type {IEspreeParser} */ (
                acorn__namespace.Parser.extend(
                    jsxFactory,

                    /** @type {(BaseParser: typeof acorn.Parser) => typeof acorn.Parser} */
                    (espreeParserFactory)
                )
            );
        }
        return this._jsx;
    },

    /**
     * Returns Regular or JSX Parser
     * @param {ParserOptions} options Parser options
     * @returns {IEspreeParser} Regular or JSX Acorn parser
     */
    get(options) {
        const useJsx = Boolean(
            options &&
            options.ecmaFeatures &&
            options.ecmaFeatures.jsx
        );

        return useJsx ? this.jsx : this.regular;
    }
};

//------------------------------------------------------------------------------
// Tokenizer
//------------------------------------------------------------------------------

/**
 * Tokenizes the given code.
 * @param {string} code The code to tokenize.
 * @param {ParserOptions} options Options defining how to tokenize.
 * @returns {EspreeTokens} An array of tokens.
 * @throws {EnhancedSyntaxError} If the input code is invalid.
 * @private
 */
function tokenize(code, options) {
    const Parser = parsers.get(options);

    // Ensure to collect tokens.
    if (!options || options.tokens !== true) {
        options = Object.assign({}, options, { tokens: true }); // eslint-disable-line no-param-reassign
    }

    return /** @type {EspreeTokens} */ (new Parser(options, code).tokenize());
}

//------------------------------------------------------------------------------
// Parser
//------------------------------------------------------------------------------

/**
 * Parses the given code.
 * @param {string} code The code to tokenize.
 * @param {ParserOptions} options Options defining how to tokenize.
 * @returns {acorn.Node} The "Program" AST node.
 * @throws {EnhancedSyntaxError} If the input code is invalid.
 */
function parse(code, options) {
    const Parser = parsers.get(options);

    return new Parser(options, code).parse();
}

//------------------------------------------------------------------------------
// Public
//------------------------------------------------------------------------------

const version = version$1;

/* istanbul ignore next */
const VisitorKeys = (function() {
    return visitorKeys__namespace.KEYS;
}());

// Derive node types from VisitorKeys
/* istanbul ignore next */
const Syntax = (function() {
    let /** @type {Object<string,string>} */
        types = {};

    if (typeof Object.create === "function") {
        types = Object.create(null);
    }

    for (const name of Object.keys(VisitorKeys)) {
        types[name] = name;
    }

    if (typeof Object.freeze === "function") {
        Object.freeze(types);
    }

    return types;
}());

const latestEcmaVersion = getLatestEcmaVersion();

const supportedEcmaVersions = getSupportedEcmaVersions();

exports.Syntax = Syntax;
exports.VisitorKeys = VisitorKeys;
exports.latestEcmaVersion = latestEcmaVersion;
exports.parse = parse;
exports.supportedEcmaVersions = supportedEcmaVersions;
exports.tokenize = tokenize;
exports.version = version;
//# sourceMappingURL=espree.cjs.map
