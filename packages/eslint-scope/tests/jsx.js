/**
 * @fileoverview Tests for JSX reference tracking.
 * @author Nicholas C. Zakas
 */

import { expect } from "chai";
import espree from "./util/espree.js";
import { analyze } from "../lib/index.js";

describe("References:", () => {

    describe("JSX References:", () => {
        it("should treat JSX identifiers as references", () => {
            const ast = espree(`
            const MyComponent = () => <div/>;
            const element = <MyComponent />;
        `, "script", true);

            const scopeManager = analyze(ast, { ecmaVersion: 6, jsx: true });
            const scope = scopeManager.scopes[0];

            expect(scope.variables).to.have.length(2); // MyComponent, element
            expect(scope.references).to.have.length(3); // MyComponent def, element def, MyComponent use

            const myComponentRef = scope.references[2];

            expect(myComponentRef.identifier.name).to.equal("MyComponent");
            expect(myComponentRef.isRead()).to.be.true;
            expect(myComponentRef.resolved).to.equal(scope.variables[0]);
        });

        it("no JSX equivalent: should treat JSX identifiers as references", () => {
            const ast = espree(`
            const MyComponent = () => "<div/>";
            const element = MyComponent;
        `, "script", true);

            const scopeManager = analyze(ast, { ecmaVersion: 6 });
            const scope = scopeManager.scopes[0];

            expect(scope.variables).to.have.length(2); // MyComponent, element
            expect(scope.references).to.have.length(3); // MyComponent def, element def, MyComponent use

            const myComponentRef = scope.references[2];

            expect(myComponentRef.identifier.name).to.equal("MyComponent");
            expect(myComponentRef.isRead()).to.be.true;
            expect(myComponentRef.resolved).to.equal(scope.variables[0]);
        });

        it("should handle JSX attributes as references with JSX enabled", () => {
            const ast = espree(`
            const value = "test";
            const MyComponent = () => <div attr={value}/>;
        `, "script", true);

            const scopeManager = analyze(ast, { ecmaVersion: 6, jsx: true });
            const scope = scopeManager.scopes[0];

            expect(scope.variables).to.have.length(2); // value, MyComponent
            expect(scope.references).to.have.length(2); // value def, MyComponent def
            expect(scope.variables[0].references).to.have.length(2); // value def, value use
            expect(scope.through).to.have.length(0); // attr should not be a reference

            const valueRef = scope.references[0];

            expect(valueRef.identifier.name).to.equal("value");
            expect(valueRef.isWrite()).to.be.true;
            expect(valueRef.resolved).to.equal(scope.variables[0]);
        });

        it("should handle JSX attributes as references with JSX disabled", () => {
            const ast = espree(`
            const value = "test";
            const MyComponent = () => <div attr={value}/>;
        `, "script", true);

            const scopeManager = analyze(ast, { ecmaVersion: 6, jsx: false });
            const scope = scopeManager.scopes[0];

            expect(scope.variables).to.have.length(2); // value, MyComponent
            expect(scope.references).to.have.length(2); // value def, MyComponent def
            expect(scope.variables[0].references).to.have.length(2); // value def, value use
            expect(scope.through).to.have.length(0); // attr should not be a reference

            const valueRef = scope.references[0];

            expect(valueRef.identifier.name).to.equal("value");
            expect(valueRef.isWrite()).to.be.true;
            expect(valueRef.resolved).to.equal(scope.variables[0]);
        });

        it("should handle nested JSX component references", () => {
            const ast = espree(`
            const Child = () => <div/>;
            const Parent = () => (
                <div>
                    <Child/>
                    <Child/>
                </div>
            );
        `, "script", true);

            const scopeManager = analyze(ast, { ecmaVersion: 6, jsx: true });
            const scope = scopeManager.scopes[0];

            expect(scope.variables).to.have.length(2); // Child, Parent
            expect(scope.references).to.have.length(2); // Child, Parent
            expect(scope.variables[0].references).to.have.length(3); // Child def, Child use x2

            const childRefs = scope.references.filter(ref => ref.identifier.name === "Child");

            expect(childRefs).to.have.length(1); // 1 def + 2 uses
            childRefs.slice(1).forEach(ref => {
                expect(ref.isRead()).to.be.true;
                expect(ref.resolved).to.equal(scope.variables[0]);
            });
        });

        it("should handle JSX fragment references", () => {
            const ast = espree(`
            const MyComponent = () => (
                <>
                    <div/>
                    <div/>
                </>
            );
        `, "script", true);

            const scopeManager = analyze(ast, { ecmaVersion: 6, jsx: true });
            const scope = scopeManager.scopes[0];

            expect(scope.variables).to.have.length(1); // MyComponent
            expect(scope.references).to.have.length(1); // MyComponent
        });

        it("should handle JSX fragments with component children", () => {
            const ast = espree(`
            const Child = () => <div/>;
            const Parent = () => (
                <>
                    <Child/>
                    <Child/>
                </>
            );
        `, "script", true);

            const scopeManager = analyze(ast, { ecmaVersion: 6, jsx: true });
            const scope = scopeManager.scopes[0];

            expect(scope.variables).to.have.length(2); // Child, Parent
            expect(scope.references).to.have.length(2); // Child, Parent
            expect(scope.variables[0].references).to.have.length(3); // Child def, Child use x2

            const childRefs = scope.references.filter(ref => ref.identifier.name === "Child");

            expect(childRefs).to.have.length(1); // 1 def + 2 uses
            childRefs.slice(1).forEach(ref => {
                expect(ref.isRead()).to.be.true;
                expect(ref.resolved).to.equal(scope.variables[0]);
            });
        });

        it("no JSX equivalent: should handle JSX fragments with component children", () => {
            const ast = espree(`
            const Child = () => <div/>;
            const Parent = () => (
                [
                    Child,
                    Child
                ]
            );
        `, "script", true);

            const scopeManager = analyze(ast, { ecmaVersion: 6 });
            const scope = scopeManager.scopes[0];

            expect(scope.variables).to.have.length(2); // Child, Parent
            expect(scope.references).to.have.length(2); // Child, Parent
            expect(scope.variables[0].references).to.have.length(3); // Child def, Child use x2

            const childRefs = scope.references.filter(ref => ref.identifier.name === "Child");

            expect(childRefs).to.have.length(1); // 1 def + 2 uses
            childRefs.slice(1).forEach(ref => {
                expect(ref.isRead()).to.be.true;
                expect(ref.resolved).to.equal(scope.variables[0]);
            });
        });

        it("should handle JSX spread attributes", () => {
            const ast = espree(`
                const props = { attr: "value" };
                const MyComponent = () => <div {...props}/>;
            `, "script", true);

            const scopeManager = analyze(ast, { ecmaVersion: 6, jsx: true });
            const scope = scopeManager.scopes[0];

            expect(scope.variables).to.have.length(2); // props, MyComponent
            expect(scope.references).to.have.length(2); // props def, MyComponent def
            expect(scope.variables[0].references).to.have.length(2); // props def, props use

            const propsRef = scope.references[0];

            expect(propsRef.identifier.name).to.equal("props");
            expect(propsRef.isWrite()).to.be.true;
            expect(propsRef.resolved).to.equal(scope.variables[0]);
        });

        it("no JSX equivalent: should handle JSX spread attributes", () => {
            const ast = espree(`
                const props = { attr: "value" };
                const MyComponent = () => [...props];
            `, "script", true);

            const scopeManager = analyze(ast, { ecmaVersion: 6 });
            const scope = scopeManager.scopes[0];

            expect(scope.variables).to.have.length(2); // props, MyComponent
            expect(scope.references).to.have.length(2); // props def, MyComponent def
            expect(scope.variables[0].references).to.have.length(2); // props def, props use

            const propsRef = scope.references[0];

            expect(propsRef.identifier.name).to.equal("props");
            expect(propsRef.isWrite()).to.be.true;
            expect(propsRef.resolved).to.equal(scope.variables[0]);
        });

        it("should handle JSX spread attributes with destructuring", () => {
            const ast = espree(`
                const props = { attr: "value" };
                const MyComponent = ({ attr }) => <div {...props}/>;
            `, "script", true);

            const scopeManager = analyze(ast, { ecmaVersion: 6, jsx: true });
            const scope = scopeManager.scopes[0];

            expect(scope.variables).to.have.length(2); // props, MyComponent
            expect(scope.references).to.have.length(2); // props def, MyComponent def
            expect(scope.variables[0].references).to.have.length(2); // props def, props use

            const propsRef = scope.references[0];

            expect(propsRef.identifier.name).to.equal("props");
            expect(propsRef.isWrite()).to.be.true;
            expect(propsRef.resolved).to.equal(scope.variables[0]);
        });

        it("no JSX equivalent: should handle JSX spread attributes with destructuring", () => {
            const ast = espree(`
                const props = { attr: "value" };
                const MyComponent = ({ attr }) => [...props];
            `, "script", true);

            const scopeManager = analyze(ast, { ecmaVersion: 6 });
            const scope = scopeManager.scopes[0];

            expect(scope.variables).to.have.length(2); // props, MyComponent
            expect(scope.references).to.have.length(2); // props def, MyComponent def
            expect(scope.variables[0].references).to.have.length(2); // props def, props use

            const propsRef = scope.references[0];

            expect(propsRef.identifier.name).to.equal("props");
            expect(propsRef.isWrite()).to.be.true;
            expect(propsRef.resolved).to.equal(scope.variables[0]);
        });

        it("should handle JSX <obj.prop/> syntax", () => {
            const ast = espree(`
                const obj = { prop: () => <div/> };
                const element = <obj.prop />;
            `, "script", true);

            const scopeManager = analyze(ast, { ecmaVersion: 6, jsx: true });
            const scope = scopeManager.scopes[0];

            expect(scope.variables).to.have.length(2); // obj, element
            expect(scope.references).to.have.length(3); // obj def, element def, obj.prop use

            const objRef = scope.references[2];

            expect(objRef.identifier.name).to.equal("obj");
            expect(objRef.isRead()).to.be.true;
            expect(objRef.resolved).to.equal(scope.variables[0]);
        });

        it("no JSX equivalent: should handle JSX <obj.prop/> syntax", () => {
            const ast = espree(`
                const obj = { prop: () => <div/> };
                const element = obj.prop;
            `, "script", true);

            const scopeManager = analyze(ast, { ecmaVersion: 6 });
            const scope = scopeManager.scopes[0];

            expect(scope.variables).to.have.length(2); // obj, element
            expect(scope.references).to.have.length(3); // obj def, element def, obj.prop use

            const objRef = scope.references[2];

            expect(objRef.identifier.name).to.equal("obj");
            expect(objRef.isRead()).to.be.true;
            expect(objRef.resolved).to.equal(scope.variables[0]);
        });

    });


});
