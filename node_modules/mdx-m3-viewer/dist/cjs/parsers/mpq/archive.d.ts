import MpqBlockTable from './blocktable';
import MpqCrypto from './crypto';
import MpqFile from './file';
import MpqHashTable from './hashtable';
/**
 * MoPaQ archive (MPQ) version 0.
 */
export default class MpqArchive {
    headerOffset: number;
    sectorSize: number;
    c: MpqCrypto;
    hashTable: MpqHashTable;
    blockTable: MpqBlockTable;
    files: MpqFile[];
    readonly: boolean;
    constructor();
    /**
     * Load an existing archive.
     *
     * Note that this clears the archive from whatever it had in it before.
     */
    load(buffer: ArrayBuffer | Uint8Array, readonly?: boolean): void;
    /**
     * Save this archive.
     *
     * Returns null when...
     *
     *     1) The archive is in readonly mode.
     *     2) The offset of a file encrypted with FILE_OFFSET_ADJUSTED_KEY changed, and the file name is unknown.
     */
    save(): Uint8Array | null;
    /**
     * Some MPQs have empty memory chunks in them, left over from files that were deleted.
     * This function searches for such chunks, and removes them.
     *
     * Note that it is called automatically by save().
     *
     * Does nothing if the archive is in readonly mode.
     */
    saveMemory(): number;
    removeBlock(blockIndex: number): void;
    /**
     * Gets a list of the file names in the archive.
     *
     * Note that files loaded from an existing archive, without resolved names, will be named FileXXXXXXXX.
     */
    getFileNames(): string[];
    /**
     * Count the files with unresolved names.
     */
    countUnresolved(): number;
    /**
     * Given an iterable of file names, attempt to resolve the archive files with them.
     */
    applyListfile(listfile: Iterable<string>): void;
    /**
     * Adds a file to this archive.
     * If the file already exists, its buffer will be set.
     *
     * Does nothing if the archive is in readonly mode.
     */
    set(name: string, buffer: ArrayBuffer | Uint8Array | string): boolean;
    /**
     * Gets a file from this archive.
     * If the file doesn't exist, null is returned.
     */
    get(name: string): MpqFile | null;
    /**
     * Checks if a file exists.
     *
     * Prefer to use get() if you are going to use get() afterwards anyway.
     */
    has(name: string): boolean;
    /**
     * Deletes a file from this archive.
     *
     * Does nothing if...
     *
     *     1) The archive is in readonly mode.
     *     2) The file does not exist.
     */
    delete(name: string): boolean;
    /**
     * Renames a file.
     *
     * Does nothing if...
     *
     *     1) The archive is in readonly mode.
     *     2) The file does not exist.
     *
     * Note that this sets the current file's hash's status to being deleted, rather than removing it.
     * This is due to the way the search algorithm works.
     */
    rename(name: string, newName: string): boolean;
    /**
     * Resizes the hashtable to the nearest power of two equal to or bigger than the given size.
     *
     * Generally speaking, the bigger the hashtable is, the quicker insertions/searches are, at the cost of added memory.
     *
     * Does nothing if...
     *
     *     1) The archive is in readonly mode.
     *     2) The calculated size is smaller than the amount of files in the archive.
     *     3) Not all of the file names in the archive are resolved.
     */
    resizeHashtable(size: number): boolean;
}
