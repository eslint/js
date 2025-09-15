// -*- coding: utf-8 -*-
//  Copyright (C) 2016 Yusuke Suzuki <utatane.tea@gmail.com>
//
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//    * Redistributions of source code must retain the above copyright
//      notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above copyright
//      notice, this list of conditions and the following disclaimer in the
//      documentation and/or other materials provided with the distribution.
//
//  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
//  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
//  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
//  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
//  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
//  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
//  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
//  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
//  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
//  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

import { expect } from "chai";
import espree from "./util/espree.js";
import { analyze } from "../lib/index.js";

describe("childVisitorKeys option", () => {
    it("should handle as a known node if the childVisitorKeys option was given.", () => {
        const ast = espree(`
            var foo = 0;
        `);

        ast.body[0].declarations[0].init.type = "NumericLiteral";

        // should no error
        analyze(
            ast,
            {
                fallback: "none",
                childVisitorKeys: {
                    NumericLiteral: []
                }
            }
        );
    });

    it("should not visit to properties which are not given.", () => {
        const ast = espree(`
            let foo = bar;
        `);

        ast.body[0].declarations[0].init = {
            type: "TestNode",
            argument: ast.body[0].declarations[0].init
        };

        const result = analyze(
            ast,
            {
                childVisitorKeys: {
                    TestNode: []
                }
            }
        );

        expect(result.scopes).to.have.length(1);
        const globalScope = result.scopes[0];

        // `bar` in TestNode has not been visited.
        expect(globalScope.through).to.have.length(0);
    });

    it("should visit to given properties.", () => {
        const ast = espree(`
            let foo = bar;
        `);

        ast.body[0].declarations[0].init = {
            type: "TestNode",
            argument: ast.body[0].declarations[0].init
        };

        const result = analyze(
            ast,
            {
                childVisitorKeys: {
                    TestNode: ["argument"]
                }
            }
        );

        expect(result.scopes).to.have.length(1);
        const globalScope = result.scopes[0];

        // `bar` in TestNode has been visited.
        expect(globalScope.through).to.have.length(1);
        expect(globalScope.through[0].identifier.name).to.equal("bar");
    });
});

// vim: set sw=4 ts=4 et tw=80 :
