/**
 * @fileoverview Tool to prepare JavaScript (+JSDoc) for TypeScript, inlining
 * `@local`-marked `@typedef`'s, and building a faux class for `@export`-marked
 * classes so the type can be exported out of a given file.
 * @author Brett Zamir
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import js2tsAssistant from "@es-joy/js2ts-assistant";

// ----------------------------------------------------------------------------
// Modify output
// ----------------------------------------------------------------------------

await js2tsAssistant({
    customClassHandling({
        ast, builders, superClassName
    }) {

        // Since we're not tracking types as in using a
        //  proper TS transformer (like `ttypescript`?),
        //  we hack this one for now
        if (superClassName === "Parser") {

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
            return "acorn.Parser";
        }
        return null;
    },
    customParamHandling({
        tag, identifier, typeCast
    }) {

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
    }
});
