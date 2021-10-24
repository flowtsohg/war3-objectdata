import BinaryStream from '../../common/binarystream';
import TokenStream from './tokenstream';
/**
 * An extent.
 */
export default class Extent {
    boundsRadius: number;
    min: Float32Array;
    max: Float32Array;
    readMdx(stream: BinaryStream): void;
    writeMdx(stream: BinaryStream): void;
    writeMdl(stream: TokenStream): void;
}
