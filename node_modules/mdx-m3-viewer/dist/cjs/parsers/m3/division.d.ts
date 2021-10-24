import BinaryStream from '../../common/binarystream';
import IndexEntry from './indexentry';
import Reference from './reference';
/**
 * A division.
 */
export default class Division {
    version: number;
    triangles: Reference;
    regions: Reference;
    batches: Reference;
    MSEC: Reference;
    unknown0: number;
    load(stream: BinaryStream, version: number, index: IndexEntry[]): void;
}
