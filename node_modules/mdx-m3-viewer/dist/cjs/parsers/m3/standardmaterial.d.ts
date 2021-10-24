import BinaryStream from '../../common/binarystream';
import IndexEntry from './indexentry';
import Reference from './reference';
import { Float32AnimationReference, Uint32AnimationReference } from './animationreference';
/**
 * A standard material.
 */
export default class StandardMaterial {
    version: number;
    name: Reference;
    additionalFlags: number;
    flags: number;
    blendMode: number;
    priority: number;
    usedRTTChannels: number;
    specularity: number;
    depthBlendFalloff: number;
    cutoutThreshold: number;
    unknown1: number;
    unknown2: number;
    unknown3: number;
    specMult: number;
    emisMult: number;
    diffuseLayer: Reference;
    decalLayer: Reference;
    specularLayer: Reference;
    glossLayer: Reference;
    emissiveLayer: Reference;
    emissive2Layer: Reference;
    evioLayer: Reference;
    evioMaskLayer: Reference;
    alphaMaskLayer: Reference;
    alphaMask2Layer: Reference;
    normalLayer: Reference;
    heightLayer: Reference;
    lightMapLayer: Reference;
    ambientOcclusionLayer: Reference;
    unknown4: Reference;
    unknown5: Reference;
    unknown6: Reference;
    unknown7: Reference;
    unknown8: number;
    layerBlendType: number;
    emisBlendType: number;
    emisMode: number;
    specType: number;
    unknown9: Float32AnimationReference;
    unknown10: Uint32AnimationReference;
    unknown11: Uint8Array;
    load(stream: BinaryStream, version: number, index: IndexEntry[]): void;
}
