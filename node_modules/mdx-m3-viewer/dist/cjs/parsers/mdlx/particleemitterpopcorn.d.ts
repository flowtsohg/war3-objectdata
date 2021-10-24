import BinaryStream from '../../common/binarystream';
import TokenStream from './tokenstream';
import GenericObject from './genericobject';
export declare const enum Flags {
    Unshaded = 32768,
    SortPrimsFarZ = 65536,
    Unfogged = 262144
}
/**
 * A popcorn particle emitter.
 * References a pkfx file, which is used by the PopcornFX runtime.
 *
 * @since 900
 */
export default class ParticleEmitterPopcorn extends GenericObject {
    lifeSpan: number;
    emissionRate: number;
    speed: number;
    color: Float32Array;
    alpha: number;
    replaceableId: number;
    path: string;
    animationVisiblityGuide: string;
    readMdx(stream: BinaryStream): void;
    writeMdx(stream: BinaryStream): void;
    readMdl(stream: TokenStream): void;
    writeMdl(stream: TokenStream): void;
    getByteLength(): number;
}
