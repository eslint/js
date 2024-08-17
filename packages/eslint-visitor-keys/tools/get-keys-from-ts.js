/**
 * @fileoverview Script to build our visitor keys based on TypeScript AST.
 *
 * Uses `get-keys-from-ts.js` to read the files and build the keys and then
 * merges them in alphabetical order of Node type before writing to file.
 *
 * @author Brett Zamir
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import { promises } from "node:fs";
import { parseForESLint } from "@typescript-eslint/parser";
import esquery from "esquery";

import { getKeys, KEYS } from "../lib/index.js";

const { readFile } = promises;

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const knownTypes = new Set([
    "TSUndefinedKeyword",
    "TSNullKeyword",
    "TSUnknownKeyword",
    "TSBooleanKeyword",
    "TSNumberKeyword",
    "TSStringKeyword",
    "TSLiteralType", // E.g., `true`

    // Apparently used for primitives, so exempting
    "TSTypeLiteral", // E.g., `{value: {cooked, raw}}`

    "TSUnionType", // I.e., `|`
    "TSTypeReference"
]);

const notTraversableTypes = new Set([
    "RegExp"
]);

const notTraversableTSTypes = new Set([
    "TSUndefinedKeyword",
    "TSNullKeyword",
    "TSBooleanKeyword",
    "TSNumberKeyword",
    "TSStringKeyword",
    "TSBigIntKeyword",
    "TSLiteralType"
]);

const commentTypes = new Set([
    "Line",
    "Block"
]);

/**
 * Get the literal names out of AST
 * @param {Node} excludedItem Excluded node
 * @returns {string[]} The literal names
 */
function findOmitTypes(excludedItem) {
    if (excludedItem.type === "TSUnionType") {
        return excludedItem.types.map(typeNode => findOmitTypes(typeNode));
    }
    return excludedItem.literal.value;
}

/**
 * Checks whether property should be excluded
 * @param {string} property Property to check
 * @param {string[]} excludedProperties Properties not to allow
 * @returns {boolean} Whether or not to be excluded
 */
function isPropertyExcluded(property, excludedProperties) {
    return excludedProperties && excludedProperties.includes(property);
}

//------------------------------------------------------------------------------
// Public APIs
//------------------------------------------------------------------------------

/**
 * Returns alphabetized keys
 * @param {KeysStrict} initialNodes Initial node list to sort
 * @returns {KeysStrict} The keys
 */
function alphabetizeKeyInterfaces(initialNodes) {

    /**
     * Alphabetize
     * @param {string} typeA The first type to compare
     * @param {string} typeB The second type to compare
     * @returns {1|-1} The sorting index
     */
    function alphabetize([typeA], [typeB]) {
        return typeA < typeB ? -1 : 1;
    }
    const sortedNodeEntries = Object.entries(initialNodes).sort(alphabetize);

    /**
     * Get the key sorter for a given type
     * @param {string} type The type
     * @returns {(string, string) => -1|1} The sorter
     */
    function getKeySorter(type) {
        const sequence = KEYS[type];

        /**
         * Alphabetize
         * @param {string} typeA The first type to compare
         * @param {string} typeB The second type to compare
         * @returns {1|-1} The sorting index
         */
        return function sortKeys(typeA, typeB) {
            if (!sequence) {
                return typeA < typeB ? -1 : 1;
            }

            const idxA = sequence.indexOf(typeA);
            const idxB = sequence.indexOf(typeB);

            if (idxA === -1 && idxB === -1) {
                return typeA < typeB ? -1 : 1;
            }
            if (idxA === -1) {
                return 1;
            }
            if (idxB === -1) {
                return -1;
            }

            return idxA < idxB ? -1 : 1;
        };
    }

    for (const [type, keys] of sortedNodeEntries) {
        keys.sort(getKeySorter(type));
    }

    return Object.fromEntries(sortedNodeEntries);
}

