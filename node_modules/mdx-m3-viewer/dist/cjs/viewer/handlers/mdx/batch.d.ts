import Geoset from './geoset';
import Layer from './layer';
import Material from './material';
/**
 * The type of skinning a batch uses.
 *
 * Vertex groups are used for SD batches with a range of 0-4 bones per vertex.
 *
 * Extended vertex groups are used for SD batches with a range of 0-8 bones per vertex.
 *
 * Skin is used for HD batches with a range of 0-4 bones per vertex.
 */
export declare enum SkinningType {
    VertexGroups = 0,
    ExtendedVertexGroups = 1,
    Skin = 2
}
/**
 * An MDX batch.
 */
export declare class Batch {
    index: number;
    geoset: Geoset;
    layer: Layer;
    material: Material | null;
    skinningType: SkinningType;
    isHd: boolean;
    constructor(index: number, geoset: Geoset, layerOrMaterial: Layer | Material, skinningType: SkinningType, isHd: boolean);
}
