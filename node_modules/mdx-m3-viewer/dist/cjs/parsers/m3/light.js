"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animationreference_1 = require("./animationreference");
/**
 * A light.
 */
class Light {
    constructor() {
        this.version = -1;
        this.type = 0;
        this.unknown0 = 0;
        this.bone = -1;
        this.flags = 0;
        this.unknown1 = 0;
        this.unknown2 = 0;
        this.lightColor = new animationreference_1.Vector3AnimationReference();
        this.lightIntensity = new animationreference_1.Float32AnimationReference();
        this.specularColor = new animationreference_1.Vector3AnimationReference();
        this.specularIntensity = new animationreference_1.Float32AnimationReference();
        this.attenuationFar = new animationreference_1.Float32AnimationReference();
        this.unknown3 = 0;
        this.attenuationNear = new animationreference_1.Float32AnimationReference();
        this.hotSpot = new animationreference_1.Float32AnimationReference();
        this.falloff = new animationreference_1.Float32AnimationReference();
    }
    load(stream, version, _index) {
        this.version = version;
        this.type = stream.readUint8();
        this.unknown0 = stream.readUint8();
        this.bone = stream.readInt16();
        this.flags = stream.readUint32();
        this.unknown1 = stream.readUint32();
        this.unknown2 = stream.readInt32();
        this.lightColor.load(stream);
        this.lightIntensity.load(stream);
        this.specularColor.load(stream);
        this.specularIntensity.load(stream);
        this.attenuationFar.load(stream);
        this.unknown3 = stream.readFloat32();
        this.attenuationNear.load(stream);
        this.hotSpot.load(stream);
        this.falloff.load(stream);
    }
}
exports.default = Light;
//# sourceMappingURL=light.js.map