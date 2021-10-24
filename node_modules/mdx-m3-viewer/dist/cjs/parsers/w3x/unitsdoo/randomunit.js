"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A random unit.
 */
class RandomUnit {
    constructor() {
        this.id = '\0\0\0\0';
        this.chance = 0;
    }
    load(stream) {
        this.id = stream.readBinary(4);
        this.chance = stream.readInt32();
    }
    save(stream) {
        stream.writeBinary(this.id);
        stream.writeInt32(this.chance);
    }
}
exports.default = RandomUnit;
//# sourceMappingURL=randomunit.js.map