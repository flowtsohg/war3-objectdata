import BinaryStream from '../../common/binarystream';
import TokenStream from './tokenstream';
import GenericObject from './genericobject';
export declare const enum Flags {
    Unshaded = 32768,
    SortPrimsFarZ = 65536,
    LineEmitter = 131072,
    Unfogged = 262144,
    ModelSpace = 524288,
    XYQuad = 1048576
}
export declare const enum FilterMode {
    Blend = 0,
    Additive = 1,
    Modulate = 2,
    Modulate2x = 3,
    AlphaKey = 4
}
export declare const enum HeadOrTail {
    Head = 0,
    Tail = 1,
    Both = 2
}
/**
 * A particle emitter type 2.
 */
export default class ParticleEmitter2 extends GenericObject {
    speed: number;
    variation: number;
    latitude: number;
    gravity: number;
    lifeSpan: number;
    emissionRate: number;
    width: number;
    length: number;
    filterMode: FilterMode;
    rows: number;
    columns: number;
    headOrTail: HeadOrTail;
    tailLength: number;
    timeMiddle: number;
    segmentColors: Float32Array[];
    segmentAlphas: Uint8Array;
    segmentScaling: Float32Array;
    headIntervals: Uint32Array[];
    tailIntervals: Uint32Array[];
    textureId: number;
    squirt: number;
    priorityPlane: number;
    replaceableId: number;
    readMdx(stream: BinaryStream): void;
    writeMdx(stream: BinaryStream): void;
    readMdl(stream: TokenStream): void;
    writeMdl(stream: TokenStream): void;
    getByteLength(): number;
}
