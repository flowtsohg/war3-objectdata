"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const binarystream_1 = require("../../../common/binarystream");
const minimapicon_1 = require("./minimapicon");
/**
 * war3map.mmp - the minimap icon file.
 */
class War3MapMmp {
    constructor() {
        this.u1 = 0;
        this.icons = [];
    }
    load(buffer) {
        const stream = new binarystream_1.default(buffer);
        this.u1 = stream.readInt32();
        for (let i = 0, l = stream.readInt32(); i < l; i++) {
            const icon = new minimapicon_1.default();
            icon.load(stream);
            this.icons[i] = icon;
        }
    }
    save() {
        const stream = new binarystream_1.default(new ArrayBuffer(this.getByteLength()));
        stream.writeInt32(this.u1);
        stream.writeUint32(this.icons.length);
        for (const icon of this.icons) {
            icon.save(stream);
        }
        return stream.uint8array;
    }
    getByteLength() {
        return 8 + this.icons.length * 16;
    }
}
exports.default = War3MapMmp;
//# sourceMappingURL=file.js.map