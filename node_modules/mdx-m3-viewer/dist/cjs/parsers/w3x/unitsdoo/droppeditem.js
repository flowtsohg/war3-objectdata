"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A dropped item.
 */
class DroppedItem {
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
exports.default = DroppedItem;
//# sourceMappingURL=droppeditem.js.map