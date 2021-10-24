import BinaryStream from '../../common/binarystream';
import IndexEntry from './indexentry';
import Reference from './reference';
/**
 * An animation timeline.
 */
export default class Stc {
    version: number;
    name: Reference;
    runsConcurrent: number;
    priority: number;
    stsIndex: number;
    stsIndexCopy: number;
    animIds: Reference;
    animRefs: Reference;
    sd: Reference[];
    constructor();
    load(stream: BinaryStream, version: number, index: IndexEntry[]): void;
}
