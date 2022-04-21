import assert from "assert";
import * as acorn from "acorn";
import espree from "../../lib/espree.js";

describe("espree", () => {
    it("Throws upon `jsx_readString` when not using JSX", () => {
        const espreeParserFactory = espree();
        const AcornParser = acorn.Parser;
        const EspreeParser = espreeParserFactory(/** @type {EspreeParser} */ (AcornParser));
        const parser = new EspreeParser({}, "");

        assert.throws(() => {
            parser.jsx_readString();
        });
    });
});
