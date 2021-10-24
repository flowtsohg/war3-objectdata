"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reference_1 = require("./reference");
const animationreference_1 = require("./animationreference");
/**
 * A layer.
 */
class Layer {
    constructor() {
        this.version = -1;
        this.unknown0 = 0;
        this.imagePath = new reference_1.default();
        this.color = new animationreference_1.PixelAnimationReference();
        this.flags = 0;
        this.uvSource = -1;
        this.colorChannelSetting = 0;
        this.brightMult = new animationreference_1.Float32AnimationReference();
        this.midtoneOffset = new animationreference_1.Float32AnimationReference();
        this.unknown1 = 0;
        this.noiseAmp = 0;
        this.noiseFreq = 0;
        this.rttChannel = 0;
        this.videoFrameRate = 0;
        this.videoStartFrame = 0;
        this.videoEndFrame = 0;
        this.videoMode = 0;
        this.videoSyncTiming = 0;
        this.videoPlay = new animationreference_1.Uint32AnimationReference();
        this.videoRestart = new animationreference_1.Uint32AnimationReference();
        this.flipBookRows = 0;
        this.flipBookColumns = 0;
        this.flipBookFrame = new animationreference_1.Uint16AnimationReference();
        this.uvOffset = new animationreference_1.Vector2AnimationReference();
        this.uvAngle = new animationreference_1.Vector3AnimationReference();
        this.uvTiling = new animationreference_1.Vector2AnimationReference();
        this.unknown2 = new animationreference_1.Uint32AnimationReference();
        this.unknown3 = new animationreference_1.Float32AnimationReference();
        this.brightness = new animationreference_1.Float32AnimationReference();
        this.triPlanarOffset = new animationreference_1.Vector3AnimationReference();
        this.triPlanarScale = new animationreference_1.Vector3AnimationReference();
        this.unknown4 = 0;
        this.fresnelType = 0;
        this.fresnelExponent = 0;
        this.fresnelMin = 0;
        this.fresnelMaxOffset = 0;
        this.unknown5 = 0;
        this.unknown6 = new Uint8Array(8);
        this.fresnelInvertedMaskX = 0;
        this.fresnelInvertedMaskY = 0;
        this.fresnelInvertedMaskZ = 0;
        this.fresnelRotationYaw = 0;
        this.fresnelRotationPitch = 0;
        this.unknown7 = 0;
    }
    load(stream, version, index) {
        this.version = version;
        this.unknown0 = stream.readUint32();
        this.imagePath.load(stream, index);
        this.color.load(stream);
        this.flags = stream.readUint32();
        this.uvSource = stream.readUint32();
        this.colorChannelSetting = stream.readUint32();
        this.brightMult.load(stream);
        this.midtoneOffset.load(stream);
        this.unknown1 = stream.readUint32();
        if (version > 23) {
            this.noiseAmp = stream.readFloat32();
            this.noiseFreq = stream.readFloat32();
        }
        this.rttChannel = stream.readInt32();
        this.videoFrameRate = stream.readUint32();
        this.videoStartFrame = stream.readUint32();
        this.videoEndFrame = stream.readInt32();
        this.videoMode = stream.readUint32();
        this.videoSyncTiming = stream.readUint32();
        this.videoPlay.load(stream);
        this.videoRestart.load(stream);
        this.flipBookRows = stream.readUint32();
        this.flipBookColumns = stream.readUint32();
        this.flipBookFrame.load(stream);
        this.uvOffset.load(stream);
        this.uvAngle.load(stream);
        this.uvTiling.load(stream);
        this.unknown2.load(stream);
        this.unknown3.load(stream);
        this.brightness.load(stream);
        if (version > 23) {
            this.triPlanarOffset.load(stream);
            this.triPlanarScale.load(stream);
        }
        this.unknown4 = stream.readInt32();
        this.fresnelType = stream.readUint32();
        this.fresnelExponent = stream.readFloat32();
        this.fresnelMin = stream.readFloat32();
        this.fresnelMaxOffset = stream.readFloat32();
        this.unknown5 = stream.readFloat32();
        if (version > 24) {
            this.unknown6 = stream.readUint8Array(8);
            this.fresnelInvertedMaskX = stream.readFloat32();
            this.fresnelInvertedMaskY = stream.readFloat32();
            this.fresnelInvertedMaskZ = stream.readFloat32();
            this.fresnelRotationYaw = stream.readFloat32();
            this.fresnelRotationPitch = stream.readFloat32();
            this.unknown7 = stream.readUint32();
        }
    }
}
exports.default = Layer;
//# sourceMappingURL=layer.js.map