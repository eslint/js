v1.12.1 - March 21, 2015

* 1.12.1 (Nicholas C. Zakas)
* Fix: Disallow octals in template strings (fixes #96) (Nicholas C. Zakas)
* Fix: Template string parsing (fixes #95) (Nicholas C. Zakas)
* Fix: shorthand properties named get or set (fixes #100) (Brandon Mills)
* Fix: bad error in parsing invalid class setter (fixes #98) (Marsup)

v1.12.0 - March 14, 2015

* 1.12.0 (Nicholas C. Zakas)
* Fix: Update broken tests (Nicholas C. Zakas)
* New: Add sourceType to Program node (fixes #93) (Nicholas C. Zakas)
* Allow spread in more places (fixes #89) (Nicholas C. Zakas)
* Fix: Deeply nested template literals (fixes #86) (Nicholas C. Zakas)
* Fix: Allow super in classes by default (fixes #87) (Nicholas C. Zakas)
* Fix: generator methods in classes (fixes #85) (Jamund Ferguson)
* Remove XJS note from Esprima-FB incompatibilities (Joe Lencioni)

v1.11.0 - March 7, 2015

* 1.11.0 (Nicholas C. Zakas)
* Fix: Don't allow default export class by mistake (fixes #82) (Nicholas C. Zakas)
* Fix: Export default function should be FunctionDeclaration (fixes #81) (Nicholas C. Zakas)
* Fix: Ensure class declarations must have IDs outside of exports (refs #72) (Nicholas C. Zakas)
* Fix: export class expression support (refs #72) (Jamund Ferguson)
* Update: Add tests for sourceType=module (refs #72) (Nicholas C. Zakas)
* Fix: Class name should be id (fixes #78) (Nicholas C. Zakas)
* Fix: disallow import/export in functions (refs #72) (Jamund Ferguson)
* Test: strict mode enforced in modules (refs #72) (Jamund Ferguson)
* New: Add modules feature flag (refs #72) (Nicholas C. Zakas)
* merging upstream and solving conflicts for PR #43 (Caridy Patino)
* New: Add ES6 module support (fixes #35) (Caridy Patino)
* Update: Add TryStatement.handler (fixes #69) (Brandon Mills)
* Fix: Destructured Defaults (fixes #56) (Jamund Ferguson)
* Update: Refactor out comment attachment logic (Nicholas C. Zakas)

v1.10.0 - March 1, 2015

* 1.10.0 (Nicholas C. Zakas)
* New: Support ES6 classes (refs #10) (Nicholas C. Zakas)
* Docs: Update README.md (Jamund Ferguson)

v1.9.1 - February 21, 2015

* 1.9.1 (Nicholas C. Zakas)
* Fix: Allow let/const in switchcase (fixes #54) (Nicholas C. Zakas)

v1.9.0 - February 21, 2015

* 1.9.0 (Nicholas C. Zakas)
* Fix: Extend property method range and loc to include params (fixes #36) (Brandon Mills)
* New: spread operator (refs #10) (Jamund Ferguson)
* Fix: incorrectly parsed arrow fragment (refs #58) (Jamund Ferguson)
* New: Rest Parameter (refs: #10) (Jamund Ferguson)
* New: Destructuring (refs #10) (Jamund Ferguson)

v1.8.1 - February 7, 2015

* 1.8.1 (Nicholas C. Zakas)
* Build: Add Node.js 0.12 testing (Nicholas C. Zakas)
* Fix: Actuall fix tokenization issue with templates (fixes #44) (Nicholas C. Zakas)

v1.8.0 - February 6, 2015

* 1.8.0 (Nicholas C. Zakas)
* New: Support for Arrow Functions (refs #10) (Jamund Ferguson)
* New: Allow super references in functions (refs #10) (Nicholas C. Zakas)
* Update create-test.js (Jamund Ferguson)
* Fix: Tokenization for template strings (fixes #44) (Nicholas C. Zakas)
* New: Allow return in global scope (fixes #46) (Nicholas C. Zakas)

v1.7.1 - January 23, 2015

* 1.7.1 (Nicholas C. Zakas)
* Fix: When ecmaFeatures.forOf is true, check for operater is "undefined" when match keyword is "in" (fixes #39) (Peter Chanthamynavong)

v1.7.0 - January 23, 2015

* 1.7.0 (Nicholas C. Zakas)
* New: Add support for template strings (FredKSchott)
* New: Add support for default parameters (refs #10) (Jamund Ferguson)
* New: Add support for unicode code point escape sequences (FredKSchott)

v1.6.0 - January 10, 2015

* 1.6.0 (Nicholas C. Zakas)
* Update: Make comment attachment tests look at whole AST (Nicholas C. Zakas)
* Docs: Update README to reflect feature flags (Nicholas C. Zakas)
* Docs: Add a couple more FAQs to README (Nicholas C. Zakas)
* New: Add support for duplicate object literal properties (FredKSchott)
* New: Implement generators (refs #10) (Nicholas C. Zakas)

v1.5.0 - December 29, 2014

* 1.5.0 (Nicholas C. Zakas)
* Docs: Update README with compat info (Nicholas C. Zakas)
* Update: Add regex parsing test (Nicholas C. Zakas)
* Update: s/XJS/JSX/g (Nicholas C. Zakas)
* Build: Update release script (Nicholas C. Zakas)
* Update: Move SyntaxTree to ast-node-factory.js (FredKSchott)
* New: Add JSX parsing (fixes #26) (Nicholas C. Zakas)
* Update: Switch location marker logic (fixes #15) (Nicholas C. Zakas)
* 1.4.0 (Nicholas C. Zakas)

v1.4.0 - December 23, 2014

* 1.4.0 (Nicholas C. Zakas)
* Fix: Parsing issues with property methods (fixes #21) (Nicholas C. Zakas)
* New: Add support for shorthand properties (refs #10) (Nicholas C. Zakas)
* New: Add support for object literal method shorthand (refs #10) (Nicholas C. Zakas)
* Fix: Ensure comments are attached for return (fixes #2) (Nicholas C. Zakas)
* Build: Ensure CHANGELOG.md is committed on release (Nicholas C. Zakas)
* 1.3.1 (Nicholas C. Zakas)

v1.3.1 - December 22, 2014

* 1.3.1 (Nicholas C. Zakas)
* Fix: Add all files to npm package (fixes #17) (Nicholas C. Zakas)
* Update: Move Messages to separate file (Nicholas C. Zakas)
* Docs: Removed unnecessary comment (Nicholas C. Zakas)
* 1.3.0 (Nicholas C. Zakas)

v1.3.0 - December 21, 2014

* 1.3.0 (Nicholas C. Zakas)
* Build: Add release scripts (Nicholas C. Zakas)
* New: Add computed object literal properties (refs #10) (Nicholas C. Zakas)
* Build: Fix commands in Makefile.js (Nicholas C. Zakas)
* Docs: Add FAQ to README (Nicholas C. Zakas)
* Fix: Don't allow let/const in for loops (fixes #14) (Nicholas C. Zakas)
* New: Support for-of loops (refs #10) (Nicholas C. Zakas)
* Update: Change .ast.js files to .result.js files (Nicholas C. Zakas)
* New: Support ES6 octal literals (Nicholas C. Zakas)
* New: Ability to parse binary literals (Nicholas C. Zakas)
* Update: More tests for regex u flag (Nicholas C. Zakas)
* Update: Switch to using ecmaFeatures (Nicholas C. Zakas)
* Update: Add comment attachment tests (Nicholas C. Zakas)
* Update README.md (Jamund Ferguson)
* New: Add u and y regex flags (refs #10) (Nicholas C. Zakas)
* Update: Cleanup tests (Nicholas C. Zakas)
* New: Add ecmascript flag (fixes #7) (Nicholas C. Zakas)
* Docs: Update README with build commands (Nicholas C. Zakas)
* Update: Move some things around (Nicholas C. Zakas)
* Update: Read version number from package.json (Nicholas C. Zakas)
* Update: Move AST node types to separate file (Nicholas C. Zakas)
* Update: Remove duplicate file (Nicholas C. Zakas)
* Update: Move token information to a separate file (Nicholas C. Zakas)
* Update: Bring in Makefile.js for linting and browserify (Nicholas C. Zakas)
* Update: Fix ESLint warnings, remove check-version (Nicholas C. Zakas)
* Update: Move Position and SourceLocation to separate file (Nicholas C. Zakas)
* Update: Move syntax checks into separate file (Nicholas C. Zakas)
* Update: Remove UMD format (Nicholas C. Zakas)
* Docs: Update README with more info (Nicholas C. Zakas)
* Update: remove npm-debug.log from tracked files (Brandon Mills)
* Docs: Remove redundant 'features' in readme (Matthias Oßwald)
* Docs: Fix a link to Wikipedia (Ryuichi Okumura)
* Update: Split parsing tests into smaller files (Nicholas C. Zakas)
* Update: Normalize values in tests (Nicholas C. Zakas)
* Update: CommonJSify test file (Nicholas C. Zakas)
