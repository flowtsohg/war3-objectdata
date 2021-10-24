"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A random item.
 */
class RandomItem {
    constructor() {
        this.chance = 0;
        this.id = '\0\0\0\0';
    }
    load(stream) {
        this.chance = stream.readInt32();
        this.id = stream.readBinary(4);
    }
    save(stream) {
        stream.writeInt32(this.chance);
        stream.writeBinary(this.id);
    }
}
exports.default = RandomItem;
//# sourceMappingURL=randomitem.js.map