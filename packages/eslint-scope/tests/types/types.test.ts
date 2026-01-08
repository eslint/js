/**
 * @fileoverview This file contains code to test the ESLint Scope types.
 * It was initially extracted from the DefinitelyTyped repository.
 */

/*
 * MIT License
 * Copyright (c) Microsoft Corporation.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE
 */

import * as eslint from "eslint";
import * as eslintScope from "eslint-scope";
import * as espree from "espree";
import * as estree from "estree";

const code = `
function example() {
  let x = 1;
  console.log(x);
}
`;

const ast = espree.parse(code, { ecmaVersion: 2022, sourceType: "module" }) as estree.Program;

// $ExpectType ScopeManager
const scopeManager = eslintScope.analyze(
    ast,
    {
        ecmaVersion: 2022,
        sourceType: "module",
        ignoreEval: true,
        nodejsScope: false,
        impliedStrict: false,
        childVisitorKeys: null,
        fallback: "iteration",
        optimistic: false,
        jsx: false,
    } satisfies eslintScope.AnalyzeOptions,
);

// $ExpectType GlobalScope | null
scopeManager.globalScope;
// $ExpectType  Scope<Variable<Reference>, Reference>[]
scopeManager.scopes;

// $ExpectType Scope<Variable<Reference>, Reference> | null
const scope = scopeManager.acquire(ast);

// $ExpectType Scope<Variable<Reference>, Reference> | null
scopeManager.release(ast);

if (scope) {
    ((
        type:
            | "function"
            | "module"
            | "block"
            | "catch"
            | "class"
            | "class-field-initializer"
            | "class-static-block"
            | "for"
            | "function-expression-name"
            | "global"
            | "switch"
            | "with",
    ) => type satisfies typeof scope.type);
    // $ExpectType boolean
    scope.isStrict;
    // $ExpectType Scope<Variable<Reference>, Reference> | null
    scope.upper;
    // $ExpectType Scope<Variable<Reference>, Reference>
    scope.variableScope;
    // $ExpectType Variable<Reference>[]
    scope.variables;
    // $ExpectType Reference[]
    scope.references;
    // $ExpectType Scope<Variable<Reference>, Reference>[]
    scope.childScopes;
    // $ExpectType Node
    scope.block;
    // $ExpectType boolean
    scope.functionExpressionScope;
    // $ExpectType Map<string, Variable<Reference>>
    scope.set;
    // $ExpectType Reference[]
    scope.through;
}

const variable = scope?.variables[0];
if (variable) {
    // $ExpectType string
    variable.name;
    // $ExpectType Scope<Variable<Reference>, Reference>
    variable.scope;
    // $ExpectType Identifier[]
    variable.identifiers;
    // $ExpectType Reference[]
    variable.references;
    // $ExpectType Definition[]
    variable.defs;
}

const reference = scope?.references[0];
if (reference) {
    // $ExpectType Identifier | JSXIdentifier
    reference.identifier;
    // $ExpectType Variable<Reference> | null
    reference.resolved;
    // $ExpectType () => boolean
    reference.isWrite;
    // $ExpectType () => boolean
    reference.isRead;
    // $ExpectType Scope<Variable<Reference>, Reference>
    reference.from;
}

const definition = variable?.defs[0];
if (definition) {
    ((
        type:
            | "CatchClause"
            | "ClassName"
            | "FunctionName"
            | "ImplicitGlobalVariable"
            | "ImportBinding"
            | "Parameter"
            | "Variable",
    ) => type satisfies typeof definition.type);
    // $ExpectType Identifier
    definition.name;
    // $ExpectType ImportDeclaration | VariableDeclaration | null
    definition.parent;
}

// $ExpectType GlobalScope
const globalScope = scopeManager.globalScope!;
// $ExpectType 'global'
globalScope.type;
// $ExpectType Reference[]
globalScope.implicit.left;
// $ExpectType Map<string, Variable<Reference>>
globalScope.implicit.set;
// $ExpectType Variable<Reference>[]
globalScope.implicit.variables;

// $ExpectType ScopeManager
eslintScope.analyze(ast);

const identifier: estree.Identifier = {
    type: "Identifier",
    name: "foo",
};
const jsxIdentifier = {
    type: "JSXIdentifier" as const,
    name: "bar",
};
const definition2 = new eslintScope.Definition(
    "Variable",
    identifier,
    { type: "VariableDeclarator", id: identifier },
    null,
    null,
    "let",
);
((
    type:
        | "CatchClause"
        | "ClassName"
        | "FunctionName"
        | "ImplicitGlobalVariable"
        | "ImportBinding"
        | "Parameter"
        | "Variable",
) => type satisfies typeof definition2.type);
// $ExpectType Identifier
definition2.name;

const blockScope = new eslintScope.BlockScope(scopeManager, scopeManager.globalScope!, ast);
// $ExpectType "block"
blockScope.type;
// $ExpectType false
blockScope.functionExpressionScope;

