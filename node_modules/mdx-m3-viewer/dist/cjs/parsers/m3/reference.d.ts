import BinaryStream from '../../common/binarystream';
import IndexEntry, { EntryType, SingleEntryType } from './indexentry';
/**
 * A reference.
 */
export default class Reference {
    index: IndexEntry[] | null;
    entries: number;
    id: number;
    flags: number;
    load(stream: BinaryStream, index: IndexEntry[]): void;
    /**
     * Get the entries this index entry references.
     */
    get(): EntryType | undefined;
    /**
     * Get the first entry this index entry references.
     */
    first(): SingleEntryType | undefined;
}
