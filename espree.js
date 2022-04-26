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
/* eslint no-undefined:0, no-use-before-define: 0 */

// ----------------------------------------------------------------------------
// Types exported from file
// ----------------------------------------------------------------------------
/**
 * `jsx.Options` gives us 2 optional properties, so extend it
 *
 * `allowReserved`, `ranges`, `locations`, `allowReturnOutsideFunction`,
 * `onToken`, and `onComment` are as in `acorn.Options`
 *
 * `ecmaVersion` as in `acorn.Options` though optional
 *
 * `sourceType` as in `acorn.Options` but also allows `commonjs`
 *
 * `ecmaFeatures`, `range`, `loc`, `tokens` are not in `acorn.Options`
 *
 * `comment` is not in `acorn.Options` and doesn't err without it, but is used
 * @typedef {{
 *   allowReserved?: boolean,
 *   ranges?: boolean,
 *   locations?: boolean,
 *   allowReturnOutsideFunction?: boolean,
 *   onToken?: ((token: acorn.Token) => any) | acorn.Token[],
 *   onComment?: ((
 *     isBlock: boolean, text: string, start: number, end: number, startLoc?: acorn.Position,
 *     endLoc?: acorn.Position
 *   ) => void) | acorn.Comment[],
 *   ecmaVersion?: acorn.ecmaVersion,
 *   sourceType?: "script"|"module"|"commonjs",
 *   ecmaFeatures?: {
 *     jsx?: boolean,
 *     globalReturn?: boolean,
 *     impliedStrict?: boolean
 *   },
 *   range?: boolean,
 *   loc?: boolean,
 *   tokens?: boolean | null,
 *   comment?: boolean,
 * } & jsx.Options} ParserOptions
 */

// ----------------------------------------------------------------------------
// Local type imports
// ----------------------------------------------------------------------------
/**
 * @local
 * @typedef {import('acorn')} acorn
 * @typedef {typeof import('acorn-jsx').AcornJsxParser} AcornJsxParser
 * @typedef {import('./lib/espree').EnhancedSyntaxError} EnhancedSyntaxError
 * @typedef {typeof import('./lib/espree').EspreeParser} IEspreeParser
 */

import * as acorn from "acorn";
import jsx from "acorn-jsx";
import espree from "./lib/espree.js";
import espreeVersion from "./lib/version.js";
import * as visitorKeys from "eslint-visitor-keys";
import { getLatestEcmaVersion, getSupportedEcmaVersions } from "./lib/options.js";


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
            const espreeParserFactory = espree();

            // Cast the `acorn.Parser` to our own for required properties not specified in *.d.ts
            this._regular = espreeParserFactory(/** @type {AcornJsxParser} */ (acorn.Parser));
        }
        return this._regular;
    },

    /**
     * Returns JSX Parser
     * @returns {IEspreeParser} JSX Acorn parser
     */
    get jsx() {
        if (this._jsx === null) {
            const espreeParserFactory = espree();
            const jsxFactory = jsx();

            // Cast the `acorn.Parser` to our own for required properties not specified in *.d.ts
            this._jsx = espreeParserFactory(jsxFactory(acorn.Parser));
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
 * @returns {acorn.Token[]|null} An array of tokens.
 * @throws {EnhancedSyntaxError} If the input code is invalid.
 * @private
 */
export function tokenize(code, options) {
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
 * @param {ParserOptions} options Options defining how to tokenize.
 * @returns {acorn.Node} The "Program" AST node.
 * @throws {EnhancedSyntaxError} If the input code is invalid.
 */
export function parse(code, options) {
    const Parser = parsers.get(options);

    return new Parser(options, code).parse();
}

//------------------------------------------------------------------------------
// Public
//------------------------------------------------------------------------------

export const version = espreeVersion;

/* istanbul ignore next */
export const VisitorKeys = (function() {
    return visitorKeys.KEYS;
}());

// Derive node types from VisitorKeys
/* istanbul ignore next */
export const Syntax = (function() {
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

export const latestEcmaVersion = getLatestEcmaVersion();

export const supportedEcmaVersions = getSupportedEcmaVersions();
