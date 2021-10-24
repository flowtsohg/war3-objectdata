"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reference_1 = require("./reference");
/**
 * An animation getter.
 */
class Stg {
    constructor() {
        this.version = -1;
        this.name = new reference_1.default();
        this.stcIndices = new reference_1.default();
    }
    load(stream, version, index) {
        this.version = version;
        this.name.load(stream, index);
        this.stcIndices.load(stream, index);
    }
}
exports.default = Stg;
//# sourceMappingURL=stg.js.map