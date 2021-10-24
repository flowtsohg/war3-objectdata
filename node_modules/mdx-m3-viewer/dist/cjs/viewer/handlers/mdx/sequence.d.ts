import MdlxSequence from '../../../parsers/mdlx/sequence';
import Bounds from '../../bounds';
/**
 * An MDX sequence.
 */
export default class Sequence {
    name: string;
    interval: Uint32Array;
    nonLooping: number;
    rarity: number;
    bounds: Bounds;
    constructor(sequence: MdlxSequence);
}
