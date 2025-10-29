/**
 * @fileoverview A collection of methods for processing Espree's options.
 * @author Kai Cataldo
 */

/**
 * @import { ecmaVersion, ParserOptions } from "../espree.js";
 */

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const SUPPORTED_VERSIONS = /** @type {const} */ ([
    3,
    5,
    6, // 2015
    7, // 2016
    8, // 2017
    9, // 2018
    10, // 2019
    11, // 2020
    12, // 2021
    13, // 2022
    14, // 2023
    15, // 2024
    16, // 2025
    17 // 2026
]);

/**
 * @typedef {typeof SUPPORTED_VERSIONS[number]} normalizedEcmaVersion
 */

/**
 * Get the latest ECMAScript version supported by Espree.
 * @returns {normalizedEcmaVersion} The latest ECMAScript version.
 */
export function getLatestEcmaVersion() {
    return /** @type {normalizedEcmaVersion} */ (SUPPORTED_VERSIONS.at(-1));
}

/**
 * Get the list of ECMAScript versions supported by Espree.
 * @returns {normalizedEcmaVersion[]} An array containing the supported ECMAScript versions.
 */
export function getSupportedEcmaVersions() {
    return [...SUPPORTED_VERSIONS];
}

/**
 * Normalize ECMAScript version from the initial config
 * @param {(number|"latest")} ecmaVersion ECMAScript version from the initial config
 * @throws {Error} throws an error if the ecmaVersion is invalid.
 * @returns {normalizedEcmaVersion} normalized ECMAScript version
 */
function normalizeEcmaVersion(ecmaVersion = 5) {

    let version = ecmaVersion === "latest" ? getLatestEcmaVersion() : ecmaVersion;

    if (typeof version !== "number") {
        throw new Error(`ecmaVersion must be a number or "latest". Received value of type ${typeof ecmaVersion} instead.`);
    }

    // Calculate ECMAScript edition number from official year version starting with
    // ES2015, which corresponds with ES6 (or a difference of 2009).
    if (version >= 2015) {
        version -= 2009;
    }

    if (!SUPPORTED_VERSIONS.includes(

        /** @type {normalizedEcmaVersion} */
        (version)
    )) {
        throw new Error("Invalid ecmaVersion.");
    }

    return /** @type {normalizedEcmaVersion} */ (version);
}

/**
 * Normalize sourceType from the initial config
 * @param {string} sourceType to normalize
 * @throws {Error} throw an error if sourceType is invalid
 * @returns {"script"|"module"} normalized sourceType
 */
function normalizeSourceType(sourceType = "script") {
    if (sourceType === "script" || sourceType === "module") {
        return sourceType;
    }

    if (sourceType === "commonjs") {
        return "script";
    }

    throw new Error("Invalid sourceType.");
}

/**
 * @typedef {{
 *   ecmaVersion: normalizedEcmaVersion,
 *   sourceType: "script"|"module",
 *   range?: boolean,
 *   loc?: boolean,
 *   allowReserved: boolean | "never",
 *   ecmaFeatures?: {
 *     jsx?: boolean,
 *     globalReturn?: boolean,
 *     impliedStrict?: boolean
 *   },
 *   ranges: boolean,
 *   locations: boolean,
 *   allowReturnOutsideFunction: boolean,
 *   tokens?: boolean,
 *   comment?: boolean
 * }} NormalizedParserOptions
 */

/**
 * Normalize parserOptions
 * @param {ParserOptions} options the parser options to normalize
 * @throws {Error} throw an error if found invalid option.
 * @returns {NormalizedParserOptions} normalized options
 */
export function normalizeOptions(options) {
    const ecmaVersion = normalizeEcmaVersion(options.ecmaVersion);
    const sourceType = normalizeSourceType(options.sourceType);
    const ranges = options.range === true;
    const locations = options.loc === true;

    if (ecmaVersion !== 3 && options.allowReserved) {

        // a value of `false` is intentionally allowed here, so a shared config can overwrite it when needed
        throw new Error("`allowReserved` is only supported when ecmaVersion is 3");
    }
    if (typeof options.allowReserved !== "undefined" && typeof options.allowReserved !== "boolean") {
        throw new Error("`allowReserved`, when present, must be `true` or `false`");
    }
    const allowReserved = ecmaVersion === 3 ? (options.allowReserved || "never") : false;
    const ecmaFeatures = options.ecmaFeatures || {};
    const allowReturnOutsideFunction = options.sourceType === "commonjs" ||
        Boolean(ecmaFeatures.globalReturn);

    if (sourceType === "module" && ecmaVersion < 6) {
        throw new Error("sourceType 'module' is not supported when ecmaVersion < 2015. Consider adding `{ ecmaVersion: 2015 }` to the parser options.");
    }

    return Object.assign({}, options, {
        ecmaVersion,
        sourceType,
        ranges,
        locations,
        allowReserved,
        allowReturnOutsideFunction
    });
}
