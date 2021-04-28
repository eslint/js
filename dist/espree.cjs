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
                    get: function () {
                        return e[k];
                    }
                });
            }
        });
    }
    n['default'] = e;
    return Object.freeze(n);
}

var acorn__namespace = /*#__PURE__*/_interopNamespace(acorn);
var jsx__default = /*#__PURE__*/_interopDefaultLegacy(jsx);
var visitorKeys__default = /*#__PURE__*/_interopDefaultLegacy(visitorKeys);

/**
 * @fileoverview The AST node types produced by the parser.
 * @author Nicholas C. Zakas
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

// None!

//------------------------------------------------------------------------------
// Public
//------------------------------------------------------------------------------

var astNodeTypes = {
    AssignmentExpression: "AssignmentExpression",
    AssignmentPattern: "AssignmentPattern",
    ArrayExpression: "ArrayExpression",
    ArrayPattern: "ArrayPattern",
    ArrowFunctionExpression: "ArrowFunctionExpression",
    AwaitExpression: "AwaitExpression",
    BlockStatement: "BlockStatement",
    BinaryExpression: "BinaryExpression",
    BreakStatement: "BreakStatement",
    CallExpression: "CallExpression",
    CatchClause: "CatchClause",
    ClassBody: "ClassBody",
    ClassDeclaration: "ClassDeclaration",
    ClassExpression: "ClassExpression",
    ConditionalExpression: "ConditionalExpression",
    ContinueStatement: "ContinueStatement",
    DoWhileStatement: "DoWhileStatement",
    DebuggerStatement: "DebuggerStatement",
    EmptyStatement: "EmptyStatement",
    ExpressionStatement: "ExpressionStatement",
    ForStatement: "ForStatement",
    ForInStatement: "ForInStatement",
    ForOfStatement: "ForOfStatement",
    FunctionDeclaration: "FunctionDeclaration",
    FunctionExpression: "FunctionExpression",
    Identifier: "Identifier",
    IfStatement: "IfStatement",
    Literal: "Literal",
    LabeledStatement: "LabeledStatement",
    LogicalExpression: "LogicalExpression",
    MemberExpression: "MemberExpression",
    MetaProperty: "MetaProperty",
    MethodDefinition: "MethodDefinition",
    NewExpression: "NewExpression",
    ObjectExpression: "ObjectExpression",
    ObjectPattern: "ObjectPattern",
    Program: "Program",
    Property: "Property",
    RestElement: "RestElement",
    ReturnStatement: "ReturnStatement",
    SequenceExpression: "SequenceExpression",
    SpreadElement: "SpreadElement",
    Super: "Super",
    SwitchCase: "SwitchCase",
    SwitchStatement: "SwitchStatement",
    TaggedTemplateExpression: "TaggedTemplateExpression",
    TemplateElement: "TemplateElement",
    TemplateLiteral: "TemplateLiteral",
    ThisExpression: "ThisExpression",
    ThrowStatement: "ThrowStatement",
    TryStatement: "TryStatement",
    UnaryExpression: "UnaryExpression",
    UpdateExpression: "UpdateExpression",
    VariableDeclaration: "VariableDeclaration",
    VariableDeclarator: "VariableDeclarator",
    WhileStatement: "WhileStatement",
    WithStatement: "WithStatement",
    YieldExpression: "YieldExpression",
    JSXIdentifier: "JSXIdentifier",
    JSXNamespacedName: "JSXNamespacedName",
    JSXMemberExpression: "JSXMemberExpression",
    JSXEmptyExpression: "JSXEmptyExpression",
    JSXExpressionContainer: "JSXExpressionContainer",
    JSXElement: "JSXElement",
    JSXClosingElement: "JSXClosingElement",
    JSXOpeningElement: "JSXOpeningElement",
    JSXAttribute: "JSXAttribute",
    JSXSpreadAttribute: "JSXSpreadAttribute",
    JSXText: "JSXText",
    ExportDefaultDeclaration: "ExportDefaultDeclaration",
    ExportNamedDeclaration: "ExportNamedDeclaration",
    ExportAllDeclaration: "ExportAllDeclaration",
    ExportSpecifier: "ExportSpecifier",
    ImportDeclaration: "ImportDeclaration",
    ImportSpecifier: "ImportSpecifier",
    ImportDefaultSpecifier: "ImportDefaultSpecifier",
    ImportNamespaceSpecifier: "ImportNamespaceSpecifier"
};

/**
 * @fileoverview Translates tokens between Acorn format and Esprima format.
 * @author Nicholas C. Zakas
 */
