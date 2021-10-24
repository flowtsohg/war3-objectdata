"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An unknown chunk.
 */
class UnknownChunk {
    constructor(stream, size, tag) {
        this.tag = tag;
        this.chunk = stream.readUint8Array(new Uint8Array(size));
    }
    writeMdx(stream) {
        stream.writeBinary(this.tag);
        stream.writeUint32(this.chunk.byteLength);
        stream.writeUint8Array(this.chunk);
    }
    getByteLength() {
        return 8 + this.chunk.byteLength;
    }
}
exports.default = UnknownChunk;
//# sourceMappingURL=unknownchunk.js.map