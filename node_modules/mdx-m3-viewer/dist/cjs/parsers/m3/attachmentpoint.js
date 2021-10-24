"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reference_1 = require("./reference");
/**
 * An attachment point.
 */
class AttachmentPoint {
    constructor() {
        this.version = -1;
        this.unknown = 0;
        this.name = new reference_1.default();
        this.bone = -1;
    }
    load(stream, version, index) {
        this.version = version;
        this.unknown = stream.readInt32();
        this.name.load(stream, index);
        this.bone = stream.readUint32();
    }
}
exports.default = AttachmentPoint;
//# sourceMappingURL=attachmentpoint.js.map