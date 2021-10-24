import BinaryStream from '../../common/binarystream';
import IndexEntry from './indexentry';
import Reference from './reference';
/**
 * Sequence data.
 */
export default class Sd {
    version: number;
    keys: Reference;
    flags: number;
    biggestKey: number;
    values: Reference;
    load(stream: BinaryStream, version: number, index: IndexEntry[]): void;
}
