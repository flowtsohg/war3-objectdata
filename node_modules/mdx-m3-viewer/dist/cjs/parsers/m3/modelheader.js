"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reference_1 = require("./reference");
const boundingsphere_1 = require("./boundingsphere");
const boundingshape_1 = require("./boundingshape");
/**
 * The model information structure.
 */
class ModelHeader {
    constructor() {
        this.version = -1;
        this.modelName = new reference_1.default();
        this.flags = 0;
        this.sequences = new reference_1.default();
        this.stc = new reference_1.default();
        this.stg = new reference_1.default();
        this.unknown0 = 0;
        this.unknown1 = 0;
        this.unknown2 = 0;
        this.unknown3 = 0;
        this.sts = new reference_1.default();
        this.bones = new reference_1.default();
        this.numberOfBonesToCheckForSkin = 0;
        this.vertexFlags = 0;
        this.vertices = new reference_1.default();
        this.divisions = new reference_1.default();
        this.boneLookup = new reference_1.default();
        this.boundings = new boundingsphere_1.default();
        this.unknown4To20 = new Uint32Array(16);
        this.attachmentPoints = new reference_1.default();
        this.attachmentPointAddons = new reference_1.default();
        this.ligts = new reference_1.default();
        this.shbxData = new reference_1.default();
        this.cameras = new reference_1.default();
        this.unknown21 = new reference_1.default();
        this.materialReferences = new reference_1.default();
        this.materials = [];
        this.particleEmitters = new reference_1.default();
        this.particleEmitterCopies = new reference_1.default();
        this.ribbonEmitters = new reference_1.default();
        this.projections = new reference_1.default();
        this.forces = new reference_1.default();
        this.warps = new reference_1.default();
        this.unknown22 = new reference_1.default();
        this.rigidBodies = new reference_1.default();
        this.unknown23 = new reference_1.default();
        this.physicsJoints = new reference_1.default();
        this.clothBehavior = new reference_1.default();
        this.unknown24 = new reference_1.default();
        this.ikjtData = new reference_1.default();
        this.unknown25 = new reference_1.default();
        this.unknown26 = new reference_1.default();
        this.partsOfTurrentBehaviors = new reference_1.default();
        this.turrentBehaviors = new reference_1.default();
        this.absoluteInverseBoneRestPositions = new reference_1.default();
        this.tightHitTest = new boundingshape_1.default();
        this.fuzzyHitTestObjects = new reference_1.default();
        this.attachmentVolumes = new reference_1.default();
        this.attachmentVolumesAddon0 = new reference_1.default();
        this.attachmentVolumesAddon1 = new reference_1.default();
        this.billboardBehaviors = new reference_1.default();
        this.tmdData = new reference_1.default();
        this.unknown27 = 0;
        this.unknown28 = new reference_1.default();
        for (let i = 0; i < 11; i++) {
            this.materials[i] = new reference_1.default();
        }
    }
    load(stream, version, index) {
        this.version = version;
        this.modelName.load(stream, index);
        this.flags = stream.readUint32();
        this.sequences.load(stream, index);
        this.stc.load(stream, index);
        this.stg.load(stream, index);
        this.unknown0 = stream.readFloat32();
        this.unknown1 = stream.readFloat32();
        this.unknown2 = stream.readFloat32();
        this.unknown3 = stream.readFloat32();
        this.sts.load(stream, index);
        this.bones.load(stream, index);
        this.numberOfBonesToCheckForSkin = stream.readUint32();
        this.vertexFlags = stream.readUint32();
        this.vertices.load(stream, index);
        this.divisions.load(stream, index);
        this.boneLookup.load(stream, index);
        this.boundings.load(stream);
        stream.readUint32Array(this.unknown4To20);
        this.attachmentPoints.load(stream, index);
        this.attachmentPointAddons.load(stream, index);
        this.ligts.load(stream, index);
        this.shbxData.load(stream, index);
        this.cameras.load(stream, index);
        this.unknown21.load(stream, index);
        this.materialReferences.load(stream, index);
        for (let i = 0; i < 7; i++) {
            this.materials[i].load(stream, index); // Standard, Displacement, Composite, Terrain, Volume, ?, Creep
        }
        if (version > 24) {
            this.materials[7].load(stream, index); // Volume noise
        }
        if (version > 25) {
            this.materials[8].load(stream, index); // Splat terrain bake
        }
        if (version > 27) {
            this.materials[9].load(stream, index); // ?
        }
        if (version > 28) {
            this.materials[10].load(stream, index); // Lens flare
        }
        this.particleEmitters.load(stream, index);
        this.particleEmitterCopies.load(stream, index);
        this.ribbonEmitters.load(stream, index);
        this.projections.load(stream, index);
        this.forces.load(stream, index);
        this.warps.load(stream, index);
        this.unknown22.load(stream, index); // ?
        this.rigidBodies.load(stream, index);
        this.unknown23.load(stream, index); // ?
        this.physicsJoints.load(stream, index);
        if (version > 27) {
            this.clothBehavior.load(stream, index);
        }
        this.unknown24.load(stream, index); // ?
        this.ikjtData.load(stream, index);
        this.unknown25.load(stream, index); // ?
        if (version > 24) {
            this.unknown26.load(stream, index); // ?
        }
        this.partsOfTurrentBehaviors.load(stream, index);
        this.turrentBehaviors.load(stream, index);
        this.absoluteInverseBoneRestPositions.load(stream, index);
        this.tightHitTest.load(stream);
        this.fuzzyHitTestObjects.load(stream, index);
        this.attachmentVolumes.load(stream, index);
        this.attachmentVolumesAddon0.load(stream, index);
        this.attachmentVolumesAddon1.load(stream, index);
        this.billboardBehaviors.load(stream, index);
        this.tmdData.load(stream, index);
        this.unknown27 = stream.readUint32(); // ?
        this.unknown28.load(stream, index); // ?
    }
}
exports.default = ModelHeader;
//# sourceMappingURL=modelheader.js.map