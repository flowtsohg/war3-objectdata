import BinaryStream from '../../common/binarystream';
import IndexEntry from './indexentry';
import Reference from './reference';
/**
 * An animation validator.
 */
export default class Sts {
    version: number;
    animIds: Reference;
    load(reader: BinaryStream, version: number, index: IndexEntry[]): void;
}
