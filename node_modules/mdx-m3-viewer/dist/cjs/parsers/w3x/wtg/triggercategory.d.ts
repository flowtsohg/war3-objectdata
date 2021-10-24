import BinaryStream from '../../../common/binarystream';
/**
 * A Trigger category.
 *
 * Used to scope triggers together in a Folder-like hierarchy.
 */
export default class TriggerCategory {
    id: number;
    name: string;
    isComment: number;
    load(stream: BinaryStream, version: number): void;
    save(stream: BinaryStream, version: number): void;
    getByteLength(version: number): number;
}
