/**
 * @fileoverview Tests for checking that our build tool can retrieve keys out of TypeScript AST.
 * @author Brett Zamir
 */

import { diffString } from "json-diff";
import { expect } from "chai";
import { alphabetizeKeyInterfaces, getKeysFromTsFile } from "../../tools/get-keys-from-ts.js";
import { KEYS } from "../../lib/index.js";
import backwardCompatibleKeys from "../../tools/backward-compatible-keys.js";

describe("getKeysFromTsFile", () => {
    it("gets keys", async () => {
        const { keys, tsInterfaceDeclarations } = await getKeysFromTsFile(
            "../../node_modules/@types/estree/index.d.ts"
        );
        const { keys: jsxKeys } = await getKeysFromTsFile(
            "../../node_modules/@types/estree-jsx/index.d.ts",
            {
                supplementaryDeclarations: tsInterfaceDeclarations
            }
        );

        const actual = alphabetizeKeyInterfaces({ ...keys, ...jsxKeys, ...backwardCompatibleKeys });

        const expected = KEYS;

        // eslint-disable-next-line no-console -- Mocha's may drop diffs so show with json-diff
        console.log("JSON Diffs:", diffString(actual, expected) || "(none)");

        expect(actual).to.deep.equal(expected);
    });

    it("gets keys minus explicitly omitted ones", async () => {
        const { keys: actual } = await getKeysFromTsFile(
            "./tests/lib/fixtures/union-omit.d.ts"
        );

        const expected = {
            AnotherStatement: [
                "anotherToIgnore"
            ],
            IgnoredStatement: [],
            StaticBlock: []
        };

        expect(actual).to.deep.equal(expected);
    });

    it("sorts keys alphabetically if new", async () => {
        const { keys: actual } = await getKeysFromTsFile(
            "./tests/lib/fixtures/new-keys.d.ts"
        );

        const expected = {
            NewFangledExpression: [
                "down",
                "left",
                "right",
                "up"
            ]
        };

        expect(actual).to.deep.equal(expected);
    });

    it("sorts extra keys at end alphabetically", async () => {
        const { keys: actual } = await getKeysFromTsFile(
            "./tests/lib/fixtures/new-keys-on-old.d.ts"
        );

        const expected = {
            AssignmentExpression: [
                "left",
                "right",
                "down",
                "up"
            ]
        };

        expect(actual).to.deep.equal(expected);
    });

    it("sorts extra keys at end alphabetically (other order)", async () => {
        const { keys: actual } = await getKeysFromTsFile(
            "./tests/lib/fixtures/new-keys-on-old-other-order.d.ts"
        );

        const expected = {
            AssignmentExpression: [
                "left",
                "right",
                "down",
                "up"
            ]
        };

        expect(actual).to.deep.equal(expected);
    });

    it("sorts extra keys at end alphabetically (switched order)", async () => {
        const { keys: actual } = await getKeysFromTsFile(
            "./tests/lib/fixtures/new-keys-on-old-order-switched.d.ts"
        );

        const expected = {
            AssignmentExpression: [
                "left",
                "right",
                "down",
                "up"
            ]
        };

        expect(actual).to.deep.equal(expected);
    });

    it("throws with unhandled TS type reference", async () => {
        let error;

        try {
            await getKeysFromTsFile(
                "./tests/lib/fixtures/bad-type-reference.d.ts"
            );
        } catch (err) {
            error = err;
        }

        expect(error.message).to.contain("Unhandled TypeScript type reference");
    });

    it("throws with unhandled extends TS type reference", async () => {
        let error;

        try {
            await getKeysFromTsFile(
                "./tests/lib/fixtures/bad-extends-type-reference.d.ts"
            );
        } catch (err) {
            error = err;
        }

        expect(error.message).to.contain("Unhandled TypeScript type reference");
    });

    it("throws with unhandled TS type", async () => {
        let error;

        try {
            await getKeysFromTsFile(
                "./tests/lib/fixtures/bad-type.d.ts"
            );
        } catch (err) {
            error = err;
        }

        expect(error.message).to.contain("Unhandled TypeScript type;");
    });

    it("throws with unhandled TS typeParameters", async () => {
        let error;

        try {
            await getKeysFromTsFile(
                "./tests/lib/fixtures/bad-type-parameters.d.ts"
            );
        } catch (err) {
            error = err;
        }

        expect(error.message).to.contain("Unknown type parameter");
    });

    it("throws with bad key", async () => {
        let error;

        try {
            await getKeysFromTsFile(
                "./tests/lib/fixtures/new-keys-bad.d.ts"
            );
        } catch (err) {
            error = err;
        }

        expect(error.message).to.equal("Type unknown as to traversability: BadExpression");
    });

    it("throws with bad type value", async () => {
        let error;

        try {
            await getKeysFromTsFile(
                "./tests/lib/fixtures/bad-type-value.d.ts"
            );
        } catch (err) {
            error = err;
        }

        expect(error.message).to.equal("Unexpected `type` value property type TSUndefinedKeyword");
    });
});
