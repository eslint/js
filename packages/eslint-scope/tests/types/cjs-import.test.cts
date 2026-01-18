/**
 * @fileoverview CommonJS type import test for ESLint Scope package.
 * @author Francesco Trotta
 */

//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------

// Make sure the named exports exist.
import {
    Definition,
    PatternVisitor,
    Reference,
    Referencer,
    ScopeManager,
    Scope,
    Variable,
    analyze,
    version,
} from "eslint-scope";
