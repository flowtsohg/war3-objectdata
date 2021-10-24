"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A batch.
 */
class Batch {
    constructor() {
        this.version = -1;
        this.unknown0 = 0;
        this.regionIndex = -1;
        this.unknown1 = 0;
        this.materialReferenceIndex = -1;
        this.unknown2 = 0;
    }
    load(stream, version, _index) {
        this.version = version;
        this.unknown0 = stream.readUint32();
        this.regionIndex = stream.readUint16();
        this.unknown1 = stream.readUint32();
        this.materialReferenceIndex = stream.readUint16();
        this.unknown2 = stream.readUint16();
    }
}
exports.default = Batch;
//# sourceMappingURL=batch.js.map