"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A block.
 */
class Block {
    constructor() {
        this.offset = 0;
        this.compressedSize = 0;
        this.normalSize = 0;
        this.flags = 0;
    }
    load(bytes) {
        this.offset = bytes[0];
        this.compressedSize = bytes[1];
        this.normalSize = bytes[2];
        this.flags = bytes[3];
    }
    save(bytes) {
        bytes[0] = this.offset;
        bytes[1] = this.compressedSize;
        bytes[2] = this.normalSize;
        bytes[3] = this.flags;
    }
}
exports.default = Block;
//# sourceMappingURL=block.js.map