import BinaryStream from '../../common/binarystream';
import IndexEntry from './indexentry';
import Reference from './reference';
/**
 * An event.
 */
export default class Event {
    version: number;
    name: Reference;
    unknown0: number;
    unknown1: number;
    unknown2: number;
    matrix: Float32Array;
    unknown3: number;
    unknown4: number;
    unknown5: number;
    unknown6: number;
    unknown7: number;
    unknown8: number;
    load(stream: BinaryStream, version: number, index: IndexEntry[]): void;
}