const catchScope = new eslintScope.CatchScope(scopeManager, scopeManager.globalScope!, ast);
// $ExpectType "catch"
catchScope.type;
// $ExpectType false
catchScope.functionExpressionScope;

const classFieldInitializerScope = new eslintScope.ClassFieldInitializerScope(
    scopeManager,
    scopeManager.globalScope!,
    ast,
);
// $ExpectType "class-field-initializer"
classFieldInitializerScope.type;
// $ExpectType false
classFieldInitializerScope.functionExpressionScope;

const classScope = new eslintScope.ClassScope(scopeManager, scopeManager.globalScope!, ast);
// $ExpectType "class"
classScope.type;
// $ExpectType false
classScope.functionExpressionScope;

const classStaticBlockScope = new eslintScope.ClassStaticBlockScope(
    scopeManager,
    scopeManager.globalScope!,
    ast,
);
// $ExpectType "class-static-block"
classStaticBlockScope.type;
// $ExpectType false
classStaticBlockScope.functionExpressionScope;

const forScope = new eslintScope.ForScope(scopeManager, scopeManager.globalScope!, ast);
// $ExpectType "for"
forScope.type;
// $ExpectType false
forScope.functionExpressionScope;

const functionExpressionNameScope = new eslintScope.FunctionExpressionNameScope(
    scopeManager,
    scopeManager.globalScope!,
    ast,
);
// $ExpectType "function-expression-name"
functionExpressionNameScope.type;
// $ExpectType true
functionExpressionNameScope.functionExpressionScope;

const functionScope = new eslintScope.FunctionScope(scopeManager, scopeManager.globalScope!, ast, false);
// $ExpectType "function"
functionScope.type;
// $ExpectType false
functionScope.functionExpressionScope;

const globalScopeInstance = new eslintScope.GlobalScope(scopeManager, ast);
// $ExpectType "global"
globalScopeInstance.type;
// $ExpectType false
globalScopeInstance.functionExpressionScope;
// $ExpectType { left: Reference[]; set: Map<string, Variable<Reference>>; variables: Variable<Reference>[]; }
globalScopeInstance.implicit;

const moduleScope = new eslintScope.ModuleScope(scopeManager, scopeManager.globalScope!, ast);
// $ExpectType "module"
moduleScope.type;
// $ExpectType false
moduleScope.functionExpressionScope;

const switchScope = new eslintScope.SwitchScope(scopeManager, scopeManager.globalScope!, ast);
// $ExpectType "switch"
switchScope.type;
// $ExpectType false
switchScope.functionExpressionScope;

const withScope = new eslintScope.WithScope(scopeManager, scopeManager.globalScope!, ast);
// $ExpectType "with"
withScope.type;
// $ExpectType false
withScope.functionExpressionScope;

const ref = new eslintScope.Reference(
    Math.random() < 0.5 ? identifier : jsxIdentifier,
    scopeManager.globalScope!,
    0,
    null,
    null,
    false,
    false,
);
// $ExpectType Identifier | JSXIdentifier
ref.identifier;
// $ExpectType Scope<Variable<Reference>, Reference>
ref.from;
// $ExpectType boolean
ref.isRead();
// $ExpectType boolean
ref.isWrite();
// $ExpectType boolean
ref.isReadOnly();
// $ExpectType boolean
ref.isWriteOnly();
// $ExpectType boolean
ref.isReadWrite();

const scopeInstance = new eslintScope.Scope(
    scopeManager,
    "block",
    null,
    ast,
    false,
);
((
    type:
        | "function"
        | "module"
        | "block"
        | "catch"
        | "class"
        | "class-field-initializer"
        | "class-static-block"
        | "for"
        | "function-expression-name"
        | "global"
        | "switch"
        | "with",
) => type satisfies typeof scopeInstance.type);
new eslintScope.Scope(
    scopeManager,
    // @ts-expect-error
    "invalid",
    null,
    ast,
    false,
);
// $ExpectType boolean
scopeInstance.isStrict;
// $ExpectType Scope<Variable<Reference>, Reference> | null
scopeInstance.upper;
// $ExpectType Scope<Variable<Reference>, Reference>
scopeInstance.variableScope;
// $ExpectType Variable<Reference>[]
scopeInstance.variables;
// $ExpectType Reference[]
scopeInstance.references;
// $ExpectType Scope<Variable<Reference>, Reference>[]
scopeInstance.childScopes;
// $ExpectType Node
scopeInstance.block;
// $ExpectType boolean
scopeInstance.functionExpressionScope;
// $ExpectType Map<string, Variable<Reference>>
scopeInstance.set;
// $ExpectType Map<string, Variable<Reference>>
scopeInstance.taints;
// $ExpectType Reference[]
scopeInstance.through;
// $ExpectType boolean
scopeInstance.dynamic;
// $ExpectType boolean
scopeInstance.directCallToEvalScope;
// $ExpectType boolean
scopeInstance.thisFound;
// $ExpectType Reference | null
scopeInstance.resolve(identifier);
// $ExpectType boolean
scopeInstance.isStatic();
// $ExpectType boolean
scopeInstance.isArgumentsMaterialized();
// $ExpectType boolean
scopeInstance.isThisMaterialized();
// $ExpectType boolean
scopeInstance.isUsedName("foo");