/* eslint no-underscore-dangle: 0 */

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
 * @param {AcornToken[]} tokens The Acorn tokens representing the template.
 * @param {string} code The source code.
 * @returns {EsprimaToken} The Esprima equivalent of the template token.
 * @private
 */
function convertTemplatePart(tokens, code) {
    const firstToken = tokens[0],
        lastTemplateToken = tokens[tokens.length - 1];

    const token = {
        type: Token.Template,
        value: code.slice(firstToken.start, lastTemplateToken.end)
    };

    if (firstToken.loc) {
        token.loc = {
            start: firstToken.loc.start,
            end: lastTemplateToken.loc.end
        };
    }

    if (firstToken.range) {
        token.start = firstToken.range[0];
        token.end = lastTemplateToken.range[1];
        token.range = [token.start, token.end];
    }

    return token;
}

/**
 * Contains logic to translate Acorn tokens into Esprima tokens.
 * @param {Object} acornTokTypes The Acorn token types.
 * @param {string} code The source code Acorn is parsing. This is necessary
 *      to correct the "value" property of some tokens.
 * @constructor
 */
function TokenTranslator(acornTokTypes, code) {

    // token types
    this._acornTokTypes = acornTokTypes;

    // token buffer for templates
    this._tokens = [];

    // track the last curly brace
    this._curlyBrace = null;

    // the source code
    this._code = code;

}

