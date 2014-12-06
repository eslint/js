# Espree

Espree is an actively-maintained fork Esprima, a high performance,
standard-compliant [ECMAScript](http://www.ecma-international.org/publications/standards/Ecma-262.htm)
parser written in ECMAScript (also popularly known as
[JavaScript](http://en.wikipedia.org/wiki/JavaScript)).

### Features

- Full support for ECMAScript 5.1 ([ECMA-262](http://www.ecma-international.org/publications/standards/Ecma-262.htm))
- Sensible syntax tree format compatible with Mozilla
[Parser AST](https://developer.mozilla.org/en/SpiderMonkey/Parser_API)
- Optional tracking of syntax node location (index-based and line-column)
- Heavily tested (> 650 unit tests) with full code coverage

## Plans

Espree starts as a fork of Esprima v1.2.2, the last stable published released of Esprima before work on ECMAScript 6 began. Espree's first version is therefore v1.2.2 and is 100% compatible with Esprima v1.2.2 as  drop-in replacement. The version number will be incremented based on [semantic versioning](http://semver.org/) as features and bug fixes are added.

The immediate plans are:

1. Move away from giant files and move towards small, modular files that are easier to manage.
1. Move towards CommonJS for all files and use browserify to create browser bundles.
1. Support ECMAScript version filtering, allowing users to specify which version the parser should work in (similar to Acorn's `ecmaVersion` property).
1. Add tests to track comment attachment.
1. Add features well-thought-out features that are useful for tools developers.
1. Add full support for ECMAScript 6.
1. Add optional parsing of JSX.

## Esprima Compatibility Going Forward

The primary goal is to produce the exact same AST structure as Esprima and Acorn, and that takes precedence over anything else. (The AST structure being the SpiderMonkey Parser API with JSX extensions.) Separate from that, Espree may deviate from what Esprima outputs in terms of where and how comments are attached, as well as what additional information is available on AST nodes. That is to say, Espree may add more things to the AST nodes than Esprima does but the overall AST structure produced will be the same.

## Frequent and Incremental Releases

Espree will not do giant releases. Releases will happen periodically as changes are made and incremental releases will be made towards larger goals. For instance, we will not have one big release for ECMAScript 6 support. Instead, we will implement ECMAScript 6, piece-by-piece, hiding those pieces behind an `ecmaVersion` property that you can opt-out of if you don't want to use those features.

## Contributing

Issues and pull requests will be triaged and responded to as quickly as possible. We operate under the [ESLint Contributor Guidelines](http://eslint.org/docs/developer-guide/contributing.html), so please be sure to read them before contributing. If you're not sure where to dig in, check out the [issues](https://github.com/eslint/espree/issues).

Espree is licensed under a permissive BSD-3 clause license.




