"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reference_1 = require("./reference");
const animationreference_1 = require("./animationreference");
/**
 * A bone.
 */
class Bone {
    constructor() {
        this.version = -1;
        this.unknown0 = 0;
        this.name = new reference_1.default();
        this.flags = 0;
        this.parent = -1;
        this.unknown1 = 0;
        this.location = new animationreference_1.Vector3AnimationReference();
        this.rotation = new animationreference_1.Vector4AnimationReference();
        this.scale = new animationreference_1.Vector3AnimationReference();
        this.visibility = new animationreference_1.Uint32AnimationReference();
    }
    load(stream, version, index) {
        this.version = version;
        this.unknown0 = stream.readInt32();
        this.name.load(stream, index);
        this.flags = stream.readUint32();
        this.parent = stream.readInt16();
        this.unknown1 = stream.readUint16();
        this.location.load(stream);
        this.rotation.load(stream);
        this.scale.load(stream);
        this.visibility.load(stream);
    }
}
exports.default = Bone;
//# sourceMappingURL=bone.js.map