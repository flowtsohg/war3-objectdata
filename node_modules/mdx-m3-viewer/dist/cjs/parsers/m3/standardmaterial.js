"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reference_1 = require("./reference");
const animationreference_1 = require("./animationreference");
/**
 * A standard material.
 */
class StandardMaterial {
    constructor() {
        this.version = -1;
        this.name = new reference_1.default();
        this.additionalFlags = 0;
        this.flags = 0;
        this.blendMode = 0;
        this.priority = 0;
        this.usedRTTChannels = 0;
        this.specularity = 0;
        this.depthBlendFalloff = 0;
        this.cutoutThreshold = 0;
        this.unknown1 = 0;
        this.unknown2 = 0;
        this.unknown3 = 0;
        this.specMult = 0;
        this.emisMult = 0;
        this.diffuseLayer = new reference_1.default();
        this.decalLayer = new reference_1.default();
        this.specularLayer = new reference_1.default();
        this.glossLayer = new reference_1.default();
        this.emissiveLayer = new reference_1.default();
        this.emissive2Layer = new reference_1.default();
        this.evioLayer = new reference_1.default();
        this.evioMaskLayer = new reference_1.default();
        this.alphaMaskLayer = new reference_1.default();
        this.alphaMask2Layer = new reference_1.default();
        this.normalLayer = new reference_1.default();
        this.heightLayer = new reference_1.default();
        this.lightMapLayer = new reference_1.default();
        this.ambientOcclusionLayer = new reference_1.default();
        this.unknown4 = new reference_1.default();
        this.unknown5 = new reference_1.default();
        this.unknown6 = new reference_1.default();
        this.unknown7 = new reference_1.default();
        this.unknown8 = 0;
        this.layerBlendType = 0;
        this.emisBlendType = 0;
        this.emisMode = 0;
        this.specType = 0;
        this.unknown9 = new animationreference_1.Float32AnimationReference();
        this.unknown10 = new animationreference_1.Uint32AnimationReference();
        this.unknown11 = new Uint8Array(12);
    }
    load(stream, version, index) {
        this.version = version;
        this.name.load(stream, index);
        this.additionalFlags = stream.readUint32();
        this.flags = stream.readUint32();
        this.blendMode = stream.readUint32();
        this.priority = stream.readInt32();
        this.usedRTTChannels = stream.readUint32();
        this.specularity = stream.readFloat32();
        this.depthBlendFalloff = stream.readFloat32();
        this.cutoutThreshold = stream.readUint8();
        this.unknown1 = stream.readUint8(); // ?
        this.unknown2 = stream.readUint8(); // ?
        this.unknown3 = stream.readUint8(); // ?
        this.specMult = stream.readFloat32();
        this.emisMult = stream.readFloat32();
        this.diffuseLayer.load(stream, index);
        this.decalLayer.load(stream, index);
        this.specularLayer.load(stream, index);
        if (version > 15) {
            this.glossLayer.load(stream, index);
        }
        this.emissiveLayer.load(stream, index);
        this.emissive2Layer.load(stream, index);
        this.evioLayer.load(stream, index);
        this.evioMaskLayer.load(stream, index);
        this.alphaMaskLayer.load(stream, index);
        this.alphaMask2Layer.load(stream, index);
        this.normalLayer.load(stream, index);
        this.heightLayer.load(stream, index);
        this.lightMapLayer.load(stream, index);
        this.ambientOcclusionLayer.load(stream, index);
        if (version > 18) {
            this.unknown4.load(stream, index); // Unknown layer
            this.unknown5.load(stream, index); // Unknown layer
            this.unknown6.load(stream, index); // Unknown layer
            this.unknown7.load(stream, index); // Unknown layer
        }
        this.unknown8 = stream.readUint32(); // ?
        this.layerBlendType = stream.readUint32();
        this.emisBlendType = stream.readUint32();
        this.emisMode = stream.readUint32();
        this.specType = stream.readUint32();
        this.unknown9.load(stream); // ?
        this.unknown10.load(stream); // ?
        if (version > 18) {
            this.unknown11 = stream.readUint8Array(this.unknown11); // ?
        }
    }
}
exports.default = StandardMaterial;
//# sourceMappingURL=standardmaterial.js.map