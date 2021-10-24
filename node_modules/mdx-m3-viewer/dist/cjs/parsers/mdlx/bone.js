"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const genericobject_1 = require("./genericobject");
/**
 * A bone.
 */
class Bone extends genericobject_1.default {
    constructor() {
        super(0x100);
        this.geosetId = -1;
        this.geosetAnimationId = -1;
    }
    readMdx(stream) {
        super.readMdx(stream);
        this.geosetId = stream.readInt32();
        this.geosetAnimationId = stream.readInt32();
    }
    writeMdx(stream) {
        super.writeMdx(stream);
        stream.writeInt32(this.geosetId);
        stream.writeInt32(this.geosetAnimationId);
    }
    readMdl(stream) {
        for (let token of super.readGenericBlock(stream)) {
            if (token === 'GeosetId') {
                token = stream.read();
                if (token === 'Multiple') {
                    this.geosetId = -1;
                }
                else {
                    this.geosetId = parseInt(token);
                }
            }
            else if (token === 'GeosetAnimId') {
                token = stream.read();
                if (token === 'None') {
                    this.geosetAnimationId = -1;
                }
                else {
                    this.geosetAnimationId = parseInt(token);
                }
            }
            else {
                throw new Error(`Unknown token in Bone ${this.name}: "${token}"`);
            }
        }
    }
    writeMdl(stream) {
        stream.startObjectBlock('Bone', this.name);
        this.writeGenericHeader(stream);
        if (this.geosetId === -1) {
            stream.writeFlagAttrib('GeosetId', 'Multiple');
        }
        else {
            stream.writeNumberAttrib('GeosetId', this.geosetId);
        }
        if (this.geosetAnimationId === -1) {
            stream.writeFlagAttrib('GeosetAnimId', 'None');
        }
        else {
            stream.writeNumberAttrib('GeosetAnimId', this.geosetAnimationId);
        }
        this.writeGenericAnimations(stream);
        stream.endBlock();
    }
    getByteLength() {
        return 8 + super.getByteLength();
    }
}
exports.default = Bone;
//# sourceMappingURL=bone.js.map