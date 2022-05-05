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
 * @typedef {import('../lib/espree').EnhancedTokTypes} EnhancedTokTypes
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
 *   type: string;
 * } & BaseEsprimaToken} EsprimaToken
 *
 * @typedef {{
 *   type: string | acorn.TokenType;
 * } & BaseEsprimaToken} EsprimaTokenFlexible
 *
 * @typedef {{
 *   jsxAttrValueToken: boolean;
 *   ecmaVersion: acorn.ecmaVersion;
 * }} ExtraNoTokens
 *
 * @typedef {{
 *   tokens: EsprimaTokenFlexible[]
 * } & ExtraNoTokens} Extra
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
     * Translates a single Esprima token to a single Acorn token. This may be
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

//------------------------------------------------------------------------------
// Public
//------------------------------------------------------------------------------

export default TokenTranslator;
