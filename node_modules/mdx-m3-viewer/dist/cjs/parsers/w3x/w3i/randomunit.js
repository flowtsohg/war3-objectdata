"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A random unit.
 */
class RandomUnit {
    constructor() {
        this.chance = 0;
        this.ids = [];
    }
    load(stream, positions) {
        this.chance = stream.readInt32();
        for (let i = 0; i < positions; i++) {
            this.ids[i] = stream.readBinary(4);
        }
    }
    save(stream) {
        stream.writeInt32(this.chance);
        for (const id of this.ids) {
            stream.writeBinary(id);
        }
    }
}
exports.default = RandomUnit;
//# sourceMappingURL=randomunit.js.map