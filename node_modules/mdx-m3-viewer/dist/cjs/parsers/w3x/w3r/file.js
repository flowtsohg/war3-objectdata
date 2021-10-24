"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const binarystream_1 = require("../../../common/binarystream");
const region_1 = require("./region");
/**
 * war3map.w3r - the region file.
 */
class War3MapW3r {
    constructor() {
        this.version = 0;
        this.regions = [];
    }
    load(buffer) {
        const stream = new binarystream_1.default(buffer);
        this.version = stream.readInt32();
        for (let i = 0, l = stream.readUint32(); i < l; i++) {
            const region = new region_1.default();
            region.load(stream);
            this.regions[i] = region;
        }
    }
    save() {
        const stream = new binarystream_1.default(new ArrayBuffer(this.getByteLength()));
        stream.writeInt32(this.version);
        stream.writeUint32(this.regions.length);
        for (const region of this.regions) {
            region.save(stream);
        }
        return stream.uint8array;
    }
    getByteLength() {
        let size = 8;
        for (const region of this.regions) {
            size += region.getByteLength();
        }
        return size;
    }
}
exports.default = War3MapW3r;
//# sourceMappingURL=file.js.map