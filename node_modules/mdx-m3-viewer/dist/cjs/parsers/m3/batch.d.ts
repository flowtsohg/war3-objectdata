import BinaryStream from '../../common/binarystream';
import IndexEntry from './indexentry';
/**
 * A batch.
 */
export default class Batch {
    version: number;
    unknown0: number;
    regionIndex: number;
    unknown1: number;
    materialReferenceIndex: number;
    unknown2: number;
    load(stream: BinaryStream, version: number, _index: IndexEntry[]): void;
}