/**
 * Traverse interface `extends`
 * @param {Node} declNode The TS declaration node
 * @param {Function} handler The callback
 * @returns {any[]} Return value of handler
 * @throws {Error} If it finds an unknown type parameter.
 */
function traverseExtends(declNode, handler) {
    const ret = [];

    for (const extension of declNode.extends || []) {
        const { typeParameters, expression } = extension;
        const innerInterfaceName = expression.name;

        let res;

        if (typeParameters) {
            if (innerInterfaceName !== "Omit") {
                throw new Error("Unknown type parameter");
            }

            const [param, ...excludedAST] = typeParameters.params;
            const paramInterfaceName = param.typeName.name;
            const excluded = excludedAST.flatMap(findOmitTypes);

            res = handler({ iName: paramInterfaceName, excluded });
        } else {
            res = handler({ iName: innerInterfaceName });
        }

        ret.push(res);
    }

    return ret;
}

/**
 * Traverse the properties of a declaration node.
 * @param {Node} tsDeclarationNode The declaration node
 * @param {(string) => void} handler Passed the property
 * @returns {any[]} The return values of the callback
 */
function traverseProperties(tsDeclarationNode, handler) {
    const tsPropertySignatures = tsDeclarationNode.body.body;

    const ret = [];

    for (const tsPropertySignature of tsPropertySignatures) {
        const property = tsPropertySignature.key.name;

        const tsAnnotation = tsPropertySignature.typeAnnotation.typeAnnotation;

        const res = handler({ property, tsAnnotation });

        ret.push(res);
    }

    return ret;
}

/**
 * Builds visitor keys based on TypeScript declaration.
 * @param {string} code TypeScript declaration file as code to parse.
 * @param {{supplementaryDeclarations: Node[]}} [options] The options
 * @returns {VisitorKeysExport} The built visitor keys
 * @throws {Error} If it finds an unknown type.
 */
