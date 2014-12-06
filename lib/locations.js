/**
 * @fileoverview Different types of location information.
 * @author Nicholas C. Zakas
 * @copyright 2014 Nicholas C. Zakas. All rights reserved.
 * @copyright 2011-2013 Ariya Hidayat <ariya.hidayat@gmail.com>
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
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

// None!

//------------------------------------------------------------------------------
// Private
//------------------------------------------------------------------------------

/**
 * Represents a line/column position in source code.
 * @param {int} line The 1-based line number.
 * @param {int} column The 0-based column number.
 * @constructor
 */
function Position(line, column) {

    /**
     * The 1-based line number.
     * @type {int}
     */
    this.line = line;

    /**
     * The 0-based column number.
     * @type {int}
     */
    this.column = column;
}

/**
 * Represents a range of positions in source code.
 * @param {int} startLine The 1-based line that the range starts on.
 * @param {int} startColumn The 0-based column that the range starts on.
 * @param {int} line The 1-based line that the range ends on.
 * @param {int} column The 0-based column that the range ends on.
 * @constructor
 */
function SourceLocation(startLine, startColumn, line, column) {

    /**
     * The position at which the range starts.
     * @type {Position}
     */
    this.start = new Position(startLine, startColumn);

    /**
     * The position at which the range ends.
     * @type {Position}
     */
    this.end = new Position(line, column);
}

//------------------------------------------------------------------------------
// Public
//------------------------------------------------------------------------------

exports.Position = Position;
exports.SourceLocation = SourceLocation;
