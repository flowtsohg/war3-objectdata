import BinaryStream from '../../common/binarystream';
import IndexEntry from './indexentry';
import Reference from './reference';
/**
 * An animation getter.
 */
export default class Stg {
    version: number;
    name: Reference;
    stcIndices: Reference;
    load(stream: BinaryStream, version: number, index: IndexEntry[]): void;
}
