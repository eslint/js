/**
 * @fileoverview Tests for ScopeManager#addGlobals method.
 * @author Milos Djermanovic
 */

import { expect } from "chai";
import espree from "./util/espree.js";
import { analyze } from "../lib/index.js";

describe("ScopeManager#addGlobals", () => {
    it("adds variables to the global scope and closes references from the global scope", () => {
        const ast = espree(`
            foo = bar + bar;
        `);

        const scopeManager = analyze(ast);

        expect(scopeManager.scopes).to.have.length(1);

        const globalScope = scopeManager.scopes[0];

        expect(globalScope.type).to.be.equal("global");

        expect(globalScope.variables).to.have.length(0);
        expect(globalScope.references).to.have.length(3);
        expect(globalScope.references[0].identifier.name).to.be.equal("foo");
        expect(globalScope.references[0].resolved).to.be.null;
        expect(globalScope.references[1].identifier.name).to.be.equal("bar");
        expect(globalScope.references[1].resolved).to.be.null;
        expect(globalScope.references[2].identifier.name).to.be.equal("bar");
        expect(globalScope.references[2].resolved).to.be.null;
        expect(globalScope.references[1]).to.not.be.equal(globalScope.references[2]);
        expect(globalScope.through).to.have.length(3);
        expect(globalScope.through[0]).to.be.equal(globalScope.references[0]);
        expect(globalScope.through[1]).to.be.equal(globalScope.references[1]);
        expect(globalScope.through[2]).to.be.equal(globalScope.references[2]);
        expect(globalScope.implicit.variables).to.have.length(1);
        expect(globalScope.implicit.variables[0].name).to.be.equal("foo");
        expect(globalScope.implicit.set.size).to.be.equal(1);
        expect(globalScope.implicit.set.get("foo")).to.be.equal(globalScope.implicit.variables[0]);
        expect(globalScope.implicit.left).to.have.length(3);
        expect(globalScope.implicit.left[0]).to.be.equal(globalScope.references[0]);
        expect(globalScope.implicit.left[1]).to.be.equal(globalScope.references[1]);
        expect(globalScope.implicit.left[2]).to.be.equal(globalScope.references[2]);

        scopeManager.addGlobals(["foo", "bar"]);

        expect(globalScope.variables).to.have.length(2);
        expect(globalScope.variables[0].name).to.be.equal("foo");
        expect(globalScope.variables[0].scope).to.be.equal(globalScope);
        expect(globalScope.variables[0].defs).to.have.length(0);
        expect(globalScope.variables[0].identifiers).to.have.length(0);
        expect(globalScope.variables[1].name).to.be.equal("bar");
        expect(globalScope.variables[1].scope).to.be.equal(globalScope);
        expect(globalScope.variables[1].defs).to.have.length(0);
        expect(globalScope.variables[1].identifiers).to.have.length(0);
        expect(globalScope.set.size).to.be.equal(2);
        expect(globalScope.set.get("foo")).to.be.equal(globalScope.variables[0]);
        expect(globalScope.set.get("bar")).to.be.equal(globalScope.variables[1]);
        expect(globalScope.references).to.have.length(3);
        expect(globalScope.references[0].identifier.name).to.be.equal("foo");
        expect(globalScope.references[0].resolved).to.be.equal(globalScope.variables[0]);
        expect(globalScope.variables[0].references).to.have.length(1);
        expect(globalScope.variables[0].references[0]).to.be.equal(globalScope.references[0]);
        expect(globalScope.references[1].identifier.name).to.be.equal("bar");
        expect(globalScope.references[1].resolved).to.be.equal(globalScope.variables[1]);
        expect(globalScope.references[2].identifier.name).to.be.equal("bar");
        expect(globalScope.references[2].resolved).to.be.equal(globalScope.variables[1]);
        expect(globalScope.variables[1].references).to.have.length(2);
        expect(globalScope.variables[1].references[0]).to.be.equal(globalScope.references[1]);
        expect(globalScope.variables[1].references[1]).to.be.equal(globalScope.references[2]);
        expect(globalScope.through).to.have.length(0);
        expect(globalScope.implicit.variables).to.have.length(0);
        expect(globalScope.implicit.set.size).to.be.equal(0);
        expect(globalScope.implicit.left).to.have.length(0);
    });

});
