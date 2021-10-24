import BinaryStream from '../../common/binarystream';
import TokenStream from './tokenstream';
import AnimatedObject from './animatedobject';
/**
 * A geoset animation.
 */
export default class GeosetAnimation extends AnimatedObject {
    alpha: number;
    flags: number;
    color: Float32Array;
    geosetId: number;
    readMdx(stream: BinaryStream): void;
    writeMdx(stream: BinaryStream): void;
    readMdl(stream: TokenStream): void;
    writeMdl(stream: TokenStream): void;
    getByteLength(): number;
}
