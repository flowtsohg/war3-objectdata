"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A region.
 */
class Region {
    constructor() {
        this.version = -1;
        this.unknown0 = 0;
        this.unknown1 = 0;
        this.firstVertexIndex = -1;
        this.verticesCount = 0;
        this.firstTriangleIndex = -1;
        this.triangleIndicesCount = 0;
        this.bonesCount = 0;
        this.firstBoneLookupIndex = -1;
        this.boneLookupIndicesCount = 0;
        this.unknown2 = 0;
        this.boneWeightPairsCount = 0;
        this.unknown3 = 0;
        this.rootBoneIndex = -1;
        this.unknown4 = 0;
        this.unknown5 = new Uint8Array(8);
    }
    load(stream, version, _index) {
        this.version = version;
        this.unknown0 = stream.readUint32();
        this.unknown1 = stream.readUint32();
        this.firstVertexIndex = stream.readUint32();
        this.verticesCount = stream.readUint32();
        this.firstTriangleIndex = stream.readUint32();
        this.triangleIndicesCount = stream.readUint32();
        this.bonesCount = stream.readUint16();
        this.firstBoneLookupIndex = stream.readUint16();
        this.boneLookupIndicesCount = stream.readUint16();
        this.unknown2 = stream.readUint16();
        this.boneWeightPairsCount = stream.readUint8();
        this.unknown3 = stream.readUint8();
        this.rootBoneIndex = stream.readUint16();
        if (version > 3) {
            this.unknown4 = stream.readUint32();
        }
        if (version > 4) {
            stream.readUint8Array(this.unknown5);
        }
    }
}
exports.default = Region;
//# sourceMappingURL=region.js.map