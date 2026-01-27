/**
 * @fileoverview Tests for ScopeManager#addGlobals method.
 * @author Milos Djermanovic
 */

import { expect } from "chai";
import espree from "./util/espree.js";
import { analyze } from "../lib/index.js";

describe("ScopeManager#addGlobals", () => {
	it("adds variables to the global scope and resolves references from the global scope", () => {
		const ast = espree(`
            foo = bar + bar;
        `);

		const scopeManager = analyze(ast);

		expect(scopeManager.scopes).to.have.length(1);

		const globalScope = scopeManager.scopes[0];

		expect(globalScope.type).to.be.equal("global");

		expect(globalScope.variables).to.have.length(0);
		expect(globalScope.set.size).to.be.equal(0);
		expect(globalScope.references).to.have.length(3);
		expect(globalScope.references[0].identifier.name).to.be.equal("foo");
		expect(globalScope.references[0].from).to.be.equal(globalScope);
		expect(globalScope.references[0].resolved).to.be.null;
		expect(globalScope.references[1].identifier.name).to.be.equal("bar");
		expect(globalScope.references[1].from).to.be.equal(globalScope);
		expect(globalScope.references[1].resolved).to.be.null;
		expect(globalScope.references[2].identifier.name).to.be.equal("bar");
		expect(globalScope.references[2].from).to.be.equal(globalScope);
		expect(globalScope.references[2].resolved).to.be.null;
		expect(globalScope.references[1]).to.not.be.equal(
			globalScope.references[2],
		);
		expect(globalScope.through).to.have.length(3);
		expect(globalScope.through[0]).to.be.equal(globalScope.references[0]);
		expect(globalScope.through[1]).to.be.equal(globalScope.references[1]);
		expect(globalScope.through[2]).to.be.equal(globalScope.references[2]);
		expect(globalScope.implicit.variables).to.have.length(1);
		expect(globalScope.implicit.variables[0].name).to.be.equal("foo");
		expect(globalScope.implicit.variables[0].references).to.have.length(0);
		expect(globalScope.implicit.variables[0].defs).to.have.length(1);
		expect(globalScope.implicit.variables[0].identifiers).to.have.length(1);
		expect(globalScope.implicit.set.size).to.be.equal(1);
		expect(globalScope.implicit.set.get("foo")).to.be.equal(
			globalScope.implicit.variables[0],
		);
		expect(globalScope.implicit.left).to.have.length(3);
		expect(globalScope.implicit.left[0]).to.be.equal(
			globalScope.references[0],
		);
		expect(globalScope.implicit.left[1]).to.be.equal(
			globalScope.references[1],
		);
		expect(globalScope.implicit.left[2]).to.be.equal(
			globalScope.references[2],
		);

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
		expect(globalScope.set.get("foo")).to.be.equal(
			globalScope.variables[0],
		);
		expect(globalScope.set.get("bar")).to.be.equal(
			globalScope.variables[1],
		);
		expect(globalScope.references).to.have.length(3);
		expect(globalScope.references[0].identifier.name).to.be.equal("foo");
		expect(globalScope.references[0].from).to.be.equal(globalScope);
		expect(globalScope.references[0].resolved).to.be.equal(
			globalScope.variables[0],
		);
		expect(globalScope.variables[0].references).to.have.length(1);
		expect(globalScope.variables[0].references[0]).to.be.equal(
			globalScope.references[0],
		);
		expect(globalScope.references[1].identifier.name).to.be.equal("bar");
		expect(globalScope.references[1].from).to.be.equal(globalScope);
		expect(globalScope.references[1].resolved).to.be.equal(
			globalScope.variables[1],
		);
		expect(globalScope.references[2].identifier.name).to.be.equal("bar");
		expect(globalScope.references[2].from).to.be.equal(globalScope);
		expect(globalScope.references[2].resolved).to.be.equal(
			globalScope.variables[1],
		);
		expect(globalScope.variables[1].references).to.have.length(2);
		expect(globalScope.variables[1].references[0]).to.be.equal(
			globalScope.references[1],
		);
		expect(globalScope.variables[1].references[1]).to.be.equal(
			globalScope.references[2],
		);
		expect(globalScope.through).to.have.length(0);
		expect(globalScope.implicit.variables).to.have.length(0);
		expect(globalScope.implicit.set.size).to.be.equal(0);
		expect(globalScope.implicit.left).to.have.length(0);
	});

	it("adds variables to the global scope and resolves references from inner scopes", () => {
		const ast = espree(`
            () => foo = bar + bar;
        `);

		const scopeManager = analyze(ast);

		expect(scopeManager.scopes).to.have.length(2);

		const globalScope = scopeManager.scopes[0];

		expect(globalScope.type).to.be.equal("global");

		const functionScope = scopeManager.scopes[1];

		expect(functionScope.type).to.be.equal("function");

		expect(functionScope.variables).to.have.length(0);
		expect(functionScope.set.size).to.be.equal(0);
		expect(functionScope.references).to.have.length(3);
		expect(functionScope.references[0].identifier.name).to.be.equal("foo");
		expect(functionScope.references[0].from).to.be.equal(functionScope);
		expect(functionScope.references[0].resolved).to.be.null;
		expect(functionScope.references[1].identifier.name).to.be.equal("bar");
		expect(functionScope.references[1].from).to.be.equal(functionScope);
		expect(functionScope.references[1].resolved).to.be.null;
		expect(functionScope.references[2].identifier.name).to.be.equal("bar");
		expect(functionScope.references[2].from).to.be.equal(functionScope);
		expect(functionScope.references[2].resolved).to.be.null;
		expect(functionScope.references[1]).to.not.be.equal(
			functionScope.references[2],
		);
		expect(functionScope.through).to.have.length(3);
		expect(functionScope.through[0]).to.be.equal(
			functionScope.references[0],
		);
		expect(functionScope.through[1]).to.be.equal(
			functionScope.references[1],
		);
		expect(functionScope.through[2]).to.be.equal(
			functionScope.references[2],
		);
		expect(globalScope.variables).to.have.length(0);
		expect(globalScope.set.size).to.be.equal(0);
		expect(globalScope.references).to.have.length(0);
		expect(globalScope.through).to.have.length(3);
		expect(globalScope.through[0]).to.be.equal(functionScope.references[0]);
		expect(globalScope.through[1]).to.be.equal(functionScope.references[1]);
		expect(globalScope.through[2]).to.be.equal(functionScope.references[2]);
		expect(globalScope.implicit.variables).to.have.length(1);
		expect(globalScope.implicit.variables[0].name).to.be.equal("foo");
		expect(globalScope.implicit.variables[0].references).to.have.length(0);
		expect(globalScope.implicit.variables[0].defs).to.have.length(1);
		expect(globalScope.implicit.variables[0].identifiers).to.have.length(1);
		expect(globalScope.implicit.set.size).to.be.equal(1);
		expect(globalScope.implicit.set.get("foo")).to.be.equal(
			globalScope.implicit.variables[0],
		);
		expect(globalScope.implicit.left).to.have.length(3);
		expect(globalScope.implicit.left[0]).to.be.equal(
			functionScope.references[0],
		);
		expect(globalScope.implicit.left[1]).to.be.equal(
			functionScope.references[1],
		);
		expect(globalScope.implicit.left[2]).to.be.equal(
			functionScope.references[2],
		);

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
		expect(globalScope.set.get("foo")).to.be.equal(
			globalScope.variables[0],
		);
		expect(globalScope.set.get("bar")).to.be.equal(
			globalScope.variables[1],
		);
		expect(functionScope.variables).to.have.length(0);
		expect(functionScope.set.size).to.be.equal(0);
		expect(functionScope.references).to.have.length(3);
		expect(functionScope.references[0].identifier.name).to.be.equal("foo");
		expect(functionScope.references[0].from).to.be.equal(functionScope);
		expect(functionScope.references[0].resolved).to.be.equal(
			globalScope.variables[0],
		);
		expect(globalScope.variables[0].references).to.have.length(1);
		expect(globalScope.variables[0].references[0]).to.be.equal(
			functionScope.references[0],
		);
		expect(functionScope.references[1].identifier.name).to.be.equal("bar");
		expect(functionScope.references[1].from).to.be.equal(functionScope);
		expect(functionScope.references[1].resolved).to.be.equal(
			globalScope.variables[1],
		);
		expect(functionScope.references[2].identifier.name).to.be.equal("bar");
		expect(functionScope.references[2].from).to.be.equal(functionScope);
		expect(functionScope.references[2].resolved).to.be.equal(
			globalScope.variables[1],
		);
		expect(functionScope.references[1]).to.not.be.equal(
			functionScope.references[2],
		);
		expect(globalScope.variables[1].references).to.have.length(2);
		expect(globalScope.variables[1].references[0]).to.be.equal(
			functionScope.references[1],
		);
		expect(globalScope.variables[1].references[1]).to.be.equal(
			functionScope.references[2],
		);
		expect(functionScope.through).to.have.length(3);
		expect(functionScope.through[0]).to.be.equal(
			functionScope.references[0],
		);
		expect(functionScope.through[1]).to.be.equal(
			functionScope.references[1],
		);
		expect(functionScope.through[2]).to.be.equal(
			functionScope.references[2],
		);
		expect(globalScope.references).to.have.length(0);
		expect(globalScope.through).to.have.length(0);
		expect(globalScope.implicit.variables).to.have.length(0);
		expect(globalScope.implicit.set.size).to.be.equal(0);
		expect(globalScope.implicit.left).to.have.length(0);
	});

	it("adds variables to the global scope and doesn't affect unrelated references", () => {
		const ast = espree(`
            foo = bar + bar;
        `);

		const scopeManager = analyze(ast);

		expect(scopeManager.scopes).to.have.length(1);

		const globalScope = scopeManager.scopes[0];

		expect(globalScope.type).to.be.equal("global");

		expect(globalScope.variables).to.have.length(0);
		expect(globalScope.set.size).to.be.equal(0);
		expect(globalScope.references).to.have.length(3);
		expect(globalScope.references[0].identifier.name).to.be.equal("foo");
		expect(globalScope.references[0].from).to.be.equal(globalScope);
		expect(globalScope.references[0].resolved).to.be.null;
		expect(globalScope.references[1].identifier.name).to.be.equal("bar");
		expect(globalScope.references[1].from).to.be.equal(globalScope);
		expect(globalScope.references[1].resolved).to.be.null;
		expect(globalScope.references[2].identifier.name).to.be.equal("bar");
		expect(globalScope.references[2].from).to.be.equal(globalScope);
		expect(globalScope.references[2].resolved).to.be.null;
		expect(globalScope.references[1]).to.not.be.equal(
			globalScope.references[2],
		);
		expect(globalScope.through).to.have.length(3);
		expect(globalScope.through[0]).to.be.equal(globalScope.references[0]);
		expect(globalScope.through[1]).to.be.equal(globalScope.references[1]);
		expect(globalScope.through[2]).to.be.equal(globalScope.references[2]);
		expect(globalScope.implicit.variables).to.have.length(1);
		expect(globalScope.implicit.variables[0].name).to.be.equal("foo");
		expect(globalScope.implicit.variables[0].references).to.have.length(0);
		expect(globalScope.implicit.variables[0].defs).to.have.length(1);
		expect(globalScope.implicit.variables[0].identifiers).to.have.length(1);
		expect(globalScope.implicit.set.size).to.be.equal(1);
		expect(globalScope.implicit.set.get("foo")).to.be.equal(
			globalScope.implicit.variables[0],
		);
		expect(globalScope.implicit.left).to.have.length(3);
		expect(globalScope.implicit.left[0]).to.be.equal(
			globalScope.references[0],
		);
		expect(globalScope.implicit.left[1]).to.be.equal(
			globalScope.references[1],
		);
		expect(globalScope.implicit.left[2]).to.be.equal(
			globalScope.references[2],
		);

		scopeManager.addGlobals(["baz", "qux"]);

		expect(globalScope.variables).to.have.length(2);
		expect(globalScope.variables[0].name).to.be.equal("baz");
		expect(globalScope.variables[0].scope).to.be.equal(globalScope);
		expect(globalScope.variables[0].defs).to.have.length(0);
		expect(globalScope.variables[0].identifiers).to.have.length(0);
		expect(globalScope.variables[0].references).to.have.length(0);
		expect(globalScope.variables[1].name).to.be.equal("qux");
		expect(globalScope.variables[1].scope).to.be.equal(globalScope);
		expect(globalScope.variables[1].defs).to.have.length(0);
		expect(globalScope.variables[1].identifiers).to.have.length(0);
		expect(globalScope.variables[1].references).to.have.length(0);
		expect(globalScope.set.size).to.be.equal(2);
		expect(globalScope.set.get("baz")).to.be.equal(
			globalScope.variables[0],
		);
		expect(globalScope.set.get("qux")).to.be.equal(
			globalScope.variables[1],
		);
		expect(globalScope.references).to.have.length(3);
		expect(globalScope.references[0].identifier.name).to.be.equal("foo");
		expect(globalScope.references[0].from).to.be.equal(globalScope);
		expect(globalScope.references[0].resolved).to.be.null;
		expect(globalScope.references[1].identifier.name).to.be.equal("bar");
		expect(globalScope.references[1].from).to.be.equal(globalScope);
		expect(globalScope.references[1].resolved).to.be.null;
		expect(globalScope.references[2].identifier.name).to.be.equal("bar");
		expect(globalScope.references[2].from).to.be.equal(globalScope);
		expect(globalScope.references[2].resolved).to.be.null;
		expect(globalScope.references[1]).to.not.be.equal(
			globalScope.references[2],
		);
		expect(globalScope.through).to.have.length(3);
		expect(globalScope.through[0]).to.be.equal(globalScope.references[0]);
		expect(globalScope.through[1]).to.be.equal(globalScope.references[1]);
		expect(globalScope.through[2]).to.be.equal(globalScope.references[2]);
		expect(globalScope.implicit.variables).to.have.length(1);
		expect(globalScope.implicit.variables[0].name).to.be.equal("foo");
		expect(globalScope.implicit.variables[0].references).to.have.length(0);
		expect(globalScope.implicit.variables[0].defs).to.have.length(1);
		expect(globalScope.implicit.variables[0].identifiers).to.have.length(1);
		expect(globalScope.implicit.set.size).to.be.equal(1);
		expect(globalScope.implicit.set.get("foo")).to.be.equal(
			globalScope.implicit.variables[0],
		);
		expect(globalScope.implicit.left).to.have.length(3);
		expect(globalScope.implicit.left[0]).to.be.equal(
			globalScope.references[0],
		);
		expect(globalScope.implicit.left[1]).to.be.equal(
			globalScope.references[1],
		);
		expect(globalScope.implicit.left[2]).to.be.equal(
			globalScope.references[2],
		);
	});

	it("doesn't affect already declared global variables", () => {
		const ast = espree(`
            let foo = bar + bar;
            var bar;
        `);

		const scopeManager = analyze(ast);

		expect(scopeManager.scopes).to.have.length(1);

		const globalScope = scopeManager.scopes[0];

		expect(globalScope.type).to.be.equal("global");

		expect(globalScope.variables).to.have.length(2);
		expect(globalScope.variables[0].name).to.be.equal("foo");
		expect(globalScope.variables[0].scope).to.be.equal(globalScope);
		expect(globalScope.variables[0].defs).to.have.length(1);
		expect(globalScope.variables[0].identifiers).to.have.length(1);
		expect(globalScope.variables[1].name).to.be.equal("bar");
		expect(globalScope.variables[1].scope).to.be.equal(globalScope);
		expect(globalScope.variables[1].defs).to.have.length(1);
		expect(globalScope.variables[1].identifiers).to.have.length(1);
		expect(globalScope.set.size).to.be.equal(2);
		expect(globalScope.set.get("foo")).to.be.equal(
			globalScope.variables[0],
		);
		expect(globalScope.set.get("bar")).to.be.equal(
			globalScope.variables[1],
		);
		expect(globalScope.references).to.have.length(3);
		expect(globalScope.references[0].identifier.name).to.be.equal("foo");
		expect(globalScope.references[0].from).to.be.equal(globalScope);
		expect(globalScope.references[0].resolved).to.be.equal(
			globalScope.variables[0],
		);
		expect(globalScope.variables[0].references).to.have.length(1);
		expect(globalScope.variables[0].references[0]).to.be.equal(
			globalScope.references[0],
		);
		expect(globalScope.references[1].identifier.name).to.be.equal("bar");
		expect(globalScope.references[1].from).to.be.equal(globalScope);
		expect(globalScope.references[1].resolved).to.be.equal(
			globalScope.variables[1],
		);
		expect(globalScope.references[2].identifier.name).to.be.equal("bar");
		expect(globalScope.references[2].from).to.be.equal(globalScope);
		expect(globalScope.references[2].resolved).to.be.equal(
			globalScope.variables[1],
		);
		expect(globalScope.variables[1].references).to.have.length(2);
		expect(globalScope.variables[1].references[0]).to.be.equal(
			globalScope.references[1],
		);
		expect(globalScope.variables[1].references[1]).to.be.equal(
			globalScope.references[2],
		);
		expect(globalScope.through).to.have.length(0);
		expect(globalScope.implicit.variables).to.have.length(0);
		expect(globalScope.implicit.set.size).to.be.equal(0);
		expect(globalScope.implicit.left).to.have.length(0);

		scopeManager.addGlobals(["foo", "bar"]);

		expect(globalScope.variables).to.have.length(2);
		expect(globalScope.variables[0].name).to.be.equal("foo");
		expect(globalScope.variables[0].scope).to.be.equal(globalScope);
		expect(globalScope.variables[0].defs).to.have.length(1);
		expect(globalScope.variables[0].identifiers).to.have.length(1);
		expect(globalScope.variables[1].name).to.be.equal("bar");
		expect(globalScope.variables[1].scope).to.be.equal(globalScope);
		expect(globalScope.variables[1].defs).to.have.length(1);
		expect(globalScope.variables[1].identifiers).to.have.length(1);
		expect(globalScope.set.size).to.be.equal(2);
		expect(globalScope.set.get("foo")).to.be.equal(
			globalScope.variables[0],
		);
		expect(globalScope.set.get("bar")).to.be.equal(
			globalScope.variables[1],
		);
		expect(globalScope.references).to.have.length(3);
		expect(globalScope.references[0].identifier.name).to.be.equal("foo");
		expect(globalScope.references[0].from).to.be.equal(globalScope);
		expect(globalScope.references[0].resolved).to.be.equal(
			globalScope.variables[0],
		);
		expect(globalScope.variables[0].references).to.have.length(1);
		expect(globalScope.variables[0].references[0]).to.be.equal(
			globalScope.references[0],
		);
		expect(globalScope.references[1].identifier.name).to.be.equal("bar");
		expect(globalScope.references[1].from).to.be.equal(globalScope);
		expect(globalScope.references[1].resolved).to.be.equal(
			globalScope.variables[1],
		);
		expect(globalScope.references[2].identifier.name).to.be.equal("bar");
		expect(globalScope.references[2].from).to.be.equal(globalScope);
		expect(globalScope.references[2].resolved).to.be.equal(
			globalScope.variables[1],
		);
		expect(globalScope.variables[1].references).to.have.length(2);
		expect(globalScope.variables[1].references[0]).to.be.equal(
			globalScope.references[1],
		);
		expect(globalScope.variables[1].references[1]).to.be.equal(
			globalScope.references[2],
		);
		expect(globalScope.through).to.have.length(0);
		expect(globalScope.implicit.variables).to.have.length(0);
		expect(globalScope.implicit.set.size).to.be.equal(0);
		expect(globalScope.implicit.left).to.have.length(0);
	});
});