const scopeManagerInstance = new eslintScope.ScopeManager({
    ecmaVersion: 2022,
    sourceType: "module",
});
// $ExpectType GlobalScope | null
scopeManagerInstance.globalScope;
// $ExpectType Scope<Variable<Reference>, Reference>[]
scopeManagerInstance.scopes;
// $ExpectType void
scopeManagerInstance.addGlobals(["window", "self"]);
// $ExpectType Scope<Variable<Reference>, Reference> | null
scopeManagerInstance.acquire(ast);
// $ExpectType Scope<Variable<Reference>, Reference>[] | null
scopeManagerInstance.acquireAll(ast);
// $ExpectType Scope<Variable<Reference>, Reference> | null
scopeManagerInstance.release(ast);
// $ExpectType Variable<Reference>[]
scopeManagerInstance.getDeclaredVariables(ast);
// $ExpectType boolean
scopeManagerInstance.isGlobalReturn();
// $ExpectType boolean
scopeManagerInstance.isModule();
// $ExpectType boolean
scopeManagerInstance.isImpliedStrict();
// $ExpectType boolean
scopeManagerInstance.isStrictModeSupported();

const variableInstance = new eslintScope.Variable("foo", scopeInstance);
// $ExpectType string
variableInstance.name;
// $ExpectType Scope<Variable<Reference>, Reference>
variableInstance.scope;
// $ExpectType Identifier[]
variableInstance.identifiers;
// $ExpectType Reference[]
variableInstance.references;
// $ExpectType Definition[]
variableInstance.defs;
// $ExpectType boolean
variableInstance.tainted;
// $ExpectType boolean
variableInstance.stack;

let node: any;
if (eslintScope.PatternVisitor.isPattern(node)) {
    // $ExpectType Identifier | ObjectPattern | ArrayPattern | SpreadElement | RestElement | AssignmentPattern
    node;
}

declare let rootPattern: estree.Pattern;

// // $ExpectType PatternVisitor
const patternVisitor = new eslintScope.PatternVisitor(
    {
        fallback: (node: any) => Object.keys(node).filter((key) => key !== "parent"),
        childVisitorKeys: { TestExpression: ["argument"] },
    },
    rootPattern,
    (pattern, misc) => {
        // $ExpectType Identifier
        pattern;
        // $ExpectType AssignmentPattern[]
        misc.assignments;
        // $ExpectType boolean
        misc.rest;
        // $ExpectType boolean
        misc.topLevel;
    },
);

// $ExpectType Pattern
patternVisitor.rootPattern;

// $ExpectType PatternVisitorCallback
patternVisitor.callback;

// $ExpectType (AssignmentExpression | AssignmentPattern)[]
patternVisitor.assignments;

// $ExpectType Node[]
patternVisitor.rightHandNodes;

// $ExpectType RestElement[]
patternVisitor.restElements;

// $ExpectType (pattern: Identifier) => void
patternVisitor.Identifier;

// $ExpectType (pattern: Property) => void
patternVisitor.Property;

// $ExpectType (pattern: ArrayPattern) => void
patternVisitor.ArrayPattern;

// $ExpectType (pattern: AssignmentPattern) => void
patternVisitor.AssignmentPattern;

// $ExpectType (pattern: RestElement) => void
patternVisitor.RestElement;

// $ExpectType (pattern: MemberExpression) => void
patternVisitor.MemberExpression;

// $ExpectType (pattern: SpreadElement) => void
patternVisitor.SpreadElement;

// $ExpectType (pattern: ArrayExpression) => void
patternVisitor.ArrayExpression;

// $ExpectType (pattern: AssignmentExpression) => void
patternVisitor.AssignmentExpression;

// $ExpectType (pattern: CallExpression) => void
patternVisitor.CallExpression;

(definition: eslintScope.Definition) => definition satisfies eslint.Scope.Definition;

// @ts-ignore -- needs update in ESLint types
(reference: eslintScope.Reference) => reference satisfies eslint.Scope.Reference;

// @ts-ignore -- needs update in ESLint types
(scope: eslintScope.Scope) => scope satisfies eslint.Scope.Scope;

(scopeManager: eslintScope.ScopeManager) => scopeManager satisfies eslint.Scope.ScopeManager;

(variable: eslintScope.Variable) => variable satisfies eslint.Scope.Variable;

// Make sure `Variable` static properties cover all `Definition["type"]` values.
(defType: eslintScope.Definition["type"]) => {
    defType satisfies keyof typeof eslintScope.Variable;
    eslintScope.Variable[defType] satisfies typeof defType;
};

eslintScope.Reference.READ satisfies number;
eslintScope.Reference.WRITE satisfies number;
eslintScope.Reference.RW satisfies number;

// $ExpectType string
eslintScope.version;
