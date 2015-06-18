/*
Copyright (C) 2015 Ingvar Stepanyan <me@rreverser.com>
Copyright (C) 2015 Fred K. Schott <fkschott@gmail.com>
Copyright (C) 2013 Ariya Hidayat <ariya.hidayat@gmail.com>
Copyright (C) 2013 Thaddee Tyl <thaddee.tyl@gmail.com>
Copyright (C) 2013 Mathias Bynens <mathias@qiwi.be>
Copyright (C) 2012 Ariya Hidayat <ariya.hidayat@gmail.com>
Copyright (C) 2012 Mathias Bynens <mathias@qiwi.be>
Copyright (C) 2012 Joost-Wim Boekesteijn <joost-wim@boekesteijn.nl>
Copyright (C) 2012 Kris Kowal <kris.kowal@cixar.com>
Copyright (C) 2012 Yusuke Suzuki <utatane.tea@gmail.com>
Copyright (C) 2012 Arpad Borsos <arpad.borsos@googlemail.com>
Copyright (C) 2011 Ariya Hidayat <ariya.hidayat@gmail.com>

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright
  notice, this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright
  notice, this list of conditions and the following disclaimer in the
  documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
/*eslint no-undefined:0, no-use-before-define: 0*/

"use strict";

var tokenInfo = require("./lib/token-info"),
    astNodeTypes = require("./lib/ast-node-types"),
    commentAttachment = require("./lib/comment-attachment"),
    acorn = require("acorn-jsx");

var lookahead,
    extra,
    lastToken;


function resetExtra() {
    extra = {
        tokenize: false,
        tokens: [],
        range: false,
        loc: false,
        comment: false,
        comments: [],
        tolerant: false,
        errors: [],
        ecmaFeatures: {}
    };
}



var tt = acorn.tokTypes,
    Parser = acorn.Parser,
    pp = Parser.prototype,
    getLineInfo = acorn.getLineInfo;


function isValidNode(node) {
    var ecma = extra.ecmaFeatures;

    switch (node.type) {
        case "VariableDeclaration":
            return node.kind === "var" || ecma.blockBindings;

        case "ObjectPattern":
        case "ArrayPattern":
            return ecma.destructuring;

        case "AssignmentPattern":
            // TODO: enhance analysis for separate options
            return ecma.destructuring || ecma.defaultParams;

        case "RestElement":
            // TODO: enhance analysis for separate options
            return ecma.destructuring || ecma.restParams;

        case "ForOfStatement":
            return ecma.forOf;

        case "Property":
            if (node.computed && !ecma.objectLiteralComputedProperties) {
                return false;
            }
            if (node.method && !ecma.objectLiteralShorthandMethods) {
                return false;
            }
            if (node.shorthand && !ecma.objectLiteralShorthandProperties) {
                return false;
            }
            // TODO: analyse for objectLiteralDuplicateProperties: false in ES6
            return true;

        case "FunctionExpression":
        case "FunctionDeclaration":
            if (node.generator && !ecma.generators) {
                return false;
            }
            return true;

        case "YieldExpression":
            return ecma.generators;

        case "SpreadElement":
            return ecma.spread;

        case "ClassDeclaration":
        case "ClassExpression":
            return ecma.classes;

        case "Super":
            // TODO: enhance analysis for separate options
            return ecma.classes || ecma.superInFunctions;

        case "ImportDeclaration":
        case "ExportNamedDeclaration":
        case "ExportDefaultDeclaration":
        case "ExportAllDeclaration":
            return ecma.modules;

        default:
            return true;
    }
}

function esprimaFinishNode(result) {
    // ensure that parsed node was allowed through ecmaFeatures
    if (!isValidNode(result)) {
        this.unexpected(result.start);
    }

    // hide acorn-specific properties from comparison
    // but leave for internal needs:
    Object.defineProperties(result, {
        start: { enumerable: false },
        end: { enumerable: false }
    });

    if (extra.attachComment) {
        commentAttachment.processComment(result);
    }

    if (result.type.indexOf("Function") > -1 && !result.generator) {
        result.generator = false;
    }

    return result;
}

function isValidToken(parser) {
    var ecma = extra.ecmaFeatures;
    var type = parser.type;

    switch (type) {
        case tt.arrow:
            return ecma.arrowFunctions;

        case tt.num:
            switch (parser.input.substr(parser.start, 2).toLowerCase()) {
                case "0b":
                    return ecma.binaryLiterals;

                case "0o":
                    return ecma.octalLiterals;

                default:
                    return true;
            }
            break;

        case tt.regexp:
            var flags = parser.value.flags;
            if (flags.indexOf("y") >= 0 && !ecma.regexYFlag) {
                return false;
            }
            if (flags.indexOf("u") >= 0 && !ecma.regexUFlag) {
                return false;
            }
            return true;

        case tt.ellipsis:
            return ecma.restParams || ecma.spread;

        case tt.backQuote:
        case tt.template:
        case tt.dollarBraceL:
            return ecma.templateStrings;

        case tt.jsxName:
        case tt.jsxText:
        case tt.jsxTagStart:
        case tt.jsxTagEnd:
            return ecma.jsx;

        default:
            return true;
    }
}

