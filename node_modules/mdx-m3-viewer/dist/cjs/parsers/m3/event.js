"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reference_1 = require("./reference");
/**
 * An event.
 */
class Event {
    constructor() {
        this.version = -1;
        this.name = new reference_1.default();
        this.unknown0 = 0;
        this.unknown1 = 0;
        this.unknown2 = 0;
        this.matrix = new Float32Array(16);
        this.unknown3 = 0;
        this.unknown4 = 0;
        this.unknown5 = 0;
        this.unknown6 = 0;
        this.unknown7 = 0;
        this.unknown8 = 0;
    }
    load(stream, version, index) {
        this.version = version;
        this.name.load(stream, index);
        this.unknown0 = stream.readInt32();
        this.unknown1 = stream.readInt16();
        this.unknown2 = stream.readUint16();
        stream.readFloat32Array(this.matrix);
        this.unknown3 = stream.readInt32();
        this.unknown4 = stream.readInt32();
        this.unknown5 = stream.readInt32();
        if (version > 0) {
            this.unknown6 = stream.readInt32();
            this.unknown7 = stream.readInt32();
        }
        if (version > 1) {
            this.unknown8 = stream.readInt32();
        }
    }
}
exports.default = Event;
//# sourceMappingURL=event.js.map