import BinaryStream from '../../common/binarystream';
import IndexEntry from './indexentry';
import Reference from './reference';
/**
 * An attachment point.
 */
export default class AttachmentPoint {
    version: number;
    unknown: number;
    name: Reference;
    bone: number;
    load(stream: BinaryStream, version: number, index: IndexEntry[]): void;
}
