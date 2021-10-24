"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reference_1 = require("./reference");
/**
 * An animation validator.
 */
class Sts {
    constructor() {
        this.version = -1;
        this.animIds = new reference_1.default();
    }
    load(reader, version, index) {
        this.version = version;
        this.animIds.load(reader, index);
        reader.skip(16); // ?
    }
}
exports.default = Sts;
//# sourceMappingURL=sts.js.map