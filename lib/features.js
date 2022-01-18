/**
 * @fileoverview The list of feature flags supported by the parser and their default
 *      settings.
 * @author Nicholas C. Zakas
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

// None!

//------------------------------------------------------------------------------
// Public
//------------------------------------------------------------------------------

/**
 * @typedef {Object} EcmaFeatures
 * @property {boolean} [jsx]
 * @property {boolean} [globalReturn]
 * @property {boolean} [impliedStrict]
 */

/**
 * @type {EcmaFeatures}
 */
export default {

    // React JSX parsing
    jsx: false,

    // allow return statement in global scope
    globalReturn: false,

    // allow implied strict mode
    impliedStrict: false
};
