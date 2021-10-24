"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reference_1 = require("./reference");
/**
 * An animation timeline.
 */
class Stc {
    constructor() {
        this.version = -1;
        this.name = new reference_1.default();
        this.runsConcurrent = 0;
        this.priority = 0;
        this.stsIndex = -1;
        this.stsIndexCopy = -1;
        this.animIds = new reference_1.default();
        this.animRefs = new reference_1.default();
        this.sd = [];
        for (let i = 0; i < 13; i++) {
            this.sd[i] = new reference_1.default();
        }
    }
    load(stream, version, index) {
        this.version = version;
        this.name.load(stream, index);
        this.runsConcurrent = stream.readUint16();
        this.priority = stream.readUint16();
        this.stsIndex = stream.readUint16();
        this.stsIndexCopy = stream.readUint16(); // ?
        this.animIds.load(stream, index);
        this.animRefs.load(stream, index);
        stream.skip(4); // ?
        for (let i = 0; i < 13; i++) {
            this.sd[i].load(stream, index);
        }
    }
}
exports.default = Stc;
//# sourceMappingURL=stc.js.map