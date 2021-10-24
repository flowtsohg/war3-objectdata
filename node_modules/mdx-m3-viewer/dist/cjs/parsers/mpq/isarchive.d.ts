/**
 * Search for the MPQ header - MPQ\x1A.
 * The header can be on any 512 bytes boundry offset.
 */
export declare function searchHeader(bytes: Uint8Array): number;
/**
 * Checks whether the given buffer is either a Warcraft 3 map or otherwise a generic MPQ archive.
 */
export declare function isArchive(bytes: Uint8Array): boolean;
