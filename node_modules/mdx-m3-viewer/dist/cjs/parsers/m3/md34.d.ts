import BinaryStream from '../../common/binarystream';
import IndexEntry from './indexentry';
import Reference from './reference';
/**
 * The M3 header.
 */
export default class Md34 {
    version: number;
    tag: string;
    offset: number;
    entries: number;
    model: Reference;
    load(stream: BinaryStream, version: number, index: IndexEntry[]): void;
}