TokenTranslator.prototype = {
    constructor: TokenTranslator,

    /**
     * Translates a single Esprima token to a single Acorn token. This may be
     * inaccurate due to how templates are handled differently in Esprima and
     * Acorn, but should be accurate for all other tokens.
     * @param {AcornToken} token The Acorn token to translate.
     * @param {Object} extra Espree extra object.
     * @returns {EsprimaToken} The Esprima version of the token.
     */
    translate(token, extra) {

        const type = token.type,
            tt = this._acornTokTypes;

        if (type === tt.name) {
            token.type = Token.Identifier;

            // TODO: See if this is an Acorn bug
            if (token.value === "static") {
                token.type = Token.Keyword;
            }

            if (extra.ecmaVersion > 5 && (token.value === "yield" || token.value === "let")) {
                token.type = Token.Keyword;
            }

        } else if (type === tt.privateId) {
            token.type = Token.PrivateIdentifier;

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

            token.type = Token.Punctuator;
            token.value = this._code.slice(token.start, token.end);
        } else if (type === tt.jsxName) {
            token.type = Token.JSXIdentifier;
        } else if (type.label === "jsxText" || type === tt.jsxAttrValueToken) {
            token.type = Token.JSXText;
        } else if (type.keyword) {
            if (type.keyword === "true" || type.keyword === "false") {
                token.type = Token.Boolean;
            } else if (type.keyword === "null") {
                token.type = Token.Null;
            } else {
                token.type = Token.Keyword;
            }
        } else if (type === tt.num) {
            token.type = Token.Numeric;
            token.value = this._code.slice(token.start, token.end);
        } else if (type === tt.string) {

            if (extra.jsxAttrValueToken) {
                extra.jsxAttrValueToken = false;
                token.type = Token.JSXText;
            } else {
                token.type = Token.String;
            }

            token.value = this._code.slice(token.start, token.end);
        } else if (type === tt.regexp) {
            token.type = Token.RegularExpression;
            const value = token.value;

            token.regex = {
                flags: value.flags,
                pattern: value.pattern
            };
            token.value = `/${value.pattern}/${value.flags}`;
        }

        return token;
    },

    /**
     * Function to call during Acorn's onToken handler.
     * @param {AcornToken} token The Acorn token.
     * @param {Object} extra The Espree extra object.
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
};

/**
 * @fileoverview A collection of methods for processing Espree's options.
 * @author Kai Cataldo
 */

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const DEFAULT_ECMA_VERSION = 5;
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
 * Normalize ECMAScript version from the initial config
 * @param {number} ecmaVersion ECMAScript version from the initial config
 * @throws {Error} throws an error if the ecmaVersion is invalid.
 * @returns {number} normalized ECMAScript version
 */
function normalizeEcmaVersion(ecmaVersion = DEFAULT_ECMA_VERSION) {
    if (typeof ecmaVersion !== "number") {
        throw new Error(`ecmaVersion must be a number. Received value of type ${typeof ecmaVersion} instead.`);
    }

    let version = ecmaVersion;

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
 * @param {string} sourceType to normalize
 * @throws {Error} throw an error if sourceType is invalid
 * @returns {string} normalized sourceType
 */
function normalizeSourceType(sourceType = "script") {
    if (sourceType === "script" || sourceType === "module") {
        return sourceType;
    }
    throw new Error("Invalid sourceType.");
}

/**
 * Normalize parserOptions
 * @param {Object} options the parser options to normalize
 * @throws {Error} throw an error if found invalid option.
 * @returns {Object} normalized options
 */
function normalizeOptions(options) {
    const ecmaVersion = normalizeEcmaVersion(options.ecmaVersion);
    const sourceType = normalizeSourceType(options.sourceType);
    const ranges = options.range === true;
    const locations = options.loc === true;

    if (sourceType === "module" && ecmaVersion < 6) {
        throw new Error("sourceType 'module' is not supported when ecmaVersion < 2015. Consider adding `{ ecmaVersion: 2015 }` to the parser options.");
    }
    return Object.assign({}, options, { ecmaVersion, sourceType, ranges, locations });
}

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

/* eslint-disable no-param-reassign*/


const STATE = Symbol("espree's internal state");
const ESPRIMA_FINISH_NODE = Symbol("espree's esprimaFinishNode");


/**
 * Converts an Acorn comment to a Esprima comment.
 * @param {boolean} block True if it's a block comment, false if not.
 * @param {string} text The text of the comment.
 * @param {int} start The index at which the comment starts.
 * @param {int} end The index at which the comment ends.
 * @param {Location} startLoc The location at which the comment starts.
 * @param {Location} endLoc The location at which the comment ends.
 * @returns {Object} The comment object.
 * @private
 */
function convertAcornCommentToEsprimaComment(block, text, start, end, startLoc, endLoc) {
    const comment = {
        type: block ? "Block" : "Line",
        value: text
    };

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

var espree = () => Parser => {
    const tokTypes = Object.assign({}, Parser.acorn.tokTypes);

    if (Parser.acornJsx) {
        Object.assign(tokTypes, Parser.acornJsx.tokTypes);
    }

    return class Espree extends Parser {
        constructor(opts, code) {
            if (typeof opts !== "object" || opts === null) {
                opts = {};
            }
            if (typeof code !== "string" && !(code instanceof String)) {
                code = String(code);
            }

            const options = normalizeOptions(opts);
            const ecmaFeatures = options.ecmaFeatures || {};
            const tokenTranslator =
                options.tokens === true
                    ? new TokenTranslator(tokTypes, code)
                    : null;

            // Initialize acorn parser.
            super({

                // TODO: use {...options} when spread is supported(Node.js >= 8.3.0).
                ecmaVersion: options.ecmaVersion,
                sourceType: options.sourceType,
                ranges: options.ranges,
                locations: options.locations,

                // Truthy value is true for backward compatibility.
                allowReturnOutsideFunction: Boolean(ecmaFeatures.globalReturn),

                // Collect tokens
                onToken: token => {
                    if (tokenTranslator) {

                        // Use `tokens`, `ecmaVersion`, and `jsxAttrValueToken` in the state.
                        tokenTranslator.onToken(token, this[STATE]);
                    }
                    if (token.type !== tokTypes.eof) {
                        this[STATE].lastToken = token;
                    }
                },

                // Collect comments
                onComment: (block, text, start, end, startLoc, endLoc) => {
                    if (this[STATE].comments) {
                        const comment = convertAcornCommentToEsprimaComment(block, text, start, end, startLoc, endLoc);

                        this[STATE].comments.push(comment);
                    }
                }
            }, code);

            // Initialize internal state.
            this[STATE] = {
                tokens: tokenTranslator ? [] : null,
                comments: options.comment === true ? [] : null,
                impliedStrict: ecmaFeatures.impliedStrict === true && this.options.ecmaVersion >= 5,
                ecmaVersion: this.options.ecmaVersion,
                jsxAttrValueToken: false,
                lastToken: null
            };
        }

        tokenize() {
            do {
                this.next();
            } while (this.type !== tokTypes.eof);

            // Consume the final eof token
            this.next();

            const extra = this[STATE];
            const tokens = extra.tokens;

            if (extra.comments) {
                tokens.comments = extra.comments;
            }

            return tokens;
        }

        finishNode(...args) {
            const result = super.finishNode(...args);

            return this[ESPRIMA_FINISH_NODE](result);
        }

        finishNodeAt(...args) {
            const result = super.finishNodeAt(...args);

            return this[ESPRIMA_FINISH_NODE](result);
        }

        parse() {
            const extra = this[STATE];
            const program = super.parse();

            program.sourceType = this.options.sourceType;

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
            if (program.range) {
                program.range[0] = program.body.length ? program.body[0].range[0] : program.range[0];
                program.range[1] = extra.lastToken ? extra.lastToken.range[1] : program.range[1];
            }
            if (program.loc) {
                program.loc.start = program.body.length ? program.body[0].loc.start : program.loc.start;
                program.loc.end = extra.lastToken ? extra.lastToken.loc.end : program.loc.end;
            }

            return program;
        }

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
         * @throws {SyntaxError} A syntax error.
         * @returns {void}
         */
        raise(pos, message) {
            const loc = Parser.acorn.getLineInfo(this.input, pos);
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
         * @throws {SyntaxError} A syntax error.
         * @returns {void}
         */
        raiseRecoverable(pos, message) {
            this.raise(pos, message);
        }

        /**
         * Overwrites the default unexpected method to throw Esprima-style errors.
         * @param {int} pos The position of the error.
         * @throws {SyntaxError} A syntax error.
         * @returns {void}
         */
        unexpected(pos) {
            let message = "Unexpected token";

            if (pos !== null && pos !== void 0) {
                this.pos = pos;

                if (this.options.locations) {
                    while (this.pos < this.lineStart) {
                        this.lineStart = this.input.lastIndexOf("\n", this.lineStart - 2) + 1;
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

        /*
        * Esprima-FB represents JSX strings as tokens called "JSXText", but Acorn-JSX
        * uses regular tt.string without any distinction between this and regular JS
        * strings. As such, we intercept an attempt to read a JSX string and set a flag
        * on extra so that when tokens are converted, the next token will be switched
        * to JSXText via onToken.
        */
        jsx_readString(quote) { // eslint-disable-line camelcase
            const result = super.jsx_readString(quote);

            if (this.type === tokTypes.string) {
                this[STATE].jsxAttrValueToken = true;
            }
            return result;
        }

        /**
         * Performs last-minute Esprima-specific compatibility checks and fixes.
         * @param {ASTNode} result The node to check.
         * @returns {ASTNode} The finished node.
         */
        [ESPRIMA_FINISH_NODE](result) {

            // Acorn doesn't count the opening and closing backticks as part of templates
            // so we have to adjust ranges/locations appropriately.
            if (result.type === "TemplateElement") {

                // additional adjustment needed if ${ is the last token
                const terminalDollarBraceL = this.input.slice(result.end, result.end + 2) === "${";

                if (result.range) {
                    result.range[0]--;
                    result.range[1] += (terminalDollarBraceL ? 2 : 1);
                }

                if (result.loc) {
                    result.loc.start.column--;
                    result.loc.end.column += (terminalDollarBraceL ? 2 : 1);
                }
            }

            if (result.type.includes("Function") && !result.generator) {
                result.generator = false;
            }

            return result;
        }
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
    _regular: null,
    _jsx: null,

    get regular() {
        if (this._regular === null) {
            this._regular = acorn__namespace.Parser.extend(espree());
        }
        return this._regular;
    },

    get jsx() {
        if (this._jsx === null) {
            this._jsx = acorn__namespace.Parser.extend(jsx__default['default'](), espree());
        }
        return this._jsx;
    },

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
 * @param {Object} options Options defining how to tokenize.
 * @returns {Token[]} An array of tokens.
 * @throws {SyntaxError} If the input code is invalid.
 * @private
 */
function tokenize(code, options) {
    const Parser = parsers.get(options);

    // Ensure to collect tokens.
    if (!options || options.tokens !== true) {
        options = Object.assign({}, options, { tokens: true }); // eslint-disable-line no-param-reassign
    }

    return new Parser(options, code).tokenize();
}

//------------------------------------------------------------------------------
// Parser
//------------------------------------------------------------------------------

/**
 * Parses the given code.
 * @param {string} code The code to tokenize.
 * @param {Object} options Options defining how to tokenize.
 * @returns {ASTNode} The "Program" AST node.
 * @throws {SyntaxError} If the input code is invalid.
 */
function parse(code, options) {
    const Parser = parsers.get(options);

    return new Parser(options, code).parse();
}

//------------------------------------------------------------------------------
// Public
//------------------------------------------------------------------------------

const version = version$1;


// Deep copy.
/* istanbul ignore next */
const Syntax = (function() {
    let name,
        types = {};

    if (typeof Object.create === "function") {
        types = Object.create(null);
    }

    for (name in astNodeTypes) {
        if (Object.hasOwnProperty.call(astNodeTypes, name)) {
            types[name] = astNodeTypes[name];
        }
    }

    if (typeof Object.freeze === "function") {
        Object.freeze(types);
    }

    return types;
}());

/* istanbul ignore next */
const VisitorKeys = (function() {
    return visitorKeys__default['default'].KEYS;
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
