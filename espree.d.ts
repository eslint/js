// Type definitions, useful for typescript users.

import * as estree from 'estree';

// The version of espree that's loaded, like "v3.4.0".
export const version: string;

// Parse the given text as javascript into an abstract syntax tree.
export function parse(text: string, opts?: Options): estree.Program;

// Walk the given text and produce an array of tokens.
export function tokenize(text: string, opts?: Options): Token[];
interface Token {
  type: string;
  value: string;
  start: number;
  end: number;
}

// A map from node type to the properties on that type that contain more nodes.
export const VisitorKeys: {[kind: string]: string[]};

declare const node: estree.Node;
// A map of node types to themselves.
export const Syntax: {[type: string]: typeof node.type};

// Options for parsing.
interface Options {
  // attach range information to each node
  range?: boolean;

  // attach line/column location information to each node
  loc?: boolean;

  // create a top-level comments array containing all comments
  comment?: boolean;

  // attach comments to the closest relevant node as leadingComments and
  // trailingComments
  attachComment?: boolean;

  // create a top-level tokens array containing all tokens
  tokens?: true;

  // set to 3, 5 (default), 6, 7, or 8 to specify the version of ECMAScript
  // syntax you want to use.
  // You can also set to 2015 (same as 6), 2016 (same as 7), or 2017 (same as 8)
  // to use the year-based naming.
  ecmaVersion?: number;

  // specify which type of script you're parsing (script or module, default is script)
  sourceType?: 'script'|'module';

  // specify additional language features
  ecmaFeatures?: {

      // enable JSX parsing
      jsx?: boolean;

      // enable return in global scope
      globalReturn?: boolean;

      // enable implied strict mode (if ecmaVersion >= 5)
      impliedStrict?: boolean;

      // allow experimental object rest/spread
      experimentalObjectRestSpread?: boolean;
  };
}

