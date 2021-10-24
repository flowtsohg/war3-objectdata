"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reference_1 = require("./reference");
/**
 * Sequence data.
 */
class Sd {
    constructor() {
        this.version = -1;
        this.keys = new reference_1.default();
        this.flags = 0;
        this.biggestKey = -1;
        this.values = new reference_1.default();
    }
    load(stream, version, index) {
        this.version = version;
        this.keys.load(stream, index);
        this.flags = stream.readUint32();
        this.biggestKey = stream.readUint32();
        this.values.load(stream, index);
    }
}
exports.default = Sd;
//# sourceMappingURL=sd.js.map