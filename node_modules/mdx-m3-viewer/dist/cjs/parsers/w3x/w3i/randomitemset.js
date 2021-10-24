"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const randomitem_1 = require("./randomitem");
/**
 * A random item set.
 */
class RandomItemSet {
    constructor() {
        this.items = [];
    }
    load(stream) {
        for (let i = 0, l = stream.readUint32(); i < l; i++) {
            const item = new randomitem_1.default();
            item.load(stream);
            this.items[i] = item;
        }
    }
    save(stream) {
        stream.writeUint32(this.items.length);
        for (const item of this.items) {
            item.save(stream);
        }
    }
    getByteLength() {
        return 4 + this.items.length * 8;
    }
}
exports.default = RandomItemSet;
//# sourceMappingURL=randomitemset.js.map