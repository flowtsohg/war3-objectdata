import BinaryStream from '../../common/binarystream';
import TokenStream from './tokenstream';
import AnimatedObject from './animatedobject';
export declare const enum FilterMode {
    None = 0,
    Transparent = 1,
    Blend = 2,
    Additive = 3,
    AddAlpha = 4,
    Modulate = 5,
    Modulate2x = 6
}
export declare const enum Flags {
    None = 0,
    Unshaded = 1,
    SphereEnvMap = 2,
    TwoSided = 16,
    Unfogged = 32,
    NoDepthTest = 64,
    NoDepthSet = 128,
    Unlit = 256
}
/**
 * A layer.
 */
export default class Layer extends AnimatedObject {
    filterMode: FilterMode;
    flags: Flags;
    textureId: number;
    textureAnimationId: number;
    coordId: number;
    alpha: number;
    /**
     * @since 900
     */
    emissiveGain: number;
    /**
     * @since 1000
     */
    fresnelColor: Float32Array;
    /**
     * @since 1000
     */
    fresnelOpacity: number;
    /**
     * @since 1000
     */
    fresnelTeamColor: number;
    readMdx(stream: BinaryStream, version: number): void;
    writeMdx(stream: BinaryStream, version: number): void;
    readMdl(stream: TokenStream): void;
    writeMdl(stream: TokenStream, version: number): void;
    getByteLength(version: number): number;
}
