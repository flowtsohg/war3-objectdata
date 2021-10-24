import BinaryStream from '../../common/binarystream';
import IndexEntry from './indexentry';
import Reference from './reference';
import BoundingSphere from './boundingsphere';
/**
 * A sequence.
 */
export default class Sequence {
    version: number;
    name: Reference;
    interval: Uint32Array;
    movementSpeed: number;
    flags: number;
    frequency: number;
    boundingSphere: BoundingSphere;
    load(stream: BinaryStream, version: number, index: IndexEntry[]): void;
}
