/**
 * @fileoverview This file provides a utility function `assert` that checks whether a given condition is true
 * and throws an error with a specified message if the condition is false.
 * @author Amaresh S M
 */

/**
 * Asserts that a condition is true. If the condition is false, an error is thrown with the provided message.
 *
 * @param {boolean} condition - The condition that is being asserted. If `false`, an error will be thrown.
 * @param {string} [message="Assertion failed."] - The error message that will be thrown if the condition is false.
 * @returns {void}
 * @throws {Error} Throws an error if the condition is not met.
 */
 export function assert(condition, message = "Assertion failed.") {
    if (!condition) {
        throw new Error(message);
    }
}
