"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const droppeditem_1 = require("./droppeditem");
/**
 * A dropped item set.
 */
class DroppedItemSet {
    constructor() {
        this.items = [];
    }
    load(stream) {
        for (let i = 0, l = stream.readInt32(); i < l; i++) {
            const item = new droppeditem_1.default();
            item.load(stream);
            this.items[i] = item;
        }
    }
    save(stream) {
        stream.writeInt32(this.items.length);
        for (const item of this.items) {
            item.save(stream);
        }
    }
    getByteLength() {
        return 4 + this.items.length * 8;
    }
}
exports.default = DroppedItemSet;
//# sourceMappingURL=droppeditemset.js.map