/**
 * @fileoverview Tests for the visitor keys that pattern visitors use.
 * @author Nicholas C. Zakas
 */

import { expect } from "chai";
import esrecurse from "esrecurse";
import espree from "./util/espree.js";
import { analyze, PatternVisitor } from "../lib/index.js";

/**
 * Parses `var [a] = b;` and wraps the `a` pattern element in a custom node.
 * @returns {Object} The AST.
 */
function createAstWithCustomPatternNode() {
	const ast = espree("var [a] = b;");
	const arrayPattern = ast.body[0].declarations[0].id;

	arrayPattern.elements[0] = {
		type: "TestPattern",
		inner: arrayPattern.elements[0],
	};

	return ast;
}

describe("visitor keys in patterns", () => {
	describe("analyze()", () => {
		it("should use the childVisitorKeys option inside of patterns", () => {
			const scopeManager = analyze(createAstWithCustomPatternNode(), {
				fallback: "none",
				childVisitorKeys: {
					TestPattern: ["inner"],
				},
			});
			const globalScope = scopeManager.scopes[0];

			expect(globalScope.variables.map(variable => variable.name)).to.eql(
				["a"],
			);
		});

		it("should not visit properties of a node in a pattern that are not in the childVisitorKeys option", () => {
			const scopeManager = analyze(createAstWithCustomPatternNode(), {
				fallback: "none",
				childVisitorKeys: {
					TestPattern: [],
				},
			});
			const globalScope = scopeManager.scopes[0];

			expect(globalScope.variables).to.have.length(0);
		});

		it("should use the fallback option inside of patterns", () => {
			expect(() => {
				analyze(createAstWithCustomPatternNode(), { fallback: "none" });
			}).to.throw("Unknown node type TestPattern");

			const scopeManager = analyze(createAstWithCustomPatternNode(), {
				fallback: node =>
					Object.keys(node).filter(key => key !== "type"),
			});
			const globalScope = scopeManager.scopes[0];

			expect(globalScope.variables.map(variable => variable.name)).to.eql(
				["a"],
			);
		});
	});

	describe("PatternVisitor", () => {
		const options = {
			fallback: "none",
			childVisitorKeys: {
				TestPattern: ["inner"],
			},
		};

		/**
		 * Collects the names of the identifiers that a pattern visitor reports.
		 * @param {Object} [keysSource] The visitor to take visitor keys from.
		 * @param {Object} [visitorOptions] The options for the pattern visitor.
		 * @returns {{names: string[]}} The names.
		 */
		function visitCustomPattern(keysSource, visitorOptions) {
			const pattern =
				createAstWithCustomPatternNode().body[0].declarations[0].id;
			const names = [];
			const visitor = new PatternVisitor(
				visitorOptions,
				pattern,
				identifier => {
					names.push(identifier.name);
				},
				keysSource,
			);

			visitor.visit(pattern);

			return { names };
		}

		it("should build its visitor keys from the options when no source visitor is given", () => {
			const { names } = visitCustomPattern(void 0, options);

			expect(names).to.eql(["a"]);
			expect(() => {
				visitCustomPattern(void 0, { fallback: "none" });
			}).to.throw("Unknown node type TestPattern");
		});

		it("should reuse the visitor keys and fallback of the source visitor when one is given", () => {
			const source = new esrecurse.Visitor(null, options);
			const { names } = visitCustomPattern(source, {});

			expect(names).to.eql(["a"]);
		});

		it("should ignore the options when a source visitor is given", () => {
			const source = new esrecurse.Visitor(null, { fallback: "none" });

			expect(() => {
				visitCustomPattern(source, options);
			}).to.throw("Unknown node type TestPattern");
		});
	});
});
