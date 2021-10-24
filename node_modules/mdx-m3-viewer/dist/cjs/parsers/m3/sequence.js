"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reference_1 = require("./reference");
const boundingsphere_1 = require("./boundingsphere");
/**
 * A sequence.
 */
class Sequence {
    constructor() {
        this.version = -1;
        this.name = new reference_1.default();
        this.interval = new Uint32Array(2);
        this.movementSpeed = 0;
        this.flags = 0;
        this.frequency = 0;
        this.boundingSphere = new boundingsphere_1.default();
    }
    load(stream, version, index) {
        this.version = version;
        stream.skip(8); // ?
        this.name.load(stream, index);
        stream.readUint32Array(this.interval);
        this.movementSpeed = stream.readFloat32();
        this.flags = stream.readUint32();
        this.frequency = stream.readUint32();
        stream.skip(12); // ?
        if (version < 2) {
            stream.skip(4); // ?
        }
        this.boundingSphere.load(stream);
        stream.skip(12); // ?
    }
}
exports.default = Sequence;
//# sourceMappingURL=sequence.js.map