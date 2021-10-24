import BinaryStream from '../../common/binarystream';
import TokenStream from './tokenstream';
import Extent from './extent';
/**
 * A sequence.
 */
export default class Sequence {
    name: string;
    interval: Uint32Array;
    moveSpeed: number;
    nonLooping: number;
    rarity: number;
    syncPoint: number;
    extent: Extent;
    readMdx(stream: BinaryStream): void;
    writeMdx(stream: BinaryStream): void;
    readMdl(stream: TokenStream): void;
    writeMdl(stream: TokenStream): void;
}
