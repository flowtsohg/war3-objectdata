"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A minimap icon.
 */
class MinimapIcon {
    constructor() {
        this.type = 0;
        this.location = new Int32Array(2);
        /**
         * Stored as BGRA.
         */
        this.color = new Uint8Array(4);
    }
    load(stream) {
        this.type = stream.readInt32();
        stream.readInt32Array(this.location);
        stream.readUint8Array(this.color);
    }
    save(stream) {
        stream.writeInt32(this.type);
        stream.writeInt32Array(this.location);
        stream.writeUint8Array(this.color);
    }
}
exports.default = MinimapIcon;
//# sourceMappingURL=minimapicon.js.map