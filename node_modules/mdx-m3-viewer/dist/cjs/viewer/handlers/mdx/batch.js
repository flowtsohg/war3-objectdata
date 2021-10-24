"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Batch = exports.SkinningType = void 0;
/**
 * The type of skinning a batch uses.
 *
 * Vertex groups are used for SD batches with a range of 0-4 bones per vertex.
 *
 * Extended vertex groups are used for SD batches with a range of 0-8 bones per vertex.
 *
 * Skin is used for HD batches with a range of 0-4 bones per vertex.
 */
var SkinningType;
(function (SkinningType) {
    SkinningType[SkinningType["VertexGroups"] = 0] = "VertexGroups";
    SkinningType[SkinningType["ExtendedVertexGroups"] = 1] = "ExtendedVertexGroups";
    SkinningType[SkinningType["Skin"] = 2] = "Skin";
})(SkinningType = exports.SkinningType || (exports.SkinningType = {}));
/**
 * An MDX batch.
 */
class Batch {
    constructor(index, geoset, layerOrMaterial, skinningType, isHd) {
        let material;
        let layer;
        if (isHd) {
            material = layerOrMaterial;
            layer = material.layers[0];
        }
        else {
            material = null;
            layer = layerOrMaterial;
        }
        this.index = index;
        this.geoset = geoset;
        this.skinningType = skinningType;
        this.isHd = isHd;
        this.layer = layer;
        this.material = material;
    }
}
exports.Batch = Batch;
//# sourceMappingURL=batch.js.map