function getKeysFromTs(code, {

    // Todo: Ideally we'd just get these from the import
    supplementaryDeclarations = {
        allTsInterfaceDeclarations: [],
        exportedTsInterfaceDeclarations: [],
        tsTypeDeclarations: []
    }
} = {}) {
    const unrecognizedTSTypeReferences = new Set();
    const unrecognizedTSTypes = new Set();

    const parsedTSDeclaration = parseForESLint(code);

    const allTsInterfaceDeclarations = [...esquery.query(
        parsedTSDeclaration.ast,
        "TSInterfaceDeclaration",
        {

            // TypeScript keys here to find our *.d.ts nodes (not for the ESTree
            //   ones we want)
            visitorKeys: parsedTSDeclaration.visitorKeys
        }
    ), ...supplementaryDeclarations.allTsInterfaceDeclarations];

    const exportedTsInterfaceDeclarations = [...esquery.query(
        parsedTSDeclaration.ast,
        "ExportNamedDeclaration > TSInterfaceDeclaration",
        {

            // TypeScript keys here to find our *.d.ts nodes (not for the ESTree
            //   ones we want)
            visitorKeys: parsedTSDeclaration.visitorKeys
        }
    ), ...supplementaryDeclarations.exportedTsInterfaceDeclarations];

    const tsTypeDeclarations = [...esquery.query(
        parsedTSDeclaration.ast,
        "TSTypeAliasDeclaration",
        {

            // TypeScript keys here to find our *.d.ts nodes (not for the ESTree
            //   ones we want)
            visitorKeys: parsedTSDeclaration.visitorKeys
        }
    ), ...supplementaryDeclarations.tsTypeDeclarations];

    const initialNodes = {};

    /**
     * Finds a TypeScript interface declaration.
     * @param {string} interfaceName The type name.
     * @returns {Node} The interface declaration node
     */
    function findTsInterfaceDeclaration(interfaceName) {
        return allTsInterfaceDeclarations.find(
            innerTsDeclaration => innerTsDeclaration.id.name === interfaceName
        );
    }

    /**
     * Finds a TypeScript type declaration.
     * @param {string} typeName A type name
     * @returns {Node} The type declaration node
     */
    function findTsTypeDeclaration(typeName) {
        return tsTypeDeclarations.find(typeDecl => typeDecl.id.name === typeName);
    }

    /**
     * Whether has a valid (non-comment) type
     * @param {Object} cfg Config object
     * @param {string} cfg.property The property name
     * @param {Node} cfg.tsAnnotation The annotation node
     * @returns {boolean} Whether has a traverseable type
     * @throws {Error} If it finds an unknown type.
     */
    function hasValidType({ property, tsAnnotation }) {
        const tsPropertyType = tsAnnotation.type;

        if (property !== "type") {
            return false;
        }

        switch (tsPropertyType) {
            case "TSLiteralType":
                return typeof tsAnnotation.literal.value === "string" &&
                    !commentTypes.has(tsAnnotation.literal.value);
            case "TSStringKeyword":

                // Ok, but not sufficient
                return false;
            case "TSUnionType":
                return tsAnnotation.types.some(annType => hasValidType({
                    property: "type",
                    tsAnnotation: annType
                }));
            default:
                throw new Error(`Unexpected \`type\` value property type ${tsPropertyType}`);
        }
    }

    /**
     * Whether the interface has a valid type ancestor
     * @param {string} interfaceName The interface to check
     * @returns {void}
     * @throws {Error} If it finds an unknown type.
     */
    function hasValidTypeAncestor(interfaceName) {
        let decl = findTsInterfaceDeclaration(interfaceName);

        if (decl) {
            if (traverseProperties(decl, hasValidType).some(hasValid => hasValid)) {
                return true;
            }
        }

        if (!decl) {
            decl = findTsTypeDeclaration(interfaceName);
            if (decl) {
                if (!decl.typeAnnotation.types) {
                    return notTraversableTSTypes.has(decl.typeAnnotation.type)
                        ? false
                        : hasValidTypeAncestor(decl.typeAnnotation.typeName.name);
                }

                return decl.typeAnnotation.types.some(type => {
                    if (!type.typeName) {

                        // Literal
                        return false;
                    }

                    return hasValidTypeAncestor(type.typeName.name);
                });
            }
        }

        if (!decl) {
            throw new Error(`Type unknown as to traversability: ${interfaceName}`);
        }

        if (traverseExtends(decl, ({ iName, excluded }) => {

            // We don't want to look at this ancestor's `type` if being excluded
            if (excluded && excluded.includes("type")) {
                return false;
            }

            return hasValidTypeAncestor(iName);
        }).some(hasValid => hasValid)) {
            return true;
        }

        return false;
    }

    /**
     * Determine whether the Node is traversable
     * @param {Node} annotationType The annotation type Node
     * @param {string} property The property name
     * @returns {boolean} Whether the node is traversable
     */
    function checkTraversability(annotationType, property) {
        if (
            notTraversableTSTypes.has(annotationType.type)
        ) {
            return false;
        }

        if (annotationType.type === "TSTupleType") {
            return annotationType.elementTypes.some(annType => checkTraversability(annType, property));
        }

        if (annotationType.type === "TSUnionType") {
            return annotationType.types.some(annType => checkTraversability(annType, property));
        }

        if (annotationType.typeName.name === "Array") {
            return annotationType.typeParameters.params.some(annType => checkTraversability(annType, property));
        }

        if (
            notTraversableTypes.has(annotationType.typeName.name)
        ) {
            return false;
        }

        if (hasValidTypeAncestor(annotationType.typeName.name)) {
            return true;
        }

        return false;
    }

    /**
     * Adds a property to a node based on a type declaration node's contents.
     * @param {Node} tsDeclarationNode TypeScript declaration node
     * @param {Node} node The Node on which to build
     * @param {string[]} excludedProperties Excluded properties
     * @returns {void}
     */
    function addPropertyToNodeForDeclaration(tsDeclarationNode, node, excludedProperties) {

        traverseProperties(tsDeclarationNode, ({ property, tsAnnotation }) => {
            if (isPropertyExcluded(property, excludedProperties)) {
                return;
            }

            const tsPropertyType = tsAnnotation.type;

            if (property === "type" && tsPropertyType === "TSLiteralType") {

                // console.log('tsAnnotation', tsAnnotation);
                // node[property] = tsAnnotation.literal.value;
                // return;
            }

            // For sanity-checking
            if (!knownTypes.has(tsPropertyType)) {
                unrecognizedTSTypes.add(tsPropertyType);
                return;
            }

            switch (tsPropertyType) {
                case "TSUnionType":
                    if (tsAnnotation.types.some(annType => checkTraversability(annType, property))) {
                        break;
                    }
                    return;
                case "TSTypeReference": {
                    if (checkTraversability(tsAnnotation, property)) {
                        break;
                    }

                    return;
                } default:
                    return;
            }

            node[property] = null;
        });

        traverseExtends(tsDeclarationNode, ({ iName, excluded }) => {
            const innerTsDeclarationNode = findTsInterfaceDeclaration(iName);

            if (!innerTsDeclarationNode) {
                unrecognizedTSTypeReferences.add(iName);
                return;
            }

            addPropertyToNodeForDeclaration(innerTsDeclarationNode, node, excluded);
        });
    }

    for (const tsDeclarationNode of exportedTsInterfaceDeclarations) {
        const bodyType = tsDeclarationNode.body.body.find(
            prop => prop.key.name === "type"
        );

        const typeName = bodyType && bodyType.typeAnnotation &&
            bodyType.typeAnnotation.typeAnnotation &&
            bodyType.typeAnnotation.typeAnnotation.literal &&
            bodyType.typeAnnotation.typeAnnotation.literal.value;

        if (!typeName) {
            continue;
        }

        const node = {};

        addPropertyToNodeForDeclaration(tsDeclarationNode, node);

        initialNodes[typeName] = [...new Set(getKeys(node), ...(initialNodes[typeName] || []))];
    }

    const nodes = alphabetizeKeyInterfaces(initialNodes);

    if (unrecognizedTSTypes.size) {
        throw new Error(
            "Unhandled TypeScript type; please update the code to " +
            "handle the type or if not relevant, add it to " +
            "`unrecognizedTSTypes`; see\n\n  " +
            `${[...unrecognizedTSTypes].join(", ")}\n`
        );
    }
    if (unrecognizedTSTypeReferences.size) {
        throw new Error(
            "Unhandled TypeScript type reference; please update the code to " +
            "handle the type reference or if not relevant, add it to " +
            "`unrecognizedTSTypeReferences`; see\n\n  " +
            `${[...unrecognizedTSTypeReferences].join(", ")}\n`
        );
    }

    return {
        keys: nodes,
        tsInterfaceDeclarations: {
            allTsInterfaceDeclarations,
            exportedTsInterfaceDeclarations,
            tsTypeDeclarations
        }
    };
}

/**
 * @typedef {{
 *   keys: KeysStrict,
 *   tsInterfaceDeclarations: {
 *     allTsInterfaceDeclarations: Node[],
 *     exportedTsInterfaceDeclarations: Node[]
 *   }
 * }} VisitorKeysExport
 */

/**
 * Builds visitor keys based on TypeScript declaration.
 * @param {string} file TypeScript declaration file to parse.
 * @param {{supplementaryDeclarations: Object<string, Node[]>}} options The options
 * @returns {Promise<VisitorKeysExport>} The built visitor keys
 */
async function getKeysFromTsFile(file, options) {
    const code = await readFile(file);

    return getKeysFromTs(code, options);
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

export { alphabetizeKeyInterfaces, getKeysFromTs, getKeysFromTsFile };
