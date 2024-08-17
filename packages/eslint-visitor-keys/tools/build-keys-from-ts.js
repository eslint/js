/**
 * @fileoverview Script to build our visitor keys based on TypeScript AST.
 *
 * Uses `get-keys-from-ts.js` to read the files and build the keys and then
 * merges them in alphabetical order of Node type before writing to file.
 *
 * @author Brett Zamir
 */

import fs from "node:fs";
import { alphabetizeKeyInterfaces, getKeysFromTsFile } from "./get-keys-from-ts.js";
import backwardCompatibleKeys from "./backward-compatible-keys.js";

const { promises: { writeFile } } = fs;

(async () => {
    const { keys, tsInterfaceDeclarations } = await getKeysFromTsFile("./node_modules/@types/estree/index.d.ts");
    const { keys: jsxKeys } = await getKeysFromTsFile(
        "./node_modules/@types/estree-jsx/index.d.ts",
        {
            supplementaryDeclarations: tsInterfaceDeclarations
        }
    );

    const mergedKeys = alphabetizeKeyInterfaces({ ...keys, ...jsxKeys, ...backwardCompatibleKeys });


    console.log("keys", mergedKeys);

    writeFile(
        "./lib/visitor-keys.js",
        // eslint-disable-next-line indent -- Readability
`/**
 * @typedef {{ readonly [type: string]: ReadonlyArray<string> }} VisitorKeys
 */

/**
 * @type {VisitorKeys}
 */
const KEYS = ${JSON.stringify(mergedKeys, null, 4).replace(/"(.*?)":/gu, "$1:")};

// Types.
const NODE_TYPES = Object.keys(KEYS);

// Freeze the keys.
for (const type of NODE_TYPES) {
    Object.freeze(KEYS[type]);
}
Object.freeze(KEYS);

export default KEYS;
`
    );

})();
