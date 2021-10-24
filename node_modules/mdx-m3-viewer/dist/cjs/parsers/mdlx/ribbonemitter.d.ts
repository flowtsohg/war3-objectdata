import BinaryStream from '../../common/binarystream';
import TokenStream from './tokenstream';
import GenericObject from './genericobject';
/**
 * A ribbon emitter.
 */
export default class RibbonEmitter extends GenericObject {
    heightAbove: number;
    heightBelow: number;
    alpha: number;
    color: Float32Array;
    lifeSpan: number;
    textureSlot: number;
    emissionRate: number;
    rows: number;
    columns: number;
    materialId: number;
    gravity: number;
    constructor();
    readMdx(stream: BinaryStream): void;
    writeMdx(stream: BinaryStream): void;
    readMdl(stream: TokenStream): void;
    writeMdl(stream: TokenStream): void;
    getByteLength(): number;
}
