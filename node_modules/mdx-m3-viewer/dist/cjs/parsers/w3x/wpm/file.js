"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const binarystream_1 = require("../../../common/binarystream");
/**
 * war3map.wpm - the pathing file.
 */
class War3MapWpm {
    constructor() {
        this.version = 0;
        this.size = new Int32Array(2);
        this.pathing = new Uint8Array(0);
    }
    load(buffer) {
        const stream = new binarystream_1.default(buffer);
        if (stream.readBinary(4) !== 'MP3W') {
            return;
        }
        this.version = stream.readInt32();
        stream.readInt32Array(this.size);
        this.pathing = stream.readUint8Array(this.size[0] * this.size[1]);
    }
    save() {
        const stream = new binarystream_1.default(new ArrayBuffer(this.getByteLength()));
        stream.writeBinary('MP3W');
        stream.writeInt32(this.version);
        stream.writeInt32Array(this.size);
        stream.writeUint8Array(this.pathing);
        return stream.uint8array;
    }
    getByteLength() {
        return 16 + (this.size[0] * this.size[1]);
    }
}
exports.default = War3MapWpm;
//# sourceMappingURL=file.js.map