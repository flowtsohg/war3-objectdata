"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A bounding shape.
 */
class BoundingShape {
    constructor() {
        this.shape = -1;
        this.bone = -1;
        this.unknown0 = 0;
        this.matrix = new Float32Array(16);
        this.unknown1 = 0;
        this.unknown2 = 0;
        this.unknown3 = 0;
        this.unknown4 = 0;
        this.unknown5 = 0;
        this.unknown6 = 0;
        this.size = new Float32Array(3);
    }
    load(stream) {
        this.shape = stream.readUint32();
        this.bone = stream.readInt16();
        this.unknown0 = stream.readUint16();
        stream.readFloat32Array(this.matrix);
        this.unknown1 = stream.readUint32();
        this.unknown2 = stream.readUint32();
        this.unknown3 = stream.readUint32();
        this.unknown4 = stream.readUint32();
        this.unknown5 = stream.readUint32();
        this.unknown6 = stream.readUint32();
        stream.readFloat32Array(this.size);
    }
}
exports.default = BoundingShape;
//# sourceMappingURL=boundingshape.js.map