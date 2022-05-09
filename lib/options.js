/**
 * @fileoverview A collection of methods for processing Espree's options.
 * @author Kai Cataldo
 */

// ----------------------------------------------------------------------------
// Local type imports
// ----------------------------------------------------------------------------
/**
 * @local
 * @typedef {import('../espree').ParserOptions} ParserOptions
 */

// ----------------------------------------------------------------------------
// Local types
// ----------------------------------------------------------------------------
/**
 * @local
 * @typedef {{
 *   ecmaVersion: 10 | 9 | 8 | 7 | 6 | 5 | 3 | 11 | 12 | 13 | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | "latest",
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

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const SUPPORTED_VERSIONS = [
    3,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13
];

/**
 * Get the latest ECMAScript version supported by Espree.
 * @returns {number} The latest ECMAScript version.
 */
export function getLatestEcmaVersion() {
    return SUPPORTED_VERSIONS[SUPPORTED_VERSIONS.length - 1];
}

/**
 * Get the list of ECMAScript versions supported by Espree.
 * @returns {number[]} An array containing the supported ECMAScript versions.
 */
export function getSupportedEcmaVersions() {
    return [...SUPPORTED_VERSIONS];
}

/**
 * Normalize ECMAScript version from the initial config
 * @param {number|"latest"} ecmaVersion ECMAScript version from the initial config
 * @throws {Error} throws an error if the ecmaVersion is invalid.
 * @returns {number} normalized ECMAScript version
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

    if (!SUPPORTED_VERSIONS.includes(version)) {
        throw new Error("Invalid ecmaVersion.");
    }

    return version;
}

/**
 * Normalize sourceType from the initial config
 * @param {"script"|"module"|"commonjs"} sourceType to normalize
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
 * Normalize parserOptions
 * @param {ParserOptions} options the parser options to normalize
 * @throws {Error} throw an error if found invalid option.
 * @returns {NormalizedParserOptions} normalized options
 */
export function normalizeOptions(options) {
    const ecmaVersion = normalizeEcmaVersion(options.ecmaVersion);

    /** @type {"script"|"module"} */
    const sourceType = normalizeSourceType(options.sourceType);
    const ranges = options.range === true;
    const locations = options.loc === true;

    if (ecmaVersion !== 3 && options.allowReserved) {

        // a value of `false` is intentionally allowed here, so a shared config can overwrite it when needed
        throw new Error("`allowReserved` is only supported when ecmaVersion is 3");
    }

    // Note: value in Acorn can also be "never" but we throw in such a case
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