pp.extend("finishNode", function(finishNode) {
    return function () {
        var result = finishNode.apply(this, arguments);
        return esprimaFinishNode.call(this, result);
    };
});

pp.extend("finishNodeAt", function(finishNodeAt) {
    return function() {
        var result = finishNodeAt.apply(this, arguments);
        return esprimaFinishNode.call(this, result);
    };
});

pp.extend("next", function(next) {
    return function () {
        if (!isValidToken(this)) {
            this.unexpected();
        }
        return next.apply(this, arguments);
    };
});

pp.raise = function(pos, message) {
    var loc = getLineInfo(this.input, pos);
    var err = new SyntaxError(message);
    err.index = pos;
    err.lineNumber = loc.line;
    err.column = loc.column + 1; // acorn uses 0-based columns
    throw err;
};

pp.unexpected = function(pos) {
    var message = "Unexpected token";
    if (pos != null) {
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
        message += " " + this.input.slice(this.start, this.end);
    }
    this.raise(this.start, message);
};

//------------------------------------------------------------------------------
// Tokenizer
//------------------------------------------------------------------------------

function tokenize(code, options) {
    var toString,
        tokens;

    toString = String;
    if (typeof code !== "string" && !(code instanceof String)) {
        code = toString(code);
    }

    lookahead = null;

    // Options matching.
    options = options || {};

    var acornOptions = {
        ecmaVersion: 6
    };

    resetExtra();

    // Of course we collect tokens here.
    options.tokens = true;
    extra.tokenize = true;

    extra.range = (typeof options.range === "boolean") && options.range;
    acornOptions.ranges = extra.range;

    extra.loc = (typeof options.loc === "boolean") && options.loc;
    acornOptions.locations = extra.loc;

    extra.comment = typeof options.comment === "boolean" && options.comment;

    if (extra.comment) {
        acornOptions.onComment = function() {
            var comment = convertAcornCommentToEsprimaComment.apply(this, arguments);
            extra.comments.push(comment);
        };
    }

    extra.tolerant = typeof options.tolerant === "boolean" && options.tolerant;

    // apply parsing flags
    if (options.ecmaFeatures && typeof options.ecmaFeatures === "object") {
        extra.ecmaFeatures = options.ecmaFeatures;
    }

    try {
        var tokenizer = acorn.tokenizer(code, acornOptions);

        while ((lookahead = tokenizer.getToken()).type !== tt.eof) {
            try {
                lookahead = convertAcornTokenToEsprimaToken(lookahead, code);
                extra.tokens.push(lookahead);
            } catch (lexError) {
                if (extra.errors) {
                    extra.errors.push(lexError);
                    // We have to break on the first error
                    // to avoid infinite loops.
                    break;
                } else {
                    throw lexError;
                }
            }
        }

        // filterTokenLocation();
        tokens = extra.tokens;

        if (extra.comment) {
            tokens.comments = extra.comments;
        }
        if (extra.tolerant) {
            tokens.errors = extra.errors;
        }
    } catch (e) {
        throw e;
    }
    return tokens;
}

//------------------------------------------------------------------------------
// Parser
//------------------------------------------------------------------------------

function convertAcornTokenToEsprimaToken(token, code) {

    var type = token.type;

    if (type === tt.name) {
        token.type = "Identifier";
    } else if (type === tt.semi || type === tt.comma ||
             type === tt.parenL || type === tt.parenR ||
             type === tt.braceL || type === tt.braceR ||
             type === tt.dot || type === tt.bracketL ||
             type === tt.bracketR || type === tt.ellipsis ||
             type === tt.arrow || type === tt.jsxTagStart ||
             type === tt.jsxTagEnd || type.binop ||
             type.isAssign) {
        token.type = "Punctuator";
        token.value = code.slice(token.start, token.end);
    } else if (type === tt.jsxName) {
        token.type = "JSXIdentifier";
    } else if (type.keyword) {
        token.type = "Keyword";
    } else if (type === tt.num) {
        token.type = "Numeric";
        token.value = String(token.value);
    } else if (type === tt.string) {
        token.type = "String";
        token.value = JSON.stringify(token.value);
    } else if (type === tt.regexp) {
        token.type = "RegularExpression";
        var value = token.value;
        token.regex = {
            flags: value.flags,
            pattern: value.pattern
        };
        token.value = "/" + value.pattern + "/" + value.flags;
    } else if (type === tt.dollarBraceL || type === tt.backQuote ||
             type === tt.template) {
        token.type = "Template";
        token.value = code.slice(token.start, token.end);
    }

    delete token.start;
    delete token.end;

    return token;
}

