/**
 * @fileoverview Build file
 * @author nzakas
 * @copyright OpenJS Foundation and other contributors, https://openjsf.org/
 * MIT License
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import { fileURLToPath } from "node:url";
import checker from "npm-license";

//------------------------------------------------------------------------------
// Settings
//------------------------------------------------------------------------------

const OPEN_SOURCE_LICENSES = [
	/MIT/u,
	/BSD/u,
	/Apache/u,
	/ISC/u,
	/WTF/u,
	/Public Domain/u,
];

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Returns true if the given dependency's licenses are all permissable for use in OSS
 * @param {Object} dependency object containing the name and licenses of the given dependency
 * @returns {boolean} is permissable dependency
 */
function isPermissible(dependency) {
	const licenses = dependency.licenses;

	if (Array.isArray(licenses)) {
		return licenses.some(license =>
			isPermissible({
				name: dependency.name,
				licenses: license,
			}),
		);
	}

	return OPEN_SOURCE_LICENSES.some(license => license.test(licenses));
}

//------------------------------------------------------------------------------
// License Checking
//------------------------------------------------------------------------------

console.log("Validating licenses");

checker.init(
	{
		start: fileURLToPath(new URL("..", import.meta.url)),
		meta: "./tools/licenses-meta-data.json",
	},
	deps => {
		const impermissible = Object.keys(deps)
			.map(dependency => ({
				name: dependency,
				licenses: deps[dependency].licenses,
			}))
			.filter(dependency => !isPermissible(dependency));

		if (impermissible.length) {
			impermissible.forEach(dependency => {
				console.error(
					"%s license for %s is impermissible.",
					dependency.licenses,
					dependency.name,
				);
			});
			process.exitCode = 1;
		}
	},
);
