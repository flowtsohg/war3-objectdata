import MpqArchive from './archive';
import MpqBlock from './block';
import MpqCrypto from './crypto';
import MpqHash from './hash';
/**
 * A MPQ file.
 */
export default class MpqFile {
    archive: MpqArchive;
    c: MpqCrypto;
    name: string;
    nameResolved: boolean;
    hash: MpqHash;
    block: MpqBlock;
    rawBuffer: Uint8Array | null;
    buffer: Uint8Array | null;
    constructor(archive: MpqArchive, hash: MpqHash, block: MpqBlock, rawBuffer: Uint8Array | null, buffer: Uint8Array | null);
    /**
     * Gets this file's data as a Uint8Array.
     *
     * An exception will be thrown if the file needs to be decoded, and decoding fails.
     */
    bytes(): Uint8Array;
    /**
     * Gets this file's data as an ArrayBuffer.
     *
     * An exception will be thrown if the file needs to be decoded, and decoding fails.
     */
    arrayBuffer(): ArrayBuffer;
    /**
     * Gets this file's data as a UTF8 string.
     *
     * An exception will be thrown if the file needs to be decoded, and decoding fails.
     */
    text(): string;
    /**
     * Changes the buffer of this file.
     *
     * Does nothing if the archive is in readonly mode.
     */
    set(buffer: Uint8Array): boolean;
    /**
     * Deletes this file.
     *
     * Using the file after it was deleted will result in undefined behavior.
     *
     * Does nothing if the archive is in readonly mode.
     */
    delete(): boolean;
    /**
     * Renames this file.
     *
     * Note that this sets the current file's hash's status to being deleted, rather than removing it.
     * This is due to the way the search algorithm works.
     *
     * Does nothing if the archive is in readonly mode.
     */
    rename(newName: string): boolean;
    /**
     * Decode this file.
     */
    decode(): void;
    decompressSector(bytes: Uint8Array, decompressedSize: number): Uint8Array;
    /**
     * Encode this file.
     * Archives (maps or generic MPQs) are stored uncompressed in one chunk.
     * Other files are always stored in sectors, except when a file is smaller than a sector.
     * Sectors themselves are always compressed, except when the result is smaller than the uncompressed data.
     */
    encode(): void;
    /**
     * Decrypt this file and encrypt it back, with a new offset in the archive.
     * This is used for files that use FILE_OFFSET_ADJUSTED_KEY, which are encrypted with a key that depends on their offset.
     */
    reEncrypt(offset: number): boolean;
    /**
     * The offset of the file has been recalculated.
     * If the offset is different, and this file uses FILE_OFFSET_ADJUSTED_KEY encryption, it must be re-encrypted with the new offset.
     */
    offsetChanged(offset: number): boolean;
}
