"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reference_1 = require("./reference");
/**
 * A division.
 */
class Division {
    constructor() {
        this.version = -1;
        this.triangles = new reference_1.default();
        this.regions = new reference_1.default();
        this.batches = new reference_1.default();
        this.MSEC = new reference_1.default();
        this.unknown0 = 0;
    }
    load(stream, version, index) {
        this.version = version;
        this.triangles.load(stream, index);
        this.regions.load(stream, index);
        this.batches.load(stream, index);
        this.MSEC.load(stream, index);
        this.unknown0 = stream.readUint32();
    }
}
exports.default = Division;
//# sourceMappingURL=division.js.map