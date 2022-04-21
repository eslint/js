import { readFile, writeFile, mkdir } from "fs/promises";
import { join, dirname } from "path";

import esquery from "esquery";
import { globby } from "globby";

import * as jsdocEslintParser from "@es-joy/jsdoc-eslint-parser/typescript.js";
import {
    estreeToString, jsdocVisitorKeys, jsdocTypeVisitorKeys
} from "@es-joy/jsdoccomment";

import * as escodegen from "@es-joy/escodegen";

import { builders } from "ast-types";

const {
    _preprocess_include: include,
    _preprocess_exclude: ignoreFiles
} = JSON.parse(await readFile("tsconfig.json"));

const files = await globby(include, {
    ignoreFiles
});

await Promise.all(files.map(async file => {
    const contents = await readFile(file, "utf8");

    const tree = jsdocEslintParser.parseForESLint(contents, {
        mode: "typescript",
        throwOnTypeParsingErrors: true
    });

    const { visitorKeys, ast } = tree;

    const typedefSiblingsOfLocal = "JsdocTag[tag=local] ~ JsdocTag[tag=typedef]";
    const typedefs = esquery.query(ast, typedefSiblingsOfLocal, {
        visitorKeys
    });

    // Replace type shorthands with our typedef long form
    typedefs.forEach(({ name, parsedType }) => {
        const nameNodes = esquery.query(ast, `JsdocTypeName[value=${name}]`, {
            visitorKeys
        });

        // Rather than go to the trouble of splicing from a child whose index
        //   we have to work to find, just copy the keys to the existing object
        nameNodes.forEach(nameNode => {
            Object.keys(nameNode).forEach(prop => {
                if (prop === "parent") {
                    return;
                }
                delete nameNode[prop];
            });
            Object.entries(parsedType).forEach(([prop, val]) => {
                if (prop === "parent") {
                    return;
                }
                nameNode[prop] = val;
            });
        });
    });

    // Remove local typedefs from AST
    for (const typedef of typedefs) {
        const { tags } = typedef.parent;
        const idx = tags.indexOf(typedef);

        tags.splice(idx, 1);
    }

    // Now remove the empty locals
    const emptyLocals = esquery.query(ast, "JsdocBlock:has(JsdocTag:not([tag!=local]))", {
        visitorKeys
    });

    for (const emptyLocal of emptyLocals) {
        const idx = ast.jsdocBlocks.indexOf(emptyLocal);

        ast.jsdocBlocks.splice(idx, 1);
    }

    const exportBlocks = esquery.query(ast, "JsdocBlock:has(JsdocTag[tag=export])", {
        visitorKeys
    });

    /**
     * Build a JSDoc type cast.
     * @param {Object} extraInfo Extra type info
     * @returns {JsdocBlock} The JsdocBlock object
     */
    function typeCast(extraInfo) {
        return {
            type: "JsdocBlock",
            initial: "",
            delimiter: "/**",
            postDelimiter: "",
            terminal: "*/",
            descriptionLines: [],
            tags: [
                {
                    type: "JsdocTag",
                    tag: "type",
                    postTag: " ",
                    descriptionLines: [],
                    ...extraInfo,
                    postType: "",
                    initial: "",
                    delimiter: "",
                    postDelimiter: " "
                }
            ]
        };
    }

    for (const exportBlock of exportBlocks) {
        switch (exportBlock.parent.type) {
            case "ReturnStatement": {
                const parent = exportBlock.parent.argument;

                switch (parent.type) {
                    case "ClassExpression": {
                        const classBody = parent.body.body.map(({
                            type, kind, key, value, computed,
                            static: statik
                        }) => {
                            if (computed) {
                                return null;
                            }
                            const { jsdoc } = value.parent;

                            switch (type) {
                                case "MethodDefinition": {
                                    const returns = jsdoc.tags.find(
                                        tag => tag.tag === "returns"
                                    );
                                    const objectExpressionOrOther = !returns || returns.rawType === "void" ||
                                        kind === "constructor"
                                        ? builders.identifier("undefined")
                                        : builders.objectExpression([]);

                                    if (kind !== "constructor") {
                                        objectExpressionOrOther.jsdoc = typeCast({
                                            parsedType: returns.parsedType
                                        });
                                    }

                                    const paramNames = jsdoc.tags.filter(
                                        tag => tag.tag === "param"
                                    ).map(
                                        // eslint-disable-next-line arrow-body-style
                                        tag => {
                                            const identifier = builders.identifier(tag.name);

                                            // Hack in some needed type casts
                                            if (tag.name === "opts") {
                                                identifier.jsdoc = typeCast({
                                                    typeLines: [
                                                        {
                                                            type: "JsdocTypeLine",
                                                            initial: "",
                                                            delimiter: "",
                                                            postDelimiter: "",
                                                            rawType: "acorn.Options"
                                                        }
                                                    ],
                                                    rawType: "acorn.Options"
                                                });
                                            } else if (tag.name === "code") {
                                                identifier.jsdoc = typeCast({
                                                    typeLines: [
                                                        {
                                                            type: "JsdocTypeLine",
                                                            initial: "",
                                                            delimiter: "",
                                                            postDelimiter: "",
                                                            rawType: "string"
                                                        }
                                                    ],
                                                    rawType: "string"
                                                });
                                            }
                                            return identifier;
                                        }
                                    );
                                    const functionExpression = builders.functionExpression(
                                        null,

                                        paramNames,

                                        builders.blockStatement([
                                            kind === "constructor"
                                                ? builders.expressionStatement(
                                                    builders.callExpression(
                                                        builders.super(),
                                                        paramNames
                                                    )
                                                )
                                                : builders.returnStatement(
                                                    objectExpressionOrOther
                                                )
                                        ])
                                    );

                                    const methodDefinition = builders.methodDefinition(
                                        kind,
                                        key,
                                        functionExpression,
                                        statik
                                    );

                                    methodDefinition.jsdoc = jsdoc;

                                    return methodDefinition;
                                } default:
                                    throw new Error(`Unknown ${type}`);
                            }
                        }).filter(Boolean);

                        let superClass = parent.superClass.name;

                        // Since we're not tracking types as in using a
                        //  proper TS transformer (like `ttypescript`?),
                        //  we hack this one for now
                        if (parent.superClass.name === "Parser") {

                            // Make import available
                            ast.body.unshift(
                                builders.importDeclaration(
                                    [
                                        builders.importNamespaceSpecifier(
                                            builders.identifier("acorn")
                                        )
                                    ],
                                    builders.literal("acorn"),
                                    "value"
                                )
                            );
                            superClass = "acorn.Parser";
                        }

                        const classDeclaration = builders.classDeclaration(
                            builders.identifier(parent.id.name),
                            builders.classBody(classBody),

                            builders.identifier(superClass)
                        );

                        ast.body.push(builders.exportNamedDeclaration(
                            classDeclaration
                        ));

                        break;
                    } default:
                        throw new Error(`Unsupported type ${parent.type}`);
                }

                break;
            } default:
                throw new Error("Currently unsupported AST export structure");
        }
    }

    const generated = escodegen.generate(ast, {
        sourceContent: contents,
        codegenFactory() {
            const { CodeGenerator } = escodegen;

            Object.keys(jsdocVisitorKeys).forEach(method => {
                CodeGenerator.Statement[method] =
            CodeGenerator.prototype[method] = node =>

                // We have to add our own line break, as `jsdoccomment` (nor
                //   `comment-parser`) keep track of trailing content
                ((
                    node.endLine ? "\n" : ""
                ) + estreeToString(node) +
                (node.endLine ? `\n${node.initial}` : " "));
            });

            Object.keys(jsdocTypeVisitorKeys).forEach(method => {
                CodeGenerator.Statement[method] =
            CodeGenerator.prototype[method] = node =>
                estreeToString(node);
            });

            return new CodeGenerator();
        }
    });

    const targetFile = join("tmp", file);

    await mkdir(dirname(targetFile), { recursive: true });
    await writeFile(targetFile, generated);
}));
