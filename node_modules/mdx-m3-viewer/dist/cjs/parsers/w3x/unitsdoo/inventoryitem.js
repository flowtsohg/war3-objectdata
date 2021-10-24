"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An inventory item.
 */
class InventoryItem {
    constructor() {
        this.slot = 0;
        this.id = '\0\0\0\0';
    }
    load(stream) {
        this.slot = stream.readInt32();
        this.id = stream.readBinary(4);
    }
    save(stream) {
        stream.writeInt32(this.slot);
        stream.writeBinary(this.id);
    }
}
exports.default = InventoryItem;
//# sourceMappingURL=inventoryitem.js.map