function convertAcornCommentToEsprimaComment(block, text, start, end, startLoc, endLoc) {
    var comment = {
        type: block ? "Block" : "Line",
        value: text
    };

    if (typeof start === "number") {
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

function parse(code, options) {

    var program,
        toString = String,
        acornOptions = {
            ecmaVersion: 5
        };

    if (typeof code !== "string" && !(code instanceof String)) {
        code = toString(code);
    }

    resetExtra();
    commentAttachment.reset();

    if (typeof options !== "undefined") {
        extra.range = (typeof options.range === "boolean") && options.range;
        extra.loc = (typeof options.loc === "boolean") && options.loc;
        extra.attachComment = (typeof options.attachComment === "boolean") && options.attachComment;

        if (extra.loc && options.source !== null && options.source !== undefined) {
            extra.source = toString(options.source);
        }

        if (typeof options.tokens === "boolean" && options.tokens) {
            extra.tokens = [];
        }
        if (typeof options.comment === "boolean" && options.comment) {
            extra.comments = [];
        }
        if (typeof options.tolerant === "boolean" && options.tolerant) {
            extra.errors = [];
        }
        if (extra.attachComment) {
            extra.range = true;
            extra.comments = [];
            commentAttachment.reset();
        }

        if (options.sourceType === "module") {
            extra.ecmaFeatures = {
                arrowFunctions: true,
                blockBindings: true,
                regexUFlag: true,
                regexYFlag: true,
                templateStrings: true,
                binaryLiterals: true,
                octalLiterals: true,
                unicodeCodePointEscapes: true,
                superInFunctions: true,
                defaultParams: true,
                restParams: true,
                forOf: true,
                objectLiteralComputedProperties: true,
                objectLiteralShorthandMethods: true,
                objectLiteralShorthandProperties: true,
                objectLiteralDuplicateProperties: true,
                generators: true,
                destructuring: true,
                classes: true,
                modules: true
            };
        }

        // apply parsing flags after sourceType to allow overriding
        if (options.ecmaFeatures && typeof options.ecmaFeatures === "object") {

            var flags = Object.keys(options.ecmaFeatures);

            // if it's a module, augment the ecmaFeatures
            flags.forEach(function(key) {
                var value = extra.ecmaFeatures[key] = options.ecmaFeatures[key];

                if (value) {
                    switch (key) {
                        case "globalReturn":
                            acornOptions.allowReturnOutsideFunction = true;
                            break;

                        default:
                            acornOptions.ecmaVersion = 6;
                    }
                }
            });

        }

        acornOptions.onToken = function(token) {
            if (token.type === tt.eof) {
                return;
            }

            if (extra.tokens) {
                extra.tokens.push(convertAcornTokenToEsprimaToken(token, code));
            }

            lastToken = token;
        };

        if (extra.attachComment || extra.comment) {
            acornOptions.onComment = function() {
                var comment = convertAcornCommentToEsprimaComment.apply(this, arguments);
                extra.comments.push(comment);

                if (extra.attachComment) {
                    commentAttachment.addComment(comment);
                }
            };
        }

        if (extra.range) {
            acornOptions.ranges = true;
        }

        if (extra.loc) {
            acornOptions.locations = true;
        }

        if (extra.ecmaFeatures.jsx) {
            if (extra.ecmaFeatures.spread !== false) {
                extra.ecmaFeatures.spread = true;
            }
            acornOptions.plugins = { jsx: true };
        }
    }

    program = acorn.parse(code, acornOptions);
    program.sourceType = extra.ecmaFeatures.modules ? "module" : "script";

    if (extra.comment || extra.attachComment) {
        program.comments = extra.comments;
    }

    if (extra.tokenize) {
        program.tokens = extra.tokens;
    }

    // adjust closing position of program to match Esprima's
    if (program.range) {
        program.range[1] = lastToken.range[1];
    }

    if (program.loc) {
        program.loc.end = lastToken.loc.end;
    }

    return program;
}

//------------------------------------------------------------------------------
// Public
//------------------------------------------------------------------------------

exports.version = require("./package.json").version;

exports.tokenize = tokenize;

exports.parse = parse;

// Deep copy.
/* istanbul ignore next */
exports.Syntax = (function () {
    var name, types = {};

    if (typeof Object.create === "function") {
        types = Object.create(null);
    }

    for (name in astNodeTypes) {
        if (astNodeTypes.hasOwnProperty(name)) {
            types[name] = astNodeTypes[name];
        }
    }

    if (typeof Object.freeze === "function") {
        Object.freeze(types);
    }

    return types;
}());
